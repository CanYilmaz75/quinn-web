import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { Mail, Phone } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { legalDetails } from "@/lib/legal-details";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/en/legal-notice"),
  title: "Legal notice | Quinn",
  description: "Provider identification, contact details and legal information for Quinn."
};

const companyDetails = [
  { label: "Provider", value: legalDetails.providerNameEn },
  { label: "Owner", value: legalDetails.owner },
  { label: "Address", value: legalDetails.addressPendingEn },
  { label: "Register entry", value: legalDetails.registerEn }
];

const contactDetails = [
  { label: "Email", value: legalDetails.email, href: `mailto:${legalDetails.email}`, icon: Mail },
  { label: "Phone", value: legalDetails.phoneDisplay, href: `tel:${legalDetails.phoneHref}`, icon: Phone }
];

const legalSections = [
  {
    title: "Responsible for the content",
    body: `${legalDetails.owner}; address as stated for the provider. ${legalDetails.addressPendingEn}`
  },
  {
    title: "Consumer dispute resolution",
    body:
      "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board."
  },
  {
    title: "Liability for content",
    body:
      "The contents of this website are created with care. However, no guarantee can be given for the accuracy, completeness and timeliness of the content. Statutory obligations to remove or block information remain unaffected."
  },
  {
    title: "Liability for links",
    body:
      "This website may contain links to external websites. The respective providers are solely responsible for their content. Unlawful content was not recognisable at the time of linking."
  },
  {
    title: "Copyright",
    body:
      "The content, texts, brand elements and designs created on this website are subject to German copyright law. Use, reproduction or editing outside statutory limits requires prior consent."
  },
  {
    title: "Medical and care-related notice",
    body:
      "Quinn provides technical tools for documentation workflows. Content on this website does not replace medical, care-related, legal or organisational case-by-case review."
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>;
}

export default function LegalNoticePage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Provider identification</Eyebrow>
            <h1 className="mt-5 quinn-h2">Legal notice</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Provider information for this website. Quinn Health is currently being built by Can Yilmaz. The serviceable
              business address is still being determined and will be added before business operations begin.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: {legalDetails.lastUpdatedEn}</p>
          </div>

          <div className="rounded-lg border border-border bg-[#F4F4F6] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="min-w-0">
                    <Icon className="h-4 w-4 text-foreground" />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                      {item.label}
                    </p>
                    <a className="mt-2 block break-words text-sm leading-6 text-secondary-foreground underline-offset-4 hover:underline" href={item.href}>{item.value}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Details</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Legal base data.
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-white">
            {companyDetails.map((item) => (
              <div key={item.label} className="grid gap-2 border-b border-border px-5 py-5 last:border-b-0 sm:grid-cols-[0.38fr_0.62fr]">
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="text-sm leading-6 text-secondary-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Notes</Eyebrow>
            <h2 className="mt-5 quinn-h2">Transparency and responsibility.</h2>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              These details reflect the current provider status. The serviceable address remains expressly open until it
              is determined; external legal review of the final version is still pending.
            </p>
          </div>

          <div className="space-y-8">
            {legalSections.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
