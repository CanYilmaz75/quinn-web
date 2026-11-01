import type { SiteLocale } from "./pillar-links";

const careSections = [
      ["Anlass", "Unsicherheit beim morgendlichen Aufstehen."],
      ["Beobachtung", "Frau A. war heute Morgen beim Aufstehen unsicher."],
      ["Angaben des Bewohners", "Frau A. äußerte Schwindel beim Aufstehen."],
      ["Durchgeführte Maßnahmen", "Die Pflegefachkraft begleitete Frau A. bis zum Bad."],
      ["Reaktion / Verlauf", "Nach dem Hinsetzen gab Frau A. an, sich besser zu fühlen."],
      ["Weiteres Vorgehen", "Nicht dokumentiert."]
    ] as const;

const medicalSections = [
      ["Aktuelle Beschwerden", "Patient berichtet über trockenen Husten seit drei Tagen."],
      ["Zeitlicher Verlauf", "Nach Angaben des Patienten nachts stärker."],
      ["Bisherige Selbstmedikation", "Patient gibt an, dagegen keine Medikamente eingenommen zu haben."],
      ["Nicht erhoben", "Fieber wurde nicht erfragt."]
    ] as const;

const copy = {
  de: {
    title: "So wird daraus ein Entwurf",
    fictional: "Fiktive Beispiele, redaktionell erstellt. Keine echten Gesundheitsdaten, keine Live-Demo.",
    selector: "Beispiele ansehen", all: "Beide Bereiche", care: "Pflege", medicine: "Medizin",
    careLanguage: "Türkisch → Deutsch", medicineLanguage: "Englisch → Deutsch",
    source: "Gesprochene Angabe", careSource: "Fiktive Aussage einer Pflegefachkraft", document: "Deutscher Dokumentationsentwurf",
    status: "Entwurf · ungeprüft", careDocument: "Pflegeprotokoll", medicineDocument: "Anamnese",
    careSections,
    medicalSections,
    medicalBoundary: "Keine Diagnose abgeleitet. Nicht erfragt bedeutet nicht ausgeschlossen.",
    open: "Noch zu klären", question: "War zusätzliche Unterstützung beim Aufstehen erforderlich?", medicalQuestion: "Besteht Fieber?",
    careReview: "Die Pflegefachkraft gleicht den Entwurf mit der ursprünglichen Aussage ab, klärt offene Angaben und ergänzt ihre Einschätzung.",
    medicineReview: "Ärztlich prüfen, fehlende Angaben klären und die konkrete Version durch eine verifizierte Ärztin oder einen verifizierten Arzt freigeben lassen.",
    review: "Vor der Übernahme", careHandoff: "Geprüften Text selbst ins Pflegesystem übernehmen. Keine automatische Anbindung.",
    medicineHandoff: "Erst nach ärztlicher Freigabe als Text oder PDF manuell ins Fachsystem übernehmen. Keine automatische Anbindung."
  },
  en: {
    title: "From statement to draft",
    fictional: "Fictional examples, editorial illustrations. No real health data, not a live demo.",
    selector: "Choose examples", all: "Both settings", care: "Nursing care", medicine: "Medicine",
    careLanguage: "Turkish → German", medicineLanguage: "English → German",
    source: "Spoken statement", careSource: "Fictional statement by a care professional", document: "German documentation draft",
    status: "Draft · unreviewed", careDocument: "Care note", medicineDocument: "Medical history",
    careSections,
    medicalSections,
    medicalBoundary: "No diagnosis inferred. Not asked does not mean ruled out.",
    open: "To clarify", question: "Was additional support needed when getting up?", medicalQuestion: "Is there a fever?",
    careReview: "The care professional compares the draft with the original statement, clarifies missing information and adds their assessment.",
    medicineReview: "A verified physician must review the content, clarify missing details and approve the specific version.",
    review: "Before transfer", careHandoff: "Manually transfer reviewed text into the care system. Quinn does not automatically transfer it.",
    medicineHandoff: "Only after physician approval, manually transfer text or PDF into the existing system. Quinn does not automatically transfer it."
  }
} as const;

// Native radio controls + CSS: works without hydration, JavaScript or any AI/API call.
// Both complete examples are server-rendered and visible by default.
export function MultilingualProof({ locale }: { locale: SiteLocale }) {
  const t = copy[locale];
  return <section id="mehrsprachig" aria-labelledby="multilingual-title" className="taste-examples">
    <div className="taste-frame">
    <div className="taste-example-heading"><h2 id="multilingual-title">{t.title}</h2><p>{t.fictional}</p></div>
    <fieldset className="taste-example-selector">
      <legend className="sr-only">{t.selector}</legend>
      <div className="taste-example-options">
        <div><input type="radio" name="example-setting" id="examples-all" defaultChecked aria-controls="example-care example-medicine" /><label htmlFor="examples-all">{t.all}</label></div>
        <div><input type="radio" name="example-setting" id="examples-care" aria-controls="example-care" /><label htmlFor="examples-care">{t.care}</label></div>
        <div><input type="radio" name="example-setting" id="examples-medicine" aria-controls="example-medicine" /><label htmlFor="examples-medicine">{t.medicine}</label></div>
      </div>
      <div className="taste-example-grid">
        <article id="example-care" data-example="care" aria-labelledby="example-care-title">
          <header className="taste-example-title"><h3 id="example-care-title">{t.care}</h3><p>{t.careLanguage}</p></header>
          <figure><figcaption>{t.careSource}</figcaption><blockquote lang="tr">“A Hanım bu sabah ayağa kalkarken dengesizdi. ‘Başım dönüyor’ dedi. Banyoya kadar ona eşlik ettim. Oturduktan sonra daha iyi hissettiğini söyledi.”</blockquote></figure>
          <div data-multilingual-document className="taste-document">
            <div className="taste-document-heading"><p>{t.careDocument}</p><p>{t.status}</p></div>
            <p className="sr-only">{t.document}</p>
            <dl lang="de">{t.careSections.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
            <div className="taste-document-question"><p>{t.open}</p><p>{t.question}</p></div>
          </div>
          <div className="taste-example-review"><p><strong>{t.review}. </strong>{t.careReview}</p><p>{t.careHandoff}</p></div>
        </article>
        <article id="example-medicine" data-example="medicine" aria-labelledby="example-medicine-title">
          <header className="taste-example-title"><h3 id="example-medicine-title">{t.medicine}</h3><p>{t.medicineLanguage}</p></header>
          <figure><figcaption>{t.source}</figcaption><blockquote lang="en">“The patient reports a dry cough for three days, worse at night. They say they have taken no medication for it. I have not asked about fever yet.”</blockquote></figure>
          <div data-multilingual-document className="taste-document">
            <div className="taste-document-heading"><p>{t.medicineDocument}</p><p>{t.status}</p></div>
            <p className="sr-only">{t.document}</p>
            <dl lang="de">{t.medicalSections.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl>
            <div className="taste-document-question"><p>{t.open}</p><p>{t.medicalQuestion}</p></div>
          </div>
          <div className="taste-example-review"><p><strong>{t.review}. </strong>{t.medicineReview}</p><p>{t.medicalBoundary}</p><p>{t.medicineHandoff}</p></div>
        </article>
      </div>
    </fieldset>
    </div>
  </section>;
}
