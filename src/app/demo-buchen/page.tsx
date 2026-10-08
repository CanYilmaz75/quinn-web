import type { Metadata } from "next";
import { parseDemoSegment } from "@/app/demo-buchen/demo-segment";

import { buildSeoAlternates } from "@/content/public-site";
import { Building2, Clock3, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDemoIntentContent, parseDemoIntent } from "@/lib/demo-intent";
import { DemoBookingTool } from "./demo-booking-tool";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/demo-buchen"),
  title: "Demo buchen | Quinn",
  description: "Eine 15-minütige Quinn-Demo direkt beim Gründer anfragen und einen konkreten Dokumentationsworkflow prüfen."
};

const valuePoints = [
  {
    title: "Für den Alltag in Pflege und Medizin",
    description: "Quinn unterstützt Teams dabei, Gespräche, Kontext und Dokumentationsanforderungen in prüfbare Entwürfe zu überführen.",
    icon: Building2
  },
  {
    title: "Ein Ablauf, der sich in bestehende Prozesse einfügt",
    description: "Der Weg bleibt nachvollziehbar: aufnehmen, strukturieren, prüfen, freigeben und in das bestehende Fachsystem übertragen.",
    icon: Sparkles
  },
  {
    title: "Konkreter Test statt allgemeiner KI-Show",
    description: "Die Demo nutzt einen fiktiven Fall und zeigt Entwurf, offenen Punkt, fachliche Prüfung und Übergabe.",
    icon: Clock3
  }
];

type DemoPageProps = { searchParams: Promise<{ intent?: string | string[]; segment?: string | string[] }> };

export default async function DemoBuchenPage({ searchParams }: DemoPageProps) {
  const params = await searchParams;
  const intent = parseDemoIntent(params.intent);
  const segment = params.segment === undefined && intent === "sis" ? "care" : parseDemoSegment(params.segment);
  const intentContent = getDemoIntentContent("de", intent);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-foreground">
      <SiteHeader demoContext={{ intent, segment: segment || "general" }} />

      <section className="mx-auto min-w-0 w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-10">
          <div className="contents lg:block lg:min-w-0 lg:pt-24">
            <h1 className="order-1 min-w-0 max-w-lg break-words font-serif text-[30px] font-semibold leading-[1.1] text-foreground sm:text-[36px] lg:text-[40px]">
              Prüfen Sie Quinn an einem konkreten Dokumentationsablauf.
            </h1>

            <div className="order-3 mt-2 min-w-0 space-y-7 lg:mt-10">
              {valuePoints.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[auto_1fr]">
                    <Icon className="mt-1 h-4 w-4 text-foreground" />
                    <div className="min-w-0">
                      <h2 className="break-words text-base font-bold leading-tight text-foreground">{item.title}</h2>
                      <p className="mt-2 max-w-md text-sm leading-6 text-secondary-foreground">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="demo-formular" className="order-2 min-w-0 lg:order-none">
            <DemoBookingTool key={`${intent ?? "generic"}-${segment}`} initialSegment={segment} initialInterest={intentContent?.interest} heading={intentContent?.heading} />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
