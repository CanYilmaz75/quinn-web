import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { buildSeoAlternates, buildSoftwareApplicationJsonLd, pilotMetricsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Research & pilot metrics | Quinn",
  description:
    "Quinn research: evaluation design, pilot metrics and seed-ready evidence for review-first AI care documentation.",
  alternates: buildSeoAlternates("/en/research")
};

const principles = [
  "Review-first: AI outputs remain drafts and must be professionally reviewed.",
  "Quinn complements existing care systems instead of replacing them.",
  "Privacy, traceability and human responsibility come before automation.",
  "No claimed results: time savings, quality and acceptance are measured in pilots."
];

const metrics = [
  { label: pilotMetricsByLocale.en.minutesPerCase, description: "Time from conversation, audio or notes to a reviewable draft." },
  { label: pilotMetricsByLocale.en.editRate, description: "How much needs to be corrected, completed or rejected before a draft fits?" },
  { label: pilotMetricsByLocale.en.completeness, description: "How reliably do open facts, risks, wishes and gaps become visible?" },
  { label: pilotMetricsByLocale.en.reviewEffort, description: "How does review effort change for care leadership, quality teams or professionals?" },
  { label: pilotMetricsByLocale.en.teamAcceptance, description: "Do teams use Quinn repeatedly and experience the workflow as relief?" }
];

const thresholds = [
  "Demand: qualified conversations with care providers, care leadership, quality teams or operators.",
  "Usage: repeated usage in one bounded intake, SIS-style or review workflow.",
  "Quality: drafts mostly need light edits rather than complete rewriting.",
  "ROI signal: measurable reduction in minutes per case or review effort, without a generic promise.",
  "Seed-ready evidence: paid pilots, clear buyer learnings, processing path and repeatable pilot structure."
];

export default function ResearchPage() {
  const softwareJsonLd = buildSoftwareApplicationJsonLd("en");

  return (
    <main className="min-h-screen bg-white text-foreground">
      <script type="application/ld+json" data-label="JSON-LD" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Research</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Evaluation design for review-first AI care documentation.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn research means clear boundaries, pilot metrics and traceable evidence. We do not claim finished results; we measure whether Quinn creates demand, usage, draft quality and relief in care workflows.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-7">
            <Link href="/en/book-demo">
              Discuss evaluation design
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-7">
            <Link href="/en/pilot-program">View pilot program</Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#FBFAF6] py-16">
        <div className="quinn-container grid gap-4 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item} className="rounded-2xl border border-[#E8E8EC] bg-white p-6 text-sm font-medium leading-7 text-foreground shadow-subtle">
              <ShieldCheck className="mb-4 h-5 w-5 text-[#1E6B72]" />
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">What we measure</p>
          <h2 className="mt-5 quinn-h2">Pilot metrics instead of hype numbers.</h2>
          <p className="mt-5 text-base leading-7 text-secondary-foreground">
            These metrics show whether Quinn is more than a good demo: minutes per case, edit rate, completeness, review effort and team acceptance have to fit together.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-[#E8E8EC] bg-white p-5 shadow-subtle">
              <BarChart3 className="h-5 w-5 text-[#1E6B72]" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{metric.label}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">{metric.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#102F33] py-16 text-white sm:py-24">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7F1EE]">seed-ready evidence</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">What needs to be credible before a seed round.</h2>
            <p className="mt-5 text-base leading-7 text-white/75">
              The measurement logic separates hypothesis from evidence: Quinn should not sound louder, but get to verifiable pilot data faster.
            </p>
          </div>
          <div className="space-y-3">
            {thresholds.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E7F1EE]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
