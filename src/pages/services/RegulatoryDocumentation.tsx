import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-regulatory-docs.jpg";

export default function RegulatoryDocumentation() {
  return (
    <ServicePageLayout
      seo={{
        title: "Regulatory Documentation & Administrative Solutions | ElevateQCS",
        description: "We develop documentation systems, SOPs, and administrative frameworks that ensure regulatory evidence is organized, accessible, and audit-ready.",
        url: "https://elevateqcs.com/services/regulatory-documentation",
        keywords: ["regulatory documentation", "SOP development", "document control", "administrative compliance", "audit documentation"],
      }}
      hero={{
        label: "Regulatory Documentation & Administrative Solutions",
        headline: "Documentation That Demonstrates — Not Just Describes — Compliance",
        description: "We develop documentation systems, standard operating procedures, and administrative frameworks that ensure regulatory evidence is organized, accessible, and audit-ready — transforming documentation from an administrative burden into institutional proof.",
        image: heroImg,
      }}
      credibility={{
        title: "The Foundation of Every Defensible System",
        paragraphs: [
          "Documentation is the evidentiary backbone of every compliance program. Without structured, accessible, and internally consistent records, even well-designed systems become indefensible under audit. The gap between operational practice and documented evidence is where findings are generated.",
          "Our documentation practice treats this discipline with the institutional seriousness it deserves. We do not produce templates — we build documentation architectures that reflect how organizations actually operate, ensuring that evidence of compliance is generated as a natural output of daily workflows.",
          "Every document, procedure, and record we develop is designed for a specific audience: auditors, regulators, internal teams, and leadership — each requiring different levels of detail, accessibility, and traceability.",
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
          title: "Administrative Compliance Systems",
          items: [
            "Regulatory filing and submission management frameworks",
            "Compliance calendar and obligation tracking systems",
            "Administrative workflow design and process standardization",
            "Audit trail documentation and evidence packaging",
          ],
        },
      ]}
      people={{
        title: "Precision in Every Record",
        paragraphs: [
          "Our documentation specialists understand that the quality of an organization's records directly reflects the quality of its operations. We bring meticulous attention to structure, clarity, and traceability — ensuring every document serves its intended regulatory and operational purpose.",
          "We work across industries where documentation requirements are exacting: federal contracting, medical devices, aerospace, and manufacturing. This cross-sector experience allows us to apply best practices from the most demanding environments to every engagement.",
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
