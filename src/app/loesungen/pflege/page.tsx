import type { Metadata } from "next";
import { buildSeoAlternates } from "@/content/public-site";
import { SolutionHub } from "@/components/marketing/solution-hub";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/loesungen/pflege"),
  title: "Quinn für Pflege | Pflegegespräche und SIS",
  description: "Pflegegespräche dokumentieren und SIS strukturiert vorbereiten. Prüfbare Entwürfe, fachliche Verantwortung und manuelle Übernahme ins bestehende Pflegesystem."
};

export default function Page() {
  return <SolutionHub locale="de" segment="care" />;
}
