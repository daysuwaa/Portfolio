"use client";
import { motion, useReducedMotion } from "framer-motion";
import { lines, accent } from "./contours";

const small = [
  { big: "Full stack", label: "React, Next.js, NestJS, .NET" },
  { big: "10+", label: "projects shipped" },
  { big: "2022", label: "building for the web since" },
  { big: "Lagos", label: "open to remote roles" },
];

const k = (t) => <span className="text-[#9aa2b0]">{t}</span>;
const key = (t) => <span className="text-[#e8eaee]">{t}</span>;
const str = (t) => <span className="text-[#ff7aab]">{`"${t}"`}</span>;

const codeLines = [
  <>{k("const ")}{key("daysuwa")}{k(" = {")}</>,
  <>{"  "}{key("role")}{k(": ")}{str("Software engineer")}{k(",")}</>,
    <>{"  "}{key("based")}{k(": ")}{str("Lagos, Nigeria")}{k(",")}</>,
  <>{"  "}{key("learning")}{k(": ")}{str("ML and AI")}{k(",")}</>,
  <>{"  "}{key("builds")}{k(": [")}{str("finance tools")}{k(", ")}{str("risk tools")}{k("],")}</>,
  <>{"  "}{key("stack")}{k(": [")}{str("TypeScript")}{k(", ")}{str("React")}{k(", ")}{str("NestJS")}{k("],")}</>,
  <>{"  "}{key("openTo")}{k(": ")}{str("remote engineering roles")}{k(",")}</>,
  <>{k("};")}</>,
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
            I build software people actually use.
          </h1>
          <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-mute">
            I&apos;m a full-stack engineer in Lagos. I like turning messy, real-world processes into clear
            products, and I can explain every decision to the people who have to sign it off.
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

      <motion.div {...pop(0.1)} className="relative lg:col-span-5 lg:self-center">
        <p className="absolute -top-8 right-4 z-10 -rotate-3 font-hand text-[1.45rem] leading-none text-pen">
          this is me, in code
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#11141a] text-[#e8eaee] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 text-sm text-[#9aa2b0]">daysuwa.ts</span>
          </div>
          <pre className="overflow-x-auto px-5 py-5 font-mono text-[0.8rem] leading-[1.75] sm:text-[0.86rem]">
            <code>
              {codeLines.map((line, i) => (
                <motion.span
                  key={i}
                  className="block whitespace-pre"
                  {...(reduce ? {} : { initial: { opacity: 0, x: -6 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3, delay: 0.5 + i * 0.09 } })}
                >
                  <span className="mr-4 inline-block w-4 select-none text-right text-[#5b6270]">{i + 1}</span>
                  {line}
                </motion.span>
              ))}
              <span className="block"><span className="mr-4 inline-block w-4 select-none text-right text-[#5b6270]">10</span><span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[#ff5c9a]" /></span>
            </code>
          </pre>
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
