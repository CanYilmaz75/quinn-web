import type { Metadata } from "next";
import { Database, FileText, LockKeyhole, UserCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Privacy | Quinn",
  description: "Privacy information for Quinn, processed data, legal bases and data subject rights."
};

const quickFacts = [
  { label: "Controller", value: "[Enter Quinn legal entity, address and contact before go-live]", icon: UserCheck },
  { label: "Privacy contact", value: "[Enter privacy@quinn.example or data protection officer contact]", icon: LockKeyhole },
  { label: "Hosting and auth", value: "Supabase, server-side application, protected organisation areas", icon: Database },
  { label: "AI processing", value: "OpenAI API for transcription, structuring and draft support", icon: FileText }
];

const privacySections = [
  ["1. Controller", "The controller for this website and the Quinn application is [enter full company name, legal form, address, authorised representatives and contact]."],
  ["2. Privacy contact", "For privacy questions, contact us at [enter email]. If a data protection officer is appointed, the name or contact route must be added here."],
  ["3. Processed data", "We process account data, organisation data, roles and permissions, team memberships, logging, security data, billing information and content entered in consultation, care or healthcare workflows. This can include audio, transcripts, free text, documentation drafts, SIS-related content and export data."],
  ["4. Special categories of personal data", "In customer use, Quinn may process health data and care-related information. This requires an appropriate legal basis, clear role allocation and contractual rules between customer and provider."],
  ["5. Purposes of processing", "Data is processed to authenticate users, manage organisations, provide documentation workflows, turn audio and text into reviewable drafts, log approvals and exports, provide support, monitor security and enable billing."],
  ["6. Legal bases", "Depending on the use case, processing is based on contract performance, legitimate interests, legal obligations, consent or, for health data, a separately reviewed basis under Art. 9 GDPR. Customers remain responsible for their professional and legal use."],
  ["7. Service providers and recipients", "We use technical service providers, especially for hosting, authentication, storage, error analysis, AI processing and, where applicable, billing. The concrete processor list must be completed before go-live."],
  ["8. Third-country transfers", "Where providers outside the EU/EEA are used or remote access from third countries is possible, suitable safeguards such as EU standard contractual clauses, adequacy decisions or additional protective measures are reviewed and documented."],
  ["9. Retention and deletion", "Data is stored only as long as required for contract, operation, evidence, security, billing or legal obligations. The deletion concept covers user deletion, organisation deletion and customer-specific export or retention periods."],
  ["10. Cookies and local storage", "Quinn uses technically necessary cookies and comparable technologies, especially for login sessions and protected areas. Further details are provided in the cookie notice."],
  ["11. Security", "Quinn uses technical and organisational safeguards such as protected areas, role-based access, logging, separated organisation data and controlled storage paths. AI outputs remain drafts; professional responsibility stays with the user."],
  ["12. Data subject rights", "Data subjects have rights under GDPR including access, rectification, erasure, restriction, portability, objection and complaint to a supervisory authority."],
  ["13. Changes", "This privacy information may be updated if the product, providers, law or processing operations change."]
];

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>; }

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />
      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Privacy</Eyebrow>
            <h1 className="mt-5 quinn-h2">Privacy information</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">These notes describe the intended data processing for the website and Quinn application. Before go-live, controller, providers, transfer bases and retention periods must be finally reviewed and completed.</p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {quickFacts.map((item) => { const Icon = item.icon; return <div key={item.label} className="rounded-lg border border-border bg-[#F4F4F6] p-5"><Icon className="h-4 w-4 text-foreground" /><p className="mt-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">{item.label}</p><p className="mt-2 text-sm leading-6 text-secondary-foreground">{item.value}</p></div>; })}
          </div>
        </div>
      </section>
      <section className="bg-[#F4F4F6] py-16 sm:py-20"><div className="quinn-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]"><div><Eyebrow>Required information</Eyebrow><h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">Processing explained transparently.</h2></div><div className="space-y-8">{privacySections.map(([title, body]) => <section key={title}><h3 className="text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary-foreground">{body}</p></section>)}</div></div></section>
      <SiteFooter locale="en" />
    </main>
  );
}
