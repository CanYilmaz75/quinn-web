import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Product overview | Quinn",
  description: "Quinn product overview: Quinn guides teams from notes, conversation or audio to reviewable documentation drafts for care organisations."
};

const workflow = [
  "Capture notes, conversation or audio",
  "Quinn creates reviewable documentation drafts",
  "Run a quality check",
  "Review and approval by the team",
  "Transfer text into the specialist system"
];

const capabilities = [
  {
    title: "Notes into professional documentation",
    text: "Short notes become factual texts that care teams can review and transfer."
  },
  {
    title: "Prepare SIS",
    text: "Prepare resources, risks, wishes and measures in a structured way — without replacing the resident record."
  },
  {
    title: "Handover and daily report",
    text: "Summarise recurring care information calmly and in a team-ready form."
  },
  {
    title: "Quality check",
    text: "Quinn points out unclear, judgmental or missing information; professional decisions stay with the team."
  }
];

export default function ProductOverviewPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="quinn-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Product overview</p>
          <h1 className="mt-6 text-[40px] font-bold leading-tight sm:text-[56px]">
            Built for everyday care work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-foreground">
            Quinn supports the path from raw information to reviewable documentation: notes, conversation or audio become reviewable documentation drafts that your team can check, approve and transfer into the specialist system.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/en/book-demo">
                Book a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/en/pricing">View pricing</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-[#F4F4F6] p-4">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-subtle">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Quinn workflow</p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7F1EE] text-sm font-semibold text-[#1E6B72]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Capabilities</p>
            <h2 className="mt-5 quinn-h2">One calm workflow instead of isolated AI tricks.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#1E6B72]" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="rounded-[2rem] bg-[#102F33] p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase text-[#E7F1EE]">Responsibility</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Quinn does not make automatic professional decisions.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#E8E8EC]">
            Quinn is a documentation aid. Drafts remain subject to review, professional approval stays with the care professional or organisation, and existing SIS, resident record and specialist systems remain leading.
          </p>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
