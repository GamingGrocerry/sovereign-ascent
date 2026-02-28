import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-governance-strategy.jpg";

export default function GovernanceStrategy() {
  return (
    <ServicePageLayout
      seo={{
        title: "Governance & Strategy | ElevateQCS",
        description: "We design governance frameworks that align organizational structure with regulatory obligations and strategic objectives for long-term operational integrity.",
        url: "https://elevateqcs.com/services/governance-strategy",
        keywords: ["governance framework", "corporate governance", "compliance strategy", "organizational structure", "board governance"],
      }}
      hero={{
        label: "Governance & Strategy",
        headline: "Governance Services That Go Beyond Structure",
        description: "We design governance frameworks that align organizational structure with regulatory obligations and strategic objectives — establishing the control architecture that sustains long-term operational integrity and institutional credibility.",
        image: heroImg,
      }}
      credibility={{
        title: "Meeting Expectations Is Only the Beginning",
        paragraphs: [
          "Governance is not a document — it is the structural logic that determines how an organization makes decisions, manages risk, and sustains accountability across every function. When governance is treated as an afterthought, operational gaps multiply quietly until they become material.",
          "Our governance advisory practice is built on experience across regulated industries, government contracting environments, and organizations scaling into complex markets. We bring institutional discipline to firms that understand governance is a competitive advantage — not a constraint.",
          "We measure ourselves by the resilience of the systems we help build and the clarity they provide to the leaders who depend on them.",
        ],
      }}
      capabilities={[
        {
          title: "Governance Framework Design",
          items: [
            "Board and executive governance structure development",
            "Policy hierarchy and organizational control architecture",
            "Decision-rights mapping and accountability frameworks",
            "Governance maturity assessments and gap analyses",
          ],
        },
        {
          title: "Strategic Compliance Planning",
          items: [
            "Regulatory landscape mapping and obligation inventories",
            "Multi-year compliance roadmap development",
            "Cross-functional governance integration strategies",
            "Stakeholder alignment and governance communication plans",
          ],
        },
        {
          title: "Organizational Resilience",
          items: [
            "Business continuity governance structures",
            "Enterprise risk governance and escalation protocols",
            "Change management governance for scaling organizations",
            "Performance monitoring and governance reporting frameworks",
          ],
        },
      ]}
      people={{
        title: "Specialists Who Understand Institutional Complexity",
        paragraphs: [
          "Our governance practice is led by professionals with deep experience in regulated environments, federal contracting programs, and organizations undergoing significant operational transformation. We understand the difference between governance on paper and governance that functions under pressure.",
          "We work at the intersection of regulatory obligation, operational reality, and strategic ambition — helping leadership teams build systems that serve all three without compromising any.",
          "Our commitment is to institutional integrity. Every engagement is approached with the rigour and discretion that governance work demands.",
        ],
      }}
      relatedInsightSlugs={[
        "cost-of-non-compliance",
        "compliance-decision-framework",
        "iso9001-operational-maturity",
        "qms-scalability",
      ]}
    />
  );
}
