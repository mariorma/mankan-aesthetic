import { faceMotion, useFaceFlip } from "./flip";
import { CardSpotlight } from "./kit/card-spotlight";
import type { Mark } from "./kit/controls";
import { HoverEffect } from "./kit/hover-effect";
import { useReducedMotion } from "./kit/reduced";
import { TransitionPanel } from "./kit/transition-panel";
import { FigureMedia } from "./Figure";
import type { Figure } from "./figure";
import { beautyLog, learningLog, tasteLog, type AccumCard, type LogDay, type LogItem } from "./learning-log";
import { CopyMarks, HiddenMarks, MarkChoices, useMarkStore } from "./mark-ui";
import { BIAO_MARK_KEY, LI_MARK_KEY, liPieces, logItemMarkId, markOf, withOrphans, type MarkMap, type ScoredPiece } from "./marks";
import { mount, Shell } from "./Shell";
import { FilmReel } from "./kit/film";
import type { StageShot } from "./kit/stage3d";
import { assetHref } from "./paths";
import { Chapter, Cover, Plate, RiseScope, toneSpot } from "./spread";

function shots(figures: Figure[]): StageShot[] {
  return figures.slice(0, 5).map((figure) => ({
    src: assetHref("log", figure.file),
    alt: figure.alt,
    width: figure.width,
    height: figure.height,
  }));
}

function firstFigure(day: LogDay | undefined): Figure | undefined {
  if (!day) return undefined;
  for (const section of day.sections) {
    for (const item of section.items) {
      const figure = item.figures?.[0];
      if (figure) return figure;
    }
  }
  return undefined;
}

function leadFile(day: LogDay): string | undefined {
  return firstFigure(day)?.file;
}

// 日课 item.figures 里出现过的文件，图录不再原样贴第二遍。无图短卡不在此列。
const dailyFigureFiles = new Set(
  learningLog.flatMap((day) =>
    day.sections.flatMap((section) => section.items.flatMap((item) => (item.figures ?? []).map((figure) => figure.file))),
  ),
);

function catalogCards(cards: AccumCard[]): AccumCard[] {
  return cards.filter((card) => !card.figure || !dailyFigureFiles.has(card.figure.file));
}

type Choose = (id: string, mark: Mark, legacy?: readonly string[]) => void;

function biaoPieces(): ScoredPiece[] {
  const pieces: ScoredPiece[] = [];
  for (const day of learningLog) {
    for (const section of day.sections) {
      for (const item of section.items) {
        pieces.push({
          id: logItemMarkId(day.date, item),
          label: `${day.date} · ${item.heading}`,
        });
      }
    }
  }
  for (const card of tasteLog) {
    pieces.push({ id: card.id, label: `${card.date} · ${card.title}` });
  }
  return pieces;
}

function dayHasVisible(day: LogDay, saved: MarkMap): boolean {
  return day.sections.some((section) => section.items.some((item) => markOf(saved, logItemMarkId(day.date, item)) !== "差"));
}

function LogPage() {
  const { face, flip } = useFaceFlip();
  const reduced = useReducedMotion();
  const motion = faceMotion(reduced);
  const biao = useMarkStore(BIAO_MARK_KEY);
  const li = useMarkStore(LI_MARK_KEY);

  return (
    <Shell page="log" face={face} onFlip={flip} footerNote={<CopyMarks />}>
      <TransitionPanel
        activeIndex={face === "biao" ? 0 : 1}
        variants={motion.variants}
        transition={motion.transition}
        style={{ transformOrigin: "50% 0" }}
      >
        {[
          <TasteFace key="biao" saved={biao.saved} onChoose={biao.choose} />,
          <BeautyFace key="li" saved={li.saved} onChoose={li.choose} />,
        ]}
      </TransitionPanel>
    </Shell>
  );
}

