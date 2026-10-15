import { notes } from "./notes";
import { FigureView } from "./Figure";
import { mount, Shell } from "./Shell";

function NotesPage() {
  return (
    <Shell page="notes">
      <header className="mast">
        <p className="eyebrow">审美提升 · 每日笔记</p>
        <h1>审美提升</h1>
        <p className="deck">
          每天看一点好东西，用大白话记下学到了什么、对看图有什么用。新的放在最上面。
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
