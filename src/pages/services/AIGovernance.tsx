import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-ai-governance.jpg";

export default function AIGovernance() {
  return (
    <ServicePageLayout
      seo={{
        title: "AI Compliance Advisory | ElevateQCS",
        description: "Help your AI systems meet emerging regulations like the EU AI Act, with documentation, risk assessments, and governance frameworks. Practical AI compliance for non-tech and tech organizations.",
        url: "https://elevateqcs.com/services/ai-governance",
        keywords: ["AI compliance advisory", "EU AI Act compliance", "AI governance", "AI audit readiness", "responsible AI", "AI risk management", "AI compliance framework", "ISO 42001"],
      }}
      hero={{
        label: "AI Compliance Advisory",
        headline: "Practical AI Governance for Regulated Organizations",
        description: "We help organizations meet emerging AI regulations — the EU AI Act, NIST AI RMF, and ISO/IEC 42001 — with documentation, risk assessments, and governance frameworks that work in practice. Whether you build AI systems or just use them, we structure the compliance you need.",
        image: heroImg,
      }}
      credibility={{
        title: "Quality Management Principles Applied to AI Systems",
        paragraphs: [
          "The EU AI Act is now in force. Organizations deploying AI systems face regulatory scrutiny that most compliance teams aren't yet prepared for.",
          "The challenge is usually not technical. Most AI governance failures are documentation failures. Organizations cannot demonstrate how models were trained, how decisions are made, or how bias is monitored.",
          "Our AI compliance practice applies proven quality management principles to AI systems — creating the documentation, oversight structures, and monitoring processes that regulators expect.",
          "This works for both federal environments deploying AI within DFARS and CMMC frameworks and commercial firms navigating EU AI Act classification and ISO/IEC 42001 certification.",
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
          title: "AI Quality Management System",
          items: [
            "AI-specific QMS design for model lifecycle management",
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
            "Escalation protocols for AI decision failures",
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
            "Defense and national security AI compliance frameworks",
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
        title: "Our Team Brings Practical AI Governance Experience",
        paragraphs: [
          "Our AI governance team combines quality management expertise with practical understanding of how AI systems are built, deployed, and regulated. We build the operational frameworks that make AI systems auditable.",
          "We ensure AI governance integrates with your existing quality and compliance systems — not as a parallel bureaucracy, but as a natural extension of your current management system.",
          "Our work is vendor-neutral. We don't recommend specific AI tools or platforms. We structure the governance that ensures whatever technology you deploy meets regulatory and contractual requirements.",
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
