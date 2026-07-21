import type { Metadata } from "next";
import Script from "next/script";

import { CookieConsentManager } from "@/components/consent/cookie-consent-manager";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Quinn",
  description: "Quinn ist eine deutschsprachige Anwendung fuer klinische und pflegerische Dokumentation."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <Script id="quinn-consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>
        {children}
        <CookieConsentManager />
        <NewsletterSignup variant="popup" trigger="after-consent" />
        <NewsletterSignup variant="popup" trigger="pricing" />
      </body>
    </html>
  );
}
