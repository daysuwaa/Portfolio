export default function About() {
  return (
    <section id="about" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">
        About
      </h2>
      <div className="mt-6 max-w-[62ch] space-y-5 border-t border-rule pt-8 text-[1.0625rem] leading-[1.7]">
        <p>
          I studied computer science at Babcock University and have been
          building for the web since 2022. Most of my work has been in Nigerian
          fintech and enterprise settings: Squad, GTB, Deloitte and now Kachex.
        </p>
        <p>
          At Deloitte I worked in technology assurance. That taught me what
          auditors and finance leads need from software, and how to explain a
          technical choice to someone who has to sign it off. At Kachex I
          coordinate a small engineering team while still writing frontend code.
        </p>
        <p>
          Outside work I build my own products, like Billio, to practise the
          parts a job does not always give me: sign-in, syncing, email and
          third-party APIs.
        </p>
      </div>
    </section>
  );
}
