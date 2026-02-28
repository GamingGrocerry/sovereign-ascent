import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-federal-advisory.jpg";

export default function FederalPublicSector() {
  return (
    <ServicePageLayout
      seo={{
        title: "Federal & Public Sector Advisory | ElevateQCS",
        description: "We support government contractors and public-sector-aligned organizations in stabilizing operations, meeting contractual compliance obligations, and scaling with institutional maturity.",
        url: "https://elevateqcs.com/services/federal-public-sector",
        keywords: ["federal contractor advisory", "government contracting", "FAR compliance", "DFARS", "CMMC readiness", "public sector"],
      }}
      hero={{
        label: "Federal & Public Sector Advisory",
        headline: "Federal Advisory That Stabilizes and Scales Performance",
        description: "We support government contractors and public-sector-aligned organizations in stabilizing operations, meeting contractual compliance obligations, and building the institutional maturity that prime contractors, contracting officers, and oversight bodies expect.",
        image: heroImg,
      }}
      credibility={{
        title: "Built for the Scrutiny That Federal Work Demands",
        paragraphs: [
          "Federal contracting is an environment where operational gaps carry direct contractual, financial, and reputational consequences. Compliance in this context is not aspirational — it is a condition of performance. Organizations that scale without structural discipline risk corrective actions, lost recompetes, and exclusion from future opportunities.",
          "Our federal advisory practice is built on firsthand experience in government contracting environments — supporting contractors across FAR/DFARS compliance, quality system obligations, and the operational maturity requirements that increasingly define competitive positioning.",
          "We help organizations move from reactive compliance to institutional readiness — so growth does not outpace the systems designed to sustain it.",
        ],
      }}
      capabilities={[
        {
          title: "FAR/DFARS Compliance Architecture",
          items: [
            "Clause applicability analysis and compliance matrix development",
            "FAR 52.222-50 (CTIP) program design and implementation",
            "DFARS cybersecurity and controlled information requirements",
            "Small business subcontracting plan development and reporting",
          ],
        },
        {
          title: "Contract Performance & Oversight Readiness",
          items: [
            "CPARS narrative strategy and performance documentation",
            "Corrective action response development for DCAA/DCMA findings",
            "Government property and accounting system compliance",
            "Contractor purchasing system reviews (CPSR) preparation",
          ],
        },
        {
          title: "Institutional Maturity & Scaling",
          items: [
            "Alliant 3 and OASIS+ operational readiness assessments",
            "Prime/subcontractor compliance flow-down frameworks",
            "Organizational growth readiness and capacity assessments",
            "Governance structures for multi-contract environments",
          ],
        },
      ]}
      people={{
        title: "Advisors Who Understand the Federal Landscape",
        paragraphs: [
          "Our federal advisory team brings direct experience across major government contracting programs, including defence, civilian, and intelligence community environments. We understand the regulatory, contractual, and operational dynamics that define performance in this space.",
          "We combine governance expertise with regulatory depth — ensuring our clients build systems that satisfy both the letter of their contractual obligations and the operational expectations of their government customers.",
          "Our work is confidential, vendor-neutral, and designed to build internal capability — not long-term advisory dependency.",
        ],
      }}
      relatedInsightSlugs={[
        "govcon-operational-maturity",
        "govcon-prime-expectations",
        "alliant3-operational-readiness",
        "subcontractor-qms-failures",
        "cost-of-non-compliance",
      ]}
    />
  );
}
