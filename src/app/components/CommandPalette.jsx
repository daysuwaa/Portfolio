"use client";
import { useEffect, useMemo, useRef, useState } from "react";

export default function CommandPalette({ open, onClose, items }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const input = useRef(null);

  const list = useMemo(() => {
    const t = q.trim().toLowerCase();
    return t ? items.filter((i) => i.label.toLowerCase().includes(t)) : items;
  }, [q, items]);

  useEffect(() => {
    if (!open) return;
    setQ("");
    setIdx(0);
    const t = setTimeout(() => input.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => setIdx(0), [q]);

  if (!open) return null;

  const run = (item) => {
    onClose();
    item?.run();
  };

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => (list.length ? (i + 1) % list.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => (list.length ? (i - 1 + list.length) % list.length : 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(list[idx]);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[14vh]"
      style={{ background: "rgba(10,12,16,0.5)" }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Jump to"
    >
      <div
        className="w-full max-w-lg rounded-md border border-rule bg-sheet shadow-2xl"
        onKeyDown={onKeyDown}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Jump to a section, link or action"
          aria-label="Jump to a section, link or action"
          role="combobox"
          aria-expanded="true"
          aria-controls="jump-list"
          aria-activedescendant={list[idx] ? `jump-${idx}` : undefined}
          className="w-full rounded-t-md border-b border-rule bg-transparent px-4 py-3.5 text-[1rem] placeholder:text-mute focus-visible:[outline-offset:-2px]"
        />
        <ul id="jump-list" role="listbox" className="max-h-72 overflow-auto py-1">
          {list.length === 0 ? (
            <li className="px-4 py-3 text-mute">Nothing matches &ldquo;{q}&rdquo;.</li>
          ) : (
            list.map((it, i) => (
              <li
                key={it.label}
                id={`jump-${i}`}
                role="option"
                aria-selected={i === idx}
                onMouseMove={() => setIdx(i)}
                onClick={() => run(it)}
                className={`flex cursor-pointer items-center justify-between px-4 py-2.5 ${
                  i === idx ? "bg-paper" : ""
                }`}
              >
                <span className={i === idx ? "text-pen" : ""}>{it.label}</span>
                <span className="text-sm text-mute">{it.kind}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
