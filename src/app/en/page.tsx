import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileAudio,
  FileText,
  LockKeyhole,
  Mic,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn | Review-first AI documentation for care conversations",
  description:
    "Review-first AI documentation for care conversations, intake, handover, anamnesis, notes and audio before existing care, clinic or practice systems."
};

const metricCards = [
  { value: "Care", label: "Prepare conversations and SIS-style intake" },
  { value: "Clinic", label: "Structure intake, rounds and handover" },
  { value: "Practice", label: "Draft anamnesis and progress notes" },
  { value: "Review", label: "Check professionally and hand off safely" }
];

const workflowSteps = [
  {
    title: "Before the conversation",
    description: "Prepare the case, role and available context, whether it is care intake, clinical handover or medical anamnesis.",
    icon: ClipboardCheck
  },
  {
    title: "During the conversation",
    description: "Record audio, add notes or upload content. Quinn structures relevant statements in the background.",
    icon: Mic
  },
  {
    title: "After the conversation",
    description: "Review the draft, open questions and handover cues, then transfer only when the team is ready.",
    icon: FileText
  }
];

const productFeatures = [
  {
    title: "Documentation that follows the care delivery workflow",
    description:
      "Conversation content is not stored as raw text. Quinn turns it into reviewable sections, open cues and next steps.",
    points: ["Audio & upload", "Draft note", "Text or voice editing"],
    icon: FileAudio
  },
  {
    title: "Separate care, clinic and practice workflows",
    description:
      "SIS-style care conversations, anamnesis, rounds, handover or discharge planning get the right structure without replacing existing systems.",
    points: ["Care & SIS", "Anamnesis & progress", "Handover & discharge"],
    icon: Workflow
  },
  {
    title: "Approval instead of a black box",
    description:
      "Every draft remains visible and editable. Export and handoff happen only after professional review by the responsible team.",
    points: ["Review status", "Approval", "PDF & copy"],
    icon: BadgeCheck
  }
];

const launchWorkflows = [
  { title: "Notes into professional documentation", description: "Short notes become a factual draft with observation, context, next step and open point." },
  { title: "Intake and anamnesis", description: "Care intake, medical anamnesis or clinical intake are pre-structured into reviewable sections." },
  { title: "SIS and care planning", description: "Resources, risks and wishes are prepared for transfer into the existing care system." },
  { title: "Handover or daily report", description: "Several entries are condensed into a clear copy-ready summary for care, ward or practice teams." },
  { title: "Quality check", description: "Factual, neutral and complete: no invented diagnosis, no treatment decision, no fabricated measures." }
];

const demoCases = [
  { title: "Care case Mrs M. · Restlessness in the evening", text: "Resident repeatedly walks through the hallway. Quinn separates observation, action, response and open point." },
  { title: "Clinical handover after a fall event", text: "Situation, immediate action, notification and observation become a reviewable handover draft." },
  { title: "Anamnesis with several complaints", text: "Conversation content, relevant history and open questions are separated without inventing a diagnosis." },
  { title: "Discharge and care planning", text: "Agreements with relatives, care, practice or social service are turned into a clear summary." }
];

const useCases = ["Care intake & SIS", "Clinical handover", "Medical anamnesis", "Rounds and progress notes", "Discharge and care planning", "Documentation review"];

