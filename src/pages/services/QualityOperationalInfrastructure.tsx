import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-quality-infrastructure.jpg";

export default function QualityOperationalInfrastructure() {
  return (
    <ServicePageLayout
      seo={{
        title: "Quality Management Systems | ElevateQCS",
        description: "We design and build quality management systems (ISO 9001, AS9100, ISO 13485) that your team can use, maintain, and improve. Practical QMS consulting.",
        url: "https://elevateqcs.com/services/quality-operational-infrastructure",
        keywords: ["QMS consulting", "quality management system", "ISO 9001 consultant", "AS9100", "quality system consulting", "QMS consultant"],
      }}
      hero={{
        label: "Quality Management Systems",
        headline: "Quality Systems Your Team Will Actually Use",
        description: "We design and build quality management systems that work in real operations — not just on paper. Built for scalability, auditability, and internal ownership.",
        image: heroImg,
      }}
      credibility={{
        title: "Systems That Work Under Pressure",
        paragraphs: [
          "A quality management system is only as strong as its integration into daily operations. Systems that exist primarily in documentation — disconnected from the workflows they're meant to govern — fail under audit and create operational friction.",
          "We build systems that operational teams adopt because they clarify expectations, reduce ambiguity, and create measurable accountability.",
          "We bring experience across ISO 9001, AS9100, ISO 13485, and sector-specific quality frameworks — with a consistent focus on building systems that scale with the organizations they serve.",
        ],
      }}
      capabilities={[
        {
          title: "QMS Architecture & Design",
          items: [
            "Quality management system design from foundation to certification readiness",
            "Process mapping, SIPOC development, and workflow optimization",
            "Quality policy hierarchy and document control systems",
            "Risk-based thinking integration aligned with ISO 9001:2015",
          ],
        },
        {
          title: "Operational Process Engineering",
          items: [
            "Standard operating procedure (SOP) development and validation",
            "Nonconformance and corrective action system design",
            "Supplier quality management frameworks",
            "Inspection and testing protocol development",
          ],
        },
        {
          title: "Scalability & Integration",
          items: [
            "Multi-site quality system harmonization",
            "Integrated management system (IMS) architecture",
            "Quality metrics, KPIs, and management review frameworks",
            "Internal audit program design and auditor competency development",
          ],
        },
      ]}
      people={{
        title: "Our Team Brings Practical Quality Experience",
        paragraphs: [
          "Our quality specialists combine deep technical knowledge of international standards with practical experience in manufacturing, defence, medical device, and technology environments.",
          "We work alongside quality managers, operations leaders, and executive teams to build systems that create genuine internal value — reducing waste, improving consistency, and establishing the operational discipline that customers and auditors expect.",
          "Our approach prioritizes internal ownership. We build systems designed to be maintained and improved by the teams who use them — not by external consultants.",
        ],
      }}
      relatedInsightSlugs={[
        "qms-scalability",
        "qms-early-stage",
        "iso9001-operational-maturity",
        "documentation-best-practices",
        "subcontractor-qms-failures",
      ]}
    />
  );
}
