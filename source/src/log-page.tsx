import { faceMotion, useFaceFlip } from "./flip";
import { CardSpotlight } from "./kit/card-spotlight";
import { HoverEffect } from "./kit/hover-effect";
import { useReducedMotion } from "./kit/reduced";
import { TransitionPanel } from "./kit/transition-panel";
import type { Figure } from "./figure";
import { beautyLog, learningLog, tasteLog, type AccumCard, type LogDay, type LogItem } from "./learning-log";
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

function LogPage() {
  const { face, flip } = useFaceFlip();
  const reduced = useReducedMotion();
  const motion = faceMotion(reduced);

  return (
    <Shell page="log" face={face} onFlip={flip}>
      <TransitionPanel
        activeIndex={face === "biao" ? 0 : 1}
        variants={motion.variants}
        transition={motion.transition}
        style={{ transformOrigin: "50% 0" }}
      >
        {[<TasteFace key="biao" />, <BeautyFace key="li" />]}
      </TransitionPanel>
    </Shell>
  );
}

function TasteFace() {
  const coverFigure = firstFigure(learningLog[0]);
  return (
    <RiseScope>
      <Cover
        face="biao"
        eyebrow="积累 · 表 · 日更"
        title="品味积累"
        deck={"日更墙：图和短说明，按日子往上堆。\n点图进原帖。"}
        marquee={learningLog.map((day) => day.date)}
        spine={["构图", "字阶", "刊面", "留白", "气质"]}
        stat={{ value: String(learningLog.length).padStart(2, "0"), k: "日", s: "先写判断" }}
        stage={shots(tasteLog.flatMap((card) => (card.figure ? [card.figure] : [])))}
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
            items={learningLog.map((day) => ({
              title: day.date,
              description: day.title,
              link: `#day-${day.date}`,
            }))}
          />
        </Chapter>
        <Chapter kicker="日课" title="当天写下的">
          <DailyLog />
        </Chapter>
        <Chapter id="catalog" kicker="图录" title="一张图，一两句">
          <div className="catalog">
            {tasteLog.map((card) => (
              <TasteCard key={card.id} card={card} />
            ))}
          </div>
        </Chapter>
      </div>
    </RiseScope>
  );
}

function figurePostHrefs(item: LogItem): string[] {
  return (item.figures ?? []).flatMap((figure) => (figure.creditHref ? [figure.creditHref] : []));
}

function DailyLog() {
  return (
    <div className="days">
      {learningLog.map((day) => {
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
              {day.sections.map((section) => (
                <section key={section.id} className="log-section" aria-label={section.label}>
                  <h3 className="log-section-label">{section.label}</h3>
                  {section.intro && <p className="log-section-intro">{section.intro}</p>}
                  <div className="log-items">
                    {section.items.map((item) => {
                      const openedByImage = figurePostHrefs(item);
                      const extraLinks = (item.links ?? []).filter((link) => !openedByImage.includes(link.href));
                      const hrefAlreadyShown = Boolean(
                        item.href &&
                          (openedByImage.includes(item.href) || extraLinks.some((link) => link.href === item.href)),
                      );
                      const showPostLink = Boolean(item.href) && !hrefAlreadyShown;
                      return (
                        <div key={item.heading} className="log-item">
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
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function TasteCard({ card }: { card: AccumCard }) {
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
    </CardSpotlight>
  );
}

function BeautyFace() {
  const lead = beautyLog.find((card) => card.figure);
  const rest = lead ? beautyLog.filter((card) => card.id !== lead.id) : beautyLog;
  return (
    <RiseScope>
      <Cover
        face="li"
        eyebrow="积累 · 裏 · 人"
        title="美女积累"
        deck={"日更墙：图和一句说明，按日子往上堆。\n点图进原帖。"}
        marquee={beautyLog.map((card) => card.title)}
        spine={beautyLog.map((card) => card.title)}
        stat={{ value: String(beautyLog.length).padStart(2, "0"), k: "人", s: "一句说明" }}
        stage={shots(beautyLog.flatMap((card) => (card.figure ? [card.figure] : [])))}
        note={
          lead?.figure ? (
            <>
              <p className="by">{lead.date}</p>
              <p className="credit">{lead.figure.credit}</p>
            </>
          ) : undefined
        }
      />
      <div className="issue">
        <Chapter kicker="人" title="其余的">
          <div className="portraits">
            {rest.map((card) => (
              <BeautyCard key={card.id} card={card} />
            ))}
          </div>
        </Chapter>
      </div>
    </RiseScope>
  );
}

function BeautyCard({ card }: { card: AccumCard }) {
  if (!card.figure) {
    return (
      <article className="portrait rise" id={card.id}>
        <h3>{card.title}</h3>
        <p className="by">{card.date}</p>
        {card.note && <p>{card.note}</p>}
        {card.imageNote && <p className="img-note">{card.imageNote}</p>}
        {card.href && (
          <p className="log-post">
            <a href={card.href} target="_blank" rel="noreferrer" aria-label={`打开原帖：${card.title}`}>
              原帖
            </a>
          </p>
        )}
      </article>
    );
  }

  return (
    <CardSpotlight id={card.id} className="portrait rise" color={toneSpot("li")}>
      <h3>{card.title}</h3>
      <Plate page="log" figure={card.figure} linkLabel={card.title}>
        <span className="by">{card.date}</span>
      </Plate>
      {card.imageNote && <p className="img-note">{card.imageNote}</p>}
    </CardSpotlight>
  );
}

mount(<LogPage />);
