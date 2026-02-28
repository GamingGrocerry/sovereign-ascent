import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import industryDefenseHero from "@/assets/industry-defense-hero.jpg";

export default function IndustryDefense() {
  return (
    <IndustryPageLayout
      seoTitle="Defense & Aerospace Compliance | ElevateQCS"
      seoDescription="Governance, quality, and compliance advisory for defence contractors and aerospace manufacturers. FAR/DFARS, CMMC 2.0, AS9100, and ITAR compliance systems."
      seoUrl="https://elevateqcs.com/industries/defense"
      seoKeywords={["defense contractor compliance", "CMMC readiness", "AS9100 QMS", "FAR DFARS compliance", "ITAR export controls"]}
      heroImage={industryDefenseHero}
      heroTitle="Governance and Compliance for Mission-Critical Defense Environments"
      heroDescription="Defence and aerospace companies operate under overlapping regulatory obligations where compliance failures carry contractual, financial, and national security consequences. We build governance and quality systems that withstand sustained scrutiny."
      overviewTitle="The Defense Compliance Landscape"
      overviewParagraphs={[
        "FAR/DFARS clauses, CMMC 2.0 requirements, AS9100 certification expectations, and prime contractor quality flow-downs demand systems that function under scrutiny — not documentation that exists only for audit day.",
        "Defence contractors must demonstrate systemic compliance across multiple regulatory frameworks simultaneously. Without a structured governance foundation, organizations face audit findings, corrective action requests, and contract performance risks.",
        "We work with prime contractors, subcontractors, and emerging small businesses to stabilize operations, structure documentation, and build the operational infrastructure required to perform — and to prove performance — across the federal acquisition lifecycle.",
      ]}
      challengesTitle="Regulatory and Operational Pressures"
      challenges={[
        "FAR/DFARS clause flow-down and compliance mapping across contract vehicles",
        "CMMC 2.0 assessment preparation and SSP development",
        "AS9100 quality management system implementation and certification",
        "ITAR/EAR export control program development",
        "Prime contractor quality requirements and CPAR scrutiny",
        "Subcontractor oversight and supply chain compliance obligations",
      ]}
      services={[
        { title: "Federal & Public Sector Advisory", description: "Navigate FAR/DFARS, CMMC, and DoD-specific requirements with structured compliance architecture.", href: "/services/federal-public-sector" },
        { title: "Quality & Operational Infrastructure", description: "Architect AS9100-aligned QMS frameworks designed for auditability, scalability, and operational ownership.", href: "/services/quality-operational-infrastructure" },
        { title: "Audit, Inspection & Certification Readiness", description: "Prepare for DCAA, DCMA, AS9100, and CMMC assessments with organized evidence and corrective action.", href: "/services/audit-certification-readiness" },
        { title: "Risk, Regulatory & Compliance", description: "Build structured control environments for ITAR, EAR, and defense-specific regulatory requirements.", href: "/services/risk-regulatory-compliance" },
        { title: "Supply Chain, Human Rights & Due Diligence", description: "Structure CTIP programs and supply chain compliance aligned with FAR 52.222-50.", href: "/services/supply-chain-human-rights" },
        { title: "Managed Compliance & Governance Services", description: "Ongoing compliance monitoring and governance support for sustained defense contract performance.", href: "/services/managed-compliance" },
      ]}
      impactTitle="Building Operational Resilience in High-Accountability Environments"
      impactParagraphs={[
        "In defence and aerospace, operational resilience means governance systems that stabilize performance, reduce audit exposure, and support sustainable contract execution — not compliance theatre that collapses under scrutiny.",
        "Our advisory relationships are built on long-term trust, measurable impact, and a commitment to helping organizations build systems that endure beyond any single engagement.",
      ]}
      scenarioTitle="A Mid-Sized Aerospace Contractor Preparing for CMMC Level 2"
      scenarioText="An aerospace subcontractor with three active DoD programs faced a 12-month timeline to achieve CMMC Level 2 assessment readiness. Their existing documentation was fragmented across departments, with no centralized SSP and inconsistent control narratives. Through structured gap analysis, evidence organization, and a 90-day implementation sprint, the organization consolidated its compliance infrastructure, trained internal assessment coordinators, and established a continuous monitoring framework — achieving assessment readiness ahead of schedule."
      relatedInsightSlugs={["govcon-operational-maturity", "govcon-prime-expectations", "subcontractor-qms-failures", "alliant3-operational-readiness", "cost-of-non-compliance"]}
    />
  );
}
