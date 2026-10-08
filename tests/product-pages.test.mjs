import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";
const require = createRequire(import.meta.url);
const read = p => fs.readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
test("textmark-only website explicitly opts out of a missing favicon request", () => {
  assert.match(read("src/app/layout.tsx"), /icons:\s*\{\s*icon:\s*"data:,"\s*\}/);
});
const pairs = [["/produkt/uebersicht", "/en/product/overview", "overview"], ["/produkt/pruefung-qualitaet", "/en/product/review-quality", "review"]];
function load(file) {
  const exports = {};
  vm.runInNewContext(ts.transpileModule(read(file), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText, { exports, require: id => {
    if (id === "next/link") return { default: "a" };
    if (id.includes("site-header")) return { SiteHeader: "header" };
    if (id.includes("site-footer")) return { SiteFooter: "footer" };
    if (id.includes("tracked-demo-link")) return { TrackedDemoLink: "a" };
    if (id.startsWith("@/")) { const stem = `src/${id.slice(2)}`; return load(fs.existsSync(new URL(`../${stem}.tsx`, import.meta.url)) ? `${stem}.tsx` : `${stem}.ts`); }
    return require(id);
  }});
  return exports;
}
function nodes(el) { if (!el || typeof el !== "object") return []; if (typeof el.type === "function") return nodes(el.type(el.props)); return [el, ...[el.props?.children].flat(Infinity).flatMap(nodes)]; }
function text(el) { if (el == null || typeof el === "boolean") return ""; if (typeof el !== "object") return String(el); if (Array.isArray(el)) return el.map(text).join(" "); if (typeof el.type === "function") return text(el.type(el.props)); return text(el.props?.children); }
for (const [de, en, kind] of pairs) {
  test(`${kind}: real bilingual pages share structure, responsible copy and local CTAs`, () => {
    const trees = [de, en].map(path => load(`src/app${path}/page.tsx`).default());
    const signatures = trees.map(tree => nodes(tree).map(n => [n.type, n.props.className]));
    assert.deepEqual(signatures[0], signatures[1]);
    trees.forEach((tree, i) => {
      const all = nodes(tree), copy = text(tree);
      assert.equal(all.filter(n => n.type === "h1").length, 1);
      assert.match(copy, i ? /nursing care and medicine/ : /Pflege und Medizin/);
      assert.match(copy, i ? /physician/ : /ärztlich/);
      assert.match(copy, i ? /manual/i : /manuell/);
      assert.match(copy, i ? /does not replace/ : /ersetzt keine/);
      assert.doesNotMatch(copy, /DSGVO-sicher|GDPR-compliant|rechtssicher|guaranteed|garantiert|autonomous diagnosis/i);
      assert.equal(all.filter(n => ["button", "input", "textarea", "form"].includes(n.type)).length, 0);
      const hrefs = all.filter(n => n.type === "a").map(n => n.props.href);
      assert.ok(hrefs.includes(i ? "/en/book-demo" : "/demo-buchen"));
      assert.ok(hrefs.every(h => h.startsWith("/") || h.startsWith("#")));
      assert.ok(hrefs.filter(h => h.startsWith("/")).every(h => i ? h.startsWith("/en/") : !h.startsWith("/en/")));
      assert.ok(!hrefs.some(h => /signup|app\.quinn|segment=|intent=/.test(h)));
      if (kind === "overview") {
        assert.ok(all.some(n => n.props.id === "review"));
        assert.ok(hrefs.includes(i ? pairs[1][1] : pairs[1][0]));
        for (const route of i ? ["/en/solutions/nursing-care", "/en/solutions/medicine"] : ["/loesungen/pflege", "/loesungen/medizin"]) assert.ok(hrefs.includes(route));
      } else {
        assert.ok(!hrefs.includes(i ? en : de), "review page must not link to itself");
        for (const term of i ? [/source/i, /draft/i, /missing/i, /edit/i, /responsib/i] : [/Quelle/, /Entwurf/, /fehlend/i, /bearbeiten/i, /verantwort/i]) assert.match(copy, term);
      }
    });
  });
}
test("header, footer and medicine hub link to dedicated review routes, never stale anchors", () => {
  for (const file of ["src/components/layout/site-header.tsx", "src/components/layout/site-footer.tsx", "src/components/marketing/solution-hub.tsx"]) {
    const source = read(file);
    for (const route of pairs[1].slice(0, 2)) assert.ok(source.includes(route));
    assert.doesNotMatch(source, /uebersicht#review|overview#review/);
  }
});
test("all product metadata and alternates are explicit and production-bound", () => {
  const content = load("src/content/public-site.ts");
  for (const [de, en] of pairs) for (const path of [de, en]) {
    const metadata = load(`src/app${path}/page.tsx`).metadata;
    assert.ok(metadata.title && metadata.description);
    assert.equal(metadata.alternates.canonical, `https://quinnhealth.de${path}`);
    assert.equal(metadata.alternates.languages.de, `https://quinnhealth.de${de}`);
    assert.equal(metadata.alternates.languages.en, `https://quinnhealth.de${en}`);
    assert.equal(metadata.title, content.publicMetadataPages[path].title);
  }
  assert.notEqual(load(`src/app${pairs[0][0]}/page.tsx`).metadata.title, load(`src/app${pairs[1][0]}/page.tsx`).metadata.title);
});
