import type { MetadataRoute } from "next";

import { publicSeoPairs, publicSitePages, siteUrl } from "@/content/public-site";

const staticRoutes = [
  "/preise",
  "/en/pricing",
  "/forschung",
  "/en/research",
  "/updates",
  "/en/updates",
  "/pilotprogramm",
  "/en/pilot-program",
  "/produkt/uebersicht",
  "/en/product/overview",
  "/loesungen/pflegeheime",
  "/en/solutions/care-homes",
  "/loesungen/traeger-qm",
  "/en/solutions/operators-quality-management",
  "/demo-buchen",
  "/en/book-demo",
  "/datenschutz",
  "/en/privacy",
  "/avv",
  "/en/dpa",
  "/impressum",
  "/en/legal-notice"
] as const;

function languageAlternates(path: string) {
  const pair = publicSeoPairs.find(([de, en]) => de === path || en === path);
  if (!pair) return undefined;

  return {
    de: `${siteUrl}${pair[0]}`,
    en: `${siteUrl}${pair[1]}`
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = Array.from(new Set([...publicSitePages.map((page) => page.slug), ...staticRoutes]));

  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date("2026-06-13T00:00:00.000Z"),
    changeFrequency: path === "/" || path === "/en" ? "weekly" : "monthly",
    priority: path === "/" || path === "/en" ? 1 : path.includes("preise") || path.includes("pricing") || path.includes("pilot") ? 0.9 : 0.7,
    alternates: {
      languages: languageAlternates(path) ?? { [path.startsWith("/en") ? "en" : "de"]: `${siteUrl}${path}` }
    }
  }));
}
