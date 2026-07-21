import type { Route } from "next";

type PublicPageStatus = "live" | "sprint-2" | "sprint-3";

type PublicPage = {
  locale: "de" | "en";
  slug: Route;
  title: string;
  description: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  primaryCta: string;
  secondaryCta: string;
  status: PublicPageStatus;
  positioning: string;
  riskGuardrails: string[];
};

export const siteUrl = "https://quinn.care";

export const forbiddenPublicClaims = [
  "DSGVO-" + "sicher",
  "rechts" + "sicher",
  "vollautomatisch " + "korrekte Dokumentation",
  "wissenschaftlich " + "bewiesen",
  "ersetzt " + "Pflegesoftware",
  "replaces " + "care software",
  "fully " + "automated",
  "legally " + "compliant"
] as const;

const deGuardrails = [
  "Quinn ersetzt keine Pflegesoftware, keine Bewohnerakte, kein KIS und keine Praxissoftware.",
  "Quinn erstellt prüfbare Entwürfe, keine automatische fachliche Entscheidung.",
  "Messbare Zeitersparnis wird im Pilot geprüft, nicht behauptet.",
  "Datenschutz, AVV und TOM werden im konkreten Einsatz geprüft."
];

const enGuardrails = [
  "Quinn does not replace existing care software, resident records, hospital information systems or practice software.",
  "Quinn creates reviewable drafts, not autonomous care or clinical decisions.",
  "Measurable time savings are validated in pilots, not claimed in advance.",
  "Privacy, DPA and technical-organisational measures are reviewed for each deployment."
];

