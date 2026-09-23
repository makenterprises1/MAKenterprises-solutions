export default function Thesis({
  eyebrow,
  title,
  body,
  anchor,
  distinction,
}: {
  eyebrow: string;
  title: string;
  body: string;
  anchor: string;
  distinction: { left: string; right: string; note: string };
}) {
  return (
    <section id="about" className="section-pad bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="eyebrow text-muted mb-4">{eyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug max-w-2xl mb-8">{title}</h2>
        <p className="text-base text-paper/70 leading-relaxed max-w-line mb-14">{body}</p>

        <div className="border border-line-dark p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
            <div className="text-lg md:text-xl font-medium text-paper border border-line-dark px-6 py-4 text-center">
              {distinction.left}
            </div>
            <div className="text-signal text-2xl leading-none">≠</div>
            <div className="text-lg md:text-xl font-medium text-paper border border-line-dark px-6 py-4 text-center">
              {distinction.right}
            </div>
          </div>
          <p className="text-center text-sm text-muted mb-6">{distinction.note}</p>
          <p className="text-center text-base md:text-lg text-paper font-medium max-w-md mx-auto">
            {anchor}
          </p>
        </div>
      </div>
    </section>
  );
}
