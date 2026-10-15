export type PageId = "home" | "entries" | "notes" | "archive" | "log" | "about" | "missing";

const depth: Record<PageId, 0 | 1> = {
  home: 0,
  entries: 1,
  notes: 1,
  archive: 1,
  log: 1,
  about: 1,
  missing: 0,
};

export function pageHref(
  from: PageId,
  to: "home" | "entries" | "notes" | "archive" | "log" | "about",
): string {
  const prefix = depth[from] === 0 ? "./" : "../";
  return to === "home" ? prefix : `${prefix}${to}/`;
}

export function entryHref(from: PageId, id: string): string {
  return `${pageHref(from, "entries")}#${id}`;
}

export function assetHref(from: PageId, file: string): string {
  const prefix = depth[from] === 0 ? "./" : "../";
  return `${prefix}images/${file}`;
}