export const publicSitePages: PublicPage[] = [
  {
    locale: "de",
    slug: "/" as Route,
    title: "Quinn | KI-Dokumentation für Pflegegespräche",
    description: "Review-first KI-Dokumentation für Pflegegespräche, Aufnahme, Übergabe, Anamnese, Audio und Notizen vor bestehenden Pflege-, Klinik- oder Praxissystemen.",
    primaryKeyword: "KI Pflegedokumentation",
    secondaryKeywords: [
      "KI-basierte Sprachdokumentation in der Pflege",
      "KI Sprachdokumentation Pflege",
      "SIS Dokumentation KI",
      "SIS Aufnahme digital",
      "Krankenhaus Dokumentation KI",
      "KI Dokumentation Gesundheitswesen",
      "Dokumentationsentlastung Pflege"
    ],
    primaryCta: "Unverbindlich Demo anfragen",
    secondaryCta: "Pilotprogramm ansehen",
    status: "live",
    positioning: "review-first Dokumentationslayer für Pflegegespräche als erster Wedge, erweitert auf Klinik-, Praxis- und Versorgungsworkflows vor bestehenden Systemen",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/anwendungen/sis-aufnahme" as Route,
    title: "SIS-Aufnahme mit KI vorbereiten",
    description: "Aus Aufnahmegespräch, Notizen und Audio wird ein prüfbarer SIS-Entwurf mit offenen Punkten und fachlicher Freigabe.",
    primaryKeyword: "SIS Dokumentation KI",
    secondaryKeywords: ["SIS Aufnahme digital", "Strukturierte Informationssammlung digital", "Aufnahmegespräch Pflege dokumentieren"],
    primaryCta: "SIS-Demo anfragen",
    secondaryCta: "Pilotprogramm ansehen",
    status: "live",
    positioning: "enger Wedge für Aufnahme und SIS statt breite Sprachdokumentation",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/anwendungen/sprachdokumentation-pflege" as Route,
    title: "KI-basierte Sprachdokumentation in der Pflege",
    description: "Quinn nutzt Sprache als möglichen Input und macht daraus einen prüfbaren Entwurf mit Review, Lückenhinweisen und Transferlogik.",
    primaryKeyword: "KI-basierte Sprachdokumentation in der Pflege",
    secondaryKeywords: ["Sprachdokumentation Pflege", "Pflegedokumentation per Sprache", "Pflegeberichte automatisch strukturieren"],
    primaryCta: "Unverbindlich Demo anfragen",
    secondaryCta: "SIS-Aufnahme ansehen",
    status: "live",
    positioning: "nicht nur sprechen statt tippen, sondern fachlich prüfbarer Entwurf vor Übernahme",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/pilotprogramm" as Route,
    title: "Pilotpartner für KI-Dokumentation in der Pflege gesucht",
    description: "Quinn validiert mit Pflegeeinrichtungen Aufnahme-/SIS-Workflows, Editieraufwand, Vollständigkeit und Review-Zeit.",
    primaryKeyword: "Pilot KI Pflegedokumentation",
    secondaryKeywords: ["Pflegeheim Dokumentation entlasten", "Qualitätsmanagement Pflegedokumentation", "stationäre Pflege Dokumentation KI"],
    primaryCta: "Pilotgespräch anfragen",
    secondaryCta: "Demo ansehen",
    status: "live",
    positioning: "ehrliche Pilotphase für erste Einrichtungen statt überzogene Marktführer-Claims",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/preise" as Route,
    title: "Preise für prüfbare KI-Dokumentation in der Pflege",
    description: "Beratungsgestützte Pilot-, Einrichtungs- und Trägerpakete für Quinn ohne öffentliche Nutzerpreise oder direkte Online-Buchung.",
    primaryKeyword: "KI Pflegedokumentation Preise",
    secondaryKeywords: ["Pilot KI Pflegedokumentation", "Pflegeheim Dokumentation entlasten", "Qualitätsmanagement Pflegedokumentation"],
    primaryCta: "Preisgespräch anfragen",
    secondaryCta: "Pilotprogramm ansehen",
    status: "live",
    positioning: "beratungsgestützte Preislogik für Pilot, Einrichtung und Träger statt Standardtarif",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/forschung" as Route,
    title: "Forschung und Pilotmetriken für Review-first KI-Dokumentation",
    description: "Quinn zeigt transparent, welche Pilotmetriken gemessen werden: Zeit pro Fall, Editierquote, Vollständigkeit, Review-Aufwand und Akzeptanz.",
    primaryKeyword: "Pilotmetriken KI Pflegedokumentation",
    secondaryKeywords: ["Review-first KI Pflege", "Pflegedokumentation Evaluation", "KI Pflege Pilot"],
    primaryCta: "Evaluationsdesign besprechen",
    secondaryCta: "Pilotprogramm ansehen",
    status: "live",
    positioning: "Evidence-Seite mit Messlogik statt behaupteter Ergebnisse",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/updates" as Route,
    title: "Quinn Updates",
    description: "Produkt- und Website-Updates zu Quinns review-first Dokumentationslayer für Pflegeeinrichtungen.",
    primaryKeyword: "Quinn Updates",
    secondaryKeywords: ["Quinn Produktupdates", "KI Pflegedokumentation Launch", "Review-first Dokumentation"],
    primaryCta: "Demo anfragen",
    secondaryCta: "Forschung ansehen",
    status: "live",
    positioning: "sichtbarer Build-Verlauf für frühe Kunden und Investoren",
    riskGuardrails: deGuardrails
  },
  {
    locale: "en",
    slug: "/en" as Route,
    title: "Quinn | Review-first AI care documentation",
    description: "Review-first AI documentation for care conversations, intake, handover, anamnesis, notes and audio before existing care, clinic or practice systems.",
    primaryKeyword: "AI care documentation",
    secondaryKeywords: ["voice documentation for care", "AI nursing documentation", "reviewable documentation drafts", "care home documentation AI", "hospital documentation AI", "healthcare documentation AI"],
    primaryCta: "Request a demo",
    secondaryCta: "View pilot program",
    status: "live",
    positioning: "review-first AI documentation layer for care conversations as the first wedge, extended to clinic, practice and healthcare workflows before existing systems",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/use-cases/sis-intake" as Route,
    title: "AI-assisted SIS-style intake documentation",
    description: "Turn care intake conversations, notes and audio into reviewable SIS-style documentation drafts with open cues and human approval.",
    primaryKeyword: "intake documentation assistant",
    secondaryKeywords: ["AI care documentation", "care workflow AI", "long-term care documentation AI"],
    primaryCta: "Request an SIS demo",
    secondaryCta: "View pilot program",
    status: "live",
    positioning: "narrow intake and SIS-style wedge instead of broad point-of-care voice documentation",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/use-cases/voice-documentation-care" as Route,
    title: "Voice documentation for care with human review",
    description: "Quinn can use voice as an input, but the product value is the reviewable documentation draft before transfer.",
    primaryKeyword: "voice documentation for care",
    secondaryKeywords: ["AI nursing documentation", "care documentation assistant", "reviewable documentation drafts"],
    primaryCta: "Request a demo",
    secondaryCta: "View SIS intake",
    status: "live",
    positioning: "voice is an input; review-first documentation is the product boundary",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/pilot-program" as Route,
    title: "Pilot partners for review-first AI care documentation",
    description: "Quinn is validating care intake documentation, edit effort, completeness and review workload with early care partners.",
    primaryKeyword: "care home documentation AI",
    secondaryKeywords: ["AI care documentation", "nursing documentation burden", "care workflow AI"],
    primaryCta: "Request a pilot call",
    secondaryCta: "Request a demo",
    status: "live",
    positioning: "pilot-ready international story without overstated customer proof",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/pricing" as Route,
    title: "Pricing for review-first AI care documentation",
    description: "Consultation-led pilot, facility and operator packages for Quinn without public user pricing or direct online booking.",
    primaryKeyword: "AI care documentation pricing",
    secondaryKeywords: ["care documentation pilot", "care home documentation AI", "AI documentation layer for care teams"],
    primaryCta: "Request pricing conversation",
    secondaryCta: "View pilot program",
    status: "live",
    positioning: "consultation-led pricing for pilots, facilities and operators",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/research" as Route,
    title: "Research and pilot metrics for review-first AI care documentation",
    description: "Quinn explains the pilot metrics we measure: minutes per case, edit rate, completeness, review effort and team acceptance.",
    primaryKeyword: "AI care documentation pilot metrics",
    secondaryKeywords: ["review-first AI care", "care documentation evaluation", "care workflow AI"],
    primaryCta: "Discuss evaluation design",
    secondaryCta: "View pilot program",
    status: "live",
    positioning: "evidence page with measurement logic instead of claimed results",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/updates" as Route,
    title: "Quinn updates",
    description: "Product and website updates for Quinn's review-first documentation layer for care providers.",
    primaryKeyword: "Quinn updates",
    secondaryKeywords: ["AI care documentation launch", "Quinn product updates", "review-first documentation"],
    primaryCta: "Request a demo",
    secondaryCta: "View research",
    status: "live",
    positioning: "visible build history for early customers and investors",
    riskGuardrails: enGuardrails
  }
];

