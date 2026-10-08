import type { Metadata } from "next";
import { buildSeoAlternates, publicMetadataPages } from "@/content/public-site";
import { ProductReview } from "@/components/marketing/product-pages";

export const metadata: Metadata = {
  ...publicMetadataPages["/en/product/review-quality"],
  alternates: buildSeoAlternates("/en/product/review-quality")
};

export default function Page() {
  return <ProductReview locale="en" />;
}
