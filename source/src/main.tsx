import type { Figure } from "./entries";
import { FigureView } from "./Figure";
import { mount, Shell } from "./Shell";

// 左右各写各的：不要互链，不要在文案里点名另一栏。

const credit = "无商业用途·侵权立删";

const worry: Figure = {
  file: "log-lj-dont-worry-boys.webp",
  alt: "摊开的摄影书跨页：左侧黑白人像侧面，右侧是街景",
  width: 1200,
  height: 788,
  caption: "黑白跨页。人靠左，街景在右边让开。这一页几乎只有灰，字不会被颜色抢走。",
  credit: `原图 · Loose Joints · Don't Worry Boys / Stanley Stellar · ${credit}`,
  creditHref: "https://loosejoints.biz/products/dont-worry-boys",
};

const frozen: Figure = {
  file: "log-lj-frozen-features.webp",
  alt: "浅蓝色布面书封，奶油色字叠在棕色字上，书名 Frozen Features",
  width: 1200,
  height: 788,
  caption: "封面是浅蓝布。奶油色字叠在棕色字上，就这两种，没有第三种来抢。",
  credit: `原图 · Loose Joints · Frozen Features / Jason Fulford · ${credit}`,
  creditHref: "https://loosejoints.biz/products/frozen-features",
};

const beginning: Figure = {
  file: "log-lj-in-the-beginning.webp",
  alt: "三册书用白色橡皮筋捆成一叠，封面是粉色缎面",
  width: 1200,
  height: 788,
  caption: "三册用橡皮筋捆着。粉缎那张是封面。页数按册分开写，不并成一句。",
  credit: `原图 · Loose Joints · In the Beginning / Roe Ethridge · ${credit}`,
  creditHref: "https://loosejoints.biz/products/in-the-beginning",
};

const coco: Figure = {
  file: "log-tgw-34-cover.webp",
  alt: "Coco Gauff 近景肖像，一手扶着头，刊名印在上方",
  width: 1155,
  height: 1500,
  caption: "人占满了。下面一行字：Coco Gauff，网球的未来。刊名很小，我喜欢这样。",
  credit: `原图 · The Gentlewoman n°34 cover · ${credit}`,
  creditHref: "https://thegentlewoman.co.uk/",
};

const cathy: Figure = {
  file: "log-tgw-cathy-horyn.webp",
  alt: "Cathy Horyn 穿黄格子衬衫，坐在绿色农用车上",
  width: 1400,
  height: 1118,
  caption: "黄格子衬衫，坐在绿色农用车上。就是生活里的样子。",
  credit: `The Gentlewoman / X @thegentlewoman · Cathy Horyn · ${credit}`,
  creditHref: "https://x.com/i/status/1706667794564325559",
};

const autumn: Figure = {
  file: "log-tgw-autumn-durald.webp",
  alt: "Autumn Durald Arkapaw 穿黑西装和白裙，坐在白墙前",
  width: 1400,
  height: 583,
  caption: "黑西装，白裙子，白墙。人靠右坐着。",
  credit: `原图 · The Gentlewoman Library · Autumn Durald Arkapaw · ${credit}`,
  creditHref: "https://thegentlewoman.co.uk/library/autumn-durald-arkapaw",
};

const lotteryA: Figure = {
  file: "log-pc-autumn-lottery-1.webp",
  alt: "昭和34年东京都宝くじ，票面有橙红和黄色的叶子图形",
  width: 1199,
  height: 654,
  caption: "昭和34年，东京都宝くじ，100円。",
  credit: `Present & Correct / X @presentcorrect · autumn JP lottery · ${credit}`,
  creditHref: "https://x.com/i/status/2112255225419419970",
};

const lotteryB: Figure = {
  file: "log-pc-autumn-lottery-2.webp",
  alt: "近畿宝くじ，左边是秋叶，右边是粉色底纹",
  width: 1199,
  height: 629,
  caption: "同一类票，换一张：近畿，叶子，粉红底。旁白还是秋。",
  credit: `Present & Correct / X @presentcorrect · autumn JP lottery · ${credit}`,
  creditHref: "https://x.com/i/status/2112255225419419970",
};

const retracer: Figure = {
  file: "log-perimeter-retracer.webp",
  alt: "手拿着一本浅蓝色软封书，封面中间有一小块横条窗",
  width: 1000,
  height: 750,
  caption:
    "软封，瑞士装，120页，21×27厘米。里面有一份没装订的文本，可以换着夹进不同章节。\nVendor：June Meadow Editions。Perimeter Books 在卖，不是这家店自己的印记。",
  credit: `原图 · Perimeter Books · Retracer / Karl Halliday · ${credit}`,
  creditHref: "https://www.perimeterbooks.com/products/karl-halliday-retracer",
};

