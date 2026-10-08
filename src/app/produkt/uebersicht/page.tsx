import type { Metadata } from "next";
import { buildSeoAlternates, publicMetadataPages } from "@/content/public-site";
import { ProductOverview } from "@/components/marketing/product-pages";

export const metadata: Metadata = {
  ...publicMetadataPages["/produkt/uebersicht"],
  alternates: buildSeoAlternates("/produkt/uebersicht")
};

export default function Page() {
  return <ProductOverview locale="de" />;
}
