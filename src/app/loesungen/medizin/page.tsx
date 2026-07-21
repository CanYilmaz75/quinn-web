import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Quinn für Medizin",
  description: "Quinn unterstützt medizinische Teams bei prüfbaren, verantwortungsvollen Dokumentationsentwürfen ohne bestehende Systeme zu ersetzen."
};

const useCases = ["Anamnese-Notizen strukturieren", "Verlauf und Übergabe sachlich formulieren", "offene Punkte vor Freigabe sichtbar machen"];

export default function MedicalPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="quinn-container py-20 sm:py-28">
        <p className="text-xs font-semibold uppercase tracking-normal text-muted-foreground">Entwickelt für · Medizin</p>
        <h1 className="mt-6 max-w-5xl text-[40px] font-semibold leading-tight sm:text-[58px]">
          Medizinische Dokumentation vorbereiten, ohne fachliche Entscheidungen zu automatisieren.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">
          Quinn hilft ärztlichen Teams, Ambulanzen und Kliniken, Stichpunkte, Gesprächsinhalte und Verlaufskontext in prüfbare Entwürfe zu bringen.
          Es ersetzt nicht Ihr Praxis- oder Kliniksystem; Diagnosen, Therapieentscheidungen und finale Freigaben bleiben ausdrücklich beim Behandlungsteam.
        </p>
      </section>
      <section className="bg-[#F4F4F6] py-16">
        <div className="quinn-container grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <article key={item} className="rounded-2xl border border-border bg-white p-6">
              <h2 className="text-xl font-semibold">{item}</h2>
              <p className="mt-3 text-sm leading-7 text-secondary-foreground">
                Warum Quinn hilft: klare Sprache, sichtbare Prüfpunkte und Übernahme in bestehende Praxis- oder Kliniksysteme.
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="quinn-container py-16">
        <div className="rounded-[2rem] border border-border bg-white p-10">
          <h2 className="text-3xl font-semibold">Passenden Rahmen vor dem Rollout klären.</h2>
          <p className="mt-4 max-w-2xl text-secondary-foreground">Teams klären Rollen, Datenschutzprüfung und Standards gemeinsam, bevor Quinn in Live-Dokumentationsabläufe eingeführt wird.</p>
          <Button asChild className="mt-8"><Link href="/preise">Preise ansehen</Link></Button>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
