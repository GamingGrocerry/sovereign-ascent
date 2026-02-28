import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-ai-tech.jpg";

export default function IndustryAIDeepTech() {
  return (
    <IndustryPageLayout
      seoTitle="AI & Deep Tech Compliance | ElevateQCS"
      seoDescription="Governance and compliance advisory for AI and deep tech companies preparing for enterprise procurement, EU AI Act, and regulatory scrutiny."
      seoUrl="https://elevateqcs.com/industries/ai-deep-tech"
      seoKeywords={["AI compliance", "EU AI Act", "deep tech governance", "enterprise procurement readiness", "AI regulatory framework"]}
      heroImage={heroImage}
      heroTitle="Compliance Systems for AI Operating in Regulated Markets"
      heroDescription="AI and deep tech companies face a rapidly evolving regulatory landscape. Enterprise customers demand governance maturity. Regulators demand accountability. We help technology companies build the compliance infrastructure required to scale into regulated environments."
      overviewTitle="From Innovation to Institutional Readiness"
      overviewParagraphs={[
        "Technology companies building AI, machine learning, and deep tech solutions face compliance requirements that were historically reserved for traditional industries. Enterprise customers demand SOC 2 readiness, data governance frameworks, and evidence of responsible AI practices.",
        "The EU AI Act, evolving data privacy regulations, and sector-specific requirements create a compliance landscape that cannot be addressed reactively. Organizations that build governance infrastructure early gain competitive advantage in enterprise sales and regulatory approvals.",
        "We help AI and deep tech companies establish governance frameworks, compliance architectures, and documentation systems that satisfy enterprise procurement requirements and emerging regulatory standards.",
      ]}
      challengesTitle="Governance Challenges for AI & Technology Companies"
      challenges={[
        "EU AI Act compliance readiness and risk classification mapping",
        "Enterprise procurement security questionnaires (SOC 2, ISO 27001)",
        "Data governance and privacy compliance (GDPR, CCPA)",
        "Responsible AI documentation and algorithmic accountability",
        "Vendor risk management and third-party assessment readiness",
        "Scaling governance systems alongside rapid product development",
      ]}
      services={[
        { title: "Governance & Strategy", description: "Governance frameworks supporting enterprise sales, regulatory readiness, and investor confidence.", href: "/services/governance-strategy" },
        { title: "Digital Governance & Technology Enablement", description: "GRC technologies and data governance aligned with regulatory and enterprise requirements.", href: "/services/digital-governance" },
        { title: "Risk, Regulatory & Compliance", description: "Emerging regulatory landscape mapping including EU AI Act and data privacy requirements.", href: "/services/risk-regulatory-compliance" },
        { title: "Audit, Inspection & Certification Readiness", description: "SOC 2 assessments, ISO 27001 certification, and enterprise vendor audits.", href: "/services/audit-certification-readiness" },
        { title: "Regulatory Documentation & Administrative Solutions", description: "Policies, procedures, and documentation for enterprise and regulatory requirements.", href: "/services/regulatory-documentation" },
      ]}
      impactTitle="Building Institutional Credibility in Emerging Technology Markets"
      impactParagraphs={[
        "Enterprise buyers and regulators are increasingly scrutinizing AI companies for governance maturity, data handling practices, and algorithmic accountability. Organizations without structured compliance infrastructure face longer sales cycles, regulatory delays, and competitive disadvantage.",
        "Our approach helps technology companies build the institutional credibility required to compete in regulated markets — without slowing innovation velocity.",
      ]}
      relatedInsightSlugs={["qms-early-stage", "startup-compliance-funding", "compliance-decision-framework"]}
    />
  );
}
