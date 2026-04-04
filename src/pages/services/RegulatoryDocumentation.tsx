import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-regulatory-docs.jpg";

export default function RegulatoryDocumentation() {
  return (
    <ServicePageLayout
      seo={{
        title: "Documentation & SOPs | ElevateQCS",
        description: "We create the policies, procedures, and documentation systems your organization needs to prove compliance. Practical documentation development for regulated environments.",
        url: "https://elevateqcs.com/services/regulatory-documentation",
        keywords: ["SOP development", "compliance documentation", "document control", "regulatory documentation", "audit documentation", "contract documentation review"],
      }}
      hero={{
        label: "Documentation & SOPs",
        headline: "Documentation That Proves Compliance — Not Just Describes It",
        description: "We create the policies, procedures, and documentation systems your organization needs to prove compliance — transforming documentation from an administrative burden into useful operational infrastructure.",
        image: heroImg,
      }}
      credibility={{
        title: "The Foundation of Every Defensible System",
        paragraphs: [
          "Documentation is the evidentiary backbone of every compliance program. Without structured, accessible, and internally consistent records, even well-designed systems become indefensible under audit.",
          "We don't produce templates — we build documentation systems that reflect how your organization actually operates, ensuring that evidence of compliance is captured as a natural part of daily workflows.",
          "Every document, procedure, and record we develop is designed for a specific audience: auditors, regulators, internal teams, and leadership — each requiring different levels of detail and traceability.",
        ],
      }}
      capabilities={[
        {
          title: "Documentation Architecture",
          items: [
            "Document hierarchy design and policy-to-procedure mapping",
            "Document control systems and version management frameworks",
            "Records management and retention policy development",
            "Cross-reference systems for regulatory traceability",
          ],
        },
        {
          title: "SOP & Work Instruction Development",
          items: [
            "Standard operating procedure authoring and review cycles",
            "Work instruction development for technical and operational processes",
            "Form and template design for data capture and evidence generation",
            "Training documentation and competency record systems",
          ],
        },
        {
          title: "Contract Documentation Review",
          items: [
            "Statement of work analysis against actual deliverables",
            "Contractual flowdown documentation and compliance verification",
            "Change order documentation and scope deviation tracking",
            "Administrative workflow design and process standardization",
          ],
        },
      ]}
      people={{
        title: "Our Team Brings Practical Documentation Experience",
        paragraphs: [
          "Our documentation specialists understand that the quality of an organization's records directly reflects the quality of its operations. We bring meticulous attention to structure, clarity, and traceability.",
          "We work across industries where documentation requirements are exacting: federal contracting, medical devices, aerospace, and manufacturing. This cross-sector experience allows us to apply best practices from the most demanding environments.",
          "Our goal is to make compliance documentation a source of operational clarity — not administrative overhead.",
        ],
      }}
      relatedInsightSlugs={[
        "documentation-best-practices",
        "audit-failure-patterns",
        "qms-early-stage",
        "iso9001-operational-maturity",
      ]}
    />
  );
}
