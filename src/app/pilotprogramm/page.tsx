import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/pilotprogramm"),
  title: "Pilotprogramm für KI-Dokumentation in Pflege und Medizin | Quinn",
  description: "Quinn 4–6 Wochen in einem klaren Ablauf für Pflege und Medizin testen und Zeit, Nacharbeit, Vollständigkeit sowie Prüfaufwand nachvollziehbar auswerten."
};

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Zeit vom Rohinput bis zum prüfbaren Entwurf je ausgewähltem Dokumentationsfall." },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie viel wird ergänzt oder korrigiert, bevor ein Entwurf fachlich passt?" },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "Wie verändert sich der Prüf- und Rückfrageaufwand für Pflegefachkraft, ärztlich Verantwortliche oder QM?" },
  { label: pilotMetricsByLocale.de.teamAcceptance, description: "Ist der Ablauf verständlich und wird Quinn vom Team wiederholt genutzt?" }
];

export default function PilotprogrammPage() {
  return (
    <SeoLandingPage
      eyebrow="Pilotprogramm"
      title="Quinn in einem klaren Ablauf für Pflege und Medizin testen"
      description="In einem 4–6-wöchigen Pilot prüfen Sie, ob Quinn Ihren Dokumentationsalltag spürbar entlastet: mit weniger Nacharbeit, besser sichtbaren offenen Punkten und einem klaren Weg zur fachlichen Freigabe."
      primaryCta="Unverbindliches Pilotgespräch anfragen"
      secondaryCta="Produktablauf ansehen"
      secondaryHref="/produkt/uebersicht"
      points={[
        "Mit einem fiktiven oder anonymisierten Fall starten.",
        "Einen klar abgegrenzten Ablauf auswählen: SIS in der Pflege oder Anamnese/Verlauf in der Medizin. Verfügbarkeit und Freigaberegeln werden vorab geklärt.",
        "Vorab festlegen, woran Ihre Einrichtung Entlastung, Qualität und Alltagstauglichkeit erkennt."
      ]}
      problemTitle="Für wen der Pilot geeignet ist"
      problemDescription="Das Pilotprogramm richtet sich an Organisationen in Pflege und Medizin, die Dokumentationsentlastung in einem begrenzten Ablauf prüfen möchten, ohne Fachsystem oder fachliche Verantwortung zu ersetzen."
      problemItems={[
        "Stationäre Pflegeeinrichtungen mit wiederkehrenden Aufnahmegesprächen und SIS-nahem Dokumentationsbedarf.",
        "Ärztliche Teams in Praxis oder Klinik, die einen klar begrenzten Dokumentationsablauf prüfen möchten.",
        "Einrichtungs-, Praxis- oder Klinikleitungen und Träger, die den Nutzen von Quinn vor einer breiteren Einführung nachvollziehbar bewerten wollen.",
        "Teams, die zunächst mit fiktiven oder anonymisierten Fällen beginnen möchten."
      ]}
      workflowTitle="4–6 Wochen mit klarer Begleitung"
      workflowDescription="Der Pilot bleibt überschaubar und liefert Ihrer Einrichtung eine konkrete Grundlage für die Entscheidung über den nächsten Schritt."
      workflow={[
        { title: "Woche 0: Ablauf festlegen", description: "Dokumentationsfall, Rollen, Datenpfad und Entscheidungskriterien gemeinsam klären." },
        { title: "Woche 1: Einführung", description: "Fiktive Fälle testen, Team einweisen und fachliche Prüfregeln abstimmen." },
        { title: "Woche 2–5: Im Alltag testen", description: "Den vereinbarten Pflege- oder medizinischen Dokumentationsablauf innerhalb der geklärten Daten- und Freigabegrenzen testen." },
        { title: "Woche 6: Gemeinsam auswerten", description: "Zeit, Nacharbeit, Vollständigkeit, Prüfaufwand und Teamfeedback besprechen." }
      ]}
      proofTitle="Klare Grenzen im Pilot"
      proofDescription="Quinn unterstützt bei der Dokumentation. Die Einrichtung behält die fachliche Kontrolle und entscheidet auf Grundlage der eigenen Auswertung über eine weitere Nutzung."
      proofPoints={[
        "Keine pauschale Garantie für Zeitersparnis oder Wirtschaftlichkeit.",
        "Keine automatische fachliche Freigabe durch Quinn.",
        "Keine Umstellung oder Ablösung des bestehenden Fachsystems.",
        "Keine Echtdaten ohne geklärten Datenschutz-, Rollen- und Verarbeitungspfad."
      ]}
      metricsTitle="Was Ihre Einrichtung auswerten kann"
      metricsDescription="Die Auswertung zeigt, ob Quinn im gewählten Ablauf zu weniger Nacharbeit, besserer Vollständigkeit und einem handhabbaren Prüfaufwand beiträgt."
      metrics={metrics}
      faqTitle="Häufige Fragen"
      faqs={publicFaqsByLocale.de}
      footerTitle="Lassen Sie uns einen Dokumentationsablauf gemeinsam prüfen."
      footerDescription="Ein 15-Minuten-Gespräch reicht, um den passenden Ablauf, Datenpfad und Pilotumfang einzugrenzen."
    />
  );
}
