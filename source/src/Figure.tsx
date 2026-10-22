import type { ReactNode } from "react";
import type { Figure } from "./figure";
import { assetHref, type PageId } from "./paths";

export function FigureView({
  page,
  figure,
  className,
  priority = false,
  linkLabel,
  children,
}: {
  page: PageId;
  figure: Figure;
  className: string;
  priority?: boolean;
  /** 有原帖时，读屏用「打开原帖：{标题}」。不传则用图片 alt。 */
  linkLabel?: string;
  children?: ReactNode;
}) {
  const lines = figure.caption.split("\n");
  const img = (
    <img
      src={assetHref(page, figure.file)}
      alt={figure.alt}
      width={figure.width}
      height={figure.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
  return (
    <figure className={className}>
      {figure.creditHref ? (
        <a
          className="fig-link"
          href={figure.creditHref}
          target="_blank"
          rel="noreferrer"
          aria-label={`打开原帖：${linkLabel ?? figure.alt}`}
        >
          {img}
        </a>
      ) : (
        img
      )}
      <figcaption>
        {lines.map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
        <span className="credit">{figure.credit}</span>
        {children}
      </figcaption>
    </figure>
  );
}
