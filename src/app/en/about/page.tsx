import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { legalDetails } from "@/lib/legal-details";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/about"),
  title: "About Quinn and founder Can Yilmaz",
  description: "Who builds Quinn, where the product stands and which principles guide its documentation assistance for care and medicine."
};

const principles = [
  ["Assistant, not autopilot", "Quinn creates reviewable drafts. Professional responsibility, approval and handoff remain with the people in charge."],
  ["Complement, not replace", "Existing care, practice and hospital systems remain leading. Quinn simplifies the work before and around them."],
  ["Trust through concrete controls", "Roles, review, approval, export and privacy assessment are made visible and traceable for each deployment."]
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader locale="en" />
      <section className="border-b border-border bg-quinn-warm py-16 sm:py-24">
        <div className="quinn-container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Founder-led · Product and pilot phase</p>
          <h1 className="mt-5 max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[68px]">
            Quinn is built directly by Can Yilmaz.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">
            Quinn is being developed as a review-first documentation assistant for care and medicine. Product conversations, demo requests and pilot scoping currently run directly through the founder.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-[#E7F1EE] p-7 sm:p-9">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white text-2xl font-semibold tracking-[-0.04em] text-[#1E6B72]">CY</div>
            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.03em] text-foreground">Can Yilmaz</h2>
            <p className="mt-2 text-sm font-semibold text-[#1E6B72]">Founder · Quinn Health</p>
            <p className="mt-5 text-sm leading-7 text-secondary-foreground">
              Responsible for product, technology and the practical introduction of Quinn into documentation-adjacent workflows.
            </p>
            <a href={`mailto:${legalDetails.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-[#A9C7C3] underline-offset-4">
              <Mail className="h-4 w-4" />
              {legalDetails.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">How we judge Quinn</p>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[48px]">
              Less friction in documentation, without hiding responsibility.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              The goal is not an autonomous system or a new resident or patient record. Quinn should capture information calmly, prepare it in a structured way, make open points visible and support professional review.
            </p>
            <div className="mt-9 divide-y divide-[#E8E8EC] border-y border-[#E8E8EC]">
              {principles.map(([title, text], index) => (
                <article key={title} className="grid gap-3 py-6 sm:grid-cols-[2.5rem_1fr]">
                  <span className="text-sm font-semibold text-[#1E6B72]">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-secondary-foreground">{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/en/book-demo">Request a demo directly <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/en/product/overview">View the product flow</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
