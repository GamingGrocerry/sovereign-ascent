import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-ai-governance.jpg";

export default function AIGovernance() {
  return (
    <ServicePageLayout
      seo={{
        title: "AI Governance & Algorithmic Quality | ElevateQCS",
        description: "We apply quality management discipline to AI systems — ensuring data pipelines, model outputs, and algorithmic decisions are audit-ready and compliant with the EU AI Act and emerging ethical standards.",
        url: "https://elevateqcs.com/services/ai-governance",
        keywords: ["AI governance advisory", "algorithmic quality", "EU AI Act compliance", "AI audit readiness", "algorithmic accountability", "responsible AI", "AI risk management", "model governance", "AI compliance framework"],
      }}
      hero={{
        label: "AI Governance & Algorithmic Quality",
        headline: "Quality Infrastructure for the Algorithmic Age",
        description: "We bring the same quality management discipline that governs physical operations to AI systems — ensuring data pipelines, model outputs, and algorithmic decisions are documented, auditable, and compliant with the EU AI Act, NIST AI RMF, and emerging regulatory frameworks. Whether you are a defense contractor deploying autonomous systems or a commercial firm scaling AI-driven decisions, we structure the governance that keeps your algorithms accountable.",
        image: heroImg,
      }}
      credibility={{
        title: "QMS Principles Applied to Algorithmic Systems",
        paragraphs: [
          "The EU AI Act is now in full force. Organizations deploying AI systems face the same regulatory scrutiny that manufacturers faced with ISO 9001 — except the consequences of non-compliance are accelerating faster than most compliance teams can respond.",
          "The challenge is not technical. Most AI governance failures are documentation failures. Organizations cannot demonstrate how models were trained, how decisions are made, or how bias is monitored. The 'black box' problem is not an engineering problem — it is a quality systems problem.",
          "Our AI Governance practice applies proven quality infrastructure principles to algorithmic systems. We treat AI models as controlled processes, data pipelines as supply chains, and model outputs as products requiring inspection and acceptance criteria.",
          "This approach works for both GovCon environments deploying AI within DFARS and CMMC frameworks and commercial firms navigating EU AI Act classification, NIST AI RMF alignment, and investor scrutiny of algorithmic risk exposure.",
        ],
      }}
      capabilities={[
        {
          title: "AI Risk Classification & Regulatory Mapping",
          items: [
            "EU AI Act risk classification assessment (unacceptable, high, limited, minimal)",
            "NIST AI Risk Management Framework (AI RMF) alignment and implementation",
            "Cross-jurisdictional regulatory mapping for AI deployment across US, EU, and UK markets",
            "Regulatory gap analysis against emerging state-level AI legislation",
          ],
        },
        {
          title: "Algorithmic Quality Management System",
          items: [
            "AI-specific QMS design treating models as controlled processes",
            "Data pipeline documentation and traceability architecture",
            "Model validation, verification, and acceptance criteria frameworks",
            "Continuous monitoring and drift detection governance protocols",
          ],
        },
        {
          title: "AI Audit Readiness & Documentation",
          items: [
            "Model cards, data sheets, and algorithmic impact assessments",
            "Training data provenance and bias documentation systems",
            "Decision logic transparency and explainability frameworks",
            "Pre-audit preparation for regulatory inspections and third-party assessments",
          ],
        },
        {
          title: "Human Oversight & Accountability Structures",
          items: [
            "Human-in-the-loop and human-on-the-loop governance design",
            "Escalation protocols for algorithmic decision failures",
            "Board-level AI governance committee frameworks",
            "Accountability chains from model deployment to organizational leadership",
          ],
        },
        {
          title: "Agentic AI & Autonomous Systems Governance",
          items: [
            "Governance frameworks for autonomous decision-making systems",
            "Safety and containment protocols for agentic AI deployments",
            "Interoperability governance for multi-agent system environments",
            "Defense and national security AI compliance frameworks (DoD AI Ethics Principles)",
          ],
        },
        {
          title: "AI Vendor & Supply Chain Governance",
          items: [
            "Third-party AI model and API compliance assessment",
            "Vendor risk evaluation for AI-as-a-Service dependencies",
            "Contractual AI governance requirements for subcontractors and partners",
            "Open-source model licensing and compliance verification",
          ],
        },
      ]}
      people={{
        title: "Quality Professionals Who Understand AI Systems",
        paragraphs: [
          "Our AI governance team combines deep quality management expertise with practical understanding of how AI systems are built, deployed, and regulated. We do not approach algorithmic governance as a theoretical exercise — we build the operational frameworks that make AI systems auditable.",
          "We understand that AI governance must integrate with existing quality, compliance, and risk management systems — not create parallel bureaucracies. Our frameworks are designed to extend your current QMS to cover algorithmic processes without disrupting operational tempo.",
          "Our work is vendor-neutral. We do not recommend specific AI tools or platforms. We structure the governance architecture that ensures whatever technology you deploy meets regulatory, contractual, and ethical requirements.",
        ],
      }}
      relatedInsightSlugs={[
        "agentic-ai-human-oversight",
        "esg-performance-metric",
        "compliance-decision-framework",
        "investor-ready-operations",
        "cost-of-non-compliance",
        "qms-scalability",
      ]}
    />
  );
}
