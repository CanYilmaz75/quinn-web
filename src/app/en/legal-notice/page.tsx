import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Legal notice | Quinn",
  description: "Provider identification, contact details and legal information for Quinn."
};

const companyDetails = [
  { label: "Provider", value: "Quinn [enter legal form before go-live]" },
  { label: "Address", value: "[Street and number], [Postal code City], Germany" },
  { label: "Represented by", value: "[Enter authorised representative]" },
  { label: "Register entry", value: "[Enter register court and registration number, if available]" },
  { label: "VAT ID", value: "[Enter VAT ID according to § 27a UStG, if available]" }
];

const contactDetails = [
  { label: "Email", value: "[contact@quinn.example]", icon: Mail },
  { label: "Phone", value: "[Enter phone number]", icon: Phone },
  { label: "Registered office", value: "[Enter city]", icon: MapPin }
];

const legalSections = [
  {
    title: "Responsible for the content",
    body: "[Enter name and address of the person responsible for content, if different from the provider.]"
  },
  {
    title: "Responsible supervisory authority",
    body:
      "If Quinn is offered in the context of an activity that requires permission or supervision, the competent authority and relevant information must be added here."
  },
  {
    title: "Professional-law information",
    body:
      "If special professional-law rules apply to the provider, the professional title, chamber, country of award and applicable rules must be included."
  },
  {
    title: "Consumer dispute resolution",
    body:
      "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board. Please review before go-live whether this statement applies to your specific organisation."
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
              Information according to the obligations for digital services. The marked fields must be matched with and
              replaced by the actual company data before productive use.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>

          <div className="rounded-lg border border-border bg-[#F4F4F6] p-5 sm:p-6">
            <div className="grid gap-4 sm:grid-cols-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="min-w-0">
                    <Icon className="h-4 w-4 text-foreground" />
                    <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-2 break-words text-sm leading-6 text-secondary-foreground">{item.value}</p>
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
              This content provides a robust structure for the public website. The final version should be legally
              reviewed before publication.
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
