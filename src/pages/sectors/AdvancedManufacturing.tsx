import { SectorPageLayout } from "@/components/SectorPageLayout";
import sectorImage from "@/assets/sector-advanced-manufacturing.jpg";

export default function SectorAdvancedManufacturing() {
  return (
    <SectorPageLayout
      seoTitle="Advanced Manufacturing Advisory | ElevateQCS"
      seoDescription="Quality systems, operational infrastructure, and compliance advisory for advanced manufacturing firms scaling operations."
      seoUrl="https://elevateqcs.com/sectors/advanced-manufacturing"
      seoKeywords={["manufacturing QMS", "ISO 9001 implementation", "quality systems scaling", "manufacturing compliance advisory"]}
      heroImage={sectorImage}
      heroLabel="Advanced Manufacturing"
      heroTitle="Quality Systems That Scale With Operational Complexity"
      heroDescription="Advanced manufacturing firms operate in environments where quality failures cascade through production lines, supply chains, and customer relationships. We help manufacturers build quality management systems and operational infrastructure that maintain control as operations grow."
      overviewTitle="Operational Discipline at Scale"
      overviewParagraphs={[
        "Manufacturing organizations face a fundamental challenge: maintaining quality discipline while scaling production, expanding facilities, and diversifying product lines. Without structured quality management systems, growth creates operational risk.",
        "ISO 9001, IATF 16949, and industry-specific quality standards demand process control, documented procedures, and evidence of continuous improvement. Customers and regulators expect mature operational infrastructure — not just compliant products, but compliant systems.",
        "We work with advanced manufacturing firms to architect quality management systems that function in real production environments — designed for scalability, auditability, and internal ownership across multiple sites and product lines.",
      ]}
      challengesTitle="Quality Challenges in Advanced Manufacturing"
      challenges={[
        "ISO 9001 / IATF 16949 quality management system implementation and maturation",
        "Multi-site QMS harmonization and process standardization",
        "Supplier quality management and incoming inspection programs",
        "Nonconformance management, CAPA, and root cause analysis systems",
        "Production process control and statistical process monitoring",
        "Customer quality requirements flow-down and management",
      ]}
      services={[
        {
          title: "Quality & Operational Infrastructure",
          description: "Architect QMS frameworks designed for multi-site scalability, production control, and continuous improvement.",
          href: "/services/quality-operational-infrastructure",
        },
        {
          title: "Audit, Inspection & Certification Readiness",
          description: "Prepare for ISO 9001, customer audits, and regulatory inspections with structured evidence and corrective action.",
          href: "/services/audit-certification-readiness",
        },
        {
          title: "Regulatory Documentation & Administrative Solutions",
          description: "Develop SOPs, work instructions, and documentation systems that support production and compliance requirements.",
          href: "/services/regulatory-documentation",
        },
        {
          title: "Managed Compliance & Governance Services",
          description: "Ongoing quality monitoring, management review support, and governance maintenance for manufacturing environments.",
          href: "/services/managed-compliance",
        },
        {
          title: "Governance & Strategy",
          description: "Align quality management strategy with business objectives and operational growth targets.",
          href: "/services/governance-strategy",
        },
      ]}
    />
  );
}
