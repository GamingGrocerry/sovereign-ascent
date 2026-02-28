import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-federal-it.jpg";

export default function IndustryFederalIT() {
  return (
    <IndustryPageLayout
      seoTitle="Federal IT & Systems Integration | ElevateQCS"
      seoDescription="Compliance infrastructure and governance advisory for federal IT service providers and systems integrators navigating FedRAMP, FISMA, and CMMC requirements."
      seoUrl="https://elevateqcs.com/industries/federal-it"
      seoKeywords={["federal IT compliance", "FedRAMP advisory", "FISMA compliance", "systems integrator governance", "federal cybersecurity"]}
      heroImage={heroImage}
      heroTitle="Compliance Infrastructure for Federal Technology Providers"
      heroDescription="Federal IT service providers and systems integrators operate at the intersection of cybersecurity mandates, acquisition regulations, and agency-specific security requirements. We build the compliance architecture that enables sustained contract performance."
      overviewTitle="The Federal IT Compliance Environment"
      overviewParagraphs={[
        "Federal IT contractors face an evolving cybersecurity and compliance landscape. FedRAMP authorization, FISMA compliance, CMMC requirements, and agency-specific ATOs demand structured security programs, documented controls, and continuous monitoring capabilities.",
        "Systems integrators managing multi-agency environments must maintain compliance across overlapping frameworks while supporting rapid technology deployment cycles. The compliance burden grows with every new contract vehicle.",
        "We help federal IT organizations build governance and compliance infrastructure that satisfies multiple framework requirements through integrated control architectures — reducing duplication and strengthening audit defensibility.",
      ]}
      challengesTitle="Regulatory Demands in Federal IT"
      challenges={[
        "FedRAMP authorization and continuous monitoring requirements",
        "FISMA compliance and agency-specific ATO processes",
        "CMMC 2.0 cybersecurity maturity requirements",
        "Multi-framework control mapping and evidence management",
        "Incident response and breach notification obligations",
        "Supply chain risk management for technology vendors",
      ]}
      services={[
        { title: "Federal & Public Sector Advisory", description: "Navigate federal acquisition requirements and agency-specific compliance obligations for IT providers.", href: "/services/federal-public-sector" },
        { title: "Digital Governance & Technology Enablement", description: "Integrate GRC technologies and security monitoring aligned with federal cybersecurity requirements.", href: "/services/digital-governance" },
        { title: "Risk, Regulatory & Compliance", description: "Build structured control environments spanning FedRAMP, FISMA, and CMMC requirements.", href: "/services/risk-regulatory-compliance" },
        { title: "Audit, Inspection & Certification Readiness", description: "Prepare for 3PAO assessments, agency audits, and CMMC evaluations.", href: "/services/audit-certification-readiness" },
        { title: "Managed Compliance & Governance Services", description: "Ongoing continuous monitoring and compliance maintenance for federal authorization environments.", href: "/services/managed-compliance" },
      ]}
      impactTitle="Sustained Authorization in Complex Federal Environments"
      impactParagraphs={[
        "Federal IT compliance is not a one-time achievement — it is a sustained operational discipline. Organizations that treat authorization as a project rather than a system face re-authorization failures and contract performance risks.",
        "Our approach builds compliance infrastructure that supports continuous monitoring, evidence maintenance, and proactive control management across the full authorization lifecycle.",
      ]}
      relatedInsightSlugs={["govcon-operational-maturity", "alliant3-operational-readiness", "cost-of-non-compliance"]}
    />
  );
}
