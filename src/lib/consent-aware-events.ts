"use client";

import { track } from "@vercel/analytics";
export function analyticsSegment(value: string | null | undefined): "care" | "medicine" | "general" {
  return value === "care" || value === "medicine" ? value : "general";
}

const CONSENT_KEY = "quinn_cookie_consent_v1";

type PublicConversionEvent =
  | "audience_selected"
  | "demo_form_started"
  | "demo_form_validation_error"
  | "demo_form_submitted"
  | "demo_form_failed"
  | "demo_cta_clicked";

type PublicConversionContext = {
  segment?: "care" | "medicine" | "general";
  locale: "de" | "en";
  source: "demo-buchen" | "book-demo" | "site-header" | "homepage" | "seo-landing" | "public-page";
};

function hasAnalyticsConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;

    const stored = JSON.parse(raw) as {
      version?: number;
      preferences?: { analytics?: boolean };
    };

    return stored.version === 1 && stored.preferences?.analytics === true;
  } catch {
    return false;
  }
}

export function trackPublicConversion(event: PublicConversionEvent, context: PublicConversionContext) {
  if (!hasAnalyticsConsent()) return;

  try {
    track(event, { event, locale: context.locale === "en" ? "en" : "de", source: context.source, segment: analyticsSegment(context.segment) });
  } catch {
    // Analytics must never block a public conversion flow.
  }
}
