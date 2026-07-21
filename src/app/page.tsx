import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  FileAudio,
  FileText,
  LockKeyhole,
  Mic,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow
} from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";


export const metadata: Metadata = {
  title: "Quinn | KI-Dokumentation für Pflegegespräche",
  description:
    "Review-first KI-Dokumentation für Pflegegespräche, Aufnahme, Übergabe, Anamnese, Audio und Notizen vor bestehenden Pflege-, Klinik- oder Praxissystemen."
};

const metricCards = [
  { value: "Pflege", label: "Gespräch und SIS vorbereiten" },
  { value: "Klinik", label: "Aufnahme, Visite und Übergabe strukturieren" },
  { value: "Praxis", label: "Anamnese und Verlauf prüfbar formulieren" },
  { value: "Review", label: "Fachlich prüfen und sicher weitergeben" }
];

const workflowSteps = [
  {
    title: "Vor dem Gespräch",
    description: "Fall, Rolle und vorhandene Informationen vorbereiten, egal ob Pflegeaufnahme, klinische Übergabe oder ärztliche Anamnese.",
    icon: ClipboardCheck
  },
  {
    title: "Während des Gesprächs",
    description: "Audio aufnehmen, Notizen ergänzen oder Inhalte hochladen. Quinn strukturiert relevante Aussagen im Hintergrund vor.",
    icon: Mic
  },
  {
    title: "Nach dem Gespräch",
    description: "Entwurf, offene Punkte und Übergabehinweise prüfen, ergänzen und erst dann ins bestehende System übernehmen.",
    icon: FileText
  }
];

const productFeatures = [
  {
    title: "Dokumentation, die Ihrem Versorgungsablauf folgt",
    description:
      "Gesprächsinhalte werden nicht als Rohtext abgelegt, sondern in prüfbare Abschnitte, offene Hinweise und nächste Schritte übersetzt.",
    points: ["Audio & Upload", "Entwurfsnotiz", "Bearbeitung per Text oder Sprache"],
    icon: FileAudio
  },
  {
    title: "Pflege, Klinik und Praxis sauber trennen",
    description:
      "SIS-nahe Pflegegespräche, Anamnese, Visite, Übergabe oder Entlassplanung bekommen jeweils die passende Struktur, ohne bestehende Systeme zu ersetzen.",
    points: ["SIS & Pflege", "Anamnese & Verlauf", "Übergabe & Entlassung"],
    icon: Workflow
  },
  {
    title: "Freigabe statt Blackbox",
    description:
      "Jeder Entwurf bleibt sichtbar bearbeitbar. Export und Weitergabe erfolgen erst nach fachlicher Prüfung durch das verantwortliche Team.",
    points: ["Review-Status", "Freigabe", "PDF & Kopieren"],
    icon: BadgeCheck
  }
];

const useCases = [
  "Pflegeaufnahme & SIS",
  "Klinische Übergabe",
  "Ärztliche Anamnese",
  "Visiten- und Verlaufsnotizen",
  "Entlass- und Versorgungsplanung",
  "Dokumentationsreview"
];

const securityItems = [
  {
    title: "Geschützte Arbeitsbereiche",
    description: "Dokumentationsdaten liegen hinter Login, Organisation und geschützten App-Bereichen.",
    icon: ShieldCheck
  },
  {
    title: "Kontrollierte Dateiwege",
    description: "Audio-Uploads und Exporte sind auf private Speicherung und begrenzte Zugriffe ausgelegt.",
    icon: LockKeyhole
  },
  {
    title: "Nachvollziehbare Schritte",
    description: "Erstellung, Bearbeitung, Freigabe und Export sind als prüfbare Prozesspunkte angelegt.",
    icon: CheckCircle2
  },
  {
    title: "Menschliche Verantwortung",
    description: "Quinn erstellt Entwürfe. Die fachliche Prüfung und finale Freigabe bleiben beim Team.",
    icon: Users
  }
];

const launchWorkflows = [
  { title: "Stichpunkte in professionelle Doku", description: "Aus kurzen Notizen wird ein sachlicher Entwurf mit Beobachtung, Einordnung, nächstem Schritt und offenem Punkt." },
  { title: "Aufnahme und Anamnese", description: "Pflegeaufnahme, ärztliche Anamnese oder Klinikaufnahme werden in prüfbare Abschnitte vorstrukturiert." },
  { title: "SIS und Versorgungsplanung", description: "Ressourcen, Risiken und Wünsche werden für die Übernahme ins bestehende Pflegesystem vorbereitet — Quinn bleibt keine Ersatzakte." },
  { title: "Übergabe oder Tagesbericht", description: "Mehrere Einträge werden zu einer klaren, kopierbaren Zusammenfassung für Pflege, Station oder Praxis verdichtet." },
  { title: "Qualitätscheck", description: "Sachlich, neutral, vollständig: keine Diagnosefantasie, keine Therapieentscheidung, keine erfundenen Maßnahmen." }
];

