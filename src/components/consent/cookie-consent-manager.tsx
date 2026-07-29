"use client";

import { useEffect, useState } from "react";
import { Check, ChevronDown, Cookie, RotateCcw, SlidersHorizontal, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ConsentStatus = "granted" | "denied";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
};

type StoredConsent = {
  version: 1;
  regionMode: "global";
  updatedAt: string;
  preferences: ConsentPreferences;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __quinnOpenConsentSettings?: () => void;
  }
}

const CONSENT_KEY = "quinn_cookie_consent_v1";

const defaultPreferences: ConsentPreferences = {
  necessary: true,
  analytics: false
};

const categories = [
  {
    key: "necessary",
    title: "Notwendig",
    titleEn: "Necessary",
    required: true,
    description:
      "Erforderlich für Sicherheit, Sitzungen, Missbrauchsschutz und die technische Bereitstellung der Website.",
    descriptionEn: "Required for security, sessions, abuse prevention and technical delivery of the website."
  },
  {
    key: "analytics",
    title: "Analyse",
    titleEn: "Analytics",
    description:
      "Aktiviert Vercel Web Analytics erst nach Ihrer Zustimmung. Es werden keine Gesundheits- oder Pflegedaten als Analyseereignisse erfasst.",
    descriptionEn:
      "Enables Vercel Web Analytics only after your consent. Health or care data is not collected as analytics events."
  }
] as const;

function normalizePreferences(preferences: Partial<ConsentPreferences> | undefined): ConsentPreferences {
  return {
    necessary: true,
    analytics: preferences?.analytics === true
  };
}

function toConsentStatus(value: boolean): ConsentStatus {
  return value ? "granted" : "denied";
}

function consentModePayload(preferences: ConsentPreferences) {
  return {
    ad_storage: "denied" as ConsentStatus,
    ad_user_data: "denied" as ConsentStatus,
    ad_personalization: "denied" as ConsentStatus,
    analytics_storage: toConsentStatus(preferences.analytics),
    functionality_storage: "denied" as ConsentStatus,
    personalization_storage: "denied" as ConsentStatus,
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

function saveConsent(preferences: ConsentPreferences) {
  const normalized = normalizePreferences(preferences);
  const consent: StoredConsent = {
    version: 1,
    regionMode: "global",
    updatedAt: new Date().toISOString(),
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
    return { ...parsed, preferences: normalizePreferences(parsed.preferences) };
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

  useEffect(() => {
    const stored = readConsent();
    if (stored) {
      const normalized = normalizePreferences(stored.preferences);
      setPreferences(normalized);
      applyConsentMode(normalized, "update");
      setIsVisible(false);
    } else {
      setPreferences(defaultPreferences);
      applyConsentMode(defaultPreferences, "default");
      setIsVisible(true);
    }

    window.__quinnOpenConsentSettings = () => {
      window.dispatchEvent(new Event("quinn:consent-settings-opened"));
      setIsExpanded(true);
      setIsVisible(true);
    };

    setIsLoaded(true);

    return () => {
      delete window.__quinnOpenConsentSettings;
    };
  }, []);

  function updatePreference(key: keyof ConsentPreferences, value: boolean) {
    if (key === "necessary") {
      return;
    }
    setPreferences((current) => normalizePreferences({ ...current, [key]: value }));
  }

  function acceptAll() {
    const next = normalizePreferences({ necessary: true, analytics: true });
    setPreferences(next);
    saveConsent(next);
    setIsVisible(false);
  }

  function rejectAll() {
    const next = normalizePreferences(defaultPreferences);
    setPreferences(next);
    saveConsent(next);
    setIsVisible(false);
  }

  function saveSelection() {
    const next = normalizePreferences(preferences);
    setPreferences(next);
    saveConsent(next);
    setIsVisible(false);
  }

  if (!isLoaded || !isVisible) {
    return null;
  }

  const isEnglish = typeof window !== "undefined" && window.location.pathname.startsWith("/en");

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 sm:bottom-4 sm:left-6 sm:right-6 md:bottom-6 md:left-auto md:right-6 md:w-[24rem]" role="region" aria-label={isEnglish ? "Cookie settings" : "Cookie-Einstellungen"}>
      <div className="mx-auto max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-2xl border border-border bg-white shadow-subtle">
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

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:w-[24rem]">
            <Button type="button" size="sm" onClick={acceptAll} className="rounded-xl">
              <Check className="mr-2 h-4 w-4" />
              {isEnglish ? "Accept all" : "Alle akzeptieren"}
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={rejectAll} className="rounded-xl">
              <X className="mr-2 h-4 w-4" />
              {isEnglish ? "Reject" : "Ablehnen"}
            </Button>
            <Button type="button" size="sm" variant="ghost" onClick={saveSelection} className="col-span-2 rounded-xl sm:col-span-1">
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
                const disabled = isRequired;

                return (
                  <div key={category.key} className="grid gap-4 rounded-lg border border-border p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{isEnglish ? category.titleEn : category.title}</p>
                      <p className="mt-2 text-sm leading-6 text-secondary-foreground">{isEnglish ? category.descriptionEn : category.description}</p>
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
                  ? "Only necessary storage and optional analytics are used. Your analytics choice is stored locally and can be changed at any time."
                  : "Es werden nur notwendige Speicherung und optionale Analyse verwendet. Ihre Analyseauswahl wird lokal gespeichert und kann jederzeit geändert werden."}
              </p>
              <button type="button" onClick={rejectAll} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                <RotateCcw className="h-4 w-4" />
                {isEnglish ? "Reset to necessary only" : "Auf nur notwendig zurücksetzen"}
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
