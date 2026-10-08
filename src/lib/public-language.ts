import type { Route } from "next";
import { publicSeoPairs } from "@/content/public-site";
import { parseDemoIntent } from "@/lib/demo-intent";

export type DemoLanguageContext = {
  intent?: string;
  segment?: string;
};

export function buildLanguageHref(pathname: string, locale: "de" | "en", context?: DemoLanguageContext): Route {
  const pair = publicSeoPairs.find(([de, en]) => de === pathname || en === pathname);
  const target = pair?.[locale === "de" ? 0 : 1] ?? (locale === "de" ? "/" : "/en");
  const query = new URLSearchParams();
  // Keep only controlled demo metadata, never arbitrary query strings or form data.
  if (pathname === "/demo-buchen" || pathname === "/en/book-demo") {
    const intent = parseDemoIntent(context?.intent);
    if (intent) query.set("intent", intent);
    if (context?.segment === "care" || context?.segment === "medicine" || context?.segment === "general") {
      query.set("segment", context.segment);
    }
  }
  return (query.size ? `${target}?${query}` : target) as Route;
}