const demoCases = [
  { title: "Pflegefall Frau M. · Unruhe am Abend", text: "Bewohnerin läuft wiederholt über den Flur. Quinn trennt Beobachtung, Maßnahme, Reaktion und offenen Punkt." },
  { title: "Klinische Übergabe nach Sturzereignis", text: "Situation, Sofortmaßnahme, Information und Beobachtung werden als prüfbarer Übergabeentwurf strukturiert." },
  { title: "Anamnese mit mehreren Beschwerden", text: "Gesprächsinhalte, relevante Vorgeschichte und offene Rückfragen werden sauber getrennt, ohne Diagnose zu erfinden." },
  { title: "Entlass- und Versorgungsplanung", text: "Vereinbarungen mit Angehörigen, Pflege, Praxis oder Sozialdienst werden in eine klare Zusammenfassung gebracht." }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">{children}</p>;
}

function ProductMockup() {
  const transcriptLines = [
    "Bewohnerin berichtet über unsicheren Transfer am Morgen.",
    "Tochter nennt neue Stolpersituation im Bad.",
    "Pflegekraft ergänzt: Rollator wird im Zimmer genutzt."
  ];

  return (
    <div className="relative rounded-[2rem] border border-[#DDE8E4] bg-white p-3 shadow-subtle">
      <div className="absolute right-3 top-3 hidden rounded-2xl border border-[#DDE8E4] bg-[#F6F0E3] px-4 py-3 text-sm font-semibold text-[#0A0A0F] shadow-subtle sm:block">
        2 Hinweise offen
      </div>
      <div className="overflow-hidden rounded-[1.5rem] border border-[#E8E8EC] bg-[#E7F1EE]">
        <div className="flex items-center justify-between border-b border-[#E8E8EC] bg-white px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#DDE8E4] bg-white">
              <Image src="/quinn-logo.svg" alt="Quinn" width={44} height={44} className="h-11 w-11" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Pflegeberatung / SIS</p>
              <p className="text-xs text-secondary-foreground">Audio wird strukturiert</p>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full bg-[#E7F1EE] px-3 py-2 text-xs font-semibold text-[#1E6B72] sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#1E6B72]" />
            Live Review
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
          <div className="border-b border-[#E8E8EC] bg-white p-5 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Transkript</p>
              <span className="rounded-full bg-[#F6F0E3] px-3 py-1 text-xs text-secondary-foreground">03:42</span>
            </div>
            <div className="mt-5 space-y-4">
              {transcriptLines.map((line, index) => (
                <div key={line} className="flex gap-3">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E7F1EE] text-xs font-semibold text-[#1E6B72]">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-secondary-foreground">{line}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-[#E7F1EE] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Nächster Schritt</p>
              <p className="mt-2 text-sm font-semibold text-foreground">Entwurf generieren und offene Punkte prüfen</p>
            </div>
          </div>

          <div className="space-y-4 p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Notizentwurf</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">Transfer und Wohnumfeld</h3>
                <div className="mt-4 space-y-2">
                  <div className="h-2 rounded-full bg-[#DDE8E4]" />
                  <div className="h-2 w-10/12 rounded-full bg-[#E8E8EC]" />
                  <div className="h-2 w-8/12 rounded-full bg-[#E8E8EC]" />
                </div>
              </div>
              <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">SIS-Feld</p>
                <h3 className="mt-3 text-lg font-semibold text-foreground">Mobilität</h3>
                <p className="mt-3 text-sm leading-6 text-secondary-foreground">
                  Ressourcen vorhanden, Hilfsmittel prüfen, Bad-Situation klären.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Freigabe</p>
                  <p className="mt-2 text-sm text-secondary-foreground">Validieren, ergänzen, exportieren</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs font-medium text-secondary-foreground sm:min-w-56">
                  <span className="rounded-full border border-[#DDE8E4] px-3 py-2">Validieren</span>
                  <span className="rounded-full bg-[#1E6B72] px-3 py-2 text-white">Freigeben</span>
                  <span className="rounded-full border border-[#DDE8E4] px-3 py-2">Kopieren</span>
                  <span className="rounded-full border border-[#DDE8E4] px-3 py-2">PDF</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FBFAF6] text-foreground">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#E8E8EC]/80 bg-[#FBFAF6]">
        <div className="quinn-container relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-24">
          <div>
            <h1 className="max-w-3xl text-[38px] font-semibold leading-[1.04] tracking-[-0.032em] text-[#0A0A0F] sm:text-[52px] lg:text-[62px]">
              KI-Dokumentation für Pflegegespräche
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-foreground sm:text-xl">
              Quinn lässt Pflegekräfte in Pflegeeinrichtungen Gespräche und Notizen einfach erfassen. Die KI bereitet daraus
              strukturierte, prüfbare Dokumentation für das bestehende Pflegesystem vor. Damit mehr Zeit für echte Zuwendung bleibt.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl bg-[#0A0A0F] px-7 hover:bg-[#1E6B72]">
                <Link href="/demo-buchen">
                  Unverbindlich Demo anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#DDE8E4] bg-white px-7">
                <a href="#pilotprogramm">Pilotprogramm ansehen</a>
              </Button>
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section className="border-b border-[#E8E8EC]/80 bg-white py-8">
        <div className="quinn-container">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metricCards.map((item) => (
              <div key={item.value} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-5">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-foreground">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-secondary-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-container py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Warum Quinn</Eyebrow>
          <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
            Dokumentation sollte Versorgung entlasten — nicht den Arbeitstag bestimmen.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
            Quinn bringt Gespräch, Kontext, Review und Export in einen ruhigen Workflow für Gesundheits- und Pflegeorganisationen.
            So wird KI zur Assistenz im Alltag, nicht zur Blackbox im Hintergrund.
          </p>
        </div>
      </section>

      <section id="produkt" className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Eyebrow>Produkt</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Papierkram? Quinn bereitet ihn prüfbar vor.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Nicht noch ein Dashboard, sondern ein klarer Ablauf für Pflege, Klinik und Praxis: erfassen, strukturieren,
              prüfen, freigeben und weitergeben.
            </p>
            <div className="mt-9 space-y-5">
              {productFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1EE]">
                        <Icon className="h-5 w-5 text-[#1E6B72]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-secondary-foreground">{feature.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {feature.points.map((point) => (
                            <span key={point} className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-secondary-foreground">
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ProductMockup />
        </div>
      </section>

      <section id="workflow" className="quinn-container py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <Eyebrow>Arbeitsalltag</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Vor, während und nach dem Gespräch an Ihrer Seite.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Quinn folgt dem echten Versorgungsablauf: Pflegegespräch, Aufnahme, Visite, Übergabe oder Entlassplanung.
            </p>
          </div>
          <div className="relative grid gap-5">
            <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-[#DDE8E4] sm:block" />
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-sm sm:pl-20">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F1EE] text-[#1E6B72] sm:absolute sm:left-0 sm:top-6">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-secondary-foreground">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#E7F1EE] py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Eyebrow>Kern-Workflows</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Ein Dokumentationslayer für Pflege, Klinik und Praxis.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Der erste Aha-Moment: Rolle wählen, Aufgabe wählen, Gespräch oder Stichpunkte erfassen, Entwurf prüfen und ins bestehende System übernehmen.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {launchWorkflows.map((workflow) => (
              <div key={workflow.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6">
                <h3 className="text-xl font-semibold text-foreground">{workflow.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="demo-faelle" className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Demo-Modus</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Mit fiktiven Fällen in zwei Minuten verstehen.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Keine echten Patienten- oder Bewohnerdaten nötig: Die Demo zeigt realistische Situationen aus Pflege,
              Klinik und Praxis und den Transfer in bestehende Fachsysteme.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {demoCases.map((demo) => (
              <div key={demo.title} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-6">
                <h3 className="text-xl font-semibold text-foreground">{demo.title}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{demo.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#102F33] py-16 text-white sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E7F1EE]">Anwendungsfälle</p>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] sm:text-[52px]">
              Für Teams, die Informationen sicher übergeben müssen.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/75">
              Quinn ist auf dokumentationsnahe Workflows in Gesundheits- und Pflegeorganisationen fokussiert — dort, wo
              Gespräche, Verantwortung und Nachvollziehbarkeit zusammenkommen.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div key={useCase} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm font-semibold">
                <Check className="h-5 w-5 text-[#FFF2B8]" />
                {useCase}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sicherheit" className="bg-white py-16 sm:py-24">
        <div className="quinn-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Sicherheit & Kontrolle</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">
              Vertrauen entsteht durch sichtbare Kontrolle.
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground">
              Quinn macht keine künstlichen Zertifizierungsversprechen auf der Startseite. Gezeigt werden die
              Kontrollpunkte, die im Produkt angelegt sind: geschützte Arbeitsbereiche, Organisation, Rollen, Review,
              Freigabe, Export und klare menschliche Verantwortung. Quinn stellt keine medizinische Diagnose.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {securityItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-3xl border border-[#E8E8EC] bg-[#FBFAF6] p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                    <Icon className="h-5 w-5 text-[#1E6B72]" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-secondary-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="pilotprogramm" className="quinn-container py-16 sm:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-[#E8E8EC] bg-[#F6F0E3] p-8 sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-[#0A0A0F]">
                <Stethoscope className="h-4 w-4" />
                Live im echten Ablauf prüfen
              </div>
              <h2 className="mt-6 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-[#0A0A0F] sm:text-[56px]">
                Sehen Sie, wie Quinn Ihr Team bei der Dokumentation entlastet.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4A4A4F]">
                Pilotprogramm für Pflegeeinrichtungen, Kliniken und medizinische Teams: Unverbindlich Demo anfragen, einen realistischen Dokumentationsfall durchspielen und gemeinsam bewerten, wo Quinn im Alltag hilft.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button asChild size="lg" className="rounded-xl bg-[#0A0A0F] px-7 hover:bg-[#1E6B72]">
                <Link href="/demo-buchen">Unverbindlich Demo anfragen</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#0A0A0F]/15 bg-white/70 px-7">
                <Link href="/demo-buchen">15-Minuten-Gespräch buchen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
