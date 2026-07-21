import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "Quinn für Träger, PDL und Qualitätsmanagement",
  description: "Quinn hilft Trägern, PDL und Qualitätsmanagement, Review-Aufwand, Dokumentationslücken und Pilotsteuerung messbar zu machen."
};

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Zeit pro ausgewähltem Aufnahme-, SIS- oder Review-Fall." },
  { label: pilotMetricsByLocale.de.editRate, description: "Wie viel Korrekturaufwand entsteht vor Freigabe?" },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "Wie verändert sich der PDL/QM-Review-Aufwand?" },
  { label: pilotMetricsByLocale.de.teamAcceptance, description: "Welche Teams nutzen Quinn wiederholt und warum?" }
];

export default function ProviderQmPage() {
  return (
    <SeoLandingPage
      eyebrow="Träger, PDL und Qualitätsmanagement"
      title="Dokumentationsqualität pilotieren, bevor KI in den Rollout geht."
      description="Für Träger, PDL und Qualitätsmanagement ist Quinn ein review-first Layer vor bestehenden Systemen: Dokumentationslücken sichtbar machen, Standards je Einrichtung prüfen und Rollout erst nach Evidenz entscheiden."
      primaryCta="Träger-Demo anfragen"
      secondaryCta="Pilotprogramm ansehen"
      secondaryHref="/pilotprogramm"
      points={[
        "Review-Aufwand und Dokumentationslücken in Aufnahme-/SIS-Workflows messbar machen.",
        "Standards je Einrichtung als prüfbare Leitplanken in Entwürfen sichtbar halten.",
        "Pilotsteuerung mit klaren Metriken statt Bauchgefühl ermöglichen."
      ]}
      problemTitle="Buyer-Fragen vor jedem KI-Rollout"
      problemDescription="Träger brauchen nicht nur schöne Entwürfe. Sie brauchen Belege, dass Teams Quinn akzeptieren, QM nicht mehr Nacharbeit bekommt und die Verantwortung klar bleibt."
      problemItems={[
        "Wie viel Review-Aufwand entsteht bei Aufnahme/SIS heute — und was verändert Quinn daran?",
        "Wo entstehen Dokumentationslücken und wie früh werden sie sichtbar?",
        "Wie werden Standards je Einrichtung eingehalten, ohne Fachkräfte zu entmündigen?",
        "Welche Pilotsteuerung zeigt, ob ein Rollout auf weitere Einrichtungen sinnvoll ist?"
      ]}
      workflowTitle="Pilotsteuerung statt Big-Bang-Rollout"
      workflowDescription="Quinn wird zuerst in einem begrenzten Workflow geprüft. Nur wenn Nutzung, Qualität und Akzeptanz stimmen, folgt der nächste Rollout-Schritt."
      workflow={[
        { title: "Workflow wählen", description: "Aufnahme, SIS-nahe Dokumentation oder Review als klaren Startpunkt festlegen." },
        { title: "Standards definieren", description: "QM- und Einrichtungssprache als prüfbare Leitplanken im Entwurf sichtbar machen." },
        { title: "Metriken messen", description: "Editierquote, Vollständigkeit, Review-Aufwand und Akzeptanz strukturiert auswerten." },
        { title: "Entscheiden", description: "Rollout erst nach Evidenz und klarer Datenschutz-/Rollenklärung." }
      ]}
      proofTitle="Rollout erst nach Evidenz"
      proofDescription="Quinn wird nicht als fertige Plattformthese verkauft, sondern als messbarer Pilotpfad für Betreiber, die verantwortungsvoll KI testen wollen."
      proofPoints={[
        "Keine Umstellung der bestehenden Pflegesoftware.",
        "Keine automatische fachliche Freigabe.",
        "Klarer Datenpfad je Einrichtung vor Echtdaten.",
        "Entscheidung über Standort- oder Trägerrollout erst nach Pilotmetriken."
      ]}
      metricsTitle="Metriken für PDL/QM und Träger"
      metricsDescription="Diese Signale helfen, zwischen interessanter Demo und belastbarem Rollout-Kandidaten zu unterscheiden."
      metrics={metrics}
      faqTitle="Häufige Fragen"
      faqs={publicFaqsByLocale.de}
      footerTitle="Einen Betreiber-Pilot sauber aufsetzen."
      footerDescription="Wir prüfen gemeinsam, welcher Workflow für Ihre Einrichtung oder Ihren Träger als erster belastbarer Test geeignet ist."
    />
  );
}
