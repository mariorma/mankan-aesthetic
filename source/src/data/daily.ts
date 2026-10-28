import { useEffect, useState } from "react";

export type Line = "taste" | "repression" | "tension" | "beauty";

export type DailyImage = {
  file: string;
  alt: string;
  width?: number;
  height?: number;
  /** 图的出处和条目原帖不同时才写。 */
  href?: string;
};

export type DailyEntry = {
  id: string;
  date: string;
  line: Line;
  title: string;
  note?: string;
  why?: string;
  body?: string[];
  steal?: string;
  source?: string;
  href?: string;
  image?: DailyImage;
  more?: DailyImage[];
  pick?: boolean;
  off?: boolean;
};

type DailyDoc = {
  entries?: unknown;
  archives?: unknown;
};

export const LINE_KEYS: readonly Line[] = ["taste", "repression", "tension", "beauty"];

const DATE = /^\d{4}-\d{2}-\d{2}$/;

/** 首页在根目录，日更页在 daily/ 下一层。 */
export function siteBase(): string {
  return document.body.dataset.page === "daily" ? "../" : "./";
}

export function imageSrc(image: DailyImage): string {
  if (/^https?:\/\//.test(image.file)) return image.file;
  return `${siteBase()}images/${image.file}`;
}

export function imageHref(entry: DailyEntry, image?: DailyImage): string | undefined {
  return image?.href ?? entry.href;
}

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function num(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : undefined;
}

function toImage(raw: unknown): DailyImage | undefined {
  if (!raw || typeof raw !== "object") return undefined;
  const value = raw as Record<string, unknown>;
  const file = str(value.file);
  if (!file) return undefined;
  return {
    file,
    alt: str(value.alt) ?? "",
    width: num(value.width),
    height: num(value.height),
    href: str(value.href),
  };
}

/** 一条坏数据只跳过这一条，不让整页白屏。 */
export function normalize(raw: unknown, problems: string[], index: number): DailyEntry | null {
  if (!raw || typeof raw !== "object") {
    problems.push(`第 ${index + 1} 条不是对象`);
    return null;
  }
  const value = raw as Record<string, unknown>;
  const id = str(value.id);
  const date = str(value.date);
  const line = str(value.line) as Line | undefined;
  const title = str(value.title);
  const missing = [
    !id && "id",
    !(date && DATE.test(date)) && "date",
    !(line && LINE_KEYS.includes(line)) && "line",
    !title && "title",
  ].filter(Boolean);
  if (missing.length > 0 || !id || !date || !line || !title) {
    problems.push(`第 ${index + 1} 条（${id ?? title ?? "无 id"}）缺 ${missing.join("、")}`);
    return null;
  }
  const body = Array.isArray(value.body) ? value.body.map(str).filter((s): s is string => Boolean(s)) : undefined;
  const more = Array.isArray(value.more)
    ? value.more.map(toImage).filter((image): image is DailyImage => Boolean(image))
    : undefined;
  return {
    id,
    date,
    line,
    title,
    note: str(value.note),
    why: str(value.why),
    body: body && body.length > 0 ? body : undefined,
    steal: str(value.steal),
    source: str(value.source),
    href: str(value.href),
    image: toImage(value.image),
    more: more && more.length > 0 ? more : undefined,
    pick: value.pick === true,
    off: value.off === true,
  };
}

export type DailyState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; entries: DailyEntry[]; problems: string[]; latest: string };

async function fetchDoc(path: string): Promise<DailyDoc> {
  const response = await fetch(path, { cache: "no-cache" });
  if (!response.ok) throw new Error(`${path} 读不到（${response.status}）`);
  try {
    return (await response.json()) as DailyDoc;
  } catch {
    throw new Error(`${path} 不是合法的 JSON，多半是少了逗号或多了逗号`);
  }
}

async function load(): Promise<DailyState> {
  const base = `${siteBase()}content/`;
  const doc = await fetchDoc(`${base}daily.json`);
  const raws: unknown[] = Array.isArray(doc.entries) ? [...doc.entries] : [];
  const archives = Array.isArray(doc.archives) ? doc.archives.map(str).filter((s): s is string => Boolean(s)) : [];
  for (const name of archives) {
    const extra = await fetchDoc(`${base}${name}`);
    if (Array.isArray(extra.entries)) raws.push(...extra.entries);
  }
  const problems: string[] = [];
  const seen = new Set<string>();
  const entries: DailyEntry[] = [];
  raws.forEach((raw, index) => {
    const entry = normalize(raw, problems, index);
    if (!entry) return;
    if (seen.has(entry.id)) {
      problems.push(`id 重复：${entry.id}（只保留第一条）`);
      return;
    }
    seen.add(entry.id);
    if (!entry.off) entries.push(entry);
  });
  const order = new Map(entries.map((entry, index) => [entry.id, index]));
  entries.sort((a, b) => (a.date === b.date ? order.get(a.id)! - order.get(b.id)! : a.date < b.date ? 1 : -1));
  if (problems.length > 0) console.warn("[敛色] 日更数据有问题：\n" + problems.join("\n"));
  return { status: "ready", entries, problems, latest: entries[0]?.date ?? "" };
}

let pending: Promise<DailyState> | null = null;

export function useDaily(): DailyState {
  const [state, setState] = useState<DailyState>({ status: "loading" });
  useEffect(() => {
    let live = true;
    pending ??= load().catch((error: unknown) => ({
      status: "error" as const,
      message: error instanceof Error ? error.message : String(error),
    }));
    pending.then((next) => {
      if (live) setState(next);
    });
    return () => {
      live = false;
    };
  }, []);
  return state;
}

export function daysBetween(a: string, b: string): number {
  const ms = Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`);
  return Math.round(Math.abs(ms) / 86_400_000);
}

const WEEK = ["日", "一", "二", "三", "四", "五", "六"];

export function weekday(date: string): string {
  return `周${WEEK[new Date(`${date}T00:00:00Z`).getUTCDay()]}`;
}

export function shortDate(date: string): string {
  return `${date.slice(5, 7)}·${date.slice(8, 10)}`;
}

export type Video = { kind: "bilibili" | "youtube" | "vimeo"; src: string };

/** 只认官方播放页，嵌官方播放器。 */
export function videoOf(href?: string): Video | null {
  if (!href) return null;
  const bili = href.match(/bilibili\.com\/video\/(BV[\w]+)/i);
  if (bili) {
    return {
      kind: "bilibili",
      src: `https://player.bilibili.com/player.html?bvid=${bili[1]}&page=1&autoplay=1&danmaku=0&high_quality=1`,
    };
  }
  const yt = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return { kind: "youtube", src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0` };
  const vimeo = href.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return { kind: "vimeo", src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&dnt=1` };
  return null;
}
