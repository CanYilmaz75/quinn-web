import type { Route } from "next";

import { publicConfig } from "@/lib/public-config";

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

export const siteUrl = publicConfig.siteUrl;

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
    title: "Quinn | KI-Dokumentation für Pflege und Medizin",
    description: "Prüfbare KI-Dokumentationsentwürfe für Pflege und Medizin aus Gesprächen, Audio und Notizen. Fachlich prüfen und manuell ins bestehende Fachsystem übernehmen.",
    primaryKeyword: "KI Dokumentation Pflege und Medizin",
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
    positioning: "prüfbare Dokumentationsassistenz für Pflege und Medizin als gleichwertige Bereiche mit eigenen fachlichen Prüfabläufen vor bestehenden Systemen",
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
    description: "Quinn nutzt Sprache als möglichen Input und macht daraus einen prüfbaren Entwurf mit fachlicher Prüfung, Lückenhinweisen und klarer Übergabe.",
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
    title: "Pilotprogramm für KI-Dokumentation in Pflege und Medizin",
    description: "Teams aus Pflege und Medizin erproben einen abgegrenzten Dokumentationsablauf und werten Zeit, Nacharbeit, Vollständigkeit und fachlichen Prüfaufwand aus.",
    primaryKeyword: "Pilot KI Pflegedokumentation",
    secondaryKeywords: ["Pflegeheim Dokumentation entlasten", "Qualitätsmanagement Pflegedokumentation", "stationäre Pflege Dokumentation KI"],
    primaryCta: "Pilotgespräch anfragen",
    secondaryCta: "Demo ansehen",
    status: "live",
    positioning: "begleiteter Pilot mit klarer Auswertung für die Entscheidung der Einrichtung",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/preise" as Route,
    title: "Preise für prüfbare KI-Dokumentation in Pflege und Medizin",
    description: "Individuelle Angebote für Pflege und Medizin: Umfang, Team und Prüfablauf gemeinsam klären. Keine direkte Online-Buchung.",
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
    title: "Auswertung eines Quinn-Piloten in Pflege und Medizin",
    description: "Teams aus Pflege und Medizin sehen, wie Zeit pro Fall, Nacharbeit, Vollständigkeit, Prüfaufwand und Akzeptanz im eigenen Ablauf ausgewertet werden.",
    primaryKeyword: "Pilotmetriken KI Pflegedokumentation",
    secondaryKeywords: ["Prüfbare KI-Dokumentation Pflege", "Pflegedokumentation Evaluation", "KI Pflege Pilot"],
    primaryCta: "Auswertung besprechen",
    secondaryCta: "Pilotprogramm ansehen",
    status: "live",
    positioning: "Entscheidungskriterien und nachvollziehbare Auswertung aus Sicht der Einrichtung",
    riskGuardrails: deGuardrails
  },
  {
    locale: "de",
    slug: "/updates" as Route,
    title: "Quinn Updates",
    description: "Produktverbesserungen für Quinns prüfbare Dokumentationsassistenz in Pflege und Medizin.",
    primaryKeyword: "Quinn Updates",
    secondaryKeywords: ["Quinn Produktupdates", "Pflegedokumentation verbessern", "Prüfbare Dokumentation"],
    primaryCta: "Demo anfragen",
    secondaryCta: "Forschung ansehen",
    status: "live",
    positioning: "verständliche Produktverbesserungen aus Sicht von Teams in Pflege und Medizin",
    riskGuardrails: deGuardrails
  },
  {
    locale: "en",
    slug: "/en" as Route,
    title: "Quinn | AI documentation for nursing and medicine",
    description: "Reviewable AI documentation drafts for nursing and medicine from conversations, audio and notes. Professionally review and manually transfer into existing systems.",
    primaryKeyword: "AI documentation nursing and medicine",
    secondaryKeywords: ["voice documentation for care", "AI nursing documentation", "reviewable documentation drafts", "care home documentation AI", "hospital documentation AI", "healthcare documentation AI"],
    primaryCta: "Request a demo",
    secondaryCta: "View pilot program",
    status: "live",
    positioning: "reviewable documentation assistance for nursing and medicine as equal areas with distinct professional review workflows before existing systems",
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
    title: "Pilot program for AI documentation in nursing and medicine",
    description: "Nursing and medical teams test Quinn in one defined workflow and evaluate time, rework, completeness and professional review workload.",
    primaryKeyword: "care home documentation AI",
    secondaryKeywords: ["AI care documentation", "nursing documentation burden", "care workflow AI"],
    primaryCta: "Request a pilot call",
    secondaryCta: "Request a demo",
    status: "live",
    positioning: "guided pilot with a clear evaluation for the organisation's decision",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/pricing" as Route,
    title: "Pricing for AI documentation in nursing and medicine",
    description: "Individual proposals for nursing and medicine: agree scope, team and review workflow together. No direct online booking.",
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
    title: "Evaluating a Quinn pilot in nursing and medicine",
    description: "Nursing and medical teams see how time per case, rework, completeness, review workload and team acceptance are evaluated in their workflow.",
    primaryKeyword: "AI care documentation pilot metrics",
    secondaryKeywords: ["review-first AI care", "care documentation evaluation", "care workflow AI"],
    primaryCta: "Discuss the evaluation",
    secondaryCta: "View pilot program",
    status: "live",
    positioning: "decision criteria and traceable evaluation from the organisation's perspective",
    riskGuardrails: enGuardrails
  },
  {
    locale: "en",
    slug: "/en/updates" as Route,
    title: "Quinn updates",
    description: "Product improvements for Quinn's reviewable documentation assistance in nursing and medicine.",
    primaryKeyword: "Quinn updates",
    secondaryKeywords: ["care documentation improvements", "Quinn product updates", "review-first documentation"],
    primaryCta: "Request a demo",
    secondaryCta: "View research",
    status: "live",
    positioning: "clear product improvements from the nursing and medical team's perspective",
    riskGuardrails: enGuardrails
  }
];

