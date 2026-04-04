import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-supply-chain.jpg";

export default function SupplyChainHumanRights() {
  return (
    <ServicePageLayout
      seo={{
        title: "Supply Chain Compliance & Due Diligence | ElevateQCS",
        description: "We help you build supply chain oversight programs, including ethical labor compliance and due diligence frameworks aligned with FAR 52.222-50, EU CS3D, and international standards.",
        url: "https://elevateqcs.com/services/supply-chain-human-rights",
        keywords: ["supply chain compliance", "supply chain due diligence", "human rights compliance", "CS3D", "FAR 52.222-50", "ethical labor", "CTIP compliance"],
      }}
      hero={{
        label: "Supply Chain Compliance & Due Diligence",
        headline: "Build Supply Chain Oversight That Works",
        description: "We help you build supply chain oversight programs, including ethical labor compliance and due diligence frameworks aligned with FAR 52.222-50, EU CS3D, and international standards.",
        image: heroImg,
      }}
      credibility={{
        title: "Accountability Across Every Tier of the Supply Chain",
        paragraphs: [
          "Human rights and supply chain compliance is no longer a peripheral concern. Enforcement frameworks have expanded, penalties have intensified, and supply chain due diligence has become a material operational obligation.",
          "Our practice combines regulatory depth with practical implementation experience — helping organizations build systems that satisfy both the technical requirements of compliance and the expectation of meaningful due diligence.",
          "We build programs that function across tiers, geographies, and operational contexts — designed for the scrutiny they will face.",
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
        title: "Our Team Brings Practical Supply Chain Experience",
        paragraphs: [
          "Our team brings experience across federal contracting environments, international regulatory frameworks, and organizations with complex, multi-tier supply chains.",
          "We approach every engagement with the seriousness that this subject demands — combining regulatory precision with practical program design that organizations can implement, maintain, and defend under audit.",
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
