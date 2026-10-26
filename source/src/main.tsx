import { useState } from "react";
import type { Figure } from "./figure";
import { faceMotion, useFaceFlip } from "./flip";
import { UvMark, UvStack, type Mark } from "./kit/controls";
import { HoverEffect } from "./kit/hover-effect";
import { useReducedMotion } from "./kit/reduced";
import { CardSpotlight } from "./kit/card-spotlight";
import { TransitionPanel } from "./kit/transition-panel";
import { mount, Shell } from "./Shell";
import { FilmReel } from "./kit/film";
import type { StageShot } from "./kit/stage3d";
import { assetHref } from "./paths";
import { Chapter, Cover, Plate, RiseScope, toneSpot } from "./spread";
import { weekRefs } from "./week-refs";

function shots(figures: Figure[]): StageShot[] {
  return figures.slice(0, 5).map((figure) => ({
    src: assetHref("home", figure.file),
    alt: figure.alt,
    width: figure.width,
    height: figure.height,
  }));
}

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

// 新上旧下。八张同在 475f64a 进库，文件里后写到的视为更新。首项是封面。
const people: { name: string; figure: Figure }[] = [
  { name: "小渕花梨", figure: karin },
  { name: "绣球", figure: hydrangea },
  { name: "麻倉瑞季", figure: friday },
  { name: "beautybeast", figure: beautybeast },
  { name: "kokoro", figure: kokoro },
  { name: "iori", figure: iori },
  { name: "yua", figure: yua },
  { name: "enako", figure: enako },
];

const markKey = "mankan-li-marks";

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
  const [saved, setSaved] = useState<Record<string, Mark>>(readMarks);
  const { face, flip } = useFaceFlip();
  const reduced = useReducedMotion();
  const motion = faceMotion(reduced);

  function choose(file: string, mark: Mark) {
    setSaved((current) => {
      const next = { ...current, [file]: mark };
      writeMarks(next);
      return next;
    });
  }

  const rejected = [
    ...people.filter((person) => saved[person.figure.file] === "差").map((person) => person.figure.file),
    ...Object.keys(saved).filter(
      (file) => saved[file] === "差" && !people.some((person) => person.figure.file === file),
    ),
  ];

  return (
    <Shell page="home" face={face} onFlip={flip} footerNote={face === "li" ? <RejectList files={rejected} /> : undefined}>
      <TransitionPanel
        activeIndex={face === "biao" ? 0 : 1}
        variants={motion.variants}
        transition={motion.transition}
        style={{ transformOrigin: "50% 0" }}
      >
        {[
          <FaceBiao key="biao" />,
          <FaceLi key="li" saved={saved} onChoose={choose} />,
        ]}
      </TransitionPanel>
    </Shell>
  );
}

function FaceBiao() {
  const lead = weekRefs[0];
  return (
    <RiseScope>
      <Cover
        face="biao"
        eyebrow="本期 · No.03 · 表"
        title="审美积累"
        deck={"这一周九条。\n先写判断，再写谁出的。"}
        marquee={weekRefs.map((ref) => ref.title)}
        spine={weekRefs.map((ref) => ref.watch)}
        stat={{ value: String(weekRefs.length).padStart(2, "0"), k: "条", s: "先写判断" }}
        stage={shots(weekRefs.flatMap((ref) => (ref.figure ? [ref.figure] : [])))}
        note={lead.figure ? <p className="credit">{lead.figure.credit}</p> : undefined}
      />
      <FilmReel
        kicker="影像"
        title="在站里看"
        items={[
          {
            title: "压抑 / 执念",
            by: "哔哩哔哩",
            href: "https://www.bilibili.com/video/BV1Aepi6KErg/",
          },
          {
            title: "2024 的刊面",
            by: "YouTube",
            href: "https://www.youtube.com/watch?v=K5sKMHW7NKw",
          },
        ]}
      />
      <div className="issue">
        <Chapter kicker="目录" title="先挑一条">
          <HoverEffect
            items={weekRefs.map((ref) => ({
              title: ref.title,
              description: `${ref.no} · ${ref.by}`,
              link: `#ref-${ref.no}`,
            }))}
          />
        </Chapter>
        <Chapter kicker="正文" title="写下来的判断">
          {weekRefs.map((ref, index) => (
            <CardSpotlight
              key={ref.no}
              id={`ref-${ref.no}`}
              className={index % 2 === 1 ? "spread rise is-flip" : "spread rise"}
              color={toneSpot("biao")}
            >
              <div className="spread-copy">
                <p className="spread-no">{ref.no}</p>
                <h3>{ref.title}</h3>
                <p className="by">{ref.by}</p>
                <p className="judgment">{ref.judgment}</p>
                <Spec
                  rows={[
                    { k: "看什么", v: ref.watch },
                    { k: "Vendor", v: ref.vendor },
                  ]}
                />
                {ref.imageNote && <p className="img-note">{ref.imageNote}</p>}
              </div>
              {ref.figure && (
                <Plate page="home" figure={ref.figure} linkLabel={ref.title} tilt intro amp={12} />
              )}
            </CardSpotlight>
          ))}
        </Chapter>
      </div>
    </RiseScope>
  );
}

function FaceLi({
  saved,
  onChoose,
}: {
  saved: Record<string, Mark>;
  onChoose: (file: string, mark: Mark) => void;
}) {
  const lead = people[0];
  const rest = people.slice(1);
  return (
    <RiseScope>
      <Cover
        face="li"
        eyebrow="本期 · No.03 · 裏"
        title="美女赏析"
        deck={"人好看就说好看。\n每张几句，看完标好、中、差。"}
        marquee={people.map((person) => person.name)}
        spine={people.map((person) => person.name)}
        stat={{ value: String(people.length).padStart(2, "0"), k: "人", s: "看完再标" }}
        stage={shots(people.map((person) => person.figure))}
        note={
          <>
            <p className="credit">{lead.figure.credit}</p>
            <UvMark file={lead.figure.file} value={saved[lead.figure.file] ?? "中"} onChoose={onChoose} />
          </>
        }
      />
      <div className="issue">
        <Chapter kicker="人" title="其余的">
          <div className="portraits">
            {rest.map((person) => (
              <CardSpotlight key={person.figure.file} className="portrait rise" color={toneSpot("li")}>
                <h3>{person.name}</h3>
                <Plate page="home" figure={person.figure} linkLabel={person.name} tilt intro amp={12}>
                  <UvMark
                    file={person.figure.file}
                    value={saved[person.figure.file] ?? "中"}
                    onChoose={onChoose}
                  />
                </Plate>
              </CardSpotlight>
            ))}
          </div>
        </Chapter>
      </div>
    </RiseScope>
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
          <UvStack onClick={copy}>{copied ? "已复制" : "复制"}</UvStack>
        </>
      )}
    </details>
  );
}

mount(<Home />);
