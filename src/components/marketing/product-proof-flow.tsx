import { SegmentDemoLink, type DocumentationSegment, type SiteLocale } from "./pillar-links";

// Editorial, synthetic examples: not generated patient records or product screenshots.
const examples = {
  de: {
    care: {
      category: "Pflege", title: "Den Alltag hören.\nFür die SIS festhalten.",
      subtitle: "Aus den Worten der Bewohnerin wird ein geordneter Abschnitt. Was fehlt, bleibt eine Frage.",
      speaker: "Aus dem Aufnahmegespräch", document: "SIS · Mobilität und Beweglichkeit",
      input: "Morgens, wenn ich aus dem Bett komme, bin ich noch wackelig. Da ist es mir lieber, wenn jemand bei mir bleibt. Im Zimmer nehme ich meinen Rollator.",
      draft: [
        ["Eigene Sicht", "Die Bewohnerin beschreibt Unsicherheit beim morgendlichen Aufstehen und wünscht sich, dass jemand bei ihr bleibt."],
        ["Hilfsmittel", "Nach eigener Aussage nutzt sie im Zimmer einen Rollator."]
      ],
      open: "Reicht das Dabeibleiben aus oder braucht sie Hilfe beim Aufstehen?",
      review: "Die Pflegefachkraft klärt den Unterstützungsbedarf und ergänzt ihre Einschätzung.",
      handoff: "Anschließend den geprüften Abschnitt ins bestehende Pflegesystem kopieren."
    },
    medicine: {
      category: "Medizin", title: "Beim Gespräch bleiben.\nDie Anamnese vorbereiten.",
      subtitle: "Beschwerden und Medikamentenangaben stehen getrennt im Entwurf. Fehlende Angaben werden nicht ergänzt.",
      speaker: "Aus dem Praxisgespräch", document: "Anamnese · Gesprächsausschnitt",
      input: "Den Husten habe ich seit drei Tagen, vor allem abends. Und morgens nehme ich meine Blutdrucktablette. Wie die heißt, weiß ich gerade nicht – den Plan habe ich zu Hause.",
      draft: [
        ["Aktuelle Beschwerden", "Patient berichtet über Husten seit drei Tagen, vor allem abends."],
        ["Medikation laut Patient", "Morgendliche Einnahme einer Blutdrucktablette. Präparat und Dosierung nicht bekannt; Medikationsplan liegt nicht vor."]
      ],
      open: "Welches Präparat und welche Dosierung stehen im Medikationsplan?",
      review: "Medikation abgleichen, den Entwurf ärztlich prüfen und die konkrete Version freigeben.",
      handoff: "Nach ärztlicher Freigabe als Text oder PDF selbst ins Praxissystem übernehmen. Keine automatische PVS-Schnittstelle."
    }
  },
  en: {
    care: {
      category: "Nursing care", title: "Listen to daily life.\nPrepare the care record.",
      subtitle: "The resident’s own words become a structured section. Missing information stays a question.",
      speaker: "From the intake conversation", document: "SIS · Mobility",
      input: "I’m a bit unsteady when I get out of bed in the morning. I’d rather have someone stay with me. I use my walker in my room.",
      draft: [
        ["Resident’s perspective", "The resident describes feeling unsteady when getting up in the morning and would like someone to stay with her."],
        ["Mobility aid", "She reports using a walker in her room."]
      ],
      open: "Is someone staying with her enough, or does she need help getting up?",
      review: "The care professional clarifies what support is needed and adds their assessment.",
      handoff: "Then copy the reviewed section into the existing care system."
    },
    medicine: {
      category: "Medicine", title: "Stay with the conversation.\nPrepare the medical history.",
      subtitle: "Symptoms and reported medication appear separately in the draft. Missing details are not filled in.",
      speaker: "From the practice conversation", document: "Medical history · Conversation excerpt",
      input: "I’ve had this cough for three days, mostly in the evening. I take my blood pressure tablet in the morning. I can’t remember the name – my medication list is at home.",
      draft: [
        ["Current symptoms", "Patient reports a cough for three days, mostly in the evening."],
        ["Reported medication", "Takes a blood pressure tablet in the morning. Name and dose unknown; medication list not available."]
      ],
      open: "Which medication and dose are recorded on the medication list?",
      review: "Reconcile the medication and have a verified physician review and approve this version.",
      handoff: "After physician approval, manually transfer the text or PDF into the practice system. No automatic practice-system interface."
    }
  }
} as const;

