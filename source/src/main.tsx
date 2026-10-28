import { useState } from "react";
import type { Figure } from "./figure";
import { faceMotion, useFaceFlip } from "./flip";
import { UvStack, type Mark } from "./kit/controls";
import { HoverEffect } from "./kit/hover-effect";
import { useReducedMotion } from "./kit/reduced";
import { CardSpotlight } from "./kit/card-spotlight";
import { TransitionPanel } from "./kit/transition-panel";
import { CopyMarks, HiddenMarks, MarkChoices, useMarkStore } from "./mark-ui";
import { LI_MARK_KEY, liPieces, liRejectLines, markOf, withOrphans, type MarkMap, type ScoredPiece } from "./marks";
import { mount, Shell } from "./Shell";
import { FilmReel } from "./kit/film";
import type { StageShot } from "./kit/stage3d";
import { beautyEssays, beautyLog } from "./learning-log";
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
// 裏·首页只排 beautyEssays 点名的几张。图仍在 beautyLog，不另存一份。

const featured = beautyEssays.flatMap((essay) => {
  const card = beautyLog.find((item) => item.id === essay.id);
  if (!card?.figure) return [];
  return [{ essay, card, figure: card.figure }];
});

const countWord = ["零", "一", "两", "三", "四", "五", "六", "七", "八", "九"];

function pieceOf(item: (typeof featured)[number]): ScoredPiece {
  return {
    id: item.card.id,
    label: `${item.card.date} · ${item.card.title}`,
    legacy: [item.figure.file],
  };
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
  const { saved, choose } = useMarkStore(LI_MARK_KEY);
  const { face, flip } = useFaceFlip();
  const reduced = useReducedMotion();
  const motion = faceMotion(reduced);
  const rejected = liRejectLines(saved);

  return (
    <Shell
      page="home"
      face={face}
      onFlip={flip}
      footerNote={
        face === "li" ? (
          <>
            <RejectList files={rejected} />
            <CopyMarks />
          </>
        ) : undefined
      }
    >
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
        eyebrow="首页 · 表 · 本期杂志"
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
  saved: MarkMap;
  onChoose: (id: string, mark: Mark, legacy?: readonly string[]) => void;
}) {
  const visible = featured.filter((item) => markOf(saved, item.card.id, [item.figure.file]) !== "差");
  const n = countWord[visible.length] ?? String(visible.length);
  const reserved = liPieces().flatMap((piece) => [piece.id, ...(piece.legacy ?? [])]);
  const hiddenPieces = withOrphans(featured.map(pieceOf), saved, reserved);

  return (
    <RiseScope>
      <header className="mast">
        <p className="eyebrow">首页 · 裏 · 人</p>
        <h1 className="display">美女赏析</h1>
        <p className="deck">精选{n}张。每张写清楚好看在哪，看完标好、中、差。</p>
      </header>
      <div className="issue">
        {visible.map((piece, index) => {
          const scored = pieceOf(piece);
          return (
            <article
              key={piece.card.id}
              className={index % 2 === 1 ? "essay rise is-flip" : "essay rise"}
              id={piece.card.id}
            >
              <p className="essay-kicker">{piece.essay.kicker}</p>
              <h2 className="essay-title">{piece.card.title}</h2>
              <div className="essay-spread">
                <p className="judgment">{piece.essay.judgment}</p>
                <div className="essay-plate">
                  <Plate
                    page="home"
                    figure={piece.figure}
                    linkLabel={piece.card.title}
                    omitCaption
                    priority={index === 0}
                  />
                </div>
                <div className="essay-body">
                  {piece.essay.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
              <div className="essay-mark">
                <MarkChoices piece={scored} saved={saved} onChoose={onChoose} />
              </div>
            </article>
          );
        })}
        <HiddenMarks pieces={hiddenPieces} saved={saved} onChoose={onChoose} />
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
        <p className="reject-empty">还没有标成差的人。</p>
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
