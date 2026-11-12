"use client";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import billioPhone from "../../../public/projects/billio-phone.webp";
import stockmate from "../../../public/projects/stockmate.png";
import momento from "../../../public/projects/momento.png";

const ext = { target: "_blank", rel: "noopener noreferrer" };

const cards = [
  {
    title: "Billio",
    blurb: "A subscription tracker for people in Nigeria who pay for foreign services by card. It counts down to the next charge and emails a reminder before it lands. Gmail import runs in the browser, so emails are never uploaded.",
    stack: "React, TypeScript, Supabase, Resend, Vercel",
    image: billioPhone,
    contain: true,
    live: "https://billio.daysuwa.dev",
    code: "https://github.com/daysuwaa/billio",
  },
  {
    title: "Stock Mate",
    blurb: "Inventory tracking for small sellers such as hair vendors and boutiques.",
    stack: "Next.js, TypeScript, Prisma, PostgreSQL",
    image: stockmate,
    live: "https://stockmate-five.vercel.app/",
    code: "https://github.com/daysuwaa/stockmate",
  },
  {
    title: "Momento",
    blurb: "A private journal for daily notes, with a .NET API behind it.",
    stack: "Next.js, .NET minimal API, PostgreSQL",
    image: momento,
    live: "https://nextstep-fe.onrender.com/",
    code: "https://github.com/daysuwaa/momento_fe",
  },
  {
    title: "Product sales forecaster",
    blurb: "A regression model that predicts units sold by product and region, with a what-if dashboard. Built on simulated data.",
    stack: "Python, scikit-learn, FastAPI, React",
    code: "https://github.com/daysuwaa/ai-analysis",
  },
];

const deloitte = [
  {
    title: "Audit monitoring tool",
    blurb:
      "A continuous audit monitoring app built for a client demo. It shows an auditor what to look at once an anomaly fires, and produces a month-end audit report that lists the controls that should have been in place.",
    stack: "React, TypeScript, Tailwind CSS, shadcn/ui, Zustand, Recharts, Framer Motion, with a backend",
  },
  {
    title: "Risk control self-assessment platform",
    note: "in development",
    blurb:
      "A platform for a capital market operator to assess and score risk, with a risk taxonomy, a scoring engine and approval workflows. I worked on the backend with two other developers.",
    stack: "NestJS, React, PostgreSQL",
  },
  {
    title: "IFRS expense allocation platform",
    blurb: "An internal platform that allocates and classifies insurance expenses under IFRS.",
  },
];

const earlier = [
  ["Bulk payment landing page", "https://bulkpayment-landingpage.vercel.app"],
  ["Bank website", "https://daysuwaa.github.io/Bank-Website/"],
  ["Asos clone", "https://daysuwaa.github.io/Asos-Clone-/"],
  ["Uber clone", "https://daysuwaa.github.io/Uber-clone/"],
  ["Vans clone", "https://daysuwaa.github.io/Vans-Website-Clone/"],
];

export default function WorkV2() {
  const reduce = useReducedMotion();
  const track = useRef(null);
  const [slide, setSlide] = useState(0);
  const onScroll = () => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const step = el.firstElementChild.getBoundingClientRect().width + 16;
    setSlide(Math.max(0, Math.min(cards.length - 1, Math.round(el.scrollLeft / step))));
  };
  const goTo = (i) => {
    const el = track.current;
    if (!el || !el.children[i]) return;
    el.scrollTo({ left: el.children[i].offsetLeft - el.offsetLeft - 20, behavior: reduce ? "auto" : "smooth" });
  };
  const reveal = (i = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.55, delay: i * 0.12, ease: "easeOut" },
        };
  return (
    <section id="work" className="pt-16">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Work</h2>

      <div
        ref={track}
        onScroll={onScroll}
        className="-mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-8 sm:px-8 md:mx-0 md:block md:overflow-visible md:border-b md:border-rule md:px-0 md:pb-0"
      >
        {cards.map((p, i) => (
          <motion.article
            key={p.title}
            {...reveal(i)}
            className="w-[82%] shrink-0 snap-center rounded-md border border-rule bg-sheet p-4 md:grid md:w-auto md:grid-cols-[15rem_1fr] md:gap-8 md:rounded-none md:border-0 md:border-t md:bg-transparent md:px-0 md:py-8"
          >
            <div className={`relative aspect-[16/10] overflow-hidden rounded-md border border-rule ${p.contain ? "bg-ink" : "bg-paper"}`}>
              {p.image ? (
                <Image
                  src={p.image}
                  alt={`${p.title} screenshot`}
                  fill
                  sizes="(max-width:768px) 80vw, 240px"
                  className={p.contain ? "object-contain p-2" : "object-cover object-top"}
                />
              ) : (
                <div className="flex h-full items-end p-4">
                  <svg viewBox="0 0 120 60" className="w-full text-pen" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2 52 L30 40 L50 44 L75 22 L98 18 L118 6" strokeLinecap="round" strokeLinejoin="round" />
                    {[[30,40],[50,44],[75,22],[98,18]].map(([x,y]) => <circle key={x} cx={x} cy={y} r="2.6" fill="currentColor" />)}
                  </svg>
                </div>
              )}
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="font-display text-[1.375rem] font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-1.5 max-w-[58ch]">{p.blurb}</p>
              <p className="mt-1.5 text-mute">{p.stack}</p>
              <p className="mt-3 flex gap-5">
                {p.live ? <a href={p.live} className="link" {...ext}>Open</a> : null}
                <a href={p.code} className="link" {...ext}>Code</a>
              </p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2 md:hidden" role="tablist" aria-label="Project slides">
        {cards.map((p, i) => (
          <button
            key={p.title}
            type="button"
            role="tab"
            aria-selected={slide === i}
            aria-label={`Show ${p.title}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${slide === i ? "w-6 bg-ink" : "w-2 bg-rule"}`}
          />
        ))}
      </div>

      <div className="mt-24">
        <h3 className="font-display text-[1.75rem] font-semibold tracking-tight">At Deloitte</h3>
        <p className="mt-2 max-w-[62ch] text-mute">
          Internal and client work, so there are no links or screenshots. Ask me what I can share.
        </p>
        <ul className="mt-6 border-t border-rule">
          {deloitte.map((p, i) => (
            <motion.li key={p.title} {...reveal(i)} className="grid gap-2 border-b border-rule py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10">
              <div>
                <h4 className="font-display text-[1.375rem] font-semibold leading-snug tracking-tight">{p.title}</h4>
                {p.note ? <p className="mt-0.5 text-mute">{p.note}</p> : null}
              </div>
              <div>
                <p className="max-w-[60ch]">{p.blurb}</p>
                {p.stack ? <p className="mt-2 text-mute">{p.stack}</p> : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>

      <p className="mt-8 max-w-[70ch] text-mute">
        Earlier practice builds:{" "}
        {earlier.map(([name, href], i) => (
          <span key={name}>
            <a href={href} className="link text-ink" {...ext}>{name}</a>
            {i < earlier.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
    </section>
  );
}
