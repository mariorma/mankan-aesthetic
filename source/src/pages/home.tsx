import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import { imageSrc, shortDate, useDaily, weekday, type DailyEntry, type Line } from "../data/daily";
import { useMarks } from "../data/marks";
import { hash01, sample, weightOf } from "../data/weights";
import { Lamp, Magnetic, ProgressiveBlur } from "../ui/effects";
import { Held } from "../ui/Held";
import { HeroStage } from "../ui/HeroStage";
import { StackButton } from "../ui/MarkPanel";
import { useReducedMotion } from "../ui/reduced";
import { LoadState, mount, Shell } from "../ui/Shell";

// 首页是展览墙：图从 content/daily.json 抽，不写线名，也不打分。
// 权重仍读这台浏览器里的好／差（好易出、差不出）。封面第一张仍是最新一天里权重最高的一条。

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

  const visible = useMemo(
    () => entries.filter((entry) => entry.image && markOf(entry.id) !== "差"),
    [entries, markOf],
  );
  const weight = (entry: DailyEntry) => weightOf(entry, markOf(entry.id), latest);
  const pick = (line: Line, count: number) =>
    sample(
      visible.filter((entry) => entry.line === line),
      count,
      weight,
      (entry) => hash01(`${seeds[line]}:${entry.id}`),
    );

  const latestPool = visible.filter((entry) => entry.date === latest);
  const editorial = latestPool.filter((entry) => entry.line !== "beauty");
  const leadPool = editorial.length > 0 ? editorial : latestPool;
  const lead = [...leadPool].sort((a, b) => weight(b) - weight(a))[0];
  const heroRest = sample(
    visible.filter((entry) => entry.line !== "beauty" && entry !== lead),
    5,
    weight,
    (entry) => hash01(`${seeds.hero}:${entry.id}`),
  );
  const slides = lead ? [lead, ...heroRest] : heroRest;
  const issueNo = new Set(entries.map((entry) => entry.date)).size;
  const today = latestPool;

  return (
    <>
      <Hero slides={slides} latest={latest} issueNo={issueNo} onShuffle={() => shuffle("hero")} />
      <TodayStrip entries={today} latest={latest} />
      <div className="band band-night-paper" data-tone="paper" aria-hidden="true" />
      <TasteRoom items={pick("taste", 4)} onShuffle={() => shuffle("taste")} />
      <div className="band band-paper-teal" data-tone="teal" aria-hidden="true" />
      <RestraintRoom items={pick("repression", 3)} onShuffle={() => shuffle("repression")} />
      <div className="band band-teal-night" data-tone="night" aria-hidden="true" />
      <SoloRoom items={pick("tension", 5)} onShuffle={() => shuffle("tension")} />
      <div className="band band-night-warm" data-tone="warm" aria-hidden="true" />
      <PortraitRoom items={pick("beauty", 4)} onShuffle={() => shuffle("beauty")} />
      <Outro />
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
              {slide.date === latest && <p className="hero-today">今日</p>}
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
    <section className="today" data-tone="night" aria-label="今日">
      <header className="today-head">
        <p className="today-date">
          <span>{shortDate(latest)}</span> {weekday(latest)}
        </p>
        <a className="ghost-btn" href="./daily/">
          日更 →
        </a>
      </header>
      <ol className="today-row">
        {entries.map((entry) => (
          <li key={entry.id} className="today-item">
            <a href={dailyHref(entry)}>
              <Held entry={entry} className="today-thumb" ratio={4 / 5} link={false} />
              <span className="today-title">{entry.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}

function RoomHead({ no, onShuffle }: { no: string; onShuffle: () => void }) {
  return (
    <header className="room-head">
      <p className="room-no" aria-hidden="true">
        {no}
      </p>
      <div className="room-tools">
        <button type="button" className="ghost-btn" onClick={onShuffle}>
          换一批
        </button>
      </div>
    </header>
  );
}

function TasteRoom({ items, onShuffle }: { items: DailyEntry[]; onShuffle: () => void }) {
  const [lead, ...rest] = items;
  return (
    <section className="room room-taste" data-tone="paper" id="taste">
      <RoomHead no="01" onShuffle={onShuffle} />
      {lead && (
        <div className="taste-grid">
          <article className="taste-lead" style={{ viewTransitionName: "taste-lead" } as CSSProperties}>
            <Held entry={lead} lens sizes="(min-width: 900px) 80vw, 100vw" />
            <div className="taste-lead-copy">
              <Meta entry={lead} />
              <h3>{lead.title}</h3>
              {lead.note && <p className="judgment">{lead.note}</p>}
            </div>
          </article>
          {rest.map((entry, i) => (
            <article key={entry.id} className={`taste-card is-${i}`} style={{ viewTransitionName: `taste-${i}` } as CSSProperties}>
              <Held entry={entry} sizes="(min-width: 900px) 28vw, 50vw" />
              <Meta entry={entry} />
              <h3>{entry.title}</h3>
              {entry.note && <p>{entry.note}</p>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function RestraintRoom({ items, onShuffle }: { items: DailyEntry[]; onShuffle: () => void }) {
  return (
    <section className="room room-restraint" data-tone="teal" id="restraint">
      <Lamp>
        <RoomHead no="02" onShuffle={onShuffle} />
      </Lamp>
      <div className="hangings">
        {items.map((entry, i) => (
          <article key={entry.id} className={i % 2 ? "hanging is-flip" : "hanging"} style={{ viewTransitionName: `hang-${i}` } as CSSProperties}>
            <div className="hanging-frame">
              <Held entry={entry} slow sizes="(min-width: 900px) 58vw, 100vw" />
            </div>
            <div className="placard">
              <h3>{entry.title}</h3>
              <Meta entry={entry} />
              {entry.note && <p className="judgment">{entry.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SoloRoom({ items, onShuffle }: { items: DailyEntry[]; onShuffle: () => void }) {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const signature = items.map((entry) => entry.id).join("|");
  useEffect(() => setActive(0), [signature]);
  const entry = items[Math.min(active, items.length - 1)];
  if (!entry?.image) {
    return (
      <section className="room room-solo" data-tone="night" id="solo">
        <RoomHead no="03" onShuffle={onShuffle} />
      </section>
    );
  }
  return (
    <section className="room room-solo" data-tone="night" id="solo">
      <RoomHead no="03" onShuffle={onShuffle} />
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
                <div className="solo-lit" style={{ backgroundImage: `url("${imageSrc(entry.image)}")` }} aria-hidden="true" />
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
            </motion.div>
          </AnimatePresence>
          <ol className="solo-index" aria-label="目录">
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
function PortraitRoom({ items, onShuffle }: { items: DailyEntry[]; onShuffle: () => void }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="room room-portraits" data-tone="warm" id="portraits">
      <RoomHead no="04" onShuffle={onShuffle} />
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
              <h3>{entry.title}</h3>
              {entry.note && <p>{entry.note}</p>}
              <Meta entry={entry} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Outro() {
  return (
    <section className="outro" data-tone="night">
      <div className="outro-inner">
        <h2 className="outro-title">每天往上加一层。</h2>
        <div className="outro-actions">
          <StackButton href="./daily/">去日更</StackButton>
        </div>
      </div>
    </section>
  );
}

mount(<Home />);
