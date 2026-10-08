import type { Route } from "next";
import Link from "next/link";
import { ArrowRight, FileText, MessageSquareText, ClipboardCheck, Copy } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TrackedDemoLink } from "@/components/analytics/tracked-demo-link";
import { ProductProofFlow } from "./product-proof-flow";
import { SegmentDemoLink, type SiteLocale } from "./pillar-links";

const content = {
  de: {
    headline: ["Weniger Zeit für Dokumentation", "Mehr Zeit für Menschen"],
    intro: "Quinn unterstützt Pflegekräfte und medizinische Teams dabei, Gespräche und Notizen in strukturierte Dokumentationsentwürfe zu verwandeln. Sie prüfen und ergänzen die Inhalte und übernehmen sie in Ihr bestehendes Pflege-, Praxis- oder Kliniksystem.",
    demo: "Demo anfragen", discover: "Anwendungsfälle entdecken", demoHref: "/demo-buchen",
    pillars: [
      { segment: "care", label: "Pflege", title: "Pflegegespräche dokumentieren\nSIS strukturiert vorbereiten", text: "Aussagen, Ressourcen und Unterstützungsbedarf nachvollziehbar ordnen. Für Pflegefachkräfte, ambulante Dienste, Einrichtungen und Träger.", href: "/loesungen/pflege", link: "Quinn für Pflege entdecken" },
      { segment: "medicine", label: "Medizin", title: "Anamnese und Verlauf\nstrukturiert dokumentieren", text: "Gesprächsinhalte in einen prüfbaren Entwurf bringen. Für ärztliche Teams – mit geklärten Rollen und ärztlicher Freigabe vor der Übergabe.", href: "/loesungen/medizin", link: "Quinn für Medizin entdecken" }
    ],
    workflowLabel: "Ein gemeinsamer Ablauf", workflowTitle: "Vom Gespräch zum geprüften Text",
    steps: [
      ["Erfassen", "Gespräch aufzeichnen oder Notizen eingeben. Einwilligung und passenden Einsatzrahmen vorab klären."],
      ["Entwurf erhalten", "Quinn bereitet die dokumentierten Angaben in einer passenden Struktur vor. Fehlende Informationen bleiben Prüfpunkte."],
      ["Fachlich prüfen", "In der Pflege prüft die verantwortliche Fachkraft. Medizinische Dokumente benötigen die Freigabe einer verifizierten Ärztin oder eines verifizierten Arztes."],
      ["Übernehmen", "Geprüfte Inhalte selbst in das führende Fachsystem übernehmen. Der konkrete Weg richtet sich nach dem Dokumentationsablauf."]
    ],
    boundaryLabel: "Mit Ihren bestehenden Systemen", boundaryTitle: "Ihre Akte bleibt dort,\nwo sie hingehört",
    boundary: "Quinn erstellt Dokumentationsentwürfe. Ihr Pflege-, Praxis- oder Kliniksystem bleibt führend. Quinn ersetzt weder Pflege- noch Patientenakten und trifft keine eigenständigen Pflege-, Diagnose- oder Therapieentscheidungen.",
    transfer: "SIS-Abschnitte kopieren Sie gezielt in Ihr Pflegesystem. Im medizinischen Ablauf stehen Text und PDF der ärztlich freigegebenen Version zur manuellen Übernahme bereit. Das ist keine automatische Anbindung an PVS oder KIS.",
    responsibility: "Verantwortung bleibt sichtbar", responsibilityText: "Entwürfe lesen, mit den Quellen abgleichen und korrigieren. Medizinische Freigaben beziehen sich auf eine konkrete Version. Rollen, Datenschutz, Aufbewahrung und Eignung für Ihren Einsatz klären wir vor dem Start gemeinsam.",
    trustLink: "Datenschutz und Verantwortlichkeiten", trustHref: "/datenschutz",
    faqTitle: "Was Sie vor dem Start wissen sollten",
    faq: [
      ["Für wen ist Quinn gedacht?", "Für Pflegekräfte und pflegerische Organisationen sowie medizinische Teams. Pflege und Medizin haben eigene Abläufe. Medizinische Nutzung wird organisationsbezogen nach Klärung von Rollen und Einsatzrahmen freigeschaltet."],
      ["Welche Dokumente kann ich vorbereiten?", "In der Pflege unterstützt Quinn Pflegegespräche und die strukturierte SIS-Vorbereitung. Medizinische Teams können Anamnese- und Verlaufsentwürfe vorbereiten. Welche Abläufe für Ihr Team verfügbar und geeignet sind, klären wir in der Demo."],
      ["Welche Eingaben nutzt Quinn?", "Sie können Gesprächsnotizen eingeben oder Audio erfassen. Aufzeichnungen setzen den passenden Einwilligungs- und Datenschutzrahmen voraus. Eine Aufnahme allein ist noch kein geprüfter Dokumentationsentwurf."],
      ["Wer prüft und gibt Inhalte frei?", "Pflegeinhalte werden durch die verantwortliche Fachkraft geprüft und ergänzt. Medizinische Dokumente benötigen eine verifizierte ärztliche Freigabe der jeweiligen Version; eine administrative Rolle allein reicht dafür nicht."],
      ["Wie gelangen Inhalte ins Fachsystem?", "Manuell: SIS-Abschnitte kopieren Sie in die Pflegedokumentation. Ärztlich freigegebene medizinische Dokumente können als Text kopiert oder als PDF exportiert werden. Quinn schreibt nicht automatisch in Ihr PVS oder KIS."],
      ["Was übernimmt Quinn ausdrücklich nicht?", "Quinn ersetzt weder die fachliche Beurteilung noch die führende Akte. Es trifft keine autonomen Diagnosen oder Therapieentscheidungen und kann keine vollständige oder fehlerfreie Dokumentation garantieren."]
    ],
    closing: "Passt Quinn in Ihren Alltag?", closingText: "Sehen Sie den Ablauf mit einem synthetischen Beispiel aus Pflege oder Medizin. Gemeinsam klären wir Anforderungen, Zuständigkeiten und den Weg in Ihr bestehendes System."
  },
  en: {
    headline: ["Less time on documentation", "More time for people"],
    intro: "Quinn helps nursing care and medical teams turn conversations and notes into structured documentation drafts. You review and complete the content, then transfer it into your existing care, practice or hospital system.",
    demo: "Request a demo", discover: "Explore use cases", demoHref: "/en/book-demo",
    pillars: [
      { segment: "care", label: "Nursing care", title: "Document care conversations\nPrepare structured SIS drafts", text: "Organise statements, resources and support needs clearly. For care professionals, home care services, facilities and operators.", href: "/en/solutions/nursing-care", link: "Explore Quinn for nursing care" },
      { segment: "medicine", label: "Medicine", title: "Structure medical history\nand progress notes", text: "Turn conversation content into a reviewable draft. For medical teams — with clear roles and physician approval before handoff.", href: "/en/solutions/medicine", link: "Explore Quinn for medicine" }
    ],
    workflowLabel: "One shared workflow", workflowTitle: "From conversation to reviewed text",
    steps: [
      ["Capture", "Record a conversation or enter notes. Establish consent and the appropriate usage framework first."],
      ["Receive a draft", "Quinn prepares the documented information in an appropriate structure. Missing information remains a point for review."],
      ["Review professionally", "In nursing care, the responsible care professional reviews the content. Medical documents require approval by a verified physician."],
      ["Transfer", "Manually transfer reviewed content into your system of record. The exact handoff depends on your documentation workflow."]
    ],
    boundaryLabel: "Alongside your existing systems", boundaryTitle: "Your records stay\nwhere they belong",
    boundary: "Quinn creates documentation drafts. Your care, practice or hospital system remains the system of record. Quinn replaces neither care nor patient records and makes no autonomous care, diagnostic or treatment decisions.",
    transfer: "Copy individual SIS sections into your care system. In the medical workflow, text and PDF of the physician-approved version are available for manual transfer. This is not an automatic connection to a practice or hospital system.",
    responsibility: "Responsibility stays visible", responsibilityText: "Read drafts, compare them with their sources and correct them. Medical approvals apply to a specific version. Before use, we work with you to clarify roles, privacy, retention and suitability for your setting.",
    trustLink: "Privacy and responsibilities", trustHref: "/en/privacy",
    faqTitle: "What to know before you start",
    faq: [
      ["Who is Quinn for?", "Quinn is for nursing care professionals and organisations as well as medical teams. Nursing care and medicine have distinct workflows. Medical use is enabled per organisation after roles and the usage framework have been clarified."],
      ["Which documents can I prepare?", "In nursing care, Quinn supports care conversations and structured SIS preparation. Medical teams can prepare medical history and progress-note drafts. We discuss which workflows are available and suitable for your team during the demo."],
      ["What input does Quinn use?", "You can enter conversation notes or capture audio. Recordings require appropriate consent and privacy arrangements. A recording alone is not a reviewed documentation draft."],
      ["Who reviews and approves the content?", "The responsible care professional reviews and completes care content. Medical documents require a verified physician to approve the specific version; an administrative role alone is not sufficient."],
      ["How does content reach my existing system?", "Manually: copy SIS sections into your care documentation. Physician-approved medical documents can be copied as text or exported as a PDF. Quinn does not automatically write into your practice or hospital system."],
      ["What does Quinn not do?", "Quinn replaces neither professional judgement nor your system of record. It makes no autonomous diagnoses or treatment decisions and cannot guarantee complete or error-free documentation."]
    ],
    closing: "Could Quinn fit your working day?", closingText: "See the workflow with a synthetic nursing care or medical example. Together, we clarify your requirements, responsibilities and handoff into your existing system."
  }
} as const;
const icons = [MessageSquareText, FileText, ClipboardCheck, Copy];

