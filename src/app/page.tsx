import type { Metadata } from "next";
import { buildSeoAlternates } from "@/content/public-site";
import { EqualPillarLanding } from "@/components/marketing/equal-pillar-landing";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/"),
  title: "Quinn | KI-Dokumentation für Pflege und Medizin",
  description: "Gespräche und Notizen in prüfbare Dokumentationsentwürfe verwandeln. Für Pflege und Medizin – mit fachlicher Prüfung und manueller Übernahme ins bestehende System."
};

export default function HomePage() {
  return <EqualPillarLanding locale="de" />;
}
