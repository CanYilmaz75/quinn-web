"use client";

import { Analytics } from "@vercel/analytics/next";
import { useEffect, useState } from "react";

const CONSENT_KEY = "quinn_cookie_consent_v1";

type ConsentUpdatedEvent = CustomEvent<{
  preferences?: {
    analytics?: boolean;
  };
}>;

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

export function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(hasAnalyticsConsent());

    const updateConsent = (event: Event) => {
      const consentEvent = event as ConsentUpdatedEvent;
      setEnabled(consentEvent.detail?.preferences?.analytics === true);
    };

    window.addEventListener("quinn:consent-updated", updateConsent);
    return () => window.removeEventListener("quinn:consent-updated", updateConsent);
  }, []);

  return enabled ? <Analytics /> : null;
}
