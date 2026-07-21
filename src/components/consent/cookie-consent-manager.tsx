"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Cookie, RotateCcw, ShieldCheck, SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConsentStatus = "granted" | "denied";

type ConsentPreferences = {
  necessary: true;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  personalization: boolean;
  saleOrShare: boolean;
};

type StoredConsent = {
  version: 1;
  regionMode: "global";
  updatedAt: string;
  gpcEnabled: boolean;
  preferences: ConsentPreferences;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __quinnOpenConsentSettings?: () => void;
  }

  interface Navigator {
    globalPrivacyControl?: boolean;
  }
}

const CONSENT_KEY = "quinn_cookie_consent_v1";

const defaultPreferences: ConsentPreferences = {
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false,
  personalization: false,
  saleOrShare: false
};

const categories = [
  {
    key: "necessary",
    title: "Notwendig",
    titleEn: "Necessary",
    required: true,
    description:
      "Erforderlich fuer Sicherheit, Login, Sitzungen, Missbrauchsschutz und die Bereitstellung geschuetzter Bereiche.",
    descriptionEn: "Required for security, login, sessions, abuse prevention and protected areas."
  },
  {
    key: "functional",
    title: "Funktional",
    titleEn: "Functional",
    description:
      "Speichert Komfortfunktionen und Einstellungen, die nicht zwingend fuer den Betrieb erforderlich sind.",
    descriptionEn: "Stores convenience functions and settings that are not strictly required for operation."
  },
  {
    key: "analytics",
    title: "Analyse",
    titleEn: "Analytics",
    description:
      "Hilft uns zu verstehen, wie Quinn genutzt wird. Aktiviert Google Consent Mode analytics_storage erst nach Zustimmung.",
    descriptionEn: "Helps us understand how Quinn is used. Google Consent Mode analytics_storage is activated only after consent."
  },
  {
    key: "marketing",
    title: "Marketing und Ads",
    titleEn: "Marketing and ads",
    description:
      "Erlaubt werbliche Messung und Anzeigenfunktionen. Steuert ad_storage, ad_user_data und ad_personalization.",
    descriptionEn: "Allows advertising measurement and ad functions. Controls ad_storage, ad_user_data and ad_personalization."
  },
  {
    key: "personalization",
    title: "Personalisierung",
    titleEn: "Personalization",
    description:
      "Erlaubt nicht notwendige Personalisierung von Inhalten und Produkterlebnissen.",
    descriptionEn: "Allows non-essential personalization of content and product experiences."
  },
  {
    key: "saleOrShare",
    title: "Verkauf oder Weitergabe nach CCPA/CPRA",
    titleEn: "Sale or sharing under CCPA/CPRA",
    description:
      "Erlaubt Verarbeitung, die als Verkauf oder Sharing gelten kann. Bei Global Privacy Control bleibt diese Option deaktiviert.",
    descriptionEn: "Allows processing that may count as sale or sharing. With Global Privacy Control this option remains disabled."
  }
] as const;

function hasGpc() {
  return typeof navigator !== "undefined" && navigator.globalPrivacyControl === true;
}

function normalizePreferences(preferences: ConsentPreferences, gpcEnabled: boolean): ConsentPreferences {
  return {
    ...preferences,
    necessary: true,
    marketing: gpcEnabled ? false : preferences.marketing,
    saleOrShare: gpcEnabled ? false : preferences.saleOrShare
  };
}

function toConsentStatus(value: boolean): ConsentStatus {
  return value ? "granted" : "denied";
}

function consentModePayload(preferences: ConsentPreferences) {
  return {
    ad_storage: toConsentStatus(preferences.marketing),
    ad_user_data: toConsentStatus(preferences.marketing && preferences.saleOrShare),
    ad_personalization: toConsentStatus(preferences.marketing && preferences.personalization),
    analytics_storage: toConsentStatus(preferences.analytics),
    functionality_storage: toConsentStatus(preferences.functional),
    personalization_storage: toConsentStatus(preferences.personalization),
    security_storage: "granted" as ConsentStatus
  };
}

function applyConsentMode(preferences: ConsentPreferences, command: "default" | "update") {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", command, {
    ...consentModePayload(preferences),
    wait_for_update: command === "default" ? 500 : undefined
  });
}

function saveConsent(preferences: ConsentPreferences, gpcEnabled: boolean) {
  const normalized = normalizePreferences(preferences, gpcEnabled);
  const consent: StoredConsent = {
    version: 1,
    regionMode: "global",
    updatedAt: new Date().toISOString(),
    gpcEnabled,
    preferences: normalized
  };

  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    document.cookie = `${CONSENT_KEY}=set; Max-Age=15552000; Path=/; SameSite=Lax`;
  } catch {
    // Consent still applies in-memory for this page view.
  }

  applyConsentMode(normalized, "update");
  window.dispatchEvent(new CustomEvent("quinn:consent-updated", { detail: consent }));
  return consent;
}

function readConsent(): StoredConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== 1 || !parsed.preferences) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function Toggle({
  checked,
  disabled,
  onChange,
  label
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-7 w-12 shrink-0 rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        checked ? "border-accent bg-accent" : "border-border bg-white",
        disabled && "cursor-not-allowed opacity-60"
      )}
    >
      <span
        className={cn(
          "absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm transition-transform",
          checked ? "translate-x-5" : "translate-x-1"
        )}
      />
    </button>
  );
}

