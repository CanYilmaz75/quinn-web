import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarDays, CheckCircle2, ClipboardList, Coffee, MapPin, MessageSquareText, Sparkles, UsersRound, Workflow } from "lucide-react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn in Amsterdam | HLTH Europe 2026",
  description:
    "Triff Quinn rund um HLTH Europe in Amsterdam: AI-Workflow-Layer fuer Healthcare-Dokumentation, beginnend in der Langzeitpflege."
};

const proofPoints = [
  "Start in der Langzeitpflege",
  "Gespräche, Notizen und Beobachtungen strukturieren",
  "Bestehende Systeme bleiben führend",
  "Review und fachliche Freigabe vor Weitergabe"
];

const meetingTargets = [
  {
    title: "Investor:innen & HealthTech-VCs",
    description: "These, Markt-Timing und Go-to-Market rund um AI Workflow Automation im europäischen Healthcare-Markt prüfen.",
    icon: Sparkles
  },
  {
    title: "Provider & Care Operators",
    description: "Verstehen, wo Dokumentationslast in Aufnahme, Übergabe, SIS-naher Strukturierung und Teamkommunikation heute entsteht.",
    icon: UsersRound
  },
  {
    title: "Partner im Dokumentations-Ökosystem",
    description: "Schnittstellen zu Fachsystemen, EHR-nahen Workflows und Integrationspartnern ohne Verdrängungslogik ausloten.",
    icon: Workflow
  }
];

const workflow = [
  {
    title: "1. Gespräch erfassen",
    text: "Aufnahmegespräche, Übergaben oder Beobachtungen werden als Audio, Notiz oder Kurztext aufgenommen."
  },
  {
    title: "2. Struktur vorbereiten",
    text: "Quinn ordnet relevante Informationen in prüfbare Abschnitte, offene Punkte und SIS-nahe Hinweise."
  },
  {
    title: "3. Fachlich freigeben",
    text: "Das Team prüft, ergänzt und übernimmt den Entwurf in bestehende Abläufe oder Fachsysteme."
  }
];

const agenda = [
  "15 Minuten Documentation Sprint — in Amsterdam oder remote",
  "Ein fiktiver Intake-Fall: Gespräch → strukturierter Dokumentationsentwurf",
  "Kurze These zu Documentation Burden als HealthTech-Markt",
  "Follow-up nur, wenn ein echter Pilot-, Partner- oder Investoren-Fit sichtbar ist"
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">{children}</p>;
}

