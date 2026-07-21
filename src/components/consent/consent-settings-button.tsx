"use client";

type ConsentSettingsButtonProps = {
  locale?: "de" | "en";
};

export function ConsentSettingsButton({ locale = "de" }: ConsentSettingsButtonProps) {
  return (
    <button
      type="button"
      onClick={() => window.__quinnOpenConsentSettings?.()}
      className="block text-left transition-colors hover:text-foreground"
    >
      {locale === "en" ? "Privacy settings" : "Datenschutzeinstellungen"}
    </button>
  );
}
