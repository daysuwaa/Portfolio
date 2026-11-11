const USER = "daysuwaa";
const REVALIDATE = 60 * 60 * 24; // refresh once a day

const headers = () => {
  const h = { Accept: "application/json", "User-Agent": "portfolio" };
  if (process.env.GITHUB_TOKEN) h.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  return h;
};

async function graphql(query) {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: REVALIDATE },
  });
  if (!res.ok) throw new Error(`GraphQL ${res.status}`);
  const json = await res.json();
  if (json.errors) throw new Error(json.errors[0]?.message || "GraphQL error");
  return json.data;
}

// Returns { total, days: [{ date, count }] } or null when GitHub can't be reached.
export async function getContributions() {
  try {
    if (process.env.GITHUB_TOKEN) {
      const d = await graphql(`{ user(login: "${USER}") { contributionsCollection { contributionCalendar { totalContributions weeks { contributionDays { date contributionCount } } } } } }`);
      const cal = d.user.contributionsCollection.contributionCalendar;
      return {
        total: cal.totalContributions,
        days: cal.weeks.flatMap((w) => w.contributionDays.map((x) => ({ date: x.date, count: x.contributionCount }))),
      };
    }
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${USER}?y=last`, { next: { revalidate: REVALIDATE } });
    if (!res.ok) throw new Error(`Contributions ${res.status}`);
    const json = await res.json();
    const days = (json.contributions || []).map((x) => ({ date: x.date, count: x.count }));
    if (!days.length) return null;
    return { total: json.total?.lastYear ?? days.reduce((a, b) => a + b.count, 0), days };
  } catch (err) {
    console.error("Activity: contributions unavailable", err.message);
    return null;
  }
}

// Returns [{ name, pct }] for the top languages across my own repos, or null.
export async function getLanguages() {
  try {
    const sizes = {};
    if (process.env.GITHUB_TOKEN) {
      const d = await graphql(`{ user(login: "${USER}") { repositories(first: 100, ownerAffiliations: OWNER, isFork: false, orderBy: {field: PUSHED_AT, direction: DESC}) { nodes { languages(first: 6, orderBy: {field: SIZE, direction: DESC}) { edges { size node { name } } } } } } }`);
      for (const r of d.user.repositories.nodes) for (const e of r.languages.edges) sizes[e.node.name] = (sizes[e.node.name] || 0) + e.size;
    } else {
      const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=40&sort=pushed`, { headers: headers(), next: { revalidate: REVALIDATE } });
      if (!res.ok) throw new Error(`Repos ${res.status}`);
      const repos = (await res.json()).filter((r) => !r.fork).slice(0, 25);
      const all = await Promise.all(
        repos.map((r) => fetch(r.languages_url, { headers: headers(), next: { revalidate: REVALIDATE } }).then((x) => (x.ok ? x.json() : {})).catch(() => ({})))
      );
      for (const l of all) for (const [k, v] of Object.entries(l)) sizes[k] = (sizes[k] || 0) + v;
    }
    const total = Object.values(sizes).reduce((a, b) => a + b, 0);
    if (!total) return null;
    const sorted = Object.entries(sizes).sort((a, b) => b[1] - a[1]);
    const top = sorted.slice(0, 5).map(([name, v]) => ({ name, pct: (v / total) * 100 }));
    const rest = sorted.slice(5).reduce((a, [, v]) => a + v, 0);
    if (rest > 0) top.push({ name: "Other", pct: (rest / total) * 100, muted: true });
    return top;
  } catch (err) {
    console.error("Activity: languages unavailable", err.message);
    return null;
  }
}
