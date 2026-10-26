/**
 * Motion Primitives — Transition Panel
 * https://motion-primitives.com/docs/transition-panel (MIT)
 * Swaps the active child with enter / center / exit variants.
 */
import { AnimatePresence, motion, type MotionProps, type Transition, type Variant } from "motion/react";
import type { ReactNode } from "react";

export function TransitionPanel({
  children,
  className = "",
  transition,
  variants,
  activeIndex,
  ...motionProps
}: {
  children: ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps) {
  return (
    <div className={`turn ${className}`.trim()}>
      <AnimatePresence initial={false} mode="popLayout" custom={motionProps.custom}>
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial="enter"
          animate="center"
          exit="exit"
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
