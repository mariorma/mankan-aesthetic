import { useEffect, useLayoutEffect, useRef, useState } from "react";

export type Face = "biao" | "li";

export function useFaceFlip() {
  const [face, setFace] = useState<Face>("biao");
  const flipped = useRef(false);

  useLayoutEffect(() => {
    const dark = face === "li";
    document.documentElement.classList.toggle("face-dark", dark);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", dark ? "#0c0c0c" : "#f4f1eb");
    document
      .querySelector('meta[name="color-scheme"]')
      ?.setAttribute("content", dark ? "dark" : "light");
    return () => {
      document.documentElement.classList.remove("face-dark");
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", "#f4f1eb");
      document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", "light");
    };
  }, [face]);

  useEffect(() => {
    if (!flipped.current) return;
    document.getElementById("flip-tab")?.focus({ preventScroll: true });
  }, [face]);

  function flip() {
    flipped.current = true;
    setFace((current) => (current === "biao" ? "li" : "biao"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  }

  return { face, toInside: face === "biao", flip };
}

function Plum() {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(72 20 20)" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(144 20 20)" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(216 20 20)" />
        <ellipse cx="20" cy="8" rx="6.2" ry="8.2" transform="rotate(288 20 20)" />
        <circle cx="20" cy="20" r="2.6" />
      </g>
    </svg>
  );
}

export function FlipTab({ toInside, onFlip }: { toInside: boolean; onFlip: () => void }) {
  return (
    <button
      id="flip-tab"
      type="button"
      className={toInside ? "flip-tab flip-tab-li" : "flip-tab flip-tab-biao"}
      onClick={onFlip}
      aria-label={toInside ? "翻到里面" : "翻回表面"}
    >
      <span className="flip-mark">
        <Plum />
        <span className="flip-char">{toInside ? "裏" : "表"}</span>
        <Plum />
      </span>
    </button>
  );
}
