import Link from "next/link";
import { published, formatDate } from "../writing/posts";

export default function Writing() {
  const list = published().slice(0, 3);
  return (
    <section id="writing" className="pt-24">
      <div className="flex items-baseline justify-between gap-6">
        <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Writing</h2>
        <Link href="/writing" className="link">
          All posts
        </Link>
      </div>
      <ul className="mt-6 border-t border-rule">
        {list.map((p) => (
          <li key={p.slug} className="grid gap-1 border-b border-rule py-6 md:grid-cols-[12rem_1fr] md:gap-8">
            <p className="text-mute">{formatDate(p.date)}</p>
            <div>
              <h3 className="font-display text-[1.5rem] font-semibold tracking-tight">
                <Link href={`/writing/${p.slug}`} className="hover:text-pen">
                  {p.title}
                </Link>
              </h3>
              <p className="mt-1.5 max-w-[60ch] text-mute">{p.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
