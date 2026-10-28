/**
 * 官方播放器弹窗。只嵌 B站 / YouTube（nocookie）/ Vimeo 的官方 iframe，不热链视频文件。
 */
import { useEffect, useRef, useSyncExternalStore } from "react";
import type { Video } from "../data/daily";

type Open = { video: Video; title: string; href?: string } | null;

let state: Open = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());

export function openVideo(video: Video, title: string, href?: string) {
  state = { video, title, href };
  emit();
}

function close() {
  state = null;
  emit();
}

const BY: Record<Video["kind"], string> = { bilibili: "哔哩哔哩", youtube: "YouTube", vimeo: "Vimeo" };

export function VideoDialog() {
  const value = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => state,
  );
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (value && !dialog.open) dialog.showModal();
    if (!value && dialog.open) dialog.close();
  }, [value]);

  return (
    <dialog ref={ref} className="video-dialog" onClose={close} onClick={(event) => event.target === ref.current && close()}>
      {value && (
        <div className="video-frame">
          <iframe
            src={value.video.src}
            title={value.title}
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
          />
          <div className="video-bar">
            <strong>{value.title}</strong>
            <span>{BY[value.video.kind]} 官方播放器</span>
            {value.href && (
              <a href={value.href} target="_blank" rel="noreferrer">
                原页 ↗
              </a>
            )}
            <button type="button" onClick={close}>
              关
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
