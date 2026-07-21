const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? "https://app.quinnhealth.de").replace(/\/$/, "");

export const publicConfig = {
  siteUrl: "https://quinnhealth.de",
  appUrl,
  loginUrl: `${appUrl}/login`
} as const;