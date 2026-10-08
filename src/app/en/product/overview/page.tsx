import type { Metadata } from "next";
import { buildSeoAlternates, publicMetadataPages } from "@/content/public-site";
import { ProductOverview } from "@/components/marketing/product-pages";

export const metadata: Metadata = {
  ...publicMetadataPages["/en/product/overview"],
  alternates: buildSeoAlternates("/en/product/overview")
};

export default function Page() {
  return <ProductOverview locale="en" />;
}
