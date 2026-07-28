"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function DocumentLanguage() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = pathname.startsWith("/en") ? "en" : "de";
  }, [pathname]);

  return null;
}
