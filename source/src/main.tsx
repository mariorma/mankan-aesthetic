import { entries, type Figure } from "./entries";
import { FigureView } from "./Figure";
import { entryHref, pageHref } from "./paths";
import { mount, Shell } from "./Shell";

const habits = [
  {
    number: "01",
    title: "先找骨架",
    text: "主体、陪衬、空隙，三块里谁作主。骨架不清楚时，风格只是往上贴的装饰。",
  },
  {
    number: "02",
    title: "再看光",
    text: "光负责把层次分开。到处都亮，体积就会扁，气质也跟着薄。",
  },
  {
    number: "03",
    title: "最后谈气质",
    text: "姿势、衣服、表情要说同一句话。这句话说不圆，就还没看完。",
  },
];

const cover: Figure = {
  file: "quiet-wall.webp",
  alt: "人站在空墙的右侧，左侧留出大片空白",
  width: 864,
  height: 1152,
  caption: "兴趣点偏在一侧，\n空处把视线送回去。",
  credit: "示意人像，为本站生成",
};

const opener: Figure = {
  file: "timber-light.webp",
  alt: "安静的室内：左侧一根深色木柱，大片白墙上落着窗格形状的光",
  width: 1152,
  height: 864,
  caption: "柱、墙、一块光。先看谁作主。",
  credit: "示意空间，为本站生成",
};

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
        <p className="lede">
          用看图学审美。主线是品味：构图、光影、气质。不是把图堆多，也不是比谁更露骨。
        </p>
        <p className="lede lede-next">
          一张图值不值得停一下，先看它把注意力放在哪里，光从哪来，留白是否在说话。二次元和游戏原画以后可以接上，用的仍是这一套眼睛。
        </p>
        <FigureView page="home" figure={opener} className="spread" priority />
        <a className="go" href={pageHref("home", "entries")}>
          阅读十二条笔记
          <span className="go-arrow" aria-hidden="true" />
        </a>
      </section>

      <section className="block" aria-labelledby="habits-heading">
        <header className="section-head">
          <h2 id="habits-heading">看图的三条习惯</h2>
          <p>用在任何一张图上，不限于人像。</p>
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

      <section className="block" aria-labelledby="use-heading">
        <header className="section-head">
          <h2 id="use-heading">怎么用这一站</h2>
        </header>
        <p className="prose">
          一次只读一条。拿一张你手头的图对着看，用自己的话写下判断。不注册，不打卡，也不必把图交到任何地方。
        </p>
      </section>

      <section className="block" aria-labelledby="toc-heading">
        <header className="section-head">
          <h2 id="toc-heading">十二条起手</h2>
          <p>点进条目看全文。这里只留一句。</p>
        </header>
        <nav className="toc" aria-label="条目目录">
          {entries.map((entry) => (
            <a key={entry.id} href={entryHref("home", entry.id)}>
              <span className="toc-num">{entry.number}</span>
              <span className="toc-title">{entry.title}</span>
              <span className="toc-kicker">{entry.kicker}</span>
              <span className="toc-excerpt">{entry.excerpt}</span>
            </a>
          ))}
        </nav>
      </section>
    </Shell>
  );
}

mount(<Home />);
