import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { buildFaqJsonLd, buildSeoAlternates, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Preise für KI-Pflegedokumentation | Quinn",
  description:
    "Beratungsgestützte Quinn Preise für Pilot Einrichtung, Einrichtung / Standort und Träger & Verbünde — ohne öffentlichen Nutzerpreis.",
  alternates: buildSeoAlternates("/preise")
};

const plans = [
  {
    name: "Pilot Einrichtung",
    price: "Pilotbudget nach Umfang",
    subtitle: "4–6 Wochen für einen klaren Aufnahme-, SIS- oder Review-Workflow",
    audience:
      "Für eine Einrichtung, die Quinn mit fiktiven, anonymisierten oder klar abgegrenzten Fällen prüft, bevor Echtdaten und Rollout entschieden werden.",
    cta: "Pilot-Preisgespräch anfragen",
    href: "/demo-buchen" as Route,
    featured: true,
    features: [
      "Scope für einen Workflow: Aufnahme, SIS-nah oder Review",
      "Pilotmetriken: Zeit pro Fall, Editierquote, Vollständigkeit, PDL/QM-Review-Aufwand",
      "Auswertung nach 4–6 Wochen mit Teamfeedback und Akzeptanz im Team",
      "keine harte ROI-Zusage — Entlastung wird im Pilot gemessen",
      "Datenpfad, Rollen und Freigabe vor Echtdaten klären"
    ]
  },
  {
    name: "Einrichtung / Standort",
    price: "Monatlicher Standortumfang",
    subtitle: "für wiederkehrende Nutzung in einer Einrichtung",
    audience:
      "Für Pflegeheime oder Standorte, die nach einem Pilot Quinn dauerhaft für Aufnahme- und dokumentationsnahe Abläufe einsetzen wollen.",
    cta: "Standort-Angebot anfragen",
    href: "/demo-buchen" as Route,
    featured: false,
    features: [
      "Nutzung nach aktivem Team, Rollen und Dokumentationsvolumen",
      "Einrichtung von Review-Regeln, Standards und fachlicher Freigabe",
      "Support für PDL/QM und Schulung im Team",
      "Transferlogik in bestehende Fachsysteme ohne Systemwechsel",
      "regelmäßige Review- und Qualitätsauswertung"
    ]
  },
  {
    name: "Träger & Verbünde",
    price: "Individuell nach Standorten",
    subtitle: "für mehrere Einrichtungen, QM und Rollout-Governance",
    audience:
      "Für Betreiber, Träger und Verbünde, die Quinn schrittweise über mehrere Einrichtungen testen und anhand von Pilotmetriken ausrollen wollen.",
    cta: "Träger-Scope klären",
    href: "/demo-buchen" as Route,
    featured: false,
    features: [
      "Standortstaffel nach Einrichtungen, Rollen und Supportbedarf",
      "QM-Leitplanken, Standards und Sprachvorgaben je Einrichtung",
      "Pilotvergleich zwischen Teams oder Standorten",
      "Rollout-Entscheidung anhand Nutzung, Qualität und Review-Aufwand",
      "gemeinsame Roadmap für Datenschutz-, Betriebs- und Supportfragen"
    ]
  }
];

const included = [
  "Quinn ergänzt bestehende Fachsysteme",
  "prüfbare Dokumentationsentwürfe",
  "fachliche Freigabe durch Ihr Team",
  "Pilotmetriken statt pauschaler Versprechen",
  "Kopieren/Export nach Review",
  "Datenschutzunterlagen für konkrete Prüfung"
];

const faqs = [
  ...publicFaqsByLocale.de,
  {
    question: "Warum gibt es keinen öffentlichen Nutzerpreis?",
    answer:
      "Der sinnvolle Preis hängt aktuell stärker von Workflow, Einrichtung, Review-Aufwand, Support und Datenpfad ab als von einer einfachen Nutzerzahl. Deshalb starten wir beratungsgestützt."
  },
  {
    question: "Was passiert nach dem Pilot?",
    answer:
      "Nach 4–6 Wochen bewerten wir Nutzung, Entwurfsqualität, Editieraufwand, Vollständigkeit, Review-Aufwand und Teamakzeptanz. Erst danach entscheiden wir gemeinsam über Standort- oder Trägerumfang."
  }
];

export default function PricingPage() {
  const faqJsonLd = buildFaqJsonLd(faqs);

  return (
    <main className="min-h-screen bg-white text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />

      <section className="quinn-container py-20 text-center sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Preise</p>
        <h1 className="mx-auto mt-6 max-w-4xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Beratungsgestützte Preise für Pilot, Einrichtung und Träger.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn startet nicht über einen Standardtarif, sondern über ein kurzes Preisgespräch. So passen Workflow, Rollen, Datenschutzprüfung, Pilotbudget und Rollout zur Realität Ihrer Einrichtung.
        </p>
      </section>

      <section className="bg-[#FBFAF6] py-12 sm:py-16">
        <div className="quinn-container grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-[1.5rem] border bg-white p-6 shadow-subtle ${plan.featured ? "border-[#1E6B72]" : "border-[#E8E8EC]"}`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#1E6B72]">{plan.name}</p>
              <p className="mt-5 text-3xl font-semibold text-foreground">{plan.price}</p>
              <p className="mt-2 min-h-12 text-sm font-medium leading-6 text-secondary-foreground">{plan.subtitle}</p>
              <p className="mt-5 min-h-28 text-sm leading-7 text-secondary-foreground">{plan.audience}</p>
              <Button asChild className="mt-6 w-full" variant={plan.featured ? "default" : "outline"}>
                <Link href={plan.href}>
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex gap-3 text-sm leading-6 text-secondary-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#1E6B72]" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Immer enthalten</p>
            <h2 className="mt-5 quinn-h2">Preislogik folgt messbarer Nutzung, nicht Pakettricks.</h2>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Der Kern bleibt gleich: Entwurf, Prüfung, Freigabe, Übernahme. Unterschiede entstehen durch Pilotumfang, Standortzahl, Teamrollen, Support und QM-Steuerung.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-[#E8E8EC] bg-white p-5 text-sm font-medium text-foreground">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#1E6B72]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FBFAF6] py-16 sm:py-20">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">FAQ</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">Fragen vor dem Preisgespräch.</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-3xl quinn-h2">Lassen Sie uns den passenden Rahmen kurz klären.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-secondary-foreground">
          In 15 Minuten klären wir Workflow, Teamgröße, Pilotbudget und nächsten Schritt. Wenn Sie lieber allgemein starten möchten: Beratung anfragen reicht als erster Schritt.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-7">
            <Link href="/demo-buchen">Preisgespräch anfragen</Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