export function EqualPillarLanding({ locale }: { locale: SiteLocale }) {
  const t = content[locale];
  return <div className="min-h-screen bg-white text-foreground">
    <SiteHeader locale={locale} />
    <main>
      <section className="quinn-container pb-14 pt-16 sm:pb-20 sm:pt-24">
        <h1 className="text-[clamp(1.125rem,4.85vw,4.4rem)] font-semibold leading-[1.16] tracking-[-0.045em]">
          <span className="block whitespace-nowrap">{t.headline[0]}</span>
          <span className="block whitespace-nowrap text-[#1E6B72]">{t.headline[1]}</span>
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">{t.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
          <TrackedDemoLink locale={locale} source="homepage" href={t.demoHref as Route} className="inline-flex min-h-12 items-center gap-3 rounded-lg bg-[#1E6B72] px-6 py-3 text-sm font-semibold text-white hover:bg-[#17555B]">{t.demo}<ArrowRight className="h-4 w-4" aria-hidden="true" /></TrackedDemoLink>
          <a href="#bereiche" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-border underline-offset-4 hover:decoration-current">{t.discover}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
        </div>
      </section>
      <section id="bereiche" aria-label={locale === "de" ? "Pflege und Medizin" : "Nursing care and medicine"} className="quinn-container scroll-mt-24">
        <div className="grid border-y border-border md:grid-cols-2">
          {t.pillars.map((pillar) => <article key={pillar.segment} data-pillar={pillar.segment} className="flex flex-col py-9 first:border-b first:border-border md:py-11 md:first:border-b-0 md:first:border-r md:first:pr-12 md:last:pl-12">
            <p className="text-sm font-semibold text-[#1E6B72]">{pillar.label}</p>
            <h2 className="mt-4 whitespace-pre-line text-2xl font-semibold leading-snug tracking-[-0.025em] lg:text-3xl">{pillar.title}</h2>
            <p className="mb-6 mt-4 max-w-lg text-base leading-7 text-secondary-foreground">{pillar.text}</p>
            <Link href={pillar.href as Route} className="mt-auto inline-flex min-h-11 items-center gap-3 self-start text-sm font-semibold hover:text-[#1E6B72]">{pillar.link}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>
          </article>)}
        </div>
      </section>
      <section className="quinn-container py-16 sm:py-24">
        <p className="text-sm font-medium text-[#1E6B72]">{t.workflowLabel}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{t.workflowTitle}</h2>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{t.steps.map(([title, text], index) => {
          const Icon = icons[index];
          return <li key={title} className="border-t border-border pt-5"><div className="flex items-center justify-between text-[#1E6B72]"><span className="text-xs font-medium">0{index + 1}</span><Icon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary-foreground">{text}</p></li>;
        })}</ol>
      </section>
      <ProductProofFlow locale={locale} />
      <section className="quinn-container py-16 sm:py-24">
        <div className="grid gap-10 border-t border-border pt-12 lg:grid-cols-2 lg:gap-20">
          <div><p className="text-sm font-medium text-[#1E6B72]">{t.boundaryLabel}</p><h2 className="mt-4 whitespace-pre-line text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{t.boundaryTitle}</h2></div>
          <div className="space-y-5 text-base leading-8 text-secondary-foreground"><p>{t.boundary}</p><p>{t.transfer}</p><h3 className="pt-4 text-xl font-semibold text-foreground">{t.responsibility}</h3><p>{t.responsibilityText}</p><Link href={t.trustHref as Route} className="inline-flex min-h-11 items-center gap-2 font-medium text-[#1E6B72] underline underline-offset-4">{t.trustLink}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>
      <section className="quinn-container py-16 sm:py-24"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><h2 className="max-w-md text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{t.faqTitle}</h2><div className="border-t border-border">{t.faq.map(([question, answer]) => <details key={question} className="group border-b border-border py-5"><summary className="cursor-pointer text-base font-semibold leading-7 marker:text-[#1E6B72]">{question}</summary><p className="mt-4 text-base leading-7 text-secondary-foreground">{answer}</p></details>)}</div></div></section>
      <section className="quinn-container py-16 sm:py-24"><div className="border-t border-border pt-12"><h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">{t.closing}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-secondary-foreground">{t.closingText}</p><div className="mt-8 flex flex-wrap gap-4"><SegmentDemoLink locale={locale} segment="care" /><SegmentDemoLink locale={locale} segment="medicine" /></div></div></section>
    </main>
    <SiteFooter locale={locale} />
  </div>;
}
