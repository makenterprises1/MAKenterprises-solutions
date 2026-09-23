export default function WhoThisIsFor({
  eyebrow,
  title,
  conditions,
}: {
  eyebrow: string;
  title: string;
  conditions: string[];
}) {
  return (
    <section className="section-pad bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="eyebrow text-muted mb-4">{eyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-medium mb-10 max-w-2xl">{title}</h2>

        <ul className="border-t border-line-dark">
          {conditions.map((condition) => (
            <li
              key={condition}
              className="border-b border-line-dark py-5 text-base md:text-lg text-paper/90 max-w-line"
            >
              {condition}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
