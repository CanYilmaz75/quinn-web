import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "SIS-Aufnahme mit KI vorbereiten | Quinn",
  description: "SIS-Aufnahme mit KI vorbereiten: Quinn hilft Pflegeeinrichtungen, Aufnahmegespräche und Notizen in prüfbare Entwürfe zu strukturieren."
};

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Wie lange dauert der Weg vom Gespräch zum prüfbaren SIS-nahen Entwurf?" },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie stark muss das Team den Entwurf verändern, bevor er fachlich passt?" },
  { label: pilotMetricsByLocale.de.completeness, description: "Welche Ressourcen, Risiken, Wünsche oder offenen Angaben fehlen noch?" },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "Wie viel PDL/QM-Review-Aufwand entsteht vor und nach Quinn?" }
];

export default function SisAufnahmePage() {
  return (
    <SeoLandingPage
      eyebrow="SIS-Aufnahme"
      title="SIS-Aufnahme mit KI vorbereiten: aus Gespräch und Notizen wird ein prüfbarer Entwurf"
      description="Quinn unterstützt den ersten Schritt vor der Bewohnerakte: Aufnahmegespräch, Notizen und Audio werden zu einem strukturierten Entwurf mit Lückenhinweisen und menschlicher Freigabe."
      primaryCta="SIS-Demo anfragen"
      secondaryCta="Pilotprogramm ansehen"
      secondaryHref="/pilotprogramm"
      points={[
        "Aufnahmegespräch, Kontext und Notizen in einem review-first Ablauf erfassen.",
        "Ressourcen, Risiken und Wünsche für SIS-nahe Themenfelder vorbereiten.",
        "Offene Angaben sichtbar machen, bevor Inhalte ins bestehende Fachsystem übernommen werden."
      ]}
      problemTitle="Warum SIS/Aufnahme schmerzhaft ist"
      problemDescription="Der Engpass entsteht häufig direkt nach dem Gespräch: Viele Informationen sind vorhanden, müssen aber sachlich, neutral und vollständig in eine prüfbare Struktur übersetzt werden."
      problemItems={[
        "Aufnahmegespräche enthalten biografische Hinweise, Risiken, Ressourcen und Wünsche in ungeordneter Reihenfolge.",
        "PDL und Fachkräfte müssen Lücken erkennen, ohne das Gespräch in eine Checkliste zu verwandeln.",
        "Bestehende Fachsysteme speichern die Dokumentation, lösen aber nicht automatisch den Entwurfs- und Review-Schritt davor.",
        "Neue KI darf im Pflegekontext nur akzeptiert werden, wenn Verantwortung, Freigabe und Datenpfad klar bleiben."
      ]}
      workflowTitle="Gespräch → Entwurf → Lücken → Freigabe → Transfer"
      workflowDescription="Quinn macht aus dem Rohmaterial keinen finalen Akteneintrag, sondern einen prüfbaren SIS-nahen Entwurf für die fachliche Bearbeitung."
      workflow={[
        { title: "Gespräch erfassen", description: "Pflegekraft dokumentiert Gespräch, Notizen oder Audio, ohne den Dialog durch starre Eingaben zu unterbrechen." },
        { title: "Entwurf strukturieren", description: "Quinn ordnet Inhalte in pflegenahe Abschnitte, trennt Beobachtung, Wunsch, Risiko und offenen Punkt." },
        { title: "Lücken prüfen", description: "Nicht belegte oder unklare Angaben werden sichtbar, damit die Einrichtung gezielt nachfragen kann." },
        { title: "Freigabe & Transfer", description: "Erst nach fachlicher Prüfung wird der Entwurf kopiert oder exportiert und ins bestehende System übernommen." }
      ]}
      proofTitle="Was Quinn nicht tut"
      proofDescription="Die Begrenzung ist Teil der Produktstrategie: Quinn vermeidet riskante Vollautomatisierung und konzentriert sich auf den überprüfbaren Entwurfsschritt."
      proofPoints={[
        "Quinn ist keine neue Bewohnerakte und kein SIS-Ersatz.",
        "Quinn trifft keine pflegefachliche Entscheidung.",
        "Quinn behauptet keine pauschale Zeitersparnis; die Entlastung wird im Pilot gemessen.",
        "Echte Bewohnerdaten werden erst nach geklärtem Datenpfad, Rollen und Vereinbarungen genutzt."
      ]}
      metricsTitle="Pilotmetriken"
      metricsDescription="Damit die SIS-Seite nicht nur logisch klingt, messen wir im Pilot die wichtigsten harten Signale für Nutzen und Akzeptanz."
      metrics={metrics}
      faqTitle="Häufige Fragen"
      faqs={publicFaqsByLocale.de}
      footerTitle="SIS-nahe Aufnahme im Pilot testen."
      footerDescription="Wir suchen Pflegeeinrichtungen, die einen realistischen Aufnahmefall mit Quinn durchspielen und gemeinsam bewerten wollen, wo der Dokumentationsentwurf entlastet."
    />
  );
}
