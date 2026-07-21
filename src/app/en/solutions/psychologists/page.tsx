import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn for psychologists",
  description: "Quinn supports psychological practices with calm, reviewable documentation drafts and human approval."
};

const useCases = ["Condense session notes", "Write progress notes factually", "Separate next steps and open points"];

export default function PsychologistsPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Built for · Psychologists</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          More calm in the follow-up work around psychological documentation.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn does not create diagnoses and does not replace therapeutic judgment. It helps turn notes into clear, reviewable drafts that you professionally approve before any transfer.
        </p>
      </section>
      <section className="bg-[#F4F4F6] py-16">
        <div className="quinn-container grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Why Quinn helps: less formulation pressure, clear responsibility and a calm review before filing.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16">
        <div className="rounded-[2rem] bg-[#102F33] p-10 text-white">
          <h2 className="text-3xl font-semibold">Introduce Quinn with the right frame.</h2>
          <p className="mt-4 max-w-2xl text-[#E8E8EC]">For sensitive documentation workflows, we first clarify setup, roles and approval paths in a short consultation.</p>
          <Button asChild className="mt-8 bg-white text-[#0A0A0F] hover:bg-[#F4F4F6]"><Link href="/en/book-demo">Request consultation</Link></Button>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
