import { EvidenceRow, FounderBlock } from "@/lib/content";

export default function Evidence({
  eyebrow,
  title,
  sub,
  rows,
  disclaimer,
  founder,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  rows: EvidenceRow[];
  disclaimer: string;
  founder: FounderBlock;
}) {
  return (
    <section id="evidence" className="section-pad bg-paper">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="border-b border-line pb-6 mb-2">
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h2 className="text-2xl md:text-4xl font-medium mb-2">{title}</h2>
          <p className="text-sm text-structure">{sub}</p>
        </div>

        <div>
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`py-5 ${i !== rows.length - 1 ? "border-b border-line" : ""}`}
            >
              {/* Mobile: stacked layout — value+label on one line, context below. Fixes prior 2-col/3-child grid mismatch. */}
              <div className="md:hidden">
                <div className="flex items-baseline gap-4">
                  <span className={`text-xl font-medium ${i === 0 ? "text-signal" : "text-ink"}`}>
                    {row.value}
                  </span>
                  <span className="text-sm text-ink">{row.label}</span>
                </div>
                <p className="text-xs text-structure leading-relaxed mt-2">{row.context}</p>
                {row.sourceUrl && (
                  <a
                    href={row.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-signal underline underline-offset-2 mt-2 inline-block"
                  >
                    {row.sourceLabel}
                  </a>
                )}
              </div>

              {/* Desktop: three-column ledger row */}
              <div className="hidden md:grid md:grid-cols-[80px_260px_1fr] md:gap-6 md:items-baseline">
                <span className={`text-2xl font-medium ${i === 0 ? "text-signal" : "text-ink"}`}>
                  {row.value}
                </span>
                <span className="text-sm text-ink">{row.label}</span>
                <div className="max-w-line">
                  <p className="text-sm text-structure leading-relaxed">{row.context}</p>
                  {row.sourceUrl && (
                    <a
                      href={row.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-signal underline underline-offset-2 mt-1 inline-block"
                    >
                      {row.sourceLabel}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-structure border-t border-line pt-4 mt-4 max-w-line">
          {disclaimer}
        </p>

        <div className="mt-10 border-t border-line pt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sm text-ink font-medium">{founder.name}</span>
          <span className="text-xs text-structure">{founder.role}</span>
          <a
            href={founder.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-signal underline underline-offset-2"
          >
            {founder.linkedinLabel}
          </a>
          <p className="text-xs text-structure w-full mt-1 max-w-line">{founder.note}</p>
        </div>
      </div>
    </section>
  );
}
