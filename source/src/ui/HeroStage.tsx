import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { imageSrc, type DailyEntry } from "../data/daily";
import { HeldStage, webgl2Available } from "../gl/held-stage";
import { useReducedMotion } from "./reduced";

function useWide() {
  const [wide, setWide] = useState(() => window.matchMedia("(min-width: 761px)").matches);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 761px)");
    const apply = () => setWide(media.matches);
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);
  return wide;
}

export function HeroStage({ slides, index }: { slides: DailyEntry[]; index: number }) {
  const reduced = useReducedMotion();
  const wide = useWide();
  const [failed, setFailed] = useState(false);
  const live = !reduced && wide && !failed && webgl2Available();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HeldStage | null>(null);
  const slide = slides[index];

  useEffect(() => {
    if (!live) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    let stage: HeldStage;
    try {
      stage = new HeldStage(canvas);
    } catch {
      setFailed(true);
      return;
    }
    stageRef.current = stage;
    let visible = true;
    const sync = () => (visible && !document.hidden ? stage.play() : stage.pause());
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    io.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      stage.destroy();
      stageRef.current = null;
    };
  }, [live]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !slide?.image) return;
    void stage.show(imageSrc(slide.image)).catch(() => undefined);
    const upcoming = [1, 2].map((step) => slides[(index + step) % slides.length]?.image).filter(Boolean);
    stage.preload(upcoming.map((image) => imageSrc(image!)));
  }, [live, slide, slides, index]);

  if (!slide?.image) return <div className="hero-stage is-empty" />;

  if (!live) {
    return (
      <div className="hero-stage is-still">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={slide.id}
            src={imageSrc(slide.image)}
            alt={slide.image.alt || slide.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 1.2 }}
          />
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div
      className="hero-stage is-live"
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        stageRef.current?.setPointer((event.clientX - rect.left) / rect.width, 1 - (event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => stageRef.current?.releasePointer()}
    >
      <canvas ref={canvasRef} role="img" aria-label={slide.image.alt || slide.title} />
    </div>
  );
}
