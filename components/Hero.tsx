export default function Hero({
  eyebrow,
  title,
  sub,
  ctaPrimary,
  ctaSecondary,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <p className="hero-title eyebrow text-muted mb-6">{eyebrow}</p>
        <h1 className="hero-title text-4xl md:text-6xl font-medium leading-tight max-w-3xl mb-8">
          {title}
        </h1>
        <p className="hero-sub text-base md:text-lg text-paper/70 max-w-2xl leading-relaxed mb-10">
          {sub}
        </p>
        <div className="hero-cta flex flex-wrap gap-4">
          <a
            href="#final-cta"
            className="border border-signal bg-signal text-paper text-sm px-6 py-3 hover:bg-transparent hover:text-signal transition-colors"
          >
            {ctaPrimary}
          </a>
          <a
            href="#method"
            className="border border-paper/30 text-paper text-sm px-6 py-3 hover:border-paper transition-colors"
          >
            {ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
