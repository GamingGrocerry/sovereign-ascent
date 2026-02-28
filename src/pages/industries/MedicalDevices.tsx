import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import heroImage from "@/assets/industry-medical-devices.jpg";

export default function IndustryMedicalDevices() {
  return (
    <IndustryPageLayout
      seoTitle="Medical Devices & Life Sciences | ElevateQCS"
      seoDescription="Quality management systems and regulatory advisory for medical device companies navigating FDA, EU MDR, and ISO 13485 requirements."
      seoUrl="https://elevateqcs.com/industries/medical-devices"
      seoKeywords={["medical device QMS", "FDA compliance", "EU MDR readiness", "ISO 13485", "life sciences quality"]}
      heroImage={heroImage}
      heroTitle="Regulatory Infrastructure for Next-Generation Medical Innovation"
      heroDescription="Medical device and life sciences companies face regulatory environments where compliance failures carry direct patient safety consequences. We help organizations build quality systems that satisfy FDA, EU MDR, and international requirements from the earliest stages of product development."
      overviewTitle="Quality Systems That Protect Patients and Enable Market Access"
      overviewParagraphs={[
        "Medical device regulatory environments are among the most demanding in industry. FDA 21 CFR Part 820, EU MDR, ISO 13485, and increasingly stringent post-market surveillance requirements demand quality management systems that are both rigorous and practical.",
        "Organizations that delay compliance infrastructure face regulatory delays, market access barriers, and investor scrutiny. For life sciences startups, the cost of remediation far exceeds the cost of building compliance into the product lifecycle from the outset.",
        "We work with early-stage and growth-stage companies to architect quality management systems that support regulatory submissions, audit readiness, and market access across FDA, EU, and international regulatory environments.",
      ]}
      challengesTitle="Regulatory Pressures in Medical Devices & Life Sciences"
      challenges={[
        "FDA 21 CFR Part 820 QMS development and pre-submission readiness",
        "EU MDR compliance architecture and technical documentation",
        "ISO 13485 quality management system implementation and certification",
        "Design control documentation and DHF/DMR/DHR structuring",
        "Post-market surveillance and CAPA system development",
        "Supplier qualification and incoming inspection programs",
      ]}
      services={[
        { title: "Quality & Operational Infrastructure", description: "ISO 13485-aligned QMS frameworks supporting regulatory submissions and operational scalability.", href: "/services/quality-operational-infrastructure" },
        { title: "Regulatory Documentation & Administrative Solutions", description: "Technical files, SOPs, and documentation systems satisfying FDA and EU MDR requirements.", href: "/services/regulatory-documentation" },
        { title: "Audit, Inspection & Certification Readiness", description: "Preparation for notified body audits, FDA inspections, and ISO 13485 certification.", href: "/services/audit-certification-readiness" },
        { title: "Risk, Regulatory & Compliance", description: "Regulatory landscape mapping across FDA, EU, and international markets.", href: "/services/risk-regulatory-compliance" },
        { title: "Governance & Strategy", description: "Governance structures aligning quality management with business strategy and investor expectations.", href: "/services/governance-strategy" },
      ]}
      impactTitle="Building Compliance into the Product Lifecycle"
      impactParagraphs={[
        "In medical devices, quality is not a separate function — it is embedded in every stage of product development, manufacturing, and post-market surveillance.",
        "Organizations that build regulatory infrastructure early gain competitive advantage in market access timelines, investor confidence, and patient safety outcomes.",
      ]}
      scenarioTitle="A Venture-Backed MedTech Firm Entering EU Markets"
      scenarioText="A Series A medical device company developing a Class IIb diagnostic device needed EU MDR compliance architecture to support CE marking within 18 months. Their existing documentation was informal, with no structured design history file or technical documentation. Through a phased implementation program, the organization established ISO 13485-aligned QMS, structured technical documentation, and a regulatory submission roadmap — enabling timely notified body engagement and investor milestone completion."
      relatedInsightSlugs={["qms-early-stage", "iso9001-operational-maturity", "audit-failure-patterns", "documentation-best-practices"]}
    />
  );
}