export const publicFaqsByLocale = {
  de: [
    {
      question: "Ersetzt Quinn unsere Pflegesoftware?",
      answer: "Nein. Quinn erstellt prüfbare Entwürfe vor dem bestehenden Fachsystem. Die Bewohnerakte und das führende Dokumentationssystem bleiben bestehen."
    },
    {
      question: "Entscheidet Quinn fachlich?",
      answer: "Nein. Quinn unterstützt beim Formulieren, Strukturieren und Prüfen. Fachliche Bewertung und Freigabe bleiben beim Pflege- oder QM-Team."
    },
    {
      question: "Wie läuft ein Pilot ab?",
      answer: "Wir starten mit einem klar abgegrenzten Aufnahme-, SIS- oder Review-Workflow, definieren Metriken und prüfen nach 4–6 Wochen Nutzung, Qualität und Entlastung."
    },
    {
      question: "Was unterscheidet Quinn von Sprachdokumentation?",
      answer: "Sprache kann ein Input sein. Quinns Produktwert liegt im review-first Entwurf mit Lückenhinweisen, Freigabe und Transferlogik."
    }
  ],
  en: [
    {
      question: "Does Quinn replace our care software?",
      answer: "No. Quinn creates reviewable drafts before the existing system. The resident record and the system of record remain in place."
    },
    {
      question: "Does Quinn make professional care decisions?",
      answer: "No. Quinn supports drafting, structuring and review. Professional judgement and approval stay with the care or quality team."
    },
    {
      question: "How does a pilot work?",
      answer: "We start with a bounded intake, SIS-style or review workflow, define metrics and evaluate usage, quality and relief after 4–6 weeks."
    },
    {
      question: "How is Quinn different from voice documentation?",
      answer: "Voice can be an input. Quinn's product value is the review-first draft with gap cues, human approval and transfer logic."
    }
  ]
} as const;

export const pilotMetricsByLocale = {
  de: {
    minutesPerCase: "Minuten pro Fall",
    editRate: "Editierquote",
    completeness: "Vollständigkeit",
    reviewEffort: "PDL/QM-Review-Aufwand",
    teamAcceptance: "Akzeptanz im Team"
  },
  en: {
    minutesPerCase: "Minutes per case",
    editRate: "Edit rate",
    completeness: "Completeness",
    reviewEffort: "Care/QM review effort",
    teamAcceptance: "Team acceptance"
  }
} as const;

export const demoCtaByLocale = {
  de: "Unverbindlich Demo anfragen",
  en: "Request a demo"
} as const;

export const publicSeoPairs = [
  ["/", "/en"],
  ["/preise", "/en/pricing"],
  ["/forschung", "/en/research"],
  ["/updates", "/en/updates"],
  ["/pilotprogramm", "/en/pilot-program"],
  ["/anwendungen/sis-aufnahme", "/en/use-cases/sis-intake"],
  ["/anwendungen/sprachdokumentation-pflege", "/en/use-cases/voice-documentation-care"],
  ["/loesungen/pflegeheime", "/en/solutions/care-homes"],
  ["/loesungen/traeger-qm", "/en/solutions/operators-quality-management"]
] as const;

export function buildSeoAlternates(slug: string) {
  const pair = publicSeoPairs.find(([de, en]) => de === slug || en === slug);
  const languages = pair ? { de: `${siteUrl}${pair[0]}`, en: `${siteUrl}${pair[1]}` } : undefined;
  return {
    canonical: `${siteUrl}${slug}`,
    ...(languages ? { languages } : {})
  };
}

export function buildFaqJsonLd(faqs: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function buildSoftwareApplicationJsonLd(locale: "de" | "en" = "de") {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Quinn",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      locale === "de"
        ? "Review-first KI-Dokumentationslayer für Pflegegespräche vor dem bestehenden Fachsystem."
        : "Review-first AI documentation layer for care conversations before information enters the existing system.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/PreOrder",
      description: locale === "de" ? "Preis nach Beratung und Pilotumfang." : "Pricing follows consultation and pilot scope."
    }
  };
}
