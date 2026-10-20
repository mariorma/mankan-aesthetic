import { useEffect, useRef, useState } from "react";
import type { Figure } from "./entries";
import { FigureView } from "./Figure";
import { mount, Shell } from "./Shell";

// 两面各写各的：不要互链，不要在文案里点名另一面的内容。

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

const autumn: Figure = {
  file: "log-tgw-autumn-durald.webp",
  alt: "Autumn Durald Arkapaw 穿黑西装和白裙，坐在白墙前",
  width: 1400,
  height: 583,
  caption: "黑西装，白裙子，人靠右坐。脸上的光是匀的，没有硬阴影。",
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

const shortlist: Figure = {
  file: "log-aperture-2026-shortlist.webp",
  alt: "一摊摄影书封面，中间有齐刘海、脸上贴字的人像，旁边有低头的侧脸",
  width: 1024,
  height: 682,
  caption: "这一摊里我停在中间那张：刘海齐，脸上贴了字。旁边还有一张低头的侧脸，光也是平的。",
  credit: `原图 · Aperture · 2026 PhotoBook Awards / photo Daniel Salemi · ${credit}`,
  creditHref: "https://aperture.org/editorial/announcing-the-2026-photobook-awards-shortlist/",
};

function Plum() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(72 20 20)" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(144 20 20)" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(216 20 20)" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(288 20 20)" />
        <circle cx="20" cy="20" r="2.6" />
      </g>
    </svg>
  );
}

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

type Face = "biao" | "li";

function Home() {
  const [face, setFace] = useState<Face>("biao");
  const flipped = useRef(false);

  useEffect(() => {
    if (!flipped.current) return;
    document.getElementById("flip-tab")?.focus({ preventScroll: true });
  }, [face]);

  function flip() {
    flipped.current = true;
    setFace((current) => (current === "biao" ? "li" : "biao"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  const toInside = face === "biao";

  return (
    <Shell page="home" bleed>
      <header className="split-issue">
        <p className="issue-label">本期 · No.02</p>
        <h1>表雅，里俗。</h1>
        <p className="face-lead">一次看一面。点边上的半圆翻过去。</p>
        <p className="face-hint">{toInside ? "对面是里。" : "对面是表。"}</p>
      </header>

      <div className="flip-stage">
        {toInside ? <FaceBiao /> : <FaceLi />}
        <button
          id="flip-tab"
          type="button"
          className={toInside ? "flip-tab flip-tab-li" : "flip-tab flip-tab-biao"}
          onClick={flip}
          aria-label={toInside ? "翻到里面" : "翻回表面"}
        >
          <span className="flip-mark">
            <Plum />
            <span className="flip-char">{toInside ? "裏" : "表"}</span>
            <Plum />
          </span>
        </button>
      </div>
    </Shell>
  );
}

function FaceBiao() {
  return (
        <section className="face face-biao" aria-labelledby="ya-title">
          <div className="face-inner">
          <p className="col-kicker">表 · 雅</p>
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
          </div>
        </section>
  );
}

function FaceLi() {
  return (
        <section className="face face-li" aria-labelledby="su-title">
          <div className="face-inner">
          <p className="col-kicker">里 · 俗</p>
          <h2 id="su-title">喜欢的几张</h2>
          <p className="col-lede">
            人好看就说好看。
            <br />
            妆收着，光别硬打。
          </p>

          <section className="su-zone" aria-labelledby="su-people">
            <h3 id="su-people">人</h3>
            <p>这两张我留着看。头发、妆、光都收在一个调子里。</p>
            <FigureView page="home" figure={autumn} className="su-fig" priority />
            <FigureView page="home" figure={shortlist} className="su-fig su-follow" />
          </section>

          <section className="su-zone" aria-labelledby="su-desk">
            <h3 id="su-desk">桌上</h3>
            <p>秋，用中古日本彩票来说。同系列，旁白换一句就行。</p>
            <div className="su-pair">
              <FigureView page="home" figure={lotteryA} className="su-fig" />
              <FigureView page="home" figure={lotteryB} className="su-fig" />
            </div>
          </section>
          </div>
        </section>
  );
}

mount(<Home />);
