import type { Route } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BriefcaseMedical, ChevronDown, FileText, HeartHandshake, Menu, Mic, Newspaper, ShieldCheck, Stethoscope, Users, UserRoundCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { publicConfig } from "@/lib/public-config";

type MenuLink = {
  label: string;
  href: Route;
  icon?: ComponentType<{ className?: string }>;
};

type MenuGroup = {
  label: string;
  columns: Array<{
    title?: string;
    items: MenuLink[];
  }>;
};

const productMenu: MenuGroup = {
  label: "Produkt",
  columns: [
    {
      title: "Produkt",
      items: [
        { label: "Übersicht", href: "/produkt/uebersicht" as Route, icon: FileText },
        { label: "SIS-Aufnahme", href: "/anwendungen/sis-aufnahme" as Route, icon: FileText },
        { label: "Sprachdokumentation Pflege", href: "/anwendungen/sprachdokumentation-pflege" as Route, icon: Mic },
        { label: "Review & Qualität", href: "/produkt/uebersicht#review" as Route, icon: BadgeCheck },
        { label: "Preise", href: "/preise" as Route, icon: HeartHandshake }
      ]
    }
  ]
};

const solutionMenu: MenuGroup = {
  label: "Lösungen",
  columns: [
    {
      title: "Entwickelt für",
      items: [
        { label: "Pflegeheime", href: "/loesungen/pflegeheime" as Route, icon: UserRoundCheck },
        { label: "Träger & QM", href: "/loesungen/traeger-qm" as Route, icon: ShieldCheck },
        { label: "Ambulante Pflege", href: "/loesungen/ambulante-pflege" as Route, icon: Stethoscope },
        { label: "Medizin & Klinik", href: "/loesungen/medizin" as Route, icon: BriefcaseMedical },
        { label: "Pilotprogramm", href: "/pilotprogramm" as Route, icon: Users }
      ]
    }
  ]
};

const resourceMenu: MenuGroup = {
  label: "Ressourcen",
  columns: [
    {
      items: [
        { label: "Kunden", href: "/kunden" as Route, icon: Users },
        { label: "Updates", href: "/updates" as Route, icon: Newspaper },
        { label: "Forschung", href: "/forschung" as Route, icon: FileText },
        { label: "Über Uns", href: "/ueber-uns" as Route, icon: BriefcaseMedical }
      ]
    }
  ]
};

const menus = [productMenu, solutionMenu, resourceMenu];

const englishMenus: MenuGroup[] = [
  {
    label: "Product",
    columns: [
      {
        title: "Product",
        items: [
          { label: "Overview", href: "/en/product/overview" as Route, icon: FileText },
          { label: "SIS Intake", href: "/en/use-cases/sis-intake" as Route, icon: FileText },
          { label: "Voice documentation for care", href: "/en/use-cases/voice-documentation-care" as Route, icon: Mic },
          { label: "Review & quality", href: "/en/product/overview#review" as Route, icon: BadgeCheck },
          { label: "Pricing", href: "/en/pricing" as Route, icon: HeartHandshake }
        ]
      }
    ]
  },
  {
    label: "Solutions",
    columns: [
      {
        title: "Built for",
        items: [
          { label: "Care homes", href: "/en/solutions/care-homes" as Route, icon: UserRoundCheck },
          { label: "Operators & QM", href: "/en/solutions/operators-quality-management" as Route, icon: ShieldCheck },
          { label: "Home care", href: "/en/solutions/home-care" as Route, icon: Stethoscope },
          { label: "Medicine & clinics", href: "/en/solutions/medicine" as Route, icon: BriefcaseMedical },
          { label: "Pilot program", href: "/en/pilot-program" as Route, icon: Users }
        ]
      }
    ]
  },
  {
    label: "Resources",
    columns: [
      {
        items: [
          { label: "Customers", href: "/en/customers" as Route, icon: Users },
          { label: "Updates", href: "/en/updates" as Route, icon: Newspaper },
          { label: "Research", href: "/en/research" as Route, icon: FileText },
          { label: "About", href: "/en/about" as Route, icon: BriefcaseMedical }
        ]
      }
    ]
  }
];

type SiteHeaderLocale = "de" | "en";

