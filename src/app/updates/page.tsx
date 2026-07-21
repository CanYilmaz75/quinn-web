import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildSeoAlternates } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Updates | Quinn",
  description: "Produktupdates von Quinn: Sprint 3, Pricing, Forschung, Schema, Hreflang und Sitemap für die öffentliche Website.",
  alternates: buildSeoAlternates("/updates")
};

const updateBlocks = [
  {
    label: "Sprint 3 · Pricing",
    title: "Preise nach Pilot-, Einrichtungs- und Trägerlogik geschärft",
    text:
      "Preise laufen vorerst über Beratung: Die Pricingseite erklärt jetzt Pilot Einrichtung, Einrichtung / Standort und Träger & Verbünde. Statt öffentlichem Standardtarif führt Quinn über Preisgespräch, Pilotbudget und messbare Pilotmetriken."
  },
  {
    label: "Sprint 3 · Forschung",
    title: "Forschung zeigt Pilotmetriken und Seed-ready Evidenz",
    text:
      "Die Forschungseite macht sichtbar, was Quinn im Pilot messen muss: Zeit pro Fall, Editierquote, Vollständigkeit, PDL/QM-Review-Aufwand und Akzeptanz im Team — ohne behauptete Ergebnisse."
  },
  {
    label: "Sprint 3 · SEO Technicals",
    title: "Schema, Hreflang, Sitemap und Robots ergänzt",
    text:
      "Die öffentlichen Kernseiten erhalten bessere technische SEO-Signale: kanonische Alternates, Hreflang-Paare, JSON-LD für FAQ/Software-Kontext, Sitemap und Robots-Verweis."
  },
  {
    label: "Sprint 2 · Wedge-Seiten",
    title: "SIS, Sprachdokumentation und Pilotprogramm vertieft",
    text:
      "Die wichtigsten SEO-/Conversion-Seiten erklären Quinn jetzt konkreter: Aufnahmegespräch, prüfbarer Entwurf, Lückenhinweise, fachliche Freigabe und Transfer ins bestehende Fachsystem."
  },
  {
    label: "Sprint 1 · Public Site",
    title: "Navigation, Marke und Seitenstruktur geschärft",
    text:
      "Englische Landingpage und Sprachwechsel, Newsletter-Erfassung an drei relevanten Stellen und Produktstruktur sind dokumentiert. Der Dokumentationsflow bleibt prüfbar: Header, Footer und öffentliche Seiten sind stärker auf Quinn als sichtbare Marke ausgerichtet."
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Updates</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Produktentwicklung, ruhig und nachvollziehbar.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Hier sammeln wir wichtige Änderungen an Quinn: keine Hype-Meldungen, sondern relevante Verbesserungen für Website, Pilotfähigkeit, Research und Launch-Vorbereitung.
        </p>
      </section>
      <section className="border-y border-[#E8E8EC] bg-[#FBFAF6] py-16">
        <div className="quinn-container">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-6 shadow-subtle sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Aktueller Update-Block</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Sprint 3 macht Quinn pre-send stärker: Pricing, Forschung und technische SEO-Basis.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-secondary-foreground">
              Der aktuelle Block schärft den Fundraising- und Pilot-Case: klare Preislogik, nachvollziehbare Evidence-Story und bessere Auffindbarkeit für Kernseiten.
            </p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {updateBlocks.map((update) => (
              <article key={update.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E6B72]">{update.label}</p>
                <h3 className="mt-3 text-xl font-semibold">{update.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{update.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
