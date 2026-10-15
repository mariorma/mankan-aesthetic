import { learningLog } from "./learning-log";
import { FigureView } from "./Figure";
import { mount, Shell } from "./Shell";

function LogPage() {
  return (
    <Shell page="log">
      <header className="mast">
        <p className="eyebrow">只给主人翻 · 原样记录</p>
        <h1>积累</h1>
        <p className="deck">
          每天看了什么、学到什么，原文级要点 + 可点外链 + 能抓到的原图，按日期倒序。这不是对外的栏目，就是主人自己的学习账。
        </p>
      </header>

      <div className="log">
        {learningLog.map((day) => (
          <article key={day.date} className="log-day">
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
                  {section.items.map((item) => (
                    <div key={item.heading} className="log-item">
                      <h4 className="log-item-head">
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer">
                            {item.heading}
                          </a>
                        ) : (
                          item.heading
                        )}
                      </h4>

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

                      {item.links && item.links.length > 0 && (
                        <p className="log-links">
                          {item.links.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                              {link.label}
                            </a>
                          ))}
                        </p>
                      )}

                      {item.figures?.map((figure) => (
                        <FigureView key={figure.file} page="log" figure={figure} className="lesson" />
                      ))}

                      {item.imageNote && <p className="log-imgnote">{item.imageNote}</p>}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </article>
        ))}
      </div>

      <p className="afterword">
        以后加一天：在 <code>source/src/learning-log.ts</code> 最前面复制一个日期对象。能抓到的原图下载到{" "}
        <code>source/public/images/</code> 本地引用，credit 写「来源 + 无商业用途·侵权立删」；抓不到就写「原图未取到」并留外链。
      </p>
    </Shell>
  );
}

mount(<LogPage />);
