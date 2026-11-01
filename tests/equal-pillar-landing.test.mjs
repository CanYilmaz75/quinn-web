import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = (p) => readFileSync(new URL(`../${p}`, import.meta.url), 'utf8');

test('DE and EN share one editorial landing with the exact two-line headline', () => {
  for (const path of ['src/app/page.tsx', 'src/app/en/page.tsx']) assert.match(read(path), /EqualPillarLanding/);
  const source = read('src/components/marketing/equal-pillar-landing.tsx');
  for (const line of ['Weniger Zeit für Dokumentation', 'Mehr Zeit für Menschen', 'Less time on documentation', 'More time for people']) assert.ok(source.includes(line));
  assert.match(source, /<h1[^>]*>[\s\S]*?<span[^>]*>\{t\.headline\[0\]\}<\/span>[\s\S]*?<span[^>]*>\{t\.headline\[1\]\}<\/span>/);
  assert.doesNotMatch(source, /uppercase|ProductMockup|Entlassplanung/);
});

test('both synthetic cases retain source, draft, gap, responsible review and manual handoff', () => {
  const source = read('src/components/marketing/product-proof-flow.tsx');
  for (const key of ['input:', 'draft:', 'open:', 'review:', 'handoff:']) assert.equal([...source.matchAll(new RegExp(`^\\s+${key}`, 'gm'))].length, 4);
  assert.match(source, /synthetisch/);
  assert.match(source, /synthetic/);
  assert.match(source, /ärztlich/);
  assert.match(source, /physician/);
  assert.doesNotMatch(source, /Tochter|daughter/);
});

test('equal direct navigation, segmented CTAs and real hub routes', () => {
  const header = read('src/components/layout/site-header.tsx');
  assert.match(header, /pillarLinks/);
  for (const route of ['loesungen/pflege', 'loesungen/medizin', 'en/solutions/nursing-care', 'en/solutions/medicine']) {
    assert.ok(existsSync(new URL(`../src/app/${route}/page.tsx`, import.meta.url)));
    assert.ok(header.includes(`/${route}`));
  }
  assert.match(read('src/components/marketing/pillar-links.tsx'), /\?segment=\$\{segment\}/);
});

test('hero copy is exact, explicitly line-broken and equal in both locales', () => {
  const source = read('src/components/marketing/equal-pillar-landing.tsx');
  assert.match(source, /headline: \["Weniger Zeit für Dokumentation", "Mehr Zeit für Menschen"\]/);
  assert.match(source, /headline: \["Less time on documentation", "More time for people"\]/);
  assert.equal((source.match(/className="block whitespace-nowrap/g) ?? []).length, 2);
  assert.match(source, /Pflegekräfte und medizinische Teams/);
  assert.match(source, /nursing care and medical teams/);
  assert.match(source, /href="#mehrsprachig"/);
  assert.match(source, /id="bereiche"/);
  assert.match(source, /className="taste-pillars"/);
  assert.match(read('src/app/globals.css'), /\.taste-pillars\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(source, /<SegmentDemoLink locale=\{locale\} segment="care"/);
  assert.match(source, /<SegmentDemoLink locale=\{locale\} segment="medicine"/);
});

test('all editorial header and hub destinations exist, including preserved specialist pages', () => {
  const source = ['src/components/layout/site-header.tsx', 'src/components/marketing/solution-hub.tsx'].map(read).join('\n');
  const destinations = [...source.matchAll(/"(\/(?:en\/)?[a-z][a-z0-9/-]*)(?:#[a-z-]+)?"/g)].map((match) => match[1]);
  for (const route of new Set(destinations)) assert.ok(existsSync(new URL(`../src/app${route}/page.tsx`, import.meta.url)), route);
  for (const slug of ['pflegeheime', 'ambulante-pflege', 'traeger-qm', 'psychologen']) assert.ok(source.includes(`/loesungen/${slug}`));
  for (const slug of ['sis-aufnahme', 'sprachdokumentation-pflege']) assert.ok(source.includes(`/anwendungen/${slug}`));
  assert.equal((read('src/components/layout/site-header.tsx').match(/pillarLinks\[locale\]\.map/g) ?? []).length, 2);
});

test('proof illustrations keep manual handoff and domain-specific responsibility', () => {
  const source = read('src/components/marketing/product-proof-flow.tsx');
  assert.match(source, /keine Live-Demo/);
  assert.match(source, /not a live demo/);
  assert.match(source, /Keine automatische PVS-Schnittstelle/);
  assert.match(source, /No automatic practice-system interface/);
  assert.match(source, /Pflegefachkraft/);
  assert.match(source, /verified physician/);
  assert.match(source, /data-proof-document/);
  assert.match(source, /segment \? \[segment\] : \["care", "medicine"\]/);
});

test('examples show a conversation beside a document rather than a five-step checklist', () => {
  const source = read('src/components/marketing/product-proof-flow.tsx');
  assert.match(source, /<blockquote/);
  assert.match(source, /<dl/);
  assert.match(source, /data-proof-document/);
  assert.match(source, /Fiktives Beispiel/);
  assert.doesNotMatch(source, /<ol|padStart|Synthetischer Beispielfall|Menschliche Prüfung/);
  assert.match(source, /Noch zu klären/);
});

test('hub demo links retain attribution instead of masquerading as homepage clicks', () => {
  assert.match(read('src/components/marketing/pillar-links.tsx'), /source=\{source\}/);
  assert.match(read('src/components/marketing/solution-hub.tsx'), /source="seo-landing"/);
});
