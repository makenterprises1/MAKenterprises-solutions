export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];

export interface EvidenceRow {
  value: string;
  label: string;
  context: string;
  sourceLabel?: string;
  sourceUrl?: string;
}

export interface FounderBlock {
  name: string;
  role: string;
  note: string;
  linkedinLabel: string;
  linkedinUrl: string;
}

export interface DiagnosticPattern {
  number: string;
  title: string;
  gap: string;
  implication: string;
  opportunity: string;
}

export interface SolutionLayer {
  number: string;
  title: string;
}

export const content = {
  en: {
    meta: {
      title: "MAK Enterprises — Solution Architecture for Organizations",
      description:
        "MAK Enterprises architects the systems that turn organizational value into market value: diagnosing where value is trapped and building the architecture that makes it visible, legible and commercially actionable.",
    },
    nav: {
      items: [
        { label: "Method", href: "#method" },
        { label: "Solutions", href: "#solutions" },
        { label: "Diagnostics", href: "#diagnostics" },
        { label: "Evidence", href: "#evidence" },
        { label: "About", href: "#about" },
      ],
      cta: "Book a Strategic Conversation",
    },
    hero: {
      eyebrow: "MAK Enterprises",
      title:
        "Solution Architecture for Organizations With More Value Inside Than the Market Can See.",
      sub:
        "We diagnose where organizational value is trapped — across expertise, products, brand, knowledge, relationships and data — and architect the systems that convert that value into market visibility, authority, commercial opportunity and capital readiness.",
      ctaPrimary: "Book a Strategic Conversation",
      ctaSecondary: "Explore the Diagnostic Method",
    },
    problem: {
      eyebrow: "The problem",
      title: "Your organization may not have a value problem.",
      titleAccent: "It may have a translation problem.",
      body:
        "People. Expertise. Products. Knowledge. Relationships. Data. Brand. Founder experience. These already exist inside your organization. The question isn't whether the value is there. It's whether the market can see it, understand it, trust it — and act on it.",
    },
    thesis: {
      eyebrow: "The MAK thesis",
      title: "Business has become a visibility and legibility market.",
      body:
        "Being good at what you do is no longer enough. The market needs to understand who you are, what you actually offer, who you serve, why you're credible — and why partners, customers and, where relevant, investors should engage. A company can be excellent and still be economically invisible.",
      anchor: "Value does not become visible by itself. It needs architecture.",
      distinction: {
        left: "Internal value",
        right: "Market value",
        note: "One does not become the other without architecture.",
      },
    },
    method: {
      eyebrow: "How MAK thinks",
      lead: "We don't begin by asking what service you need.",
      leadAccent: "We begin by identifying where value is trapped.",
      steps: ["Diagnose", "Map", "Architect", "Activate", "Measure", "Optimize"],
      compare: {
        traditionalLabel: "Traditional model",
        traditional: "Client asks for a service → agency executes.",
        makLabel: "MAK model",
        mak: "Organization → Diagnostic → Gap → Opportunity → Solution Architecture → Activation → Measurement.",
      },
      note: "The diagnostic isn't a sales step. It's how we understand an organization before proposing anything.",
    },
    solutions: {
      eyebrow: "Solutions architecture",
      title: "MAK does not sell a fixed menu of services.",
      titleAccent: "We assemble the architecture the organization actually needs.",
      note: "The diagnostic determines which architecture layers are relevant.",
      layers: [
        { number: "01", title: "Digital Presence Architecture" },
        { number: "02", title: "Brand & Founder Authority Architecture" },
        { number: "03", title: "Customer & Solution Architecture" },
        { number: "04", title: "Organizational Expertise Activation" },
        { number: "05", title: "Authority & Content Systems" },
        { number: "06", title: "MAK Expertise Signal™" },
        { number: "07", title: "Commercial Growth Architecture" },
        { number: "08", title: "Market Expansion Architecture" },
        { number: "09", title: "Capital Readiness Architecture™" },
      ] as SolutionLayer[],
    },
    diagnostics: {
      eyebrow: "Diagnostic patterns",
      title: "Three examples of the kinds of structural gaps a MAK diagnostic can uncover.",
      note: "Observed across real organizational reviews, presented without identifying detail.",
      patterns: [
        {
          number: "01",
          title: "Founder Authority Architecture™",
          gap: "The founder holds significant expertise, but limited market visibility.",
          implication:
            "Potential authority and trust are not fully translated into market visibility.",
          opportunity: "Founder Authority Architecture™",
        },
        {
          number: "02",
          title: "Customer Segment & Solution Architecture",
          gap: "A large product or service portfolio with unclear segmentation.",
          implication:
            "Customers may struggle to identify which solution fits their specific need.",
          opportunity: "Customer Segment & Solution Architecture",
        },
        {
          number: "03",
          title: "MAK Expertise Signal™",
          gap: "Employees hold real expertise, but no system converts it into visible content.",
          implication: "Institutional knowledge stays internal, disconnected from market authority.",
          opportunity: "MAK Expertise Signal™",
        },
      ] as DiagnosticPattern[],
    },
    signature: {
      eyebrow: "Signature solutions",
      expertiseSignal: {
        title: "MAK Expertise Signal™",
        sub: "Turning Organizational Expertise Into Market Signal.",
        distinction:
          "Employee advocacy distributes content. MAK Expertise Signal™ activates organizational expertise.",
        body:
          "Traditional advocacy asks employees to share what marketing already wrote. MAK Expertise Signal™ starts from the opposite direction: it captures what people actually know, structures it, and turns it into content that carries their own voice.",
        flow: [
          "Internal Expertise",
          "Expertise Capture",
          "Content DNA",
          "Content Creation",
          "Brand Governance",
          "Advocacy Activation",
          "Amplification",
          "Analytics",
          "Commercial Outcome",
        ],
      },
      capitalReadiness: {
        title: "Capital Readiness Architecture™",
        sub: "We prepare the company for the capital conversation.",
        distinction:
          "Fundraising does not begin when you start contacting investors. It begins with how the company is made legible to capital.",
        body:
          "The issue is rarely just finding investors. It's usually that the business hasn't yet been translated into something investors can evaluate, trust and act on. We do not raise capital on your behalf. We architect the readiness that precedes it.",
        flow: ["Business", "Evidence", "Narrative", "Investor Legibility", "Fundraising Readiness", "Capital Conversation"],
      },
    },
    evidence: {
      eyebrow: "Evidence",
      title: "Built, not theorized.",
      sub: "Evidence of execution, not promises of outcomes.",
      rows: [
        {
          value: "34K+",
          label: "Professional LinkedIn network",
          context: "Founder-built professional audience and market visibility.",
        },
        {
          value: "95K+",
          label: "Professional community",
          context: "Founder-built professional community and organic audience development.",
        },
        {
          value: "1.7M+",
          label: "Monthly reach",
          context: "Reported organic reach within one community asset, not a MAK client outcome.",
        },
        {
          value: "5+",
          label: "Years — Menlo Park / Silicon Valley",
          context: "Direct execution across venture, technology and startup ecosystems.",
        },
        {
          value: "VC",
          label: "Ecosystem exposure",
          context: "Experience across founders, startups and investors via Network VC.",
        },
        {
          value: "87",
          label: "Network VC — investments tracked",
          context:
            "Network VC's own investment activity, tracked by PitchBook. Not MAK Enterprises' portfolio, and not Mohamed Amine Khiari's personal investment record.",
          sourceLabel: "View PitchBook profile",
          sourceUrl: "https://pitchbook.com/profiles/investor/432915-40",
        },
        {
          value: "16",
          label: "Network VC — exits tracked",
          context:
            "Network VC's own exit activity, tracked by PitchBook. Not MAK Enterprises' portfolio, and not Mohamed Amine Khiari's personal exit record.",
          sourceLabel: "View PitchBook profile",
          sourceUrl: "https://pitchbook.com/profiles/investor/432915-40",
        },
      ] as EvidenceRow[],
      disclaimer:
        "These reflect the founder's own execution history and ecosystem exposure — not a guarantee of client outcomes. The Network VC figures above are Network VC's institutional record, independently tracked by PitchBook, cited here as contextual evidence of ecosystem exposure only.",
    },
    founder: {
      name: "Mohamed Amine Khiari",
      role: "Founder & CEO, MAK Enterprises",
      note:
        "Brings direct venture ecosystem experience through his work with Network VC, alongside the execution history and community-building evidence shown above.",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/makofficialtm/",
    } as FounderBlock,
    who: {
      eyebrow: "Who this is for",
      title: "MAK becomes relevant when:",
      conditions: [
        "The organization has grown faster than its internal architecture.",
        "Expertise exists but remains trapped inside individuals or departments.",
        "A broad product or service portfolio has outgrown its segmentation.",
        "Founder credibility has not yet translated into institutional authority.",
        "The organization is entering a new market.",
        "The organization is preparing for a capital conversation.",
        "Multiple teams operate with knowledge that isn't connected into one coherent market signal.",
      ],
    },
    engagement: {
      eyebrow: "Engagement model",
      steps: ["Diagnostic", "Strategic Architecture", "Implementation", "Measurement", "Optimization"],
      note: "Implementation depends on the architecture identified. This is not \"buy consulting, receive deliverables.\" It's diagnose, architect, activate what is required.",
    },
    finalCta: {
      title: "Your organization may already contain more value than the market can currently see.",
      sub: "Let's identify where it is trapped — and what architecture could unlock it.",
      cta: "Book a Strategic Conversation",
      email: "contact.makofficial@gmail.com",
      calLink: "https://cal.com/ofc-access",
    },
    footer: {
      positioning: "MAK Enterprises architects the systems that turn organizational value into market value.",
    },
  },
  fr: {
    meta: {
      title: "MAK Enterprises — Architecture de solutions pour organisations",
      description:
        "MAK Enterprises architecture les systèmes qui transforment la valeur organisationnelle en valeur de marché : diagnostiquer où la valeur reste piégée et construire l'architecture qui la rend visible, lisible et commercialement actionnable.",
    },
    nav: {
      items: [
        { label: "Méthode", href: "#method" },
        { label: "Solutions", href: "#solutions" },
        { label: "Diagnostics", href: "#diagnostics" },
        { label: "Preuves", href: "#evidence" },
        { label: "À propos", href: "#about" },
      ],
      cta: "Démarrer une conversation stratégique",
    },
    hero: {
      eyebrow: "MAK Enterprises",
      title: "L'architecture de solutions pour les organisations qui valent plus que ce que le marché en perçoit.",
      sub:
        "Nous diagnostiquons où la valeur organisationnelle reste piégée — dans l'expertise, les produits, la marque, le savoir, les relations et les données — et nous architecturons les systèmes qui la convertissent en visibilité de marché, en autorité, en opportunités commerciales et en préparation à la levée de fonds.",
      ctaPrimary: "Démarrer une conversation stratégique",
      ctaSecondary: "Découvrir la méthode de diagnostic",
    },
    problem: {
      eyebrow: "Le problème",
      title: "Votre organisation n'a probablement pas un problème de valeur.",
      titleAccent: "Elle a un problème de traduction.",
      body:
        "Personnes. Expertise. Produits. Savoir. Relations. Données. Marque. Expérience du fondateur. Tout cela existe déjà dans votre organisation. La question n'est pas de savoir si cette valeur existe. C'est de savoir si le marché peut la voir, la comprendre, lui faire confiance — et agir en conséquence.",
    },
    thesis: {
      eyebrow: "La thèse MAK",
      title: "Le business est devenu un marché de visibilité et de lisibilité.",
      body:
        "Être excellent dans ce que l'on fait ne suffit plus. Le marché doit comprendre qui vous êtes, ce que vous proposez réellement, qui vous servez, pourquoi vous êtes crédible — et pourquoi partenaires, clients et, le cas échéant, investisseurs devraient s'engager. Une entreprise peut être excellente et rester économiquement invisible.",
      anchor: "La valeur ne devient pas visible par elle-même. Elle a besoin d'architecture.",
      distinction: {
        left: "Valeur interne",
        right: "Valeur de marché",
        note: "L'une ne devient l'autre qu'à travers une architecture.",
      },
    },
    method: {
      eyebrow: "Comment MAK pense",
      lead: "Nous ne commençons pas par vous demander de quel service vous avez besoin.",
      leadAccent: "Nous commençons par identifier où la valeur reste piégée.",
      steps: ["Diagnostiquer", "Cartographier", "Architecturer", "Activer", "Mesurer", "Optimiser"],
      compare: {
        traditionalLabel: "Modèle traditionnel",
        traditional: "Le client demande un service → l'agence exécute.",
        makLabel: "Modèle MAK",
        mak: "Organisation → Diagnostic → Écart → Opportunité → Architecture de solution → Activation → Mesure.",
      },
      note: "Le diagnostic n'est pas une étape commerciale. C'est la façon dont nous comprenons une organisation avant de proposer quoi que ce soit.",
    },
    solutions: {
      eyebrow: "Architecture de solutions",
      title: "MAK ne vend pas un menu fixe de services.",
      titleAccent: "Nous assemblons l'architecture dont l'organisation a réellement besoin.",
      note: "Le diagnostic détermine quelles couches d'architecture sont pertinentes.",
      layers: [
        { number: "01", title: "Architecture de présence digitale" },
        { number: "02", title: "Architecture d'autorité de marque et de fondateur" },
        { number: "03", title: "Architecture client et solution" },
        { number: "04", title: "Activation de l'expertise organisationnelle" },
        { number: "05", title: "Systèmes d'autorité et de contenu" },
        { number: "06", title: "MAK Expertise Signal™" },
        { number: "07", title: "Architecture de croissance commerciale" },
        { number: "08", title: "Architecture d'expansion de marché" },
        { number: "09", title: "Capital Readiness Architecture™" },
      ] as SolutionLayer[],
    },
    diagnostics: {
      eyebrow: "Schémas de diagnostic",
      title: "Trois exemples du type d'écarts structurels qu'un diagnostic MAK peut révéler.",
      note: "Observés au fil de revues organisationnelles réelles, présentés sans élément identifiant.",
      patterns: [
        {
          number: "01",
          title: "Founder Authority Architecture™",
          gap: "Le fondateur détient une expertise significative, mais une visibilité de marché limitée.",
          implication:
            "L'autorité et la confiance potentielles ne se traduisent pas pleinement en visibilité de marché.",
          opportunity: "Founder Authority Architecture™",
        },
        {
          number: "02",
          title: "Customer Segment & Solution Architecture",
          gap: "Un portefeuille de produits ou services étendu, avec une segmentation peu claire.",
          implication:
            "Les clients peuvent avoir du mal à identifier quelle solution répond à leur besoin spécifique.",
          opportunity: "Customer Segment & Solution Architecture",
        },
        {
          number: "03",
          title: "MAK Expertise Signal™",
          gap: "Les collaborateurs détiennent une expertise réelle, mais aucun système ne la convertit en contenu visible.",
          implication: "Le savoir institutionnel reste interne, déconnecté de l'autorité de marché.",
          opportunity: "MAK Expertise Signal™",
        },
      ] as DiagnosticPattern[],
    },
    signature: {
      eyebrow: "Solutions signature",
      expertiseSignal: {
        title: "MAK Expertise Signal™",
        sub: "Transformer l'expertise organisationnelle en signal de marché.",
        distinction:
          "L'employee advocacy distribue du contenu. MAK Expertise Signal™ active l'expertise organisationnelle.",
        body:
          "L'advocacy traditionnel demande aux collaborateurs de relayer ce que le marketing a déjà écrit. MAK Expertise Signal™ part de la direction inverse : il capture ce que les personnes savent réellement, le structure, et le transforme en contenu qui porte leur propre voix.",
        flow: [
          "Expertise interne",
          "Capture de l'expertise",
          "ADN de contenu",
          "Création de contenu",
          "Gouvernance de marque",
          "Activation de l'advocacy",
          "Amplification",
          "Analytique",
          "Résultat commercial",
        ],
      },
      capitalReadiness: {
        title: "Capital Readiness Architecture™",
        sub: "Nous préparons l'entreprise à la conversation avec le capital.",
        distinction:
          "La levée de fonds ne commence pas lorsque vous contactez des investisseurs. Elle commence par la façon dont l'entreprise devient lisible pour le capital.",
        body:
          "Le problème est rarement de trouver des investisseurs. Il s'agit le plus souvent d'une entreprise qui n'a pas encore été traduite en une forme que les investisseurs peuvent évaluer, comprendre et sur laquelle agir. Nous ne levons pas de fonds à votre place. Nous architecturons la préparation qui précède la levée.",
        flow: ["Entreprise", "Preuves", "Narratif", "Lisibilité investisseur", "Préparation à la levée", "Conversation avec le capital"],
      },
    },
    evidence: {
      eyebrow: "Preuves",
      title: "Construit, pas théorisé.",
      sub: "Des preuves d'exécution, pas des promesses de résultats.",
      rows: [
        {
          value: "34K+",
          label: "Réseau professionnel sur LinkedIn",
          context: "Audience professionnelle et visibilité de marché construites par le fondateur.",
        },
        {
          value: "95K+",
          label: "Communauté professionnelle",
          context: "Communauté professionnelle et développement d'audience organique construits par le fondateur.",
        },
        {
          value: "1,7M+",
          label: "Portée mensuelle",
          context: "Portée organique rapportée au sein d'un actif communautaire, non un résultat client MAK.",
        },
        {
          value: "5+",
          label: "Années — Menlo Park / Silicon Valley",
          context: "Exécution directe au sein des écosystèmes venture, technologiques et startups.",
        },
        {
          value: "VC",
          label: "Exposition à l'écosystème",
          context: "Expérience auprès de fondateurs, startups et investisseurs via Network VC.",
        },
        {
          value: "87",
          label: "Network VC — investissements suivis",
          context:
            "L'activité d'investissement propre à Network VC, suivie par PitchBook. Ni le portefeuille de MAK Enterprises, ni le parcours d'investissement personnel de Mohamed Amine Khiari.",
          sourceLabel: "Voir le profil PitchBook",
          sourceUrl: "https://pitchbook.com/profiles/investor/432915-40",
        },
        {
          value: "16",
          label: "Network VC — sorties suivies",
          context:
            "L'activité de sortie propre à Network VC, suivie par PitchBook. Ni le portefeuille de MAK Enterprises, ni le parcours de sortie personnel de Mohamed Amine Khiari.",
          sourceLabel: "Voir le profil PitchBook",
          sourceUrl: "https://pitchbook.com/profiles/investor/432915-40",
        },
      ] as EvidenceRow[],
      disclaimer:
        "Ces éléments reflètent le parcours d'exécution et l'exposition écosystémique du fondateur — ils ne constituent pas une garantie de résultats pour les clients. Les chiffres Network VC ci-dessus constituent le bilan institutionnel propre à Network VC, suivi de façon indépendante par PitchBook, cités ici uniquement comme preuve contextuelle d'exposition à l'écosystème.",
    },
    founder: {
      name: "Mohamed Amine Khiari",
      role: "Fondateur & CEO, MAK Enterprises",
      note:
        "Apporte une expérience directe de l'écosystème venture à travers son activité avec Network VC, aux côtés du parcours d'exécution et des preuves de construction communautaire présentées ci-dessus.",
      linkedinLabel: "LinkedIn",
      linkedinUrl: "https://www.linkedin.com/in/makofficialtm/",
    } as FounderBlock,
    who: {
      eyebrow: "Pour qui MAK est pertinent",
      title: "MAK devient pertinent lorsque :",
      conditions: [
        "L'organisation a grandi plus vite que son architecture interne.",
        "Une expertise existe mais reste piégée dans des individus ou des départements.",
        "Un portefeuille de produits ou services étendu a dépassé sa segmentation.",
        "La crédibilité du fondateur ne s'est pas encore traduite en autorité institutionnelle.",
        "L'organisation entre sur un nouveau marché.",
        "L'organisation se prépare à une conversation avec le capital.",
        "Plusieurs équipes détiennent un savoir non connecté en un signal de marché cohérent.",
      ],
    },
    engagement: {
      eyebrow: "Modèle d'engagement",
      steps: ["Diagnostic", "Architecture stratégique", "Mise en œuvre", "Mesure", "Optimisation"],
      note: "La mise en œuvre dépend de l'architecture identifiée. Ce n'est pas \"acheter du conseil, recevoir des livrables.\" C'est diagnostiquer, architecturer, activer ce qui est requis.",
    },
    finalCta: {
      title: "Votre organisation contient peut-être déjà plus de valeur que ce que le marché en perçoit actuellement.",
      sub: "Identifions où elle est piégée — et quelle architecture pourrait la révéler.",
      cta: "Démarrer une conversation stratégique",
      email: "contact.makofficial@gmail.com",
      calLink: "https://cal.com/ofc-access",
    },
    footer: {
      positioning: "MAK Enterprises architecture les systèmes qui transforment la valeur organisationnelle en valeur de marché.",
    },
  },
};

export function getContent(locale: Locale) {
  return content[locale];
}
