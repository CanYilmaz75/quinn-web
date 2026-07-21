import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildSeoAlternates } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Updates | Quinn",
  description: "Quinn product updates: Sprint 3, Pricing, Research, Schema, Hreflang and Sitemap for the public website.",
  alternates: buildSeoAlternates("/en/updates")
};

const updateBlocks = [
  {
    label: "Sprint 3 · Pricing",
    title: "Pricing sharpened around pilot, facility and operator logic",
    text:
      "The pricing page now explains Pilot facility, Facility / site and Operators & groups. Instead of a public standard tariff, Quinn routes through a pricing conversation, pilot budget and measurable pilot metrics."
  },
  {
    label: "Sprint 3 · Research",
    title: "Research shows pilot metrics and seed-ready evidence",
    text:
      "The research page makes visible what Quinn needs to measure in pilots: minutes per case, edit rate, completeness, review effort and team acceptance — without claimed results."
  },
  {
    label: "Sprint 3 · SEO Technicals",
    title: "Schema, Hreflang, Sitemap and Robots added",
    text:
      "The public core pages now have stronger technical SEO signals: canonical alternates, Hreflang pairs, JSON-LD for FAQ/software context, Sitemap and Robots reference."
  },
  {
    label: "Sprint 2 · Wedge pages",
    title: "SIS, voice documentation and pilot program deepened",
    text:
      "The most important SEO and conversion pages now explain Quinn more concretely: intake conversation, reviewable draft, gap cues, professional approval and transfer into the existing system."
  },
  {
    label: "Sprint 1 · Public site",
    title: "Navigation, brand and page structure sharpened",
    text:
      "Header, footer and public pages are more clearly focused on Quinn as the visible brand. Product, solutions, resources, company and demo CTA are separated more clearly."
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Updates</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Product development, calm and traceable.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          We collect important changes to Quinn here: no hype posts, just relevant improvements for the website, pilot readiness, research and launch preparation.
        </p>
      </section>
      <section className="border-y border-[#E8E8EC] bg-[#FBFAF6] py-16">
        <div className="quinn-container">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-6 shadow-subtle sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Current update block</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Sprint 3 makes Quinn stronger pre-send: pricing, research and technical SEO basis.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-secondary-foreground">
              The current block sharpens the fundraising and pilot case: clear pricing logic, a traceable evidence story and better discoverability for core pages.
            </p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {updateBlocks.map((update) => (
              <article key={update.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E6B72]">{update.label}</p>
                <h3 className="mt-3 text-xl font-semibold">{update.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{update.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale="en" />
    </main>
  );
}
