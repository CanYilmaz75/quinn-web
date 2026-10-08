import type { Route } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ProductProofFlow } from "./product-proof-flow";
import { SegmentDemoLink, type SiteLocale, type DocumentationSegment } from "./pillar-links";

const copy = {
  de: {
    care: {
      label: "Quinn für Pflege", title: "Pflegegespräche dokumentieren\nSIS strukturiert vorbereiten",
      intro: "Gute Pflegedokumentation beginnt beim Zuhören. Quinn ordnet Gespräche und Notizen zu prüfbaren Entwürfen – damit Aussagen, Ressourcen und Unterstützungsbedarf nachvollziehbar bleiben.",
      sections: [
        ["Pflegegespräche", "Gesprächsinhalte und Beobachtungen sachlich dokumentieren. Die Pflegefachkraft prüft, ergänzt und verantwortet den Text."],
        ["SIS-Vorbereitung", "Angaben für die Themenfelder vorbereiten und fehlende Informationen klären. Die pflegefachliche Einschätzung bleibt bei der Fachkraft."],
        ["Im bestehenden Pflegesystem", "Geprüfte SIS-Abschnitte einzeln kopieren und gezielt übernehmen. Quinn ergänzt Ihre Pflegedokumentation, ersetzt aber keine Bewohnerakte."]
      ],
      links: [["Pflegeheime", "/loesungen/pflegeheime"], ["Ambulante Pflege", "/loesungen/ambulante-pflege"], ["Träger & QM", "/loesungen/traeger-qm"], ["SIS-Aufnahme", "/anwendungen/sis-aufnahme"], ["Sprachdokumentation Pflege", "/anwendungen/sprachdokumentation-pflege"]],
      related: "Passend zu Ihrem Pflegealltag", closing: "Mit Ihrem Team beginnen", closingText: "In der Demo zeigen wir einen synthetischen Pflegefall. Gemeinsam klären wir Ihren Dokumentationsablauf, Rollen, Datenschutz und die manuelle Übernahme in Ihr Fachsystem."
    },
    medicine: {
      label: "Quinn für Medizin", title: "Anamnese und Verlauf\nstrukturiert dokumentieren",
      intro: "Quinn bereitet Gesprächsinhalte und Notizen als medizinische Dokumentationsentwürfe vor. Ärztliche Teams prüfen die Quellen, ergänzen fehlende Angaben und geben eine konkrete Version frei. Diagnosen und Therapieentscheidungen bleiben beim Behandlungsteam.",
      sections: [
        ["In der Praxis", "Anamnese- und Verlaufsnotizen strukturiert vorbereiten. Angaben aus dem Gespräch bleiben von fehlenden oder noch zu klärenden Informationen getrennt."],
        ["Im klinischen Umfeld", "Anamnese und Verlauf sind mögliche Ansatzpunkte. Ob Quinn zu Ihrem Klinikablauf passt, klären wir vor einem Einsatz – einschließlich Zuständigkeiten und Dokumentationsstandards. Keine automatische KIS-Anbindung."],
        ["Ärztlich geprüft übergeben", "Eine verifizierte Ärztin oder ein verifizierter Arzt prüft und genehmigt die konkrete Version. Erst dann stehen deren Text und PDF für die manuelle Übernahme ins Praxissystem bereit."]
      ],
      links: [["Produkt und Prüfung", "/produkt/pruefung-qualitaet"], ["Datenschutz", "/datenschutz"], ["Preise", "/preise"], ["Pilotprogramm", "/pilotprogramm"], ["Dokumentation für Psychologen", "/loesungen/psychologen"]],
      related: "Den Einsatzrahmen klären", closing: "Kontrolliert starten, gemeinsam prüfen", closingText: "Medizinische Nutzung wird organisationsbezogen freigeschaltet. Vor dem Einsatz klären wir ärztliche Verantwortlichkeiten, Datenschutz, Aufbewahrung und Eignung für Ihren konkreten Ablauf. Quinn ersetzt keine Patientenakte und trifft keine autonomen medizinischen Entscheidungen."
    }
  },
  en: {
    care: {
      label: "Quinn for nursing care", title: "Document care conversations\nPrepare structured SIS drafts",
      intro: "Good care documentation starts with listening. Quinn organises conversations and notes into reviewable drafts, keeping statements, resources and support needs clear.",
      sections: [
        ["Care conversations", "Document conversations and observations factually. The care professional reviews, completes and takes responsibility for the text."],
        ["SIS preparation", "Prepare information for the SIS topic fields and clarify missing details. Professional nursing assessment remains with the care professional."],
        ["In your existing care system", "Copy reviewed SIS sections individually and transfer them where needed. Quinn complements your care documentation but does not replace resident records."]
      ],
      links: [["Care homes", "/en/solutions/care-homes"], ["Home care", "/en/solutions/home-care"], ["Operators & QM", "/en/solutions/operators-quality-management"], ["SIS intake", "/en/use-cases/sis-intake"], ["Voice documentation for care", "/en/use-cases/voice-documentation-care"]],
      related: "For your care setting", closing: "Start with your team", closingText: "In the demo, we show a synthetic care case. Together, we clarify your documentation workflow, roles, privacy and manual handoff into your existing system."
    },
    medicine: {
      label: "Quinn for medicine", title: "Structure medical history\nand progress notes",
      intro: "Quinn prepares conversation content and notes as medical documentation drafts. Medical teams check the sources, complete missing details and approve a specific version. Diagnoses and treatment decisions remain with the treatment team.",
      sections: [
        ["In the practice", "Prepare structured medical history and progress-note drafts. Information from the conversation remains distinct from missing or unresolved details."],
        ["In the hospital setting", "Medical history and progress notes are possible starting points. Before use, we assess suitability for your hospital workflow, responsibilities and documentation standards. No automatic hospital-system connection."],
        ["Handoff after physician review", "A verified physician reviews and approves the specific version. Only then are its text and PDF available for manual transfer into the practice system."]
      ],
      links: [["Product and review", "/en/product/review-quality"], ["Privacy", "/en/privacy"], ["Pricing", "/en/pricing"], ["Pilot program", "/en/pilot-program"], ["Documentation for psychologists", "/en/solutions/psychologists"]],
      related: "Clarify your usage framework", closing: "Start with a controlled, shared review", closingText: "Medical use is enabled per organisation. Before use, we clarify physician responsibilities, privacy, retention and suitability for your specific workflow. Quinn does not replace patient records or make autonomous medical decisions."
    }
  }
} as const;

