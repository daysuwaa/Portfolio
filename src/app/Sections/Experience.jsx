"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const entries = [
  {
    when: "Oct 2026 to now",
    current: true,
    role: "Acting Engineering Lead",
    org: "Kachex Model Technologies",
    what: "I coordinate a small engineering team and report to the CEO. We build the company's websites and product from Figma designs, and I still write frontend code. I joined in January 2026 as a frontend developer.",
  },
  {
    when: "Feb to Oct 2026",
    role: "Technology Assurance Analyst and full-stack developer",
    org: "Deloitte Nigeria",
    what: "Built internal tools for finance and risk work, including an IFRS insurance expense allocation platform and a project tracker, and worked on a risk control self-assessment platform. Done as part of my NYSC year. The full list is under Work.",
  },
  {
    when: "Feb 2025 to May 2026",
    role: "Frontend Developer",
    org: "Kwurah",
    what: "Frontend on a document-signing SaaS platform.",
  },
  {
    when: "Sep to Nov 2025",
    role: "Software Developer Intern",
    org: "GTB",
    what: "Software development internship, alongside my role at Kwurah.",
  },
  {
    when: "Sep 2024 to May 2025",
    role: "Lead Developer",
    org: "BUCC Development Team",
    what: "Led the development team's work.",
  },
  {
    when: "Jan to Jun 2024",
    role: "Frontend Developer Intern",
    org: "Squad (HabariPay)",
    what: "Frontend development internship at the payments company Squad.",
  },
  {
    when: "2021 to 2025",
    role: "B.Sc. Computer Science",
    org: "Babcock University",
    what: "Second class upper.",
  },
];

const clamp = (v) => Math.min(1, Math.max(0, v));

function Node({ on }) {
  return (
    <span
      aria-hidden="true"
      data-node
      className={`relative z-10 mt-[3px] grid h-[22px] w-[22px] place-items-center rounded-full border-2 transition-all duration-300 ${
        on ? "scale-100 border-pen bg-pen" : "scale-90 border-rule bg-paper"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width="12"
        height="12"
        fill="none"
        stroke="#fff"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`}
      >
        <path d="M5 12.5l4.5 4.5L19 7" />
      </svg>
    </span>
  );
}

export default function Experience() {
  const reduce = useReducedMotion();
  const list = useRef(null);
  const geo = useRef({ h: 1, y0: 0, y1: 1, marks: [] });
  const [spine, setSpine] = useState({ top: 0, height: 0 });
  const [count, setCount] = useState(0);

  const { scrollYProgress } = useScroll({ target: list, offset: ["start 65%", "end 65%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.4 });
  const fill = useTransform(smooth, (p) => {
    const g = geo.current;
    return clamp((p * g.h - g.y0) / Math.max(1, g.y1 - g.y0));
  });

  const sync = (p) => {
    const g = geo.current;
    setCount(g.marks.filter((m) => p * g.h >= m).length);
  };

  useMotionValueEvent(scrollYProgress, "change", sync);

  useEffect(() => {
    const measure = () => {
      const el = list.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top;
      const marks = [...el.querySelectorAll("[data-node]")].map((n) => {
        const r = n.getBoundingClientRect();
        return r.top - top + r.height / 2;
      });
      geo.current = { h: el.offsetHeight, y0: marks[0] ?? 0, y1: marks[marks.length - 1] ?? 1, marks };
      setSpine({ top: geo.current.y0, height: geo.current.y1 - geo.current.y0 });
      sync(scrollYProgress.get());
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isOn = (i) => reduce || i < count;

  return (
    <section id="experience" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Experience</h2>

      <ol ref={list} className="relative mt-8 border-t border-rule pt-10">
        <div
          aria-hidden="true"
          className="absolute left-[10px] w-[2px] bg-rule md:left-[calc(12rem+10px)]"
          style={{ top: spine.top, height: spine.height }}
        >
          <motion.div
            className="h-full w-full origin-top bg-pen"
            style={{ scaleY: reduce ? 1 : fill }}
          />
        </div>

        {entries.map((e, i) => (
          <li
            key={e.role + e.org}
            className="grid grid-cols-[22px_1fr] gap-x-5 pb-12 last:pb-2 md:grid-cols-[12rem_22px_1fr] md:gap-x-8"
          >
            <p className="hidden pt-0.5 text-mute md:block md:pr-0">
              {e.when}
              {e.current ? <span className="ml-2 text-pen">Current</span> : null}
            </p>
            <Node on={isOn(i)} />
            <div>
              <p className="text-mute md:hidden">
                {e.when}
                {e.current ? <span className="ml-2 text-pen">Current</span> : null}
              </p>
              <h3
                className={`text-[1.125rem] font-medium leading-snug transition-colors duration-300 ${
                  isOn(i) ? "text-ink" : "text-mute"
                }`}
              >
                {e.role}, {e.org}
              </h3>
              <p className="mt-1.5 max-w-[62ch] text-mute">{e.what}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
