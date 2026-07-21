import type { ReactNode } from "react";
import type { Route } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CheckCircle2, HelpCircle, ShieldCheck, Target } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

type SeoLandingPageProps = {
  locale?: "de" | "en";
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryHref: Route;
  points: string[];
  problemTitle?: string;
  problemDescription?: string;
  problemItems?: string[];
  workflowTitle: string;
  workflowDescription: string;
  workflow: Array<{ title: string; description: string }>;
  proofTitle: string;
  proofDescription: string;
  proofPoints: string[];
  metricsTitle?: string;
  metricsDescription?: string;
  metrics?: ReadonlyArray<{ label: string; description: string }>;
  faqTitle?: string;
  faqs?: ReadonlyArray<{ question: string; answer: string }>;
  footerTitle: string;
  footerDescription: ReactNode;
};

export function SeoLandingPage({
  locale = "de",
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  secondaryHref,
  points,
  problemTitle,
  problemDescription,
  problemItems = [],
  workflowTitle,
  workflowDescription,
  workflow,
  proofTitle,
  proofDescription,
  proofPoints,
  metricsTitle,
  metricsDescription,
  metrics = [],
  faqTitle,
  faqs = [],
  footerTitle,
  footerDescription
}: SeoLandingPageProps) {
  const demoHref = (locale === "en" ? "/en/book-demo" : "/demo-buchen") as Route;

  return (
    <main className="min-h-screen bg-quinn-warm text-foreground">
      <SiteHeader locale={locale} />
      <section className="quinn-container grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl text-[42px] font-semibold leading-[0.98] tracking-[-0.035em] text-[#0A0A0F] sm:text-[64px]">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-secondary-foreground">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-xl bg-[#0A0A0F] px-7 hover:bg-[#1E6B72]">
              <Link href={demoHref}>
                {primaryCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-xl border-[#DDE8E4] bg-white px-7">
              <Link href={secondaryHref}>{secondaryCta}</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-4 shadow-subtle">
          <div className="rounded-[1.5rem] bg-[#E7F1EE] p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Quinn</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#0A0A0F]">Review-first workflow</h2>
              </div>
              <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#1E6B72]">Human approval</span>
            </div>
            <div className="mt-6 space-y-3">
              {points.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl bg-white p-4 text-sm leading-6 text-secondary-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6B72]" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {problemTitle ? (
        <section className="bg-white py-16 sm:py-24">
          <div className="quinn-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Problem</p>
              <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">{problemTitle}</h2>
              {problemDescription ? <p className="mt-6 text-lg leading-8 text-secondary-foreground">{problemDescription}</p> : null}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {problemItems.map((item) => (
                <div key={item} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                  <Target className="h-6 w-6 text-[#1E6B72]" />
                  <p className="mt-5 text-sm font-medium leading-7 text-secondary-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={problemTitle ? "bg-quinn-warm py-16 sm:py-24" : "bg-white py-16 sm:py-24"}>
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Workflow</p>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">{workflowTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">{workflowDescription}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {workflow.map((item) => (
              <article key={item.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                <BadgeCheck className="h-6 w-6 text-[#1E6B72]" />
                <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-24">
        <div className="grid gap-10 rounded-[2rem] border border-[#DDE8E4] bg-white p-8 shadow-subtle sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <ShieldCheck className="h-8 w-8 text-[#1E6B72]" />
            <h2 className="mt-5 text-[32px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[48px]">{proofTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-secondary-foreground">{proofDescription}</p>
          </div>
          <div className="space-y-3">
            {proofPoints.map((point) => (
              <div key={point} className="rounded-2xl bg-[#F6F0E3] p-4 text-sm font-medium leading-6 text-[#0A0A0F]">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {metricsTitle ? (
        <section className="bg-white py-16 sm:py-24">
          <div className="quinn-container">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Pilotmetriken</p>
              <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">{metricsTitle}</h2>
              {metricsDescription ? <p className="mt-6 text-lg leading-8 text-secondary-foreground">{metricsDescription}</p> : null}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {metrics.map((metric) => (
                <article key={metric.label} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-6">
                  <h3 className="text-lg font-semibold text-foreground">{metric.label}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary-foreground">{metric.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {faqTitle ? (
        <section className="quinn-container py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">FAQ</p>
              <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">{faqTitle}</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <article key={faq.question} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                  <HelpCircle className="h-5 w-5 text-[#1E6B72]" />
                  <h3 className="mt-4 text-xl font-semibold text-foreground">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary-foreground">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#102F33] py-16 text-white sm:py-24">
        <div className="quinn-container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7F1EE]">Pilot-ready</p>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] sm:text-[52px]">{footerTitle}</h2>
            <p className="mt-6 text-lg leading-8 text-white/75">{footerDescription}</p>
          </div>
          <Button asChild size="lg" className="rounded-xl bg-white px-7 text-[#0A0A0F] hover:bg-[#E7F1EE]">
            <Link href={demoHref}>{primaryCta}</Link>
          </Button>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
