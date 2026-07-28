import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { ArrowRight, Building2, Home, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/customers"),
  title: "Use cases | Quinn",
  description: "Use cases for Quinn in care homes, operator organisations, home care and healthcare settings."
};

const useCases = [
  ["Care homes", "Prepare conversations, SIS-related intake, progress notes and consultation documentation as reviewable drafts.", Home],
  ["Operators and quality management", "Design consistent workflows, roles, review and traceable handoffs across facilities.", ShieldCheck],
  ["Home care", "Structure information from conversations and visits before transferring it into the leading system.", Building2],
  ["Healthcare settings", "Prepare documentation-adjacent conversations and findings in a structured way; professional review and approval remain mandatory.", Stethoscope]
] as const;

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader locale="en" />
      <section className="border-b border-border bg-quinn-warm py-16 sm:py-24">
        <div className="quinn-container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Use cases · Product and pilot phase</p>
          <h1 className="mt-5 max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[68px]">
            For organisations that want to keep existing specialist systems and simplify the work before them.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">
            This page deliberately shows use cases instead of logos or unverified references. A concrete deployment starts with one clearly scoped workflow and fictional test data.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-5 md:grid-cols-2">
          {useCases.map(([title, text, Icon]) => (
            <article key={title} className="rounded-[1.75rem] border border-[#E8E8EC] bg-white p-7 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F1EE]">
                <Icon className="h-5 w-5 text-[#1E6B72]" />
              </div>
              <h2 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">{text}</p>
            </article>
          ))}
        </div>
        <div className="quinn-container mt-12">
          <div className="flex flex-col gap-6 border-t border-[#E8E8EC] pt-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Does your workflow fit?</h2>
              <p className="mt-2 text-sm leading-7 text-secondary-foreground">In 15 minutes, we clarify the current system, responsibility and a useful first test case.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/en/book-demo">Discuss your use case <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
