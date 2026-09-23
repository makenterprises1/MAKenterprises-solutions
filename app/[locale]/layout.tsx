import type { Metadata } from "next";
import { getContent, locales, Locale } from "@/lib/content";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = getContent(params.locale);
  const url = `https://makenterprises-solutions.vercel.app/${params.locale}`;

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: url,
      languages: {
        en: "https://makenterprises-solutions.vercel.app/en",
        fr: "https://makenterprises-solutions.vercel.app/fr",
      },
    },
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      url,
      siteName: "MAK Enterprises",
      locale: params.locale === "en" ? "en_US" : "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: Locale };
}) {
  return <div lang={params.locale}>{children}</div>;
}
