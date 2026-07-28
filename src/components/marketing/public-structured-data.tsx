import { buildSoftwareApplicationJsonLd, siteUrl } from "@/content/public-site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Quinn Health",
  url: siteUrl,
  logo: `${siteUrl}/quinn-logo.svg`,
  email: "can@quinnhealth.de",
  telephone: "+49 176 81748167",
  founder: {
    "@type": "Person",
    name: "Can Yilmaz"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Quinn",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: ["de-DE", "en"]
};

export function PublicStructuredData() {
  const softwareJsonLd = buildSoftwareApplicationJsonLd("de");

  return (
    <>
      {[organizationJsonLd, websiteJsonLd, softwareJsonLd].map((entry) => (
        <script
          key={`${entry["@type"]}-${entry.name}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
}
