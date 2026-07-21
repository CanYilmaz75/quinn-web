import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";
import { buildFaqJsonLd, buildSeoAlternates, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Pricing for AI care documentation | Quinn",
  description:
    "Consultation-led Quinn pricing for Pilot facility, Facility / site and Operators & groups — without public user pricing.",
  alternates: buildSeoAlternates("/en/pricing")
};

const plans = [
  {
    name: "Pilot facility",
    price: "pilot budget by scope",
    subtitle: "4-6 weeks for one bounded intake, SIS-style or review workflow",
    audience:
      "For one facility that wants to test Quinn with fictional, anonymised or tightly scoped cases before real data and rollout are decided.",
    cta: "Request pilot pricing conversation",
    href: "/en/book-demo" as Route,
    featured: true,
    features: [
      "Scope for one workflow: intake, SIS-style or review",
      "Pilot metrics: minutes per case, edit rate, completeness, review effort",
      "Evaluation after 4-6 weeks with team feedback and team acceptance",
      "no hard ROI promise — relief is measured in the pilot",
      "processing path, roles and approval clarified before real data"
    ]
  },
  {
    name: "Facility / site",
    price: "monthly site scope",
    subtitle: "for recurring usage in one facility",
    audience:
      "For care homes or sites that want to use Quinn continuously after a pilot for intake and documentation-adjacent workflows.",
    cta: "Request site offer",
    href: "/en/book-demo" as Route,
    featured: false,
    features: [
      "usage based on active team, roles and documentation volume",
      "setup of review rules, standards and professional approval",
      "support for care leadership and quality teams",
      "transfer logic into existing systems without changing systems",
      "regular review and quality evaluation"
    ]
  },
  {
    name: "Operators & groups",
    price: "custom by locations",
    subtitle: "for multiple facilities, quality management and rollout governance",
    audience:
      "For operators and care groups that want to test Quinn step by step across several facilities and roll out based on pilot metrics.",
    cta: "Clarify operator scope",
    href: "/en/book-demo" as Route,
    featured: false,
    features: [
      "location tiers by facilities, roles and support needs",
      "quality guardrails, standards and language rules per facility",
      "pilot comparison between teams or sites",
      "rollout decision based on usage, quality and review effort",
      "shared roadmap for privacy, operations and support questions"
    ]
  }
];

const included = [
  "Quinn complements existing care systems",
  "reviewable documentation drafts",
  "professional approval by your team",
  "pilot metrics instead of generic promises",
  "copy/export after review",
  "privacy materials for concrete review"
];

const faqs = [
  ...publicFaqsByLocale.en,
  {
    question: "Why is there no public user price?",
    answer:
      "The right price currently depends more on workflow, facility, review effort, support and processing path than on a simple user count. That is why pricing is consultation-led."
  },
  {
    question: "What happens after the pilot?",
    answer:
      "After 4-6 weeks, we review usage, draft quality, edit effort, completeness, review effort and team acceptance. Only then do we decide on site or operator scope together."
  }
];

export default function PricingPage() {
  const faqJsonLd = buildFaqJsonLd(faqs);

  return (
    <main className="min-h-screen bg-white text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader locale="en" />

      <section className="quinn-container py-20 text-center sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Pricing</p>
        <h1 className="mx-auto mt-6 max-w-4xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Consultation-led pricing for pilots, facilities and operators.
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn does not start with a standard tariff. A short pricing conversation aligns workflow, roles, privacy review, pilot budget and rollout with the reality of your organisation.
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Always included</p>
            <h2 className="mt-5 quinn-h2">Pricing follows measurable usage, not package tricks.</h2>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              The core stays the same: draft, review, approval, transfer. Differences come from pilot scope, site count, team roles, support and quality-management steering.
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
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">Questions before the pricing conversation.</h2>
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
        <h2 className="mx-auto max-w-3xl quinn-h2">Let’s briefly clarify the right setup.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-secondary-foreground">
          In 15 minutes, we clarify workflow, team size, pilot budget and the next step. After that, it is clear whether pilot, site or operator scope makes sense.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="px-7">
            <Link href="/en/book-demo">Request pricing conversation</Link>
          </Button>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
