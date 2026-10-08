import type { Metadata } from "next";
import { buildSeoAlternates } from "@/content/public-site";
import { EqualPillarLanding } from "@/components/marketing/equal-pillar-landing";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en"),
  title: "Quinn | AI documentation for nursing care and medicine",
  description: "Turn conversations and notes into reviewable documentation drafts. For nursing care and medicine, with professional review and manual handoff to your existing system."
};

export default function HomePage() {
  return <EqualPillarLanding locale="en" />;
}
