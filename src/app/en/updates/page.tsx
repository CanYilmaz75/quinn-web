import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildSeoAlternates } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Updates | Quinn",
  description: "Quinn product updates: practical improvements for documentation, pilot delivery, professional review and handoff to existing systems.",
  alternates: buildSeoAlternates("/en/updates")
};

const updateBlocks = [
  {
    label: "Pilot program",
    title: "A clearer view of process, roles and value",
    text:
      "Care organisations can now see how a 4–6 week pilot works, which teams are involved and which results they receive for their own decision."
  },
  {
    label: "Evaluation",
    title: "Measurable relief instead of generic promises",
    text:
      "Quinn reviews time per case, editing effort, completeness and review workload with the organisation. This shows where less rework is achieved and where the workflow still needs adjustment."
  },
  {
    label: "Public information",
    title: "Faster access to relevant information",
    text:
      "Product, use cases, pilot program, pricing and demo are organised more clearly. Care organisations can find value, boundaries and next steps without technical or internal project language."
  },
  {
    label: "Documentation workflow",
    title: "From capture to professional approval",
    text:
      "The pages explain the Quinn workflow more concretely: capture a conversation or note, receive a reviewable draft, clarify open points and transfer the approved text to the existing system."
  },
  {
    label: "Language & orientation",
    title: "Quinn is consistent in German and English",
    text:
      "The most important information and paths are available in both languages. Navigation and page structure remain consistent and focused on care and healthcare teams."
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Updates</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          What is improving for care organisations using Quinn.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          We share relevant product changes from the organisation&apos;s perspective: clear, practical and focused on documentation work, professional review and team adoption.
        </p>
      </section>
      <section className="border-y border-[#E8E8EC] bg-[#FBFAF6] py-16">
        <div className="quinn-container">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-6 shadow-subtle sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Current</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              More clarity on how Quinn can be assessed in everyday care work.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-secondary-foreground">
              The pilot program and evaluation now explain which workflow is tested, where relief may become visible and which boundaries need to be resolved before wider use.
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
