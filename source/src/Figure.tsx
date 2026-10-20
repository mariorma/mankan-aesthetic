import type { ReactNode } from "react";
import type { Figure } from "./entries";
import { assetHref, type PageId } from "./paths";

export function FigureView({
  page,
  figure,
  className,
  priority = false,
  children,
}: {
  page: PageId;
  figure: Figure;
  className: string;
  priority?: boolean;
  children?: ReactNode;
}) {
  const lines = figure.caption.split("\n");
  return (
    <figure className={className}>
      <img
        src={assetHref(page, figure.file)}
        alt={figure.alt}
        width={figure.width}
        height={figure.height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <figcaption>
        {lines.map((line, index) => (
          <span key={line}>
            {index > 0 && <br />}
            {line}
          </span>
        ))}
        <span className="credit">
          {figure.creditHref ? (
            <a href={figure.creditHref} rel="noreferrer">
              {figure.credit}
            </a>
          ) : (
            figure.credit
          )}
        </span>
        {children}
      </figcaption>
    </figure>
  );
}
