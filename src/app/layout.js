import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ChatBubble from "./ChatBubble";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
  display: "swap",
});
const display = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
  display: "swap",
});
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-hand",
  display: "swap",
});

const description =
  "Daysuwa (Adesuwa Aiwerioghene) is a software engineer in Lagos who builds software for finance and risk teams. Acting Engineering Lead at Kachex, formerly Deloitte technology assurance.";

export const metadata = {
  title: "Daysuwa | Software engineer",
  description,
  openGraph: {
    title: "Daysuwa | Software engineer",
    description,
    url: "https://daysuwa.dev",
    type: "website",
    images: [
      {
        url: "https://daysuwa.dev/og-v2.png",
        width: 1200,
        height: 630,
        alt: "Daysuwa, software engineer",
      },
    ],
  },
};

// Sets the theme before the page paints, so there is no flash.
const themeScript = `try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${display.variable} ${mono.variable} ${hand.variable} min-h-screen`}>
        {children}
        <Toaster toastOptions={{ className: "toast-ui" }} />
        <ChatBubble />
      </body>
    </html>
  );
}
