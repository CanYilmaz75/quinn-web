import type { Metadata } from "next";
import { buildSeoAlternates } from "@/content/public-site";
import { SolutionHub } from "@/components/marketing/solution-hub";

export const metadata: Metadata = {
  alternates: buildSeoAlternates("/loesungen/medizin"),
  title: "Quinn für Medizin | Anamnese und Verlauf",
  description: "Anamnese und Verlauf als prüfbare Entwürfe vorbereiten. Ärztliche Freigabe, kontrollierter Einsatz und manuelle Text- oder PDF-Übergabe statt automatischer PVS-Integration."
};

export default function Page() {
  return <SolutionHub locale="de" segment="medicine" />;
}
