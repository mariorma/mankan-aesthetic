import { useEffect, useSyncExternalStore } from "react";

type Toast = { id: number; text: string; action?: { label: string; run: () => void } };

let current: Toast | null = null;
let seq = 0;
let timer = 0;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

export function toast(text: string, action?: Toast["action"], ms = 6000) {
  current = { id: ++seq, text, action };
  window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    current = null;
    emit();
  }, ms);
  emit();
}

function dismiss() {
  window.clearTimeout(timer);
  current = null;
  emit();
}

export function ToastHost() {
  const value = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => current,
  );
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div className="toast-host" aria-live="polite">
      {value && (
        <div className="toast glass" key={value.id}>
          <span>{value.text}</span>
          {value.action && (
            <button
              type="button"
              onClick={() => {
                value.action?.run();
                dismiss();
              }}
            >
              {value.action.label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
