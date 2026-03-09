import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-project-recovery.jpg";

export default function ProjectRecovery() {
  return (
    <ServicePageLayout
      seo={{
        title: "Project Recovery & Distressed Asset Advisory | ElevateQCS",
        description: "Rapid-response strike team for distressed projects. We enter failing programs, perform forensic audits of subcontractor networks, and reset documentation and QA flows in 30 days.",
        url: "https://elevateqcs.com/services/project-recovery",
        keywords: ["project recovery advisory", "distressed asset compliance", "forensic audit", "project turnaround", "QA reset", "subcontractor audit", "compliance recovery", "green energy compliance", "AI infrastructure compliance"],
      }}
      hero={{
        label: "Project Recovery & Distressed Asset Advisory",
        headline: "When Projects Fail, We Stabilize the System",
        description: "We deploy rapid-response teams into distressed programs — performing forensic subcontractor audits, resetting documentation and quality assurance flows, and restoring operational control within 30 days. Whether the project is a federal sustainment contract or a commercial infrastructure build, we address the field-to-office disconnect that causes cascading failures.",
        image: heroImg,
      }}
      credibility={{
        title: "Built for High-Pressure Recovery",
        paragraphs: [
          "Large-scale projects fail at predictable points. Subcontractor quality systems collapse under schedule pressure. Documentation trails fragment across multiple teams. Corrective actions accumulate without resolution. The result is a program that looks organized on paper but operates in controlled chaos.",
          "Our project recovery practice was built in environments where these failures carry direct financial and contractual consequences — major government programs, international infrastructure builds, and high-value commercial projects where operational gaps compound into existential risk.",
          "We are not long-cycle consultants. We enter distressed environments as a strike team — diagnosing root causes in days, not weeks, and implementing structural corrections that restore audit readiness and operational control before regulatory or contractual consequences escalate.",
          "This capability serves both federal contractors facing corrective action timelines and commercial operators in green energy, AI infrastructure, and advanced manufacturing where the same field-to-office disconnect drives project failure at scale.",
        ],
      }}
      capabilities={[
        {
          title: "Forensic Subcontractor Audit",
          items: [
            "Rapid-cycle subcontractor compliance assessment across all tiers",
            "Documentation gap analysis against contractual and regulatory requirements",
            "Quality system failure pattern identification and root-cause mapping",
            "Evidence chain reconstruction for audit and legal defensibility",
          ],
        },
        {
          title: "30-Day QA & Documentation Reset",
          items: [
            "Corrective action prioritization using severity-weighted triage protocols",
            "Document control system restructuring and evidence organization",
            "Non-conformance and CAPA backlog resolution frameworks",
            "Inspection and acceptance workflow redesign for operational environments",
          ],
        },
        {
          title: "Operational Stabilization",
          items: [
            "Field-to-office process alignment and communication architecture",
            "Real-time quality monitoring and escalation protocol implementation",
            "Subcontractor performance management and flowdown enforcement",
            "Governance structure reinforcement for multi-site program environments",
          ],
        },
        {
          title: "Distressed Asset Compliance Assessment",
          items: [
            "Pre-acquisition compliance due diligence for distressed program assets",
            "Regulatory exposure mapping across federal, state, and international frameworks",
            "Contractual obligation analysis and cure notice response strategy",
            "Post-stabilization transition planning and capability transfer",
          ],
        },
        {
          title: "Green Energy & Infrastructure Recovery",
          items: [
            "ESG compliance system restoration for stalled renewable energy projects",
            "Environmental permit and safety compliance remediation",
            "Supply chain integrity verification for critical material sourcing",
            "Stakeholder reporting framework reconstruction",
          ],
        },
        {
          title: "AI Infrastructure Program Recovery",
          items: [
            "Data pipeline quality assurance and documentation for regulatory review",
            "Algorithmic governance framework implementation under schedule pressure",
            "Vendor and subcontractor AI compliance verification",
            "EU AI Act and emerging regulatory readiness under accelerated timelines",
          ],
        },
      ]}
      caseStudy={{
        sector: "Commercial Infrastructure / Data Center",
        title: "96-Hour Stabilization Saves $140M Data Center Build",
        situation: "A hyperscale data center construction project ($140M budget) was 4 months behind schedule with 67 open non-conformance reports across three subcontractor tiers. The general contractor had issued a cure notice, and the client faced $2.1M in liquidated damages if operational milestones weren't met within 45 days. The project's QA documentation was fragmented across 5 different systems with no traceability.",
        approach: "We deployed a 4-person strike team within 96 hours. We triaged the 67 open NCRs by contractual severity, closed 41 documentation-only findings within the first week, and restructured the remaining 26 into a phased corrective action plan tied to the construction schedule. We unified the documentation into a single evidence management system and rebuilt the subcontractor flowdown enforcement process.",
        outcome: "The cure notice was rescinded within 21 days. All critical-path milestones were met within the 45-day window, avoiding $2.1M in liquidated damages. The unified QA system reduced future NCR response time by 70% and became the standard for the client's subsequent builds.",
        metrics: [
          { label: "Damages Avoided", value: "$2.1M" },
          { label: "NCRs Resolved", value: "67 → 0" },
          { label: "Stabilization Time", value: "21 Days" },
        ],
      }}
      people={{
        title: "Advisors Built for Crisis Tempo",
        paragraphs: [
          "Our recovery teams bring direct experience from environments where failure carries immediate consequences — major government programs, international operations, and high-accountability commercial environments. We understand the difference between compliance advisory and operational recovery.",
          "We operate at crisis tempo when the situation demands it. Our methodology is designed to produce defensible results under compressed timelines — not to generate extended engagement scopes. The objective is stabilization and capability transfer, not dependency.",
          "Every engagement is confidential. We understand the sensitivity of distressed program environments and the reputational implications for all stakeholders involved. Our work protects client interests while restoring operational integrity.",
        ],
      }}
      relatedInsightSlugs={[
        "96-hour-recovery",
        "invisible-contractor-risk",
        "audit-failure-patterns",
        "subcontractor-qms-failures",
        "contractual-friction-audit",
        "loc-crisis-response",
      ]}
    />
  );
}
