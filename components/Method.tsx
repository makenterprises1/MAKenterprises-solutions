export default function Method({
  eyebrow,
  lead,
  leadAccent,
  steps,
  compare,
  note,
}: {
  eyebrow: string;
  lead: string;
  leadAccent: string;
  steps: string[];
  compare: { traditionalLabel: string; traditional: string; makLabel: string; mak: string };
  note: string;
}) {
  return (
    <section id="method" className="section-pad bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug max-w-2xl mb-2">{lead}</h2>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug text-signal max-w-2xl mb-12">
          {leadAccent}
        </h2>

        <div className="flex flex-wrap gap-0 border border-line mb-14">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`flex-1 min-w-[110px] text-center py-5 px-3 text-sm text-ink ${
                i !== steps.length - 1 ? "border-r border-line" : ""
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line">
          <div className="bg-paper p-6 md:p-8">
            <p className="text-xs text-structure mb-3">{compare.traditionalLabel}</p>
            <p className="text-sm text-structure leading-relaxed">{compare.traditional}</p>
          </div>
          <div className="bg-paper p-6 md:p-8 border-l-2 border-signal">
            <p className="text-xs text-signal mb-3">{compare.makLabel}</p>
            <p className="text-sm text-ink leading-relaxed">{compare.mak}</p>
          </div>
        </div>

        <p className="text-sm text-structure mt-8 max-w-line">{note}</p>
      </div>
    </section>
  );
}
