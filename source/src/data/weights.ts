import { daysBetween, type DailyEntry } from "./daily";
import type { Mark } from "./marks";

const MARK_WEIGHT: Record<Mark, number> = { 好: 4, 中: 1, 差: 0 };

/**
 * 首页抽样权重。无封面或差＝0（不上）；好是中的 4 倍。
 * 最新一天 ×3，两天内 ×1.8，一周内 ×1.2；`pick: true` 再 ×2。
 */
export function weightOf(entry: DailyEntry, mark: Mark, latest: string): number {
  if (entry.off || !entry.image) return 0;
  let weight = MARK_WEIGHT[mark];
  if (weight === 0) return 0;
  const age = latest ? daysBetween(entry.date, latest) : 99;
  weight *= age === 0 ? 3 : age <= 2 ? 1.8 : age <= 7 ? 1.2 : 1;
  if (entry.pick) weight *= 2;
  return weight;
}

/** 字符串 → [0,1) 的稳定随机数（FNV-1a）。同一个种子下，每条的抽签结果固定。 */
export function hash01(text: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  h ^= h >>> 15;
  h = Math.imul(h, 0x2c1b3c6d);
  h ^= h >>> 12;
  return ((h >>> 0) % 1_000_003) / 1_000_003;
}

/**
 * 不放回加权抽样（Efraimidis–Spirakis）：每条抽一个 u^(1/w)，取最大的前几条。
 * u 由 rand(item) 给出；用 hash01(种子+id) 时，改一条的分只影响这一条的去留，别的格子不跳。
 */
export function sample<T>(items: readonly T[], count: number, weight: (item: T) => number, rand: (item: T) => number): T[] {
  return items
    .map((item) => {
      const w = weight(item);
      return { item, key: w > 0 ? Math.pow(Math.max(rand(item), 1e-9), 1 / w) : -1 };
    })
    .filter((row) => row.key >= 0)
    .sort((a, b) => b.key - a.key)
    .slice(0, count)
    .map((row) => row.item);
}
