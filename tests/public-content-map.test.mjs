import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import ts from "typescript";
import vm from "node:vm";

const read = (p) => fs.readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
const source = read("src/content/public-site.ts");
const configSource = read("src/lib/public-config.ts");
const siteUrl = configSource.match(/siteUrl:\s*"([^"]+)"/)[1];
const compiledModule = { exports: {} };
vm.runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, {
  exports: compiledModule.exports,
  require: () => ({ publicConfig: { siteUrl } })
});
const content = compiledModule.exports;

test("shared metadata names nursing and medicine without erasing care SEO", () => {
  for (const slug of ["/", "/pilotprogramm", "/preise", "/forschung", "/updates"]) {
    const de = content.publicSitePages.find((p) => p.slug === slug);
    assert.match(`${de.title} ${de.description}`, /Pflege/);
    assert.match(`${de.title} ${de.description}`, /Medizin|medizin/);
  }
  for (const slug of ["/en", "/en/pilot-program", "/en/pricing", "/en/research", "/en/updates"]) {
    const en = content.publicSitePages.find((p) => p.slug === slug);
    assert.match(`${en.title} ${en.description}`, /nursing/i);
    assert.match(`${en.title} ${en.description}`, /medical|medicine/i);
  }
  assert.equal(content.publicSitePages.find((p) => p.slug === "/anwendungen/sis-aufnahme").primaryKeyword, "SIS Dokumentation KI");
  assert.equal(content.publicSitePages.find((p) => p.slug === "/anwendungen/sprachdokumentation-pflege").primaryKeyword, "KI-basierte Sprachdokumentation in der Pflege");
});

test("SEO pairs are unique, preserve existing routes and include nursing hub", () => {
  assert.equal(content.publicSeoPairs.length, 23);
  const slugs = content.publicSeoPairs.flat();
  assert.equal(new Set(slugs).size, slugs.length);
  for (const pair of content.publicSeoPairs) {
    for (const slug of pair) {
      const alternates = content.buildSeoAlternates(slug);
      assert.equal(alternates.canonical, `${siteUrl}${slug}`);
      assert.equal(alternates.languages.de, `${siteUrl}${pair[0]}`);
      assert.equal(alternates.languages.en, `${siteUrl}${pair[1]}`);
      assert.equal(alternates.languages["x-default"], `${siteUrl}${pair[0]}`);
    }
  }
  for (const slug of ["/loesungen/pflege", "/en/solutions/nursing-care", "/loesungen/medizin", "/en/solutions/medicine", "/loesungen/psychologen", "/anwendungen/sis-aufnahme"]) assert.ok(slugs.includes(slug));
});

test("software schema promises drafts and review, not free offers or automatic integration", () => {
  for (const locale of ["de", "en"]) {
    const schema = content.buildSoftwareApplicationJsonLd(locale);
    assert.equal(schema.url, siteUrl);
    assert.equal(schema["@type"], "SoftwareApplication");
    assert.equal("offers" in schema, false);
    assert.equal("aggregateRating" in schema, false);
    assert.match(schema.description, locale === "de" ? /Pflege und Medizin/ : /nursing and medicine/);
    assert.doesNotMatch(JSON.stringify(schema), /automatische Übernahme|automatic integration|price/);
  }
});

test("evaluation and use-case pages explicitly include both audiences", () => {
  for (const path of ["forschung", "kunden"]) assert.match(read(`src/app/${path}/page.tsx`), /Pflege und Medizin/);
  for (const path of ["research", "customers"]) assert.match(read(`src/app/en/${path}/page.tsx`), /nursing and medicine/);
});
