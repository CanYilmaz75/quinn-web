import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

function allFiles(directory) {
  const absolute = path.join(root, directory);
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const relative = path.join(directory, entry.name);
    return entry.isDirectory() ? allFiles(relative) : [relative];
  });
}

test("public route surface is present", () => {
  for (const file of [
    "src/app/page.tsx",
    "src/app/en/page.tsx",
    "src/app/demo-buchen/page.tsx",
    "src/app/en/book-demo/page.tsx",
    "src/app/datenschutz/page.tsx",
    "src/app/en/privacy/page.tsx",
    "src/app/impressum/page.tsx",
    "src/app/en/legal-notice/page.tsx",
    "src/app/sitemap.ts",
    "src/app/robots.ts"
  ]) {
    assert.equal(fs.existsSync(path.join(root, file)), true, `${file} fehlt`);
  }
});

test("protected app and auth code are absent", () => {
  const sourceFiles = allFiles("src");
  assert.equal(sourceFiles.some((file) => file.includes("(protected)")), false);
  assert.equal(sourceFiles.some((file) => file.includes("(auth)")), false);
  assert.equal(sourceFiles.some((file) => file.includes("supabase")), false);
  assert.equal(sourceFiles.some((file) => file.includes("consultation")), false);

  const source = sourceFiles.filter((file) => /\.(ts|tsx|js|jsx)$/.test(file)).map(read).join("\n");
  for (const forbidden of ["SUPABASE_SERVICE_ROLE_KEY", "OPENAI_API_KEY", "@supabase/", "@/server/"]) {
    assert.equal(source.includes(forbidden), false, `verbotener interner Bezug: ${forbidden}`);
  }
});

test("Tailwind is wired through PostCSS for production CSS", () => {
  assert.equal(fs.existsSync(path.join(root, "postcss.config.js")), true, "PostCSS-Konfiguration fehlt");
  const postcss = read("postcss.config.js");
  assert.match(postcss, /tailwindcss/);
  assert.match(postcss, /autoprefixer/);
});

test("public package excludes clinical runtime dependencies", () => {
  const pkg = JSON.parse(read("package.json"));
  for (const dependency of ["@supabase/supabase-js", "@supabase/ssr", "openai", "pdf-lib", "@sentry/nextjs"]) {
    assert.equal(Boolean(pkg.dependencies?.[dependency]), false, `${dependency} darf nicht im Public Web liegen`);
  }
});

