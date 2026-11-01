import type { Route } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { TrackedDemoLink } from "@/components/analytics/tracked-demo-link";
import { MultilingualProof } from "./multilingual-proof";
import { SegmentDemoLink, type SiteLocale } from "./pillar-links";

const content = {
  de: {
    headline: ["Weniger Zeit für Dokumentation", "Mehr Zeit für Menschen"],
    languagePromise: "In der eigenen Sprache sprechen. Auf Deutsch dokumentieren.",
    intro: "Quinn unterstützt Pflegekräfte und medizinische Teams dabei, aus Gesprächen und Notizen strukturierte Dokumentationsentwürfe zu erstellen. Sie prüfen, ergänzen und übernehmen den Text in Ihr Fachsystem.",
    demo: "Demo anfragen", discover: "Beispiele ansehen", demoHref: "/demo-buchen",
    mediaAlt: "Eine Person in blauer Berufsbekleidung spricht in ein Smartphone",
    photoCaption: "Symbolbild",
    specimen: "Fiktiver Dokumentationsauszug", specimenNote: "Redaktionelles Beispiel, keine Live-Demo. Nicht auf die abgebildeten Personen bezogen.",
    sourceLabel: "Gesprochene Angabe · Englisch", draftLabel: "Deutscher Entwurf · ungeprüft",
    sourceQuote: "The patient reports a cough for three days.",
    draftText: "Patient berichtet über Husten seit drei Tagen.",
    draftOpen: "Noch zu klären: Begleitsymptome. Ärztliche Prüfung erforderlich.",
    benefitsTitle: "Weniger Formulieren. Mehr bei der Sache.",
    benefits: [
      { cue: "Ihre Sprache → Deutsch", title: "Vertraut sprechen", text: "Beobachtungen und Gesprächsinhalte in der eigenen Sprache festhalten, statt jeden Satz zuerst auf Deutsch auszuformulieren. Die Eignung Ihrer Sprachkombination klären wir vorab." },
      { cue: "Gespräch → Struktur", title: "Nicht vor einem leeren Blatt beginnen", text: "Aus vorhandenen Angaben entsteht ein gegliederter Entwurf. So haben Sie einen konkreten Ausgangspunkt für Pflegeprotokoll, SIS, Anamnese oder Verlauf." },
      { cue: "Quelle ↔ Entwurf", title: "Gezielt prüfen und ergänzen", text: "Entwurf und ursprüngliche Angaben abgleichen, offene Punkte klären und fachlich ergänzen. Die Entscheidung über den fertigen Text bleibt bei der verantwortlichen Fachperson." }
    ],
    pillars: [
      { segment: "care", title: "Dokumentation in der Pflege", text: "Nach der Unterstützung beim Aufstehen, dem Beratungsgespräch oder einer Übergabe: Halten Sie fest, was Sie beobachtet und getan haben. Quinn bereitet daraus Pflegeprotokolle und SIS-Entwürfe vor, die Sie fachlich prüfen und ergänzen.", documents: "Pflegeprotokoll · SIS-Vorbereitung", href: "/loesungen/pflege", link: "Quinn für Pflege entdecken" },
      { segment: "medicine", title: "Dokumentation in der Medizin", text: "Gesprächsinhalte für Anamnese und Verlauf strukturieren, statt den Text von Grund auf zu formulieren. Eine verifizierte Ärztin oder ein verifizierter Arzt prüft den Inhalt und gibt die konkrete Version vor der manuellen Übernahme frei.", documents: "Anamnese · Verlaufsdokumentation", href: "/loesungen/medizin", link: "Quinn für Medizin entdecken" }
    ],
    workflowTitle: "So arbeiten Sie mit Quinn",
    steps: [
      ["Erfassen", "Gespräch aufzeichnen oder Notizen eingeben. Einwilligung und Einsatzrahmen vorab klären."],
      ["Entwurf erhalten", "Angaben werden passend strukturiert. Fehlende Informationen bleiben als Prüfpunkte sichtbar."],
      ["Fachlich prüfen", "Mit der Quelle abgleichen und korrigieren. In der Pflege prüft die Fachkraft, in der Medizin gibt eine verifizierte ärztliche Person die Version frei."],
      ["Selbst übernehmen", "SIS-Abschnitte kopieren. Medizinische Texte oder PDFs erst nach ärztlicher Freigabe manuell ins Fachsystem übernehmen."]
    ],
    boundaryTitle: "Ihre Akte bleibt bei Ihnen",
    boundary: "Ihr Pflege-, Praxis- oder Kliniksystem bleibt führend. Quinn ersetzt weder Pflege- noch Patientenakten und trifft keine eigenständigen Pflege-, Diagnose- oder Therapieentscheidungen.",
    transfer: "Keine automatische Anbindung an PVS oder KIS. Medizinische Nutzung wird organisationsbezogen nach Klärung von Rollen und Einsatzrahmen freigeschaltet. Datenschutz, Aufbewahrung und Eignung klären wir vor dem Start gemeinsam.",
    trustLink: "Datenschutz und Verantwortlichkeiten", trustHref: "/datenschutz",
    introductionTitle: "Ein Einstieg, der zu Ihrem Team passt",
    introductionText: "Bevor Quinn in Ihren Alltag kommt, besprechen wir einen konkreten Dokumentationsablauf. Nicht jede Aufnahme und nicht jedes Dokument eignet sich für denselben Einsatz.",
    introductionItems: [
      ["Ihren Ablauf verstehen", "Pflegeprotokoll, SIS-Vorbereitung, Anamnese oder Verlauf: Welcher Text entsteht heute wie, wer prüft ihn und wohin wird er übernommen?"],
      ["Mit einem fiktiven Fall beginnen", "In der Demo sehen Sie Ausgangsangaben, Entwurf und offene Punkte zusammen. Keine echten Gesundheitsdaten. Auch die gewünschte Sprachkombination besprechen wir konkret."],
      ["Den Einsatz gemeinsam abgrenzen", "Vor einem möglichen Start klären wir Verantwortlichkeiten, Einwilligung, Datenschutz und Aufbewahrung sowie den manuellen Weg in Ihr Fachsystem. Die Freischaltung erfolgt abgestimmt, nicht im Selbstservice."]
    ],
    introductionAction: "Ablauf in der Demo besprechen",
    faqTitle: "Häufige Fragen",
    faq: [
      ["Fachsystem wechseln?", "Nein. Sie prüfen und ergänzen den Entwurf und übernehmen den freigegebenen Text selbst. Ihr bestehendes System bleibt die führende Akte. Eine automatische Anbindung wird nicht vorausgesetzt oder versprochen."],
      ["Geht das auch auf Deutsch?", "Sie können auch deutschsprachige Gespräche und Notizen als Ausgangspunkt nutzen. Mehrsprachige Erfassung ist eine Möglichkeit, keine Voraussetzung. Die Eignung Ihres Ablaufs klären wir vorab."],
      ["Fehlende Angaben?", "Fehlende Angaben sind keine negativen Befunde. Sie müssen mit der Quelle abgeglichen, bei Bedarf nachgefragt und fachlich ergänzt werden. Ein Entwurf ist kein freigegebener Eintrag."],
      ["Welche Sprachen?", "Die Eignung hängt von Sprache, Audioqualität und Fachkontext ab. Eine verbindliche Liste validierter Sprachen veröffentlichen wir derzeit nicht. Wir klären Ihren Bedarf und testen den Ablauf vor dem Einsatz. Die redaktionellen Beispiele sind kein Nachweis validierter Sprachqualität."],
      ["Sprachwechsel?", "Jede Sprachkombination muss im konkreten Einsatzkontext geprüft werden. Automatische Spracherkennung garantiert keine zuverlässige Verarbeitung gemischter Aufnahmen."],
      ["Ersatz für Dolmetscher:innen?", "Nein. Mehrsprachige Dokumentationsvorbereitung ersetzt keine qualifizierte Sprachmittlung, insbesondere nicht bei Aufklärung, Einwilligung oder medizinischen Entscheidungen."],
      ["Welche Dokumente?", "Pflegeprotokolle und strukturierte SIS-Entwürfe in der Pflege; Anamnese- und Verlaufsentwürfe in der Medizin. Welche Abläufe für Ihr Team verfügbar und geeignet sind, klären wir in der Demo."],
      ["Wer trägt Verantwortung?", "Die verantwortliche Pflegefachkraft prüft und ergänzt Pflegeinhalte. Medizinische Dokumente benötigen die Freigabe der konkreten Version durch eine verifizierte Ärztin oder einen verifizierten Arzt. Eine administrative Rolle allein reicht nicht. Quinn ersetzt keine fachliche Beurteilung und garantiert weder vollständige noch fehlerfreie Dokumentation."]
    ],
    closing: "Quinn in Ihrem Team", closingText: "Lernen Sie den Ablauf an fiktiven Beispielen kennen. Wir besprechen Ihre Sprachen, Anforderungen und den Weg in Ihr bestehendes System."
  },
  en: {
    headline: ["Less time on documentation", "More time for people"],
    languagePromise: "Speak in your own language. Document in German.",
    intro: "Quinn helps nursing care and medical teams turn conversations and notes into structured documentation drafts. You review, complete and transfer the text into your existing system.",
    demo: "Request a demo", discover: "See the examples", demoHref: "/en/book-demo",
    mediaAlt: "A person in blue scrubs speaking into a smartphone",
    photoCaption: "Illustrative photo",
    specimen: "Fictional documentation excerpt", specimenNote: "Editorial example, not a live demo. Unrelated to the people pictured.",
    sourceLabel: "Spoken statement · English", draftLabel: "German draft · unreviewed",
    sourceQuote: "The patient reports a cough for three days.",
    draftText: "Patient berichtet über Husten seit drei Tagen.",
    draftOpen: "To clarify: accompanying symptoms. Physician review required.",
    benefitsTitle: "Less wording. More attention to the work.",
    benefits: [
      { cue: "Your language → German", title: "Speak in a familiar language", text: "Capture observations and conversation content in your own language, rather than first composing every sentence in German. We assess your language combination before use." },
      { cue: "Conversation → Structure", title: "Start with more than a blank page", text: "Available information becomes a structured draft. It gives you a concrete starting point for care notes, SIS, medical history or progress notes." },
      { cue: "Source ↔ Draft", title: "Review with a clear starting point", text: "Compare the draft with the original statements, clarify open points and add your professional assessment. The responsible professional decides on the final text." }
    ],
    pillars: [
      { segment: "care", title: "Documentation in nursing care", text: "After helping someone get up, a care consultation or a handover: capture what you observed and did. Quinn prepares care notes and SIS drafts for you to professionally review and complete.", documents: "Care notes · SIS preparation", href: "/en/solutions/nursing-care", link: "Explore Quinn for nursing care" },
      { segment: "medicine", title: "Documentation in medicine", text: "Structure conversation content for medical history and progress notes instead of composing the text from scratch. A verified physician reviews the content and approves the specific version before manual transfer.", documents: "Medical history · Progress notes", href: "/en/solutions/medicine", link: "Explore Quinn for medicine" }
    ],
    workflowTitle: "Working with Quinn",
    steps: [
      ["Capture", "Record a conversation or enter notes. Establish consent and the usage framework first."],
      ["Receive a draft", "Statements are organised into a suitable structure. Missing details remain visible for review."],
      ["Review", "Compare with the source and correct it. A care professional reviews care content; a verified physician approves the specific medical version."],
      ["Transfer manually", "Copy SIS sections. Manually transfer medical text or PDFs into your existing system only after physician approval."]
    ],
    boundaryTitle: "Your records stay with you",
    boundary: "Your care, practice or hospital system remains the system of record. Quinn replaces neither care nor patient records and makes no autonomous care, diagnostic or treatment decisions.",
    transfer: "No automatic connection to practice or hospital systems. Medical use is enabled per organisation after roles and the usage framework have been clarified. We discuss privacy, retention and suitability with you before use.",
    trustLink: "Privacy and responsibilities", trustHref: "/en/privacy",
    introductionTitle: "A start that fits your team",
    introductionText: "Before Quinn enters your daily work, we discuss one concrete documentation workflow. Not every recording or document is suitable for the same use.",
    introductionItems: [
      ["Understand your workflow", "Care notes, SIS preparation, medical history or progress notes: how is the text created today, who reviews it and where does it go?"],
      ["Start with a fictional case", "In the demo, see source statements, a draft and open points together. No real health data. We also discuss your specific language combination."],
      ["Agree the scope together", "Before a possible start, clarify responsibilities, consent, privacy, retention and manual handoff into your existing system. Access is arranged together, not through self-service signup."]
    ],
    introductionAction: "Discuss your workflow in a demo",
    faqTitle: "Common questions",
    faq: [
      ["Change our existing system?", "No. You review and complete the draft, then transfer the approved text yourself. Your existing system remains the system of record. No automatic connection is assumed or promised."],
      ["Can we use German as well?", "You can also start from German conversations and notes. Multilingual capture is an option, not a requirement. We assess your workflow before use."],
      ["Missing details?", "Missing information is not a negative finding. Compare it with the source, ask follow-up questions where needed and add your professional assessment. A draft is not an approved record."],
      ["Which languages?", "Suitability depends on language, audio quality and professional context. We do not currently publish a definitive list of validated languages. We clarify your needs and test the workflow before use. The editorial examples are not evidence of validated language quality."],
      ["Language switching?", "Each language combination must be assessed in its specific setting. Automatic language detection does not guarantee reliable handling of mixed-language recordings."],
      ["A replacement for interpreters?", "No. Multilingual documentation preparation does not replace qualified interpreting, especially for informed consent or medical decisions."],
      ["Which documents?", "Care notes and structured SIS drafts in nursing care; medical history and progress-note drafts in medicine. We discuss which workflows are available and suitable for your team during the demo."],
      ["Who is responsible?", "The responsible care professional reviews and completes care content. A verified physician must approve the specific version of medical documents. An administrative role alone is not sufficient. Quinn does not replace professional judgement or guarantee complete or error-free documentation."]
    ],
    closing: "Quinn in your team", closingText: "Explore the workflow through fictional examples. We discuss your languages, requirements and handoff into your existing system."
  }
} as const;

