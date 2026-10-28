import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { imageSrc, shortDate, useDaily, weekday, type DailyEntry, type Line } from "../data/daily";
import { LINES } from "../data/lines";
import { useMarks } from "../data/marks";
import { hash01, sample, weightOf } from "../data/weights";
import { Lamp, Magnetic, ProgressiveBlur, ScrollWords } from "../ui/effects";
import { Held } from "../ui/Held";
import { HeroStage } from "../ui/HeroStage";
import { CopyMarks, HiddenDrawer, StackButton } from "../ui/MarkPanel";
import { Rate } from "../ui/Rate";
import { useReducedMotion } from "../ui/reduced";
import { LoadState, mount, Shell } from "../ui/Shell";
import { TextEffect } from "../ui/text-effect";

// 首页不放自己的素材：所有图和字都从 content/daily.json 抽。
// 封面第一张固定取最新一天里权重最高的一条，所以加一条日更，首页封面立刻换成它。

type Seeds = Record<"hero" | Line, number>;

function withTransition(update: () => void) {
  const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
  if (doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    doc.startViewTransition(() => flushSync(update));
  } else {
    update();
  }
}

function dailyHref(entry?: DailyEntry) {
  return entry ? `./daily/#${entry.id}` : "./daily/";
}

function Meta({ entry }: { entry: DailyEntry }) {
  return (
    <p className="meta">
      <time dateTime={entry.date}>{shortDate(entry.date)}</time>
      {entry.source && <span>{entry.source}</span>}
    </p>
  );
}

function Home() {
  const daily = useDaily();
  return (
    <Shell page="home" watch={daily.status}>
      {daily.status === "ready" ? <HomeBody entries={daily.entries} latest={daily.latest} /> : <LoadState state={daily} />}
    </Shell>
  );
}

function HomeBody({ entries, latest }: { entries: DailyEntry[]; latest: string }) {
  const { markOf } = useMarks();
  const [seeds, setSeeds] = useState<Seeds>(() => {
    const base = Math.floor(Math.random() * 1e9);
    return { hero: base, taste: base + 1, repression: base + 2, tension: base + 3, beauty: base + 4 };
  });
  const shuffle = (key: keyof Seeds) => withTransition(() => setSeeds((s) => ({ ...s, [key]: s[key] + 7919 })));

  const visible = useMemo(() => entries.filter((entry) => markOf(entry.id) !== "差"), [entries, markOf]);
  const weight = (entry: DailyEntry) => weightOf(entry, markOf(entry.id), latest);
  const pick = (line: Line, count: number, needImage = true) =>
    sample(
      visible.filter((entry) => entry.line === line && (!needImage || entry.image)),
      count,
      weight,
      (entry) => hash01(`${seeds[line]}:${entry.id}`),
    );

  const withImage = visible.filter((entry) => entry.image);
  const latestPool = withImage.filter((entry) => entry.date === latest);
  const editorial = latestPool.filter((entry) => entry.line !== "beauty");
  const leadPool = editorial.length > 0 ? editorial : latestPool;
  const lead = [...leadPool].sort((a, b) => weight(b) - weight(a))[0];
  const heroRest = sample(
    withImage.filter((entry) => entry.line !== "beauty" && entry !== lead),
    5,
    weight,
    (entry) => hash01(`${seeds.hero}:${entry.id}`),
  );
  const slides = lead ? [lead, ...heroRest] : heroRest;

  const counts = Object.fromEntries(
    (Object.keys(LINES) as Line[]).map((line) => [line, visible.filter((entry) => entry.line === line).length]),
  ) as Record<Line, number>;
  const issueNo = new Set(entries.map((entry) => entry.date)).size;
  const today = visible.filter((entry) => entry.date === latest);

  return (
    <>
      <Hero slides={slides} latest={latest} issueNo={issueNo} onShuffle={() => shuffle("hero")} />
      <TodayStrip entries={today} latest={latest} />
      <div className="band band-night-paper" data-tone="paper" data-room-label="01 品味" aria-hidden="true" />
      <TasteRoom
        items={pick("taste", 6)}
        quotes={sample(
          visible.filter((entry) => entry.line === "taste" && entry.steal),
          4,
          weight,
          (entry) => hash01(`${seeds.taste}:q:${entry.id}`),
        )}
        total={counts.taste}
        onShuffle={() => shuffle("taste")}
      />
      <div className="band band-paper-teal" data-tone="teal" data-room-label="02 压抑" aria-hidden="true" />
      <RestraintRoom items={pick("repression", 3)} total={counts.repression} onShuffle={() => shuffle("repression")} />
      <div className="band band-teal-night" data-tone="night" data-room-label="03 一人" aria-hidden="true" />
      <SoloRoom items={pick("tension", 5)} total={counts.tension} onShuffle={() => shuffle("tension")} />
      <div className="band band-night-warm" data-tone="warm" data-room-label="04 美人" aria-hidden="true" />
      <PortraitRoom items={pick("beauty", 6)} total={counts.beauty} onShuffle={() => shuffle("beauty")} />
      <Outro entries={entries} latest={latest} counts={counts} />
    </>
  );
}

