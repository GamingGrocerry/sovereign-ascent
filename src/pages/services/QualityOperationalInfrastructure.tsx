import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-quality-infrastructure.jpg";

export default function QualityOperationalInfrastructure() {
  return (
    <ServicePageLayout
      seo={{
        title: "Quality & Operational Infrastructure | ElevateQCS",
        description: "We architect quality management systems and operational control frameworks designed for scalability, auditability, and internal ownership in regulated environments.",
        url: "https://elevateqcs.com/services/quality-operational-infrastructure",
        keywords: ["QMS architecture", "quality management system", "ISO 9001", "AS9100", "operational infrastructure", "process design"],
      }}
      hero={{
        label: "Quality & Operational Infrastructure",
        headline: "Quality Systems Designed for How Organizations Actually Operate",
        description: "We architect quality management systems and operational control frameworks that function in real workflows — designed for scalability, auditability, and internal ownership, not shelf compliance.",
        image: heroImg,
      }}
      credibility={{
        title: "Systems That Work Under Pressure — Not Just on Paper",
        paragraphs: [
          "A quality management system is only as strong as its integration into daily operations. Systems that exist primarily in documentation — disconnected from the workflows they are meant to govern — fail under audit, create operational friction, and erode the credibility they were designed to establish.",
          "Our quality practice is built on the principle that every control, process, and procedure must be designed for the people who will use it. We architect systems that operational teams adopt because they clarify expectations, reduce ambiguity, and create measurable accountability.",
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
      caseStudy={{
        sector: "Advanced Manufacturing / Pre-IPO",
        title: "QMS Redesign Eliminates 34% Scrap Rate Before IPO Due Diligence",
        situation: "A precision manufacturing company targeting an IPO was hemorrhaging $1.8M annually in scrap and rework costs. Their legacy quality system — a collection of tribal knowledge and undocumented processes — had generated 23 customer complaints in the prior quarter. Investment bankers flagged operational risk as the primary valuation discount, estimating a $15M reduction in enterprise value.",
        approach: "We conducted a forensic process audit across three production lines, mapping 142 process steps and identifying 31 undocumented decision points where quality failures originated. We redesigned the QMS architecture around risk-based thinking, implemented statistical process controls at critical-to-quality stages, and built a real-time nonconformance tracking system that linked shop floor data to management review.",
        outcome: "Within 6 months, scrap rates dropped from 34% to 8%. Customer complaints fell to 2 per quarter. The redesigned QMS satisfied due diligence requirements, and the IPO valuation team removed the operational risk discount — restoring an estimated $12M in enterprise value.",
        metrics: [
          { label: "Scrap Reduction", value: "34% → 8%" },
          { label: "Valuation Recovered", value: "~$12M" },
          { label: "Complaints Reduced", value: "92%" },
        ],
      }}
      people={{
        title: "Engineers of Operational Discipline",
        paragraphs: [
          "Our quality infrastructure specialists combine deep technical knowledge of international standards with practical experience in manufacturing, defence, medical device, and technology environments. We understand that quality systems must be technically rigorous and operationally intuitive.",
          "We work alongside quality managers, operations leaders, and executive teams to build systems that create genuine internal value — reducing waste, improving consistency, and establishing the operational discipline that customers, auditors, and regulators expect.",
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