function AmsterdamCard() {
  return (
    <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-4 shadow-subtle">
      <div className="rounded-[1.5rem] border border-[#E8E8EC] bg-[#FBFAF6] p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[#DDE8E4] bg-white">
              <Image src="/quinn-logo.svg" alt="Quinn" width={48} height={48} className="h-12 w-12" priority />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Quinn</p>
              <p className="text-xs text-secondary-foreground">HLTH Europe · Amsterdam</p>
            </div>
          </div>
          <span className="rounded-full bg-[#E7F1EE] px-3 py-1 text-xs font-semibold text-[#1E6B72]">Amsterdam oder remote</span>
        </div>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Founder question</p>
            <p className="mt-3 text-xl font-semibold leading-tight text-foreground">
              How much healthcare documentation work happens before anyone opens the system?
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["Input", "Gespräch, Notiz, Beobachtung"],
              ["Output", "prüfbarer Dokumentationsentwurf"],
              ["System", "ergänzt bestehende Fachsysteme"],
              ["Control", "fachliche Freigabe bleibt im Team"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[#E8E8EC] bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{label}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl bg-[#E7F1EE] p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#1E6B72]">
            <Coffee className="h-5 w-5" />
            Documentation Sprint — Amsterdam oder remote.
          </div>
          <p className="mt-2 text-sm leading-6 text-secondary-foreground">
            Kein klassischer Kaffee-Pitch: In 15 Minuten zeige ich an einem fiktiven Intake-Fall, wie aus Gesprächsnotizen ein prüfbarer Dokumentationsentwurf wird — vor Ort in Amsterdam oder später remote.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HlthLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="border-b border-border bg-[#FBFAF6] py-16 sm:py-20">
        <div className="quinn-container grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <Eyebrow>Quinn rund um HLTH Europe 2026</Eyebrow>
            <h1 className="mt-5 max-w-4xl text-[42px] font-semibold leading-none tracking-[-0.04em] text-foreground sm:text-[58px] lg:text-[72px]">
              Treffen wir uns in Amsterdam über Healthcare-Dokumentation, die Teams wirklich entlastet.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-secondary-foreground sm:text-[21px]">
              Quinn ist ein AI-Workflow-Layer für Healthcare-Dokumentation, beginnend in der Langzeitpflege. Wir helfen Teams, Gespräche, Aufnahmeinformationen und Beobachtungen in strukturierte, prüfbare Entwürfe zu überführen — ohne bestehende Systeme zu ersetzen. Wenn Sie nicht in Amsterdam sind, funktioniert der Sprint genauso als kurzer Remote-Termin.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl px-5">
                <Link href="/demo-buchen">
                  Sprint reservieren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl px-5">
                <Link href="/produkt/uebersicht">Produkt ansehen</Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border border-[#E8E8EC] bg-white px-4 py-3 text-sm font-medium text-secondary-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6B72]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <AmsterdamCard />
        </div>
      </section>

      <section className="quinn-section bg-white">
        <div className="quinn-container">
          <div className="max-w-3xl">
            <Eyebrow>Warum sprechen?</Eyebrow>
            <h2 className="mt-4 quinn-h2">Quinn adressiert die unsichtbare Arbeit vor der eigentlichen Dokumentation.</h2>
            <p className="mt-5 quinn-lead">
              Der Engpass ist selten nur Transkription. Entscheidend ist die Übersetzung von unstrukturierten Gesprächen und Beobachtungen in fachlich prüfbare, anschlussfähige Dokumentation.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {meetingTargets.map((target) => {
              const Icon = target.icon;
              return (
                <article key={target.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E7F1EE] text-[#1E6B72]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{target.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-secondary-foreground">{target.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="quinn-section bg-[#FBFAF6]">
        <div className="quinn-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Eyebrow>Workflow</Eyebrow>
            <h2 className="mt-4 quinn-h2">Von Gespräch zu prüfbarem Entwurf — als Layer um bestehende Systeme.</h2>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Quinn ersetzt keine Bewohnerakte, kein SIS-Fachsystem und keine fachliche Entscheidung. Die Stärke liegt in dem Schritt davor: Informationen sauber erfassen, strukturieren und reviewfähig machen.
            </p>
          </div>

          <div className="space-y-4">
            {workflow.map((step) => (
              <div key={step.title} className="rounded-3xl border border-[#E8E8EC] bg-white p-6 shadow-subtle">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1EE] text-[#1E6B72]">
                    <ClipboardList className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-secondary-foreground">{step.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quinn-section bg-white">
        <div className="quinn-container grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#DDE8E4] bg-white p-6 shadow-subtle">
            <div className="flex items-center gap-3">
              <MessageSquareText className="h-6 w-6 text-[#1E6B72]" />
              <p className="text-sm font-semibold text-foreground">Gespräch in Amsterdam</p>
            </div>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Was in den 15 Minuten passiert</h2>
            <div className="mt-6 space-y-3">
              {agenda.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-secondary-foreground">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#1E6B72]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Eyebrow>CTA</Eyebrow>
            <h2 className="mt-4 quinn-h2">Wenn Sie rund um HLTH in Amsterdam sind — oder das Thema danach remote vertiefen wollen: Ich bringe einen konkreten Documentation Sprint mit.</h2>
            <p className="mt-5 text-base leading-7 text-secondary-foreground">
              Statt allgemeinem Networking: ein kurzer, greifbarer Durchlauf mit fiktivem Pflege-Intake, Dokumentationslast-These und ehrlichem Gespräch über Pilot-, Partner- oder Investment-Fit. Für Amsterdam kurzfristig vor Ort, ansonsten als fokussierter Remote-Termin.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl px-5">
                <Link href="/demo-buchen">
                  Sprint anfragen
                  <CalendarDays className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary" className="rounded-xl px-5">
                <Link href="/preise">Quinn einordnen</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-secondary-foreground">
              <MapPin className="h-5 w-5 text-[#1E6B72]" />
              Amsterdam nahe HLTH Europe Venue — oder remote nach HLTH. 15 Minuten, fiktiver Fall, konkreter Output.
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-[#0A0A0F] py-14 text-white">
        <div className="quinn-container flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A7D8D2]">Kurzpositionierung</p>
            <p className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
              AI sollte Pflege- und Versorgungsteams Zeit zurückgeben — nicht ein weiteres System erzeugen.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Quinn arbeitet vor und um bestehende Systeme herum: aus Gesprächen und Notizen werden strukturierte Entwürfe, die Menschen prüfen und freigeben.
            </p>
          </div>
          <Button asChild size="lg" variant="secondary" className="rounded-xl px-5">
            <Link href="/demo-buchen">
              Documentation Sprint anfragen
              <Coffee className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
