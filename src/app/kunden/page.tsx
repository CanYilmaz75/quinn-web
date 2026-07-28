import type { Metadata } from "next";
import { ArrowRight, Building2, Home, ShieldCheck, Stethoscope } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Einsatzbereiche | Quinn",
  description: "Einsatzbereiche für Quinn in Pflegeheimen, Trägerorganisationen, ambulanter Pflege und medizinischen Einrichtungen."
};

const useCases = [
  ["Pflegeheime", "Gespräche, SIS-nahe Aufnahme, Verlaufs- und Beratungsdokumentation als prüfbare Entwürfe vorbereiten.", Home],
  ["Träger und QM", "Einheitliche Workflows, Rollen, Review und nachvollziehbare Übergaben über Einrichtungen hinweg gestalten.", ShieldCheck],
  ["Ambulante Pflege", "Informationen aus Gesprächen und Besuchen kompakt strukturieren, bevor sie ins führende System übertragen werden.", Building2],
  ["Medizinische Einrichtungen", "Dokumentationsnahe Gespräche und Befunde strukturiert vorbereiten; fachliche Prüfung und Freigabe bleiben verpflichtend.", Stethoscope]
] as const;

export default function UseCasesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-border bg-quinn-warm py-16 sm:py-24">
        <div className="quinn-container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Einsatzbereiche · Produkt- und Pilotphase</p>
          <h1 className="mt-5 max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[68px]">
            Für Organisationen, die bestehende Fachsysteme behalten und die Arbeit davor vereinfachen wollen.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">
            Diese Seite zeigt bewusst Einsatzbereiche statt Logos oder unbelegter Referenzen. Ein konkreter Einsatz beginnt mit einem klar abgegrenzten Workflow und fiktiven Testdaten.
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
              <h2 className="text-2xl font-semibold text-foreground">Passt Ihr Workflow dazu?</h2>
              <p className="mt-2 text-sm leading-7 text-secondary-foreground">In 15 Minuten klären wir Ausgangssystem, Verantwortlichkeit und einen sinnvollen ersten Testfall.</p>
            </div>
            <Button asChild size="lg">
              <Link href="/demo-buchen">Einsatzbereich besprechen <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
