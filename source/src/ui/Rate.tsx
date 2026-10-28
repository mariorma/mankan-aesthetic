/**
 * 好中差。手感取自 Uiverse 的单选点（gharsh11032000 / moody-dog-23，MIT），换成本站的琥珀和骨色。
 * 标「差」立刻从展示层撤下，并给一个「撤销」。
 */
import type { DailyEntry } from "../data/daily";
import { useMarks, type Mark } from "../data/marks";
import { toast } from "./toast";

const OPTIONS: Mark[] = ["好", "中", "差"];

export function Rate({ entry, compact = false }: { entry: DailyEntry; compact?: boolean }) {
  const { markOf, setMark } = useMarks();
  const value = markOf(entry.id);

  function choose(next: Mark) {
    if (next === value) return;
    const before = value;
    setMark(entry.id, next);
    if (next === "差") {
      toast(`已下架「${entry.title}」`, { label: "撤销", run: () => setMark(entry.id, before) });
    } else if (next === "好") {
      toast(`记下了：「${entry.title}」更常上首页`, undefined, 2600);
    }
  }

  return (
    <div className={compact ? "rate is-compact" : "rate"} role="radiogroup" aria-label={`给「${entry.title}」打分`}>
      {OPTIONS.map((mark) => (
        <label key={mark} className="rate-opt" data-mark={mark}>
          <input
            type="radio"
            name={`rate-${entry.id}`}
            value={mark}
            checked={value === mark}
            onChange={() => choose(mark)}
          />
          <span className="rate-dot" aria-hidden="true" />
          <span className="rate-label">{mark}</span>
        </label>
      ))}
    </div>
  );
}
