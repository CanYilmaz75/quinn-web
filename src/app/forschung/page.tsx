import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { buildSeoAlternates, buildSoftwareApplicationJsonLd, pilotMetricsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Forschung & Pilotmetriken | Quinn",
  description:
    "Quinn Forschung: Evaluationsdesign, Pilotmetriken und Seed-ready Evidenz für review-first KI-Dokumentation in der Pflege.",
  alternates: buildSeoAlternates("/forschung")
};

const principles = [
  "Review-first: KI-Ergebnisse bleiben Entwürfe und müssen fachlich geprüft werden.",
  "Quinn ergänzt bestehende Fachsysteme, statt sie zu ersetzen.",
  "Datenschutz, Nachvollziehbarkeit und menschliche Verantwortung stehen vor Automatisierung.",
  "Keine behaupteten Ergebnisse: Zeitersparnis, Qualität und Akzeptanz werden im Pilot gemessen."
];

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Zeit vom Gespräch, Audio oder Notiz bis zum prüfbaren Entwurf." },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie viel muss korrigiert, ergänzt oder verworfen werden, bevor ein Entwurf passt?" },
  { label: pilotMetricsByLocale.de.completeness, description: "Wie zuverlässig werden offene Angaben, Risiken, Wünsche und Lücken sichtbar?" },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "Wie verändert sich der Review-Aufwand für PDL, QM oder Fachkraft?" },
  { label: pilotMetricsByLocale.de.teamAcceptance, description: "Nutzen Teams Quinn wiederholt und empfinden sie den Ablauf als Entlastung?" }
];

const thresholds = [
  "Demand: qualifizierte Gespräche mit Pflegeeinrichtungen, PDL/QM oder Trägern.",
  "Usage: wiederholte Nutzung in einem abgegrenzten Aufnahme-, SIS- oder Review-Workflow.",
  "Quality: Entwürfe brauchen überwiegend leichte statt vollständige Nacharbeit.",
  "ROI-Signal: messbare Reduktion von Minuten pro Fall oder Review-Aufwand, ohne pauschale Zusage.",
  "Seed-ready Evidenz: bezahlte Piloten, klare Buyer-Learnings, Datenpfad und wiederholbare Pilotstruktur."
];

export default function ResearchPage() {
  const softwareJsonLd = buildSoftwareApplicationJsonLd("de");

  return (
    <main className="min-h-screen bg-white text-foreground">
      <script type="application/ld+json" data-label="JSON-LD" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Forschung</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Evaluationsdesign für review-first KI-Dokumentation in der Pflege.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn Forschung heißt: klare Grenzen, Pilotmetriken und nachvollziehbare Evidenz. Wir behaupten keine fertigen Ergebnisse, sondern messen, ob Quinn Nachfrage, Nutzung, Entwurfsqualität und Entlastung im Pflegealltag erzeugt.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-7">
            <Link href="/demo-buchen">
              Evaluationsdesign besprechen
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-7">
            <Link href="/pilotprogramm">Pilotprogramm ansehen</Link>
          </Button>
        </div>
      </section>

      <section className="bg-[#FBFAF6] py-16">
        <div className="quinn-container grid gap-4 sm:grid-cols-2">
          {principles.map((item) => (
            <article key={item} className="rounded-2xl border border-[#E8E8EC] bg-white p-6 text-sm font-medium leading-7 text-foreground shadow-subtle">
              <ShieldCheck className="mb-4 h-5 w-5 text-[#1E6B72]" />
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Was wir messen</p>
          <h2 className="mt-5 quinn-h2">Pilotmetriken statt Hype-Zahlen.</h2>
          <p className="mt-5 text-base leading-7 text-secondary-foreground">
            Diese Metriken zeigen, ob Quinn mehr ist als eine gute Demo: Zeit pro Fall, Editierquote, Vollständigkeit, PDL/QM-Review-Aufwand und Akzeptanz im Team müssen zusammenpassen.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map((metric) => (
            <article key={metric.label} className="rounded-3xl border border-[#E8E8EC] bg-white p-5 shadow-subtle">
              <BarChart3 className="h-5 w-5 text-[#1E6B72]" />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{metric.label}</h3>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">{metric.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#102F33] py-16 text-white sm:py-24">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7F1EE]">Seed-ready Evidenz</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">Was vor einer Seed-Runde wirklich belastbar sein muss.</h2>
            <p className="mt-5 text-base leading-7 text-white/75">
              Die Messlogik trennt Hypothese von Beleg: Quinn soll nicht lauter klingen, sondern schneller zu überprüfbaren Pilotdaten kommen.
            </p>
          </div>
          <div className="space-y-3">
            {thresholds.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#E7F1EE]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