function DesktopMenu({ menu }: { menu: MenuGroup }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex min-h-11 items-center gap-2 rounded-xl px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-white hover:text-foreground group-hover:bg-white group-hover:text-foreground"
      >
        {menu.label}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-40 w-[min(420px,calc(100vw-2rem))] pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="grid gap-6 rounded-xl border border-border bg-white p-4 shadow-subtle sm:grid-cols-2">
          {menu.columns.map((column, columnIndex) => (
            <div key={`${menu.label}-${columnIndex}`}>
              {column.title ? <p className="mb-4 text-sm font-medium text-secondary-foreground">{column.title}</p> : null}
              <div className="space-y-1">
                {column.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex min-h-9 items-center gap-3 rounded-lg px-2 text-sm font-medium text-foreground transition-colors hover:bg-[#F4F4F6] hover:text-[#1E6B72]"
                    >
                      {Icon ? <Icon className="h-4 w-4 shrink-0 text-[#0A0A0F]" /> : null}
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader({ locale = "de" }: { locale?: SiteHeaderLocale }) {
  const activeMenus = locale === "en" ? englishMenus : menus;
  const labels =
    locale === "en"
      ? { home: "Quinn homepage", nav: "Main navigation", login: "Login", demo: "Request a demo", mobileNav: "Open menu" }
      : { home: "Quinn Startseite", nav: "Hauptnavigation", login: "Einloggen", demo: "Unverbindlich Demo anfragen", mobileNav: "Menü öffnen" };

  return (
    <div className="sticky top-0 z-30 border-b border-border bg-quinn-warm">
      <div className="quinn-container">
        <header className="flex min-h-16 items-center justify-between gap-4">
          <Link href={locale === "en" ? ("/en" as Route) : ("/" as Route)} className="flex items-center gap-3" aria-label={labels.home}>
            <Image src="/quinn-logo.svg" alt="Quinn Logo" width={40} height={40} className="h-10 w-10 rounded-xl" priority />
            <span className="text-lg font-semibold tracking-[-0.03em] text-[#0A0A0F]">Quinn</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label={labels.nav}>
            {activeMenus.map((menu) => (
              <DesktopMenu key={menu.label} menu={menu} />
            ))}
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="flex items-center rounded-xl border border-[#DDE8E4] bg-white p-1 text-xs font-semibold" aria-label="Language switch">
              <Link href="/" aria-current={locale === "de" ? "page" : undefined} className={`rounded-lg px-2.5 py-1.5 ${locale === "de" ? "bg-[#0A0A0F] text-white" : "text-secondary-foreground hover:text-foreground"}`}>
                DE
              </Link>
              <Link href="/en" aria-current={locale === "en" ? "page" : undefined} className={`rounded-lg px-2.5 py-1.5 ${locale === "en" ? "bg-[#0A0A0F] text-white" : "text-secondary-foreground hover:text-foreground"}`}>
                EN
              </Link>
            </div>
            <Button asChild variant="ghost" className="rounded-xl text-secondary-foreground hover:bg-white hover:text-foreground">
              <a href={publicConfig.loginUrl}>{labels.login}</a>
            </Button>
            <Button asChild className="rounded-xl px-4">
              <Link href={locale === "en" ? "/en/book-demo" : "/demo-buchen"}>{labels.demo}</Link>
            </Button>
          </div>

          <details className="group md:hidden">
            <summary aria-label={labels.mobileNav} className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-border bg-white [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5 text-secondary-foreground" />
            </summary>
            <div className="absolute left-4 right-4 z-40 mt-3 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-2xl border border-border bg-white p-4 shadow-subtle">
              {activeMenus.map((menu) => (
                <div key={menu.label} className="border-b border-border py-3 last:border-b-0">
                  <p className="px-2 text-sm font-semibold text-foreground">{menu.label}</p>
                  {menu.columns.map((column, columnIndex) => (
                    <div key={`${menu.label}-mobile-${columnIndex}`} className="mt-2">
                      {column.title ? <p className="px-2 py-1 text-xs font-medium uppercase text-muted-foreground">{column.title}</p> : null}
                      {column.items.map((item) => (
                        <Link key={item.label} href={item.href} className="flex min-h-11 items-center rounded-xl px-2 text-sm text-secondary-foreground">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <div className="mt-3 flex items-center rounded-xl border border-[#DDE8E4] bg-[#FBFAF6] p-1 text-xs font-semibold" aria-label="Language switch">
                <Link href="/" aria-current={locale === "de" ? "page" : undefined} className={`flex-1 rounded-lg px-3 py-2 text-center ${locale === "de" ? "bg-[#0A0A0F] text-white" : "text-secondary-foreground"}`}>
                  Deutsch
                </Link>
                <Link href="/en" aria-current={locale === "en" ? "page" : undefined} className={`flex-1 rounded-lg px-3 py-2 text-center ${locale === "en" ? "bg-[#0A0A0F] text-white" : "text-secondary-foreground"}`}>
                  English
                </Link>
              </div>
              <Link href={locale === "en" ? "/en/book-demo" : "/demo-buchen"} className="mt-1 flex min-h-11 items-center rounded-xl px-2 text-sm font-semibold text-foreground">
                {labels.demo}
              </Link>
              <a href={publicConfig.loginUrl} className="mt-1 flex min-h-11 items-center rounded-xl px-2 text-sm font-semibold text-foreground">
                {labels.login}
              </a>
            </div>
          </details>
        </header>
      </div>
    </div>
  );
}
