import { getContent, locales, Locale } from "@/lib/content";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Thesis from "@/components/Thesis";
import Method from "@/components/Method";
import Solutions from "@/components/Solutions";
import Diagnostics from "@/components/Diagnostics";
import Signature from "@/components/Signature";
import Evidence from "@/components/Evidence";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import Engagement from "@/components/Engagement";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const diagnosticLabels = {
  en: { gap: "Gap", implication: "Business implication", opportunity: "Opportunity" },
  fr: { gap: "Écart", implication: "Implication commerciale", opportunity: "Opportunité" },
};

export default function LocalePage({ params }: { params: { locale: Locale } }) {
  const t = getContent(params.locale);
  const labels = diagnosticLabels[params.locale];

  return (
    <main>
      <Nav locale={params.locale} items={t.nav.items} cta={t.nav.cta} />
      <Hero {...t.hero} />
      <Problem {...t.problem} />
      <Thesis {...t.thesis} />
      <Method {...t.method} />
      <Solutions {...t.solutions} />
      <Diagnostics {...t.diagnostics} labels={labels} />
      <Signature
        eyebrow={t.signature.eyebrow}
        expertiseSignal={t.signature.expertiseSignal}
        capitalReadiness={t.signature.capitalReadiness}
      />
      <Evidence {...t.evidence} founder={t.founder} />
      <WhoThisIsFor {...t.who} />
      <Engagement {...t.engagement} />
      <FinalCta {...t.finalCta} />
      <Footer positioning={t.footer.positioning} />
    </main>
  );
}
