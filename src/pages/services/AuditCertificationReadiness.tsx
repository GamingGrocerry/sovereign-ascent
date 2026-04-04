import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-audit-readiness.jpg";

export default function AuditCertificationReadiness() {
  return (
    <ServicePageLayout
      seo={{
        title: "Audit & Certification Preparation | ElevateQCS",
        description: "Get ready for ISO audits, customer assessments, and regulatory inspections with organized evidence and strong processes. Practical audit readiness advisory.",
        url: "https://elevateqcs.com/services/audit-certification-readiness",
        keywords: ["audit preparation", "certification readiness", "ISO audit", "CMMC assessment", "inspection readiness", "audit preparation services", "compliance consultant"],
      }}
      hero={{
        label: "Audit & Certification Preparation",
        headline: "Get Audit-Ready With Confidence",
        description: "We prepare organizations for third-party assessments, customer audits, and certification reviews by organizing evidence, strengthening processes, and making sure your team is ready — so the audit confirms your capability, not exposes gaps.",
        image: heroImg,
      }}
      credibility={{
        title: "Audits Should Confirm Capability",
        paragraphs: [
          "Organizations that treat audit preparation as a last-minute exercise consistently generate findings that reflect systemic gaps — not isolated incidents. The difference between a successful audit and a problematic one is rarely the quality system itself. It's the quality of the evidence and the coherence of the story it tells.",
          "Our audit readiness practice helps organizations present themselves accurately and confidently — demonstrating conformance, operational discipline, and continuous improvement.",
          "We have supported organizations through ISO certification audits, customer quality audits, DCMA surveillance, CMMC assessments, and agency-specific inspections.",
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
      people={{
        title: "Advisors With Real Audit Experience",
        paragraphs: [
          "Our audit readiness team includes professionals who have conducted audits, responded to findings, and built the systems that auditors evaluate. This perspective helps us prepare organizations for what auditors actually look for — beyond the checklist.",
          "We bring experience across multiple standards, industries, and audit bodies — ensuring our preparation is calibrated to the specific expectations of the assessment you'll face.",
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
