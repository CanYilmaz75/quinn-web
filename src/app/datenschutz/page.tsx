import type { Metadata } from "next";

import { buildSeoAlternates } from "@/content/public-site";
import { Database, FileText, LockKeyhole, UserCheck } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { legalDetails } from "@/lib/legal-details";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/datenschutz"),
  title: "Datenschutz | Quinn",
  description: "Datenschutzhinweise zu Quinn, verarbeiteten Daten, Rechtsgrundlagen und Betroffenenrechten."
};

const quickFacts = [
  {
    label: "Verantwortlicher",
    value: `${legalDetails.providerName}; ${legalDetails.addressPendingDe} Kontakt: ${legalDetails.email}`,
    icon: UserCheck
  },
  {
    label: "Datenschutzkontakt",
    value: legalDetails.privacyContact,
    icon: LockKeyhole
  },
  {
    label: "Hosting und Auth",
    value: "Supabase, serverseitige Anwendung, geschützte Organisationsbereiche",
    icon: Database
  },
  {
    label: "KI-Verarbeitung",
    value: "OpenAI API für Transkription, Strukturierung und Entwurfsunterstuetzung",
    icon: FileText
  }
];

const privacySections = [
  {
    title: "1. Verantwortlicher",
    body:
      `Verantwortlich für diese Website und die Quinn-Anwendung ist ${legalDetails.providerName}. ${legalDetails.addressPendingDe} Kontakt: ${legalDetails.email}, ${legalDetails.phoneDisplay}.`
  },
  {
    title: "2. Datenschutzkontakt",
    body:
      `Bei Datenschutzfragen erreichen Sie Can Yilmaz unter ${legalDetails.privacyContact}. Ein gesonderter Datenschutzbeauftragter ist derzeit nicht benannt.`
  },
  {
    title: "3. Verarbeitete Daten",
    body:
      "Wir verarbeiten insbesondere Accountdaten, Organisationsdaten, Rollen und Rechte, Teammitgliedschaften, Protokollierung, Sicherheitsdaten, Abrechnungsinformationen sowie Inhalte, die Nutzer in Beratungs-, Pflege- oder Versorgungsablaeufen erfassen. Dazu können Audio, Transkripte, Freitext, Dokumentationsentwuerfe, SIS-nahe Inhalte und Exportdaten gehoeren. Einrichtungen können mit Pseudonyme arbeiten, wenn Klarnamen nicht erforderlich sind."
  },
  {
    title: "4. Besondere Kategorien personenbezogener Daten",
    body:
      "Quinn kann im Kundeneinsatz Gesundheitsdaten und pflegebezogene Informationen verarbeiten. Diese Verarbeitung setzt eine passende Rechtsgrundlage, klare Rollenverteilung und vertragliche Regelungen zwischen Kunde und Anbieter voraus."
  },
  {
    title: "5. Zwecke der Verarbeitung",
    body:
      "Die Daten werden verarbeitet, um Nutzer zu authentifizieren, Organisationen zu verwalten, Dokumentationsabläufe bereitzustellen, Audio und Texte in prüfbare Entwürfe zu überführen, Freigaben und Exporte nachvollziehbar zu protokollieren, Support zu leisten, Sicherheit zu überwachen und Abrechnung zu ermöglichen."
  },
  {
    title: "6. Rechtsgrundlagen",
    body:
      "Je nach Nutzung erfolgt die Verarbeitung auf Grundlage von Vertragserfuellung, berechtigten Interessen, gesetzlichen Pflichten, Einwilligungen oder, bei Gesundheitsdaten, einer gesondert zu pruefenden Grundlage nach Art. 9 DSGVO. Kunden bleiben für ihre eigene fachliche und rechtliche Nutzung verantwortlich."
  },
  {
    title: "7. Dienstleister und Empfaenger",
    body:
      "Wir setzen Vercel für Website-Hosting und einwilligungsgebundene Web Analytics, Supabase für Authentifizierung, Datenbank und private Speicherung sowie OpenAI für Transkription und KI-gestützte Entwurfserstellung ein. Sentry zur Fehleranalyse und Upstash für technische Schutz- und Rate-Limit-Funktionen werden nur eingesetzt, soweit sie für den jeweiligen Betriebsweg aktiviert sind. Einzelheiten zu Rollen, Regionen, Unterauftragnehmern und Transfergrundlagen werden im jeweiligen AVV und der Anbieterprüfung festgelegt."
  },
  {
    title: "8. Drittlanduebermittlungen",
    body:
      "Soweit Dienstleister außerhalb der EU/des EWR eingesetzt werden oder Fernzugriffe aus Drittländern möglich sind, werden geeignete Garantien wie EU-Standardvertragsklauseln, Angemessenheitsbeschlüsse oder zusätzliche Schutzmaßnahmen geprüft und dokumentiert."
  },
  {
    title: "9. Speicherdauer und Löschung",
    body:
      "Daten werden nur so lange gespeichert, wie dies für Vertrag, Betrieb, Nachweis, Sicherheit, Abrechnung oder gesetzliche Pflichten erforderlich ist. Das Löschkonzept umfasst Nutzerloeschung, Organisationsloeschung und fachliche Export-/Aufbewahrungsfristen je Kunde und Versorgungskontext."
  },
  {
    title: "10. Cookies und lokale Speicherung",
    body:
      "Quinn verwendet technisch notwendige Cookies und vergleichbare Speichertechnologien, insbesondere für Login-Sitzungen und Schutz geschützter Bereiche. Weitere Details stehen in den Cookie-Hinweisen."
  },
  {
    title: "11. Sicherheit",
    body:
      "Quinn nutzt technische und organisatorische Schutzmaßnahmen wie geschützte Bereiche, rollenbasierte Zugriffe, Protokollierung, getrennte Organisationsdaten und kontrollierte Speicherwege. Die konkreten TOM werden im AVV/TOM-Bereich beschrieben; für KI-Ausgaben gilt: keine Trainingsnutzung von Bewohnerdaten, fachliche Verantwortung beim Nutzer und keine medizinische Diagnose."
  },
  {
    title: "12. Betroffenenrechte",
    body:
      "Betroffene Personen haben nach Maßgabe der DSGVO Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch und Beschwerde bei einer Aufsichtsbehörde."
  },
  {
    title: "13. Änderungen",
    body:
      "Diese Datenschutzhinweise können angepasst werden, wenn sich Produkt, Dienstleister, Rechtslage oder Verarbeitungsvorgaenge aendern."
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">{children}</p>;
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="quinn-container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="max-w-xl">
            <Eyebrow>Datenschutz</Eyebrow>
            <h1 className="mt-5 quinn-h2">Datenschutzhinweise</h1>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Diese Hinweise beschreiben die Datenverarbeitungen der Website und der Quinn-Anwendung nach aktuellem
              Stand. Konkrete Kundenverarbeitungen, Rechtsgrundlagen, Aufbewahrungsfristen und Transferprüfungen werden
              zusätzlich im jeweiligen Vertrags- und Nutzungskontext festgelegt.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Stand: {legalDetails.lastUpdatedDe}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickFacts.map((item) => {
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
            <Eyebrow>Pflichtinformationen</Eyebrow>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-5xl">
              Verarbeitung nachvollziehbar erklaert.
            </h2>
          </div>
          <div className="space-y-8">
            {privacySections.map((section) => (
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
