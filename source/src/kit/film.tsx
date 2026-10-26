/**
 * Official playback pages, embedded. The player is Bilibili's or YouTube's
 * own iframe — not a hotlinked video file.
 */

export type FilmItem = {
  title: string;
  by: string;
  href: string;
};

export function filmSrc(href: string): string | null {
  const bili = href.match(/bilibili\.com\/video\/(BV[\w]+)/i);
  if (bili) {
    return `https://player.bilibili.com/player.html?bvid=${bili[1]}&page=1&autoplay=0&danmaku=0&high_quality=1`;
  }
  const yt = href.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0`;
  return null;
}

export function FilmReel({
  kicker,
  title,
  items,
}: {
  kicker: string;
  title: string;
  items: FilmItem[];
}) {
  const playable = items.flatMap((item) => {
    const src = filmSrc(item.href);
    return src ? [{ ...item, src }] : [];
  });
  if (playable.length === 0) return null;

  return (
    <section className="film" aria-label={title}>
      <div className="film-head">
        <p className="chapter-kicker">{kicker}</p>
        <h2 className="film-title">
          <span className="anim-swing">{title}</span>
        </h2>
      </div>
      <div className="film-wall">
        {playable.map((item, index) => (
          <figure key={item.href} className={index === 0 ? "film-frame is-lead" : "film-frame"}>
            <iframe
              src={item.src}
              title={item.title}
              allow="fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              loading={index === 0 ? "eager" : "lazy"}
            />
            <figcaption>
              <strong>{item.title}</strong>
              <span>{item.by} · 官方播放器</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
