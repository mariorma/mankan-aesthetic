import { notes } from "./notes";
import { FigureView } from "./Figure";
import { pageHref } from "./paths";
import { mount, Shell } from "./Shell";

function NotesPage() {
  return (
    <Shell page="notes">
      <header className="mast">
        <p className="eyebrow">本期存档 · 不再更新</p>
        <h1>审美提升</h1>
        <p className="deck">
          当初写的三篇提炼笔记，留个存档。以后不再做每日提炼；想翻还能翻。原生态的学习记录在
          <a href={pageHref("notes", "log")}>「积累」</a>。
        </p>
      </header>
      <div className="notes">
        {notes.map((note) => (
          <article key={note.id} id={note.id} className="note">
            <div className="note-head">
              <time className="note-date" dateTime={note.date}>
                {note.date}
              </time>
              <span className="note-kicker">{note.kicker}</span>
            </div>
            <h2 className="note-title">{note.title}</h2>
            {note.figures.map((figure) => (
              <FigureView key={figure.file} page="notes" figure={figure} className="spread" />
            ))}
            {note.paragraphs.map((paragraph) => (
              <p key={paragraph} className="note-text">
                {paragraph}
              </p>
            ))}
          </article>
        ))}
      </div>
    </Shell>
  );
}

mount(<NotesPage />);
