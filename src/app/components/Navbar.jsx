"use client";
import { useEffect, useMemo, useState } from "react";
import Logo from "./Logo";
import ThemeToggle, { toggleTheme } from "../ThemeToggle";
import CommandPalette from "./CommandPalette";

const links = [
  { label: "Work", id: "work" },
  { label: "Writing", id: "writing" },
  { label: "Experience", id: "experience" },
  { label: "Activity", id: "activity" },
  { label: "Stack", id: "stack" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const go = (id) => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  else window.location.href = `/#${id}`;
};
const open = (url) => window.open(url, "_blank", "noopener,noreferrer");

export default function Navbar() {
  const [palette, setPalette] = useState(false);
  const [mac, setMac] = useState(false);

  useEffect(() => {
    setMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = useMemo(
    () => [
      ...links.map((l) => ({ label: l.label, kind: "Section", run: () => go(l.id) })),
      { label: "All posts", kind: "Writing", run: () => (window.location.href = "/writing") },
      { label: "Open Billio", kind: "Project", run: () => open("https://billio.daysuwa.dev") },
      { label: "Download resume", kind: "File", run: () => open(encodeURI("/Aiwerioghene AdesuwaResume (1).pdf")) },
      { label: "Email Daysuwa", kind: "Contact", run: () => (window.location.href = "mailto:adesuwaaiwerioghene12@gmail.com") },
      { label: "GitHub", kind: "Link", run: () => open("https://github.com/daysuwaa") },
      { label: "LinkedIn", kind: "Link", run: () => open("https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268/") },
      { label: "Switch theme", kind: "Action", run: toggleTheme },
    ],
    []
  );

  return (
    <>
      <header className="bar sticky top-0 z-40 border-b border-rule">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
            <Logo />
            Daysuwa
          </a>
          <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a key={l.id} href={`/#${l.id}`} className="text-mute hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPalette(true)}
              className="flex h-9 items-center gap-2 rounded-[4px] border border-rule px-3 text-mute hover:text-ink"
              aria-label="Open the jump menu"
            >
              <span>Jump to</span>
              <kbd className="hidden rounded-[3px] border border-rule px-1.5 font-mono text-xs sm:inline">
                {mac ? "⌘K" : "Ctrl K"}
              </kbd>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>
      <CommandPalette open={palette} onClose={() => setPalette(false)} items={items} />
    </>
  );
}
