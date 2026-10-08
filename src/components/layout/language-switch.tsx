"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildLanguageHref, type DemoLanguageContext } from "@/lib/public-language";

export function LanguageSwitch({ locale, demoContext }: { locale: "de" | "en"; demoContext?: DemoLanguageContext }) {
  const pathname = usePathname();
  return <div className="flex items-center gap-1 text-xs font-medium" aria-label={locale === "de" ? "Sprache wählen" : "Choose language"}><Link href={buildLanguageHref(pathname, "de", demoContext)} lang="de" aria-current={locale === "de" ? "page" : undefined} className={`flex min-h-11 items-center rounded-lg px-2 ${locale === "de" ? "text-foreground" : "text-muted-foreground"}`}>DE</Link><span aria-hidden="true" className="text-border">/</span><Link href={buildLanguageHref(pathname, "en", demoContext)} lang="en" aria-current={locale === "en" ? "page" : undefined} className={`flex min-h-11 items-center rounded-lg px-2 ${locale === "en" ? "text-foreground" : "text-muted-foreground"}`}>EN</Link></div>;
}