function TasteFace({ saved, onChoose }: { saved: MarkMap; onChoose: Choose }) {
  const coverFigure = firstFigure(learningLog[0]);
  const visibleDays = learningLog.filter((day) => dayHasVisible(day, saved));
  const visibleTaste = tasteLog.filter((card) => markOf(saved, card.id) !== "差");
  return (
    <RiseScope>
      <Cover
        face="biao"
        eyebrow="积累 · 表 · 日更"
        title="品味积累"
        deck={"日更墙：图和短说明，按日子往上堆。\n点图进原帖。"}
        marquee={visibleDays.map((day) => day.date)}
        spine={["构图", "字阶", "刊面", "留白", "气质"]}
        stat={{ value: String(learningLog.length).padStart(2, "0"), k: "日", s: "先写判断" }}
        stage={shots(visibleTaste.flatMap((card) => (card.figure ? [card.figure] : [])))}
        note={coverFigure ? <p className="credit">{coverFigure.credit}</p> : undefined}
      />
      <FilmReel
        kicker="影像"
        title="在站里看"
        items={[
          {
            title: "一起看杂志",
            by: "哔哩哔哩",
            href: "https://www.bilibili.com/video/BV1654y1J7Zk/",
          },
          {
            title: "从杂志里悟出排版",
            by: "哔哩哔哩",
            href: "https://www.bilibili.com/video/BV1Vu411S7Yo/",
          },
        ]}
      />
      <div className="issue">
        <Chapter kicker="目录" title="按日子翻">
          <HoverEffect
            items={visibleDays.map((day) => ({
              title: day.date,
              description: day.title,
              link: `#day-${day.date}`,
            }))}
          />
        </Chapter>
        <Chapter kicker="日课" title="当天写下的">
          <DailyLog saved={saved} onChoose={onChoose} />
        </Chapter>
        <Chapter id="catalog" kicker="图录" title="一张图，一两句">
          <div className="catalog">
            {catalogCards(visibleTaste).map((card) => (
              <TasteCard key={card.id} card={card} saved={saved} onChoose={onChoose} />
            ))}
          </div>
        </Chapter>
        <HiddenMarks id="hidden-marks-biao" pieces={withOrphans(biaoPieces(), saved)} saved={saved} onChoose={onChoose} />
      </div>
    </RiseScope>
  );
}

function figurePostHrefs(item: LogItem): string[] {
  return (item.figures ?? []).flatMap((figure) => (figure.creditHref ? [figure.creditHref] : []));
}

