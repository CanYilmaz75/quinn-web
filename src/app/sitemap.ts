import type { MetadataRoute } from "next";

import { publicSeoPairs, publicSitePages, siteUrl } from "@/content/public-site";

const staticRoutes = [
  "/",
  "/agb",
  "/anwendungen/sis-aufnahme",
  "/anwendungen/sprachdokumentation-pflege",
  "/avv",
  "/cookies",
  "/datenschutz",
  "/demo-buchen",
  "/en",
  "/en/about",
  "/en/book-demo",
  "/en/cookies",
  "/en/customers",
  "/en/dpa",
  "/en/legal-notice",
  "/en/pilot-program",
  "/preise",
  "/en/pricing",
  "/en/privacy",
  "/en/product/overview",
  "/forschung",
  "/en/research",
  "/en/solutions/care-homes",
  "/en/solutions/home-care",
  "/en/solutions/medicine",
  "/en/solutions/operators-quality-management",
  "/en/solutions/psychologists",
  "/en/terms",
  "/updates",
  "/en/updates",
  "/en/use-cases/sis-intake",
  "/en/use-cases/voice-documentation-care",
  "/hlth",
  "/impressum",
  "/kunden",
  "/loesungen/ambulante-pflege",
  "/loesungen/medizin",
  "/loesungen/pflegeheime",
  "/loesungen/psychologen",
  "/loesungen/traeger-qm",
  "/pilotprogramm",
  "/produkt/uebersicht",
  "/ueber-uns",
  "/ueber-uns/unsere-reise"
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
