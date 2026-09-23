interface SignatureBlock {
  title: string;
  sub: string;
  distinction: string;
  body: string;
  flow: string[];
}

function FlowRow({ flow }: { flow: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-6">
      {flow.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="text-xs md:text-sm text-ink border border-line px-3 py-2 whitespace-nowrap">
            {step}
          </span>
          {i !== flow.length - 1 && <span className="text-muted text-xs">→</span>}
        </div>
      ))}
    </div>
  );
}

export default function Signature({
  eyebrow,
  expertiseSignal,
  capitalReadiness,
}: {
  eyebrow: string;
  expertiseSignal: SignatureBlock;
  capitalReadiness: SignatureBlock;
}) {
  return (
    <section className="section-pad bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 className="eyebrow mb-12">{eyebrow}</h2>

        <div className="border border-line p-8 md:p-10 mb-8">
          <h3 className="text-2xl font-medium mb-2">{expertiseSignal.title}</h3>
          <p className="text-base text-structure mb-6">{expertiseSignal.sub}</p>
          <p className="text-sm md:text-base text-signal font-medium mb-4 max-w-line">
            {expertiseSignal.distinction}
          </p>
          <p className="text-sm text-structure leading-relaxed max-w-line mb-2">
            {expertiseSignal.body}
          </p>
          <FlowRow flow={expertiseSignal.flow} />
        </div>

        <div className="border border-line p-8 md:p-10">
          <h3 className="text-2xl font-medium mb-2">{capitalReadiness.title}</h3>
          <p className="text-base text-structure mb-6">{capitalReadiness.sub}</p>
          <p className="text-sm md:text-base text-signal font-medium mb-4 max-w-line">
            {capitalReadiness.distinction}
          </p>
          <p className="text-sm text-structure leading-relaxed max-w-line mb-2">
            {capitalReadiness.body}
          </p>
          <FlowRow flow={capitalReadiness.flow} />
        </div>
      </div>
    </section>
  );
}
