import { motion, useSpring } from "motion/react";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { useReducedMotion } from "./reduced";

/**
 * Magnetic — after Motion Primitives · Magnetic (MIT) https://motion-primitives.com/docs/magnetic
 * 元素被鼠标吸过去一点。一人房间的肖像用它：磁场。
 */
export function Magnetic({
  children,
  intensity = 0.18,
  range = 360,
  className,
}: {
  children: ReactNode;
  intensity?: number;
  range?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const x = useSpring(0, { stiffness: 26, damping: 14, mass: 0.6 });
  const y = useSpring(0, { stiffness: 26, damping: 14, mass: 0.6 });

  useEffect(() => {
    if (reduced) return;
    const onMove = (event: PointerEvent) => {
      const node = ref.current;
      if (!node || event.pointerType !== "mouse") return;
      const rect = node.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const distance = Math.hypot(dx, dy);
      const reach = range + Math.max(rect.width, rect.height) / 2;
      if (distance < reach) {
        const pull = 1 - distance / reach;
        x.set(dx * intensity * pull);
        y.set(dy * intensity * pull);
      } else {
        x.set(0);
        y.set(0);
      }
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [intensity, range, reduced, x, y]);

  return (
    <motion.div ref={ref} className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

/**
 * Lamp — after Aceternity UI · Lamp Section Header https://ui.aceternity.com/components/lamp-effect
 * 两道锥形光从上面压下来，压抑房间的标题站在光里。颜色换成冷青和琥珀。
 */
export function Lamp({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const from = reduced ? { opacity: 1, width: "34rem" } : { opacity: 0.4, width: "14rem" };
  const to = { opacity: 1, width: "34rem" };
  const transition = { delay: 0.2, duration: 1.4, ease: [0.22, 1, 0.36, 1] as const };
  return (
    <div className="lamp">
      <div className="lamp-light" aria-hidden="true">
        <motion.div className="lamp-cone is-left" initial={from} whileInView={to} viewport={{ once: true }} transition={transition} />
        <motion.div className="lamp-cone is-right" initial={from} whileInView={to} viewport={{ once: true }} transition={transition} />
        <motion.div
          className="lamp-line"
          initial={reduced ? { width: "30rem" } : { width: "10rem" }}
          whileInView={{ width: "30rem" }}
          viewport={{ once: true }}
          transition={transition}
        />
        <div className="lamp-glow" />
        <div className="lamp-mask" />
      </div>
      <div className="lamp-content">{children}</div>
    </div>
  );
}

/**
 * Progressive Blur — after Motion Primitives · Progressive Blur (MIT)
 * https://motion-primitives.com/docs/progressive-blur
 * 一叠 backdrop-filter，每层用渐变遮罩错开，边缘慢慢糊掉。
 */
export function ProgressiveBlur({
  direction = "bottom",
  layers = 7,
  intensity = 0.6,
  className = "",
}: {
  direction?: "top" | "bottom";
  layers?: number;
  intensity?: number;
  className?: string;
}) {
  const angle = direction === "bottom" ? 180 : 0;
  const step = 1 / (layers + 1);
  return (
    <div className={`progressive-blur ${className}`.trim()} aria-hidden="true">
      {Array.from({ length: layers }).map((_, index) => {
        const stops = [index * step, (index + 1) * step, (index + 2) * step, (index + 3) * step].map(
          (value, i) => `rgba(255,255,255,${i === 1 || i === 2 ? 1 : 0}) ${value * 100}%`,
        );
        const mask = `linear-gradient(${angle}deg, ${stops.join(", ")})`;
        const style: CSSProperties = {
          maskImage: mask,
          WebkitMaskImage: mask,
          backdropFilter: `blur(${index * intensity}px)`,
          WebkitBackdropFilter: `blur(${index * intensity}px)`,
        };
        return <div key={index} style={style} />;
      })}
    </div>
  );
}

/**
 * Scroll Reveal — after React Bits · Scroll Reveal https://reactbits.dev/text-animations/scroll-reveal
 * 一句话按字随滚动去模糊。支持 scroll-driven animations 的浏览器跟滚动走；不支持的用 IntersectionObserver 补。
 */
export function ScrollWords({ text, className = "", as: Tag = "p" }: { text: string; className?: string; as?: "p" | "h2" | "h3" }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (CSS.supports?.("animation-timeline: view()")) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add("is-in");
        io.disconnect();
      },
      { rootMargin: "0px 0px -18% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);
  const chars = Array.from(text);
  return (
    <Tag ref={ref as never} className={`scroll-words ${className}`.trim()} aria-label={text}>
      {chars.map((char, index) => (
        <span key={index} aria-hidden="true" style={{ "--i": index } as CSSProperties}>
          {char}
        </span>
      ))}
    </Tag>
  );
}
