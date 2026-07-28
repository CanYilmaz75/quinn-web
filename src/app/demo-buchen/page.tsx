import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { Building2, Clock3, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DemoBookingTool } from "./demo-booking-tool";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/demo-buchen"),
  title: "Demo buchen | Quinn",
  description: "Eine 15-minütige Quinn-Demo direkt beim Gründer anfragen und einen konkreten Dokumentationsworkflow prüfen."
};

const valuePoints = [
  {
    title: "Für den Alltag in Pflege und Versorgung",
    description:
      "Quinn unterstützt Teams dabei, Gespräche, Kontext und Dokumentationsanforderungen in prüfbare Entwürfe zu überführen.",
    icon: Building2
  },
  {
    title: "Ein Workflow, der sich in bestehende Abläufe einfügt",
    description:
      "Der Weg bleibt nachvollziehbar: aufnehmen, strukturieren, prüfen, freigeben und in das bestehende Fachsystem übertragen.",
    icon: Sparkles
  },
  {
    title: "Konkreter Test statt allgemeiner KI-Show",
    description:
      "Die Demo nutzt einen fiktiven Fall und zeigt Entwurf, offenen Punkt, fachliche Prüfung und Übergabe.",
    icon: Clock3
  }
];

export default function DemoBuchenPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="pt-6 lg:pt-24">
            <h1 className="max-w-lg font-serif text-[30px] font-semibold leading-[1.1] text-foreground sm:text-[36px] lg:text-[40px]">
              Prüfen Sie Quinn an einem konkreten Dokumentationsworkflow.
            </h1>

            <div className="mt-10 space-y-7">
              {valuePoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="grid gap-3 sm:grid-cols-[auto_1fr]">
                    <Icon className="mt-1 h-4 w-4 text-foreground" />
                    <div>
                      <h2 className="text-base font-bold leading-tight text-foreground">{item.title}</h2>
                      <p className="mt-2 max-w-md text-sm leading-6 text-secondary-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <DemoBookingTool />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
