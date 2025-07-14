"use client";
import {
  Pompiere,
  Roboto_Condensed,
  Inter,
  Sacramento,
  Gwendolyn,
} from "next/font/google";
import ThemeToggle from "./ThemeToggle";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ChatBubble from "./ChatBubble";
import Head from "next/head";
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
  title: "Adesuwa Aiwerioghene | Front-End Developer",
  description:
    "Portfolio of Adesuwa Aiwerioghene — Front-End Developer crafting clean, responsive web experiences with React, Next.js, and Tailwind CSS. Open to collaborations!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Adesuwa Aiwerioghene | Front-End Developer",
    description:
      "Portfolio of Adesuwa Aiwerioghene — Front-End Developer crafting clean, responsive web experiences with React, Next.js, and Tailwind CSS.",
    url: "https://www.adesuwa.dev",
    type: "website",
    images: [
      {
        url: "https://www.adesuwa.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adesuwa Aiwerioghene Portfolio",
      },
    ],
  },
};
export default function RootLayout({ children }) {
  // const [isDark, setIsDark] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          min-h-screen bg-[#fefefe] text-black dark:bg-black dark:text-white transition-colors duration-300 scroll-smooth
          ${pompiere.variable} ${roboto.variable} ${inter.variable} ${gwendolyn.variable} ${sacramento.variable}
        `}
      >
        {children}
        <ThemeToggle />
        <Toaster />
        {/* @ts-ignore */}
        <ChatBubble />
      </body>
    </html>
  );
}
