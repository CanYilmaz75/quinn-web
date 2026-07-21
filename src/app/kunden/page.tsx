import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Kunden | Quinn",
  description: "Für welche Teams Quinn gebaut wird: Pflege, Medizin und psychologische Praxen mit bestehenden Fachsystemen."
};

const customers = [
  ["Pflege", "Pflegeheime und ambulante Teams, die schneller von Stichpunkten zu prüfbarer Dokumentation kommen möchten."],
  ["Medizin", "Kleine medizinische Teams, die Notizen strukturiert vorbereiten und in bestehende Systeme übernehmen."],
  ["Psychologen", "Praxen, die Sitzungsnotizen ruhig nachbereiten und fachlich freigeben möchten."]
];

export default function CustomersPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Kunden</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Gebaut für Teams, die Verantwortung dokumentieren — nicht für laute KI-Spielereien.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn passt zu Organisationen, die ihre bestehenden Fachsysteme behalten und die Formulierungsarbeit davor vereinfachen wollen.
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
      <section className="quinn-container py-16 text-center"><Button asChild size="lg"><Link href="/preise">Passendes Paket ansehen</Link></Button></section>
      <SiteFooter />
    </main>
  );
}
