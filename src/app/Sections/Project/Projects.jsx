"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import billioPhone from "../../../../public/projects/billio-phone.webp";
import stockmate from "../../../../public/projects/stockmate.png";
import momento from "../../../../public/projects/momento.png";

const items = [
  {
    title: "Stock Mate",
    image: stockmate,
    blurb: "Inventory tracking for small sellers such as hair vendors and boutiques.",
    stack: "Next.js, TypeScript, Prisma, PostgreSQL, Redux Toolkit",
    live: "https://stockmate-five.vercel.app/",
    code: "https://github.com/daysuwaa/stockmate",
  },
  {
    title: "Momento",
    note: "formerly Nextstep",
    image: momento,
    blurb: "A private journal for daily notes, with a .NET API behind it.",
    stack: "Next.js, TypeScript, .NET minimal API, Entity Framework, PostgreSQL",
    live: "https://nextstep-fe.onrender.com/",
    code: "https://github.com/daysuwaa/momento_fe",
  },
  {
    title: "Oraimo sales forecaster",
    blurb: "A regression model that predicts units sold by product and region, with a dashboard to explore the data and try what-if scenarios. Built on simulated sales data.",
    stack: "Python, scikit-learn, FastAPI, .NET API, React",
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

const ext = { target: "_blank", rel: "noopener noreferrer" };

export default function Projects() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
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
    <section id="work" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Work</h2>

      <motion.article {...reveal()} className="mt-6 grid gap-10 border-t border-rule pt-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <h3 className="font-display text-[2.5rem] font-semibold leading-none tracking-tight">Billio</h3>
          <p className="mt-4 max-w-[52ch] text-[1.125rem] leading-relaxed">
            A subscription tracker for people in Nigeria who pay for foreign services by card. It
            counts down to the next charge and emails a reminder before it lands.
          </p>
          <dl className="mt-7 divide-y divide-rule border-y border-rule">
            {[
              ["The problem", "Dollar subscriptions turn into surprise debit alerts, and people forget what they signed up for."],
              ["What I built", "Sign-up, sync across devices, daily reminder emails, and a Gmail import that finds subscriptions from receipts. The emails are read in the browser and never uploaded."],
              ["Stack", "React, TypeScript, Supabase, Resend, Vercel"],
              ["Status", "Live and being tested by a small group of users."],
            ].map(([k, v]) => (
              <div key={k} className="grid gap-1 py-3.5 sm:grid-cols-[8.5rem_1fr] sm:gap-6">
                <dt className="text-mute">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 flex gap-6">
            <a href="https://billio.daysuwa.dev" className="link font-medium" {...ext}>
              Open Billio
            </a>
            <a href="https://github.com/daysuwaa/billio" className="link font-medium" {...ext}>
              Read the code
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center rounded-md border border-rule bg-sheet p-6">
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
          <Image
            src={billioPhone}
            alt="Billio on a phone, showing a countdown to the next debit and the subscriptions coming up"
            sizes="(min-width: 1024px) 340px, 60vw"
            className="h-auto max-h-[540px] w-auto"
            priority={false}
          />
          </motion.div>
        </div>
      </motion.article>

      <h3 className="mt-24 font-display text-[1.75rem] font-semibold tracking-tight">Side projects</h3>
      <div className="mt-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <ul className="border-t border-rule">
          {items.map((p, i) => (
            <motion.li
              key={p.title}
              {...reveal(i)}
              className="border-b border-rule py-6"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-display text-[1.5rem] font-semibold tracking-tight">{p.title}</h3>
                {p.note ? <span className="text-mute">{p.note}</span> : null}
              </div>
              <p className="mt-2 max-w-[56ch]">{p.blurb}</p>
              <p className="mt-2 text-mute">{p.stack}</p>
              {p.image ? (
                <div className="mt-4 overflow-hidden rounded-md border border-rule lg:hidden">
                  <Image
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    sizes="(max-width: 1024px) 100vw, 0px"
                    className="h-auto w-full"
                  />
                </div>
              ) : null}
              <p className="mt-4 flex gap-6">
                {p.live ? (
                  <a href={p.live} className="link font-medium" {...ext}>
                    Open the app
                  </a>
                ) : null}
                <a href={p.code} className="link font-medium" {...ext}>
                  Read the code
                </a>
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="hidden lg:block" aria-hidden="true">
          <div className="sticky top-24 overflow-hidden rounded-md border border-rule bg-sheet">
            <div className="relative aspect-[4/3]">
              {items.map((p, i) => p.image && (
                <Image
                  key={p.title}
                  src={p.image}
                  alt=""
                  fill
                  sizes="420px"
                  className={`object-cover object-top transition-opacity duration-300 ${
                    active === i ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h3 className="font-display text-[1.75rem] font-semibold tracking-tight">At Deloitte</h3>
        <p className="mt-2 max-w-[62ch] text-mute">
          Internal and client work, so there are no links or screenshots. Ask me what I can share.
        </p>
        <ul className="mt-6 border-t border-rule">
          {deloitte.map((p, i) => (
            <motion.li
              key={p.title}
              {...reveal(i)}
              className="grid gap-2 border-b border-rule py-6 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-10"
            >
              <div>
                <h4 className="font-display text-[1.375rem] font-semibold leading-snug tracking-tight">
                  {p.title}
                </h4>
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

      <p className="mt-10 max-w-[70ch] text-mute">
        Earlier practice builds:{" "}
        {earlier.map(([name, href], i) => (
          <span key={name}>
            <a href={href} className="link text-ink" {...ext}>
              {name}
            </a>
            {i < earlier.length - 1 ? ", " : "."}
          </span>
        ))}
      </p>
    </section>
  );
}
