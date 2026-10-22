import { FigureView } from "./Figure";
import { FlipTab, useFaceFlip } from "./flip";
import { beautyLog, tasteLog, type AccumCard } from "./learning-log";
import { mount, Shell } from "./Shell";

function LogPage() {
  const { face, toInside, flip } = useFaceFlip();
  const firstTaste = tasteLog.findIndex((card) => card.figure);

  return (
    <Shell page="log" bleed>
      <header className="split-issue">
        <p className="issue-label">积累</p>
        <h1>{face === "biao" ? "品味积累" : "美女积累"}</h1>
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
        {toInside ? <TasteFace firstFigure={firstTaste} /> : <BeautyFace />}
        <FlipTab toInside={toInside} onFlip={flip} />
      </div>
    </Shell>
  );
}

function TasteFace({ firstFigure }: { firstFigure: number }) {
  return (
    <section className="face face-biao" aria-labelledby="log-biao-title">
      <div className="face-inner">
        <p className="col-kicker">表</p>
        <h2 id="log-biao-title">看过的图</h2>
        <div className="ref-index">
          {tasteLog.map((card, index) => (
            <TasteCard key={card.id} card={card} priority={index === firstFigure} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TasteCard({ card, priority }: { card: AccumCard; priority: boolean }) {
  return (
    <article className="ref" id={card.id}>
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
        <p className="col-kicker">裏</p>
        <h2 id="log-li-title">看过的人</h2>
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
      <article className={lead ? "su-fig su-lead" : "su-fig"} id={card.id}>
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
      className={lead ? "su-fig su-lead" : "su-fig"}
      priority={lead}
      linkLabel={card.title}
    >
      <span className="ref-by">{card.date}</span>
    </FigureView>
  );
}

mount(<LogPage />);
