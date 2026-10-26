import { useLayoutEffect, useRef, type ReactNode } from "react";
import { BackgroundBeams } from "./kit/beams";
import { BlurFade } from "./kit/blur-fade";
import { CardBody, CardContainer, CardItem } from "./kit/card-3d";
import { Glass } from "./kit/glass";
import { Marquee } from "./kit/marquee";
import { useReducedMotion } from "./kit/reduced";
import { AnimatedShinyText } from "./kit/shiny-text";
import { Spotlight } from "./kit/spotlight";
import { TextEffect } from "./kit/text-effect";
import TiltedCard from "./kit/tilted-card";
import { FigureCaption, FigureMedia } from "./Figure";
import type { Figure } from "./figure";
import type { Face } from "./flip";
import type { PageId } from "./paths";

const light = {
  biao: {
    first:
      "radial-gradient(68% 68% at 55% 31%, hsla(8, 100%, 64%, .62) 0, hsla(8, 100%, 46%, .18) 48%, transparent 76%)",
    second: "radial-gradient(50% 50% at 50% 50%, hsla(16, 100%, 68%, .48) 0, transparent 70%)",
    third: "radial-gradient(50% 50% at 50% 50%, hsla(36, 100%, 72%, .34) 0, transparent 72%)",
    from: "#ffd0c2",
    via: "#ff3b24",
    to: "#ffe3a3",
    spot: "rgba(255, 70, 40, 0.32)",
  },
  li: {
    first:
      "radial-gradient(68% 68% at 55% 31%, hsla(38, 92%, 70%, .58) 0, hsla(32, 80%, 48%, .16) 50%, transparent 76%)",
    second: "radial-gradient(50% 50% at 50% 50%, hsla(40, 85%, 68%, .42) 0, transparent 70%)",
    third: "radial-gradient(50% 50% at 50% 50%, hsla(18, 70%, 55%, .3) 0, transparent 72%)",
    from: "#fff1d2",
    via: "#e6b15a",
    to: "#ffd0a6",
    spot: "rgba(230, 177, 90, 0.34)",
  },
} as const;

export function toneSpot(face: Face) {
  return light[face].spot;
}

