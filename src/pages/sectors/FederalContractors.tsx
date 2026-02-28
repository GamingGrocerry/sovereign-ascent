import { SectorPageLayout } from "@/components/SectorPageLayout";
import sectorImage from "@/assets/sector-federal-contractors.jpg";

export default function SectorFederalContractors() {
  return (
    <SectorPageLayout
      seoTitle="Federal Contractors Advisory | ElevateQCS"
      seoDescription="Governance, compliance, and operational advisory for federal contractors navigating FAR/DFARS, DCAA, DCMA, and agency-specific requirements."
      seoUrl="https://elevateqcs.com/sectors/federal-contractors"
      seoKeywords={["federal contractor compliance", "FAR DFARS advisory", "DCAA audit readiness", "government contracting QMS"]}
      heroImage={sectorImage}
      heroLabel="Federal Contractors"
      heroTitle="Compliance Infrastructure for Government Contracting"
      heroDescription="Federal contractors operate in one of the most prescriptive regulatory environments in the world. We help organizations build the governance, documentation, and operational infrastructure required to perform — and to prove performance — across the federal acquisition lifecycle."
      overviewTitle="Navigating the Federal Compliance Landscape"
      overviewParagraphs={[
        "Federal contracting demands more than technical capability. Contractors must demonstrate systemic compliance with FAR/DFARS clauses, agency-specific requirements, and an evolving set of cybersecurity, supply chain, and labor compliance obligations — often simultaneously.",
        "Without a structured governance foundation, organizations face audit findings, corrective action requests, contract performance risks, and reputational exposure. Our advisory services are designed to help contractors build the internal systems required to operate with institutional maturity.",
        "We work with prime contractors, subcontractors, and emerging small businesses to stabilize operations, structure documentation, and prepare for the scrutiny that comes with federal work.",
      ]}
      challengesTitle="Common Compliance Pressures in Federal Contracting"
      challenges={[
        "FAR/DFARS clause flow-down and compliance mapping across contract vehicles",
        "DCAA cost accounting system adequacy and pre-award audit preparation",
        "DCMA surveillance readiness and corrective action management",
        "CMMC 2.0 assessment preparation and evidence organization",
        "Subcontractor oversight and supply chain compliance obligations",
        "CTIP program development under FAR 52.222-50",
      ]}
      services={[
        {
          title: "Federal & Public Sector Advisory",
          description: "Stabilize operations and meet contractual compliance obligations across the federal acquisition lifecycle.",
          href: "/services/federal-public-sector",
        },
        {
          title: "Governance & Strategy",
          description: "Design governance frameworks that align organizational structure with regulatory and contractual obligations.",
          href: "/services/governance-strategy",
        },
        {
          title: "Risk, Regulatory & Compliance",
          description: "Map regulatory landscapes and build control environments that transform exposure into defensible discipline.",
          href: "/services/risk-regulatory-compliance",
        },
        {
          title: "Audit, Inspection & Certification Readiness",
          description: "Prepare for DCAA, DCMA, and third-party assessments with organized evidence and structured corrective action.",
          href: "/services/audit-certification-readiness",
        },
        {
          title: "Supply Chain, Human Rights & Due Diligence",
          description: "Structure CTIP programs and supply chain compliance aligned with FAR 52.222-50 requirements.",
          href: "/services/supply-chain-human-rights",
        },
        {
          title: "Regulatory Documentation & Administrative Solutions",
          description: "Develop documentation systems and SOPs that ensure regulatory evidence is organized and audit-ready.",
          href: "/services/regulatory-documentation",
        },
      ]}
    />
  );
}
