import type { ReactNode } from "react";
import type { Figure } from "./figure";
import { assetHref, type PageId } from "./paths";

export function FigureMedia({
  page,
  figure,
  priority = false,
  linkLabel,
}: {
  page: PageId;
  figure: Figure;
  priority?: boolean;
  linkLabel?: string;
}) {
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
  if (!figure.creditHref) return img;
  return (
    <a
      className="fig-link"
      href={figure.creditHref}
      target="_blank"
      rel="noreferrer"
      aria-label={`打开原帖：${linkLabel ?? figure.alt}`}
    >
      {img}
    </a>
  );
}

export function FigureCaption({ figure, children }: { figure: Figure; children?: ReactNode }) {
  const lines = figure.caption.split("\n");
  return (
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
  );
}

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
  linkLabel?: string;
  children?: ReactNode;
}) {
  return (
    <figure className={className}>
      <FigureMedia page={page} figure={figure} priority={priority} linkLabel={linkLabel} />
      <FigureCaption figure={figure}>{children}</FigureCaption>
    </figure>
  );
}
