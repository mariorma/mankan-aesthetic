export type PageId = "home" | "log" | "missing";

const depth: Record<PageId, 0 | 1> = {
  home: 0,
  log: 1,
  missing: 0,
};

export function pageHref(from: PageId, to: "home" | "log"): string {
  const prefix = depth[from] === 0 ? "./" : "../";
  return to === "home" ? prefix : `${prefix}${to}/`;
}

export function assetHref(from: PageId, file: string): string {
  const prefix = depth[from] === 0 ? "./" : "../";
  return `${prefix}images/${file}`;
}
