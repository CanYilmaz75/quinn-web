import type { Metadata } from "next";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildSeoAlternates } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Updates | Quinn",
  description: "Produktupdates von Quinn: verständliche Verbesserungen für Dokumentation, Pilotablauf, fachliche Prüfung und Übergabe ins bestehende System.",
  alternates: buildSeoAlternates("/updates")
};

const updateBlocks = [
  {
    label: "Pilotprogramm",
    title: "Ablauf, Rollen und Nutzen klarer erklärt",
    text:
      "Pflegeeinrichtungen sehen jetzt auf einen Blick, wie ein 4–6-wöchiger Pilot abläuft, welche Teams beteiligt sind und welche Ergebnisse sie für ihre eigene Entscheidung erhalten."
  },
  {
    label: "Auswertung",
    title: "Messbare Entlastung statt pauschaler Versprechen",
    text:
      "Quinn betrachtet gemeinsam mit der Einrichtung Zeit pro Fall, Bearbeitungsaufwand, Vollständigkeit und Prüfaufwand. So wird sichtbar, wo weniger Nacharbeit entsteht und wo der Ablauf noch angepasst werden muss."
  },
  {
    label: "Öffentliche Seiten",
    title: "Schneller zu den relevanten Informationen",
    text:
      "Produkt, Einsatzbereiche, Pilotprogramm, Preise und Demo sind klarer gegliedert. Einrichtungen finden Nutzen, Grenzen und nächste Schritte ohne technische oder interne Projektsprache."
  },
  {
    label: "Dokumentationsablauf",
    title: "Von der Erfassung bis zur fachlichen Freigabe",
    text:
      "Die Seiten erklären den Quinn-Ablauf konkreter: Gespräch oder Notiz erfassen, prüfbaren Entwurf erhalten, offene Punkte klären und den freigegebenen Text ins bestehende Fachsystem übertragen."
  },
  {
    label: "Sprache & Orientierung",
    title: "Quinn ist auf Deutsch und Englisch nachvollziehbar",
    text:
      "Die wichtigsten Inhalte und Wege stehen in beiden Sprachen zur Verfügung. Navigation und Seitenstruktur bleiben dabei konsistent und auf Pflege- und Gesundheitsteams ausgerichtet."
  }
];

export default function UpdatesPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Updates</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight tracking-[-0.03em] sm:text-[58px]">
          Was sich bei Quinn für Pflegeeinrichtungen verbessert.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Hier zeigen wir relevante Produktänderungen aus Sicht der Einrichtungen: verständlich, konkret und mit Blick auf Dokumentationsalltag, fachliche Prüfung und Einführung im Team.
        </p>
      </section>
      <section className="border-y border-[#E8E8EC] bg-[#FBFAF6] py-16">
        <div className="quinn-container">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-6 shadow-subtle sm:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">Aktuell</p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Mehr Klarheit darüber, wie Quinn im Pflegealltag geprüft werden kann.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-secondary-foreground">
              Pilotprogramm und Auswertung zeigen jetzt aus Einrichtungssicht, welcher Ablauf getestet wird, welche Entlastung sichtbar werden kann und welche Grenzen vor einer breiteren Nutzung geklärt sein müssen.
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
