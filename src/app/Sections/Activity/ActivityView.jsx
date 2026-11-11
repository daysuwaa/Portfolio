import ScrollEnd from "./ScrollEnd";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Shades come from the accent colour, so they follow light and dark mode.
const SHADES = [
  "color-mix(in srgb, var(--rule) 70%, transparent)",
  "color-mix(in srgb, var(--pen) 28%, var(--paper))",
  "color-mix(in srgb, var(--pen) 50%, var(--paper))",
  "color-mix(in srgb, var(--pen) 74%, var(--paper))",
  "var(--pen)",
];

function levelFor(count, max) {
  if (!count) return 0;
  const r = count / max;
  return r > 0.75 ? 4 : r > 0.5 ? 3 : r > 0.25 ? 2 : 1;
}

function toWeeks(days) {
  const weeks = [];
  let week = new Array(new Date(days[0].date + "T00:00:00Z").getUTCDay()).fill(null);
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);
  return weeks;
}

export default function ActivityView({ contributions, languages }) {
  const weeks = contributions ? toWeeks(contributions.days) : [];
  const max = contributions ? Math.max(1, ...contributions.days.map((d) => d.count)) : 1;
  const monthMarks = weeks.map((w, i) => {
    const first = w.find(Boolean);
    const m = first ? new Date(first.date + "T00:00:00Z").getUTCMonth() : null;
    const prev = i > 0 ? weeks[i - 1].find(Boolean) : null;
    const pm = prev ? new Date(prev.date + "T00:00:00Z").getUTCMonth() : null;
    return m !== null && m !== pm ? MONTHS[m] : "";
  });

  return (
    <section id="activity" className="pt-24">
      <h2 className="font-display text-[1.75rem] font-semibold tracking-tight">Activity</h2>
      <div className="mt-6 border-t border-rule pt-8">
        {contributions ? (
          <>
            <p className="text-[1.0625rem]">
              <span className="font-medium">{contributions.total.toLocaleString("en-US")}</span> contributions in the last year on{" "}
              <a href="https://github.com/daysuwaa" className="link" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
            <ScrollEnd className="mt-6 overflow-x-auto pb-2">
              <div className="inline-grid min-w-max gap-[3px]" style={{ gridTemplateColumns: `repeat(${weeks.length}, 12px)` }} role="img" aria-label={`${contributions.total} GitHub contributions in the last year`}>
                {monthMarks.map((m, i) => (
                  <span key={`m${i}`} className="h-4 overflow-visible whitespace-nowrap text-xs text-mute" style={{ gridRow: 1, gridColumn: i + 1 }}>
                    {m}
                  </span>
                ))}
                {weeks.map((w, wi) =>
                  w.map((d, di) => (
                    <span
                      key={`${wi}-${di}`}
                      title={d ? `${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}` : undefined}
                      className="h-3 w-3 rounded-[3px]"
                      style={{ gridRow: di + 2, gridColumn: wi + 1, background: d ? SHADES[levelFor(d.count, max)] : "transparent" }}
                    />
                  ))
                )}
              </div>
            </ScrollEnd>
            <div className="mt-3 flex items-center justify-end gap-2 text-sm text-mute">
              Less
              {SHADES.map((s, i) => (
                <span key={i} className="h-3 w-3 rounded-[3px]" style={{ background: s }} />
              ))}
              More
            </div>
          </>
        ) : null}

        {languages ? (
          <div className={contributions ? "mt-12" : ""}>
            <h3 className="font-display text-[1.25rem] font-semibold tracking-tight">Languages across my repos</h3>
            <ul className="mt-5 space-y-3.5">
              {languages.map((l) => (
                <li key={l.name} className="grid grid-cols-[7.5rem_1fr_3rem] items-center gap-4 sm:grid-cols-[10rem_1fr_3.5rem]">
                  <span className={l.muted ? "text-mute" : ""}>{l.name}</span>
                  <span className="h-2.5 rounded-full bg-rule/60">
                    <span className="block h-full rounded-full" style={{ width: `${Math.max(l.pct, 1.5)}%`, background: l.muted ? "var(--mute)" : "var(--pen)", opacity: l.muted ? 0.5 : 1 }} />
                  </span>
                  <span className="text-right text-mute">{Math.round(l.pct)}%</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
