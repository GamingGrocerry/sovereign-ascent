import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-audit-readiness.jpg";

export default function AuditCertificationReadiness() {
  return (
    <ServicePageLayout
      seo={{
        title: "Audit, Inspection & Certification Readiness | ElevateQCS",
        description: "We prepare organizations for third-party assessments, customer audits, and certification reviews by organizing evidence, strengthening control narratives, and structuring corrective action.",
        url: "https://elevateqcs.com/services/audit-certification-readiness",
        keywords: ["audit readiness", "certification preparation", "ISO audit", "CMMC assessment", "inspection readiness", "corrective action"],
      }}
      hero={{
        label: "Audit, Inspection & Certification Readiness",
        headline: "Audit Readiness Built on Substance — Not Last-Minute Preparation",
        description: "We prepare organizations for third-party assessments, customer audits, and certification reviews by organizing evidence, strengthening control narratives, and structuring corrective action — so the audit reveals strength, not exposure.",
        image: heroImg,
      }}
      credibility={{
        title: "Audits Should Confirm Capability — Not Expose It",
        paragraphs: [
          "An audit is a measurement of institutional maturity. Organizations that treat audit preparation as a last-minute exercise consistently generate findings that reflect systemic gaps — not isolated incidents. The difference between a successful audit and a problematic one is rarely the quality of the management system. It is the quality of the evidence and the coherence of the control narrative.",
          "Our audit readiness practice is designed to help organizations present themselves accurately and confidently — demonstrating not just conformance, but operational discipline, corrective capability, and continuous improvement.",
          "We have supported organizations through ISO certification audits, customer quality audits, DCMA surveillance, CMMC assessments, and agency-specific inspections. Our approach is consistent: prepare the system, organize the evidence, and ensure the team is confident in their responses.",
        ],
      }}
      capabilities={[
        {
          title: "Pre-Audit Assessment & Gap Closure",
          items: [
            "Mock audits and readiness assessments against applicable standards",
            "Gap-to-compliance analysis with prioritized corrective action plans",
            "Evidence inventory and documentation completeness reviews",
            "Management review preparation and effectiveness validation",
          ],
        },
        {
          title: "Certification Strategy",
          items: [
            "Certification body selection and scope definition guidance",
            "Stage 1 and Stage 2 audit preparation and coordination",
            "Multi-standard certification strategy (ISO 9001, AS9100, ISO 13485)",
            "Surveillance audit preparation and continual improvement evidence",
          ],
        },
        {
          title: "Corrective Action & Findings Resolution",
          items: [
            "Root cause analysis methodology and facilitation",
            "Corrective action plan development and effectiveness verification",
            "Findings response documentation for certification bodies",
            "Systemic pattern analysis across audit cycles",
          ],
        },
      ]}
      caseStudy={{
        sector: "Commercial SaaS / Series B",
        title: "From Zero Certification to ISO 27001 in 14 Weeks",
        situation: "A Series B enterprise SaaS company was losing $2.4M in annual pipeline to competitors who held ISO 27001 certification. Their largest prospect — a Fortune 500 financial services firm — required certification as a procurement prerequisite. The internal team had no quality infrastructure and a 16-week deadline before the contract opportunity expired.",
        approach: "We deployed a focused readiness team to build the information security management system from foundation. We conducted a gap assessment in week one, prioritized 47 control gaps by audit risk severity, and built the documentation architecture in parallel with control implementation. Mock audits were conducted at weeks 8 and 12 to pressure-test evidence coherence.",
        outcome: "The company achieved ISO 27001 certification on the first attempt in 14 weeks — two weeks ahead of the contract deadline. The Fortune 500 deal closed within 30 days of certification. The ISMS infrastructure also satisfied due diligence requirements for their Series C round six months later.",
        metrics: [
          { label: "Pipeline Unlocked", value: "$2.4M+" },
          { label: "Certification Timeline", value: "14 Weeks" },
          { label: "First-Attempt Pass", value: "Zero Findings" },
        ],
      }}
      people={{
        title: "Advisors Who Have Been on Both Sides of the Audit Table",
        paragraphs: [
          "Our audit readiness team includes professionals who have conducted audits, responded to findings, and built the systems that auditors evaluate. This dual perspective allows us to prepare organizations with an understanding of what auditors are actually looking for — beyond the checklist.",
          "We bring experience across multiple standards, industries, and audit bodies — ensuring our preparation is calibrated to the specific expectations and methodology of the assessment our clients will face.",
          "Our work is confidential, precise, and focused on building lasting audit capability — not creating dependency on external preparation support.",
        ],
      }}
      relatedInsightSlugs={[
        "audit-failure-patterns",
        "cost-of-non-compliance",
        "documentation-best-practices",
        "iso9001-operational-maturity",
        "govcon-prime-expectations",
      ]}
    />
  );
}
