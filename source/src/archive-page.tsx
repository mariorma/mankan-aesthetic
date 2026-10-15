import { issues } from "./issues";
import { notes } from "./notes";
import { pageHref } from "./paths";
import { mount, Shell } from "./Shell";

function ArchivePage() {
  return (
    <Shell page="archive">
      <header className="mast">
        <p className="eyebrow">期次 · 回溯提升路径</p>
        <h1>往期</h1>
        <p className="deck">
          慢看是一个整体，表达积累之后想呈现的品味。以后每一期都可能大变样。这里存着每一期做了什么、相比上一期改了什么，方便回头看出一路的提升。
        </p>
      </header>

      <ol className="issues">
        {issues.map((issue) => (
          <li key={issue.slug} className="issue-row">
            <div className="issue-meta">
              <span className="issue-no">{issue.no}</span>
              <time className="issue-date" dateTime={issue.date}>
                {issue.date}
              </time>
              {issue.current && <span className="issue-flag">本期</span>}
            </div>
            <div className="issue-body">
              <h2 className="issue-title">{issue.title}</h2>
              <p className="issue-summary">{issue.summary}</p>
              <ul className="issue-changes">
                {issue.changes.map((change) => (
                  <li key={change}>{change}</li>
                ))}
              </ul>
              <p className="issue-link">
                {issue.current ? (
                  <a href={pageHref("archive", "home")}>就是现在的站 →</a>
                ) : issue.snapshotHref ? (
                  <a href={issue.snapshotHref}>看这期的存档 →</a>
                ) : (
                  <span className="issue-link-muted">这期还没留存档快照</span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <section className="block archived" aria-labelledby="archived-notes">
        <header className="section-head">
          <h2 id="archived-notes">本期存档 · 审美提升提炼笔记</h2>
          <p>当初写的三篇提炼笔记，留个存档。以后不再做每日提炼，想翻还能翻。</p>
        </header>
        <nav className="toc" aria-label="审美提升">
          {notes.map((note) => (
            <a key={note.id} href={`${pageHref("archive", "notes")}#${note.id}`}>
              <span className="toc-num">{note.date.slice(5).replace("-", ".")}</span>
              <span className="toc-title">{note.title}</span>
              <span className="toc-kicker">{note.kicker}</span>
              <span className="toc-excerpt">{note.paragraphs[0]}</span>
            </a>
          ))}
        </nav>
      </section>
    </Shell>
  );
}

mount(<ArchivePage />);
