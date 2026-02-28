import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-climate-energy.jpg";

export default function IndustryClimateEnergy() {
  return (
    <IndustryPageLayout
      seoTitle="Climate & Energy Compliance | ElevateQCS"
      seoDescription="Regulatory compliance, ESG governance, and quality systems for clean energy, climate technology, and energy infrastructure organizations."
      seoUrl="https://elevateqcs.com/industries/climate-energy"
      seoKeywords={["climate compliance", "energy regulatory", "ESG governance", "clean energy QMS", "sustainability compliance"]}
      heroImage={heroImage}
      heroTitle="Regulatory Infrastructure for Climate and Energy Organizations"
      heroDescription="Climate technology and energy infrastructure companies operate in rapidly evolving regulatory environments. ESG reporting requirements, government incentive compliance, and environmental standards demand structured governance that keeps pace with both regulatory change and operational growth."
      overviewTitle="Governance for the Energy Transition"
      overviewParagraphs={[
        "The clean energy and climate technology sector faces a convergence of regulatory pressures: ESG reporting requirements, government incentive compliance (IRA, DOE programs), environmental permitting, and industry-specific quality standards. Organizations that cannot demonstrate structured governance face funding delays and market access barriers.",
        "As climate technology companies scale from development to deployment, the governance requirements intensify. Investors demand ESG reporting. Government programs require compliance documentation. Customers require quality certifications. The organizations that succeed are those that build compliance infrastructure before the pressure arrives.",
        "We help climate and energy organizations build governance and quality systems that satisfy regulatory requirements, support government program compliance, and demonstrate institutional maturity to investors and customers.",
      ]}
      challengesTitle="Regulatory Pressures in Climate & Energy"
      challenges={[
        "ESG reporting and sustainability disclosure requirements",
        "Government incentive program compliance (IRA, DOE)",
        "Environmental permitting and regulatory approvals",
        "Quality management for energy infrastructure deployment",
        "Supply chain due diligence for critical minerals and components",
        "Investor governance and institutional reporting expectations",
      ]}
      services={[
        { title: "Governance & Strategy", description: "ESG governance frameworks aligned with investor expectations and regulatory requirements.", href: "/services/governance-strategy" },
        { title: "Risk, Regulatory & Compliance", description: "Regulatory landscape mapping for energy-specific compliance requirements.", href: "/services/risk-regulatory-compliance" },
        { title: "Supply Chain, Human Rights & Due Diligence", description: "Supply chain due diligence for critical materials and components.", href: "/services/supply-chain-human-rights" },
        { title: "Quality & Operational Infrastructure", description: "Quality systems for energy infrastructure manufacturing and deployment.", href: "/services/quality-operational-infrastructure" },
        { title: "Regulatory Documentation & Administrative Solutions", description: "Documentation supporting government program compliance and regulatory submissions.", href: "/services/regulatory-documentation" },
      ]}
      impactTitle="Building Governance for a Regulated Energy Future"
      impactParagraphs={[
        "The energy transition will be governed by regulatory frameworks that are still evolving. Organizations that build governance infrastructure now will be positioned to adapt as requirements mature — rather than scrambling to comply after the fact.",
        "Our approach helps climate and energy organizations establish the institutional foundation required for sustained regulatory compliance, investor confidence, and operational growth.",
      ]}
      relatedInsightSlugs={["ctip-cs3d-compliance", "supply-chain-compliance", "compliance-decision-framework"]}
    />
  );
}
