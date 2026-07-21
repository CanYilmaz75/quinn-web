import type { Metadata } from "next";
import { ClipboardCheck, Database, KeyRound, ServerCog } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "DPA and TOM | Quinn",
  description: "Information on data processing agreements and technical and organisational measures at Quinn."
};

const avvFacts = [
  { label: "Role", value: "Quinn as processor, customer as controller", icon: ClipboardCheck },
  { label: "Data types", value: "Account, organisation, audio, transcript, documentation and audit data", icon: Database },
  { label: "Technology", value: "Tenant separation, access protection, logging, private storage paths", icon: ServerCog },
  { label: "Access", value: "Roles, organisations and protected app areas", icon: KeyRound }
];

const avvSections = [
  {
    title: "1. Purpose of processing",
    body:
      "Quinn processes personal data to provide customers with documentation workflows, team management, AI-supported draft creation, storage, approval, export and support."
  },
  {
    title: "2. Allocation of roles",
    body:
      "The customer is generally the controller for data relating to its data subjects, employees and organisation. Quinn acts as processor for processed customer data unless its own controllership applies."
  },
  {
    title: "3. Categories of data subjects",
    body:
      "Data subjects may include users, the customer's employees, people in need of care, relatives, contact persons and other people mentioned in documentation workflows."
  },
  {
    title: "4. Categories of personal data",
    body:
      "Processed data may include identification and contact data, account data, roles, audio content, transcripts, free text, care and health information, SIS-related content, metadata, audit logs and export data."
  },
  {
    title: "5. Instructions",
    body:
      "Quinn generally processes customer data only on documented customer instruction, unless a statutory obligation prevents this. Product configuration, application use and support requests can specify instructions."
  },
  {
    title: "6. Sub-processors",
    body:
      "Sub-processors must be finally listed before go-live. Expected categories are hosting, database, storage, authentication, AI processing, error analysis and, where applicable, billing."
  },
  {
    title: "7. Technical and organisational measures",
    body:
      "The intended measures include access control, role-based permissions, organisation boundaries, protected storage areas, audit logs, transport encryption, controlled admin access, backup and recovery processes and incident processes."
  },
  {
    title: "8. Deletion and return",
    body:
      "After contract end, customer data is deleted or provided in an appropriate form according to instructions, unless statutory obligations or legitimate evidence purposes prevent this. Concrete periods must be contractually defined."
  },
  {
    title: "9. Customer support",
    body:
      "Quinn supports customers as required with data subject rights, security incidents, data protection impact assessments and evidence, insofar as the information lies within Quinn's area of responsibility."
  },
  {
    title: "10. Audit and evidence",
    body:
      "Customers receive appropriate evidence of compliance with the agreed measures. Scope, form and frequency of audits must be regulated in the final DPA."
  }
];

const tomRows = [
  ["Access control", "Login, Supabase Auth, protected routes, roles and organisation context"],
  ["Admission control", "Private storage paths, service role server-side only, RLS policies and API context"],
  ["Transfer control", "Controlled exports, audit logs, no public audio or PDF paths"],
  ["Input control", "Logging of creation, editing, approval, export and team actions"],
  ["Tenant separation", "Organisation ID in data model, RLS and server-side auth context"],
  ["Availability", "Finalise backup, restore, monitoring and incident processes according to compliance documentation"],
  ["Privacy by design", "Approval before export, drafts instead of automatic final documentation, clear user responsibility"]
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>;
}

export default function DpaPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Data processing</Eyebrow>
            <h1 className="mt-5 quinn-h2">DPA and TOM</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Overview for customers using Quinn with personal or health-related data. The final DPA must be concluded
              as a contract with concrete parties, sub-processors and periods.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {avvFacts.map((item) => {
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
            <Eyebrow>DPA structure</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              What is contractually regulated.
            </h2>
          </div>
          <div className="space-y-8">
            {avvSections.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>TOM</Eyebrow>
            <h2 className="mt-5 quinn-h2">Technical and organisational measures.</h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-border">
            {tomRows.map((row) => (
              <div key={row[0]} className="grid gap-2 border-b border-border px-5 py-5 last:border-b-0 sm:grid-cols-[0.35fr_0.65fr]">
                <p className="text-sm font-semibold text-foreground">{row[0]}</p>
                <p className="text-sm leading-6 text-secondary-foreground">{row[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale="en" />
    </main>
  );
}