export function Cover({
  face,
  eyebrow,
  title,
  deck,
  plate,
  marquee,
  spine,
  stat,
}: {
  face: Face;
  eyebrow: string;
  title: string;
  deck: string;
  plate?: ReactNode;
  marquee: string[];
  spine: string[];
  stat: { value: string; k: string; s: string };
}) {
  const reduced = useReducedMotion();
  const coverRef = useRef<HTMLElement>(null);
  const tone = light[face];

  return (
    <section className="cover" ref={coverRef} data-face={face}>
      <BackgroundBeams beamOpacity={0.9} from={tone.from} via={tone.via} to={tone.to} />
      <Spotlight
        gradientFirst={tone.first}
        gradientSecond={tone.second}
        gradientThird={tone.third}
        duration={8}
        xOffset={160}
        width={640}
        height={1200}
        smallWidth={280}
        translateY={-280}
      />
      <div className="cover-layout">
        {spine.length > 0 && (
          <Marquee vertical pauseOnHover className="cover-vmarquee" repeat={3}>
            {spine.map((word, index) => (
              <span className="vword" key={`${word}-${index}`}>
                {word}
              </span>
            ))}
          </Marquee>
        )}
        <div className="cover-copy">
          <AnimatedShinyText className="eyebrow" shimmerWidth={140}>
            {eyebrow}
          </AnimatedShinyText>
          {reduced ? (
            <h1 className="display">{title}</h1>
          ) : (
            <TextEffect
              as="h1"
              per="char"
              preset="fade-in-blur"
              className="display"
              speedReveal={0.42}
              speedSegment={0.42}
            >
              {title}
            </TextEffect>
          )}
          {reduced ? (
            <p className="deck">{deck}</p>
          ) : (
            <TextEffect as="p" per="line" preset="slide" className="deck" delay={0.28} speedSegment={0.5}>
              {deck}
            </TextEffect>
          )}
        </div>
        {plate && <div className="cover-plate">{plate}</div>}
        <CardContainer containerClassName="cover-glass-slot" className="cover-glass-tilt">
          <CardBody>
            <Glass radius={22} mouseContainer={coverRef} elasticity={0.4}>
              <div className="stat">
                <CardItem translateZ={72}>
                  <p className="stat-value">
                    <span className={reduced ? undefined : "anim-track"}>{stat.value}</span>
                  </p>
                </CardItem>
                <CardItem translateZ={40}>
                  <p className="stat-k">{stat.k}</p>
                </CardItem>
                <CardItem translateZ={18}>
                  <p className="stat-s">{stat.s}</p>
                </CardItem>
              </div>
            </Glass>
          </CardBody>
        </CardContainer>
      </div>
      {marquee.length > 0 && (
        <Marquee pauseOnHover className="cover-marquee">
          {marquee.map((item, index) => (
            <span className="mq-item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </Marquee>
      )}
      {reduced ? (
        <p className="cover-cue">
          <span>往下</span>
        </p>
      ) : (
        <BlurFade className="cover-cue" offset={18} blur="8px" delay={0.4}>
          <span className="cover-rule" aria-hidden="true" />
          <span>往下</span>
        </BlurFade>
      )}
    </section>
  );
}

export function Plate({
  page,
  figure,
  priority = false,
  linkLabel,
  tilt = false,
  float = false,
  track = false,
  intro,
  amp = 14,
  children,
}: {
  page: PageId;
  figure: Figure;
  priority?: boolean;
  linkLabel?: string;
  tilt?: boolean;
  float?: boolean;
  track?: boolean;
  /** Plays the entrance once the plate scrolls into view. Defaults to priority. */
  intro?: boolean;
  amp?: number;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const live = tilt && !reduced;
  const media = (
    <FigureMedia page={page} figure={figure} priority={priority} linkLabel={linkLabel} />
  );
  return (
    <figure className="plate">
      <div
        className={live ? "plate-stage is-tilt" : "plate-stage"}
        style={live ? { aspectRatio: `${figure.width} / ${figure.height}` } : undefined}
      >
        {live ? (
          <TiltedCard
            rotateAmplitude={amp}
            scaleOnHover={1.06}
            showTooltip={false}
            gyroscope={false}
            floating={float}
            trackWindow={track}
            intro={intro ?? priority}
            glare={0.72}
            shadow={0.62}
            radius={18}
            containerWidth="100%"
            containerHeight="100%"
            imageWidth="100%"
            imageHeight="100%"
          >
            {media}
          </TiltedCard>
        ) : (
          media
        )}
      </div>
      <FigureCaption figure={figure}>{children}</FigureCaption>
    </figure>
  );
}

export function Chapter({
  id,
  kicker,
  title,
  children,
}: {
  id?: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="chapter" id={id} aria-labelledby={id ? `${id}-title` : undefined}>
      <p className="chapter-kicker">{kicker}</p>
      <div className="chapter-swing">
        <h2 id={id ? `${id}-title` : undefined} className="chapter-title">
          <span className="anim-swing">{title}</span>
        </h2>
      </div>
      {children}
    </section>
  );
}

export function RiseScope({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const nodes = [...root.querySelectorAll<HTMLElement>(".rise")];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-in"));
      return;
    }
    const pending = new Set<HTMLElement>();
    const view = window.innerHeight * 0.92;
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < view) node.classList.add("is-in");
      else pending.add(node);
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          node.classList.add("is-in");
          pending.delete(node);
          io.unobserve(node);
        }
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
    );
    pending.forEach((node) => io.observe(node));
    const safety = window.setTimeout(() => {
      pending.forEach((node) => node.classList.add("is-in"));
    }, 1800);
    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
