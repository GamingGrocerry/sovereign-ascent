import { SectorPageLayout } from "@/components/SectorPageLayout";
import sectorImage from "@/assets/sector-ai-deep-tech.jpg";

export default function SectorAIDeepTech() {
  return (
    <SectorPageLayout
      seoTitle="AI & Deep Tech Advisory | ElevateQCS"
      seoDescription="Governance, compliance, and operational advisory for AI and deep tech companies preparing for enterprise procurement and regulatory scrutiny."
      seoUrl="https://elevateqcs.com/sectors/ai-deep-tech"
      seoKeywords={["AI compliance advisory", "deep tech governance", "enterprise procurement readiness", "AI regulatory framework"]}
      heroImage={sectorImage}
      heroLabel="AI & Deep Tech"
      heroTitle="Governance Infrastructure for Technology Companies Entering Regulated Markets"
      heroDescription="AI and deep tech companies face a rapidly evolving regulatory landscape — from EU AI Act requirements to enterprise procurement security assessments. We help technology companies build the governance and compliance infrastructure required to scale into regulated and enterprise environments."
      overviewTitle="From Innovation to Institutional Readiness"
      overviewParagraphs={[
        "Technology companies building AI, machine learning, and deep tech solutions are increasingly facing compliance requirements that were historically reserved for more traditional industries. Enterprise customers demand SOC 2 readiness, data governance frameworks, and evidence of responsible AI practices.",
        "The EU AI Act, evolving data privacy regulations, and sector-specific requirements create a compliance landscape that cannot be addressed reactively. Organizations that build governance infrastructure early gain competitive advantage in enterprise sales cycles and regulatory approvals.",
        "We work with AI and deep tech companies to establish governance frameworks, compliance architectures, and documentation systems that satisfy enterprise procurement requirements and emerging regulatory standards.",
      ]}
      challengesTitle="Governance Challenges for AI & Deep Tech"
      challenges={[
        "EU AI Act compliance readiness and risk classification mapping",
        "Enterprise procurement security questionnaire preparation (SOC 2, ISO 27001)",
        "Data governance and privacy compliance frameworks (GDPR, CCPA)",
        "Responsible AI documentation and algorithmic accountability",
        "Vendor risk management and third-party assessment readiness",
        "Scaling governance systems alongside rapid product development",
      ]}
      services={[
        {
          title: "Governance & Strategy",
          description: "Design governance frameworks that support enterprise sales, regulatory readiness, and investor confidence.",
          href: "/services/governance-strategy",
        },
        {
          title: "Digital Governance & Technology Enablement",
          description: "Integrate GRC technologies and data governance systems aligned with regulatory and enterprise requirements.",
          href: "/services/digital-governance",
        },
        {
          title: "Risk, Regulatory & Compliance",
          description: "Map emerging regulatory landscapes including EU AI Act, data privacy, and sector-specific requirements.",
          href: "/services/risk-regulatory-compliance",
        },
        {
          title: "Audit, Inspection & Certification Readiness",
          description: "Prepare for SOC 2 assessments, ISO 27001 certification, and enterprise vendor audits.",
          href: "/services/audit-certification-readiness",
        },
        {
          title: "Regulatory Documentation & Administrative Solutions",
          description: "Develop policies, procedures, and compliance documentation for enterprise and regulatory requirements.",
          href: "/services/regulatory-documentation",
        },
      ]}
    />
  );
}
