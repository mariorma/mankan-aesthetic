import { useCallback, useState } from "react";
import { UvMark, UvStack, type Mark } from "./kit/controls";
import {
  applyMark,
  markOf,
  marksPayload,
  readMarkStore,
  writeMarkStore,
  type MarkMap,
  type ScoredPiece,
} from "./marks";

export function useMarkStore(storageKey: string) {
  const [saved, setSaved] = useState<MarkMap>(() => readMarkStore(storageKey));

  const choose = useCallback(
    (id: string, mark: Mark, legacy: readonly string[] = []) => {
      setSaved((current) => {
        const next = applyMark(current, id, mark, legacy);
        writeMarkStore(storageKey, next);
        return next;
      });
    },
    [storageKey],
  );

  return { saved, choose };
}

export function MarkChoices({
  piece,
  saved,
  onChoose,
}: {
  piece: ScoredPiece;
  saved: MarkMap;
  onChoose: (id: string, mark: Mark, legacy?: readonly string[]) => void;
}) {
  return (
    <UvMark
      file={piece.id}
      value={markOf(saved, piece.id, piece.legacy)}
      onChoose={(id, mark) => onChoose(id, mark, piece.legacy)}
    />
  );
}

export function HiddenMarks({
  pieces,
  saved,
  onChoose,
  id = "hidden-marks",
}: {
  pieces: readonly ScoredPiece[];
  saved: MarkMap;
  onChoose: (id: string, mark: Mark, legacy?: readonly string[]) => void;
  id?: string;
}) {
  const hidden: ScoredPiece[] = [];
  const seen = new Set<string>();
  for (const piece of pieces) {
    if (seen.has(piece.id)) continue;
    if (markOf(saved, piece.id, piece.legacy) !== "差") continue;
    seen.add(piece.id);
    hidden.push(piece);
  }

  return (
    <details className="reject-list hidden-marks" id={id}>
      <summary>已隐藏的差评（{hidden.length}）</summary>
      <p>标成差的先从这面拿掉。改成中或好，会马上回来。</p>
      {hidden.length === 0 ? (
        <p className="reject-empty">没有标成差的条目。</p>
      ) : (
        <ul>
          {hidden.map((piece) => (
            <li key={piece.id}>
              <p>{piece.label}</p>
              <MarkChoices piece={piece} saved={saved} onChoose={onChoose} />
            </li>
          ))}
        </ul>
      )}
    </details>
  );
}

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

export function CopyMarks() {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  async function copy() {
    const ok = await copyText(JSON.stringify(marksPayload()));
    setState(ok ? "copied" : "failed");
    window.setTimeout(() => setState("idle"), 1600);
  }

  const label = state === "copied" ? "已复制" : state === "failed" ? "没复制成" : "复制打分";

  return (
    <div className="copy-marks">
      <p>好中差存在这台浏览器。复制后可贴给日更。</p>
      <UvStack onClick={copy}>{label}</UvStack>
    </div>
  );
}
