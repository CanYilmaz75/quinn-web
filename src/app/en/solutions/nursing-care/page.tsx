import type { Metadata } from "next";
import { buildSeoAlternates } from "@/content/public-site";
import { SolutionHub } from "@/components/marketing/solution-hub";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/solutions/nursing-care"),
  title: "Quinn for nursing care | Care conversations and SIS",
  description: "Document care conversations and prepare structured SIS drafts. Reviewable content, professional responsibility and manual handoff into your existing care system."
};

export default function Page() {
  return <SolutionHub locale="en" segment="care" />;
}
