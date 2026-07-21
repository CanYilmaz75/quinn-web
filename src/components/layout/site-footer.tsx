import type { Route } from "next";
import Link from "next/link";

import { ConsentSettingsButton } from "@/components/consent/consent-settings-button";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import { QuinnWordmark } from "@/components/shared/logo";

type SiteLocale = "de" | "en";

const columns: Array<{ title: string; links: Array<[string, Route]> }> = [
  {
    title: "Produkt",
    links: [
      ["Übersicht", "/produkt/uebersicht"],
      ["Preise", "/preise"]
    ]
  },
  {
    title: "Entwickelt für",
    links: [
      ["Pflege", "/loesungen/pflegeheime"],
      ["Medizin", "/loesungen/medizin"],
      ["Psychologen", "/loesungen/psychologen"]
    ]
  },
  {
    title: "Ressourcen",
    links: [
      ["Kunden", "/kunden"],
      ["Updates", "/updates"],
      ["Forschung", "/forschung"]
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
      ["Pricing", "/en/pricing"]
    ]
  },
  {
    title: "Built for",
    links: [
      ["Care homes", "/en/solutions/care-homes"],
      ["Medicine", "/en/solutions/medicine"],
      ["Psychologists", "/en/solutions/psychologists"]
    ]
  },
  {
    title: "Resources",
    links: [
      ["Customers", "/en/customers"],
      ["Updates", "/en/updates"],
      ["Research", "/en/research"]
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
      ? "Quinn supports sensitive care and healthcare documentation. Quinn complements existing specialist systems and does not replace the resident record."
      : "Quinn unterstützt sensible Pflege- und Versorgungsdokumentation. Quinn ergänzt bestehende Fachsysteme und ersetzt keine Bewohnerakte.";
  const legalColumnTitle = locale === "en" ? "Legal" : "Rechtliches";

  return (
    <footer className="border-t border-border bg-white">
      <div className="quinn-container grid gap-10 py-12 lg:grid-cols-[1.4fr_repeat(5,auto)]">
        <div className="max-w-md">
          <QuinnWordmark subline="" />
          <p className="mt-5 text-sm leading-6 text-secondary-foreground">{description}</p>
          <div className="mt-6">
            <NewsletterSignup locale={locale} />
          </div>
          <p className="mt-6 text-xs text-muted-foreground">© 2026 Quinn</p>
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
    </footer>
  );
}
