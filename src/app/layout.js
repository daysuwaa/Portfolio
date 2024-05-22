import {
  Zeyada,
  Comic_Neue,
  Rampart_One,
  Pompiere,
  Roboto_Condensed,
  // Protest_Revolution,
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
// const protest = Protest_Revolution({
//   subsets: ["latin-ext"],
//   weight: "400",
//   variable: "--protest-font",
// });

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

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--roboto-font",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${zeyada.variable} ${comic.variable}  ${rampart.variable} ${pompiere.variable} ${roboto.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
