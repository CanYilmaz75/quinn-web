import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/pilot-program"),
  title: "Pilot program for AI care documentation | Quinn",
  description: "Test Quinn for 4–6 weeks in one defined care workflow and evaluate time, rework, completeness and review workload."
};

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "Time from raw input to a reviewable draft for each selected documentation case." },
  { label: pilotMetricsByLocale.en.editRate, description: "How much is completed or corrected before a draft is professionally suitable?" },
  { label: pilotMetricsByLocale.en.reviewEffort, description: "How does review and follow-up effort change for professionals, care leadership and quality teams?" },
  { label: pilotMetricsByLocale.en.teamAcceptance, description: "Is the workflow understandable and does the team use Quinn repeatedly?" }
];

export default function PilotProgramPage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="Pilot program"
      title="Test Quinn in one defined care workflow"
      description="During a 4–6 week pilot, your organisation can assess whether Quinn makes documentation work easier: with less rework, clearer open points and a controlled path to professional approval."
      primaryCta="Request a pilot call"
      secondaryCta="View SIS intake"
      secondaryHref="/en/use-cases/sis-intake"
      points={[
        "Start with a fictional or anonymised case.",
        "Select one clearly bounded intake, SIS-style or review workflow.",
        "Define how your organisation will recognise relief, quality and everyday usability before starting."
      ]}
      problemTitle="Who the pilot is for"
      problemDescription="The pilot is for care organisations that want to assess documentation relief in a bounded workflow without replacing the existing system or professional responsibility."
      problemItems={[
        "Care homes with recurring intake conversations and SIS-style documentation needs.",
        "Care leadership and quality teams that want to reduce review effort, follow-up questions and documentation gaps.",
        "Operators that want a clear basis for deciding whether to introduce Quinn more widely.",
        "Teams that want to start with fictional or anonymised cases before using real data."
      ]}
      workflowTitle="4–6 weeks with clear guidance"
      workflowDescription="The pilot remains manageable and gives your organisation a practical basis for deciding on the next step."
      workflow={[
        { title: "Week 0: Define the workflow", description: "Agree the documentation case, roles, processing path and decision criteria." },
        { title: "Week 1: Introduction", description: "Test fictional cases, onboard the team and agree professional review rules." },
        { title: "Weeks 2–5: Test in daily work", description: "Use Quinn repeatedly for selected intake, SIS-style or review cases." },
        { title: "Week 6: Evaluate together", description: "Review time, rework, completeness, review workload and team feedback." }
      ]}
      proofTitle="Clear boundaries during the pilot"
      proofDescription="Quinn supports documentation work. Your organisation retains professional control and decides on wider use based on its own evaluation."
      proofPoints={[
        "No generic guarantee of time savings or financial impact.",
        "No autonomous professional approval by Quinn.",
        "No replacement of the existing system.",
        "No real resident data without a clarified privacy, roles and processing path."
      ]}
      metricsTitle="What your organisation can evaluate"
      metricsDescription="The evaluation shows whether Quinn contributes to less rework, better completeness and a manageable review workload in the selected workflow."
      metrics={metrics}
      faqTitle="Frequently asked questions"
      faqs={publicFaqsByLocale.en}
      footerTitle="Let&apos;s review one documentation workflow together."
      footerDescription="A 15-minute call is enough to identify the right workflow, processing path and pilot scope."
    />
  );
}