export function CookieConsentManager() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>(defaultPreferences);
  const [gpcEnabled, setGpcEnabled] = useState(false);

  useEffect(() => {
    const gpc = hasGpc();
    setGpcEnabled(gpc);

    const stored = readConsent();
    if (stored) {
      const normalized = normalizePreferences(stored.preferences, gpc);
      setPreferences(normalized);
      applyConsentMode(normalized, "update");
      setIsVisible(false);
    } else {
      const normalized = normalizePreferences(defaultPreferences, gpc);
      setPreferences(normalized);
      applyConsentMode(normalized, "default");
      setIsVisible(true);
    }

    window.__quinnOpenConsentSettings = () => {
      setIsExpanded(true);
      setIsVisible(true);
    };

    setIsLoaded(true);

    return () => {
      delete window.__quinnOpenConsentSettings;
    };
  }, []);

  const allOptionalEnabled = useMemo(
    () => preferences.functional && preferences.analytics && preferences.marketing && preferences.personalization && preferences.saleOrShare,
    [preferences]
  );

  function updatePreference(key: keyof ConsentPreferences, value: boolean) {
    if (key === "necessary") {
      return;
    }
    setPreferences((current) => normalizePreferences({ ...current, [key]: value }, gpcEnabled));
  }

  function acceptAll() {
    const next = normalizePreferences(
      {
        necessary: true,
        functional: true,
        analytics: true,
        marketing: true,
        personalization: true,
        saleOrShare: true
      },
      gpcEnabled
    );
    setPreferences(next);
    saveConsent(next, gpcEnabled);
    setIsVisible(false);
  }

  function rejectAll() {
    const next = normalizePreferences(defaultPreferences, gpcEnabled);
    setPreferences(next);
    saveConsent(next, gpcEnabled);
    setIsVisible(false);
  }

  function saveSelection() {
    const next = normalizePreferences(preferences, gpcEnabled);
    setPreferences(next);
    saveConsent(next, gpcEnabled);
    setIsVisible(false);
  }

  if (!isLoaded || !isVisible) {
    return null;
  }

  const isEnglish = typeof window !== "undefined" && window.location.pathname.startsWith("/en");

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 sm:bottom-4 sm:left-6 sm:right-6 md:bottom-6 md:left-auto md:right-6 md:w-[24rem]" role="region" aria-label={isEnglish ? "Cookie settings" : "Cookie-Einstellungen"}>
      <div className="mx-auto rounded-2xl border border-border bg-white shadow-subtle">
        <div className="grid gap-3 p-3 sm:p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F4F4F6]">
              <Cookie className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight text-foreground">{isEnglish ? "Cookie settings" : "Cookie-Einstellungen"}</p>
              <p className="mt-0.5 text-xs leading-5 text-secondary-foreground">
                {isEnglish ? "Optional purposes are activated only after your selection." : "Optionale Zwecke aktivieren wir nur nach Auswahl."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
              {gpcEnabled ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-accent px-3 py-1 text-xs font-semibold text-foreground">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {isEnglish ? "Browser privacy signal detected" : "Browser-Datenschutzsignal erkannt"}
                </span>
              ) : null}
              <button
                type="button"
                onClick={() => setIsExpanded((current) => !current)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground"
                aria-expanded={isExpanded}
              >
                <SlidersHorizontal className="h-4 w-4" />
                {isEnglish ? "Settings" : "Einstellungen"}
                <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
              </button>
            </div>

          <div className="grid gap-2 sm:grid-cols-3 lg:w-[24rem]">
            <Button type="button" size="sm" onClick={acceptAll} disabled={gpcEnabled && allOptionalEnabled} className="rounded-xl">
              <Check className="mr-2 h-4 w-4" />
              {isEnglish ? "Accept all" : "Alle akzeptieren"}
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={rejectAll} className="rounded-xl">
              <X className="mr-2 h-4 w-4" />
              {isEnglish ? "Reject" : "Ablehnen"}
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={saveSelection} className="rounded-xl">
              {isEnglish ? "Save selection" : "Auswahl speichern"}
            </Button>
          </div>
        </div>

        {isExpanded ? (
          <div className="border-t border-border px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="grid gap-3 pt-5">
              {categories.map((category) => {
                const key = category.key;
                const checked = preferences[key];
                const isRequired = "required" in category && category.required;
                const disabled = isRequired || (gpcEnabled && (key === "marketing" || key === "saleOrShare"));

                return (
                  <div key={category.key} className="grid gap-4 rounded-lg border border-border p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{isEnglish ? category.titleEn : category.title}</p>
                      <p className="mt-2 text-sm leading-6 text-secondary-foreground">{isEnglish ? category.descriptionEn : category.description}</p>
                      {gpcEnabled && (key === "marketing" || key === "saleOrShare") ? (
                        <p className="mt-2 text-xs font-semibold text-foreground">
                          {isEnglish ? "Automatically disabled by Global Privacy Control." : "Durch Global Privacy Control automatisch deaktiviert."}
                        </p>
                      ) : null}
                    </div>
                    <Toggle
                      checked={checked}
                      disabled={disabled}
                      onChange={(value) => updatePreference(key, value)}
                      label={`${isEnglish ? category.titleEn : category.title} ${checked ? (isEnglish ? "disable" : "deaktivieren") : isEnglish ? "enable" : "aktivieren"}`}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-lg bg-[#F4F4F6] p-4 text-sm leading-6 text-secondary-foreground">
              <p>
                {isEnglish
                  ? "Sensitive data is not used for advertising. Your selection is stored locally and passed to connected services only as consent or refusal for the respective purpose."
                  : "Sensible Daten werden nicht fuer Werbung verwendet. Ihre Auswahl wird lokal gespeichert und an eingebundene Dienste nur als Zustimmung oder Ablehnung fuer den jeweiligen Zweck weitergegeben."}
              </p>
              <button type="button" onClick={rejectAll} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <RotateCcw className="h-4 w-4" />
                {isEnglish ? "Reset to minimal settings" : "Auf minimale Einstellung zuruecksetzen"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
