import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { Building2, Clock3, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDemoIntentContent, parseDemoIntent } from "@/lib/demo-intent";
import { EnglishDemoBookingTool } from "./demo-booking-tool";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/book-demo"),
  title: "Book a demo | Quinn",
  description: "Request a 15-minute Quinn demo directly with the founder and review one concrete documentation workflow."
};

const valuePoints = [
  {
    title: "Built for everyday care and healthcare work",
    description: "Quinn supports teams in turning conversations, context and documentation requirements into reviewable drafts.",
    icon: Building2
  },
  {
    title: "A flow that fits existing systems",
    description: "The path remains traceable: capture, structure, review, approve and transfer into the existing specialist system.",
    icon: Sparkles
  },
  {
    title: "A concrete test instead of a generic AI show",
    description: "The demo uses a fictional case and shows draft, open point, professional review and handoff.",
    icon: Clock3
  }
];

type DemoPageProps = { searchParams: Promise<{ intent?: string | string[] }> };

export default async function DemoBuchenPage({ searchParams }: DemoPageProps) {
  const intent = parseDemoIntent((await searchParams).intent);
  const intentContent = getDemoIntentContent("en", intent);

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="mx-auto min-w-0 w-full max-w-6xl px-4 py-8 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-10">
          <div className="contents lg:block lg:min-w-0 lg:pt-24">
            <h1 className="order-1 min-w-0 max-w-lg break-words font-serif text-[30px] font-semibold leading-[1.1] text-foreground sm:text-[36px] lg:text-[40px]">
              Review Quinn against one concrete documentation workflow.
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

          <div id="demo-form" className="order-2 min-w-0 lg:order-none">
            <EnglishDemoBookingTool key={intent ?? "generic"} initialInterest={intentContent?.interest} heading={intentContent?.heading} />
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
