import type { Route } from "next";

export type DemoIntent = "sis" | "pilot-pricing" | "site-offer" | "operator-scope";

type DemoIntentContent = {
  interest: string;
  heading: string;
};

const intentContent: Record<"de" | "en", Record<DemoIntent, DemoIntentContent>> = {
  de: {
    sis: {
      interest: "Pflegeaufnahme und SIS",
      heading: "SIS-Demo direkt mit dem Gründer klären."
    },
    "pilot-pricing": {
      interest: "Pilot und Preisrahmen",
      heading: "Pilot und Preisrahmen direkt klären."
    },
    "site-offer": {
      interest: "Standortangebot und Einführung",
      heading: "Angebot für Ihren Standort direkt klären."
    },
    "operator-scope": {
      interest: "Träger- oder Verbundlösung",
      heading: "Träger- oder Verbundlösung direkt klären."
    }
  },
  en: {
    sis: {
      interest: "Care intake and SIS",
      heading: "Discuss your SIS demo directly with the founder."
    },
    "pilot-pricing": {
      interest: "Pilot and pricing range",
      heading: "Discuss your pilot and pricing range directly."
    },
    "site-offer": {
      interest: "Site offer and rollout",
      heading: "Discuss an offer for your site directly."
    },
    "operator-scope": {
      interest: "Operator or group solution",
      heading: "Discuss an operator or group solution directly."
    }
  }
};

export function parseDemoIntent(value: string | string[] | undefined): DemoIntent | undefined {
  const candidate = Array.isArray(value) ? value[0] : value;
  if (candidate && Object.prototype.hasOwnProperty.call(intentContent.de, candidate)) {
    return candidate as DemoIntent;
  }
  return undefined;
}

export function getDemoIntentContent(locale: "de" | "en", intent: DemoIntent | undefined) {
  return intent ? intentContent[locale][intent] : undefined;
}

export function buildDemoHref(locale: "de" | "en", intent?: DemoIntent): Route {
  const path = locale === "en" ? "/en/book-demo" : "/demo-buchen";
  return (intent ? `${path}?intent=${intent}` : path) as Route;
}
