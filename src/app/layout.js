"use client";
import {
  Pompiere,
  Roboto_Condensed,
  Inter,
  Sacramento,
  Gwendolyn,
} from "next/font/google";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// Fonts

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
  variable: "--pompiere-font",
});
const gwendolyn = Gwendolyn({
  subsets: ["latin"],
  weight: "400",
  variable: "--gwendolyn-font",
});
const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--roboto-font",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--inter-font",
});
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--sacramento-font",
});

const metadata = {
  title: "Adesuwa A",
  description: "My Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    setIsDark(nextTheme === "dark");
  };

  useEffect(() => {
    const isDarkNow = document.documentElement.classList.contains("dark");
    setIsDark(isDarkNow);
  }, []);

  return (
    <html lang="en">
      <head>
        {/* Prevent FART: apply theme before hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`
          min-h-screen transition-colors duration-300 bg-[#fefefe] text-black dark:bg-black dark:text-white scroll-smooth
         ${pompiere.variable}
          ${roboto.variable} ${inter.variable} ${gwendolyn.variable}
          ${sacramento.variable} 
        `}
      >
        {/* @ts-ignore */}
        <div
          style={{
            position: "fixed",
            zIndex: 2147483647,
            pointerEvents: "none",
          }}
        >
          <issueiq-bubble
            sender-text-color="#000000"
            bot-text-color="#fb7185cc"
            chatbot-id="8b933d3a-532f-4778-b578-322c8405d85a"
            display-name="Adesuwa Aiwerioghene"
            style={{ pointerEvents: "auto" }}
          ></issueiq-bubble>
        </div>

        <script
          defer
          src="https://cdn.jsdelivr.net/npm/issueiq@1.0.0/dist/loader.js"
        ></script>
        {/* Theme toggle button with icon */}
        <button
          onClick={toggleTheme}
          className="fixed top-9 right-4 p-2 lg:p-4 rounded-full shadow-md shadow-slate-300 dark:shadow-gray-700 text-yellow-500  transition"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun size={25} /> : <Moon size={25} />}
        </button>
        <Toaster />

        {children}
      </body>
    </html>
  );
}
