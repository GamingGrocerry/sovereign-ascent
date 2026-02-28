import { SectorPageLayout } from "@/components/SectorPageLayout";
import sectorImage from "@/assets/sector-defense-aerospace.jpg";

export default function SectorDefenseAerospace() {
  return (
    <SectorPageLayout
      seoTitle="Defense & Aerospace Advisory | ElevateQCS"
      seoDescription="Compliance and quality advisory for defense and aerospace companies requiring CMMC, AS9100, ITAR, and DFARS compliance."
      seoUrl="https://elevateqcs.com/sectors/defense-aerospace"
      seoKeywords={["defense compliance advisory", "AS9100 QMS", "CMMC readiness", "ITAR compliance", "aerospace quality systems"]}
      heroImage={sectorImage}
      heroLabel="Defense & Aerospace"
      heroTitle="Quality and Compliance Systems for Defense-Grade Operations"
      heroDescription="Defense and aerospace companies face some of the most demanding compliance environments in industry — where certification failures, export control violations, and quality escapes carry severe contractual and legal consequences."
      overviewTitle="Operating at the Standard of National Security"
      overviewParagraphs={[
        "Defense and aerospace organizations must satisfy overlapping requirements from CMMC 2.0, AS9100, ITAR/EAR export controls, DFARS cybersecurity clauses, and customer-specific quality requirements — often across multiple programs and facilities.",
        "The margin for error is minimal. Government customers and prime contractors expect mature quality management systems, robust export control programs, and evidence of continuous improvement — not just compliance documents, but operational discipline.",
        "We help defense and aerospace companies build and maintain quality and compliance systems that withstand audit scrutiny, satisfy prime contractor expectations, and support sustainable program performance.",
      ]}
      challengesTitle="Compliance Demands in Defense & Aerospace"
      challenges={[
        "CMMC 2.0 Level 2 assessment preparation and SSP development",
        "AS9100 Rev D quality management system implementation and certification",
        "ITAR/EAR export control program development and compliance monitoring",
        "DFARS 252.204-7012 cybersecurity clause compliance and incident response",
        "Prime contractor quality requirements flow-down and management",
        "Counterfeit parts prevention and supply chain integrity programs",
      ]}
      services={[
        {
          title: "Quality & Operational Infrastructure",
          description: "Architect AS9100-aligned QMS frameworks designed for auditability, scalability, and operational ownership.",
          href: "/services/quality-operational-infrastructure",
        },
        {
          title: "Federal & Public Sector Advisory",
          description: "Navigate DFARS, CMMC, and DoD-specific requirements with structured compliance architecture.",
          href: "/services/federal-public-sector",
        },
        {
          title: "Audit, Inspection & Certification Readiness",
          description: "Prepare for AS9100, CMMC, and customer audits with organized evidence and strengthened control narratives.",
          href: "/services/audit-certification-readiness",
        },
        {
          title: "Risk, Regulatory & Compliance",
          description: "Build structured control environments for ITAR, EAR, and defense-specific regulatory requirements.",
          href: "/services/risk-regulatory-compliance",
        },
        {
          title: "Digital Governance & Technology Enablement",
          description: "Integrate GRC technologies aligned with CMMC and cybersecurity compliance requirements.",
          href: "/services/digital-governance",
        },
        {
          title: "Managed Compliance & Governance Services",
          description: "Ongoing compliance monitoring and governance support for sustained defense contract performance.",
          href: "/services/managed-compliance",
        },
      ]}
    />
  );
}
