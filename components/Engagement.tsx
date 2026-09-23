export default function Engagement({
  eyebrow,
  steps,
  note,
}: {
  eyebrow: string;
  steps: string[];
  note: string;
}) {
  return (
    <section className="section-pad bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="eyebrow mb-8">{eyebrow}</p>

        <div className="flex flex-wrap gap-0 border border-line mb-8">
          {steps.map((step, i) => (
            <div
              key={step}
              className={`flex-1 min-w-[130px] text-center py-6 px-3 text-sm md:text-base text-ink ${
                i !== steps.length - 1 ? "border-r border-line" : ""
              }`}
            >
              {step}
            </div>
          ))}
        </div>

        <p className="text-sm text-structure max-w-line">{note}</p>
      </div>
    </section>
  );
}
