import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Link from "next/link";
import { published, formatDate } from "./posts";

export const metadata = {
  title: "Writing | Daysuwa",
  description: "Notes from building software for finance and risk teams, and my own products.",
};

export default function WritingIndex() {
  const list = published();
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5 pb-8 pt-14 sm:px-8">
        <h1 className="font-display text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-none tracking-tight">
          Writing
        </h1>
        <p className="mt-5 max-w-[56ch] text-[1.125rem] leading-relaxed text-mute">
          Notes from building software for finance and risk teams, and from building my own products.
        </p>
        <ul className="mt-12 border-t border-rule">
          {list.map((p) => (
            <li key={p.slug} className="grid gap-1 border-b border-rule py-7 md:grid-cols-[12rem_1fr] md:gap-8">
              <p className="text-mute">{formatDate(p.date)}</p>
              <div>
                <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">
                  <Link href={`/writing/${p.slug}`} className="hover:text-pen">
                    {p.title}
                  </Link>
                </h2>
                <p className="mt-2 max-w-[60ch] text-mute">{p.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
