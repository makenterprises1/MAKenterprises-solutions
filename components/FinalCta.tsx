export default function FinalCta({
  title,
  sub,
  cta,
  email,
  calLink,
}: {
  title: string;
  sub: string;
  cta: string;
  email: string;
  calLink: string;
}) {
  return (
    <section id="final-cta" className="section-pad bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8 text-center">
        <h2 className="text-2xl md:text-5xl font-medium leading-snug max-w-3xl mx-auto mb-4">
          {title}
        </h2>
        <p className="text-base md:text-lg text-paper/70 max-w-xl mx-auto mb-10">{sub}</p>
        <div className="flex flex-col items-center gap-4">
          <a
            href={calLink}
            className="inline-block border border-signal bg-signal text-paper text-sm px-8 py-4 hover:bg-transparent hover:text-signal transition-colors"
          >
            {cta}
          </a>
          <a href={`mailto:${email}`} className="text-sm text-paper/60 hover:text-paper transition-colors">
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
