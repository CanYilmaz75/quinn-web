import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Quinn für stationäre Pflegeeinrichtungen",
  description: "Quinn unterstützt Pflegeheime bei Aufnahmequalität, SIS-nahen Gesprächen und prüfbaren Dokumentationsentwürfen vor dem Fachsystem."
};

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Wie lange dauert Aufnahme oder SIS-naher Dokumentationsfall bis zum prüfbaren Entwurf?" },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie viel muss vor fachlicher Freigabe angepasst werden?" },
  { label: pilotMetricsByLocale.de.completeness, description: "Welche offenen Informationen werden vor Transfer sichtbar?" },
  { label: pilotMetricsByLocale.de.teamAcceptance, description: "Akzeptiert das Team Quinn als Entlastung statt Zusatzsystem?" }
];

export default function NursingHomesPage() {
  return (
    <SeoLandingPage
      eyebrow="Stationäre Pflegeeinrichtungen"
      title="Quinn für Pflegeheime: Aufnahmequalität verbessern, ohne das Fachsystem zu wechseln."
      description="Warum Quinn hilft: Für Heimleitung und PDL entsteht der größte Hebel dort, wo Aufnahmegespräche, Tagesbericht, SIS vorbereiten und tägliche Notizen in prüfbare Dokumentation übersetzt werden müssen. Quinn hilft vor dem bestehenden System — ersetzt keine Bewohnerakte und bleibt fachlich prüfpflichtig."
      primaryCta="Demo für Pflegeheim anfragen"
      secondaryCta="Pilotprogramm ansehen"
      secondaryHref="/pilotprogramm"
      points={[
        "Aufnahmegespräche und SIS-nahe Gespräche in prüfbare Entwürfe übersetzen.",
        "Lücken, offene Angaben und Review-Punkte sichtbar machen.",
        "Pilot ohne Systemwechsel starten und Entlastung anhand klarer Metriken bewerten."
      ]}
      problemTitle="Wo Pflegeheime Dokumentationszeit verlieren"
      problemDescription="Pflegeheime dokumentieren nicht, weil sie neue Tools wollen. Sie dokumentieren, weil Qualität, Nachweise und Versorgungssicherheit davon abhängen."
      problemItems={[
        "Aufnahmequalität hängt davon ab, ob relevante Aussagen aus dem Gespräch vollständig und neutral erfasst werden.",
        "SIS-nahe Gespräche erzeugen viele offene Punkte, die später PDL oder Fachkräfte nacharbeiten müssen.",
        "Heimleitung und PDL brauchen einen Weg, Entlastung zu testen, ohne sofort in Integration oder Systemwechsel zu gehen.",
        "Bewohnerdaten erst nach geklärtem Datenpfad, Rollen und Vereinbarungen einzusetzen, schützt Vertrauen im Pilot."
      ]}
      workflowTitle="Vom Pflegegespräch zum freigegebenen Entwurf"
      workflowDescription="Quinn schafft einen ruhigen Review-Ablauf zwischen Gespräch und Fachsystem."
      workflow={[
        { title: "Aufnahme vorbereiten", description: "Bewohnerkontext, Gespräch und Notizen werden in einem klaren Ablauf erfasst." },
        { title: "Entwurf erzeugen", description: "Quinn formuliert sachlich, trennt Beobachtung, Wunsch, Risiko und offenen Punkt." },
        { title: "Fachlich prüfen", description: "PDL oder Fachkraft ergänzt, korrigiert und gibt nur passende Inhalte frei." },
        { title: "Übernehmen", description: "Freigegebene Inhalte werden ins vorhandene Fachsystem kopiert oder exportiert." }
      ]}
      proofTitle="Pilot ohne Systemwechsel"
      proofDescription="Der Start soll nicht an Integrationen oder großen Rollout-Versprechen scheitern. Quinn wird zuerst an einem klaren Dokumentationsmoment gemessen."
      proofPoints={[
        "Fiktive oder anonymisierte Fälle für den ersten Demo-Schritt.",
        "Klarer Datenpfad vor Echtdaten.",
        "Fachliche Freigabe bleibt bei der Einrichtung.",
        "Rollout erst nach messbarer Evidenz aus Nutzung, Qualität und Teamakzeptanz."
      ]}
      metricsTitle="Pilotmetriken für Pflegeheime"
      metricsDescription="Für Pflegeheime zählt, ob Quinn in echten Abläufen nutzbar ist und weniger Nacharbeit erzeugt."
      metrics={metrics}
      faqTitle="Häufige Fragen"
      faqs={publicFaqsByLocale.de}
      footerTitle="Einen Aufnahmefall gemeinsam durchspielen."
      footerDescription="Im Demo-Call zeigen wir, wie ein Aufnahmegespräch zu einem prüfbaren Entwurf wird — ohne Fachsystemwechsel und ohne riskante Automatisierungsversprechen."
    />
  );
}
