import type { Metadata } from "next";
import { buildSeoAlternates, publicMetadataPages } from "@/content/public-site";
import { ProductReview } from "@/components/marketing/product-pages";

export const metadata: Metadata = {
  ...publicMetadataPages["/produkt/pruefung-qualitaet"],
  alternates: buildSeoAlternates("/produkt/pruefung-qualitaet")
};

export default function Page() {
  return <ProductReview locale="de" />;
}