export function EqualPillarLanding({ locale }: { locale: SiteLocale }) {
  const t = content[locale];
  return <div className="taste-home">
    <SiteHeader locale={locale} />
    <main id="main-content">
      <section className="taste-frame taste-hero" aria-label={locale === "de" ? "Quinn für Pflege und Medizin" : "Quinn for nursing care and medicine"}>
        <div className="taste-hero-stage">
          <div className="taste-hero-intro">
        <h1 className="taste-headline">
          <span className="block whitespace-nowrap">{t.headline[0]}</span>
          <span className="block whitespace-nowrap">{t.headline[1]}</span>
        </h1>
          <p className="taste-hero-description">{t.intro}</p>
          <p className="taste-promise">{t.languagePromise}</p>
          <div className="taste-hero-actions">
            <TrackedDemoLink locale={locale} source="homepage" href={t.demoHref as Route} className="taste-button">{t.demo}<span aria-hidden="true">↗</span></TrackedDemoLink>
            <a href="#mehrsprachig" className="taste-link">{t.discover}</a>
          </div>
          </div>
          <figure className="taste-hero-media">
            <div className="taste-photo-composition">
              <Image src="/images/healthcare-dictation.webp" alt={t.mediaAlt} width={1280} height={853} sizes="(max-width: 1023px) 100vw, 48vw" priority />
              <div className="taste-hero-paper" data-hero-draft>
                <p className="taste-paper-label">{t.specimen}</p>
                <p className="taste-paper-source">{t.sourceLabel}</p>
                <blockquote lang="en">“{t.sourceQuote}”</blockquote>
                <div className="taste-paper-result"><p>{t.draftLabel}</p><p lang="de">{t.draftText}</p><p>{t.draftOpen}</p></div>
              </div>
            </div>
            <figcaption><span>{t.photoCaption}</span><span>{t.specimenNote}</span></figcaption>
          </figure>
        </div>
      </section>
      <section className="taste-benefits taste-frame taste-section" aria-labelledby="benefits-title">
        <h2 id="benefits-title">{t.benefitsTitle}</h2>
        <div className="taste-benefit-grid">{t.benefits.map((benefit) => <article key={benefit.title}><p className="taste-benefit-cue">{benefit.cue}</p><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}</div>
      </section>
      <MultilingualProof locale={locale} />
      <section id="bereiche" aria-label={locale === "de" ? "Pflege und Medizin" : "Nursing care and medicine"} className="taste-frame taste-section">
        <div className="taste-pillars">
          {t.pillars.map((pillar) => <article key={pillar.segment} data-pillar={pillar.segment}>
            <h2>{pillar.title}</h2>
            <p>{pillar.text}</p>
            <div className="taste-pillar-bottom"><p>{pillar.documents}</p><Link href={pillar.href as Route} className="taste-link">{pillar.link}<span aria-hidden="true"> ↗</span></Link></div>
          </article>)}
        </div>
      </section>
      <section className="taste-process" aria-labelledby="workflow-title">
        <div className="taste-frame taste-process-layout">
          <div className="taste-process-intro">
          <h2 id="workflow-title">{t.workflowTitle}</h2>
          <p>{locale === "de" ? "Vom gesprochenen Gedanken bis zum Text in Ihrem bestehenden System. Mit einem bewussten Prüfschritt dazwischen." : "From a spoken thought to text in your existing system. With a deliberate review step in between."}</p>
          </div>
          <ol>{t.steps.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
        </div>
      </section>
      <section className="taste-boundary">
        <div className="taste-frame">
          <div className="taste-records">
            <h2>{t.boundaryTitle}</h2>
            <div><p>{t.boundary}</p><p>{t.transfer}</p><Link href={t.trustHref as Route} className="taste-link">{t.trustLink}</Link></div>
          </div>
        </div>
      </section>
      <section className="taste-frame taste-section taste-introduction" aria-labelledby="introduction-title">
        <div className="taste-introduction-intro">
          <h2 id="introduction-title">{t.introductionTitle}</h2>
          <p>{t.introductionText}</p>
          <TrackedDemoLink locale={locale} source="homepage" href={t.demoHref as Route} className="taste-link">{t.introductionAction}</TrackedDemoLink>
        </div>
        <ol role="list" className="taste-introduction-list">{t.introductionItems.map(([title, text]) => <li key={title}><h3>{title}</h3><p>{text}</p></li>)}</ol>
      </section>
      <section className="taste-frame taste-section taste-faq" aria-labelledby="faq-title">
        <h2 id="faq-title">{t.faqTitle}</h2>
        <div className="taste-faq-list">{t.faq.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="taste-close" aria-labelledby="closing-title">
        <div className="taste-frame">
          <h2 id="closing-title">{t.closing}</h2>
          <div className="taste-close-bottom"><p>{t.closingText}</p><div className="taste-close-actions"><SegmentDemoLink locale={locale} segment="care" /><SegmentDemoLink locale={locale} segment="medicine" /></div></div>
        </div>
      </section>
    </main>
    <SiteFooter locale={locale} />
  </div>;
}
