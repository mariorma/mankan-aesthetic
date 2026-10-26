/**
 * Uiverse controls, recolored for the issue.
 * - Face switch: gharsh11032000 / brave-pug-20 (toggle, knob + glow)
 *   https://github.com/uiverse-io/galaxy/blob/main/Toggle-switches/gharsh11032000_brave-pug-20.html
 * - 好中差: gharsh11032000 / moody-dog-23 (radio dot, scale + glow)
 *   https://github.com/uiverse-io/galaxy/blob/main/Radio-buttons/gharsh11032000_moody-dog-23.html
 * - Stacked action: adamgiebl / big-ape-36 (five layers step out on hover)
 *   https://github.com/uiverse-io/galaxy/blob/main/Buttons/adamgiebl_big-ape-36.html
 * Galaxy is MIT. The skew on the original stack button is dropped so Chinese stays readable;
 * the five-layer offset is the part you see.
 */
import type { ReactNode } from "react";
import type { Face } from "../flip";

export function UvFace({ face, onFlip }: { face: Face; onFlip: () => void }) {
  return (
    <div className="uv-face" data-face={face} role="group" aria-label="表裏">
      <span className="uv-face__knob" aria-hidden="true" />
      <button type="button" aria-pressed={face === "biao"} onClick={() => face !== "biao" && onFlip()}>
        表
      </button>
      <button type="button" aria-pressed={face === "li"} onClick={() => face !== "li" && onFlip()}>
        裏
      </button>
    </div>
  );
}

const marks = ["好", "中", "差"] as const;
export type Mark = (typeof marks)[number];

export function UvMark({
  file,
  value,
  onChoose,
}: {
  file: string;
  value: Mark;
  onChoose: (file: string, mark: Mark) => void;
}) {
  return (
    <div className="uv-mark" role="radiogroup" aria-label={`${file}，好中差`}>
      {marks.map((mark) => (
        <label key={mark} className="uv-mark__opt">
          <input
            type="radio"
            name={file}
            value={mark}
            checked={value === mark}
            onChange={() => onChoose(file, mark)}
          />
          <span className="uv-mark__dot" aria-hidden="true" />
          {mark}
        </label>
      ))}
    </div>
  );
}

export function UvStack({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const inner = (
    <>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span>{children}</span>
    </>
  );
  if (href) {
    return (
      <a className="uv-stack" href={href}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className="uv-stack" onClick={onClick}>
      {inner}
    </button>
  );
}
