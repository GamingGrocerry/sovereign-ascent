import { SectorPageLayout } from "@/components/SectorPageLayout";
import sectorImage from "@/assets/sector-medical-life-sciences.jpg";

export default function SectorMedicalLifeSciences() {
  return (
    <SectorPageLayout
      seoTitle="Medical Device & Life Sciences Advisory | ElevateQCS"
      seoDescription="Governance and quality advisory for medical device and life sciences startups entering FDA-regulated and EU MDR markets."
      seoUrl="https://elevateqcs.com/sectors/medical-life-sciences"
      seoKeywords={["medical device QMS", "FDA compliance advisory", "EU MDR readiness", "life sciences quality systems", "ISO 13485"]}
      heroImage={sectorImage}
      heroLabel="Medical Device & Life Sciences"
      heroTitle="Quality Systems That Meet the Standard of Patient Safety"
      heroDescription="Medical device and life sciences companies face regulatory environments where compliance failures carry direct patient safety consequences. We help organizations build quality management systems that satisfy FDA, EU MDR, and international regulatory requirements from the earliest stages."
      overviewTitle="Building Compliance into the Product Lifecycle"
      overviewParagraphs={[
        "For medical device and life sciences startups, regulatory readiness is not a post-market concern — it must be architected into product development, manufacturing controls, and supplier qualification from the outset.",
        "FDA 21 CFR Part 820, EU MDR, ISO 13485, and increasingly stringent post-market surveillance requirements demand quality management systems that are both rigorous and practical. Organizations that delay compliance infrastructure face regulatory delays, market access barriers, and investor scrutiny.",
        "We work with early-stage and growth-stage companies to build quality systems that scale — supporting regulatory submissions, audit readiness, and investor confidence simultaneously.",
      ]}
      challengesTitle="Regulatory Pressures in Medical Device & Life Sciences"
      challenges={[
        "FDA 21 CFR Part 820 QMS development and pre-submission readiness",
        "EU MDR compliance architecture and technical documentation",
        "ISO 13485 quality management system implementation and certification",
        "Design control documentation and DHF/DMR/DHR structuring",
        "Post-market surveillance and CAPA system development",
        "Supplier qualification and incoming inspection programs",
      ]}
      services={[
        {
          title: "Quality & Operational Infrastructure",
          description: "Architect ISO 13485-aligned QMS frameworks that support regulatory submissions and operational scalability.",
          href: "/services/quality-operational-infrastructure",
        },
        {
          title: "Regulatory Documentation & Administrative Solutions",
          description: "Develop technical files, SOPs, and documentation systems that satisfy FDA and EU MDR requirements.",
          href: "/services/regulatory-documentation",
        },
        {
          title: "Audit, Inspection & Certification Readiness",
          description: "Prepare for notified body audits, FDA inspections, and ISO 13485 certification assessments.",
          href: "/services/audit-certification-readiness",
        },
        {
          title: "Risk, Regulatory & Compliance",
          description: "Map regulatory landscapes across FDA, EU, and international markets to build defensible compliance programs.",
          href: "/services/risk-regulatory-compliance",
        },
        {
          title: "Governance & Strategy",
          description: "Establish governance structures that align quality management with business strategy and investor expectations.",
          href: "/services/governance-strategy",
        },
      ]}
    />
  );
}
