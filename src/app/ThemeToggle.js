"use client";
import { Moon, Sun } from "lucide-react";

export function toggleTheme() {
  const dark = !document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
}

// Both icons are in the page; CSS shows the right one, so there is no state to keep in sync.
export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Switch between light and dark theme"
      className="grid h-9 w-9 place-items-center rounded-[4px] border border-rule text-mute hover:text-ink"
    >
      <Moon size={17} className="dark:hidden" />
      <Sun size={17} className="hidden dark:block" />
    </button>
  );
}