const voices: Figure = {
  file: "log-perimeter-byng.webp",
  alt: "Some Voices Carry 封面，旧杂志页上贴着一张彩色的人和小孩",
  width: 1000,
  height: 750,
  caption:
    "封面是旧杂志页，中间贴着一张彩色的人和小孩。带折口的软封，80页，24×32厘米。\nVendor：Perimeter Editions，这是他们自己的印记。",
  credit: `原图 · Perimeter Editions · Some Voices Carry / Arini Byng · ${credit}`,
  creditHref: "https://www.perimeterbooks.com/products/arini-byng-some-voices-carry",
};

function Spec({ rows }: { rows: { k: string; v: string }[] }) {
  return (
    <dl className="spec">
      {rows.map((row) => (
        <div key={`${row.k}-${row.v}`}>
          <dt>{row.k}</dt>
          <dd>{row.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Home() {
  return (
    <Shell page="home" bleed>
      <header className="split-issue">
        <p className="issue-label">本期 · No.02</p>
        <h1>左雅，右俗。</h1>
        <p>宽屏左右两半。窄屏先左后右。</p>
      </header>

      <div className="split">
        <section className="col col-ya" aria-labelledby="ya-title">
          <p className="col-kicker">雅</p>
          <h2 id="ya-title">规格写全</h2>
          <p className="col-lede">
            判断就一句。
            <br />
            页数、图版、尺寸、装订写清楚。
            <br />
            配色别跟字抢。
          </p>

          <div className="specimen">
            <h3>Don't Worry Boys</h3>
            <p className="specimen-by">Stanley Stellar</p>
            <FigureView page="home" figure={worry} className="ya-fig" priority />
            <Spec
              rows={[
                { k: "页数", v: "192 pages" },
                { k: "图版", v: "45 colour · 55 duotone plates" },
                { k: "尺寸", v: "219 × 290 mm" },
                { k: "装订", v: "quarterbound hardcover" },
                { k: "编号", v: "LJ227 · September 2026" },
                { k: "Vendor", v: "Loose Joints（自有印记）" },
              ]}
            />
          </div>

          <div className="specimen">
            <h3>Frozen Features</h3>
            <p className="specimen-by">Jason Fulford</p>
            <FigureView page="home" figure={frozen} className="ya-fig" />
            <Spec
              rows={[
                { k: "页数", v: "104 pages" },
                { k: "图版", v: "54 colour plates" },
                { k: "尺寸", v: "240 × 300 mm" },
                { k: "装订", v: "paper hardcover" },
                { k: "印制", v: "double silkscreen" },
                { k: "附件", v: "loose insert" },
                { k: "编号", v: "LJ226" },
                { k: "Vendor", v: "Loose Joints（自有印记）" },
              ]}
            />
          </div>

          <div className="specimen">
            <h3>In the Beginning</h3>
            <p className="specimen-by">Roe Ethridge · 三册 facsimile，用橡皮筋捆</p>
            <FigureView page="home" figure={beginning} className="ya-fig" />
            <Spec
              rows={[
                { k: "第一册", v: "36 pages · 200 × 250 mm" },
                { k: "第二册", v: "88 pages · 200 × 250 mm" },
                { k: "第三册", v: "16 pages · 200 × 250 mm" },
                { k: "装订", v: "rubber band" },
                { k: "编号", v: "LJ218 · February 2026" },
                { k: "Vendor", v: "Loose Joints（自有印记）" },
              ]}
            />
          </div>
        </section>

        <section className="col col-su" aria-labelledby="su-title">
          <p className="col-kicker">俗</p>
          <h2 id="su-title">喜欢的几张</h2>
          <p className="col-lede">人好看就说好看。图挨近一点，字别端着。</p>

          <section className="su-zone" aria-labelledby="su-people">
            <h3 id="su-people">人</h3>
            <p>这三张我留着看，都是杂志上的人。</p>
            <div className="su-people">
              <FigureView page="home" figure={coco} className="su-fig su-lead" priority />
              <FigureView page="home" figure={cathy} className="su-fig" />
              <FigureView page="home" figure={autumn} className="su-fig" />
            </div>
          </section>

          <section className="su-zone" aria-labelledby="su-desk">
            <h3 id="su-desk">桌上</h3>
            <p>秋，用中古日本彩票来说。同系列，旁白换一句就行。</p>
            <div className="su-pair">
              <FigureView page="home" figure={lotteryA} className="su-fig" />
              <FigureView page="home" figure={lotteryB} className="su-fig" />
            </div>
          </section>

          <section className="su-zone" aria-labelledby="su-books">
            <h3 id="su-books">两本书</h3>
            <p>就这两本，当桌上的东西看。</p>
            <FigureView page="home" figure={retracer} className="su-fig" />
            <FigureView page="home" figure={voices} className="su-fig su-follow" />
          </section>
        </section>
      </div>
    </Shell>
  );
}

mount(<Home />);
