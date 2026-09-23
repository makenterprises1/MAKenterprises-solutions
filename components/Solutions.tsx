import { SolutionLayer } from "@/lib/content";

export default function Solutions({
  eyebrow,
  title,
  titleAccent,
  note,
  layers,
}: {
  eyebrow: string;
  title: string;
  titleAccent: string;
  note: string;
  layers: SolutionLayer[];
}) {
  return (
    <section id="solutions" className="section-pad bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="eyebrow text-muted mb-4">{eyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug max-w-2xl mb-2">{title}</h2>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug text-signal max-w-2xl mb-4">
          {titleAccent}
        </h2>
        <p className="text-sm text-muted mb-12">{note}</p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line-dark border border-line-dark">
          {layers.map((layer) => (
            <div key={layer.number} className="bg-ink p-6 md:p-7 min-h-[130px] flex flex-col justify-between">
              <span className="text-xs text-muted">{layer.number}</span>
              <span className="text-base text-paper leading-snug mt-6">{layer.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
