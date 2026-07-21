import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Voice documentation for care with human review | Quinn",
  description: "Voice documentation for care teams with reviewable drafts, gap cues and human approval before transfer into existing systems."
};

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "Time from voice or notes to a reviewable documentation draft." },
  { label: pilotMetricsByLocale.en.editRate, description: "How much the draft needs to be corrected or completed before approval." },
  { label: pilotMetricsByLocale.en.completeness, description: "Whether relevant open cues and missing information are visible." },
  { label: pilotMetricsByLocale.en.reviewEffort, description: "Whether care leadership and quality teams spend less time on rework." }
];

export default function VoiceDocumentationCarePage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="Voice documentation for care"
      title="Voice documentation for care — with human review before transfer"
      description="Voice can be the fastest input. Quinn's difference is the next step: audio, conversation and notes become a reviewable draft with gap cues, approval and transfer logic."
      primaryCta="Request a demo"
      secondaryCta="View SIS intake"
      secondaryHref="/en/use-cases/sis-intake"
      points={[
        "Audio and notes become care-specific sections, not just raw text.",
        "Quinn separates observation, action, response and open cues.",
        "Professional responsibility stays with the team; export happens after review."
      ]}
      problemTitle="Voice is only the beginning"
      problemDescription="Pure dictation reduces typing. Care teams also need a neutral, complete and reviewable draft before information enters the existing documentation system."
      problemItems={[
        "Spoken information is often fragmented and needs care-specific structure.",
        "A transcript alone does not create a reviewable care entry.",
        "Quality teams need gap cues, edit effort and visible approval boundaries.",
        "The existing system remains the leading record; Quinn works before it."
      ]}
      workflowTitle="What Quinn does differently"
      workflowDescription="Quinn connects voice, notes and review into a documentation draft that is deliberately not accepted blindly."
      workflow={[
        { title: "Input", description: "The care team speaks, writes notes or uploads audio." },
        { title: "Draft", description: "Quinn structures the content into a care-specific draft." },
        { title: "Review", description: "The team edits, validates and resolves open cues." },
        { title: "Transfer", description: "Approved content can be moved into the existing care system." }
      ]}
      proofTitle="Existing care systems stay in the lead"
      proofDescription="Quinn is not a new record and not uncontrolled automation. It is a drafting and review layer before the existing system."
      proofPoints={[
        "Quinn creates reviewable drafts, not final records without approval.",
        "Quinn does not replace professional responsibility.",
        "A pilot can start with fictional or anonymised cases.",
        "Privacy, roles and processing are reviewed for each organisation."
      ]}
      metricsTitle="Which metrics are measured in the pilot?"
      metricsDescription="The page does not promise a generic ROI. It shows what signals we want to validate with care providers."
      metrics={metrics}
      faqTitle="Frequently asked questions"
      faqs={publicFaqsByLocale.en}
      footerTitle="Evaluate voice documentation in a care workflow."
      footerDescription="In a demo call, we walk through a realistic care case and assess whether review-first AI documentation fits your workflow."
    />
  );
}
