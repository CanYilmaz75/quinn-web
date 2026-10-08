"use client";

import { useEffect } from "react";

import { analyticsSegment, trackPublicConversion } from "@/lib/consent-aware-events";

const demoPaths = new Set(["/demo-buchen", "/en/book-demo"]);

export function PublicDemoLinkTracker() {
  useEffect(() => {
    function trackDemoClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link || link.dataset.quinnTrackedDemo === "true") return;

      const destination = new URL(link.href, window.location.origin);
      if (destination.origin !== window.location.origin) return;
      const pillar = destination.pathname.match(/^\/(?:loesungen\/(pflege|medizin)|en\/solutions\/(nursing-care|medicine))$/);
      if (pillar) {
        trackPublicConversion("audience_selected", {
          locale: window.location.pathname.startsWith("/en") ? "en" : "de", source: "public-page",
          segment: /pflege|nursing-care/.test(destination.pathname) ? "care" : "medicine"
        });
        return;
      }
      if (!demoPaths.has(destination.pathname)) return;

      trackPublicConversion("demo_cta_clicked", {
        locale: window.location.pathname.startsWith("/en") ? "en" : "de",
        source: "public-page",
        segment: analyticsSegment(destination.searchParams.get("segment"))
      });
    }

    document.addEventListener("click", trackDemoClick, { capture: true });
    return () => document.removeEventListener("click", trackDemoClick, { capture: true });
  }, []);

  return null;
}
