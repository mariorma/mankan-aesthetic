import { useState } from "react";
import type { Transition, Variant } from "motion/react";
import { easeOutCubic } from "./kit/reduced";

export type Face = "biao" | "li";

export function useFaceFlip() {
  const [face, setFace] = useState<Face>("biao");

  function flip() {
    setFace((current) => (current === "biao" ? "li" : "biao"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return { face, flip };
}

export function faceMotion(reduced: boolean): {
  variants: { enter: Variant; center: Variant; exit: Variant };
  transition: Transition;
} {
  if (reduced) {
    return {
      variants: {
        enter: { opacity: 0 },
        center: { opacity: 1, rotateX: 0, y: 0 },
        exit: { opacity: 0 },
      },
      transition: { duration: 0.01, ease: easeOutCubic },
    };
  }
  return {
    variants: {
      enter: { opacity: 0, rotateX: 14, y: 48 },
      center: { opacity: 1, rotateX: 0, y: 0 },
      exit: { opacity: 0, rotateX: -10, y: -28 },
    },
    transition: { duration: 0.7, ease: easeOutCubic },
  };
}
