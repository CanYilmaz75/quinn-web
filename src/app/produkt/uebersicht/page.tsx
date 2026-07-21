import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Produktübersicht | Quinn",
  description: "Quinn Produktübersicht: Quinn führt von Stichpunkten, Gespräch oder Audio zu prüfbaren Dokumentationsentwürfen für Pflegeeinrichtungen."
};

const workflow = [
  "Stichpunkte, Gespräch oder Audio erfassen",
  "Quinn erzeugt prüfbare Dokumentationsentwürfe",
  "Qualitätscheck durchführen",
  "Review und Freigabe durch das Team",
  "Text ins Fachsystem übernehmen"
];

const capabilities = [
  {
    title: "Stichpunkte in professionelle Doku",
    text: "Kurze Notizen werden zu sachlichen Texten, die Pflegekräfte prüfen und übernehmen können."
  },
  {
    title: "SIS vorbereiten",
    text: "Ressourcen, Risiken, Wünsche und Maßnahmen strukturiert vorbereiten — ohne die Bewohnerakte zu ersetzen."
  },
  {
    title: "Übergabe und Tagesbericht",
    text: "Wiederkehrende Pflegeinformationen ruhig zusammenfassen und teamfähig formulieren."
  },
  {
    title: "Qualitätscheck",
    text: "Quinn weist auf unklare, wertende oder fehlende Angaben hin; die fachliche Entscheidung bleibt beim Team."
  }
];

export default function ProductOverviewPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="quinn-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Produktübersicht</p>
          <h1 className="mt-6 text-[40px] font-bold leading-tight sm:text-[56px]">
            Entwickelt für den Pflegealltag.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-foreground">
            Quinn begleitet den Weg von Rohinformation zu prüfbarer Dokumentation: Stichpunkte, Gespräch oder Audio
            werden zu prüfbaren Dokumentationsentwürfen, die Ihr Team kontrolliert, freigibt und ins Fachsystem übernehmen kann.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/demo-buchen">
                Demo buchen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/preise">Preise ansehen</Link>
            </Button>
          </div>
        </div>

        <div className="rounded-[2rem] border border-border bg-[#F4F4F6] p-4">
          <div className="rounded-[1.5rem] bg-white p-6 shadow-subtle">
            <p className="text-xs font-semibold uppercase text-muted-foreground">Quinn Workflow</p>
            <div className="mt-6 space-y-4">
              {workflow.map((step, index) => (
                <div key={step} className="flex items-start gap-4 rounded-xl border border-border bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E7F1EE] text-sm font-semibold text-[#1E6B72]">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium leading-6 text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Funktionen</p>
            <h2 className="mt-5 quinn-h2">Ein ruhiger Ablauf statt einzelner KI-Spielereien.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-white p-6">
                <CheckCircle2 className="h-5 w-5 text-[#1E6B72]" />
                <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="rounded-[2rem] bg-[#102F33] p-8 text-white sm:p-12">
          <p className="text-xs font-semibold uppercase text-[#E7F1EE]">Verantwortung</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
            Quinn trifft keine automatische fachliche Entscheidung.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[#E8E8EC]">
            Quinn ist eine Dokumentationshilfe. Entwürfe bleiben prüfpflichtig, die fachliche Freigabe bleibt bei der Pflegefachkraft
            oder Einrichtung, und bestehende SIS-/Bewohnerakten- und Fachsysteme bleiben führend.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
