import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn für Psychologen",
  description: "Quinn unterstützt psychologische Praxen bei ruhigen, prüfbaren Dokumentationsentwürfen mit menschlicher Freigabe."
};

const useCases = ["Sitzungsnotizen verdichten", "Verlauf sachlich formulieren", "nächste Schritte und offene Punkte trennen"];

export default function PsychologistsPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Entwickelt für · Psychologen</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Mehr Ruhe in der Nachbereitung psychologischer Dokumentation.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn erstellt keine Diagnose und ersetzt keine therapeutische Einschätzung. Es unterstützt dabei, Notizen in klare,
          prüfbare Entwürfe zu überführen, die Sie vor jeder Übernahme fachlich freigeben.
        </p>
      </section>
      <section className="bg-[#F4F4F6] py-16">
        <div className="quinn-container grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Warum Quinn hilft: weniger Formulierungsdruck, klare Verantwortung und ein ruhiger Review vor der Ablage.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16">
        <div className="rounded-[2rem] bg-[#102F33] p-10 text-white">
          <h2 className="text-3xl font-semibold">Quinn mit passendem Rahmen einführen.</h2>
          <p className="mt-4 max-w-2xl text-[#E8E8EC]">Für sensible Dokumentationsabläufe klären wir Setup, Rollen und Freigabewege zuerst in einer kurzen Beratung.</p>
          <Button asChild className="mt-8 bg-white text-[#0A0A0F] hover:bg-[#F4F4F6]"><Link href="/demo-buchen">Beratung anfragen</Link></Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
