import type { Route } from "next";
import { ArrowRight } from "lucide-react";
import { TrackedDemoLink } from "@/components/analytics/tracked-demo-link";

export type SiteLocale = "de" | "en";
export type DocumentationSegment = "care" | "medicine";

export function segmentDemoHref(locale: SiteLocale, segment: DocumentationSegment): Route {
  return `${locale === "de" ? "/demo-buchen" : "/en/book-demo"}?segment=${segment}` as Route;
}

export function SegmentDemoLink({ locale, segment, source = "homepage" }: { locale: SiteLocale; segment: DocumentationSegment; source?: "homepage" | "seo-landing" }) {
  const label = locale === "de"
    ? (segment === "care" ? "Demo für Pflege anfragen" : "Demo für Medizin anfragen")
    : (segment === "care" ? "Request a nursing care demo" : "Request a medicine demo");
  return <TrackedDemoLink href={segmentDemoHref(locale, segment)} locale={locale} source={source} className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-[#1E6B72] bg-white px-5 py-3 text-sm font-semibold text-[#1E6B72] transition-colors hover:bg-[#F3F8F6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E6B72]">{label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></TrackedDemoLink>;
}
