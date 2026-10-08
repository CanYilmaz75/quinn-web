import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { buildSeoAlternates, buildSoftwareApplicationJsonLd, pilotMetricsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Pilotauswertung für Pflege und Medizin | Quinn",
  description:
    "So bewerten Teams aus Pflege und Medizin Quinn im Pilot: Zeit pro Fall, Bearbeitungsaufwand, Vollständigkeit, Prüfaufwand und Akzeptanz im Team.",
  alternates: buildSeoAlternates("/forschung")
};

const principles = [
  "KI-Ergebnisse bleiben Entwürfe und werden vor der Verwendung fachlich geprüft.",
  "Quinn ergänzt bestehende Fachsysteme, statt sie zu ersetzen.",
  "Datenschutzpfad, Rollen und Verantwortlichkeiten werden vor dem Einsatz geklärt.",
  "Das Team erhält eine nachvollziehbare Auswertung statt pauschaler Nutzenversprechen."
];

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Zeit vom Gespräch, Audio oder der Notiz bis zum prüfbaren Entwurf." },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie viel muss ergänzt oder korrigiert werden, bevor der Entwurf fachlich passt?" },
  { label: pilotMetricsByLocale.de.completeness, description: "Wie zuverlässig werden offene Angaben, Risiken, Wünsche und Lücken sichtbar?" },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "Wie verändert sich der Aufwand für Prüfung und Rückfragen durch Pflegefachkräfte, PDL/QM oder ärztliche Teams?" },
  { label: pilotMetricsByLocale.de.teamAcceptance, description: "Ist der Ablauf verständlich und wird Quinn vom Team wiederholt genutzt?" }
];

const decisionCriteria = [
  "Alltagstauglichkeit: Das Team kann Quinn in einem klaren Arbeitsablauf zuverlässig nutzen.",
  "Weniger Nacharbeit: Entwürfe brauchen überwiegend gezielte Ergänzungen statt vollständiger Neuerstellung.",
  "Dokumentationsqualität: Offene Angaben und mögliche Lücken werden vor der Freigabe sichtbar.",
  "Prüfaufwand: Pflegefachkräfte, PDL/QM und ärztliche Teams können Änderungen und offene Punkte nachvollziehen.",
  "Einführbarkeit: Rollen, Datenpfad, Schulung und Übergabe ins bestehende Fachsystem sind für das Team geklärt."
];

export default function ResearchPage() {
  const softwareJsonLd = buildSoftwareApplicationJsonLd("de");

  return (
    <main className="min-h-screen bg-white text-foreground">
      <script type="application/ld+json" data-label="JSON-LD" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Auswertung</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Woran Sie nach dem Pilot erkennen, ob Quinn zu Ihrem Team passt.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Für Pflege und Medizin zählt der eigene Dokumentationsalltag. Pflegeentwürfe prüft die verantwortliche Fachkraft; medizinische Dokumente benötigen die Freigabe einer verifizierten ärztlichen Person. Gemeinsam betrachten wir, ob Entwürfe verständlich sind, weniger Nacharbeit benötigen und sich in bestehende Prüf- und Übergabewege einfügen.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-7">
            <Link href="/demo-buchen">
              Auswertung besprechen
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
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Was Ihr Team auswertet</p>
          <h2 className="mt-5 quinn-h2">Konkrete Kriterien für eine belastbare Entscheidung.</h2>
          <p className="mt-5 text-base leading-7 text-secondary-foreground">
            Die Auswertung verbindet Zeit, Qualität und Teamaufwand. Dadurch erkennen Sie nicht nur, ob Quinn schneller arbeitet, sondern ob die Dokumentation im Alltag verständlicher und besser prüfbar wird.
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7F1EE]">Für Ihre Entscheidung</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">Was am Ende eines Piloten klar sein sollte.</h2>
            <p className="mt-5 text-base leading-7 text-white/75">
              Sie erhalten eine nachvollziehbare Grundlage für die Entscheidung, ob und in welchem Umfang Quinn zu Ihrem Team, Ihren Rollen und Ihrem Fachsystem passt.
            </p>
          </div>
          <div className="space-y-3">
            {decisionCriteria.map((item) => (
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
