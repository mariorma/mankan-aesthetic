import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

const enako: Figure = {
  file: "li-enako-yk.webp",
  alt: "えなこ，白兔耳，双手比心，ヤングキング封面",
  width: 1062,
  height: 1500,
  caption: "兔耳，双手比心。右边大字写着えなこ。",
  credit: `喜欢名单 · enako · ヤングキング封面 · ${credit}`,
};

const yua: Figure = {
  file: "li-yua-plaid.webp",
  alt: "yua 穿格子挂脖裙，在电梯镜子前自拍",
  width: 1200,
  height: 1600,
  caption: "格子裙，马尾，电梯镜子里自拍。",
  credit: `喜欢名单 · yua · 日常搜图 · ${credit}`,
};

const iori: Figure = {
  file: "li-iori-stripe.webp",
  alt: "iori 穿蓝条纹衬衫，站在老房子里，头顶一盏灯泡",
  width: 900,
  height: 1600,
  caption: "蓝条纹衬衫，老房子，头顶一盏白灯泡。",
  credit: `喜欢名单 · iori · 日常搜图 · ${credit}`,
};

const kokoro: Figure = {
  file: "li-kokoro-swim.webp",
  alt: "kokoro 粉色短发，在泳池边比耶，穿浅蓝色泳衣",
  width: 1200,
  height: 1600,
  caption: "泳池边，粉色短发，比了个耶。",
  credit: `喜欢名单 · kokoro · 日常搜图 · ${credit}`,
};

const beautybeast: Figure = {
  file: "li-beautybeast-cos.webp",
  alt: "beautybeast cos，红裙子和珍珠项链，站在玫瑰拱门下",
  width: 800,
  height: 1200,
  caption: "红裙子，珍珠，玫瑰拱门。cos 贝尔那套。",
  credit: `喜欢名单 · beautybeast cos · ${credit}`,
};

const friday: Figure = {
  file: "li-friday-mizuki.webp",
  alt: "金曜美人，麻倉瑞季，浅蓝蕾丝，侧脸贴过来",
  width: 1200,
  height: 790,
  caption: "麻倉瑞季，浅蓝蕾丝，脸贴过来。",
  credit: `喜欢名单 · 金曜美人 · 麻倉瑞季 · ${credit}`,
};

const hydrangea: Figure = {
  file: "li-hydrangea.webp",
  alt: "绣球花叶子前，碎花深色短袖，齐刘海",
  width: 1080,
  height: 1350,
  caption: "绣球花叶子挡着半边，碎花衣服。",
  credit: `喜欢名单 · strawbelly · 绣球花 · ${credit}`,
};

const karin: Figure = {
  file: "li-karin-tulip.webp",
  alt: "小渕花梨，橙毛衣，抱着一把郁金香，背后是红砖墙",
  width: 1280,
  height: 1600,
  caption: "橙毛衣，一把郁金香，红砖墙。",
  credit: `喜欢名单 · 小渕花梨 · karin_obuchi · ${credit}`,
};

const people: Figure[] = [enako, yua, iori, kokoro, beautybeast, friday, hydrangea, karin];

const markKey = "mankan-li-marks";
const marks = ["好", "中", "差"] as const;
type Mark = (typeof marks)[number];

function readMarks(): Record<string, Mark> {
  try {
    const raw = localStorage.getItem(markKey);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const saved: Record<string, Mark> = {};
    for (const [file, value] of Object.entries(parsed)) {
      if (value === "好" || value === "中" || value === "差") saved[file] = value;
    }
    return saved;
  } catch {
    return {};
  }
}

function writeMarks(next: Record<string, Mark>) {
  try {
    localStorage.setItem(markKey, JSON.stringify(next));
  } catch {
    // 记不住就只留在这一页，不打断翻看。
  }
}

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
  const [saved, setSaved] = useState<Record<string, Mark>>(readMarks);
  const flipped = useRef(false);

  function choose(file: string, mark: Mark) {
    setSaved((current) => {
      const next = { ...current, [file]: mark };
      writeMarks(next);
      return next;
    });
  }

  const rejected = [
    ...people.filter((figure) => saved[figure.file] === "差").map((figure) => figure.file),
    ...Object.keys(saved).filter(
      (file) => saved[file] === "差" && !people.some((figure) => figure.file === file),
    ),
  ];

  useLayoutEffect(() => {
    const dark = face === "li";
    document.documentElement.classList.toggle("face-dark", dark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#0c0c0c" : "#f4f1eb");
    document
      .querySelector('meta[name="color-scheme"]')
      ?.setAttribute("content", dark ? "dark" : "light");
    return () => {
      document.documentElement.classList.remove("face-dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#f4f1eb");
      document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", "light");
    };
  }, [face]);

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
    <Shell page="home" bleed footerNote={face === "li" ? <RejectList files={rejected} /> : undefined}>
      <header className="split-issue">
        <p className="issue-label">本期 · No.02</p>
        <h1>表雅，里俗。</h1>
        <p className="face-lead">一次看一面。点边上的半圆翻过去。</p>
        <p className="face-hint">{toInside ? "对面是里。" : "对面是表。"}</p>
      </header>

      <div className="flip-stage">
        {toInside ? <FaceBiao /> : <FaceLi saved={saved} onChoose={choose} />}
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

function FaceLi({
  saved,
  onChoose,
}: {
  saved: Record<string, Mark>;
  onChoose: (file: string, mark: Mark) => void;
}) {
  return (
        <section className="face face-li" aria-labelledby="su-title">
          <div className="face-inner">
          <p className="col-kicker">里 · 俗</p>
          <h2 id="su-title">喜欢的几张</h2>
          <p className="col-lede">
            人好看就说好看。
            <br />
            这几张是喜欢名单里的。
          </p>

          <section className="su-zone" aria-labelledby="su-people">
            <h3 id="su-people">人</h3>
            <p>封面、自拍、cos，都留着。</p>
            <div className="su-people">
              {people.map((figure, index) => (
                <FigureView
                  key={figure.file}
                  page="home"
                  figure={figure}
                  className={index === 0 ? "su-fig su-lead" : "su-fig"}
                  priority={index === 0}
                >
                  <MarkControl
                    file={figure.file}
                    value={saved[figure.file] ?? "中"}
                    onChoose={onChoose}
                  />
                </FigureView>
              ))}
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
          </div>
        </section>
  );
}

function MarkControl({
  file,
  value,
  onChoose,
}: {
  file: string;
  value: Mark;
  onChoose: (file: string, mark: Mark) => void;
}) {
  return (
    <div className="mark" role="radiogroup" aria-label={`${file}，好中差`}>
      {marks.map((mark) => (
        <button
          key={mark}
          type="button"
          role="radio"
          aria-checked={value === mark}
          onClick={() => onChoose(file, mark)}
        >
          {mark}
        </button>
      ))}
    </div>
  );
}

function RejectList({ files }: { files: string[] }) {
  const [copied, setCopied] = useState(false);
  const text = files.join("\n");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <details className="reject-list">
      <summary>差评清单</summary>
      <p>标成差的文件名，一行一个。</p>
      {files.length === 0 ? (
        <p className="reject-empty">还没有。</p>
      ) : (
        <>
          <pre>{text}</pre>
          <button type="button" className="reject-copy" onClick={copy}>
            {copied ? "已复制" : "复制"}
          </button>
        </>
      )}
    </details>
  );
}

mount(<Home />);
