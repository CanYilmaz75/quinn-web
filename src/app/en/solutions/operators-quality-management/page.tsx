import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "AI care documentation for operators and quality management | Quinn",
  description: "Quinn helps care operators and quality management teams measure review effort, documentation gaps and rollout governance."
};

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "Time per selected intake, SIS-style or review case." },
  { label: pilotMetricsByLocale.en.editRate, description: "How much correction effort is needed before approval?" },
  { label: pilotMetricsByLocale.en.reviewEffort, description: "How does care/QM review effort change?" },
  { label: pilotMetricsByLocale.en.teamAcceptance, description: "Which teams use Quinn repeatedly and why?" }
];

export default function OperatorsQualityManagementPage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="Care operators and quality management"
      title="Evaluate documentation quality before AI enters rollout."
      description="For care operators and quality management teams, Quinn is a review-first layer before existing systems: make documentation gaps visible, keep facility-specific standards reviewable and decide rollout only after evidence."
      primaryCta="Request an operator demo"
      secondaryCta="View pilot program"
      secondaryHref="/en/pilot-program"
      points={[
        "Measure review effort and documentation gaps in intake or SIS-style workflows.",
        "Keep facility-specific standards visible as reviewable draft guardrails.",
        "Support rollout governance with clear pilot metrics rather than assumptions."
      ]}
      problemTitle="Buyer questions before rollout"
      problemDescription="Operators need more than a good-looking draft. They need evidence that teams adopt Quinn, quality teams do not receive more rework, and responsibility remains clear."
      problemItems={[
        "How much review effort exists today in intake or SIS-style workflows?",
        "Where do documentation gaps appear and how early are they visible?",
        "How are facility-specific standards maintained without removing professional judgement?",
        "Which rollout governance signals show whether more facilities should adopt Quinn?"
      ]}
      workflowTitle="Pilot governance before broad rollout"
      workflowDescription="Quinn starts in one bounded workflow. Only if usage, quality and acceptance are strong does the next rollout step make sense."
      workflow={[
        { title: "Choose workflow", description: "Select intake, SIS-style documentation or review as the first test." },
        { title: "Define standards", description: "Make quality and facility language visible as reviewable draft guardrails." },
        { title: "Measure", description: "Track edit rate, completeness, review effort and team acceptance." },
        { title: "Decide", description: "Move toward rollout only with evidence and a clarified processing path." }
      ]}
      proofTitle="evidence before rollout"
      proofDescription="Quinn is not sold as a finished rollout thesis. It is a measurable pilot path for operators that want to test AI responsibly."
      proofPoints={[
        "No replacement of existing care software.",
        "No autonomous professional approval.",
        "Processing path reviewed per organisation before real data.",
        "Facility or operator rollout decisions follow pilot metrics."
      ]}
      metricsTitle="Metrics for operators and quality teams"
      metricsDescription="These signals distinguish an interesting demo from a credible rollout candidate."
      metrics={metrics}
      faqTitle="Frequently asked questions"
      faqs={publicFaqsByLocale.en}
      footerTitle="Set up a measured operator pilot."
      footerDescription="We can identify the first workflow that gives your organisation meaningful evidence without replacing existing systems."
    />
  );
}