export const publicFaqsByLocale = {
  de: [
    {
      question: "Ersetzt Quinn unser Pflege-, Praxis- oder Kliniksystem?",
      answer: "Nein. Quinn erstellt prüfbare Entwürfe. Pflege- und Patientenakten sowie das führende Fachsystem bleiben bestehen; die Übernahme erfolgt manuell."
    },
    {
      question: "Entscheidet Quinn fachlich?",
      answer: "Nein. Quinn unterstützt beim Formulieren, Strukturieren und Prüfen. Pflegeentwürfe prüft die verantwortliche Fachkraft. Medizinische Dokumente benötigen die Freigabe einer verifizierten ärztlichen Person."
    },
    {
      question: "Wie läuft ein Pilot ab?",
      answer: "Wir vereinbaren einen abgegrenzten Ablauf in Pflege oder Medizin, Verantwortlichkeiten, Dauer und Messwerte. Danach werten wir Nutzung, Qualität und Prüfaufwand gemeinsam aus."
    },
    {
      question: "Was unterscheidet Quinn von Sprachdokumentation?",
      answer: "Sprache kann ein Eingabeweg sein. Quinns Produktwert liegt im prüfbaren Entwurf mit Lückenhinweisen, fachlicher Freigabe und klarer Übergabe."
    }
  ],
  en: [
    {
      question: "Does Quinn replace our nursing, practice or hospital system?",
      answer: "No. Quinn creates reviewable drafts. Nursing and patient records and the system of record remain in place; transfer is manual."
    },
    {
      question: "Does Quinn make professional decisions?",
      answer: "No. Quinn supports drafting, structuring and review. The responsible professional reviews nursing drafts. Medical documents require approval by a verified physician."
    },
    {
      question: "How does a pilot work?",
      answer: "We agree a bounded nursing or medical workflow, responsibilities, duration and metrics. We then evaluate usage, quality and review workload together."
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
    editRate: "Bearbeitungsaufwand",
    completeness: "Vollständigkeit",
    reviewEffort: "Fachlicher Prüfaufwand",
    teamAcceptance: "Akzeptanz im Team"
  },
  en: {
    minutesPerCase: "Minutes per case",
    editRate: "Edit rate",
    completeness: "Completeness",
    reviewEffort: "Professional review effort",
    teamAcceptance: "Team acceptance"
  }
} as const;

export const demoCtaByLocale = {
  de: "Unverbindlich Demo anfragen",
  en: "Request a demo"
} as const;

export const publicMetadataPages = {
  "/produkt/uebersicht": { title: "Produktübersicht für Pflege und Medizin | Quinn", description: "Von Gespräch, Audio und Notizen zum prüfbaren Entwurf: fachliche Prüfung und manuelle Übernahme für Pflege und Medizin." },
  "/en/product/overview": { title: "Product overview for nursing and medicine | Quinn", description: "From conversations, audio and notes to reviewable drafts: professional review and manual handoff for nursing and medicine." },
  "/produkt/pruefung-qualitaet": { title: "Prüfung & Qualität für Pflege und Medizin | Quinn", description: "Quellen abgleichen, fehlende Angaben klären und Entwürfe bearbeiten. Pflegefachliche Prüfung und ärztliche Freigabe vor der manuellen Übernahme." },
  "/en/product/review-quality": { title: "Review & quality for nursing and medicine | Quinn", description: "Check sources, clarify missing information and edit drafts. Professional nursing review and physician approval before manual handoff." },
} as const;

export const publicSeoPairs = [
  ["/produkt/pruefung-qualitaet", "/en/product/review-quality"],
  ["/", "/en"],
  ["/agb", "/en/terms"],
  ["/anwendungen/sis-aufnahme", "/en/use-cases/sis-intake"],
  ["/anwendungen/sprachdokumentation-pflege", "/en/use-cases/voice-documentation-care"],
  ["/avv", "/en/dpa"],
  ["/cookies", "/en/cookies"],
  ["/datenschutz", "/en/privacy"],
  ["/demo-buchen", "/en/book-demo"],
  ["/forschung", "/en/research"],
  ["/kunden", "/en/customers"],
  ["/loesungen/ambulante-pflege", "/en/solutions/home-care"],
  ["/loesungen/medizin", "/en/solutions/medicine"],
  ["/loesungen/pflege", "/en/solutions/nursing-care"],
  ["/loesungen/pflegeheime", "/en/solutions/care-homes"],
  ["/loesungen/psychologen", "/en/solutions/psychologists"],
  ["/loesungen/traeger-qm", "/en/solutions/operators-quality-management"],
  ["/pilotprogramm", "/en/pilot-program"],
  ["/preise", "/en/pricing"],
  ["/produkt/uebersicht", "/en/product/overview"],
  ["/ueber-uns", "/en/about"],
  ["/updates", "/en/updates"],
  ["/impressum", "/en/legal-notice"]
] as const;

export function buildSeoAlternates(slug: string) {
  const pair = publicSeoPairs.find(([de, en]) => de === slug || en === slug);
  const languages = pair
    ? { de: `${siteUrl}${pair[0]}`, en: `${siteUrl}${pair[1]}`, "x-default": `${siteUrl}${pair[0]}` }
    : undefined;
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
        ? "KI-Assistenz für prüfbare Dokumentationsentwürfe in Pflege und Medizin. Fachliche Prüfung und manuelle Übernahme ins bestehende Fachsystem."
        : "AI assistance for reviewable documentation drafts in nursing and medicine. Professional review and manual transfer into the existing system.",
    url: siteUrl,
    provider: { "@id": `${siteUrl}/#organization` },
    inLanguage: locale === "de" ? "de-DE" : "en",
    isAccessibleForFree: false,
    featureList:
      locale === "de"
        ? ["Gespräche und Notizen erfassen", "Prüfbare Entwürfe", "Offene Punkte", "Fachliche Freigabe", "Manuelle Übernahme ins bestehende System"]
        : ["Capture conversations and notes", "Reviewable drafts", "Open points", "Professional approval", "Manual transfer into the existing system"]
  };
}
