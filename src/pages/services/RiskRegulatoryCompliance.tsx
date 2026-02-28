import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-risk-regulatory.jpg";

export default function RiskRegulatoryCompliance() {
  return (
    <ServicePageLayout
      seo={{
        title: "Risk, Regulatory & Compliance | ElevateQCS",
        description: "We map regulatory landscapes, quantify compliance risk, and build structured control environments that transform regulatory exposure into defensible operational discipline.",
        url: "https://elevateqcs.com/services/risk-regulatory-compliance",
        keywords: ["regulatory compliance", "risk management", "compliance risk", "control environment", "regulatory mapping"],
      }}
      hero={{
        label: "Risk, Regulatory & Compliance",
        headline: "Compliance Systems That Strengthen Enterprise Resilience",
        description: "We map regulatory landscapes, quantify compliance risk, and build structured control environments that transform regulatory exposure into defensible operational discipline — across jurisdictions, industries, and contract types.",
        image: heroImg,
      }}
      credibility={{
        title: "Regulatory Depth That Translates Into Operational Clarity",
        paragraphs: [
          "Regulatory environments are not static. Requirements shift, enforcement priorities evolve, and the cost of non-compliance compounds faster than most organizations anticipate. The firms that thrive are those with control environments designed for adaptability — not just current conformance.",
          "Our regulatory and compliance practice brings analytical precision to the challenge of building systems that remain defensible across audit cycles, regulatory changes, and organizational growth. We do not offer compliance checklists. We build control architectures.",
          "Every engagement is grounded in the principle that compliance must be operationally integrated — not bolted on as an administrative function.",
        ],
      }}
      capabilities={[
        {
          title: "Regulatory Mapping & Gap Analysis",
          items: [
            "Multi-jurisdictional regulatory obligation inventories",
            "FAR/DFARS clause applicability assessments",
            "Gap-to-compliance analysis with prioritized remediation plans",
            "Regulatory change monitoring and impact assessment frameworks",
          ],
        },
        {
          title: "Risk Quantification & Control Design",
          items: [
            "Enterprise risk register development and maintenance",
            "Control effectiveness testing and remediation",
            "Compliance risk scoring and materiality assessments",
            "Internal control framework design (aligned to COSO, ISO 31000)",
          ],
        },
        {
          title: "Compliance Program Architecture",
          items: [
            "Compliance program structure and policy frameworks",
            "Training program design and competency validation",
            "Corrective and preventive action (CAPA) system design",
            "Compliance reporting and board-level dashboards",
          ],
        },
      ]}
      people={{
        title: "Practitioners With Regulatory and Operational Fluency",
        paragraphs: [
          "Our compliance specialists combine regulatory knowledge with operational pragmatism. We understand that a control environment must be technically sound and practically executable — by the teams responsible for maintaining it daily.",
          "We bring experience across federal acquisition regulation, international quality standards, human rights compliance, and industry-specific regulatory frameworks. This breadth allows us to identify cross-domain risks that single-discipline firms often miss.",
          "Our approach is evidence-based, vendor-neutral, and built for the scrutiny that regulated environments demand.",
        ],
      }}
      relatedInsightSlugs={[
        "cost-of-non-compliance",
        "audit-failure-patterns",
        "multi-jurisdictional-compliance",
        "compliance-decision-framework",
        "supply-chain-compliance",
      ]}
    />
  );
}
