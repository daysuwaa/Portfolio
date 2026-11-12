"use client";
import { useEffect, useRef, useState } from "react";
import { lines, accent } from "./contours";
import Logo from "../components/Logo";

const links = [
  ["Email", "mailto:adesuwaaiwerioghene12@gmail.com"],
  ["GitHub", "https://github.com/daysuwaa"],
  ["LinkedIn", "https://www.linkedin.com/in/adesuwa-aiwerioghene-04538b268/"],
  ["X", "https://x.com/daysuwaa_a"],
  ["Resume", "/Adesuwa-Aiwerioghene-CV.pdf"],
];

function Avatar({ className = "" }) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);
  return (
    <div className={`relative grid shrink-0 place-items-center overflow-hidden border border-rule bg-sheet ${className}`}>
      <Logo size={72} />
      {/* Drop a photo at public/me.jpg and it replaces the logo automatically. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src="/me.jpg"
        alt="Daysuwa"
        onLoad={() => setLoaded(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

function Portrait({ className = "", badge = "h-12 w-12 rounded-xl", logo = 28, wrap = "" }) {
  return (
    <div className={`relative ${wrap}`}>
      <Avatar className={className} />
      <span className={`absolute -bottom-3 -left-3 grid place-items-center border border-rule bg-sheet shadow-md ${badge}`}>
        <Logo size={logo} />
      </span>
    </div>
  );
}

export default function HeroV2() {
  return (
    <section id="top" className="relative pb-0 pt-14 sm:pt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-screen -translate-x-1/2 opacity-70 [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
      >
        <svg viewBox="0 0 1200 640" preserveAspectRatio="xMidYMid slice" className="h-full w-full" fill="none">
          <path d={lines} stroke="var(--rule)" strokeOpacity="0.65" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
          <path d={accent} stroke="var(--pen)" strokeOpacity="0.22" strokeWidth="1" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
      <div className="flex items-center gap-5 sm:gap-8">
        <Portrait wrap="lg:hidden" className="h-28 w-28 rounded-[1.4rem] sm:h-36 sm:w-36" badge="h-10 w-10 rounded-xl" logo={24} />
        <div>
          <h1 className="font-display text-[clamp(2.6rem,7vw,4.75rem)] font-semibold leading-[0.95] tracking-tight">
            Daysuwa
          </h1>
          <p className="mt-2 font-hand text-[1.6rem] leading-none text-pen sm:text-[1.9rem]">consultant who codes</p>
          <p className="mt-2 text-mute">Software engineer, Lagos</p>
        </div>
      </div>

      <div className="mt-10 max-w-[62ch] space-y-5 text-[1.125rem] leading-[1.75]">
        <p>
          I&apos;m a full-stack engineer based in Lagos. I studied computer science at Babcock University
          and I mostly build with React, Next.js and a NestJS or .NET backend.
        </p>
        <p>
          My main project right now is{" "}
          <a href="#work" className="link text-ink">
            Billio
          </a>
          , a subscription tracker for people who pay for foreign services by card. It reads your
          Gmail receipts in the browser and reminds you before a charge lands.
        </p>
        <p>I&apos;m open to remote engineering roles and contract work.</p>
      </div>

      <p className="mt-9 flex flex-wrap gap-x-5 gap-y-2">
        {links.map(([label, href], i) => (
          <span key={label}>
            <a
              href={encodeURI(href)}
              className="link"
              {...(href.startsWith("http") || href.endsWith(".pdf") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {label}
            </a>
            {i < links.length - 1 ? <span className="ml-5 text-rule">/</span> : null}
          </span>
        ))}
      </p>
        </div>
        <div className="hidden justify-self-end lg:block">
          <Portrait className="h-[22rem] w-[22rem] rounded-[2rem] shadow-[0_30px_60px_-35px_rgba(0,0,0,0.5)]" badge="h-16 w-16 rounded-2xl" logo={38} />
        </div>
      </div>
    </section>
  );
}
