import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = p => readFileSync(new URL('../' + p, import.meta.url), 'utf8');

test('public landing content is not hidden behind a JavaScript-only reveal boundary', () => {
  assert.equal(existsSync(new URL('../src/app/loading.tsx', import.meta.url)), false);
  const proof = read('src/components/marketing/multilingual-proof.tsx');
  assert.match(proof, /defaultChecked/);
  assert.match(proof, /<fieldset/);
});

test('homepage explains a scoped introduction before a demo, in both locales', () => {
  const page = read('src/components/marketing/equal-pillar-landing.tsx');
  for (const text of ['Ein Einstieg, der zu Ihrem Team passt', 'A start that fits your team', 'Ihren Ablauf verstehen', 'Understand your workflow', 'Mit einem fiktiven Fall beginnen', 'Start with a fictional case', 'Den Einsatz gemeinsam abgrenzen', 'Agree the scope together']) assert.ok(page.includes(text), text);
  assert.match(page, /aria-labelledby="introduction-title"/);
  assert.match(page, /<ol role="list" className="taste-introduction-list"/);
  assert.match(page, /introductionItems\.map/);
  assert.match(page, /Keine echten Gesundheitsdaten/);
  assert.match(page, /No real health data/);
});

test('care proof uses complete care-note sections and never fills source gaps', () => {
  const proof = read('src/components/marketing/multilingual-proof.tsx');
  for (const field of ['Anlass', 'Beobachtung', 'Angaben des Bewohners', 'Durchgeführte Maßnahmen', 'Reaktion / Verlauf', 'Weiteres Vorgehen']) assert.ok(proof.includes(field), field);
  assert.match(proof, /Nicht dokumentiert/);
  assert.match(proof, /careSections\.map/);
  assert.match(proof, /Keine Diagnose/);
  assert.match(proof, /No diagnosis/);
  assert.match(proof, /Fiktive Aussage einer Pflegefachkraft/);
  assert.match(proof, /Fictional statement by a care professional/);
  assert.match(proof, /<figcaption>\{t\.careSource\}<\/figcaption>/);
});

test('equal pillars have short concrete headings; multilingual use remains available, not exclusive', () => {
  const page = read('src/components/marketing/equal-pillar-landing.tsx');
  assert.match(page, /title: "Dokumentation in der Pflege"/);
  assert.match(page, /title: "Dokumentation in der Medizin"/);
  assert.match(page, /Quinn unterstützt Pflegekräfte und medizinische Teams/);
  assert.match(page, /Quinn helps nursing care and medical teams/);
  assert.match(page, /In der eigenen Sprache sprechen\. Auf Deutsch dokumentieren\./);
});

 test('medical proof structures only statements in its synthetic source', () => {
  const proof = read('src/components/marketing/multilingual-proof.tsx');
  for (const text of ['dry cough for three days, worse at night', 'taken no medication', 'Aktuelle Beschwerden', 'Zeitlicher Verlauf', 'Bisherige Selbstmedikation', 'Fieber wurde nicht erfragt.']) assert.ok(proof.includes(text), text);
  assert.match(proof, /medicalSections\.map/);
  assert.doesNotMatch(proof, /observationText:|measureText:|medicalText:|medicalMissing:/);
});
