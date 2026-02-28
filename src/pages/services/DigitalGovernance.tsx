import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-digital-governance.jpg";

export default function DigitalGovernance() {
  return (
    <ServicePageLayout
      seo={{
        title: "Digital Governance & Technology Enablement | ElevateQCS",
        description: "We advise on the integration of GRC technologies, ensuring digital transformation efforts are aligned with regulatory requirements and operational controls.",
        url: "https://elevateqcs.com/services/digital-governance",
        keywords: ["digital governance", "GRC technology", "compliance technology", "digital transformation", "technology enablement"],
      }}
      hero={{
        label: "Digital Governance & Technology Enablement",
        headline: "Technology That Serves Governance — Not the Other Way Around",
        description: "We advise on the integration of governance, risk, and compliance technologies — ensuring digital transformation efforts are aligned with regulatory requirements, operational controls, and the institutional logic that must govern how technology is deployed.",
        image: heroImg,
      }}
      credibility={{
        title: "Digital Tools Without Governance Create Digital Risk",
        paragraphs: [
          "Technology adoption in compliance and governance functions has accelerated dramatically — but many organizations deploy tools without first establishing the governance frameworks that should govern their use. The result is fragmented data, inconsistent processes, and technology investments that add complexity rather than clarity.",
          "Our digital governance practice exists to bridge the gap between technology capability and governance discipline. We help organizations select, configure, and integrate compliance technologies within a coherent governance architecture — ensuring that digital tools amplify control rather than diffuse it.",
          "We are vendor-neutral. Our role is to advise on technology strategy and integration — not to sell software. Our recommendations are based entirely on operational requirements, regulatory obligations, and organizational readiness.",
        ],
      }}
      capabilities={[
        {
          title: "GRC Technology Advisory",
          items: [
            "GRC platform requirements analysis and vendor evaluation",
            "Technology roadmap development aligned with governance maturity",
            "Integration architecture for compliance and quality systems",
            "Data governance frameworks for regulatory information management",
          ],
        },
        {
          title: "Digital Process Design",
          items: [
            "Workflow automation for compliance and quality processes",
            "Electronic document management system (EDMS) strategy",
            "Digital audit trail design and evidence management",
            "Automated compliance monitoring and alerting frameworks",
          ],
        },
        {
          title: "Technology Governance & Change Management",
          items: [
            "Technology governance policies and access control frameworks",
            "Change management for digital compliance transformation",
            "User adoption and competency development programs",
            "Technology risk assessment and cybersecurity governance alignment",
          ],
        },
      ]}
      people={{
        title: "Governance-First Technologists",
        paragraphs: [
          "Our digital governance advisors combine compliance expertise with technology fluency. We understand both the governance principles that must govern technology adoption and the technical realities of implementation in complex organizational environments.",
          "We work with IT leadership, compliance functions, and operational teams to ensure that technology investments serve the governance objectives they are intended to support — not the other way around.",
          "Our approach ensures that digital transformation in compliance and governance functions is conducted with the same rigour and institutional discipline that we apply to every other aspect of our practice.",
        ],
      }}
      relatedInsightSlugs={[
        "compliance-decision-framework",
        "qms-scalability",
        "documentation-best-practices",
        "startup-compliance-funding",
      ]}
    />
  );
}
