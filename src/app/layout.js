import { Zeyada, Comic_Neue, Rampart_One, Pompiere } from "next/font/google";
import "./globals.css";

const zeyada = Zeyada({
  subsets: ["latin"],
  weight: "400",
  variable: "--zeyada-font",
});

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--comic-font",
});

const rampart = Rampart_One({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--rampart-font",
});
const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
  variable: "--pompiere-font",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zeyada.variable} ${comic.variable}  ${rampart.variable} ${pompiere.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
