import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer/Footer";
import { posts, published, formatDate } from "../posts";

export function generateStaticParams() {
  return published().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((p) => p.slug === params.slug && p.published);
  if (!post) return {};
  return { title: `${post.title} | Daysuwa`, description: post.summary };
}

export default function Post({ params }) {
  const post = posts.find((p) => p.slug === params.slug && p.published);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-5 pb-8 pt-14 sm:px-8">
        <p>
          <Link href="/writing" className="link text-mute">
            All posts
          </Link>
        </p>
        <article className="mt-8 max-w-[64ch]">
          <h1 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.02] tracking-tight text-balance">
            {post.title}
          </h1>
          <p className="mt-4 text-mute">{formatDate(post.date)}</p>
          <div className="mt-10 space-y-5 text-[1.0625rem] leading-[1.75]">
            {post.body.map((b, i) => {
              if (b.type === "h")
                return (
                  <h2 key={i} className="!mt-12 font-display text-[1.6rem] font-semibold tracking-tight">
                    {b.text}
                  </h2>
                );
              if (b.type === "ul")
                return (
                  <ul key={i} className="list-disc space-y-2 pl-6 marker:text-pen">
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{b.text}</p>;
            })}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
