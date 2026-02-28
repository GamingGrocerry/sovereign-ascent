import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-supply-chain.jpg";

export default function SupplyChainHumanRights() {
  return (
    <ServicePageLayout
      seo={{
        title: "Supply Chain, Human Rights & Due Diligence | ElevateQCS",
        description: "We structure human rights programs, supply chain due diligence frameworks, and ethical labor compliance systems aligned with FAR 52.222-50, EU CS3D, and international standards.",
        url: "https://elevateqcs.com/services/supply-chain-human-rights",
        keywords: ["CTIP compliance", "supply chain due diligence", "human rights", "CS3D", "FAR 52.222-50", "ethical labor"],
      }}
      hero={{
        label: "Supply Chain, Human Rights & Due Diligence",
        headline: "Due Diligence That Protects Operations and Upholds Standards",
        description: "We structure human rights programs, supply chain due diligence frameworks, and ethical labor compliance systems aligned with FAR 52.222-50, EU CS3D, and international standards — because accountability across the supply chain is a condition of institutional integrity.",
        image: heroImg,
      }}
      credibility={{
        title: "Accountability Across Every Tier of the Supply Chain",
        paragraphs: [
          "Human rights compliance is no longer a peripheral concern for organizations operating in federal contracting, international trade, or EU-regulated markets. Enforcement frameworks have expanded, penalties have intensified, and supply chain due diligence has become a material operational obligation.",
          "Our practice in this area combines regulatory depth with practical implementation experience — helping organizations build systems that satisfy both the technical requirements of compliance and the institutional expectation of meaningful due diligence.",
          "We do not treat human rights compliance as a documentation exercise. We build programs that function across tiers, geographies, and operational contexts — designed for the scrutiny they will inevitably face.",
        ],
      }}
      capabilities={[
        {
          title: "CTIP Program Development",
          items: [
            "FAR 52.222-50 full compliance plan development",
            "Anti-trafficking awareness training programs",
            "Subcontractor flow-down and monitoring mechanisms",
            "Incident reporting and remediation protocols",
          ],
        },
        {
          title: "EU CS3D & International Due Diligence",
          items: [
            "Corporate Sustainability Due Diligence Directive readiness assessments",
            "Human rights impact assessment frameworks",
            "Stakeholder engagement and grievance mechanism design",
            "Cross-jurisdictional due diligence harmonization",
          ],
        },
        {
          title: "Supply Chain Risk & Monitoring",
          items: [
            "Supplier risk tiering and assessment methodologies",
            "Ongoing monitoring and corrective action frameworks",
            "Supply chain mapping and visibility programs",
            "Ethical sourcing policy development and integration",
          ],
        },
      ]}
      people={{
        title: "Specialists at the Intersection of Compliance and Accountability",
        paragraphs: [
          "Our team brings experience across federal contracting environments, international regulatory frameworks, and organizations with complex, multi-tier supply chains. We understand that human rights due diligence is simultaneously a regulatory obligation, an operational challenge, and an institutional responsibility.",
          "We approach every engagement with the seriousness that this subject demands — combining regulatory precision with practical program design that organizations can implement, maintain, and defend under audit.",
          "Our commitment extends beyond compliance to meaningful accountability — helping organizations build programs that reflect genuine institutional values.",
        ],
      }}
      relatedInsightSlugs={[
        "ctip-cs3d-compliance",
        "ctip-enforcement-trends",
        "supply-chain-compliance",
        "multi-jurisdictional-compliance",
        "cost-of-non-compliance",
      ]}
    />
  );
}
