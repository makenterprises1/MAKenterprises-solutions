import { DiagnosticPattern } from "@/lib/content";

export default function Diagnostics({
  eyebrow,
  title,
  note,
  patterns,
  labels,
}: {
  eyebrow: string;
  title: string;
  note: string;
  patterns: DiagnosticPattern[];
  labels: { gap: string; implication: string; opportunity: string };
}) {
  return (
    <section id="diagnostics" className="section-pad bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="text-2xl md:text-4xl font-medium leading-snug max-w-2xl mb-3">{title}</h2>
        <p className="text-sm text-structure mb-12 max-w-line">{note}</p>

        <div className="grid md:grid-cols-3 gap-6">
          {patterns.map((pattern) => (
            <div key={pattern.number} className="border border-line p-6">
              <p className="text-xs text-structure mb-4">{pattern.number}</p>
              <div className="mb-5">
                <p className="text-xs text-structure mb-1">{labels.gap}</p>
                <p className="text-sm text-ink leading-relaxed">{pattern.gap}</p>
              </div>
              <div className="mb-5">
                <p className="text-xs text-structure mb-1">{labels.implication}</p>
                <p className="text-sm text-ink leading-relaxed">{pattern.implication}</p>
              </div>
              <div className="border-l-2 border-signal pl-3">
                <p className="text-xs text-signal mb-1">{labels.opportunity}</p>
                <p className="text-sm text-ink font-medium leading-relaxed">{pattern.opportunity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