const securityItems = [
  {
    title: "Protected workspaces",
    description: "Documentation data sits behind login, organisation context and protected app areas.",
    icon: ShieldCheck
  },
  {
    title: "Controlled file paths",
    description: "Audio uploads and exports are designed around private storage and limited access paths.",
    icon: LockKeyhole
  },
  {
    title: "Traceable steps",
    description: "Creation, editing, approval and export are designed as visible process points.",
    icon: CheckCircle2
  },
  {
    title: "Human responsibility",
    description: "Quinn creates drafts. Professional review and final approval stay with the team.",
    icon: Users
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">{children}</p>;
}

function ProductMockup() {
  const transcriptLines = [
    "Resident describes feeling unsure during morning transfer.",
    "Daughter mentions a new tripping situation in the bathroom.",
    "Care worker adds: walker is used in the room."
  ];

  return (
    <div className="relative rounded-[2rem] border border-[#DDE8E4] bg-white p-3 shadow-subtle">
      <div className="absolute right-3 top-3 hidden rounded-2xl border border-[#DDE8E4] bg-[#F6F0E3] px-4 py-3 text-sm font-semibold text-[#0A0A0F] shadow-subtle sm:block">
        2 open cues
      </div>
      <div className="overflow-hidden rounded-[1.5rem] border border-[#E8E8EC] bg-[#E7F1EE]">
        <div className="flex items-center justify-between border-b border-[#E8E8EC] bg-white px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#DDE8E4] bg-white">
              <Image src="/quinn-logo.svg" alt="Quinn" width={44} height={44} className="h-11 w-11" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Care consultation / SIS</p>
              <p className="text-xs text-secondary-foreground">Audio is being structured</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-[#E7F1EE] px-3 py-2 text-xs font-semibold text-[#1E6B72] sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#1E6B72]" />
            Live review
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border-b border-[#E8E8EC] bg-white p-5 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Transcript</p>
              <span className="rounded-full bg-[#F6F0E3] px-3 py-1 text-xs text-secondary-foreground">03:42</span>
            </div>
            <div className="mt-5 space-y-4">
              {transcriptLines.map((line, index) => (
                <div key={line} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7F1EE] text-xs font-semibold text-[#1E6B72]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-secondary-foreground">{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#E7F1EE] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Next step</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Generate draft and check open points</p>
            </div>
          </div>

          <div className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Draft note</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">Transfer and living environment</h3>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-[#DDE8E4]" />
                  <div className="h-2 w-10/12 rounded-full bg-[#E8E8EC]" />
                  <div className="h-2 w-8/12 rounded-full bg-[#E8E8EC]" />
                </div>
              </div>
              <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">SIS field</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">Mobility</h3>
                <p className="mt-3 text-sm leading-6 text-secondary-foreground">Resources available, check assistive device, clarify bathroom situation.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Approval</p>
                  <p className="mt-2 text-sm text-secondary-foreground">Validate, edit, export</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-secondary-foreground sm:min-w-56">
                  <span className="rounded-full border border-[#DDE8E4] px-3 py-2">Validate</span>
                  <span className="rounded-full bg-[#1E6B72] px-3 py-2 text-white">Approve</span>
                  <span className="rounded-full border border-[#DDE8E4] px-3 py-2">Copy</span>
                  <span className="rounded-full border border-[#DDE8E4] px-3 py-2">PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EnglishLandingPage() {
  return (
    <main className="min-h-screen bg-[#FBFAF6] text-foreground">
      <SiteHeader locale="en" />

      <section className="relative overflow-hidden border-b border-[#E8E8EC]/80 bg-[#FBFAF6]">
        <div className="quinn-container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          <div>
            <h1 className="max-w-3xl text-[38px] font-semibold leading-[1.04] tracking-[-0.032em] text-[#0A0A0F] sm:text-[52px] lg:text-[62px]">
              AI documentation for care conversations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-foreground sm:text-xl">
              Quinn lets care teams in care facilities capture conversations and notes with less friction. AI turns them into structured,
              reviewable documentation prepared for the existing care system, so more time stays with the people who need care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl bg-[#0A0A0F] px-7 hover:bg-[#1E6B72]">
                <Link href="/en/book-demo">
                  Request a demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#DDE8E4] bg-white px-7">
                <a href="#pilot-program">View pilot program</a>
              </Button>
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section className="border-b border-[#E8E8EC]/80 bg-white py-8">
        <div className="quinn-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metricCards.map((item) => (
              <div key={item.value} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-5">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Why Quinn</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
            Documentation should support care, not dominate the workday.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
            Quinn brings conversation, context, review and export into one calm workflow for healthcare and care organisations, so AI becomes a practical assistant rather than a hidden black box.
          </p>
        </div>
      </section>

      <section id="product" className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>Product</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Paperwork? Quinn prepares it for review.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Not another dashboard, but a clear flow for care, clinic and practice: capture, structure, review, approve and hand off.
            </p>
            <div className="mt-9 space-y-5">
              {productFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1EE]">
                        <Icon className="h-5 w-5 text-[#1E6B72]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-secondary-foreground">{feature.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {feature.points.map((point) => (
                            <span key={point} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-secondary-foreground">
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section id="workflow" className="quinn-container py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Eyebrow>Daily work</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Before, during and after the conversation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Quinn follows the real care delivery workflow: care conversation, intake, rounds, handover or discharge planning.
            </p>
          </div>
          <div className="relative grid gap-5">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#DDE8E4] sm:block" />
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-sm sm:pl-20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F1EE] text-[#1E6B72] sm:absolute sm:left-0 sm:top-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-secondary-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#E7F1EE] py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Core workflows</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              A documentation layer for care, clinic and practice.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              The first aha moment: choose a role, choose a task, capture a conversation or notes, review the draft and transfer it into the existing system.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {launchWorkflows.map((workflow) => (
              <div key={workflow.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6">
                <h3 className="text-xl font-semibold text-foreground">{workflow.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo-cases" className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Demo mode</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Understand the flow in two minutes with fictional cases.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              No real patient or resident data needed: the demo uses realistic situations from care, clinic and practice and shows the transfer into existing specialist systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {demoCases.map((demo) => (
              <div key={demo.title} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-6">
                <h3 className="text-xl font-semibold text-foreground">{demo.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{demo.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102F33] py-16 text-white sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7F1EE]">Use cases</p>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] sm:text-[52px]">
              For teams that need to hand over information safely.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Quinn focuses on documentation-adjacent workflows in healthcare and care organisations: where conversations, responsibility and traceability meet.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold">
                <Check className="h-5 w-5 text-[#FFF2B8]" />
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Security & control</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Trust comes from visible control.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Quinn does not make broad legal or certification promises on the landing page. It shows the product controls that matter: login, organisation context, roles, review, approval, export and clear human responsibility. Quinn does not provide medical diagnoses.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                    <Icon className="h-5 w-5 text-[#1E6B72]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pilot-program" className="quinn-container py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-[#E8E8EC] bg-[#F6F0E3] p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#0A0A0F]">
                <Stethoscope className="h-4 w-4" />
                Test it in a real workflow
              </div>
              <h2 className="mt-6 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-[#0A0A0F] sm:text-[56px]">
                See how Quinn can reduce documentation load for your team.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4A4A4F]">
                Pilot programme for care facilities, clinics and medical teams: Request a demo, walk through a realistic documentation case and jointly evaluate where Quinn helps in daily work.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="rounded-xl bg-[#0A0A0F] px-7 hover:bg-[#1E6B72]">
                <Link href="/en/book-demo">Request a demo</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#0A0A0F]/15 bg-white/70 px-7">
                <Link href="/en/book-demo">Book a 15-minute call</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
