// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = stored === "dark" || (!stored && prefersDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setIsDark(nextTheme === "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-9 right-4 p-2 lg:p-4 rounded-full shadow-md shadow-slate-300 dark:shadow-gray-700 text-yellow-500 transition z-50"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
};

export default ThemeToggle;
