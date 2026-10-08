import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { legalDetails } from "@/lib/legal-details";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/ueber-uns"),
  title: "Über Quinn und Gründer Can Yilmaz",
  description: "Wer Quinn entwickelt, in welcher Phase das Produkt ist und welche Prinzipien die Dokumentationsassistenz für Pflege und Medizin leiten."
};

const principles = [
  ["Assistenz statt Autopilot", "Quinn erstellt prüfbare Entwürfe. Fachliche Verantwortung, Freigabe und Übergabe bleiben bei den zuständigen Menschen."],
  ["Ergänzen statt ersetzen", "Bestehende Pflege-, Praxis- und Kliniksysteme bleiben führend. Quinn vereinfacht die Arbeit davor und darum herum."],
  ["Vertrauen durch konkrete Kontrollen", "Rollen, fachliche Prüfung, Freigabe, Export und Datenschutzprüfung werden im jeweiligen Einsatz sichtbar und nachvollziehbar gemacht."]
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="border-b border-border bg-quinn-warm py-16 sm:py-24">
        <div className="quinn-container max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Founder-led · Produkt- und Pilotphase</p>
          <h1 className="mt-5 max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-[68px]">
            Quinn wird direkt von Can Yilmaz entwickelt.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">
            Quinn entsteht als Dokumentationsassistenz mit fachlicher Prüfung für Pflege und Medizin. Produktgespräche, Demo-Anfragen und Pilot-Scoping laufen derzeit direkt über den Gründer.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-[#E7F1EE] p-7 sm:p-9">
            <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-white text-2xl font-semibold tracking-[-0.04em] text-[#1E6B72]">CY</div>
            <h2 className="mt-7 text-3xl font-semibold tracking-[-0.03em] text-foreground">Can Yilmaz</h2>
            <p className="mt-2 text-sm font-semibold text-[#1E6B72]">Gründer · Quinn Health</p>
            <p className="mt-5 text-sm leading-7 text-secondary-foreground">
              Verantwortlich für Produkt, Technologie und die konkrete Einführung von Quinn in dokumentationsnahen Workflows.
            </p>
            <a href={`mailto:${legalDetails.email}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline decoration-[#A9C7C3] underline-offset-4">
              <Mail className="h-4 w-4" />
              {legalDetails.email}
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Woran wir Quinn messen</p>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[48px]">
              Weniger Reibung in der Dokumentation, ohne Verantwortung zu verstecken.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Das Ziel ist kein autonomes System und keine neue Bewohner- oder Patientenakte. Quinn soll Informationen ruhig aufnehmen, strukturiert vorbereiten, offene Punkte sichtbar machen und die fachliche Prüfung erleichtern.
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
                <Link href="/demo-buchen">Demo direkt anfragen <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/produkt/uebersicht">Produktfluss ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
