import { useEffect } from "react";
import { entries } from "./entries";
import { FigureView } from "./Figure";
import { mount, Shell } from "./Shell";

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  const root = document.documentElement;
  const previous = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  target.scrollIntoView();
  root.style.scrollBehavior = previous;
}

function EntriesPage() {
  useEffect(() => {
    scrollToHash();
    const frame = requestAnimationFrame(scrollToHash);
    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) scrollToHash();
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Shell page="entries">
      <header className="mast">
        <p className="eyebrow">卷一 · 十二则</p>
        <h1>条目</h1>
        <p className="deck">
          每条只讲一个判断，两到四句。读的时候，手边放一张你自己的图。末尾的「怎么练」可以做，也可以先只看。
        </p>
      </header>
      <div className="entries">
        {entries.map((entry) => (
          <article key={entry.id} id={entry.id} className="entry">
            <div className="entry-index">
              <a className="entry-num" href={`#${entry.id}`}>
                {entry.number}
              </a>
              <span className="kicker">{entry.kicker}</span>
            </div>
            <div className="entry-body">
              <h2>{entry.title}</h2>
              {entry.figure && (
                <FigureView page="entries" figure={entry.figure} className="lesson" />
              )}
              {entry.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="practice">
                <span className="practice-label">怎么练</span>
                {entry.practice}
              </p>
            </div>
          </article>
        ))}
      </div>
      <p className="afterword">
        二次元和游戏原画不另起炉灶。第 06 条写了和写实共通的地方；以后若要加，也从剪影、光和气质这里长出去。
      </p>
    </Shell>
  );
}

mount(<EntriesPage />);
