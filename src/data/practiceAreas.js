import {
  Scale,
  Building2,
  Search,
  FileText,
  Factory,
  Leaf,
  Receipt,
  Zap,
  Landmark,
  Rocket,
  Heart,
  Briefcase,
} from "lucide-react";

const practiceAreas = [
  {
    id: "litigation-arbitration",
    title: "Litigation & Arbitration",
    icon: Scale,
    shortDescription:
      "Representing clients before India's highest courts and tribunals.",
    description:
      "Magnaperitus maintains an active litigation and arbitration practice across High Courts, the National Green Tribunal, the National Company Law Tribunal, Arbitration Tribunals, Consumer Courts, and District Courts. Our litigators bring meticulous preparation and sharp advocacy to every matter, from complex commercial disputes to constitutional challenges.",
  },
  {
    id: "corporate-commercial",
    title: "Corporate & Commercial Law",
    icon: Building2,
    shortDescription:
      "Deal structuring, negotiations, drafting, and strategic advisory.",
    description:
      "Our corporate practice advises businesses at every stage — from incorporation and governance to complex transactions and restructuring. We provide strategic counsel on deal structuring, joint ventures, mergers, shareholder agreements, and commercial negotiations, ensuring our clients' business objectives are legally sound and commercially viable.",
  },
  {
    id: "due-diligence",
    title: "Due Diligence & Investment Advisory",
    icon: Search,
    shortDescription:
      "Project finance and comprehensive investment due diligence.",
    description:
      "We conduct rigorous legal due diligence for investors, lenders, and businesses evaluating potential transactions. Our team examines corporate records, regulatory compliance, litigation history, and contractual obligations to provide clients with a clear-eyed assessment of risks and opportunities in any proposed investment or acquisition.",
  },
  {
    id: "tender-contract",
    title: "Tender Management & Contract Law",
    icon: FileText,
    shortDescription:
      "Tender negotiations, contract drafting, and lifecycle management.",
    description:
      "Magnaperitus brings deep expertise to the public procurement and contract space. We advise on tender preparation, bid evaluation disputes, contract drafting and negotiation, and the full lifecycle of contractual relationships — helping clients secure, execute, and protect their commercial engagements.",
  },
  {
    id: "industrial-recovery",
    title: "Industrial Disputes & Recovery",
    icon: Factory,
    shortDescription:
      "Labour disputes, debt recovery, and enforcement proceedings.",
    description:
      "Our practice covers the full spectrum of industrial and labour law — from employment disputes and workmen's compensation to debt recovery and enforcement proceedings. We represent employers, financial institutions, and creditors in securing their rights while navigating India's complex regulatory landscape.",
  },
  {
    id: "environment-law",
    title: "Environment Law & Compliance",
    icon: Leaf,
    shortDescription:
      "Regulatory compliance, NGT representation, and environmental advisory.",
    description:
      "With active practice before the National Green Tribunal and environmental regulatory bodies, Magnaperitus provides comprehensive environmental legal services. We assist businesses in obtaining and maintaining environmental clearances, defending against regulatory actions, and building compliance frameworks that align with India's evolving environmental standards.",
  },
  {
    id: "taxation",
    title: "Taxation",
    icon: Receipt,
    shortDescription:
      "Income Tax Appellate Authority and Commercial Tax Appellate Board matters.",
    description:
      "Our tax practice represents clients before the Income Tax Appellate Authority, Commercial Tax Appellate Board, and other revenue forums. We advise on tax planning, dispute resolution, assessment proceedings, and appellate matters — bringing both technical precision and strategic thinking to every engagement.",
  },
  {
    id: "energy-regulatory",
    title: "Energy & Regulatory",
    icon: Zap,
    shortDescription:
      "Electricity Regulatory Commissions and infrastructure disputes.",
    description:
      "Magnaperitus has developed a niche practice in energy law, representing clients before Electricity Regulatory Commissions and in infrastructure-related disputes. Our team advises power generators, distributors, and consumers on tariff matters, regulatory compliance, power purchase agreements, and dispute resolution.",
  },
  {
    id: "policy-government",
    title: "Policy Negotiations & Government Advisory",
    icon: Landmark,
    shortDescription:
      "Engagement with government and semi-government undertakings.",
    description:
      "We bring deep understanding of government processes to our advisory practice, assisting clients in policy engagement, regulatory negotiations, and interactions with government and semi-government bodies. Our team helps businesses navigate the intersection of law and policy to advance their strategic objectives.",
  },
  {
    id: "startup-msme",
    title: "Start-Up & MSME Consultancy",
    icon: Rocket,
    shortDescription:
      "End-to-end legal handholding for new enterprises and small businesses.",
    description:
      "Magnaperitus is committed to the growth of Central India's entrepreneurial ecosystem. We provide start-ups and MSMEs with comprehensive legal support — from incorporation and compliance to government subsidies, e-governance facilitation, and ease of doing business advisory. Our goal is to remove legal barriers and empower young businesses to scale.",
  },
  {
    id: "family-law",
    title: "Matrimonial & Family Law",
    icon: Heart,
    shortDescription:
      "Dedicated counsellors and lawyers for family disputes and mediation.",
    description:
      "Our Family Law Centre provides sensitive, comprehensive representation in matrimonial and family matters — including divorce, separation, custody, maintenance, and domestic disputes. We pair legal advocacy with counselling support, ensuring clients receive both the legal strategy and emotional guidance they need during difficult times.",
  },
  {
    id: "company-law-nclt",
    title: "Company Law & NCLT",
    icon: Briefcase,
    shortDescription:
      "National Company Law Tribunal matters, insolvency, and restructuring.",
    description:
      "We represent clients in proceedings before the National Company Law Tribunal, handling matters related to corporate insolvency, restructuring, oppression and mismanagement, winding up, and scheme of arrangements. Our practitioners bring both legal rigour and commercial awareness to these high-stakes proceedings.",
  },
];

export default practiceAreas;
