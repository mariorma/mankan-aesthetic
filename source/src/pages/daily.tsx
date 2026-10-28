import { useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { LINE_KEYS, shortDate, useDaily, weekday, type DailyEntry, type Line } from "../data/daily";
import { LINES } from "../data/lines";
import { useMarks } from "../data/marks";
import { Held } from "../ui/Held";
import { CopyMarks, HiddenDrawer } from "../ui/MarkPanel";
import { Rate } from "../ui/Rate";
import { LoadState, mount, Shell } from "../ui/Shell";

type Filter = "all" | Line | "good";

const PAGE_DAYS = 7;

function readFilter(): Filter {
  const value = new URLSearchParams(location.search).get("line");
  if (value === "good" || (value && LINE_KEYS.includes(value as Line))) return value as Filter;
  return "all";
}

function writeFilter(filter: Filter) {
  const url = new URL(location.href);
  if (filter === "all") url.searchParams.delete("line");
  else url.searchParams.set("line", filter);
  history.replaceState(null, "", url);
}

function withTransition(update: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    doc.startViewTransition(() => flushSync(update));
  } else {
    update();
  }
}

function Daily() {
  const daily = useDaily();
  return (
    <Shell page="daily" watch={daily.status}>
      {daily.status === "ready" ? <DailyBody entries={daily.entries} latest={daily.latest} problems={daily.problems} /> : <LoadState state={daily} />}
    </Shell>
  );
}

function DailyBody({ entries, latest, problems }: { entries: DailyEntry[]; latest: string; problems: string[] }) {
  const { markOf } = useMarks();
  const [filter, setFilter] = useState<Filter>(readFilter);
  const [days, setDays] = useState(PAGE_DAYS);

  const shown = useMemo(
    () =>
      entries.filter((entry) => {
        const mark = markOf(entry.id);
        if (mark === "差") return false;
        if (filter === "good") return mark === "好";
        return filter === "all" || entry.line === filter;
      }),
    [entries, filter, markOf],
  );

  const groups = useMemo(() => {
    const map = new Map<string, DailyEntry[]>();
    for (const entry of shown) {
      const list = map.get(entry.date) ?? [];
      list.push(entry);
      map.set(entry.date, list);
    }
    return [...map.entries()];
  }, [shown]);

  const counts = useMemo(() => {
    const visible = entries.filter((entry) => markOf(entry.id) !== "差");
    const out: Record<Filter, number> = { all: visible.length, taste: 0, repression: 0, tension: 0, beauty: 0, good: 0 };
    for (const entry of visible) {
      out[entry.line] += 1;
      if (markOf(entry.id) === "好") out.good += 1;
    }
    return out;
  }, [entries, markOf]);

  const jumped = useRef(false);
  useEffect(() => {
    if (jumped.current) return;
    const id = decodeURIComponent(location.hash.slice(1));
    const index = id ? groups.findIndex(([, list]) => list.some((entry) => entry.id === id)) : -1;
    if (index >= days) {
      setDays(index + 1);
      return;
    }
    jumped.current = true;
    const node = index >= 0 ? document.getElementById(id) : null;
    if (!node) return;
    node.classList.add("is-target");
    requestAnimationFrame(() => node.scrollIntoView({ block: "center" }));
  }, [days, groups]);

  const choose = (next: Filter) =>
    withTransition(() => {
      setFilter(next);
      setDays(PAGE_DAYS);
      writeFilter(next);
    });

  const options: { key: Filter; label: string }[] = [
    { key: "all", label: "全部" },
    ...LINE_KEYS.map((line) => ({ key: line as Filter, label: LINES[line].name })),
    { key: "good", label: "只看好" },
  ];

  return (
    <>
      <header className="daily-head" data-tone="paper" data-room-label="日更">
        <p className="daily-kicker">敛色 · 日更</p>
        <h1 className="daily-title">
          日更 <i>Daily</i>
        </h1>
        <p className="daily-lede">
          每天往上加一层：一张图，一句话，写清谁出的。看完标<b data-mark="好">好</b>、中、<b data-mark="差">差</b>——差的马上从全站撤下，好的更常上首页。
        </p>
        <p className="daily-latest">
          最后更新 <time dateTime={latest}>{latest}</time> {latest && weekday(latest)} · 共 {entries.length} 条
        </p>
        {problems.length > 0 && (
          <details className="daily-problems">
            <summary>数据里有 {problems.length} 处问题，已跳过</summary>
            <ul>
              {problems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </details>
        )}
      </header>
      <nav className="filters" aria-label="按线筛选">
        {options.map((option) => (
          <button
            key={option.key}
            type="button"
            className="chip"
            data-line={option.key}
            aria-pressed={filter === option.key}
            onClick={() => choose(option.key)}
          >
            {option.label}
            <span>{counts[option.key]}</span>
          </button>
        ))}
        <a className="chip is-link" href="#marks">
          打分与已下架
        </a>
      </nav>
      <div className="days" data-tone="paper">
        {groups.length === 0 && <p className="days-empty">{filter === "good" ? "还没有标成好的。" : "这一线还没有内容。"}</p>}
        {groups.slice(0, days).map(([date, list]) => (
          <section key={date} className="day" aria-label={date}>
            <div className="day-mark">
              <p className="day-date">{shortDate(date)}</p>
              <p className="day-week">
                {date.slice(0, 4)} · {weekday(date)}
              </p>
              <p className="day-count">{list.length} 条</p>
              {date === latest && <p className="day-today">今日</p>}
            </div>
            <div className="day-entries">
              {list.map((entry) => (
                <EntryCard key={entry.id} entry={entry} />
              ))}
            </div>
          </section>
        ))}
        {groups.length > days && (
          <div className="more-days">
            <button type="button" className="ghost-btn" onClick={() => setDays((d) => d + PAGE_DAYS)}>
              再往前 {Math.min(PAGE_DAYS, groups.length - days)} 天
            </button>
          </div>
        )}
      </div>
      <section className="daily-marks" id="marks" data-tone="paper" aria-label="打分">
        <h2>打分</h2>
        <CopyMarks entries={entries} />
        <HiddenDrawer entries={entries} />
      </section>
    </>
  );
}

function EntryCard({ entry }: { entry: DailyEntry }) {
  return (
    <article id={entry.id} className={entry.image ? "entry" : "entry is-text"} data-line={entry.line}>
      {entry.image && <Held entry={entry} sizes="(min-width: 1100px) 34vw, (min-width: 700px) 45vw, 100vw" />}
      {entry.more && (
        <div className="entry-more">
          {entry.more.map((image) => (
            <Held key={image.file} entry={entry} image={image} ratio={1} sizes="120px" />
          ))}
        </div>
      )}
      <div className="entry-copy">
        <p className="line-tag" data-line={entry.line}>
          {LINES[entry.line].name}
          {entry.pick && <b>精选</b>}
        </p>
        <h3>{entry.title}</h3>
        {entry.note && <p className="judgment">{entry.note}</p>}
        {entry.why && <p className="why">{entry.why}</p>}
        {entry.body?.map((paragraph) => (
          <p key={paragraph} className="body">
            {paragraph}
          </p>
        ))}
        {entry.steal && (
          <p className="steal">
            <span>可偷</span>
            {entry.steal}
          </p>
        )}
        <p className="entry-foot">
          {entry.source && <span>{entry.source}</span>}
          {entry.href && (
            <a href={entry.href} target="_blank" rel="noreferrer">
              原帖 ↗
            </a>
          )}
        </p>
        <Rate entry={entry} />
      </div>
    </article>
  );
}

mount(<Daily />);
