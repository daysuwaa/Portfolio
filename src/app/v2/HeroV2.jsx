"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { lines, accent } from "./contours";
import billioPhone from "../../../public/projects/billio-phone.webp";

const small = [
  { big: "Acting Lead", label: "Engineering at Kachex" },
  { big: "10+", label: "projects shipped" },
  { big: "Deloitte", label: "where I started, in technology assurance" },
  { big: "Lagos", label: "open to remote roles" },
];

export default function HeroV2() {
  const reduce = useReducedMotion();
  const pop = (d) =>
    reduce
      ? {}
      : { initial: { y: 14, scale: 0.99 }, animate: { y: 0, scale: 1 }, transition: { duration: 0.55, delay: d, ease: "easeOut" } };

  return (
    <section id="top" className="relative grid gap-4 pb-6 pt-8 sm:pt-12 lg:grid-cols-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[640px] w-screen -translate-x-1/2 [mask-image:linear-gradient(to_bottom,black_55%,transparent)]"
      >
        <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
          <path d={lines} stroke="var(--rule)" strokeOpacity="0.65" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          <path d={accent} stroke="var(--pen)" strokeOpacity="0.28" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
        </svg>
      </div>
      <motion.div {...pop(0)} className="flex flex-col justify-between py-6 pr-4 lg:col-span-7">
        <div>
          <p className="inline-flex items-center gap-2 text-sm text-mute">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pen opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-pen" />
            </span>
            Open to remote engineering roles
          </p>
          <p className="mt-7 font-hand text-[1.7rem] leading-none text-pen">Hi, I&apos;m Daysuwa, a consultant who codes</p>
          <h1 className="mt-2 font-display text-[clamp(2.25rem,4.6vw,3.6rem)] font-bold leading-[1.02] tracking-tight">
            I build software for finance and risk teams.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-mute">
            I write the code and I can explain it to the people who have to approve it. I started in
            technology assurance at Deloitte, then moved into building the software myself.
          </p>
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-ink px-6 py-3 font-medium text-paper shadow-[0_4px_0_0_var(--pen)] transition-transform hover:-translate-y-0.5 active:translate-y-[3px] active:shadow-none">
            See my work
          </a>
          <a
            href={encodeURI("/Aiwerioghene AdesuwaResume (1).pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-rule bg-paper px-6 py-3 font-medium transition-colors hover:border-ink"
          >
            Download resume
          </a>
        </div>
      </motion.div>

      <motion.div {...pop(0.1)} className="relative overflow-hidden rounded-3xl border border-rule bg-sheet lg:col-span-5">
                <div className="relative flex h-full min-h-[380px] flex-col items-center justify-between px-6 pt-8">
          <p className="self-start rounded-full border border-rule bg-paper px-3.5 py-1.5 text-sm text-mute">
            Billio, live now
          </p>
          <p className="absolute right-6 top-7 -rotate-3 font-hand text-[1.45rem] leading-none text-pen">
            tested by real people
          </p>
          <Image src={billioPhone} alt="Billio on a phone" priority className="mt-2 h-auto w-[72%] max-w-[340px] translate-y-10 drop-shadow-xl" />
        </div>
      </motion.div>

      {small.map((c, i) => (
        <motion.div key={c.big} {...pop(0.2 + i * 0.06)} className="border-t border-rule pt-5 lg:col-span-3">
          <p className="font-display text-[1.75rem] font-bold leading-none tracking-tight">{c.big}</p>
          <p className="mt-2 text-mute">{c.label}</p>
        </motion.div>
      ))}
    </section>
  );
}
