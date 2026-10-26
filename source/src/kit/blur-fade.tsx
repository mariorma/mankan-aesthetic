/**
 * Magic UI — Blur Fade
 * https://magicui.design/docs/components/blur-fade (MIT)
 */
import { AnimatePresence, motion, useInView, type UseInViewOptions, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";
import { easeOutCubic } from "./reduced";

type MarginType = UseInViewOptions["margin"];

export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.7,
  offset = 28,
  direction = "up",
  inView = false,
  inViewMargin = "-40px",
  blur = "12px",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  offset?: number;
  direction?: "up" | "down" | "left" | "right";
  inView?: boolean;
  inViewMargin?: MarginType;
  blur?: string;
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const hiddenShift = direction === "right" || direction === "down" ? -offset : offset;
  const variants: Variants = {
    hidden: { [axis]: hiddenShift, opacity: 0, filter: `blur(${blur})` },
    visible: { [axis]: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={variants}
        transition={{ delay: 0.04 + delay, duration, ease: easeOutCubic }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
