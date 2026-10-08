import type { Route } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

type Locale = "de" | "en";
const routes = {
  de: {
    overview: "/produkt/uebersicht",
    review: "/produkt/pruefung-qualitaet",
    demo: "/demo-buchen",
    care: "/loesungen/pflege",
    medicine: "/loesungen/medizin",
  },
  en: {
    overview: "/en/product/overview",
    review: "/en/product/review-quality",
    demo: "/en/book-demo",
    care: "/en/solutions/nursing-care",
    medicine: "/en/solutions/medicine",
  },
} as const;
const copy = {
  de: {
    overview: "Produktübersicht",
    review: "Prüfung & Qualität",
    demo: "Demo anfragen",
    back: "Zur Produktübersicht",
    more: "Prüfung im Detail ansehen",
    title: "Aus Gesprächen wird prüfbare Dokumentation.",
    intro:
      "Quinn unterstützt Pflege und Medizin dabei, Gespräche, Audio und Notizen in strukturierte Entwürfe zu bringen. Ihr Team prüft den Inhalt und übernimmt ihn anschließend manuell ins bestehende Fachsystem.",
    workflow: "Ein Ablauf mit klarer Verantwortung",
    steps: [
      [
        "Erfassen",
        "Gespräch, Audio oder Notizen bilden die Grundlage. Den Einsatz von Aufnahmen und die erforderliche Einwilligung klären Sie vorab.",
      ],
      [
        "Entwurf vorbereiten",
        "Quinn ordnet die vorhandenen Angaben. Der Text ist ein Vorschlag zur Prüfung, kein fertiger Akteneintrag.",
      ],
      [
        "Fachlich prüfen",
        "Quellen abgleichen, fehlende Angaben klären und den Entwurf bearbeiten. Die Verantwortung bleibt bei den zuständigen Fachpersonen.",
      ],
      [
        "Manuell übernehmen",
        "Geprüfte Inhalte gezielt ins führende Fachsystem übertragen. Keine automatische Pflege-, PVS- oder KIS-Schnittstelle.",
      ],
    ],
    examples: "Zwei Bereiche. Eigene fachliche Abläufe.",
    exampleNote:
      "Fiktive, synthetische Beispiele – keine Live-Demo, keine vollständige Akte.",
    source: "Gesprächsausschnitt",
    draft: "Entwurf · ungeprüft",
    open: "Noch zu klären",
    pillars: [
      {
        label: "Pflege",
        title: "Gespräche festhalten. SIS vorbereiten.",
        input:
          "Morgens bin ich beim Aufstehen wackelig. Ich möchte, dass jemand bei mir bleibt. Im Zimmer nutze ich meinen Rollator.",
        document: "SIS · Mobilität",
        text: "Die Bewohnerin berichtet über Unsicherheit beim morgendlichen Aufstehen. Sie wünscht Begleitung und nutzt nach eigener Aussage im Zimmer einen Rollator.",
        question: "Reicht Begleitung aus oder ist Hilfe beim Aufstehen nötig?",
        responsibility:
          "Die Pflegefachkraft klärt den Unterstützungsbedarf, ergänzt ihre Einschätzung und übernimmt den geprüften Abschnitt ins Pflegesystem.",
        link: "Quinn für Pflege",
      },
      {
        label: "Medizin",
        title: "Anamnese und Verlauf vorbereiten.",
        input:
          "Seit drei Tagen habe ich Husten, besonders abends. Morgens nehme ich meine Blutdrucktablette. Den Namen weiß ich gerade nicht.",
        document: "Anamnese · Beschwerden und Medikation",
        text: "Patient berichtet über Husten seit drei Tagen, besonders abends. Morgendliche Einnahme einer Blutdrucktablette laut Patient; Präparat und Dosierung nicht bekannt.",
        question:
          "Welches Präparat und welche Dosierung stehen im Medikationsplan?",
        responsibility:
          "Medikation abgleichen, ärztlich prüfen und die konkrete Version freigeben. Erst danach deren Text oder PDF manuell ins Praxissystem übernehmen.",
        link: "Quinn für Medizin",
      },
    ],
    responsibility: "Die Prüfung gehört zum Produkt.",
    responsibilityIntro:
      "Ein gut formulierter Entwurf ist noch kein fachlich geprüfter Eintrag. Quinn unterstützt die Durchsicht; Hinweise können unvollständig sein und ersetzen keine eigene Prüfung.",
    roles: [
      [
        "Pflegefachliche Prüfung",
        "Die verantwortliche Pflegefachkraft prüft Aussagen, Beobachtungen, Ressourcen und Unterstützungsbedarf. Sie ergänzt ihre fachliche Einschätzung. Eine medizinische Freigabe ist nicht mit dieser pflegefachlichen Prüfung gleichzusetzen.",
      ],
      [
        "Ärztliche Freigabe",
        "Medizinische Dokumente benötigen die Freigabe durch eine verifizierte, verantwortliche ärztliche Person. Sie bezieht sich auf eine konkrete Version – nicht pauschal auf jeden späteren Entwurf. Eine Verwaltungsrolle allein berechtigt nicht zur ärztlichen Freigabe.",
      ],
    ],
    boundary: "Vor Ihrem bestehenden System, nicht an seiner Stelle.",
    boundaryText:
      "Quinn ersetzt keine Bewohner- oder Patientenakte und keine Pflege-, Praxis- oder Kliniksoftware. Diagnosen, Therapieentscheidungen und pflegefachliche Entscheidungen bleiben bei den zuständigen Fachpersonen. Eignung, Datenschutz, Aufbewahrung und Verantwortlichkeiten klären wir vor dem Einsatz.",
    closing: "Den eigenen Ablauf gemeinsam ansehen.",
    closingText:
      "In einer Demo mit synthetischen Angaben besprechen wir Ihren Pflege- oder Medizinablauf, die fachliche Prüfung und die manuelle Übergabe.",
    reviewTitle: "Ein Entwurf braucht einen zweiten Blick.",
    reviewIntro:
      "Für Pflege und Medizin beginnt Qualität beim Abgleich mit der Quelle. Quinn unterstützt die Prüfung – die fachliche Bewertung und Freigabe bleiben bei den verantwortlichen Personen.",
    reviewHeading: "Was vor der Übernahme geprüft wird",
    reviewSteps: [
      [
        "Quelle und Aussage abgleichen",
        "Passt der Text zu Gespräch, Notizen und vorliegenden Unterlagen? Prüfen Sie, wer etwas berichtet hat und was tatsächlich beobachtet wurde. Im medizinischen Ablauf helfen Quellenbezüge beim Nachvollziehen; sie sind kein Nachweis für die Richtigkeit einer Aussage.",
      ],
      [
        "Fehlende Angaben klären",
        "Unbekanntes bleibt offen. Prüfen Sie Rückfragen, Unklarheiten und mögliche Widersprüche. Eine fehlende Medikamentendosis darf beispielsweise nicht aus einer Vermutung ergänzt werden. Hinweise sind eine Hilfe, keine Zusage, dass jede Lücke erkannt wird.",
      ],
      [
        "Entwurf bearbeiten",
        "Korrigieren Sie Formulierungen, ergänzen Sie belegte Angaben und entfernen Sie nicht gestützte Aussagen. Trennen Sie berichtete Informationen von der eigenen fachlichen Einschätzung. Neue Inhalte müssen ebenfalls geprüft werden.",
      ],
      [
        "Verantwortlich prüfen und freigeben",
        "In der Pflege verantwortet die zuständige Fachkraft die Prüfung. Medizinische Dokumente werden von einer verifizierten, verantwortlichen ärztlichen Person für eine konkrete Version freigegeben. Nach Änderungen ist eine erneute ärztliche Freigabe erforderlich.",
      ],
      [
        "Geprüfte Inhalte manuell übergeben",
        "Pflegeabschnitte werden nach fachlicher Prüfung ins Pflegesystem kopiert. Im medizinischen Ablauf stehen Text und PDF der freigegebenen Version für die manuelle Übernahme bereit. Prüfen Sie Zielakte und Übernahme im führenden System; Quinn überträgt nicht automatisch.",
      ],
    ],
    limitTitle: "Hinweise unterstützen. Sie bescheinigen keine Qualität.",
    limitText:
      "Ein fehlender Warnhinweis bedeutet nicht, dass ein Dokument vollständig oder fehlerfrei ist. Quinn stellt keine Diagnosen und empfiehlt keine Therapie. Ob der Inhalt fachlich geeignet ist, entscheidet die verantwortliche Person anhand des konkreten Falls.",
  },
  en: {
    overview: "Product overview",
    review: "Review & quality",
    demo: "Request a demo",
    back: "Back to product overview",
    more: "Explore the review workflow",
    title: "Turn conversations into reviewable documentation.",
    intro:
      "Quinn helps nursing care and medicine turn conversations, audio and notes into structured drafts. Your team reviews the content, then manually transfers it into the existing system of record.",
    workflow: "A workflow with clear responsibility",
    steps: [
      [
        "Capture",
        "Conversations, audio or notes provide the starting point. Agree the use of recordings and the necessary consent in advance.",
      ],
      [
        "Prepare a draft",
        "Quinn organises the available information. The text is a proposal for review, not a completed record entry.",
      ],
      [
        "Review professionally",
        "Check sources, clarify missing details and edit the draft. Responsibility remains with the appropriate professionals.",
      ],
      [
        "Transfer manually",
        "Transfer reviewed content into the system of record. No automatic nursing, practice or hospital-system interface.",
      ],
    ],
    examples: "Two areas. Distinct professional workflows.",
    exampleNote:
      "Fictional, synthetic examples — not a live demo or a complete record.",
    source: "Conversation excerpt",
    draft: "Draft · unreviewed",
    open: "To clarify",
    pillars: [
      {
        label: "Nursing care",
        title: "Document conversations. Prepare SIS drafts.",
        input:
          "I feel unsteady getting up in the morning. I want someone to stay with me. I use my walker in my room.",
        document: "SIS · Mobility",
        text: "The resident reports feeling unsteady when getting up in the morning. She would like someone to stay with her and reports using a walker in her room.",
        question:
          "Is someone staying with her enough, or does she need help getting up?",
        responsibility:
          "The care professional clarifies support needs, adds their assessment and transfers the reviewed section into the nursing system.",
        link: "Quinn for nursing care",
      },
      {
        label: "Medicine",
        title: "Prepare medical history and progress notes.",
        input:
          "I’ve had a cough for three days, especially in the evening. I take my blood pressure tablet in the morning. I can’t remember its name.",
        document: "Medical history · Symptoms and medication",
        text: "Patient reports a cough for three days, especially in the evening. Reports taking a blood pressure tablet in the morning; medication name and dose unknown.",
        question:
          "Which medication and dose are recorded on the medication list?",
        responsibility:
          "Reconcile the medication and have a verified physician review and approve this version. Only then manually transfer its text or PDF into the practice system.",
        link: "Quinn for medicine",
      },
    ],
    responsibility: "Review is part of the product.",
    responsibilityIntro:
      "A well-written draft is not yet a professionally reviewed entry. Quinn supports review; its cues may be incomplete and do not replace your own checks.",
    roles: [
      [
        "Professional nursing review",
        "The responsible care professional checks statements, observations, resources and support needs. They add their professional assessment. Medical approval is distinct from this nursing review.",
      ],
      [
        "Physician approval",
        "Medical documents require approval by a verified, responsible physician. Approval applies to a specific version, not automatically to every later draft. An administrative role alone does not authorise physician approval.",
      ],
    ],
    boundary: "Before your existing system, not in its place.",
    boundaryText:
      "Quinn does not replace resident or patient records, nursing software, practice software or hospital systems. Diagnoses, treatment decisions and professional nursing decisions remain with the appropriate professionals. We clarify suitability, privacy, retention and responsibilities before use.",
    closing: "Explore your own workflow together.",
    closingText:
      "In a demo with synthetic information, we discuss your nursing or medical workflow, professional review and manual handoff.",
    reviewTitle: "A draft needs a second look.",
    reviewIntro:
      "For nursing care and medicine, quality starts with checking the source. Quinn supports review; professional assessment and approval remain with the responsible people.",
    reviewHeading: "What to check before transfer",
    reviewSteps: [
      [
        "Compare the source and the statement",
        "Does the text match the conversation, notes and available documents? Check who reported something and what was actually observed. In the medical workflow, source references support traceability; they do not prove that a statement is correct.",
      ],
      [
        "Clarify missing information",
        "Unknown details stay open. Check questions, uncertainties and possible contradictions. A missing medication dose, for example, must not be filled in by guessing. Review cues help; they do not promise that every gap will be detected.",
      ],
      [
        "Edit the draft",
        "Correct wording, add supported information and remove unsupported statements. Separate reported information from your own professional assessment. New content must also be reviewed.",
      ],
      [
        "Review and approve responsibly",
        "In nursing care, the responsible professional reviews the content. Medical documents are approved for a specific version by a verified, responsible physician. Changes require renewed physician approval.",
      ],
      [
        "Hand off reviewed content manually",
        "Nursing sections are copied into the care system after professional review. In the medical workflow, the approved version’s text and PDF are available for manual transfer. Check the destination record and the transferred content in the system of record; Quinn does not transfer automatically.",
      ],
    ],
    limitTitle: "Cues support review. They do not certify quality.",
    limitText:
      "The absence of a warning does not mean a document is complete or error-free. Quinn does not diagnose or recommend treatment. The responsible professional decides whether the content is appropriate for the specific case.",
  },
} as const;

