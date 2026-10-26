import { useEffect, useState } from "react";

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  return reduced;
}

/** Animista ease-out-cubic. Shared by Motion transitions and the CSS rhythm. */
export const easeOutCubic = [0.215, 0.61, 0.355, 1] as const;
