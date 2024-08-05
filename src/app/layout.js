import {
  Zeyada,
  Comic_Neue,
  Pompiere,
  Roboto_Condensed,
  Inter,
  Sacramento,
  Oswald,
  Gwendolyn,
} from "next/font/google";

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
const oswald = Oswald({
  subsets: ["latin"],
  weight: "200",
  variable: "--oswald-font",
});

export const metadata = {
  title: "adesuwa.xyz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zeyada.variable} ${comic.variable}  ${pompiere.variable} ${roboto.variable} ${inter.variable} ${gwendolyn.variable} ${sacramento.variable} ${oswald.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
