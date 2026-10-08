import type { Metadata } from "next";
import { buildSeoAlternates } from "@/content/public-site";
import { SolutionHub } from "@/components/marketing/solution-hub";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/solutions/medicine"),
  title: "Quinn for medicine | Medical history and progress notes",
  description: "Prepare reviewable medical history and progress-note drafts. Physician approval, controlled access and manual text or PDF handoff, not automatic system integration."
};

export default function Page() {
  return <SolutionHub locale="en" segment="medicine" />;
}