function DailyLog({ saved, onChoose }: { saved: MarkMap; onChoose: Choose }) {
  return (
    <div className="days">
      {learningLog.map((day) => {
        if (!dayHasVisible(day, saved)) return null;
        const lead = leadFile(day);
        let usedLead = false;
        return (
          <article key={day.date} className="day rise" id={`day-${day.date}`}>
            <div className="day-mark">
              <time className="day-date" dateTime={day.date}>
                {day.date.slice(5)}
              </time>
              <p className="by">{day.date.slice(0, 4)}</p>
            </div>
            <div className="day-body">
              <h3 className="day-title">{day.title}</h3>
              {day.summary && <p className="day-summary">{day.summary}</p>}
              {day.sections.map((section) => {
                const items = section.items.filter((item) => markOf(saved, logItemMarkId(day.date, item)) !== "差");
                if (items.length === 0) return null;
                return (
                <section key={section.id} className="log-section" aria-label={section.label}>
                  <h3 className="log-section-label">{section.label}</h3>
                  {section.intro && <p className="log-section-intro">{section.intro}</p>}
                  <div className="log-items">
                    {items.map((item) => {
                      const openedByImage = figurePostHrefs(item);
                      const extraLinks = (item.links ?? []).filter((link) => !openedByImage.includes(link.href));
                      const hrefAlreadyShown = Boolean(
                        item.href &&
                          (openedByImage.includes(item.href) || extraLinks.some((link) => link.href === item.href)),
                      );
                      const showPostLink = Boolean(item.href) && !hrefAlreadyShown;
                      const scored: ScoredPiece = {
                        id: logItemMarkId(day.date, item),
                        label: `${day.date} · ${item.heading}`,
                      };
                      return (
                        <div key={scored.id} className="log-item">
                          <h4 className="log-item-head">{item.heading}</h4>
                          {showPostLink && item.href && (
                            <p className="log-post">
                              <a href={item.href} target="_blank" rel="noreferrer" aria-label={`打开原帖：${item.heading}`}>
                                原帖
                              </a>
                            </p>
                          )}
                          <ul className="log-points">
                            {item.points.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          {item.steal && (
                            <p className="log-steal">
                              <span className="log-steal-label">可偷</span>
                              {item.steal}
                            </p>
                          )}
                          {extraLinks.length > 0 && (
                            <p className="log-links">
                              {extraLinks.map((link) => (
                                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                                  {link.label}
                                </a>
                              ))}
                            </p>
                          )}
                          {item.figures?.map((figure) => {
                            const tilt = !usedLead && figure.file === lead;
                            if (tilt) usedLead = true;
                            return (
                              <Plate
                                key={figure.file}
                                page="log"
                                figure={figure}
                                linkLabel={item.figures?.length === 1 ? item.heading : undefined}
                                tilt={tilt}
                                intro={tilt}
                                amp={10}
                              />
                            );
                          })}
                          {item.imageNote && <p className="img-note">{item.imageNote}</p>}
                          <MarkChoices piece={scored} saved={saved} onChoose={onChoose} />
                        </div>
                      );
                    })}
                  </div>
                </section>
                );
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function TasteCard({ card, saved, onChoose }: { card: AccumCard; saved: MarkMap; onChoose: Choose }) {
  const scored: ScoredPiece = { id: card.id, label: `${card.date} · ${card.title}` };
  return (
    <CardSpotlight id={card.id} className="catalog-card rise" color={toneSpot("biao")}>
      <div className="catalog-copy">
        <p className="by">{card.date}</p>
        <h3>{card.title}</h3>
        {!card.figure && card.note && <p className="judgment">{card.note}</p>}
        {!card.figure && card.href && (
          <p className="log-post">
            <a href={card.href} target="_blank" rel="noreferrer" aria-label={`打开原帖：${card.title}`}>
              原帖
            </a>
          </p>
        )}
        {card.imageNote && <p className="img-note">{card.imageNote}</p>}
      </div>
      {card.figure && <Plate page="log" figure={card.figure} linkLabel={card.title} />}
      <MarkChoices piece={scored} saved={saved} onChoose={onChoose} />
    </CardSpotlight>
  );
}

function BeautyFace({ saved, onChoose }: { saved: MarkMap; onChoose: Choose }) {
  const visible = beautyLog.filter((card) => {
    const legacy = card.figure ? [card.figure.file] : [];
    return markOf(saved, card.id, legacy) !== "差";
  });
  return (
    <RiseScope>
      <header className="mast is-slim">
        <p className="eyebrow">积累 · 裏 · 人</p>
        <h1 className="display">日更墙</h1>
        <p className="deck">新的在上。一张图，一句说明。点图进原帖。</p>
      </header>
      <div className="issue">
        <div className="daywall">
          {visible.map((card) => (
            <BeautyCard key={card.id} card={card} saved={saved} onChoose={onChoose} />
          ))}
        </div>
        <HiddenMarks id="hidden-marks-li" pieces={withOrphans(liPieces(), saved)} saved={saved} onChoose={onChoose} />
      </div>
    </RiseScope>
  );
}

function BeautyCard({ card, saved, onChoose }: { card: AccumCard; saved: MarkMap; onChoose: Choose }) {
  const sentence = card.figure?.caption ?? card.note;
  const scored: ScoredPiece = {
    id: card.id,
    label: `${card.date} · ${card.title}`,
    legacy: card.figure ? [card.figure.file] : [],
  };
  return (
    <article className="wall-card rise" id={card.id}>
      <time className="wall-date" dateTime={card.date}>
        {card.date}
      </time>
      {card.figure && (
        <figure className="wall-fig">
          <FigureMedia page="log" figure={card.figure} linkLabel={card.title} />
        </figure>
      )}
      <h3>{card.title}</h3>
      {sentence && <p className="wall-note">{sentence}</p>}
      {card.imageNote && <p className="img-note">{card.imageNote}</p>}
      {!card.figure && card.href && (
        <p className="log-post">
          <a href={card.href} target="_blank" rel="noreferrer" aria-label={`打开原帖：${card.title}`}>
            原帖
          </a>
        </p>
      )}
      <MarkChoices piece={scored} saved={saved} onChoose={onChoose} />
    </article>
  );
}

mount(<LogPage />);
