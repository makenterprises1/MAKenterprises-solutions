import Link from "next/link";
import { Locale } from "@/lib/content";

export default function Nav({
  locale,
  items,
  cta,
}: {
  locale: Locale;
  items: { label: string; href: string }[];
  cta: string;
}) {
  const otherLocale = locale === "en" ? "fr" : "en";

  return (
    <header className="sticky top-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-line-dark">
      <div className="mx-auto max-w-6xl px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-paper font-medium text-sm tracking-tight">
          MAK ENTERPRISES
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper/80 hover:text-paper transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <Link
            href={`/${otherLocale}`}
            className="text-sm text-paper/60 hover:text-paper transition-colors"
            aria-label={`Switch to ${otherLocale === "en" ? "English" : "Français"}`}
          >
            {locale === "en" ? "FR" : "EN"}
          </Link>
          <a
            href="#final-cta"
            className="hidden sm:inline-block border border-signal bg-signal text-paper text-sm px-4 py-2 hover:bg-transparent hover:text-signal transition-colors"
          >
            {cta}
          </a>
        </div>
      </div>
    </header>
  );
}
