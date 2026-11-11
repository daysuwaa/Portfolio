import { getContributions, getLanguages } from "../../lib/github";
import ActivityView from "./ActivityView";

export default async function Activity() {
  const [contributions, languages] = await Promise.all([getContributions(), getLanguages()]);
  // If GitHub can't be reached at build time, hide the section rather than show an empty box.
  if (!contributions && !languages) return null;
  return <ActivityView contributions={contributions} languages={languages} />;
}
