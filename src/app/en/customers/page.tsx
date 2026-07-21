import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Customers | Quinn",
  description: "The teams Quinn is built for: care, medicine and psychological practices with existing specialist systems."
};

const customers = [
  ["Care", "Care homes and outpatient teams that want to move faster from notes to reviewable documentation."],
  ["Medicine", "Small medical teams that want to structure notes and transfer them into existing systems."],
  ["Psychologists", "Practices that want to follow up session notes calmly and approve them professionally."]
];

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Customers</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Built for teams that document responsibility — not for loud AI gimmicks.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn fits organisations that want to keep their existing specialist systems and simplify the formulation work before them.
        </p>
      </section>
      <section className="bg-[#F4F4F6] py-16">
        <div className="quinn-container grid gap-6 md:grid-cols-3">
          {customers.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16 text-center"><Button asChild size="lg"><Link href="/en/pricing">View matching package</Link></Button></section>
      <SiteFooter locale="en" />
    </main>
  );
}
