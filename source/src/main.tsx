import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { Figure } from "./entries";
import { FigureView } from "./Figure";
import { mount, Shell } from "./Shell";
import { weekRefs } from "./week-refs";

// 两面各写各的：不要互链，不要在文案里点名另一面的内容。

const enako: Figure = {
  file: "li-enako-yk.webp",
  alt: "えなこ，白兔耳，双手比心，ヤングキング封面",
  width: 1062,
  height: 1500,
  caption: "兔耳，双手比心，笑得很开。甜，手势干净。",
  credit: `喜欢名单 · enako · ヤングキング封面 · 点图进原帖`,
  creditHref: "https://x.com/enako_cos/status/2099342591829688659",
};

const yua: Figure = {
  file: "li-yua-plaid.webp",
  alt: "yua 穿格子挂脖裙，在电梯镜子前自拍",
  width: 1200,
  height: 1600,
  caption: "格子挂脖裙，马尾，电梯镜子里自拍。光是平的，人还是好看。",
  credit: `喜欢名单 · yua · 日常搜图 · 点图进主页`,
  creditHref: "https://x.com/yua_mikami",
};

const iori: Figure = {
  file: "li-iori-stripe.webp",
  alt: "iori 穿蓝条纹衬衫，站在老房子里，头顶一盏灯泡",
  width: 900,
  height: 1600,
  caption: "蓝条纹衬衫，老房子，头顶一盏白灯泡。人站得稳。",
  credit: `喜欢名单 · iori · 日常搜图 · 点图进主页`,
  creditHref: "https://x.com/iorimoe_five",
};

const kokoro: Figure = {
  file: "li-kokoro-swim.webp",
  alt: "kokoro 粉色短发，在泳池边比耶，穿浅蓝色泳衣",
  width: 1200,
  height: 1600,
  caption: "泳池边，粉色短发，比了个耶。颜色亮，人更亮。",
  credit: `喜欢名单 · kokoro · 日常搜图 · 点图进主页`,
  creditHref: "https://x.com/kokoro777pp",
};

const beautybeast: Figure = {
  file: "li-beautybeast-cos.webp",
  alt: "beautybeast cos，红裙子和珍珠项链，站在玫瑰拱门下",
  width: 800,
  height: 1200,
  caption: "红裙子，珍珠，玫瑰拱门。cos 贝尔，甜和正式叠在一起。",
  credit: `喜欢名单 · beautybeast cos · 点图去找原帖`,
  creditHref: "https://x.com/search?q=beautybeast%20cos&f=media",
};

const friday: Figure = {
  file: "li-friday-mizuki.webp",
  alt: "金曜美人，麻倉瑞季，浅蓝蕾丝，侧脸贴过来",
  width: 1200,
  height: 790,
  caption: "麻倉瑞季，浅蓝蕾丝，脸贴过来。近，但不挤。",
  credit: `喜欢名单 · 金曜美人 · 麻倉瑞季 · 点图进原页`,
  creditHref: "https://friday.gold/gravure/article/444633",
};

const hydrangea: Figure = {
  file: "li-hydrangea.webp",
  alt: "绣球花叶子前，碎花深色短袖，齐刘海",
  width: 1080,
  height: 1350,
  caption: "绣球叶子挡着半边，碎花深色短袖，齐刘海。花是配的，人是看的。",
  credit: `喜欢名单 · strawbelly · 绣球花 · 点图进主页`,
  creditHref: "https://x.com/strawbelly",
};

const karin: Figure = {
  file: "li-karin-tulip.webp",
  alt: "小渕花梨，橙毛衣，抱着一把郁金香，背后是红砖墙",
  width: 1280,
  height: 1600,
  caption: "橙毛衣，一把郁金香，红砖墙。颜色暖，人安静。",
  credit: `喜欢名单 · 小渕花梨 · note 主页 · 点图进主页`,
  creditHref: "https://note.com/karin_obuchi",
};

// 新上旧下：按上站时间，新的在前。八张同在 475f64a 进库，文件里后写到的视为更新。首项是 lead。
const people: Figure[] = [karin, hydrangea, friday, beautybeast, kokoro, iori, yua, enako];

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
        <p className="issue-label">本期 · No.03</p>
        <h1>{face === "biao" ? "审美积累" : "美女赏析"}</h1>
        <p className="face-lead">
          {face === "biao" ? (
            <>
              这一周九条。
              <br />
              先写判断，再写谁出的。
            </>
          ) : (
            <>
              人好看就说好看。
              <br />
              每张几句，看完标好、中、差。
            </>
          )}
        </p>
        <p className="face-how">点边上的半圆翻过去。</p>
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
  const firstFigure = weekRefs.find((ref) => ref.figure)?.no;
  return (
    <section className="face face-biao" aria-labelledby="ya-title">
      <div className="face-inner">
        <p className="col-kicker">表</p>
        <h2 id="ya-title">本周九条</h2>
        <div className="ref-index">
          {weekRefs.map((ref) => (
            <article key={ref.no} className="ref" id={`ref-${ref.no}`}>
              <div className="ref-head">
                <p className="ref-no">{ref.no}</p>
                <div className="ref-main">
                  <h3>{ref.title}</h3>
                  <p className="ref-by">{ref.by}</p>
                </div>
              </div>
              {ref.figure && (
                <FigureView
                  page="home"
                  figure={ref.figure}
                  className="ya-fig"
                  priority={ref.no === firstFigure}
                  linkLabel={ref.title}
                />
              )}
              <p className="ref-judge">{ref.judgment}</p>
              {!ref.figure && (
                <p className="ref-post">
                  <a
                    href={ref.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`打开原帖：${ref.title}`}
                  >
                    原帖
                  </a>
                </p>
              )}
              <Spec
                rows={[
                  { k: "看什么", v: ref.watch },
                  { k: "Vendor", v: ref.vendor },
                ]}
              />
            </article>
          ))}
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
          <p className="col-kicker">裏</p>
          <h2 id="su-title">喜欢的人</h2>
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