const heading =
  "text-[28px] font-semibold leading-tight tracking-[-0.03em] [overflow-wrap:anywhere] sm:text-4xl";
const body = "mt-4 text-base leading-7 text-secondary-foreground";
function PageShell({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader locale={locale} />
      <main className="[overflow-wrap:anywhere]">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
function TextLink({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <Link
      href={href as Route}
      className={
        primary
          ? "inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1E6B72] px-5 py-3 text-center font-medium text-white hover:bg-[#174F55]"
          : "inline-flex min-h-12 items-center py-3 font-medium text-[#1E6B72] underline decoration-[#B7CEC7] underline-offset-4 hover:decoration-current"
      }
    >
      {children}
    </Link>
  );
}
function Hero({
  locale,
  review = false,
}: {
  locale: Locale;
  review?: boolean;
}) {
  const t = copy[locale];
  return (
    <section className="quinn-container py-16 sm:py-24">
      <p className="text-sm font-medium text-[#1E6B72]">
        {review ? t.review : t.overview}
      </p>
      <h1 className="mt-5 max-w-4xl text-[34px] font-semibold leading-[1.12] tracking-[-0.04em] [overflow-wrap:anywhere] sm:text-6xl">
        {review ? t.reviewTitle : t.title}
      </h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-secondary-foreground">
        {review ? t.reviewIntro : t.intro}
      </p>
      <div className="mt-8 flex flex-col items-start gap-x-7 gap-y-2 sm:flex-row sm:items-center">
        <TextLink href={routes[locale].demo} primary>
          {t.demo}
        </TextLink>
        <TextLink
          href={review ? routes[locale].overview : routes[locale].review}
        >
          {review ? t.back : t.more}
        </TextLink>
      </div>
    </section>
  );
}
function Responsibility({
  locale,
  showLink = true,
}: {
  locale: Locale;
  showLink?: boolean;
}) {
  const t = copy[locale];
  return (
    <section
      id="review"
      className="quinn-container scroll-mt-24 py-16 sm:py-20"
    >
      <div className="border-t border-border pt-10">
        <h2 className={heading}>{t.responsibility}</h2>
        <p className={`${body} max-w-3xl`}>{t.responsibilityIntro}</p>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {t.roles.map(([title, text]) => (
            <article key={title}>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className={body}>{text}</p>
            </article>
          ))}
        </div>
        {showLink && (
          <div className="mt-6">
            <TextLink href={routes[locale].review}>{t.more}</TextLink>
          </div>
        )}
      </div>
    </section>
  );
}
function Closing({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <>
      <section className="quinn-container py-12">
        <div className="max-w-3xl border-l-2 border-[#B7CEC7] pl-5 sm:pl-8">
          <h2 className={heading}>{t.boundary}</h2>
          <p className={body}>{t.boundaryText}</p>
        </div>
      </section>
      <section className="quinn-container py-16 sm:py-24">
        <div className="border-t border-border pt-10">
          <h2 className={heading}>{t.closing}</h2>
          <p className={`${body} max-w-3xl`}>{t.closingText}</p>
          <div className="mt-7">
            <TextLink href={routes[locale].demo} primary>
              {t.demo}
            </TextLink>
          </div>
        </div>
      </section>
    </>
  );
}
export function ProductOverview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <PageShell locale={locale}>
      <Hero locale={locale} />
      <section className="quinn-container pb-16">
        <h2 className={heading}>{t.workflow}</h2>
        <ol className="mt-9 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map(([title, text], i) => (
            <li key={title} className="min-w-0 border-t border-border pt-5">
              <p className="text-sm text-muted-foreground">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className={body}>{text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="quinn-container py-12 sm:py-16">
        <h2 className={heading}>{t.examples}</h2>
        <p className="mt-4 text-sm leading-6 text-muted-foreground">
          {t.exampleNote}
        </p>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          {t.pillars.map((p, i) => (
            <article
              key={p.label}
              className="min-w-0 border-t border-border pt-6"
            >
              <p className="text-sm font-medium text-[#1E6B72]">{p.label}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                {p.title}
              </h3>
              <figure className="mt-7">
                <figcaption className="text-xs font-medium text-muted-foreground">
                  {t.source}
                </figcaption>
                <blockquote className="mt-3 border-l-2 border-[#B7CEC7] pl-4 text-base leading-7">
                  “{p.input}”
                </blockquote>
              </figure>
              <div className="mt-7 rounded-xl border border-border p-5 sm:p-6">
                <p className="text-xs text-muted-foreground">{t.draft}</p>
                <h4 className="mt-3 text-base font-semibold">{p.document}</h4>
                <p className={body}>{p.text}</p>
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-semibold text-[#7B6335]">
                    {t.open}
                  </p>
                  <p className="mt-2 text-base leading-7">{p.question}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-secondary-foreground">
                {p.responsibility}
              </p>
              <div className="mt-4">
                <TextLink
                  href={i === 0 ? routes[locale].care : routes[locale].medicine}
                >
                  {p.link}
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Responsibility locale={locale} />
      <Closing locale={locale} />
    </PageShell>
  );
}
export function ProductReview({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return (
    <PageShell locale={locale}>
      <Hero locale={locale} review />
      <section className="quinn-container pb-12">
        <h2 className={heading}>{t.reviewHeading}</h2>
        <ol className="mt-10">
          {t.reviewSteps.map(([title, text], i) => (
            <li
              key={title}
              className="grid gap-3 border-t border-border py-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16"
            >
              <div>
                <p className="text-sm text-muted-foreground">0{i + 1}</p>
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  {title}
                </h3>
              </div>
              <p className="max-w-2xl text-base leading-8 text-secondary-foreground">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </section>
      <Responsibility locale={locale} showLink={false} />
      <section className="quinn-container py-12">
        <h2 className={heading}>{t.limitTitle}</h2>
        <p className={`${body} max-w-3xl`}>{t.limitText}</p>
      </section>
      <Closing locale={locale} />
    </PageShell>
  );
}
