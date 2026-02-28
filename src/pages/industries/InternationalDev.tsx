import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-international-dev.jpg";

export default function IndustryInternationalDev() {
  return (
    <IndustryPageLayout
      seoTitle="International Development & Overseas Contracting | ElevateQCS"
      seoDescription="Governance, CTIP compliance, and regulatory advisory for organizations with overseas operations and international development contracts."
      seoUrl="https://elevateqcs.com/industries/international-development"
      seoKeywords={["international development compliance", "overseas contracting", "CTIP program", "FAR 52.222-50", "human rights due diligence"]}
      heroImage={heroImage}
      heroTitle="Governance and Compliance for International Operations"
      heroDescription="Organizations operating internationally — particularly those with federal development contracts, overseas workforce operations, or supply chains in high-risk regions — face complex regulatory obligations including CTIP, human rights due diligence, and multi-jurisdictional compliance requirements."
      overviewTitle="Navigating International Regulatory Complexity"
      overviewParagraphs={[
        "International development contractors and overseas operations face regulatory environments that span U.S. federal requirements, host country regulations, and international standards. CTIP program obligations under FAR 52.222-50, human rights due diligence requirements, and anti-corruption compliance demand structured governance across geographically dispersed operations.",
        "The stakes are significant: CTIP violations can result in contract termination, debarment, and criminal prosecution. Organizations with overseas workforces, subcontractors, or supply chains in regions with elevated trafficking risks must demonstrate systematic compliance — not just policy statements.",
        "We help international organizations build governance infrastructure that satisfies federal requirements, supports overseas operations, and demonstrates systematic due diligence across complex multi-jurisdictional environments.",
      ]}
      challengesTitle="Compliance Obligations in International Operations"
      challenges={[
        "CTIP program development and implementation under FAR 52.222-50",
        "Human rights due diligence across international supply chains",
        "Multi-jurisdictional regulatory compliance and reporting",
        "Anti-corruption and Foreign Corrupt Practices Act obligations",
        "Overseas workforce management and labor compliance",
        "Subcontractor oversight in high-risk operational environments",
      ]}
      services={[
        { title: "Supply Chain, Human Rights & Due Diligence", description: "CTIP programs, human rights due diligence, and supply chain compliance aligned with FAR 52.222-50 and CS3D.", href: "/services/supply-chain-human-rights" },
        { title: "Risk, Regulatory & Compliance", description: "Multi-jurisdictional regulatory mapping and compliance architecture for international operations.", href: "/services/risk-regulatory-compliance" },
        { title: "Federal & Public Sector Advisory", description: "Federal acquisition compliance for international development contractors.", href: "/services/federal-public-sector" },
        { title: "Governance & Strategy", description: "Governance frameworks supporting international operations and multi-jurisdictional oversight.", href: "/services/governance-strategy" },
        { title: "Managed Compliance & Governance Services", description: "Ongoing compliance monitoring for sustained international program performance.", href: "/services/managed-compliance" },
      ]}
      impactTitle="Building Accountability in High-Risk Operating Environments"
      impactParagraphs={[
        "International operations carry elevated compliance risks that demand systematic governance — not reactive responses to incidents. Organizations that build structured compliance infrastructure protect their contracts, their people, and their reputation.",
        "Our advisory approach is designed to help organizations operating internationally build governance systems that function across cultures, jurisdictions, and operational contexts — ensuring compliance wherever they operate.",
      ]}
      relatedInsightSlugs={["ctip-cs3d-compliance", "ctip-enforcement-trends", "multi-jurisdictional-compliance", "supply-chain-compliance"]}
    />
  );
}
