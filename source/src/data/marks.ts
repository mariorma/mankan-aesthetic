/**
 * 好中差只存在这台浏览器（localStorage），不进仓库。
 * 中是默认值，不存；只存好和差。
 * 第一次打开时，把旧站两个 key（mankan-li-marks / mankan-biao-marks）里的分按 legacyMarkIds 迁过来，旧 key 不删。
 */
import { useCallback, useSyncExternalStore } from "react";
import { legacyMarkIds } from "../legacy-marks";
import type { DailyEntry } from "./daily";

export type Mark = "好" | "中" | "差";
export type MarkMap = Record<string, Mark>;

export const MARK_KEY = "lianse-marks";
const LEGACY_KEYS = ["mankan-li-marks", "mankan-biao-marks"];
const VALID = new Set<string>(["好", "中", "差"]);

function parse(raw: string | null): MarkMap {
  if (!raw) return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    const out: MarkMap = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (typeof value === "string" && VALID.has(value) && value !== "中") out[key] = value as Mark;
    }
    return out;
  } catch {
    return {};
  }
}

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(next: MarkMap) {
  try {
    localStorage.setItem(MARK_KEY, JSON.stringify(next));
  } catch {
    // 无痕模式写不进去时，分只留在这一页。
  }
}

function migrate(): MarkMap {
  const out: MarkMap = {};
  for (const key of LEGACY_KEYS) {
    for (const [oldId, mark] of Object.entries(parse(read(key)))) {
      const id = legacyMarkIds[oldId] ?? oldId;
      if (!out[id]) out[id] = mark;
    }
  }
  return out;
}

let state: MarkMap = (() => {
  if (typeof window === "undefined") return {};
  const raw = read(MARK_KEY);
  if (raw !== null) return parse(raw);
  const migrated = migrate();
  write(migrated);
  return migrated;
})();

const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

if (typeof window !== "undefined") {
  window.addEventListener("storage", (event) => {
    if (event.key !== MARK_KEY) return;
    state = parse(event.newValue);
    emit();
  });
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function markOf(marks: MarkMap, id: string): Mark {
  return marks[id] ?? "中";
}

export function setMark(id: string, mark: Mark) {
  const next = { ...state };
  if (mark === "中") delete next[id];
  else next[id] = mark;
  state = next;
  write(next);
  emit();
}

export function useMarks() {
  const marks = useSyncExternalStore(
    subscribe,
    () => state,
    () => state,
  );
  const of = useCallback((id: string) => markOf(marks, id), [marks]);
  return { marks, markOf: of, setMark };
}

type Row = { id: string; date: string; line: string; title: string; source?: string };

/** 「复制打分」的内容。贴给日更维护者，用来清理差评、调整搜集方向。 */
export function marksPayload(entries: readonly DailyEntry[], marks: MarkMap, now = new Date()) {
  const byId = new Map(entries.map((entry) => [entry.id, entry]));
  const row = (id: string): Row => {
    const entry = byId.get(id)!;
    return { id, date: entry.date, line: entry.line, title: entry.title, source: entry.source };
  };
  const ids = Object.keys(marks);
  return {
    site: "敛色",
    exportedAt: now.toISOString(),
    marks,
    good: ids.filter((id) => marks[id] === "好" && byId.has(id)).map(row),
    bad: ids.filter((id) => marks[id] === "差" && byId.has(id)).map(row),
    notInDaily: ids.filter((id) => !byId.has(id)),
  };
}
