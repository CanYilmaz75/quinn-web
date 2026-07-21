import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About us | Quinn",
  description: "Why Quinn is being built: calm AI documentation with human responsibility."
};

const principles = [
  "Existing specialist systems remain leading.",
  "AI creates drafts, people approve.",
  "No medical diagnosis, no automatic professional decision.",
  "Clinical calm with human warmth: quiet, clear, responsible."
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">About us</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Quinn is being built for teams that take documentation seriously.
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-2xl font-semibold leading-snug text-foreground">
            Care professionals, medical teams and psychological practices need less follow-up work — not less responsibility.
          </p>
          <div className="space-y-5 text-base leading-8 text-secondary-foreground">
            <p>
              Quinn is a documentation layer: raw information becomes reviewable drafts, existing systems remain leading.
            </p>
            <p>
              Our brand follows the brand guideline: calm, precise, privacy-conscious and human enough for sensitive care situations.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container grid gap-4 sm:grid-cols-2">
          {principles.map((principle) => (
            <div key={principle} className="rounded-2xl border border-border bg-white p-5 text-base font-medium text-foreground">{principle}</div>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16 text-center"><Button asChild size="lg"><Link href="/en/product/overview">View product</Link></Button></section>
      <SiteFooter locale="en" />
    </main>
  );
}
