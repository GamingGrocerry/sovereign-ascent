import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-cybersecurity.jpg";

export default function IndustryCybersecurity() {
  return (
    <IndustryPageLayout
      seoTitle="Cybersecurity Compliance | ElevateQCS"
      seoDescription="Governance and compliance frameworks for cybersecurity firms navigating CMMC, FedRAMP, SOC 2, and federal acquisition security requirements."
      seoUrl="https://elevateqcs.com/industries/cybersecurity"
      seoKeywords={["cybersecurity compliance", "CMMC advisory", "FedRAMP readiness", "SOC 2 certification", "cybersecurity governance"]}
      heroImage={heroImage}
      heroTitle="Governance Infrastructure for Cybersecurity Organizations"
      heroDescription="Cybersecurity companies face a paradox: they protect others from compliance and security failures, yet must demonstrate their own governance maturity to win contracts and satisfy regulatory requirements. We help cybersecurity firms build the compliance infrastructure that matches their technical capabilities."
      overviewTitle="Demonstrating What You Deliver"
      overviewParagraphs={[
        "Cybersecurity firms competing for federal contracts, enterprise clients, and regulated market opportunities must satisfy the same compliance frameworks they help others achieve. CMMC, FedRAMP, SOC 2, and ISO 27001 requirements demand documented governance, structured controls, and evidence of continuous monitoring.",
        "The market increasingly requires cybersecurity vendors to demonstrate not just technical capability, but institutional maturity — governance frameworks, risk management processes, and compliance infrastructure that satisfy procurement and regulatory requirements.",
        "We help cybersecurity companies build governance and compliance systems that complement their technical expertise — enabling them to compete in federal and enterprise markets with the institutional credibility their clients expect.",
      ]}
      challengesTitle="Compliance Demands for Cybersecurity Firms"
      challenges={[
        "CMMC certification for federal cybersecurity contract eligibility",
        "FedRAMP authorization for cloud security service offerings",
        "SOC 2 Type II certification for enterprise client requirements",
        "ISO 27001 information security management system implementation",
        "Federal acquisition security requirements and NIST framework alignment",
        "Third-party risk assessment and vendor qualification processes",
      ]}
      services={[
        { title: "Digital Governance & Technology Enablement", description: "GRC technology integration and security governance aligned with federal and enterprise requirements.", href: "/services/digital-governance" },
        { title: "Federal & Public Sector Advisory", description: "Federal acquisition compliance and CMMC readiness for cybersecurity contractors.", href: "/services/federal-public-sector" },
        { title: "Audit, Inspection & Certification Readiness", description: "SOC 2, ISO 27001, CMMC, and FedRAMP assessment preparation.", href: "/services/audit-certification-readiness" },
        { title: "Risk, Regulatory & Compliance", description: "Multi-framework control mapping and compliance architecture.", href: "/services/risk-regulatory-compliance" },
        { title: "Governance & Strategy", description: "Governance frameworks that demonstrate institutional maturity to clients and regulators.", href: "/services/governance-strategy" },
      ]}
      impactTitle="Institutional Credibility in a Trust-Dependent Market"
      impactParagraphs={[
        "In cybersecurity, trust is the product. Organizations that cannot demonstrate their own governance maturity face credibility gaps that no technical capability can overcome.",
        "Our advisory approach helps cybersecurity companies align their institutional presence with their technical expertise — building the governance infrastructure that enables federal and enterprise market success.",
      ]}
      relatedInsightSlugs={["govcon-operational-maturity", "alliant3-operational-readiness", "compliance-decision-framework"]}
    />
  );
}
