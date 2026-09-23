export default function Problem({
  eyebrow,
  title,
  titleAccent,
  body,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  body: string;
}) {
  return (
    <section className="section-pad bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4">
          <p className="eyebrow mb-4">{eyebrow}</p>
        </div>
        <div className="md:col-span-8">
          <h2 className="text-2xl md:text-4xl font-medium leading-snug mb-3 max-w-xl">
            {title}
          </h2>
          <h2 className="text-2xl md:text-4xl font-medium leading-snug text-signal mb-8 max-w-xl">
            {titleAccent}
          </h2>
          <p className="text-base text-structure leading-relaxed max-w-line">{body}</p>
        </div>
      </div>
    </section>
  );
}
