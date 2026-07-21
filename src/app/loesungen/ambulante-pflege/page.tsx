import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn für ambulante Pflege",
  description: "Warum Quinn ambulanten Pflegediensten bei Besuchsdokumentation, Tour-Notizen und Übergaben hilft."
};

export default function AmbulatoryCarePage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Lösungen · Ambulante Pflege</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-bold leading-tight sm:text-[58px]">
          Ambulante Pflege: schneller von der Tour zur prüfbaren Besuchsdokumentation.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn ersetzt nicht Ihr Fachsystem. Es unterstützt die Besuchsdokumentation vor der Übernahme: Stichpunkte,
          Gesprächsinhalte oder Audio werden zu Entwürfen, die Ihr Team fachlich prüft und freigibt.
        </p>
      </section>
      <section className="bg-[#F4F4F6] py-16">
        <div className="quinn-container grid gap-6 md:grid-cols-3">
          {["Tour-Notizen strukturieren", "Übergabe für das Team vorbereiten", "Angehörigengespräche sachlich zusammenfassen"].map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Warum Quinn hilft: kurze mobile Stichpunkte werden ruhiger, vollständiger und kopierbar vorbereitet.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16">
        <div className="rounded-[2rem] border border-border bg-white p-10">
          <h2 className="text-3xl font-semibold">Für Pflegedienste, die keinen großen IT-Wechsel wollen.</h2>
          <p className="mt-4 max-w-2xl text-secondary-foreground">
            Quinn soll die Dokumentation rund um bestehende Prozesse vereinfachen — fachliche Freigabe bleibt Pflicht,
            klare Rollen sind sichtbar und der Pilot startet über Demo-Fälle.
          </p>
          <Button asChild className="mt-8">
            <Link href="/demo-buchen">Demo für ambulante Pflege buchen</Link>
          </Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
