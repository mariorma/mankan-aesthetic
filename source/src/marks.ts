/**
 * 好中差存在这台浏览器，不进仓库。
 * 裏：mankan-li-marks（首页精选 + 裏积累）。表积累：mankan-biao-marks。
 * 值只有「好」「中」「差」。没写过的当作中。
 *
 * 裏的 key 优先用条目 id。旧数据可能仍是图片文件名，读的时候认，点选时迁到 id。
 * 表的图录用 tasteLog.id；日课没单独 id 时用「日期::标题」。
 * 日课要改标题还不丢分，就在那条上写可选 markId。
 *
 * 日更（米娅）：例行更新前若这台浏览器开着慢看，读这两个 key；
 * 读不到就用页上「复制打分」的 JSON（biao / li / exportedAt）。
 * 差：从对应 log 数组撤出展示，图先留在 images/，并记一笔短标签（题、来源、气质），同类以后少推。
 * 好：记正向短标签。表侧多推同构图、色、刊面；裏侧多推同模特、同杂志气、同名单。
 * 中：不加权，不降权。不要把分数写进公开仓库，除非另有说明。
 */
import { beautyLog } from "./learning-log";
import type { Mark } from "./kit/controls";

export const LI_MARK_KEY = "mankan-li-marks";
export const BIAO_MARK_KEY = "mankan-biao-marks";

export type MarkMap = Record<string, Mark>;

export type ScoredPiece = {
  id: string;
  label: string;
  legacy?: readonly string[];
};

const marks = new Set<Mark>(["好", "中", "差"]);

export function parseMarks(raw: string | null): MarkMap {
  if (!raw) return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const saved: MarkMap = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === "string" && marks.has(value as Mark)) saved[key] = value as Mark;
    }
    return saved;
  } catch {
    return {};
  }
}

export function readMarkStore(key: string): MarkMap {
  try {
    return parseMarks(localStorage.getItem(key));
  } catch {
    return {};
  }
}

export function writeMarkStore(key: string, next: MarkMap) {
  try {
    localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // 记不住就只留在这一页，不打断翻看。
  }
}

export function markOf(saved: MarkMap, id: string, legacy: readonly string[] = []): Mark {
  const direct = saved[id];
  if (direct) return direct;
  for (const key of legacy) {
    const value = saved[key];
    if (value) return value;
  }
  return "中";
}

/** 写入 id，并丢掉这条上的旧文件名 key。别的 key 不动。 */
export function applyMark(saved: MarkMap, id: string, mark: Mark, legacy: readonly string[] = []): MarkMap {
  const next: MarkMap = { ...saved, [id]: mark };
  for (const key of legacy) {
    if (key !== id) delete next[key];
  }
  return next;
}

export function logItemMarkId(date: string, item: { heading: string; markId?: string }): string {
  const id = item.markId?.trim();
  return id ? id : `${date}::${item.heading}`;
}

export function liPieces(): ScoredPiece[] {
  return beautyLog.map((card) => ({
    id: card.id,
    label: `${card.date} · ${card.title}`,
    legacy: card.figure ? [card.figure.file] : [],
  }));
}

/** 复制出去时把还能对上的旧文件名折成 id。对不上的 key 原样留下。 */
export function canonicalize(saved: MarkMap, pieces: readonly ScoredPiece[]): MarkMap {
  const next: MarkMap = { ...saved };
  for (const piece of pieces) {
    const legacy = piece.legacy ?? [];
    if (next[piece.id]) {
      for (const key of legacy) if (key !== piece.id) delete next[key];
      continue;
    }
    for (const key of legacy) {
      const value = key !== piece.id ? next[key] : undefined;
      if (!value) continue;
      next[piece.id] = value;
      delete next[key];
      break;
    }
  }
  return next;
}

export function withOrphans(pieces: readonly ScoredPiece[], saved: MarkMap, reserved: readonly string[] = []): ScoredPiece[] {
  const known = new Set<string>(reserved);
  for (const piece of pieces) {
    known.add(piece.id);
    for (const key of piece.legacy ?? []) known.add(key);
  }
  const extras: ScoredPiece[] = [];
  for (const [key, value] of Object.entries(saved)) {
    if (value === "差" && !known.has(key)) extras.push({ id: key, label: key });
  }
  return extras.length ? [...pieces, ...extras] : [...pieces];
}

export function liRejectLines(saved: MarkMap): string[] {
  const lines: string[] = [];
  const seen = new Set<string>();
  for (const card of beautyLog) {
    const legacy = card.figure ? [card.figure.file] : [];
    seen.add(card.id);
    for (const key of legacy) seen.add(key);
    if (markOf(saved, card.id, legacy) !== "差") continue;
    const line = card.figure?.file ?? card.id;
    if (!lines.includes(line)) lines.push(line);
  }
  for (const [key, value] of Object.entries(saved)) {
    if (value === "差" && !seen.has(key)) lines.push(key);
  }
  return lines;
}

export function marksPayload(now = new Date()): { biao: MarkMap; li: MarkMap; exportedAt: string } {
  return {
    biao: readMarkStore(BIAO_MARK_KEY),
    li: canonicalize(readMarkStore(LI_MARK_KEY), liPieces()),
    exportedAt: now.toISOString(),
  };
}
