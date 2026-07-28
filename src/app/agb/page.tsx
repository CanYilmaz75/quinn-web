import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { Building2, CreditCard, FileCheck, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { legalDetails } from "@/lib/legal-details";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/agb"),
  title: "AGB | Quinn",
  description: "Allgemeine Geschäftsbedingungen und Nutzungsbedingungen für Quinn."
};

const highlights = [
  { label: "Zielgruppe", value: "B2B SaaS für Pflege- und Versorgungsteams", icon: Building2 },
  { label: "Leistungsbild", value: "Dokumentationsworkflow, KI-Entwurf, Prüfung, Export", icon: FileCheck },
  { label: "Abrechnung", value: "Beratungsgestuetztes Paket oder individueller Vertrag nach Teamgroesse", icon: CreditCard },
  { label: "Verantwortung", value: "Menschliche Prüfung vor fachlicher Nutzung", icon: ShieldCheck }
];

const terms = [
  {
    title: "1. Geltungsbereich",
    body:
      "Diese AGB gelten für die Nutzung von Quinn durch Unternehmen, Pflegeeinrichtungen, ambulante Dienste, Träger und sonstige berufliche Nutzer, wenn sie in den jeweiligen Vertrag einbezogen werden. Individuelle Vereinbarungen gehen vor. Verbraucherangebote sind nicht vorgesehen, sofern nicht ausdrücklich anders vereinbart."
  },
  {
    title: "2. Vertragspartner",
    body:
      `Vertragspartner ist ${legalDetails.providerName}. ${legalDetails.addressPendingDe} Kunden handeln durch ihre vertretungsberechtigten Personen oder autorisierte Administratoren.`
  },
  {
    title: "3. Leistungsgegenstand",
    body:
      "Quinn stellt eine webbasierte Anwendung für Dokumentationsabläufe bereit. Funktionen können insbesondere Audioaufnahme oder Upload, Transkription, KI-gestützte Entwurfserstellung, SIS-nahe Strukturierung, Prüfung, Freigabe, Teamverwaltung und Export umfassen."
  },
  {
    title: "4. Kein Ersatz fachlicher Verantwortung",
    body:
      "Quinn erzeugt technische Vorschläge und Dokumentationsentwürfe. Die fachliche, pflegerische, medizinische, organisatorische und rechtliche Prüfung sowie die finale Freigabe liegen ausschließlich beim Kunden und seinen Nutzern."
  },
  {
    title: "5. Registrierung und Nutzerkonten",
    body:
      "Nutzer müssen zutreffende Angaben machen, Zugangsdaten geheim halten und Konten nur im Rahmen ihrer Berechtigung verwenden. Administratoren sind für Einladungen, Rollen, Aktivierung und Deaktivierung von Nutzern verantwortlich."
  },
  {
    title: "6. Preise und Zahlung",
    body:
      "Es gelten ausschließlich die im Angebot, Bestellformular oder individuellen Vertrag vereinbarten Preise, Zahlungsfristen und Abrechnungsbedingungen. Preise können insbesondere Pilotumfang, aktive Nutzer, Standorte, Rollout, Support und Zusatzleistungen berücksichtigen."
  },
  {
    title: "7. Laufzeit und Kündigung",
    body:
      "Laufzeit, Verlängerung und Kündigung richten sich nach dem gewählten Tarif oder dem individuellen Vertrag. Für Enterprise-Kunden gelten vorrangig die schriftlich vereinbarten Regelungen."
  },
  {
    title: "8. Verfügbarkeit und Wartung",
    body:
      "Quinn wird mit angemessener Sorgfalt betrieben. Geplante Wartung, Sicherheitsupdates oder Störungen können die Verfügbarkeit zeitweise beeinflussen. Konkrete Service Level müssen für Enterprise-Kunden gesondert vereinbart werden."
  },
  {
    title: "9. Pflichten des Kunden",
    body:
      "Der Kunde ist für rechtmäßige Datenerhebung, Informationspflichten gegenüber Betroffenen, Einwilligungen, interne Berechtigungen, fachliche Freigaben und die Einhaltung berufs- oder einrichtungsbezogener Vorgaben verantwortlich."
  },
  {
    title: "10. Datenschutz und Auftragsverarbeitung",
    body:
      "Soweit Quinn personenbezogene Daten im Auftrag verarbeitet, ist ein Vertrag zur Auftragsverarbeitung abzuschliessen. Details ergeben sich aus Datenschutzhinweisen, AVV und TOM."
  },
  {
    title: "11. Nutzungsrechte",
    body:
      "Kunden erhalten für die Vertragslaufzeit ein einfaches, nicht uebertragbares Recht zur Nutzung der Anwendung im vereinbarten Umfang. Rechte an Software, Marken, Designs und Dokumentation verbleiben beim Anbieter."
  },
  {
    title: "12. Unzulässige Nutzung",
    body:
      "Unzulässig sind insbesondere missbräuchliche Zugriffe, Umgehung von Sicherheitsfunktionen, Verarbeitung rechtswidriger Inhalte, Weitergabe von Zugangsdaten und Nutzung außerhalb vereinbarter Organisationsgrenzen."
  },
  {
    title: "13. Haftung",
    body:
      "Die Haftung richtet sich nach den gesetzlichen Vorschriften, soweit nicht wirksam abweichend vereinbart. Für einfache Fahrlaessigkeit kann die Haftung im unternehmerischen Verkehr auf vertragstypische, vorhersehbare Schaeden begrenzt werden. Zwingende Haftung bleibt unberuehrt."
  },
  {
    title: "14. Änderungen",
    body:
      "Änderungen dieser Bedingungen werden Kunden in geeigneter Weise mitgeteilt. Wesentliche Änderungen gelten nur, soweit sie rechtlich zulässig sind oder vereinbart werden."
  },
  {
    title: "15. Schlussbestimmungen",
    body:
      "Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Für Gerichtsstand und sonstige Schlussbestimmungen gelten die gesetzlichen Vorschriften, soweit nicht wirksam etwas anderes vereinbart wird."
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>;
}

export default function AgbPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Nutzungsbedingungen</Eyebrow>
            <h1 className="mt-5 quinn-h2">Allgemeine Geschäftsbedingungen</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Bedingungen für die Nutzung von Quinn durch berufliche Kunden. Sie gelten nur, wenn sie in das konkrete
              Vertragsverhältnis einbezogen werden; individuelle Angebote und Vereinbarungen gehen vor.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Stand: {legalDetails.lastUpdatedDe}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-lg border border-border bg-[#F4F4F6] p-5">
                  <Icon className="h-4 w-4 text-foreground" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-secondary-foreground">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F4F6] py-16 sm:py-20">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Eyebrow>Bedingungen</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Vertraglich klar gerahmt.
            </h2>
          </div>
          <div className="space-y-8">
            {terms.map((section) => (
              <section key={section.title}>
                <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
