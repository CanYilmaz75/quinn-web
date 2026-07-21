import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "AI-assisted SIS-style intake documentation | Quinn",
  description: "AI-assisted SIS-style intake documentation for care teams with human review before information enters the existing system."
};

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "Time from conversation or notes to a reviewable SIS-style draft." },
  { label: pilotMetricsByLocale.en.editRate, description: "How much the team edits before the draft is professionally acceptable." },
  { label: pilotMetricsByLocale.en.completeness, description: "Which resources, risks, wishes or missing facts still need clarification." },
  { label: pilotMetricsByLocale.en.reviewEffort, description: "Review workload before and after Quinn for care leadership or quality teams." }
];

export default function SisIntakePage() {
  return (
    <SeoLandingPage
      locale="en"
      eyebrow="SIS intake"
      title="AI-assisted SIS-style intake documentation for care teams"
      description="Quinn supports the step before the resident record: conversations, notes and audio become a structured draft with open cues and human approval."
      primaryCta="Request an SIS demo"
      secondaryCta="View pilot program"
      secondaryHref="/en/pilot-program"
      points={[
        "Capture intake conversation, context and notes in one review-first flow.",
        "Prepare resources, risks and wishes for SIS-style documentation.",
        "Make open information visible before anything is transferred into the existing system."
      ]}
      problemTitle="Why intake documentation becomes a bottleneck"
      problemDescription="The hard part is translating fragmented real-world conversation into neutral, complete and reviewable documentation before it enters the system."
      problemItems={[
        "Intake conversations mix biography, risks, resources and wishes in no fixed order.",
        "Care teams need gap cues without turning the conversation into a rigid checklist.",
        "Existing systems store the record, but do not solve the drafting bottleneck before it.",
        "Adoption requires clear responsibility, approval and processing boundaries."
      ]}
      workflowTitle="Conversation → draft → gaps → approval → transfer"
      workflowDescription="Quinn does not create a final record entry. It creates a reviewable SIS-style draft for professional editing and approval."
      workflow={[
        { title: "Capture", description: "The care team records conversation, notes or audio without interrupting the conversation." },
        { title: "Structure", description: "Quinn organises content into care-specific sections and open cues." },
        { title: "Review", description: "The team edits, validates and resolves missing information." },
        { title: "Transfer", description: "Approved content can be copied or exported into the existing system." }
      ]}
      proofTitle="What Quinn does not do"
      proofDescription="The narrow scope is intentional: Quinn avoids high-risk automation and focuses on the reviewable drafting step."
      proofPoints={[
        "Quinn is not a resident record or care software replacement.",
        "Quinn does not make autonomous care decisions.",
        "Time savings are measured in pilots, not claimed in advance.",
        "Real resident data starts only after roles, processing path and agreements are clarified."
      ]}
      metricsTitle="Pilot metrics"
      metricsDescription="The pilot measures whether Quinn creates real value and adoption signals in care workflows."
      metrics={metrics}
      faqTitle="Frequently asked questions"
      faqs={publicFaqsByLocale.en}
      footerTitle="Test SIS-style intake in a pilot workflow."
      footerDescription="We are looking for care partners who want to walk through a realistic intake case and evaluate where a reviewable draft can reduce documentation load."
    />
  );
}
