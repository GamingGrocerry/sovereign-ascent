import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-infrastructure.jpg";

export default function IndustryInfrastructure() {
  return (
    <IndustryPageLayout
      seoTitle="Infrastructure & Engineering Compliance | ElevateQCS"
      seoDescription="Compliance and quality systems for infrastructure and engineering firms operating under government contracting, safety, and environmental requirements."
      seoUrl="https://elevateqcs.com/industries/infrastructure"
      seoKeywords={["infrastructure compliance", "engineering quality systems", "construction QMS", "government contracting engineering"]}
      heroImage={heroImage}
      heroTitle="Compliance Systems Built for Engineering Scale and Complexity"
      heroDescription="Infrastructure and engineering firms operate at the intersection of government regulations, safety requirements, environmental standards, and quality management obligations. We help organizations build compliance infrastructure that scales with project complexity."
      overviewTitle="Governance for Large-Scale Operations"
      overviewParagraphs={[
        "Infrastructure and engineering companies face regulatory environments that span federal acquisition requirements, occupational safety standards, environmental compliance, and industry-specific quality certifications. The complexity multiplies with every new project and jurisdiction.",
        "Government-contracted engineering firms must satisfy FAR/DFARS requirements, Davis-Bacon Act obligations, and agency-specific quality standards while maintaining operational efficiency across multiple project sites and teams.",
        "We help infrastructure and engineering organizations build governance and quality systems that manage regulatory complexity without creating bureaucratic drag — enabling compliance across projects, jurisdictions, and contract vehicles.",
      ]}
      challengesTitle="Regulatory Complexity in Infrastructure & Engineering"
      challenges={[
        "Multi-jurisdictional regulatory compliance across project sites",
        "Federal acquisition and government contracting requirements",
        "Occupational safety and environmental compliance obligations",
        "Quality management across distributed project teams",
        "Subcontractor oversight and compliance flow-down",
        "Documentation management across multi-year project lifecycles",
      ]}
      services={[
        { title: "Quality & Operational Infrastructure", description: "QMS frameworks for multi-site engineering operations and project-based compliance.", href: "/services/quality-operational-infrastructure" },
        { title: "Federal & Public Sector Advisory", description: "Government contracting compliance for engineering and infrastructure firms.", href: "/services/federal-public-sector" },
        { title: "Risk, Regulatory & Compliance", description: "Multi-jurisdictional regulatory mapping and compliance architecture.", href: "/services/risk-regulatory-compliance" },
        { title: "Regulatory Documentation & Administrative Solutions", description: "Documentation systems supporting project-based compliance and regulatory evidence.", href: "/services/regulatory-documentation" },
        { title: "Supply Chain, Human Rights & Due Diligence", description: "Subcontractor oversight and labor compliance for infrastructure projects.", href: "/services/supply-chain-human-rights" },
      ]}
      impactTitle="Operational Control Across Complex Project Environments"
      impactParagraphs={[
        "Infrastructure projects demand governance systems that function across multiple jurisdictions, regulatory frameworks, and organizational boundaries. The organizations that succeed are those with structured compliance infrastructure that scales with project complexity.",
        "Our approach builds governance foundations that support multi-project, multi-agency operations — enabling compliance without compromising operational efficiency.",
      ]}
      relatedInsightSlugs={["multi-jurisdictional-compliance", "qms-scalability", "supply-chain-compliance"]}
    />
  );
}
