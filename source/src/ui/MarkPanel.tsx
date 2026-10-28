import { useState } from "react";
import { shortDate, type DailyEntry } from "../data/daily";
import { LINES } from "../data/lines";
import { marksPayload, useMarks } from "../data/marks";

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.left = "-9999px";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/** Uiverse 叠层按钮（adamgiebl / big-ape-36，MIT）的手感，去掉斜切，中文好读。 */
export function StackButton({ children, onClick, href }: { children: React.ReactNode; onClick?: () => void; href?: string }) {
  const inner = (
    <>
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span className="stack-face">{children}</span>
    </>
  );
  if (href) {
    return (
      <a className="stack-btn" href={href}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" className="stack-btn" onClick={onClick}>
      {inner}
    </button>
  );
}

export function CopyMarks({ entries }: { entries: readonly DailyEntry[] }) {
  const { marks } = useMarks();
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const payload = marksPayload(entries, marks);

  async function copy() {
    const ok = await copyText(JSON.stringify(marksPayload(entries, marks), null, 2));
    setState(ok ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 1800);
  }

  return (
    <div className="copy-marks">
      <p className="copy-marks-count">
        <span data-mark="好">好 {payload.good.length}</span>
        <span data-mark="差">差 {payload.bad.length}</span>
      </p>
      <p className="copy-marks-note">分只存在这台浏览器，不进仓库。复制后贴给日更，用来清理差的、多找好的那一路。</p>
      <StackButton onClick={copy}>{state === "copied" ? "已复制" : state === "failed" ? "没复制成" : "复制打分"}</StackButton>
    </div>
  );
}

export function HiddenDrawer({ entries, id = "hidden" }: { entries: readonly DailyEntry[]; id?: string }) {
  const { markOf, setMark } = useMarks();
  const hidden = entries.filter((entry) => markOf(entry.id) === "差");
  return (
    <details className="hidden-drawer" id={id}>
      <summary>
        已下架 <b>{hidden.length}</b>
      </summary>
      <p>标成「差」的条目先从页面撤下。点「放回」改回中，马上回来。</p>
      {hidden.length === 0 ? (
        <p className="hidden-empty">还没有标成差的。</p>
      ) : (
        <ul>
          {hidden.map((entry) => (
            <li key={entry.id}>
              <span className="hidden-meta">
                {shortDate(entry.date)} · {LINES[entry.line].name}
              </span>
              <span className="hidden-title">{entry.title}</span>
              <button type="button" onClick={() => setMark(entry.id, "中")}>
                放回
              </button>
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}
