import { chapterEntries, chapters, type Figure } from "./entries";
import { FigureView } from "./Figure";
import { notes } from "./notes";
import { entryHref, pageHref } from "./paths";
import { mount, Shell } from "./Shell";

const habits = [
  {
    number: "01",
    title: "先看骨架",
    text: "先看主体、陪衬和空白，谁说了算。骨架乱，再好的风格也白搭。",
  },
  {
    number: "02",
    title: "再看光",
    text: "光把画面分出层次。到处都一样亮，画面就扁了。",
  },
  {
    number: "03",
    title: "再看气质",
    text: "人、衣服、背景，最好像在说同一件事。",
  },
];

const cover: Figure = {
  file: "quiet-wall.webp",
  alt: "人站在空墙的右侧，左侧留出大片空白",
  width: 864,
  height: 1152,
  caption: "人靠右，左边大片留白。",
  credit: "示意 · 为本站生成",
};

const opener: Figure = {
  file: "timber-light.webp",
  alt: "安静的室内：左侧一根深色木柱，大片白墙上落着窗格形状的光",
  width: 1152,
  height: 864,
  caption: "一根柱子，一面空墙，一块光。",
  credit: "示意 · 为本站生成",
};

const today: Figure = {
  file: "quiet-seat.webp",
  alt: "人穿深蓝色长衣，安静地坐在木凳上，身后是素色格子门",
  width: 864,
  height: 1152,
  caption: "深色长衣，手放在膝上，背景的格子门很安静。三样东西像在说一件事。",
  credit: "示意 · 为本站生成",
};

const latestNote = notes[0];

function Home() {
  return (
    <Shell page="home">
      <section className="hero">
        <div className="hero-top">
          <div>
            <p className="eyebrow">个人审美笔记</p>
            <h1>慢看</h1>
          </div>
          <FigureView page="home" figure={cover} className="plate" priority />
        </div>
        <p className="issue">
          <span className="issue-label">本期</span>
          与其刷很多图，不如把一张看久一点。
        </p>
        <p className="lede">
          看一张图，先看它把注意力放在哪、光从哪来、有没有留白。这几件事看顺了，审美就慢慢长出来。
        </p>
        <FigureView page="home" figure={opener} className="spread" priority />
        <a className="go" href={pageHref("home", "entries")}>
          去看四章条目
          <span className="go-arrow" aria-hidden="true" />
        </a>
      </section>

      <section className="block" aria-labelledby="habits-heading">
        <header className="section-head">
          <h2 id="habits-heading">看图的三个习惯</h2>
          <p>哪张图都能用，不只是人像。</p>
        </header>
        <ol className="habits">
          {habits.map((habit) => (
            <li key={habit.number}>
              <span className="habit-num">{habit.number}</span>
              <div>
                <h3>{habit.title}</h3>
                <p>{habit.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="block today" aria-labelledby="today-heading">
        <header className="section-head">
          <h2 id="today-heading">看一张</h2>
          <p>固定栏目。每次挑一张，说清楚它好在哪。</p>
        </header>
        <FigureView page="home" figure={today} className="spread" />
      </section>

      <section className="block" aria-labelledby="notes-heading">
        <header className="section-head">
          <h2 id="notes-heading">审美提升</h2>
          <p>每天看一点好东西，用大白话记下学到了什么。</p>
        </header>
        <a className="note-peek" href={pageHref("home", "notes")}>
          <span className="note-peek-date">{latestNote.date}</span>
          <span className="note-peek-title">{latestNote.title}</span>
          <span className="go-arrow" aria-hidden="true" />
        </a>
      </section>

      <section className="block" aria-labelledby="use-heading">
        <header className="section-head">
          <h2 id="use-heading">怎么用这一站</h2>
        </header>
        <p className="prose">
          一次只看一条。拿一张自己手头的图对着看，用自己的话说说好在哪。不用注册，不用打卡，也不用把图发给谁。
        </p>
      </section>

      <section className="block" aria-labelledby="toc-heading">
        <header className="section-head">
          <h2 id="toc-heading">四章，十二条</h2>
          <p>点进去看全文。这里每条只留一句。</p>
        </header>
        {chapters.map((chapter) => (
          <div key={chapter.id} className="toc-chapter">
            <p className="toc-chapter-name">{chapter.title}</p>
            <nav className="toc" aria-label={chapter.title}>
              {chapterEntries(chapter).map((entry) => (
                <a key={entry.id} href={entryHref("home", entry.id)}>
                  <span className="toc-num">{entry.number}</span>
                  <span className="toc-title">{entry.title}</span>
                  <span className="toc-kicker">{entry.kicker}</span>
                  <span className="toc-excerpt">{entry.excerpt}</span>
                </a>
              ))}
            </nav>
          </div>
        ))}
      </section>
    </Shell>
  );
}

mount(<Home />);
