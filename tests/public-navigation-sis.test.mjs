import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";

const require = createRequire(import.meta.url);
const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
function load(file, mocks = {}) {
  const compiledModule = { exports: {} };
  vm.runInNewContext(ts.transpileModule(read(file), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText, {
    module: compiledModule, exports: compiledModule.exports, URLSearchParams,
    require: (id) => id in mocks ? mocks[id] : id.startsWith("@/") ? load(`src/${id.slice(2)}.ts`, mocks) : require(id)
  });
  return compiledModule.exports;
}
function nodes(element) {
  if (!element || typeof element !== "object") return [];
  return [element, ...[element.props?.children].flat(Infinity).flatMap(nodes)];
}

test("language targets use every existing route pair in both directions", () => {
  const { publicSeoPairs } = load("src/content/public-site.ts");
  const { buildLanguageHref } = load("src/lib/public-language.ts");
  for (const [de, en] of publicSeoPairs) {
    for (const current of [de, en]) {
      assert.equal(buildLanguageHref(current, "de"), de);
      assert.equal(buildLanguageHref(current, "en"), en);
    }
  }
  assert.equal(buildLanguageHref("/hlth", "en"), "/en");
  assert.equal(buildLanguageHref("/unknown", "de"), "/");
});

test("language switch preserves only controlled demo context", () => {
  const { buildLanguageHref } = load("src/lib/public-language.ts");
  for (const [path, locale, target] of [["/demo-buchen", "en", "/en/book-demo"], ["/en/book-demo", "de", "/demo-buchen"]]) {
    for (const intent of ["sis", "pilot-pricing", "site-offer", "operator-scope"]) {
      assert.equal(buildLanguageHref(path, locale, { intent, segment: "care" }), `${target}?intent=${intent}&segment=care`);
    }
    assert.equal(buildLanguageHref(path, locale, { intent: "unknown", segment: "bogus", email: "private" }), target);
    assert.equal(buildLanguageHref(path, locale, { intent: "sis", segment: "general" }), `${target}?intent=sis&segment=general`);
  }
  assert.equal(buildLanguageHref("/loesungen/pflege", "en", { intent: "sis", segment: "care" }), "/en/solutions/nursing-care");
});

test("shared desktop/mobile switch renders counterpart links", () => {
  const source = read("src/components/layout/site-header.tsx");
  assert.match(source, /import \{ LanguageSwitch \} from/);
  assert.match(source, /<LanguageSwitch locale=\{locale\} demoContext=\{demoContext\}/);
  const { LanguageSwitch } = load("src/components/layout/language-switch.tsx", {
    "next/navigation": { usePathname: () => "/loesungen/pflege" },
    "next/link": { default: "a" }
  });
  const links = nodes(LanguageSwitch({ locale: "de" })).filter(n => n.type === "a");
  assert.equal(links[0].props.href, "/loesungen/pflege");
  assert.equal(links[1].props.href, "/en/solutions/nursing-care");
});

for (const [route, locale] of [["demo-buchen", "de"], ["en/book-demo", "en"]]) {
  test(`${locale}: SIS defaults to care, explicit audience wins, generic stays unset`, async () => {
    const page = load(`src/app/${route}/page.tsx`, {
      "@/components/layout/site-header": { SiteHeader: "header" },
      "@/components/layout/site-footer": { SiteFooter: "footer" },
      "./demo-booking-tool": { DemoBookingTool: "demo", EnglishDemoBookingTool: "demo" }
    }).default;
    for (const [params, expected] of [[{ intent: "sis" }, "care"], [{ intent: "sis", segment: "medicine" }, "medicine"], [{ intent: "sis", segment: "general" }, ""], [{}, ""], [{ intent: "unknown" }, ""], [{ intent: "pilot-pricing" }, ""], [{ segment: "medicine" }, "medicine"]]) {
      const tree = await page({ searchParams: Promise.resolve(params) });
      const form = nodes(tree).find(n => n.type === "demo");
      assert.equal(form.props.initialSegment, expected);
      if (params.intent === "sis") assert.equal(form.props.initialInterest, locale === "de" ? "Pflegeaufnahme und SIS" : "Care intake and SIS");
      const header = nodes(tree).find(n => n.type === "header");
      assert.equal(header.props.demoContext.segment, expected || "general");
    }
    const form = read(`src/app/${route}/demo-booking-tool.tsx`);
    assert.match(form, /value=\{form.segment\} onChange=/);
    assert.doesNotMatch(form, /<select name="segment"[^>]*(?:required|disabled)/);
  });
}

test("SIS popup does not arm effects or render even with stale visible state; footer remains", () => {
  for (const pathname of ["/anwendungen/sis-aufnahme", "/en/use-cases/sis-intake"]) {
    const effects = [];
    const { NewsletterSignup } = load("src/components/newsletter/newsletter-signup.tsx", {
      react: { useState: () => [true, () => {}], useMemo: (fn) => fn(), useEffect: (fn) => effects.push(fn) },
      "next/navigation": { usePathname: () => pathname },
      "@/components/ui/button": { Button: "button" },
      "@/components/ui/input": { Input: "input" },
      "@/lib/utils": { cn: (...values) => values.join(" ") }
    });
    assert.equal(NewsletterSignup({ variant: "popup" }), null);
    // Arming would access window/localStorage, neither exists in this test.
    assert.doesNotThrow(() => effects[0]());
    const footer = NewsletterSignup({ variant: "footer" });
    assert.equal(footer.props["data-newsletter-variant"], "footer");
  }
});

test("SIS routes suppress timer/scroll popup and stale visibility, not footer signup", () => {
  const source = read("src/components/newsletter/newsletter-signup.tsx");
  const excluded = source.match(/const POPUP_EXCLUDED_PATHS = new Set\((\[[\s\S]*?\])\)/);
  assert.ok(excluded);
  const paths = JSON.parse(excluded[1]);
  for (const path of ["/anwendungen/sis-aufnahme", "/en/use-cases/sis-intake", "/demo-buchen", "/en/book-demo", "/preise", "/en/pricing"]) assert.ok(paths.includes(path), path);
  assert.ok(!paths.includes("/"));
  assert.match(source, /variant === "popup" && POPUP_EXCLUDED_PATHS.has\(pathname\)/);
  assert.match(source, /!POPUP_EXCLUDED_PATHS.has\(window.location.pathname\)/);
  assert.match(read("src/components/layout/site-footer.tsx"), /<NewsletterSignup locale=\{locale\} \/>/);
});