function Hero({
  slides,
  latest,
  issueNo,
  onShuffle,
}: {
  slides: DailyEntry[];
  latest: string;
  issueNo: number;
  onShuffle: () => void;
}) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[Math.min(index, slides.length - 1)];
  const signature = slides.map((entry) => entry.id).join("|");

  useEffect(() => setIndex(0), [signature]);
  useEffect(() => {
    if (reduced || paused || slides.length < 2) return;
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), 9000);
    return () => window.clearTimeout(timer);
  }, [index, paused, reduced, slides.length]);

  return (
    <section
      className="hero"
      data-tone="night"
      aria-label="封面"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <HeroStage slides={slides} index={Math.min(index, slides.length - 1)} />
      <div className="hero-copy">
        <div className="hero-mast">
          <h1 className="hero-brand" aria-label="敛色">
            <span>敛</span>
            <span>色</span>
          </h1>
          <div className="hero-issue">
            <p className="hero-en">Held Colour</p>
            <p>
              No.{String(issueNo).padStart(2, "0")} · {latest} {latest && weekday(latest)}
            </p>
            <p className="hero-tag">颜色收住，目光不躲。</p>
          </div>
        </div>
        {slide && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={slide.id}
              className="hero-slide"
              initial={reduced ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduced ? undefined : { opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="line-tag" data-line={slide.line}>
                {slide.date === latest && <b>今日</b>}
                {LINES[slide.line].no} {LINES[slide.line].name} · {LINES[slide.line].en}
              </p>
              <h2 className="hero-title">{slide.title}</h2>
              {slide.note && <p className="hero-note">{slide.note}</p>}
              <Meta entry={slide} />
              <div className="hero-actions">
                <button type="button" className="ghost-btn" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
                  下一张 →
                </button>
                <button type="button" className="ghost-btn" onClick={onShuffle}>
                  换一批
                </button>
                <a className="ghost-btn" href={dailyHref(slide)}>
                  在日更里看
                </a>
              </div>
              <Rate entry={slide} compact />
            </motion.article>
          </AnimatePresence>
        )}
        <ol className="hero-dots" aria-label="封面轮换">
          {slides.map((entry, i) => (
            <li key={entry.id}>
              <button
                type="button"
                aria-label={`第 ${i + 1} 张：${entry.title}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => setIndex(i)}
              >
                <span className={i === index && !paused && !reduced ? "is-running" : undefined} />
              </button>
            </li>
          ))}
        </ol>
      </div>
      <p className="hero-hint" aria-hidden="true">
        <span className="hint-wide">移动鼠标，像举着一盏灯</span>
        <span className="hint-narrow">往下</span>
      </p>
      <ProgressiveBlur className="hero-blur" direction="bottom" />
    </section>
  );
}

function TodayStrip({ entries, latest }: { entries: DailyEntry[]; latest: string }) {
  if (entries.length === 0) return null;
  return (
    <section className="today" data-tone="night" data-room-label="今日" aria-label="今日更新">
      <header className="today-head">
        <p className="today-date">
          <span>{shortDate(latest)}</span> {weekday(latest)}
        </p>
        <p>
          今日更新 <b>{entries.length}</b> 条 · 首页的图和字都从日更里抽，好评更常出现，差评立刻撤下。
        </p>
        <a className="ghost-btn" href="./daily/">
          全部日更 →
        </a>
      </header>
      <ol className="today-row">
        {entries.map((entry) => (
          <li key={entry.id} className="today-item" data-line={entry.line}>
            <a href={dailyHref(entry)}>
              {entry.image ? (
                <Held entry={entry} className="today-thumb" ratio={4 / 5} link={false} />
              ) : (
                <span className="today-text">{entry.note ?? entry.title}</span>
              )}
              <span className="today-line">{LINES[entry.line].name}</span>
              <span className="today-title">{entry.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

function RoomHead({
  line,
  total,
  shown,
  onShuffle,
}: {
  line: Line;
  total: number;
  shown: number;
  onShuffle: () => void;
}) {
  const info = LINES[line];
  const reduced = useReducedMotion();
  return (
    <header className="room-head">
      <p className="room-no" aria-hidden="true">
        {info.no}
      </p>
      <div className="room-name">
        {reduced ? (
          <h2>{info.name}</h2>
        ) : (
          <TextEffect as="h2" per="char" preset="fade-in-blur" speedReveal={0.5} speedSegment={0.4} trigger>
            {info.name}
          </TextEffect>
        )}
        <p className="room-en">{info.en}</p>
      </div>
      <ScrollWords className="room-blurb" text={info.blurb} />
      <div className="room-tools">
        <p>
          共 {total} 条 · 这次抽 {shown} 条
        </p>
        <button type="button" className="ghost-btn" onClick={onShuffle}>
          换一批
        </button>
      </div>
    </header>
  );
}

function TasteRoom({
  items,
  quotes,
  total,
  onShuffle,
}: {
  items: DailyEntry[];
  quotes: DailyEntry[];
  total: number;
  onShuffle: () => void;
}) {
  const [lead, ...rest] = items;
  return (
    <section className="room room-taste" data-tone="paper" data-room-label="01 品味" id="taste">
      <RoomHead line="taste" total={total} shown={items.length + quotes.length} onShuffle={onShuffle} />
      {lead && (
        <div className="taste-grid">
          <article className="taste-lead" style={{ viewTransitionName: "taste-lead" } as CSSProperties}>
            <Held entry={lead} lens sizes="(min-width: 900px) 58vw, 100vw" />
            <div className="taste-lead-copy">
              <Meta entry={lead} />
              <h3>{lead.title}</h3>
              {lead.note && <p className="judgment">{lead.note}</p>}
              {lead.steal && (
                <p className="steal">
                  <span>可偷</span>
                  {lead.steal}
                </p>
              )}
              <p className="lens-hint">图上有放大镜：凑近看，颜色才回来。</p>
              <Rate entry={lead} compact />
            </div>
          </article>
          {rest.map((entry, i) => (
            <article key={entry.id} className={`taste-card is-${i}`} style={{ viewTransitionName: `taste-${i}` } as CSSProperties}>
              <Held entry={entry} sizes="(min-width: 900px) 25vw, 50vw" />
              <Meta entry={entry} />
              <h3>{entry.title}</h3>
              {entry.note && <p>{entry.note}</p>}
              <Rate entry={entry} compact />
            </article>
          ))}
          {quotes.length > 0 && (
            <aside className="taste-quotes" aria-label="可偷的一句">
              <p className="taste-quotes-head">可偷的一句</p>
              {quotes.map((entry) => (
                <blockquote key={entry.id}>
                  <p>{entry.steal}</p>
                  <footer>
                    <a href={dailyHref(entry)}>{entry.title}</a>
                  </footer>
                </blockquote>
              ))}
            </aside>
          )}
        </div>
      )}
    </section>
  );
}

function RestraintRoom({ items, total, onShuffle }: { items: DailyEntry[]; total: number; onShuffle: () => void }) {
  return (
    <section className="room room-restraint" data-tone="teal" data-room-label="02 压抑" id="restraint">
      <Lamp>
        <RoomHead line="repression" total={total} shown={items.length} onShuffle={onShuffle} />
      </Lamp>
      <div className="hangings">
        {items.map((entry, i) => (
          <article key={entry.id} className={i % 2 ? "hanging is-flip" : "hanging"} style={{ viewTransitionName: `hang-${i}` } as CSSProperties}>
            <div className="hanging-frame">
              <Held entry={entry} slow sizes="(min-width: 900px) 52vw, 100vw" />
            </div>
            <div className="placard">
              <p className="placard-no">
                {LINES.repression.no}.{i + 1}
              </p>
              <h3>{entry.title}</h3>
              <Meta entry={entry} />
              {entry.note && <p className="judgment">{entry.note}</p>}
              {entry.why && <p className="why">{entry.why}</p>}
              {entry.steal && (
                <p className="steal">
                  <span>可偷</span>
                  {entry.steal}
                </p>
              )}
              <Rate entry={entry} compact />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SoloRoom({ items, total, onShuffle }: { items: DailyEntry[]; total: number; onShuffle: () => void }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const signature = items.map((entry) => entry.id).join("|");
  useEffect(() => setActive(0), [signature]);
  const entry = items[Math.min(active, items.length - 1)];
  if (!entry?.image) {
    return (
      <section className="room room-solo" data-tone="night" data-room-label="03 一人" id="solo">
        <RoomHead line="tension" total={total} shown={0} onShuffle={onShuffle} />
      </section>
    );
  }
  return (
    <section className="room room-solo" data-tone="night" data-room-label="03 一人" id="solo">
      <RoomHead line="tension" total={total} shown={items.length} onShuffle={onShuffle} />
      <div className="solo">
        <Magnetic className="solo-magnet">
          <div
            className="solo-portrait"
            style={{ "--r": entry.image.width && entry.image.height ? entry.image.width / entry.image.height : 0.8 } as CSSProperties}
            onPointerMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              event.currentTarget.style.setProperty("--x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
              event.currentTarget.style.setProperty("--y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
              event.currentTarget.dataset.lit = "true";
            }}
            onPointerLeave={(event) => {
              delete event.currentTarget.dataset.lit;
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={entry.id}
                className="solo-layers"
                initial={reduced ? false : { opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Held entry={entry} className="solo-base" sizes="(min-width: 900px) 40vw, 100vw" />
                <div
                  className="solo-lit"
                  style={{ backgroundImage: `url("${imageSrc(entry.image)}")` }}
                  aria-hidden="true"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </Magnetic>
        <div className="solo-copy">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={entry.id}
              initial={reduced ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -12 }}
              transition={{ duration: 0.6 }}
            >
              <Meta entry={entry} />
              <h3 className="solo-title">{entry.title}</h3>
              {entry.note && <p className="judgment">{entry.note}</p>}
              {entry.why && <p className="why">{entry.why}</p>}
              {entry.steal && (
                <p className="steal">
                  <span>可偷</span>
                  {entry.steal}
                </p>
              )}
              <Rate entry={entry} compact />
            </motion.div>
          </AnimatePresence>
          <ol className="solo-index" aria-label="一人 · 目录">
            {items.map((item, i) => (
              <li key={item.id}>
                <button type="button" aria-current={i === active ? "true" : undefined} onClick={() => setActive(i)}>
                  <span className="solo-index-no">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item.title}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Focus Cards — after Aceternity UI · Focus Cards https://ui.aceternity.com/components/focus-cards */
function PortraitRoom({ items, total, onShuffle }: { items: DailyEntry[]; total: number; onShuffle: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="room room-portraits" data-tone="warm" data-room-label="04 美人" id="portraits">
      <RoomHead line="beauty" total={total} shown={items.length} onShuffle={onShuffle} />
      <div className="focus-grid" onPointerLeave={() => setHovered(null)}>
        {items.map((entry, i) => (
          <article
            key={entry.id}
            className={hovered !== null && hovered !== i ? "focus-card is-dim" : "focus-card"}
            onPointerEnter={() => setHovered(i)}
            style={{ viewTransitionName: `portrait-${i}` } as CSSProperties}
          >
            <Held entry={entry} ratio={4 / 5} sizes="(min-width: 900px) 30vw, 50vw">
              <div className="focus-veil" aria-hidden="true">
                <p>{entry.title}</p>
              </div>
            </Held>
            <div className="focus-copy">
              <h3>
                {entry.pick && <span className="pick">精选</span>}
                {entry.title}
              </h3>
              {entry.note && <p>{entry.note}</p>}
              <Meta entry={entry} />
              <Rate entry={entry} compact />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Outro({ entries, latest, counts }: { entries: DailyEntry[]; latest: string; counts: Record<Line, number> }) {
  return (
    <section className="outro" data-tone="night" data-room-label="日更">
      <div className="outro-inner">
        <p className="outro-kicker">日更 · Daily</p>
        <h2 className="outro-title">每天往上加一层。</h2>
        <p className="outro-copy">
          最后更新 {latest}。现在一共 {entries.length} 条：
          {(Object.keys(LINES) as Line[]).map((line) => (
            <span key={line} className="outro-count" data-line={line}>
              {LINES[line].name} {counts[line]}
            </span>
          ))}
        </p>
        <div className="outro-actions">
          <StackButton href="./daily/">去日更</StackButton>
        </div>
        <div className="outro-marks">
          <CopyMarks entries={entries} />
          <HiddenDrawer entries={entries} id="hidden-home" />
        </div>
      </div>
    </section>
  );
}

mount(<Home />);
