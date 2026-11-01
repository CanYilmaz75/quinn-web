# Public landingpage promotion

## Target and source

Can approved promotion to the public website `https://quinnhealth.de`. The Vercel project is `quinn-pws` (`prj_d1ueKdErJki7UOFA34mXSfrnZz2f`), linked to `CanYilmaz75/quinn-web`, production branch `main`.

Promoted homepage source: `CanYilmaz75/quinn-web-staging` at `81ffb80d89dd913116ce97f08bc000fb3c2a4644`. Only the shared DE/EN homepage, its static multilingual examples, locally hosted hero image and homepage CSS were ported. Existing product proof components remain for their hub consumers. No staging banner, receipt storage, synthetic email restriction, noindex or Blob dependency was copied.

## Product and design boundaries

Approved two-line hero and typographic Quinn branding are retained. General documentation assistance leads; multilingual capture remains optional and subject to suitability assessment. Pflege and Medizin examples stay equal, fictional and source-bound. Unknown information stays unknown; review responsibility and manual Fachsystem handoff remain explicit. Native example selectors and FAQ work without JavaScript.

Production header/footer, login destination, demo/newsletter APIs, app proxy, consent-gated analytics, SEO metadata, robots and sitemap remain unchanged. Homepage anchor offsets account for the existing sticky production header.

## Hero asset provenance

`public/images/healthcare-dictation.webp` is the previously approved, user-supplied staging hero, now included under the user's public-promotion instruction. It depicts a person in blue scrubs speaking into a smartphone and is labelled as an illustrative photo. No third-party authorship or licence is asserted; production image rights are not independently verified. The adjacent draft is explicitly fictional and unrelated to the pictured person.

## Dependency maintenance

Next.js and matching ESLint config were updated within the existing major version to address the critical advisory affecting the previous installed Next version. Compatible audit fixes were applied without `--force`. Zod 3 remains in place to preserve the current production form validation contract; its audit finding is reported separately, not hidden by weakening CI.

## Verification

Tests protect the exact hero, equal responsive pillars, fictional source/draft structure, concrete unknowns, care-source attribution, responsible review, manual handoff and unchanged production boundaries. Local tests, lint, typecheck and production build plus deployed DE/EN desktop/mobile, consent, menu, FAQ, example and demo-context checks are required before the release is reported complete. Release evidence is stored outside the repository.
