import { FigureView } from "./Figure";
import { FlipTab, useFaceFlip } from "./flip";
import { beautyLog, learningLog, tasteLog, type AccumCard, type LogItem } from "./learning-log";
import { mount, Shell } from "./Shell";
import { IssueTitle, Stage } from "./stage";

function LogPage() {
  const { face, toInside, flip } = useFaceFlip();
  const firstTaste = tasteLog.findIndex((card) => card.figure);

  return (
    <Shell page="log" bleed>
      <header className="split-issue" key={face}>
        <p className="issue-label">积累</p>
        <IssueTitle text={face === "biao" ? "品味积累" : "美女积累"} />
        <p className="face-lead">
          {face === "biao" ? (
            <>
              一张图，一两句。
              <br />
              点图进原帖。
            </>
          ) : (
            <>
              一张图，一句说明。
              <br />
              点图进原帖。
            </>
          )}
        </p>
        <p className="face-how">点边上的半圆翻过去。</p>
      </header>

      <div className="flip-stage">
        <Stage key={face}>{toInside ? <TasteFace firstFigure={firstTaste} /> : <BeautyFace />}</Stage>
        <FlipTab toInside={toInside} onFlip={flip} />
      </div>
    </Shell>
  );
}

function TasteFace({ firstFigure }: { firstFigure: number }) {
  return (
    <section className="face face-biao" aria-labelledby="log-biao-title">
      <div className="face-inner">
        <p className="col-kicker reveal">表</p>
        <DailyLog />
        <h2 className="reveal" id="log-biao-title">看过的图</h2>
        <div className="ref-index">
          {tasteLog.map((card, index) => (
            <TasteCard key={card.id} card={card} priority={index === firstFigure} />
          ))}
        </div>
      </div>
    </section>
  );
}

function figurePostHrefs(item: LogItem): string[] {
  return (item.figures ?? []).flatMap((figure) => (figure.creditHref ? [figure.creditHref] : []));
}

function DailyLog() {
  return (
    <div className="log">
      {learningLog.map((day) => (
        <article key={day.date} className="log-day reveal">
          <div className="log-day-head">
            <time className="log-date" dateTime={day.date}>
              {day.date}
            </time>
            <h2 className="log-day-title">{day.title}</h2>
          </div>
          {day.summary && <p className="log-summary">{day.summary}</p>}

          {day.sections.map((section) => (
            <section key={section.id} className="log-section" aria-label={section.label}>
              <h3 className="log-section-label">{section.label}</h3>
              {section.intro && <p className="log-section-intro">{section.intro}</p>}

              <div className="log-items">
                {section.items.map((item) => {
                  const openedByImage = figurePostHrefs(item);
                  const extraLinks = (item.links ?? []).filter(
                    (link) => !openedByImage.includes(link.href),
                  );
                  const hrefAlreadyShown = Boolean(
                    item.href &&
                      (openedByImage.includes(item.href) ||
                        extraLinks.some((link) => link.href === item.href)),
                  );
                  const showPostLink = Boolean(item.href) && !hrefAlreadyShown;
                  return (
                    <div key={item.heading} className="log-item">
                      <h4 className="log-item-head">{item.heading}</h4>
                      {showPostLink && item.href && (
                        <p className="log-post">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`打开原帖：${item.heading}`}
                          >
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

                      {item.figures?.map((figure) => (
                        <FigureView
                          key={figure.file}
                          page="log"
                          figure={figure}
                          className="lesson"
                          linkLabel={item.figures?.length === 1 ? item.heading : undefined}
                        />
                      ))}

                      {item.imageNote && <p className="log-imgnote">{item.imageNote}</p>}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </article>
      ))}
    </div>
  );
}

function TasteCard({ card, priority }: { card: AccumCard; priority: boolean }) {
  return (
    <article className="ref reveal" id={card.id}>
      <h3>{card.title}</h3>
      <p className="ref-by">{card.date}</p>
      {card.figure && (
        <FigureView
          page="log"
          figure={card.figure}
          className="ya-fig"
          priority={priority}
          linkLabel={card.title}
        />
      )}
      {!card.figure && card.note && <p className="ref-judge">{card.note}</p>}
      {!card.figure && card.href && (
        <p className="ref-post">
          <a
            href={card.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`打开原帖：${card.title}`}
          >
            原帖
          </a>
        </p>
      )}
      {card.imageNote && <p className="log-imgnote">{card.imageNote}</p>}
    </article>
  );
}

function BeautyFace() {
  const firstFigure = beautyLog.findIndex((card) => card.figure);
  return (
    <section className="face face-li" aria-labelledby="log-li-title">
      <div className="face-inner">
        <p className="col-kicker reveal">裏</p>
        <h2 className="reveal" id="log-li-title">看过的人</h2>
        <div className="su-people">
          {beautyLog.map((card, index) => (
            <BeautyCard key={card.id} card={card} lead={index === firstFigure} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BeautyCard({ card, lead }: { card: AccumCard; lead: boolean }) {
  if (!card.figure) {
    return (
      <article className={lead ? "su-fig su-lead reveal" : "su-fig reveal"} id={card.id}>
        <h3>{card.title}</h3>
        <p className="ref-by">{card.date}</p>
        {card.note && <p>{card.note}</p>}
        {card.imageNote && <p className="log-imgnote">{card.imageNote}</p>}
        {card.href && (
          <p className="ref-post">
            <a
              href={card.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`打开原帖：${card.title}`}
            >
              原帖
            </a>
          </p>
        )}
      </article>
    );
  }

  return (
    <FigureView
      page="log"
      figure={card.figure}
      className={lead ? "su-fig su-lead reveal" : "su-fig reveal"}
      priority={lead}
      linkLabel={card.title}
    >
      <span className="ref-by">{card.date}</span>
    </FigureView>
  );
}

mount(<LogPage />);
