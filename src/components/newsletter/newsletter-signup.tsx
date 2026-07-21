"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowRight, Mail, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type NewsletterLocale = "de" | "en";

type NewsletterSignupProps = {
  variant?: "footer" | "popup";
  trigger?: "after-consent" | "pricing";
  locale?: NewsletterLocale;
};

const DISMISSED_KEY = "quinn_newsletter_popup_dismissed_v1";
const SIGNED_UP_KEY = "quinn_newsletter_signed_up_v1";
const CONSENT_KEY = "quinn_cookie_consent_v1";

const copy = {
  de: {
    success: "Danke. Die Anmeldung ist gespeichert. Wir melden uns mit relevanten Quinn-Updates.",
    emailLabel: "E-Mail für Quinn Newsletter",
    placeholder: "E-Mail-Adresse",
    submitting: "Speichern…",
    submit: "Anmelden",
    helper: "Kein Spam. Produktupdates, Einblicke in Pflegedokumentation und Einladungen zu Quinn-Terminen.",
    error: "Die Anmeldung konnte gerade nicht gespeichert werden. Bitte versuchen Sie es erneut.",
    footerAria: "Newsletter Anmeldung",
    footerTitle: "Quinn Newsletter",
    footerText: "Für Updates zu Produkt, Pflegedokumentation und frühen Einladungen.",
    popupAria: "Quinn Newsletter Anmeldung",
    popupTitle: "Quinn Newsletter",
    popupText: "Neue Einblicke zu Dokumentationsflows, Produktupdates und frühen Terminen direkt erhalten.",
    close: "Newsletter Hinweis schließen"
  },
  en: {
    success: "Thanks. Your signup has been saved. We will send relevant Quinn updates.",
    emailLabel: "Email for the Quinn newsletter",
    placeholder: "Email address",
    submitting: "Saving…",
    submit: "Sign up",
    helper: "No spam. Product updates, documentation workflow insights and invitations to Quinn sessions.",
    error: "The signup could not be saved right now. Please try again.",
    footerAria: "Newsletter signup",
    footerTitle: "Quinn Newsletter",
    footerText: "Product updates, documentation workflow insights and early invitations.",
    popupAria: "Quinn Newsletter signup",
    popupTitle: "Quinn Newsletter",
    popupText: "Get new documentation-flow insights, product updates and early sessions directly.",
    close: "Close newsletter notice"
  }
} as const;

function remember(key: string) {
  try {
    localStorage.setItem(key, new Date().toISOString());
  } catch {
    // Non-essential UI state; the form remains usable without localStorage.
  }
}

function hasStored(key: string) {
  try {
    return Boolean(localStorage.getItem(key));
  } catch {
    return false;
  }
}

function NewsletterForm({ compact = false, source, locale }: { compact?: boolean; source: string; locale: NewsletterLocale }) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const t = copy[locale];

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || status === "submitting") {
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, source, website })
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }
    } catch {
      setStatus("error");
      return;
    }

    remember(SIGNED_UP_KEY);
    setStatus("success");
  }

  if (status === "success") {
    return <div className="rounded-2xl border border-[#DDE8E4] bg-[#E7F1EE] p-4 text-sm leading-6 text-foreground">{t.success}</div>;
  }

  return (
    <form onSubmit={submit} className={cn("grid gap-3", compact ? "sm:grid-cols-[1fr_auto]" : "")} data-newsletter-source={source}>
      <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
        {t.emailLabel}
      </label>
      <Input
        id={`newsletter-email-${source}`}
        type="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder={t.placeholder}
        className="h-11 rounded-xl bg-white"
      />
      <label className="hidden" htmlFor={`newsletter-website-${source}`}>
        Website
      </label>
      <input
        id={`newsletter-website-${source}`}
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
      />
      <Button type="submit" className="h-11 rounded-xl px-5" disabled={status === "submitting"}>
        {status === "submitting" ? t.submitting : t.submit}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
      <p className={cn("text-xs leading-5 text-muted-foreground", compact ? "sm:col-span-2" : "")}>{t.helper}</p>
      {status === "error" ? <p className={cn("text-xs font-medium text-[#CC2929]", compact ? "sm:col-span-2" : "")}>{t.error}</p> : null}
    </form>
  );
}

export function NewsletterSignup({ variant = "footer", trigger = "after-consent", locale }: NewsletterSignupProps) {
  const [isVisible, setIsVisible] = useState(variant === "footer");
  const [pathLocale, setPathLocale] = useState<NewsletterLocale>(locale ?? "de");

  const activeLocale = locale ?? pathLocale;
  const t = copy[activeLocale];
  const source = useMemo(() => (variant === "footer" ? (activeLocale === "en" ? "footer-en" : "footer") : `${trigger}${activeLocale === "en" ? "-en" : ""}`), [activeLocale, trigger, variant]);

  useEffect(() => {
    if (locale) {
      setPathLocale(locale);
      return;
    }
    setPathLocale(window.location.pathname.startsWith("/en") ? "en" : "de");
  }, [locale]);

  useEffect(() => {
    if (variant !== "popup") {
      return;
    }

    const dismissedKey = `${DISMISSED_KEY}:${trigger}`;
    const isPricingPath = window.location.pathname === "/preise" || window.location.pathname === "/en/pricing";

    if (trigger === "after-consent" && isPricingPath) {
      return;
    }

    if (hasStored(dismissedKey) || hasStored(SIGNED_UP_KEY)) {
      return;
    }

    const show = () => {
      window.setTimeout(() => {
        if (!hasStored(dismissedKey) && !hasStored(SIGNED_UP_KEY)) {
          setIsVisible(true);
        }
      }, trigger === "pricing" ? 900 : 1400);
    };

    if (trigger === "pricing") {
      if (isPricingPath) {
        show();
      }
      return;
    }

    if (hasStored(CONSENT_KEY) || !document.querySelector('[aria-label="Cookie-Einstellungen"], [aria-label="Cookie settings"]')) {
      show();
      return;
    }

    window.addEventListener("quinn:consent-updated", show, { once: true });
    return () => window.removeEventListener("quinn:consent-updated", show);
  }, [trigger, variant]);

  function closePopup() {
    remember(`${DISMISSED_KEY}:${trigger}`);
    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  if (variant === "footer") {
    return (
      <section className="rounded-[1.5rem] border border-border bg-white p-5" aria-label={t.footerAria}>
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1EE]">
            <Mail className="h-5 w-5 text-[#1E6B72]" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{t.footerTitle}</p>
            <p className="mt-1 text-sm leading-6 text-secondary-foreground">{t.footerText}</p>
          </div>
        </div>
        <NewsletterForm compact source={source} locale={activeLocale} />
      </section>
    );
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-40 sm:bottom-6 sm:left-auto sm:right-6 sm:w-[25rem]" role="dialog" aria-modal="false" aria-label={t.popupAria}>
      <div className="rounded-[1.5rem] border border-border bg-white p-5 shadow-subtle">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E7F1EE]">
              <Mail className="h-5 w-5 text-[#1E6B72]" />
            </div>
            <div>
              <p className="text-base font-semibold text-foreground">{t.popupTitle}</p>
              <p className="mt-1 text-sm leading-6 text-secondary-foreground">{t.popupText}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={closePopup}
            className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-[#F4F4F6] hover:text-foreground"
            aria-label={t.close}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-5">
          <NewsletterForm source={source} locale={activeLocale} />
        </div>
      </div>
    </div>
  );
}
