"use client";

import { track } from "@vercel/analytics";

const CONSENT_KEY = "quinn_cookie_consent_v1";

type PublicConversionEvent = "demo_form_started" | "demo_form_submitted" | "demo_form_failed" | "demo_cta_clicked";

type PublicConversionContext = {
  locale: "de" | "en";
  source: "demo-buchen" | "book-demo" | "site-header" | "homepage";
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
    track(event, context);
  } catch {
    // Analytics must never block a public conversion flow.
  }
}
