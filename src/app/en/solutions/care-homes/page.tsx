import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Quinn for care homes",
  description: "Quinn supports care homes with intake quality, SIS-style conversations and reviewable documentation drafts before existing systems."
};

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "How long does an intake or SIS-style case take until a reviewable draft exists?" },
  { label: pilotMetricsByLocale.en.editRate, description: "How much needs to be changed before professional approval?" },
  { label: pilotMetricsByLocale.en.completeness, description: "Which open information becomes visible before transfer?" },
  { label: pilotMetricsByLocale.en.teamAcceptance, description: "Does the team accept Quinn as relief rather than another system?" }
];

export default function NursingHomesPage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="Care homes"
      title="Quinn for care homes: improve intake quality without changing systems."
      description="Why Quinn helps: for care leadership, the leverage sits where intake conversations, daily reports, SIS preparation and notes need to become reviewable documentation. Quinn works before the existing system — not as another resident record."
      primaryCta="Request a care-home demo"
      secondaryCta="View pilot program"
      secondaryHref="/en/pilot-program"
      points={[
        "Turn intake and SIS-style conversations into reviewable drafts.",
        "Make gaps, open cues and review points visible.",
        "Start a pilot without changing systems and evaluate relief with clear metrics."
      ]}
      problemTitle="Where care homes lose documentation time"
      problemDescription="Care homes do not document because they want more tools. They document because quality, evidence and care continuity depend on it."
      problemItems={[
        "Intake quality depends on whether relevant statements are captured completely and neutrally.",
        "SIS-style conversations create open points that care leadership often needs to review later.",
        "Care leadership needs a way to test relief without starting with integration or system migration.",
        "Real resident data should only start after processing path, roles and agreements are clarified."
      ]}
      workflowTitle="From care conversation to approved draft"
      workflowDescription="Quinn creates a calm review workflow between conversation and the existing care system."
      workflow={[
        { title: "Prepare intake", description: "Resident context, conversation and notes are captured in a clear flow." },
        { title: "Create draft", description: "Quinn structures observations, wishes, risks and open cues." },
        { title: "Review", description: "The care professional edits and approves only what is right." },
        { title: "Transfer", description: "Approved content can be copied or exported into the existing system." }
      ]}
      proofTitle="Pilot without system change"
      proofDescription="The start should not fail because of integration or broad rollout promises. Quinn is measured in one concrete documentation moment first."
      proofPoints={[
        "Fictional or anonymised cases for the first demo step.",
        "Clarified processing path before real data.",
        "Professional approval stays with the care provider.",
        "Rollout only after evidence from usage, quality and team acceptance."
      ]}
      metricsTitle="Pilot metrics for care homes"
      metricsDescription="For care homes, the question is whether Quinn is usable in real workflows and reduces rework."
      metrics={metrics}
      faqTitle="Frequently asked questions"
      faqs={publicFaqsByLocale.en}
      footerTitle="Walk through one intake case together."
      footerDescription="In a demo call, we show how an intake conversation becomes a reviewable draft without replacing the existing system."
    />
  );
}
