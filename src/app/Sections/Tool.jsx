const groups = [
  ["Frontend", "React, Next.js, TypeScript, Tailwind CSS, Framer Motion"],
  ["Backend", "Node.js, NestJS, Python, C# and .NET"],
  ["Data", "PostgreSQL, Supabase, Prisma, MongoDB"],
  ["Habits", "Git and GitHub, Figma to code, writing things down for non-technical readers"],
];

export default function Tool() {
  return (
    <section id="stack" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Stack</h2>
      <dl className="mt-6 border-t border-rule">
        {groups.map(([k, v]) => (
          <div key={k} className="grid gap-1 border-b border-rule py-4 md:grid-cols-[12rem_1fr] md:gap-8">
            <dt className="font-medium">{k}</dt>
            <dd className="text-mute">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 text-mute">Currently preparing for the Microsoft Azure AI-901 certification.</p>
    </section>
  );
}
