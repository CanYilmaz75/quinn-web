import type { Route } from "next";
import Link from "next/link";

import { ConsentSettingsButton } from "@/components/consent/consent-settings-button";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";

type SiteLocale = "de" | "en";

const columns: Array<{ title: string; links: Array<[string, Route]> }> = [
  {
    title: "Produkt",
    links: [
      ["Übersicht", "/produkt/uebersicht"],
      ["Prüfung & Qualität", "/produkt/pruefung-qualitaet"],
      ["Preise", "/preise"]
    ]
  },
  {
    title: "Entwickelt für",
    links: [
      ["Pflege", "/loesungen/pflege"],
      ["Medizin", "/loesungen/medizin"]
    ]
  },
  {
    title: "Ressourcen",
    links: [
      ["Einsatzbereiche", "/kunden"],
      ["Updates", "/updates"],
      ["Auswertung", "/forschung"]
    ]
  },
  {
    title: "Unternehmen",
    links: [["Über Uns", "/ueber-uns"]]
  },
  {
    title: "Rechtliches",
    links: [
      ["Impressum", "/impressum"],
      ["Datenschutz", "/datenschutz"],
      ["AVV / TOM", "/avv"],
      ["AGB", "/agb"],
      ["Cookies", "/cookies"]
    ]
  }
];

const englishColumns: Array<{ title: string; links: Array<[string, Route]> }> = [
  {
    title: "Product",
    links: [
      ["Overview", "/en/product/overview"],
      ["Review & quality", "/en/product/review-quality"],
      ["Pricing", "/en/pricing"]
    ]
  },
  {
    title: "Built for",
    links: [
      ["Nursing", "/en/solutions/nursing-care"],
      ["Medicine", "/en/solutions/medicine"]
    ]
  },
  {
    title: "Resources",
    links: [
      ["Use cases", "/en/customers"],
      ["Updates", "/en/updates"],
      ["Evaluation", "/en/research"]
    ]
  },
  {
    title: "Company",
    links: [["About", "/en/about"]]
  },
  {
    title: "Legal",
    links: [
      ["Legal notice", "/en/legal-notice"],
      ["Privacy", "/en/privacy"],
      ["DPA / TOM", "/en/dpa"],
      ["Terms", "/en/terms"],
      ["Cookies", "/en/cookies"]
    ]
  }
];

export function SiteFooter({ locale = "de" }: { locale?: SiteLocale }) {
  const activeColumns = locale === "en" ? englishColumns : columns;
  const description =
    locale === "en"
      ? "Quinn creates documentation drafts for nursing and medicine. Professional review remains with the responsible people. Quinn complements existing systems and replaces neither nursing nor patient records."
      : "Quinn erstellt Dokumentationsentwürfe für Pflege und Medizin. Die fachliche Prüfung bleibt bei den verantwortlichen Personen. Quinn ergänzt bestehende Fachsysteme und ersetzt weder Pflege- noch Patientenakten.";
  const legalColumnTitle = locale === "en" ? "Legal" : "Rechtliches";

  return (
    <footer className="border-t border-border bg-white">
      <div className="quinn-container">
        <div className="py-10">
          <NewsletterSignup locale={locale} />
        </div>

        <div className="grid gap-10 border-t border-border py-10 lg:grid-cols-[1.4fr_repeat(5,auto)]">
          <div className="max-w-md">
            <Link
              href={locale === "en" ? ("/en" as Route) : ("/" as Route)}
              className="inline-flex items-center"
              aria-label={locale === "en" ? "Quinn homepage" : "Quinn Startseite"}
            >
              <span className="text-xl font-semibold tracking-[-0.04em] text-[#0A0A0F]">Quinn</span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-secondary-foreground">{description}</p>
          </div>

          {activeColumns.map((column) => (
            <div key={column.title} className="space-y-3 text-sm">
              <p className="font-semibold text-foreground">{column.title}</p>
              <div className="space-y-3 text-secondary-foreground">
                {column.links.map(([label, href]) => (
                  <Link key={href} href={href} className="block transition-colors hover:text-foreground">
                    {label}
                  </Link>
                ))}
                {column.title === legalColumnTitle ? <ConsentSettingsButton locale={locale} /> : null}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border py-5">
          <p className="text-xs text-muted-foreground">© 2026 Quinn</p>
        </div>
      </div>
    </footer>
  );
}
