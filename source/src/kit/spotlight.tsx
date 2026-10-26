/**
 * Aceternity UI — Spotlight
 * https://ui.aceternity.com/components/spotlight (the "spotlight-new" build)
 * Two cones of light sweep in from the edges. Gradients are passed in so the
 * issue can run lacquer or gold instead of the demo blue.
 */
import { motion } from "motion/react";
import { useReducedMotion } from "./reduced";

type SpotlightProps = {
  gradientFirst?: string;
  gradientSecond?: string;
  gradientThird?: string;
  translateY?: number;
  width?: number;
  height?: number;
  smallWidth?: number;
  duration?: number;
  xOffset?: number;
};

export function Spotlight({
  gradientFirst = "radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .08) 0, hsla(210, 100%, 55%, .02) 50%, hsla(210, 100%, 45%, 0) 80%)",
  gradientSecond = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .06) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)",
  gradientThird = "radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .04) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)",
  translateY = -350,
  width = 560,
  height = 1380,
  smallWidth = 240,
  duration = 7,
  xOffset = 100,
}: SpotlightProps = {}) {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <motion.div className="ace-spot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <motion.div
        className="ace-spot__side ace-spot__side--left"
        animate={{ x: [0, xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div
          className="ace-spot__beam"
          style={{
            transform: `translateY(${translateY}px) rotate(-45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
        <div
          className="ace-spot__beam ace-spot__beam--origin-left"
          style={{
            transform: "rotate(-45deg) translate(5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
        />
        <div
          className="ace-spot__beam ace-spot__beam--origin-left"
          style={{
            transform: "rotate(-45deg) translate(-180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
        />
      </motion.div>

      <motion.div
        className="ace-spot__side ace-spot__side--right"
        animate={{ x: [0, -xOffset, 0] }}
        transition={{ duration, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <div
          className="ace-spot__beam ace-spot__beam--right"
          style={{
            transform: `translateY(${translateY}px) rotate(45deg)`,
            background: gradientFirst,
            width: `${width}px`,
            height: `${height}px`,
          }}
        />
        <div
          className="ace-spot__beam ace-spot__beam--right ace-spot__beam--origin-right"
          style={{
            transform: "rotate(45deg) translate(-5%, -50%)",
            background: gradientSecond,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
        />
        <div
          className="ace-spot__beam ace-spot__beam--right ace-spot__beam--origin-right"
          style={{
            transform: "rotate(45deg) translate(180%, -70%)",
            background: gradientThird,
            width: `${smallWidth}px`,
            height: `${height}px`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
