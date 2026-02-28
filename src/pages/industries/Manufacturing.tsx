import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-manufacturing.jpg";

export default function IndustryManufacturing() {
  return (
    <IndustryPageLayout
      seoTitle="Advanced Manufacturing Compliance | ElevateQCS"
      seoDescription="Quality systems, operational infrastructure, and compliance advisory for advanced manufacturing firms scaling operations across ISO 9001 and customer requirements."
      seoUrl="https://elevateqcs.com/industries/advanced-manufacturing"
      seoKeywords={["manufacturing QMS", "ISO 9001", "quality systems", "manufacturing compliance", "operational infrastructure"]}
      heroImage={heroImage}
      heroTitle="Quality Systems That Scale With Operational Complexity"
      heroDescription="Advanced manufacturing firms operate in environments where quality failures cascade through production lines, supply chains, and customer relationships. We help manufacturers build operational infrastructure that maintains control as operations grow."
      overviewTitle="Operational Discipline at Scale"
      overviewParagraphs={[
        "Manufacturing organizations face a fundamental challenge: maintaining quality discipline while scaling production, expanding facilities, and diversifying product lines. Without structured quality management systems, growth creates operational risk.",
        "ISO 9001, IATF 16949, and industry-specific quality standards demand process control, documented procedures, and evidence of continuous improvement. Customers and regulators expect mature operational infrastructure.",
        "We work with advanced manufacturing firms to architect quality management systems that function in real production environments — designed for scalability, auditability, and internal ownership across multiple sites.",
      ]}
      challengesTitle="Quality Challenges in Manufacturing"
      challenges={[
        "ISO 9001 / IATF 16949 implementation and maturation",
        "Multi-site QMS harmonization and process standardization",
        "Supplier quality management and incoming inspection",
        "Nonconformance management, CAPA, and root cause analysis",
        "Production process control and statistical monitoring",
        "Customer quality requirements flow-down and management",
      ]}
      services={[
        { title: "Quality & Operational Infrastructure", description: "QMS frameworks for multi-site scalability, production control, and continuous improvement.", href: "/services/quality-operational-infrastructure" },
        { title: "Audit, Inspection & Certification Readiness", description: "ISO 9001, customer audit, and regulatory inspection preparation.", href: "/services/audit-certification-readiness" },
        { title: "Regulatory Documentation & Administrative Solutions", description: "SOPs, work instructions, and documentation supporting production and compliance.", href: "/services/regulatory-documentation" },
        { title: "Managed Compliance & Governance Services", description: "Ongoing quality monitoring, management review, and governance maintenance.", href: "/services/managed-compliance" },
        { title: "Governance & Strategy", description: "Quality management strategy aligned with business objectives and operational growth.", href: "/services/governance-strategy" },
      ]}
      impactTitle="Building Quality Infrastructure That Endures Growth"
      impactParagraphs={[
        "Manufacturing excellence is not achieved through documentation alone — it requires operational systems that function on the production floor, in the supply chain, and across management review cycles.",
        "Our advisory approach is designed to build quality infrastructure that teams own, use, and improve — not systems that exist only for audit purposes.",
      ]}
      relatedInsightSlugs={["iso9001-operational-maturity", "qms-scalability", "audit-failure-patterns", "documentation-best-practices"]}
    />
  );
}
