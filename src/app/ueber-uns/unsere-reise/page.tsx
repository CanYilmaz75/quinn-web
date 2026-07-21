import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Unsere Reise | Quinn",
  description: "Warum Quinn entsteht: ruhige KI-Dokumentation für Pflegeeinrichtungen, ohne bestehende Fachsysteme zu ersetzen."
};

const timeline = [
  {
    year: "2025",
    title: "Problem verstanden",
    text: "Pflegekräfte haben sich nicht für Dokumentationsnacharbeit entschieden. Trotzdem kostet das Formulieren, Prüfen und Übertragen täglich Konzentration."
  },
  {
    year: "2026",
    title: "Quinn wird zur Dokumentationsschicht",
    text: "Die Produktidee wird bewusst eng: nicht SIS oder Bewohnerakte ersetzen, sondern Rohinformationen in prüfbare Entwürfe überführen."
  },
  {
    year: "Jetzt",
    title: "Design-Partner gesucht",
    text: "Mit Pflegeeinrichtungen sollen reale Workflows kontrolliert getestet werden — erst mit Demo-Fällen, dann nach Datenschutzfreigabe mit freigegebenen Abläufen."
  }
];

const principles = [
  "Bestehende Fachsysteme bleiben führend.",
  "KI erstellt Entwürfe, Menschen geben frei.",
  "Keine medizinische Diagnose, keine automatische fachliche Entscheidung.",
  "Klinische Stille mit menschlicher Wärme: ruhig, klar, verantwortungsvoll."
];

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Unsere Reise</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-bold leading-tight sm:text-[58px]">
          Warum Quinn entsteht.
        </h1>
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-2xl font-semibold leading-snug text-foreground">
            Pflegekräfte haben sich nicht für Dokumentationsnacharbeit entschieden.
          </p>
          <div className="space-y-5 text-base leading-8 text-secondary-foreground">
            <p>
              Dokumentation ist notwendig. Aber zu oft passiert sie unter Zeitdruck, nach der eigentlichen Versorgung und in Systemen,
              die wichtig sind, aber nicht jede Formulierungsarbeit abnehmen.
            </p>
            <p>
              Quinn entsteht aus dieser Lücke: als ruhige KI-gestützte Dokumentationshilfe, die bestehende Systeme respektiert und
              Pflegekräften hilft, schneller zu prüfbaren Texten zu kommen.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container">
          <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Entwicklung</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="rounded-2xl border border-border bg-white p-6">
                <p className="font-mono text-sm font-semibold text-[#1E6B72]">{item.year}</p>
                <h2 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Unsere Prinzipien</p>
            <h2 className="mt-5 quinn-h2">Klinische Stille mit menschlicher Wärme.</h2>
          </div>
          <div className="space-y-4">
            {principles.map((principle) => (
              <div key={principle} className="rounded-2xl border border-border bg-white p-5 text-base font-medium text-foreground">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container pb-20 text-center">
        <div className="rounded-[2rem] bg-[#102F33] p-10 text-white">
          <h2 className="text-3xl font-semibold sm:text-5xl">Wir bauen Quinn mit Pflegeeinrichtungen, nicht an ihnen vorbei.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#E8E8EC]">
            Der nächste Schritt sind Design-Partner, die Dokumentationsfälle, Sprache und Pilotmetriken mit uns schärfen.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-[#0A0A0F] hover:bg-[#F4F4F6]">
            <Link href="/demo-buchen">Design-Partner werden</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
