import type { Metadata } from "next";
import { Building2, Clock3, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { EnglishDemoBookingTool } from "./demo-booking-tool";

export const metadata: Metadata = {
  title: "Book a demo | Quinn",
  description: "Request a 15-minute Quinn demo directly with the founder and review one concrete documentation workflow."
};

const valuePoints = [
  {
    title: "Built for everyday care and healthcare work",
    description:
      "Quinn supports teams in turning conversations, context and documentation requirements into reviewable drafts.",
    icon: Building2
  },
  {
    title: "A flow that fits existing systems",
    description:
      "The path remains traceable: capture, structure, review, approve and transfer into the existing specialist system.",
    icon: Sparkles
  },
  {
    title: "A concrete test instead of a generic AI show",
    description:
      "The demo uses a fictional case and shows draft, open point, professional review and handoff.",
    icon: Clock3
  }
];

export default function DemoBuchenPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="pt-6 lg:pt-24">
            <h1 className="max-w-lg font-serif text-[30px] font-semibold leading-[1.1] text-foreground sm:text-[36px] lg:text-[40px]">
              Review Quinn against one concrete documentation workflow.
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

          <EnglishDemoBookingTool />
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
