import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn for medicine",
  description: "Quinn supports medical teams with reviewable, responsible documentation drafts without replacing existing systems."
};

const useCases = ["Structure anamnesis notes", "Write progress and handover notes factually", "Make open points visible before approval"];

export default function MedicalPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Built for · Medicine</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Prepare medical documentation without automating professional decisions.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn helps medical teams turn notes, conversation content and clinical context into reviewable drafts. It does not replace your practice or hospital system; diagnoses, treatment decisions and final approvals remain explicitly with the treatment team.
        </p>
      </section>
      <section className="bg-[#F4F4F6] py-16">
        <div className="quinn-container grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Why Quinn helps: clear language, visible review points and transfer into existing practice or hospital systems.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16">
        <div className="rounded-[2rem] border border-border bg-white p-10">
          <h2 className="text-3xl font-semibold">Clarify the right setup before rollout.</h2>
          <p className="mt-4 max-w-2xl text-secondary-foreground">Teams clarify roles, privacy review and standards together before Quinn is introduced into live documentation workflows.</p>
          <Button asChild className="mt-8"><Link href="/en/pricing">View pricing</Link></Button>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
