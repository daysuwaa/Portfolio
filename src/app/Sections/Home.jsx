const facts = [
  ["Name", "Adesuwa Aiwerioghene (Daysuwa)"],
  ["Role", "Software engineer"],
  ["Based in", "Lagos, Nigeria"],
  ["Availability", "Open to remote engineering roles"],
];

const claims = [
  {
    claim: "I ship a product end to end.",
    evidence: "Billio has sign-up, sync across devices, daily reminder emails and Gmail import, and it is live with testers.",
    href: "#work",
    linkText: "See Billio",
  },
  {
    claim: "I build tools for finance and risk teams.",
    evidence: "At Deloitte I built an IFRS expense allocation platform and a project tracker, and worked on a risk control self-assessment platform.",
    href: "#experience",
    linkText: "See the roles",
  },
  {
    claim: "I lead engineers and still write the code.",
    evidence: "Acting Engineering Lead at Kachex since October 2026, with frontend work still on my plate.",
    href: "#experience",
    linkText: "See the roles",
  },
  {
    claim: "I explain technical work to the people who sign it off.",
    evidence: "I send a weekly engineering report to Kachex's CEO and have run staff training on generative AI at work.",
    href: "#about",
    linkText: "Read more",
  },
];

const Tick = ({ i }) => (
  <svg
    className="tick mt-1 shrink-0"
    style={{ "--i": i }}
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="var(--pen)"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 13l5 5L20 6" />
  </svg>
);

export default function Home() {
  return (
    <section id="top" className="pb-8 pt-10 sm:pt-14">
      <dl className="grid grid-cols-1 border-y border-rule sm:grid-cols-2 lg:grid-cols-4">
        {facts.map(([k, v], i) => (
          <div
            key={k}
            className={`py-3.5 sm:px-4 ${i % 2 === 1 ? "sm:border-l sm:border-rule" : ""} ${
              i > 0 ? "lg:border-l lg:border-rule" : "lg:pl-0"
            } ${i === 0 ? "sm:pl-0" : ""} ${i > 1 ? "border-t border-rule lg:border-t-0" : ""}`}
          >
            <dt className="text-sm text-mute">{k}</dt>
            <dd className="mt-0.5 font-medium">{v}</dd>
          </div>
        ))}
      </dl>

      <h1 className="mt-14 max-w-[15ch] font-display text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.96] tracking-tight sm:mt-20">
        I build software for finance and risk teams.
      </h1>
      <p className="mt-7 max-w-[58ch] text-[1.125rem] leading-relaxed text-mute">
        I started in technology assurance at Deloitte, then moved into building the software
        myself. I write the code and I can explain it to the people who have to approve it.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <a
          href={encodeURI("/Aiwerioghene AdesuwaResume (1).pdf")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-[4px] bg-ink px-5 py-3 font-medium text-paper hover:opacity-90"
        >
          Download resume
        </a>
        <a
          href="mailto:adesuwaaiwerioghene12@gmail.com"
          className="rounded-[4px] border border-rule px-5 py-3 font-medium hover:border-ink"
        >
          Email me
        </a>
      </div>

      <div className="mt-24">
        <h2 className="font-display text-[1.75rem] font-semibold tracking-tight text-balance">
          What I claim, and what backs it up
        </h2>
        <ul className="mt-6 border-t border-rule">
          {claims.map((c, i) => (
            <li
              key={c.claim}
              className="grid grid-cols-[22px_1fr] gap-x-4 gap-y-1.5 border-b border-rule py-5 md:grid-cols-[22px_minmax(0,5fr)_minmax(0,6fr)] md:gap-x-6"
            >
              <Tick i={i} />
              <p className="text-[1.125rem] font-medium leading-snug">{c.claim}</p>
              <p className="col-start-2 text-mute md:col-start-3">
                {c.evidence}{" "}
                <a href={c.href} className="link text-ink">
                  {c.linkText}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
