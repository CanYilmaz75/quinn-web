import type { Metadata } from "next";
import Script from "next/script";

import { ConsentAwareAnalytics } from "@/components/analytics/consent-aware-analytics";
import { DocumentLanguage } from "@/components/analytics/document-language";
import { PublicDemoLinkTracker } from "@/components/analytics/public-demo-link-tracker";
import { CookieConsentManager } from "@/components/consent/cookie-consent-manager";
import { PublicStructuredData } from "@/components/marketing/public-structured-data";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import { siteUrl } from "@/content/public-site";
import "@/app/globals.css";

const defaultDescription = "Quinn unterstützt Pflege- und Gesundheitsteams dabei, Gespräche und Notizen in strukturierte, prüfbare Dokumentationsentwürfe zu überführen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Quinn",
  description: defaultDescription,
  openGraph: {
    title: "Quinn",
    description: defaultDescription,
    url: siteUrl,
    siteName: "Quinn",
    locale: "de_DE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinn",
    description: defaultDescription
  }
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
        <PublicStructuredData />
        {children}
        <DocumentLanguage />
        <PublicDemoLinkTracker />
        <ConsentAwareAnalytics />
        <CookieConsentManager />
        <NewsletterSignup variant="popup" />
      </body>
    </html>
  );
}
