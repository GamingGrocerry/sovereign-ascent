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
