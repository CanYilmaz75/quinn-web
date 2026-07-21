import type { Metadata } from "next";

import { SeoLandingPage } from "@/components/marketing/seo-landing-page";
import { pilotMetricsByLocale, publicFaqsByLocale } from "@/content/public-site";

export const metadata: Metadata = {
  title: "KI-basierte Sprachdokumentation in der Pflege | Quinn",
  description: "KI-basierte Sprachdokumentation in der Pflege mit fachlicher Prüfung, Review-Flow und Transfer in bestehende Fachsysteme."
};

const metrics = [
  { label: pilotMetricsByLocale.de.minutesPerCase, description: "Zeit vom gesprochenen oder notierten Input bis zum prüfbaren Entwurf." },
  { label: pilotMetricsByLocale.de.editRate, description: "Anteil und Art der Änderungen, die das Team vor Freigabe vornehmen muss." },
  { label: pilotMetricsByLocale.de.completeness, description: "Wie zuverlässig relevante offene Punkte und fehlende Angaben sichtbar werden." },
  { label: pilotMetricsByLocale.de.reviewEffort, description: "Ob PDL/QM weniger Zeit für Nacharbeit und sprachliche Korrekturen benötigt." }
];

export default function SprachdokumentationPflegePage() {
  return (
    <SeoLandingPage
      eyebrow="Sprachdokumentation Pflege"
      title="KI-basierte Sprachdokumentation in der Pflege — mit fachlicher Prüfung statt Blindübernahme"
      description="Sprache kann der schnellste Input sein. Quinns Unterschied liegt im nächsten Schritt: Aus Audio, Gespräch und Notizen entsteht ein prüfbarer Entwurf mit Lückenhinweisen, Freigabe und Transferlogik."
      primaryCta="Unverbindlich Demo anfragen"
      secondaryCta="SIS-Aufnahme ansehen"
      secondaryHref="/anwendungen/sis-aufnahme"
      points={[
        "Audio und Notizen werden in pflegenahen Abschnitten statt als Rohtext abgelegt.",
        "Quinn markiert offene Punkte und trennt Beobachtung, Maßnahme und Reaktion.",
        "Fachliche Verantwortung bleibt beim Team; Export erst nach Review."
      ]}
      problemTitle="Sprache ist nur der Anfang"
      problemDescription="Reine Sprachdokumentation löst vor allem die Eingabe. Pflegeeinrichtungen brauchen aber häufig den überprüfbaren Entwurf: sachlich, neutral, vollständig und vor der Übernahme ins Fachsystem freigegeben."
      problemItems={[
        "Gesprochene Informationen sind oft fragmentiert, situativ und fachlich noch nicht sauber formuliert.",
        "Eine reine Transkription spart Tippen, erzeugt aber noch keinen prüfbaren Pflegeeintrag.",
        "PDL/QM brauchen nachvollziehbare Lücken, Editieraufwand und klare Freigabe statt Blackbox-Ausgabe.",
        "Bestehende Fachsysteme bleiben führend; Quinn arbeitet vor dem System, nicht dagegen."
      ]}
      workflowTitle="Was Quinn anders macht"
      workflowDescription="Quinn verbindet Sprache, Notizen und Review zu einem Dokumentationsentwurf, der bewusst nicht blind übernommen wird."
      workflow={[
        { title: "Input", description: "Pflegekraft spricht, notiert oder lädt Audio hoch." },
        { title: "Draft", description: "Quinn strukturiert den Inhalt in pflegefachlich prüfbare Abschnitte." },
        { title: "Review", description: "Das Team korrigiert, ergänzt und bestätigt, was fachlich passt." },
        { title: "Transfer", description: "Bestehende Fachsysteme bleiben führend; nur freigegebene Inhalte werden übernommen." }
      ]}
      proofTitle="Bestehende Fachsysteme bleiben führend"
      proofDescription="Quinn positioniert sich nicht als neue Akte und nicht als unkontrollierte Automatisierung, sondern als Entwurfs- und Review-Layer vor dem vorhandenen System."
      proofPoints={[
        "Quinn erstellt prüfbare Entwürfe, keine finalen Akteneinträge ohne Freigabe.",
        "Quinn ersetzt keine Verantwortlichkeit und keine bestehende Pflegedokumentation.",
        "Quinn kann im Pilot mit fiktiven oder anonymisierten Fällen starten.",
        "Datenschutz, Rollen und Datenverarbeitung werden je Einrichtung konkret geprüft."
      ]}
      metricsTitle="Welche Metriken werden im Pilot gemessen?"
      metricsDescription="Die Seite verspricht keinen pauschalen ROI. Sie zeigt, welche Signale wir mit Einrichtungen belastbar messen wollen."
      metrics={metrics}
      faqTitle="Häufige Fragen"
      faqs={publicFaqsByLocale.de}
      footerTitle="Sprachdokumentation im Pflegeablauf testen."
      footerDescription="Im Demo-Call zeigen wir einen realistischen Pflegefall und prüfen gemeinsam, ob der review-first Ansatz zu Ihren Abläufen passt."
    />
  );
}