export function ProductProofFlow({ locale = "de", segment }: { locale?: SiteLocale; segment?: DocumentationSegment }) {
  const segments: DocumentationSegment[] = segment ? [segment] : ["care", "medicine"];
  const de = locale === "de";
  return (
    <section id={de ? "demo-faelle" : "demo-cases"} className="bg-white py-16 sm:py-24">
      <div className="quinn-container">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-[#1E6B72]">{de ? "So kann Dokumentation aussehen" : "What the documentation can look like"}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-5xl">{de ? "Vom Gespräch zum Dokumentationsentwurf" : "From conversation to documentation draft"}</h2>
          <p className="mt-5 text-sm leading-6 text-secondary-foreground">{de ? "Fiktive, synthetische Beispiele mit erfundenen Angaben – keine Live-Demo und keine vollständige Akte." : "Fictional, synthetic examples with invented details — not a live demo or a complete record."}</p>
        </div>
        <div className="mt-12 divide-y divide-border">
          {segments.map((key) => {
            const example = examples[locale][key];
            return <article key={key} data-proof-segment={key} className="py-10 first:pt-0 sm:py-16">
              <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="font-semibold text-[#1E6B72]">{example.category}</span>
                <span className="text-muted-foreground">{de ? "Fiktives Beispiel" : "Fictional example"}</span>
              </div>
              <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                <div>
                  <h3 className="whitespace-pre-line text-[28px] font-semibold leading-tight tracking-[-0.035em] sm:text-4xl">{example.title}</h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-secondary-foreground">{example.subtitle}</p>
                  <figure className="mt-8 sm:mt-10">
                    <figcaption className="mb-4 text-xs font-medium text-muted-foreground">{example.speaker}</figcaption>
                    <blockquote className="border-l-2 border-[#B7CEC7] pl-5 text-lg leading-8 text-foreground sm:text-xl sm:leading-9">{de ? "„" : "“"}{example.input}{de ? "“" : "”"}</blockquote>
                  </figure>
                  <div className="mt-8 hidden lg:block"><SegmentDemoLink locale={locale} segment={key} source={segment ? "seo-landing" : "homepage"} /></div>
                </div>
                <div>
                  <div data-proof-document className="overflow-hidden rounded-xl border border-[#DCE4DF] bg-white shadow-[0_8px_32px_-20px_rgba(16,47,51,0.22)]">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E5EBE7] px-5 py-4 sm:px-7">
                      <p className="text-sm font-semibold text-foreground">{example.document}</p>
                      <span className="text-xs text-muted-foreground">{de ? "Entwurf · ungeprüft" : "Draft · unreviewed"}</span>
                    </div>
                    <dl className="space-y-6 px-5 py-7 sm:px-7 sm:py-8">
                      {example.draft.map(([label, text]) => <div key={label}><dt className="text-xs font-semibold text-[#496158]">{label}</dt><dd className="mt-2 text-[15px] leading-7 text-foreground">{text}</dd></div>)}
                    </dl>
                    <div className="border-t border-[#EEE8DA] bg-[#FCFAF5] px-5 py-5 sm:px-7">
                      <p className="text-xs font-semibold text-[#7B6335]">{de ? "Noch zu klären" : "To clarify"}</p>
                      <p className="mt-2 text-[15px] leading-7 text-foreground">{example.open}</p>
                    </div>
                  </div>
                  <div className="mt-5 text-sm leading-6 text-secondary-foreground">
                    <p><span className="font-medium text-foreground">{de ? "Vor der Übernahme: " : "Before transfer: "}</span>{example.review}</p>
                    <p className="mt-2">{example.handoff}</p>
                  </div>
                  <div className="mt-6 lg:hidden"><SegmentDemoLink locale={locale} segment={key} source={segment ? "seo-landing" : "homepage"} /></div>
                </div>
              </div>
            </article>;
          })}
        </div>
      </div>
    </section>
  );
}