export function SolutionHub({ locale, segment }: { locale: SiteLocale; segment: DocumentationSegment }) {
  const t = copy[locale][segment];
  return <div className="min-h-screen bg-white text-foreground"><SiteHeader locale={locale} /><main>
    <section className="quinn-container py-16 sm:py-24"><p className="text-sm font-semibold text-[#1E6B72]">{t.label}</p><h1 className="mt-5 max-w-5xl whitespace-pre-line text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">{t.title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">{t.intro}</p><div className="mt-8"><SegmentDemoLink locale={locale} segment={segment} source="seo-landing" /></div></section>
    <section className="quinn-container pb-16"><div className="grid gap-8 md:grid-cols-3">{t.sections.map(([title, text]) => <article key={title} className="border-t border-border pt-6"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-4 text-base leading-7 text-secondary-foreground">{text}</p></article>)}</div></section>
    <ProductProofFlow locale={locale} segment={segment} />
    <section className="quinn-container py-12"><h2 className="text-3xl font-semibold tracking-tight">{t.related}</h2><div className="mt-6 grid gap-x-12 sm:grid-cols-2">{t.links.map(([label, href]) => <Link key={href} href={href as Route} className="flex min-h-16 items-center justify-between gap-4 border-b border-border py-4 text-base font-medium hover:text-[#1E6B72]">{label}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></Link>)}</div></section>
    <section className="quinn-container py-16 sm:py-24"><div className="border-t border-border pt-12"><h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.closing}</h2><p className="mt-5 max-w-3xl text-lg leading-8 text-secondary-foreground">{t.closingText}</p><div className="mt-8"><SegmentDemoLink locale={locale} segment={segment} source="seo-landing" /></div></div></section>
  </main><SiteFooter locale={locale} /></div>;
}
