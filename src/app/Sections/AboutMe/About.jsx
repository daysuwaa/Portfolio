"use client";
import { motion, useReducedMotion } from "framer-motion";

const offScreen = [
  ["Running and the gym", "How I reset after a long day of screens."],
  ["Social sports", "I play for the people as much as the game."],
  ["Making things look good", "Interfaces, creative content, and what I wear."],
];

const rightNow = [
  ["Learning", "Machine learning, and working towards the Azure AI-901 certification."],
  ["Building next", "A second product of my own, this time one that uses AI."],
];

export default function About() {
  const reduce = useReducedMotion();
  const reveal = (i = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
        };

  return (
    <section id="about" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">About</h2>
      <div className="mt-6 grid gap-12 border-t border-rule pt-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <motion.div {...reveal()}>
          <p className="font-display text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold leading-[1.12] tracking-tight">
            I like building things people actually use, and explaining them well.
          </p>
          <div className="mt-8 max-w-[60ch] space-y-5 text-[1.0625rem] leading-[1.7]">
            <p>
              I&apos;m Daysuwa, a software engineer in Lagos. I studied computer science at Babcock
              University and have been building for the web since 2022, mostly with React, Next.js
              and a NestJS or .NET backend behind it.
            </p>
            <p>
              The part people notice is that I can talk to both sides. I write the feature, and I
              can also explain to the person who has to approve it why it works the way it does. A
              lot of my work has been for finance and risk teams, where that matters.
            </p>
            <p>
              I build my own products to practise what a job does not always hand you. Billio, my
              subscription tracker, made me work through sign-in, syncing, email and the Gmail API
              for real, with real users.
            </p>
          </div>
        </motion.div>

        <div className="space-y-10">
          <motion.div {...reveal(1)}>
            <p className="font-hand text-[1.6rem] leading-none text-pen">away from the keyboard</p>
            <ul className="mt-3 border-t border-rule">
              {offScreen.map(([t, d]) => (
                <li key={t} className="border-b border-rule py-4">
                  <p className="font-medium">{t}</p>
                  <p className="mt-0.5 text-mute">{d}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...reveal(2)}>
            <p className="font-hand text-[1.6rem] leading-none text-pen">right now</p>
            <ul className="mt-3 border-t border-rule">
              {rightNow.map(([t, d]) => (
                <li key={t} className="border-b border-rule py-4">
                  <p className="font-medium">{t}</p>
                  <p className="mt-0.5 text-mute">{d}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
