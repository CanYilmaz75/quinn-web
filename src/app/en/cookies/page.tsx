import type { Metadata } from "next";
import { Cookie, Lock, Settings, Shield } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Cookie notice | Quinn",
  description: "Information about cookies and comparable technologies at Quinn."
};

const cookieGroups = [
  {
    name: "Necessary cookies",
    purpose: "Login session, authentication, protection of protected areas and technical provision.",
    examples: "Supabase Auth cookies with sb prefix, Next.js/session and security mechanisms",
    legalBasis: "Required to provide the service"
  },
  {
    name: "Security and error analysis",
    purpose: "Detection of technical errors, abuse protection, stability and operational security.",
    examples: "Sentry only if ENABLE_SENTRY is enabled and finally configured",
    legalBasis: "Legitimate interest in secure operation, where permitted"
  },
  {
    name: "Analytics",
    purpose: "Product metrics and usage analysis only when the function is enabled and a suitable legal basis exists.",
    examples: "Currently prepared as a feature flag; add provider and consent logic before use",
    legalBasis: "Consent or another basis to be reviewed"
  }
];

const notes = [
  {
    title: "No marketing cookies in the current base setup",
    body:
      "No classic marketing or tracking pixels such as gtag, PostHog or Meta Pixel are actively integrated in the visible code. If such services are added later, banners, provider lists and consents must be adjusted."
  },
  {
    title: "Technically necessary storage",
    body:
      "Cookies are used for protected app areas to recognise users and keep sessions secure. Without these cookies, the application cannot be used properly."
  },
  {
    title: "Browser settings",
    body:
      "Users can delete or block cookies in the browser. This may mean that login, upload, export or other protected functions no longer work."
  },
  {
    title: "Changes",
    body:
      "This notice must be updated as soon as new analytics, marketing, support or payment providers are integrated."
  }
];

const iconCards = [
  { label: "Login", value: "Sessions and protected areas", icon: Lock },
  { label: "Security", value: "Abuse protection and stability", icon: Shield },
  { label: "Settings", value: "Browser controls local storage", icon: Settings },
  { label: "Cookies", value: "No marketing cookies in the base setup", icon: Cookie }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>;
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader locale="en" />

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Cookie notice</Eyebrow>
            <h1 className="mt-5 quinn-h2">Cookies and local storage</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              In the base setup, Quinn mainly uses technically necessary cookies for login and protected app areas.
              Analytics or marketing services may only become active after final review and suitable consent logic.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Last updated: May 2026</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {iconCards.map((item) => {
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
            <Eyebrow>Categories</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Which storage is intended.
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-white">
            {cookieGroups.map((group) => (
              <div key={group.name} className="border-b border-border p-5 last:border-b-0">
                <h3 className="text-xl font-semibold text-foreground">{group.name}</h3>
                <dl className="mt-4 grid gap-4 text-sm leading-6 sm:grid-cols-3">
                  <div>
                    <dt className="font-semibold text-foreground">Purpose</dt>
                    <dd className="mt-1 text-secondary-foreground">{group.purpose}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Examples</dt>
                    <dd className="mt-1 text-secondary-foreground">{group.examples}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Basis</dt>
                    <dd className="mt-1 text-secondary-foreground">{group.legalBasis}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Notes</Eyebrow>
            <h2 className="mt-5 quinn-h2">Control remains transparent.</h2>
          </div>
          <div className="space-y-8">
            {notes.map((section) => (
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
