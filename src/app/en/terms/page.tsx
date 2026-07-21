import type { Metadata } from "next";
import { Building2, CreditCard, FileCheck, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Terms | Quinn",
  description: "General terms and conditions and terms of use for Quinn."
};

const highlights = [
  { label: "Target group", value: "B2B SaaS for care and healthcare teams", icon: Building2 },
  { label: "Service profile", value: "Documentation workflow, AI draft, review, export", icon: FileCheck },
  { label: "Billing", value: "Consultation-led package or individual contract by team size", icon: CreditCard },
  { label: "Responsibility", value: "Human review before professional use", icon: ShieldCheck }
];

const terms = [
  {
    title: "1. Scope",
    body:
      "These terms apply to the use of Quinn by companies, care facilities, outpatient services, operators and other professional users. Consumer offers are not intended unless expressly agreed otherwise."
  },
  {
    title: "2. Contracting party",
    body:
      "The contracting party is [enter Quinn legal entity with address]. Customers act through their authorised representatives or authorised administrators."
  },
  {
    title: "3. Subject matter of the service",
    body:
      "Quinn provides a web-based application for documentation workflows. Functions may include audio recording or upload, transcription, AI-supported draft creation, SIS-related structuring, review, approval, team management and export."
  },
  {
    title: "4. No replacement for professional responsibility",
    body:
      "Quinn generates technical suggestions and documentation drafts. Professional, care-related, medical, organisational and legal review as well as final approval remain exclusively with the customer and its users."
  },
  {
    title: "5. Registration and user accounts",
    body:
      "Users must provide accurate information, keep access credentials confidential and use accounts only within their authorisation. Administrators are responsible for invitations, roles, activation and deactivation of users."
  },
  {
    title: "6. Prices and payment",
    body:
      "The prices shown at contract conclusion or individually agreed terms apply. Prices may take active users, base packages, rollout, support and additional services into account. Payment terms, invoicing and taxes must be finalised before go-live."
  },
  {
    title: "7. Term and termination",
    body:
      "Term, renewal and termination are governed by the selected plan or individual contract. Written agreements take precedence for enterprise customers."
  },
  {
    title: "8. Availability and maintenance",
    body:
      "Quinn is operated with reasonable care. Planned maintenance, security updates or disruptions may temporarily affect availability. Concrete service levels must be agreed separately for enterprise customers."
  },
  {
    title: "9. Customer obligations",
    body:
      "The customer is responsible for lawful data collection, information obligations towards data subjects, consents, internal permissions, professional approvals and compliance with professional or facility-specific requirements."
  },
  {
    title: "10. Privacy and data processing",
    body:
      "Where Quinn processes personal data on behalf of the customer, a data processing agreement must be concluded. Details follow from the privacy information, DPA and TOM."
  },
  {
    title: "11. Rights of use",
    body:
      "Customers receive a simple, non-transferable right to use the application for the contract term within the agreed scope. Rights to software, brands, designs and documentation remain with the provider."
  },
  {
    title: "12. Prohibited use",
    body:
      "Prohibited use includes abusive access, circumvention of security functions, processing unlawful content, sharing access credentials and use outside agreed organisational boundaries."
  },
  {
    title: "13. Liability",
    body:
      "Liability is governed by statutory provisions unless effectively agreed otherwise. For simple negligence in business transactions, liability may be limited to typical, foreseeable damages. Mandatory liability remains unaffected."
  },
  {
    title: "14. Changes",
    body:
      "Customers will be informed of changes to these terms in an appropriate manner. Material changes apply only insofar as they are legally permissible or agreed."
  },
  {
    title: "15. Final provisions",
    body:
      "German law applies. Place of jurisdiction and severability provisions must be added appropriately for the final company form and customer structure."
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>;
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Terms of use</Eyebrow>
            <h1 className="mt-5 quinn-h2">General terms and conditions</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Basis for the use of Quinn by professional customers. This template must be adapted to legal form, payment
              model, terms and enterprise contracts before productive use.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-lg border border-border bg-[#F4F4F6] p-5">
                  <Icon className="h-4 w-4 text-foreground" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary-foreground">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Terms</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Contractually clear.
            </h2>
          </div>
          <div className="space-y-8">
            {terms.map((section) => (
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
