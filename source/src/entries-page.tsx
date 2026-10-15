import { useEffect } from "react";
import { chapterEntries, chapters } from "./entries";
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
        <p className="eyebrow">四章 · 十二条</p>
        <h1>条目</h1>
        <p className="deck">每条讲一个判断，两三句就说完。看的时候，手边放一张自己的图。</p>
      </header>
      {chapters.map((chapter) => (
        <section key={chapter.id} className="chapter" aria-labelledby={`chapter-${chapter.id}`}>
          <h2 id={`chapter-${chapter.id}`}>{chapter.title}</h2>
          <p className="epigraph">{chapter.epigraph}</p>
          <div className="entries">
            {chapterEntries(chapter).map((entry) => (
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
        </section>
      ))}
      <p className="afterword">
        二次元和游戏原画不另算一套。第 06 条讲了它和照片相通的地方；以后要加，也还是从轮廓、光和气质这几件事接着说。
      </p>
    </Shell>
  );
}

mount(<EntriesPage />);
