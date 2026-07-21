import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Pilot partners for AI care documentation | Quinn",
  description: "Pilot partners for review-first AI care documentation: 4–6 week structure with usage, quality and review-effort metrics."
};

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "Time from raw input to a reviewable draft for each selected workflow." },
  { label: pilotMetricsByLocale.en.editRate, description: "How much is changed, completed or rejected before approval?" },
  { label: pilotMetricsByLocale.en.reviewEffort, description: "Care/QM review effort before and after the Quinn workflow." },
  { label: pilotMetricsByLocale.en.teamAcceptance, description: "Whether the team uses Quinn repeatedly and perceives relief." }
];

export default function PilotProgramPage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="Pilot program"
      title="Pilot partners for review-first AI care documentation"
      description="Quinn is in a pilot phase. Together with care providers, we validate demand, usage, draft quality, review effort and willingness to pay — transparently and without overstated automation claims."
      primaryCta="Request a pilot call"
      secondaryCta="View SIS intake"
      secondaryHref="/en/use-cases/sis-intake"
      points={[
        "Walk through a fictional or anonymised case in a demo.",
        "Select a clearly bounded intake or SIS-style workflow.",
        "Define success metrics for time, edit effort, completeness and team acceptance before starting."
      ]}
      problemTitle="Who the pilot is for"
      problemDescription="The pilot is for care providers that want to evaluate documentation relief without skipping their existing system, professional responsibility or data-processing path."
      problemItems={[
        "Care homes with recurring intake conversations and SIS-style documentation needs.",
        "Care leadership and quality teams that want to measure review effort and documentation gaps.",
        "Operators that want to test AI carefully inside a bounded workflow.",
        "Teams that want to start with fictional or anonymised cases before using real data."
      ]}
      workflowTitle="4–6 week pilot structure"
      workflowDescription="The pilot is small enough to learn quickly and concrete enough to produce real usage signals."
      workflow={[
        { title: "Week 0: Scope", description: "Define workflow, roles, processing path and success criteria." },
        { title: "Week 1: Demo & setup", description: "Test fictional cases, onboard the team and agree review rules." },
        { title: "Weeks 2–5: Usage", description: "Use Quinn repeatedly for intake, SIS-style or review workflows." },
        { title: "Week 6: Evaluation", description: "Review metrics, feedback and the decision for a next pilot or rollout step." }
      ]}
      proofTitle="What we do not promise"
      proofDescription="Care markets require credible communication. Quinn does not claim completed market validation; the pilot shows what still needs proof."
      proofPoints={[
        "No generic ROI or time-saving guarantee.",
        "No autonomous professional approval by Quinn.",
        "No replacement of the existing system.",
        "No real resident data without a clarified privacy, roles and processing path."
      ]}
      metricsTitle="Pilot metrics"
      metricsDescription="These metrics show whether Quinn produces real demand and usefulness signals in care workflows."
      metrics={metrics}
      faqTitle="Frequently asked questions"
      faqs={publicFaqsByLocale.en}
      footerTitle="Let's review one care workflow together."
      footerDescription="A short call is enough to identify the right workflow, data path and pilot scope."
    />
  );
}
