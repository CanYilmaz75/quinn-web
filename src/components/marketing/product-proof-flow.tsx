import { ArrowRight, CheckCircle2, CircleHelp, FileText, MessageSquareText } from "lucide-react";

const content = {
  de: {
    sectionId: "demo-faelle",
    eyebrow: "Konkreter Produktfluss · fiktiver Pflegefall",
    title: "Aus drei Aussagen wird ein prüfbarer Entwurf — nicht automatisch eine fertige Akte.",
    intro:
      "Das Beispiel zeigt den Weg von Gesprächsnotizen bis zur fachlich geprüften Übergabe. Es enthält keine echten Bewohnerdaten.",
    inputLabel: "1 · Im Gespräch erfasst",
    inputTitle: "Originale Aussagen",
    statements: [
      "„Beim Aufstehen bin ich morgens unsicher.“",
      "„Im Bad gab es gestern eine neue Stolpersituation.“",
      "„Der Rollator wird im Zimmer genutzt.“"
    ],
    draftLabel: "2 · Quinn bereitet vor",
    draftTitle: "Mobilität und Wohnumfeld",
    draft:
      "Die Bewohnerin berichtet über Unsicherheit beim morgendlichen Transfer. Als Ressource steht ein Rollator zur Verfügung. Eine neue Stolpersituation im Bad wurde durch die Tochter angesprochen.",
    openLabel: "3 · Quinn macht eine Lücke sichtbar",
    openTitle: "Offener Punkt",
    openText: "Wird der Rollator auch im Bad genutzt und besteht dort Unterstützungsbedarf?",
    reviewLabel: "4 · Die Fachkraft entscheidet",
    reviewTitle: "Geprüfte Ergänzung",
    reviewText:
      "Rollator wird im Zimmer genutzt. Nutzung und Unterstützungsbedarf im Bad werden mit der Bewohnerin geklärt.",
    approved: "Freigegeben durch Fachkraft",
    handoff: "Abschnitt kopieren und ins bestehende Pflegesystem übernehmen"
  },
  en: {
    sectionId: "demo-cases",
    eyebrow: "Concrete product flow · fictional care case",
    title: "Three statements become a reviewable draft — not an automatically completed record.",
    intro:
      "This example shows the path from conversation notes to professionally reviewed handoff. It contains no real resident data.",
    inputLabel: "1 · Captured in the conversation",
    inputTitle: "Original statements",
    statements: [
      "“I feel unsure when getting up in the morning.”",
      "“There was a new tripping situation in the bathroom yesterday.”",
      "“The walker is used in the room.”"
    ],
    draftLabel: "2 · Quinn prepares",
    draftTitle: "Mobility and living environment",
    draft:
      "The resident reports feeling unsure during morning transfer. A walker is available as a resource. Her daughter mentioned a new tripping situation in the bathroom.",
    openLabel: "3 · Quinn makes a gap visible",
    openTitle: "Open point",
    openText: "Is the walker also used in the bathroom, and is support needed there?",
    reviewLabel: "4 · The professional decides",
    reviewTitle: "Reviewed addition",
    reviewText:
      "The walker is used in the room. Bathroom use and support needs will be clarified with the resident.",
    approved: "Approved by care professional",
    handoff: "Copy the section into the existing care system"
  }
} as const;

export function ProductProofFlow({ locale = "de" }: { locale?: "de" | "en" }) {
  const t = content[locale];

  return (
    <section id={t.sectionId} className="bg-white py-16 sm:py-24">
      <div className="quinn-container">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E6B72]">{t.eyebrow}</p>
          <h2 className="mt-5 text-[34px] font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-[52px]">{t.title}</h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary-foreground">{t.intro}</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[1.75rem] border border-[#E8E8EC] bg-[#FBFAF6] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                <MessageSquareText className="h-5 w-5 text-[#1E6B72]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t.inputLabel}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">{t.inputTitle}</h3>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              {t.statements.map((statement) => (
                <p key={statement} className="rounded-2xl border border-[#E8E8EC] bg-white p-4 text-sm leading-7 text-secondary-foreground">
                  {statement}
                </p>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[#DDE8E4] bg-[#E7F1EE] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white">
                <FileText className="h-5 w-5 text-[#1E6B72]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t.draftLabel}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">{t.draftTitle}</h3>
              </div>
            </div>
            <p className="mt-6 rounded-2xl bg-white p-5 text-sm leading-7 text-secondary-foreground">{t.draft}</p>
          </article>

          <article className="rounded-[1.75rem] border border-[#E8E8EC] bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#F6F0E3]">
                <CircleHelp className="h-5 w-5 text-[#1E6B72]" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t.openLabel}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{t.openTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{t.openText}</p>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] border border-[#E8E8EC] bg-white p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1EE]">
                <CheckCircle2 className="h-5 w-5 text-[#1E6B72]" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{t.reviewLabel}</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{t.reviewTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-secondary-foreground">{t.reviewText}</p>
                <div className="mt-5 flex flex-col gap-3 border-t border-[#E8E8EC] pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E6B72]">
                    <CheckCircle2 className="h-4 w-4" />
                    {t.approved}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary-foreground">
                    {t.handoff}
                    <ArrowRight className="h-4 w-4 shrink-0" />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
