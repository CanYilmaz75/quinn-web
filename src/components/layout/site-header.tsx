import type { Route } from "next";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { TrackedDemoLink } from "@/components/analytics/tracked-demo-link";
import { LanguageSwitch } from "@/components/layout/language-switch";
import type { DemoLanguageContext } from "@/lib/public-language";
import { publicConfig } from "@/lib/public-config";

type SiteHeaderLocale = "de" | "en";
type NavLink = { label: string; href: string };
const pillarLinks = {
  de: [{ label: "Pflege", href: "/loesungen/pflege" }, { label: "Medizin", href: "/loesungen/medizin" }],
  en: [{ label: "Nursing care", href: "/en/solutions/nursing-care" }, { label: "Medicine", href: "/en/solutions/medicine" }]
};
const menus = {
  de: [
    { label: "Produkt", items: [{ label: "Übersicht", href: "/produkt/uebersicht" }, { label: "Prüfung & Qualität", href: "/produkt/pruefung-qualitaet" }, { label: "Preise", href: "/preise" }] },
    { label: "Ressourcen", items: [{ label: "Einsatzbereiche", href: "/kunden" }, { label: "Pilotprogramm", href: "/pilotprogramm" }, { label: "Updates", href: "/updates" }, { label: "Forschung", href: "/forschung" }, { label: "Über uns", href: "/ueber-uns" }] }
  ],
  en: [
    { label: "Product", items: [{ label: "Overview", href: "/en/product/overview" }, { label: "Review & quality", href: "/en/product/review-quality" }, { label: "Pricing", href: "/en/pricing" }] },
    { label: "Resources", items: [{ label: "Use cases", href: "/en/customers" }, { label: "Pilot program", href: "/en/pilot-program" }, { label: "Updates", href: "/en/updates" }, { label: "Research", href: "/en/research" }, { label: "About", href: "/en/about" }] }
  ]
};
const navClass = "inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium text-secondary-foreground hover:text-[#1E6B72] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E6B72]";

function DesktopMenu({ menu }: { menu: { label: string; items: NavLink[] } }) {
  return <details className="group/nav relative">
    <summary className={`${navClass} cursor-pointer list-none gap-1.5 [&::-webkit-details-marker]:hidden`}>{menu.label}<ChevronDown className="h-3.5 w-3.5 transition-transform group-open/nav:rotate-180" aria-hidden="true" /></summary>
    <div className="absolute left-0 top-full z-40 w-64 rounded-xl border border-border bg-white p-3 shadow-subtle">{menu.items.map((item) => <Link key={item.href} href={item.href as Route} className="flex min-h-11 items-center rounded-lg px-3 text-sm text-secondary-foreground hover:bg-[#F3F8F6] hover:text-[#1E6B72]">{item.label}</Link>)}</div>
  </details>;
}

export function SiteHeader({ locale = "de", demoContext }: { locale?: SiteHeaderLocale; demoContext?: DemoLanguageContext }) {
  const t = locale === "de" ? { home: "Quinn Startseite", nav: "Hauptnavigation", login: "Einloggen", demo: "Demo anfragen", open: "Menü öffnen", close: "Menü schließen" } : { home: "Quinn homepage", nav: "Main navigation", login: "Login", demo: "Request a demo", open: "Open menu", close: "Close menu" };
  const activeMenus = menus[locale];
  return <div className="sticky top-0 z-30 border-b border-border bg-white">
    <header className="quinn-container flex min-h-[76px] items-center justify-between gap-4">
      <Link href={locale === "de" ? "/" : "/en"} aria-label={t.home} className="inline-flex min-h-11 items-center"><span className="text-xl font-semibold tracking-[-0.04em] text-[#0A0A0F]">Quinn</span></Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label={t.nav}>
        <DesktopMenu menu={activeMenus[0]} />
        {pillarLinks[locale].map((item) => <Link key={item.href} href={item.href as Route} className={navClass}>{item.label}</Link>)}
        <DesktopMenu menu={activeMenus[1]} />
      </nav>
      <div className="ml-auto flex items-center gap-3 lg:ml-0"><LanguageSwitch locale={locale} demoContext={demoContext} /><a href={publicConfig.loginUrl} className="hidden min-h-11 items-center px-2 text-sm text-secondary-foreground lg:inline-flex">{t.login}</a><TrackedDemoLink href={locale === "de" ? "/demo-buchen" : "/en/book-demo"} locale={locale} source="site-header" className="hidden min-h-11 items-center rounded-lg bg-[#1E6B72] px-4 text-sm font-semibold text-white hover:bg-[#17555B] sm:inline-flex">{t.demo}</TrackedDemoLink></div>
      <details className="group/mobile lg:hidden">
        <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-border [&::-webkit-details-marker]:hidden"><Menu className="h-5 w-5 group-open/mobile:hidden" aria-hidden="true" /><X className="hidden h-5 w-5 group-open/mobile:block" aria-hidden="true" /><span className="sr-only group-open/mobile:hidden">{t.open}</span><span className="sr-only hidden group-open/mobile:inline">{t.close}</span></summary>
        <nav aria-label={t.nav} className="absolute left-4 right-4 z-40 mt-3 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-xl border border-border bg-white p-5 shadow-subtle">
          <div className="grid grid-cols-2 gap-3 border-b border-border pb-4">{pillarLinks[locale].map((item) => <Link key={item.href} href={item.href as Route} className={`${navClass} justify-center border border-border`}>{item.label}</Link>)}</div>
          {activeMenus.map((menu) => <div key={menu.label} className="border-b border-border py-4"><p className="px-3 text-sm font-semibold">{menu.label}</p><div className="mt-2 grid sm:grid-cols-2">{menu.items.map((item) => <Link key={item.href} href={item.href as Route} className={navClass}>{item.label}</Link>)}</div></div>)}
          <TrackedDemoLink href={locale === "de" ? "/demo-buchen" : "/en/book-demo"} locale={locale} source="site-header" className="mt-4 flex min-h-11 items-center justify-center rounded-lg bg-[#1E6B72] px-4 text-sm font-semibold text-white">{t.demo}</TrackedDemoLink><a href={publicConfig.loginUrl} className="mt-2 flex min-h-11 items-center justify-center text-sm">{t.login}</a>
        </nav>
      </details>
    </header>
  </div>;
}
