import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Über Uns | Quinn",
  description: "Warum Quinn entsteht: ruhige KI-Dokumentation mit menschlicher Verantwortung."
};

const principles = [
  "Bestehende Fachsysteme bleiben führend.",
  "KI erstellt Entwürfe, Menschen geben frei.",
  "Keine medizinische Diagnose, keine automatische fachliche Entscheidung.",
  "Klinische Stille mit menschlicher Wärme: ruhig, klar, verantwortungsvoll."
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Über Uns</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Quinn entsteht für Teams, die Dokumentation ernst nehmen.
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-2xl font-semibold leading-snug text-foreground">
            Pflegekräfte, medizinische Teams und psychologische Praxen brauchen weniger Nacharbeit — nicht weniger Verantwortung.
          </p>
          <div className="space-y-5 text-base leading-8 text-secondary-foreground">
            <p>
              Quinn ist eine Dokumentationsschicht: Rohinformationen werden zu prüfbaren Entwürfen, bestehende Systeme bleiben führend.
            </p>
            <p>
              Unsere Marke folgt der Brand Guideline: ruhig, präzise, datenschutzbewusst und menschlich genug für sensible Versorgungssituationen.
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
      <section className="quinn-container py-16 text-center"><Button asChild size="lg"><Link href="/produkt/uebersicht">Produkt ansehen</Link></Button></section>
      <SiteFooter />
    </main>
  );
}
