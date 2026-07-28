"use client";

import type { Route } from "next";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { trackPublicConversion } from "@/lib/consent-aware-events";

type TrackedDemoLinkProps = Omit<ComponentProps<typeof Link>, "href" | "onClick"> & {
  href: Route;
  locale: "de" | "en";
  source: "site-header" | "homepage";
  children: ReactNode;
};

export function TrackedDemoLink({ href, locale, source, children, ...props }: TrackedDemoLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      onClick={() => trackPublicConversion("demo_cta_clicked", { locale, source })}
    >
      {children}
    </Link>
  );
}
