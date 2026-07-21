import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Pilotprogramm für KI-Dokumentation in der Pflege | Quinn",
  description: "Pilotpartner für prüfbare KI-Dokumentation in der Pflege gesucht: 4–6 Wochen Pilotstruktur mit klaren Metriken."
};

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Zeit vom Rohinput bis zum prüfbaren Entwurf je Aufnahme-, SIS- oder Review-Fall." },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie viel wird ergänzt, korrigiert oder verworfen, bevor ein Entwurf fachlich passt?" },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "PDL/QM-Review-Aufwand vor und nach dem Quinn-Workflow." },
  { label: pilotMetricsByLocale.de.teamAcceptance, description: "Akzeptanz im Team: Wird Quinn wiederholt genutzt und als Entlastung wahrgenommen?" }
];

export default function PilotprogrammPage() {
  return (
    <SeoLandingPage
      eyebrow="Pilotprogramm"
      title="Pilotpartner für prüfbare KI-Dokumentation in der Pflege gesucht"
      description="Quinn befindet sich in der Pilotphase. Gemeinsam mit Pflegeeinrichtungen validieren wir Nachfrage, Nutzung, Entwurfsqualität, Review-Aufwand und Zahlungsbereitschaft — transparent und ohne überzogene Automatisierungsversprechen."
      primaryCta="Unverbindliches Pilotgespräch anfragen"
      secondaryCta="SIS-Aufnahme ansehen"
      secondaryHref="/anwendungen/sis-aufnahme"
      points={[
        "Fiktiven oder anonymisierten Fall in der Demo durchspielen.",
        "Einen klar abgegrenzten Aufnahme- oder SIS-nahen Workflow auswählen.",
        "Messlogik für Minuten pro Fall, Editierquote, Vollständigkeit und Akzeptanz vor Start vereinbaren."
      ]}
      problemTitle="Für wen geeignet"
      problemDescription="Das Pilotprogramm richtet sich an Einrichtungen, die Dokumentationsentlastung prüfen wollen, ohne Fachsystem, Verantwortung oder Datenschutzpfad zu überspringen."
      problemItems={[
        "Stationäre Pflegeeinrichtungen mit wiederkehrenden Aufnahmegesprächen und SIS-nahem Dokumentationsbedarf.",
        "PDL/QM-Teams, die Review-Aufwand, Dokumentationslücken und Sprachqualität systematischer messen wollen.",
        "Heimleitungen oder Träger, die KI vorsichtig in einem begrenzten Workflow testen möchten.",
        "Teams, die mit fiktiven oder anonymisierten Fällen starten und Echtdaten erst nach geklärtem Datenpfad nutzen wollen."
      ]}
      workflowTitle="4–6 Wochen Pilotstruktur"
      workflowDescription="Der Pilot bleibt bewusst klein genug, um schnell zu lernen, aber konkret genug, um echte Nutzensignale zu erzeugen."
      workflow={[
        { title: "Woche 0: Scope", description: "Workflow, Rollen, Datenpfad und Erfolgskriterien festlegen." },
        { title: "Woche 1: Demo & Setup", description: "Fiktive Fälle testen, Team einweisen, Review-Regeln klären." },
        { title: "Woche 2–5: Nutzung", description: "Aufnahme-, SIS- oder Review-Fälle wiederholt mit Quinn bearbeiten." },
        { title: "Woche 6: Auswertung", description: "Metriken, Feedback und Entscheidung für nächsten Pilot- oder Rollout-Schritt bewerten." }
      ]}
      proofTitle="Was wir nicht versprechen"
      proofDescription="Gerade in der Pflege schützt ehrliche Kommunikation Vertrauen. Quinn behauptet keine fertige Marktvalidierung, sondern zeigt klar, was im Pilot bewiesen werden muss."
      proofPoints={[
        "Keine pauschale ROI- oder Zeitersparnis-Garantie.",
        "Keine automatische fachliche Freigabe durch Quinn.",
        "Keine Umstellung oder Ablösung des bestehenden Fachsystems.",
        "Keine Echtdaten ohne geklärten Datenschutz-, Rollen- und Verarbeitungspfad."
      ]}
      metricsTitle="Pilotmetriken"
      metricsDescription="Diese Metriken zeigen, ob Quinn nicht nur gut klingt, sondern im Pflegealltag Nachfrage und Nutzensignale erzeugt."
      metrics={metrics}
      faqTitle="Häufige Fragen"
      faqs={publicFaqsByLocale.de}
      footerTitle="Lassen Sie uns einen Pflegefall gemeinsam prüfen."
      footerDescription="Ein 15-Minuten-Gespräch reicht, um den passenden Workflow, Datenpfad und Pilotumfang einzugrenzen."
    />
  );
}
