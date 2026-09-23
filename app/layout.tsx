"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale = pathname?.startsWith("/fr") ? "fr" : "en";

  return (
    <html lang={locale}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