test("login crosses the repository and domain boundary explicitly", () => {
  const header = read("src/components/layout/site-header.tsx");
  const config = read("src/lib/public-config.ts");
  assert.match(header, /publicConfig\.loginUrl/);
  assert.doesNotMatch(header, /href=["']\/dashboard/);
  assert.match(config, /const appUrl = ["']https:\/\/app\.quinnhealth\.de["']/);
  assert.doesNotMatch(config, /NEXT_PUBLIC_APP_URL/);
  assert.match(config, /loginUrl:\s*appUrl/);
  assert.doesNotMatch(config, /loginUrl:\s*`[^`]*\/login/);
});

test("marketing forms use narrow server-side proxy routes without app secrets", () => {
  const demoRoute = read("src/app/api/demo-requests/route.ts");
  const newsletterRoute = read("src/app/api/newsletter/route.ts");
  const proxy = read("src/lib/marketing-proxy.ts");
  const demoForm = read("src/app/demo-buchen/demo-booking-tool.tsx");
  const englishDemoForm = read("src/app/en/book-demo/demo-booking-tool.tsx");
  const demoSchema = read("src/schemas/demo-request.ts");
  assert.match(demoRoute, /demoRequestSchema/);
  assert.match(newsletterRoute, /newsletterSignupSchema/);
  assert.match(proxy, /const appUrl = ["']https:\/\/app\.quinnhealth\.de["']/);
  assert.doesNotMatch(proxy, /QUINN_APP_URL|NEXT_PUBLIC_APP_URL/);
  assert.match(proxy, /maxMarketingPayloadBytes/);
  assert.match(proxy, /status: 413/);
  assert.match(proxy, /Response\.json\(\{ ok: true \}/);
  assert.doesNotMatch(proxy, /SERVICE_ROLE|SUPABASE|OPENAI/);
  for (const form of [demoForm, englishDemoForm]) {
    assert.match(form, /form\.interest\.trim\(\)\.length >= 5/);
    assert.match(form, /<select value=\{form\.interest\}/);
  }
  assert.match(demoSchema, /phone:.*optional/);
  assert.match(demoSchema, /teamSize:.*optional/);
  assert.match(demoSchema, /country:.*optional/);
});

test("Vercel Web Analytics is consent-gated and disclosed", () => {
  const pkg = JSON.parse(read("package.json"));
  const layout = read("src/app/layout.tsx");
  const analytics = read("src/components/analytics/consent-aware-analytics.tsx");
  const consent = read("src/components/consent/cookie-consent-manager.tsx");
  const legalCopy = [
    read("src/app/datenschutz/page.tsx"),
    read("src/app/cookies/page.tsx"),
    read("src/app/en/privacy/page.tsx"),
    read("src/app/en/cookies/page.tsx")
  ].join("\n");

  assert.equal(Boolean(pkg.dependencies?.["@vercel/analytics"]), true);
  assert.match(layout, /<ConsentAwareAnalytics \/>/);
  assert.match(analytics, /from ["']@vercel\/analytics\/next["']/);
  assert.match(analytics, /preferences\?\.analytics === true/);
  assert.match(analytics, /quinn:consent-updated/);
  assert.match(analytics, /beforeSend=\{\(event\) => \(hasAnalyticsConsent\(\) \? event : null\)\}/);
  assert.match(consent, /Vercel Web Analytics/);
  assert.match(legalCopy, /Vercel Web Analytics/);
});

test("newsletter popup is delayed, scroll-aware and disabled on conversion routes", () => {
  const layout = read("src/app/layout.tsx");
  const newsletter = read("src/components/newsletter/newsletter-signup.tsx");

  assert.equal((layout.match(/variant="popup"/g) ?? []).length, 1);
  assert.doesNotMatch(layout, /trigger="pricing"/);
  assert.match(newsletter, /POPUP_DELAY_MS = 50_000/);
  assert.match(newsletter, /SCROLL_THRESHOLD = 0\.55/);
  assert.match(newsletter, /"\/demo-buchen"/);
  assert.match(newsletter, /"\/en\/book-demo"/);
  assert.match(newsletter, /"\/preise"/);
  assert.match(newsletter, /"\/en\/pricing"/);
  assert.match(newsletter, /addEventListener\("scroll"/);
  assert.match(newsletter, /quinn:consent-updated/);
  assert.match(newsletter, /const consentIsSettled = hasStored\(CONSENT_KEY\)/);
  assert.match(newsletter, /consentUiIsVisible/);
  assert.match(newsletter, /quinn:consent-settings-opened/);
  assert.doesNotMatch(newsletter, /hasStored\(CONSENT_KEY\) \|\|/);
  assert.doesNotMatch(newsletter, /900|1400/);
});

test("cookie consent exposes only necessary and analytics categories", () => {
  const consent = read("src/components/consent/cookie-consent-manager.tsx");

  assert.match(consent, /key: "necessary"/);
  assert.match(consent, /key: "analytics"/);
  assert.doesNotMatch(consent, /key: "marketing"/);
  assert.doesNotMatch(consent, /key: "personalization"/);
  assert.doesNotMatch(consent, /key: "saleOrShare"/);
  assert.doesNotMatch(consent, /Marketing und Ads|CCPA\/CPRA|Sale or sharing under/);
});

test("P1 trust and conversion surfaces are founder-led, concrete and low-friction", () => {
  const homepage = read("src/app/page.tsx");
  const englishHomepage = read("src/app/en/page.tsx");
  const productProof = read("src/components/marketing/product-proof-flow.tsx");
  const about = read("src/app/ueber-uns/page.tsx");
  const englishAbout = read("src/app/en/about/page.tsx");
  const customers = read("src/app/kunden/page.tsx");
  const englishCustomers = read("src/app/en/customers/page.tsx");
  const header = read("src/components/layout/site-header.tsx");
  const footer = read("src/components/layout/site-footer.tsx");
  const conversionEvents = read("src/lib/consent-aware-events.ts");
  const trackedDemoLink = read("src/components/analytics/tracked-demo-link.tsx");
  const demoForms = [
    read("src/app/demo-buchen/demo-booking-tool.tsx"),
    read("src/app/en/book-demo/demo-booking-tool.tsx")
  ].join("\n");

  assert.match(about, /Can Yilmaz/);
  assert.match(englishAbout, /Can Yilmaz/);
  assert.doesNotMatch(`${about}\n${englishAbout}\n${demoForms}`, /Brand Guideline|brand guideline|teamMembers|\["MS", "AK", "JL", "TR"\]|unserem Team|our team/);
  assert.match(productProof, /Offener Punkt/);
  assert.match(productProof, /Open point/);
  assert.match(productProof, /Freigegeben durch Fachkraft/);
  assert.match(homepage, /ProductProofFlow/);
  assert.match(englishHomepage, /ProductProofFlow/);
  assert.match(customers, /Einsatzbereiche/);
  assert.match(englishCustomers, /Use cases/);
  assert.match(header, /label: "Einsatzbereiche"/);
  assert.match(header, /label: "Use cases"/);
  assert.match(footer, /\["Einsatzbereiche", "\/kunden"\]/);
  assert.match(footer, /\["Use cases", "\/en\/customers"\]/);
  assert.doesNotMatch(demoForms, /Telefonnummer|Phone number|Mitarbeiter|Employees|Land der Tätigkeit|Country of operation/);
  assert.match(demoForms, /15 Minuten|15-minute/);
  assert.match(demoForms, /keine echten Bewohner|no real resident/);
  assert.match(conversionEvents, /preferences\?\.analytics === true/);
  assert.match(conversionEvents, /demo_form_started/);
  assert.match(conversionEvents, /demo_form_submitted/);
  assert.doesNotMatch(conversionEvents, /email|organisation|firstName|lastName|interest/);
  assert.match(trackedDemoLink, /demo_cta_clicked/);
  assert.match(demoForms, /trackPublicConversion\("demo_form_started"/);
  assert.match(demoForms, /trackPublicConversion\("demo_form_submitted"/);
});

test("footer uses the canonical Quinn logo and gives newsletter its own calm row", () => {
  const footer = read("src/components/layout/site-footer.tsx");
  const newsletter = read("src/components/newsletter/newsletter-signup.tsx");

  assert.match(footer, /import Image from "next\/image"/);
  assert.match(footer, /src="\/quinn-logo\.svg"/);
  assert.doesNotMatch(footer, /QuinnWordmark/);
  assert.match(footer, /<NewsletterSignup locale=\{locale\} \/>[\s\S]*activeColumns\.map/);
  assert.match(newsletter, /lg:grid-cols-\[minmax\(0,1fr\)_minmax\(24rem,0\.9fr\)\]/);
  assert.match(newsletter, /data-newsletter-variant="footer"/);
  assert.match(newsletter, /IntersectionObserver/);
  assert.match(newsletter, /entry\.isIntersecting/);
  assert.doesNotMatch(newsletter, /variant === "footer"[\s\S]{0,200}rounded-\[1\.5rem\] border border-border bg-white p-5/);
});

test("P2 SEO, language and funnel measurement are complete", () => {
  const publicSite = read("src/content/public-site.ts");
  const publicConfig = read("src/lib/public-config.ts");
  const sitemap = read("src/app/sitemap.ts");
  const layout = read("src/app/layout.tsx");
  const structuredData = read("src/components/marketing/public-structured-data.tsx");
  const documentLanguage = read("src/components/analytics/document-language.tsx");
  const seoLanding = read("src/components/marketing/seo-landing-page.tsx");
  const homepage = read("src/app/page.tsx");
  const conversionEvents = read("src/lib/consent-aware-events.ts");
  const trackedDemoLink = read("src/components/analytics/tracked-demo-link.tsx");
  const publicDemoLinkTracker = read("src/components/analytics/public-demo-link-tracker.tsx");
  const demoForms = [
    read("src/app/demo-buchen/demo-booking-tool.tsx"),
    read("src/app/en/book-demo/demo-booking-tool.tsx")
  ].join("\n");

  assert.match(publicSite, /"x-default"/);
  assert.match(publicConfig, /siteUrl: "https:\/\/quinnhealth\.de"/);
  assert.doesNotMatch(publicSite, /quinn\.care/);
  assert.match(sitemap, /"x-default"/);
  assert.match(layout, /metadataBase: new URL\(siteUrl\)/);
  assert.match(layout, /<PublicStructuredData \/>/);
  assert.match(layout, /<DocumentLanguage \/>/);
  assert.match(documentLanguage, /pathname\.startsWith\("\/en"\) \? "en" : "de"/);
  assert.match(structuredData, /"@type": "Organization"/);
  assert.match(structuredData, /"@type": "WebSite"/);
  assert.match(structuredData, /buildSoftwareApplicationJsonLd/);
  assert.doesNotMatch(publicSite, /price: "0"/);
  assert.match(layout, /<PublicDemoLinkTracker \/>/);
  assert.match(conversionEvents, /demo_form_validation_error/);
  assert.match(trackedDemoLink, /data-quinn-tracked-demo="true"/);
  assert.match(publicDemoLinkTracker, /source: "public-page"/);
  assert.match(publicDemoLinkTracker, /demoPaths/);
  assert.match(demoForms, /onInvalidCapture=\{trackValidationError\}/);
  assert.match(demoForms, /status === "submitting"/);
  assert.doesNotMatch(demoForms, /disabled=\{!canSubmit/);
  assert.match(seoLanding, /locale === "de"/);
  assert.doesNotMatch(homepage, /Dokumentationslayer|Review-Status|Dokumentationsreview|Live Review/);

  const seoPairs = [...publicSite.matchAll(/\["(\/[^"\n]*|\/)", "(\/en[^"\n]*)"\]/g)].map((match) => [match[1], match[2]]);
  assert.equal(seoPairs.length, 21);
  for (const pair of seoPairs) {
    for (const slug of pair) {
      const pageFile = slug === "/" ? "src/app/page.tsx" : `src/app${slug}/page.tsx`;
      assert.match(read(pageFile), new RegExp(`buildSeoAlternates\\(["']${slug.replaceAll("/", "\\/")}["']\\)`), `${slug} hat keine eigenen Canonical-/Hreflang-Metadaten`);
    }
  }

  const germanPublicCopy = allFiles("src/app")
    .filter((file) => file.endsWith(".tsx") && !file.includes("/en/"))
    .map(read)
    .join("\n");
  assert.doesNotMatch(germanPublicCopy, /\b(?:fuer|Fuer|pruefbare|Uebersicht|geschuetzte|koennen|muessen)\b/);
});

test("adversarial UX tickets keep mobile conversion routes clear and contextual", () => {
  const globals = read("src/app/globals.css");
  const header = read("src/components/layout/site-header.tsx");
  const consent = read("src/components/consent/cookie-consent-manager.tsx");
  const demoIntent = read("src/lib/demo-intent.ts");
  const demoPages = [read("src/app/demo-buchen/page.tsx"), read("src/app/en/book-demo/page.tsx")].join("\n");
  const demoForms = [
    read("src/app/demo-buchen/demo-booking-tool.tsx"),
    read("src/app/en/book-demo/demo-booking-tool.tsx")
  ].join("\n");
  const homepages = [read("src/app/page.tsx"), read("src/app/en/page.tsx")].join("\n");
  const pricing = [read("src/app/preise/page.tsx"), read("src/app/en/pricing/page.tsx")].join("\n");
  const seoLanding = read("src/components/marketing/seo-landing-page.tsx");

  assert.match(globals, /quinn-container[\s\S]*min-w-0/);
  assert.match(header, /hidden group-open:block/);
  assert.match(header, /Prüfung & Qualität/);
  assert.doesNotMatch(header, /Review & Qualität/);

  assert.match(demoPages, /grid-cols-1/);
  assert.match(demoPages, /className="contents lg:block/);
  assert.match(demoPages, /order-2 min-w-0/);
  assert.match(demoForms, /initialInterest/);
  assert.match(demoForms, /\* Pflichtfelder|\* Required fields/);
  assert.match(demoIntent, /pilot-pricing/);
  assert.match(demoIntent, /operator-scope/);
  assert.match(seoLanding, /demoIntent/);
  assert.match(pricing, /intent=pilot-pricing/);
  assert.match(pricing, /intent=site-offer/);
  assert.match(pricing, /intent=operator-scope/);

  assert.match(consent, /max-h-\[calc\(100dvh-1\.5rem\)\]/);
  assert.match(consent, /overflow-y-auto/);
  assert.match(consent, /overscroll-contain/);
  assert.match(consent, /grid-cols-2/);

  assert.doesNotMatch(homepages, /15-Minuten-Gespräch buchen|Book a 15-minute call/);
  assert.doesNotMatch(homepages, /<Eyebrow>Warum Quinn<\/Eyebrow>|<Eyebrow>Why Quinn<\/Eyebrow>/);
  assert.doesNotMatch(pricing, /Pilotmetriken|Editierquote|Transferlogik|Rollout-Governance|Prüfung- und Qualitätsauswertung/);
});

test("post-fix UX review keeps mobile navigation explicit and German conversion copy plain", () => {
  const header = read("src/components/layout/site-header.tsx");
  const sisPage = read("src/app/anwendungen/sis-aufnahme/page.tsx");
  const seoLanding = read("src/components/marketing/seo-landing-page.tsx");
  const publicSite = read("src/content/public-site.ts");
  const pricingDe = read("src/app/preise/page.tsx");
  const pricingEn = read("src/app/en/pricing/page.tsx");
  const demoDe = read("src/app/demo-buchen/demo-booking-tool.tsx");

  assert.match(header, /Menu className="[^\"]*group-open:hidden/);
  assert.match(header, /X className="hidden[^\"]*group-open:block/);
  assert.match(header, /mobileNavOpen: "Menü öffnen"/);
  assert.match(header, /mobileNavClose: "Menü schließen"/);
  assert.match(header, /mobileNavOpen: "Open menu"/);
  assert.match(header, /mobileNavClose: "Close menu"/);
  assert.doesNotMatch(header, /summary aria-label=\{labels\.mobileNav\}/);

  assert.match(sisPage, /Messwerte im Pilot/);
  assert.match(sisPage, /Übernahme ins Fachsystem/);
  assert.doesNotMatch(sisPage, /Pilotmetriken|Editierquote|PDL\/QM-Prüfaufwand|Freigabe & Transfer/);
  assert.match(seoLanding, /metrics: "Messwerte im Pilot"/);
  assert.doesNotMatch(publicSite, /definieren Metriken/);
  assert.match(publicSite, /editRate: "Bearbeitungsaufwand"/);
  assert.match(publicSite, /reviewEffort: "Prüfaufwand für PDL\/QM"/);

  assert.match(pricingDe, /Kein öffentlicher Listenpreis:[\s\S]*Preisgespräch anfragen/);
  assert.match(pricingDe, /href="\/demo-buchen\?intent=pilot-pricing"/);
  assert.match(pricingDe, /quinn-container py-12 text-center sm:py-28/);
  assert.match(pricingDe, /grid min-w-0 grid-cols-1 gap-6/);
  assert.match(pricingEn, /No public list price:[\s\S]*Request pricing conversation/);
  assert.match(pricingEn, /href="\/en\/book-demo\?intent=pilot-pricing"/);
  assert.match(pricingEn, /quinn-container py-12 text-center sm:py-28/);
  assert.match(pricingEn, /grid min-w-0 grid-cols-1 gap-6/);

  assert.match(demoDe, /Welchen Ablauf möchten Sie ansehen\?/);
  assert.match(demoDe, /Ablauf auswählen/);
  assert.doesNotMatch(demoDe, /Welchen Workflow|Workflow auswählen|zu Ihrem Workflow passt|dokumentationsnaher Workflow/);
});

test("public legal pages use confirmed operator details without uncontrolled go-live placeholders", () => {
  const legalDetails = read("src/lib/legal-details.ts");
  const legalPages = [
    "src/app/impressum/page.tsx",
    "src/app/datenschutz/page.tsx",
    "src/app/agb/page.tsx",
    "src/app/avv/page.tsx",
    "src/app/en/legal-notice/page.tsx",
    "src/app/en/privacy/page.tsx",
    "src/app/en/terms/page.tsx",
    "src/app/en/dpa/page.tsx"
  ].map(read).join("\n");

  assert.match(legalDetails, /Can Yilmaz, handelnd unter Quinn Health/);
  assert.match(legalDetails, /can@quinnhealth\.de/);
  assert.match(legalDetails, /\+49 176 81748167/);
  assert.match(legalDetails, /Nicht im Handelsregister eingetragen/);
  assert.match(legalDetails, /ladungsfähige Geschäftsanschrift wird derzeit festgelegt/);
  assert.doesNotMatch(legalPages, /quinn\.example/i);
  assert.doesNotMatch(legalPages, /\[(?:Quinn|kontakt|datenschutz|E-Mail|Strasse|Straße|Street|Enter|enter)/i);
  assert.doesNotMatch(legalPages, /before go-live|vor Go-live|before productive use|vor produktiver Nutzung/i);
});

test("sitemap explicitly covers every public page route", () => {
  const sitemap = read("src/app/sitemap.ts");
  const pageFiles = allFiles("src/app").filter((file) => file.endsWith("/page.tsx") || file === "src/app/page.tsx");
  const routes = pageFiles
    .filter((file) => !file.includes("(protected)") && !file.includes("(auth)") && !file.includes("/api/"))
    .map((file) => {
      const relative = file.slice("src/app".length, -"/page.tsx".length);
      return relative || "/";
    });

  assert.equal(routes.length, 44);
  for (const route of routes) {
    assert.equal(sitemap.includes(`"${route}"`), true, `${route} fehlt in der Sitemap`);
  }
});
