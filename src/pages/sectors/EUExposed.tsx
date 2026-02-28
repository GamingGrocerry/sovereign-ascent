import { SectorPageLayout } from "@/components/SectorPageLayout";
import sectorImage from "@/assets/sector-eu-exposed.jpg";

export default function SectorEUExposed() {
  return (
    <SectorPageLayout
      seoTitle="EU-Exposed Companies Advisory | ElevateQCS"
      seoDescription="Human rights due diligence, CS3D compliance, and supply chain governance advisory for companies with European Union regulatory exposure."
      seoUrl="https://elevateqcs.com/sectors/eu-exposed"
      seoKeywords={["CS3D compliance", "EU due diligence", "human rights supply chain", "CSDDD advisory", "EU regulatory compliance"]}
      heroImage={sectorImage}
      heroLabel="EU-Exposed Companies"
      heroTitle="Human Rights Due Diligence for European Regulatory Compliance"
      heroDescription="The EU Corporate Sustainability Due Diligence Directive (CS3D) creates binding obligations for companies operating within or connected to European markets. We help organizations build the governance, supply chain oversight, and reporting infrastructure required to meet these obligations."
      overviewTitle="Preparing for Mandatory Due Diligence"
      overviewParagraphs={[
        "CS3D represents a fundamental shift in corporate accountability — requiring companies to identify, prevent, mitigate, and account for adverse human rights and environmental impacts across their value chains. Non-compliance carries significant financial penalties and market access risks.",
        "For US-based companies with European customers, subsidiaries, or supply chain connections, CS3D obligations may apply regardless of headquarters location. The directive requires documented due diligence processes, stakeholder engagement, and public reporting.",
        "We work with companies across industries to structure human rights due diligence programs, supply chain mapping, and governance frameworks that satisfy CS3D requirements while integrating with existing compliance infrastructure.",
      ]}
      challengesTitle="Due Diligence Obligations Under CS3D"
      challenges={[
        "CS3D applicability assessment and regulatory scope mapping",
        "Human rights and environmental due diligence program design",
        "Supply chain mapping and adverse impact identification",
        "Stakeholder engagement and grievance mechanism development",
        "Public reporting and transparency requirements compliance",
        "Integration with existing CTIP, ESG, and governance frameworks",
      ]}
      services={[
        {
          title: "Supply Chain, Human Rights & Due Diligence",
          description: "Structure human rights programs and due diligence frameworks aligned with CS3D, FAR 52.222-50, and international standards.",
          href: "/services/supply-chain-human-rights",
        },
        {
          title: "Risk, Regulatory & Compliance",
          description: "Map CS3D regulatory requirements and build structured compliance programs for European market access.",
          href: "/services/risk-regulatory-compliance",
        },
        {
          title: "Governance & Strategy",
          description: "Establish governance frameworks that integrate due diligence obligations with corporate strategy.",
          href: "/services/governance-strategy",
        },
        {
          title: "Regulatory Documentation & Administrative Solutions",
          description: "Develop due diligence documentation, reporting templates, and administrative systems for CS3D compliance.",
          href: "/services/regulatory-documentation",
        },
        {
          title: "Managed Compliance & Governance Services",
          description: "Ongoing monitoring and governance support for sustained due diligence program operation.",
          href: "/services/managed-compliance",
        },
      ]}
    />
  );
}
