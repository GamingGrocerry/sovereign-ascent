import { IndustryPageLayout } from "@/components/IndustryPageLayout";
import industryGrowthHero from "@/assets/industry-growth-hero.jpg";

export default function IndustryGrowth() {
  return (
    <IndustryPageLayout
      seoTitle="Growth-Stage & Regulated Commercial | ElevateQCS"
      seoDescription="Quality systems, operational maturity, and governance advisory for growth-stage companies entering regulated and enterprise markets."
      seoUrl="https://elevateqcs.com/industries/growth-stage"
      seoKeywords={["growth-stage compliance", "ISO 9001 readiness", "operational maturity", "startup QMS", "enterprise vendor assessment"]}
      heroImage={industryGrowthHero}
      heroTitle="Operational Maturity for Growth-Stage Enterprises"
      heroDescription="Growth-stage companies entering regulated or enterprise markets must demonstrate operational discipline, governance visibility, and quality management maturity — requirements that cannot be satisfied with informal processes."
      overviewTitle="The Scaling Challenge"
      overviewParagraphs={[
        "Enterprise customers demand ISO certification. Investors expect governance visibility. Regulated markets require documented control. Operational maturity becomes the gatekeeper to revenue growth.",
        "Without structured quality and control systems, scaling organizations face vendor assessment failures, certification delays, and investor scrutiny. The systems that supported a 20-person team collapse under the weight of 200.",
        "We help growth-stage companies build operational infrastructure that enables scale without bureaucratic drag — designed for adoption, not just documentation.",
      ]}
      challengesTitle="Growth-Stage Compliance Pressures"
      challenges={[
        "ISO 9001 certification preparation within compressed timelines",
        "Enterprise vendor security and quality assessments",
        "Investor governance and board reporting expectations",
        "Undefined process ownership and accountability structures",
        "Inconsistent documentation across rapidly growing departments",
        "Regulatory requirements emerging faster than internal capacity",
      ]}
      services={[
        { title: "Quality & Operational Infrastructure", description: "QMS frameworks designed for growth-stage environments — scalable, practical, and adoption-focused.", href: "/services/quality-operational-infrastructure" },
        { title: "Governance & Strategy", description: "Governance structures that align operational maturity with business strategy and investor expectations.", href: "/services/governance-strategy" },
        { title: "Audit, Inspection & Certification Readiness", description: "Structured readiness programs for ISO 9001, SOC 2, and enterprise vendor assessments.", href: "/services/audit-certification-readiness" },
        { title: "Regulatory Documentation & Administrative Solutions", description: "SOPs, policies, and documentation systems designed for teams that need to use them — not just file them.", href: "/services/regulatory-documentation" },
        { title: "Risk, Regulatory & Compliance", description: "Regulatory landscape mapping and compliance architecture for emerging market requirements.", href: "/services/risk-regulatory-compliance" },
      ]}
      impactTitle="Building Operational Resilience Before the Market Demands It"
      impactParagraphs={[
        "The organizations that scale successfully are not those that react to compliance demands — they are those that build governance infrastructure before the pressure arrives.",
        "Our advisory approach is designed to help growth-stage companies establish the operational foundation that enables enterprise sales, regulatory approvals, and investor confidence simultaneously.",
      ]}
      scenarioTitle="A Venture-Backed SaaS Company Preparing for Enterprise Sales"
      scenarioText="A Series B SaaS company was losing enterprise deals to competitors with ISO 27001 and SOC 2 certifications. Their internal processes were undocumented, access controls were informal, and governance visibility was limited to quarterly board updates. Through a 60-day governance sprint, the organization established documented security policies, structured access controls, and a certification roadmap — converting three previously stalled enterprise opportunities within the first quarter."
      relatedInsightSlugs={["startup-compliance-funding", "qms-early-stage", "iso9001-operational-maturity", "qms-scalability"]}
    />
  );
}
