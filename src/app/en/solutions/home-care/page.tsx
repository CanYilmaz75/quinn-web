import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";

export const metadata: Metadata = {
  title: "AI documentation for home care workflows | Quinn",
  description: "Quinn helps home care teams evaluate review-first documentation drafts for notes, handovers and structured care documentation."
};

export default function HomeCarePage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="Home care"
      title="Review-first AI documentation for home care workflows."
      description="Quinn can support care teams where conversations, visits and notes need to become clear documentation before transfer into existing systems."
      primaryCta="Request a demo"
      secondaryCta="View pilot program"
      secondaryHref="/en/pilot-program"
      points={[
        "Turn visit notes and conversations into reviewable drafts.",
        "Keep open cues visible for the responsible professional.",
        "Transfer approved content into the existing documentation process."
      ]}
      workflowTitle="Start narrow, learn from real usage."
      workflowDescription="For home care, Quinn starts with a clearly bounded documentation moment instead of promising broad automation across every workflow."
      workflow={[
        { title: "Capture", description: "Use notes or audio from a care situation." },
        { title: "Structure", description: "Create a neutral draft with open cues." },
        { title: "Review", description: "Let the responsible professional edit and approve." },
        { title: "Transfer", description: "Move approved content into the existing documentation process." }
      ]}
      proofTitle="Care-specific, not generic AI."
      proofDescription="Quinn is positioned around care documentation language, review responsibility and practical adoption before the system of record."
      proofPoints={[
        "Human approval remains mandatory.",
        "Workflow and privacy requirements are reviewed before pilots.",
        "Evidence comes from measured pilot usage, not broad claims."
      ]}
      footerTitle="Test one home care workflow first."
      footerDescription="We can walk through a realistic case and decide whether a pilot around notes or handover documentation is useful."
    />
  );
}
