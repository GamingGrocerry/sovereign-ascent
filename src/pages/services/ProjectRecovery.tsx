import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-project-recovery.jpg";

export default function ProjectRecovery() {
  return (
    <ServicePageLayout
      seo={{
        title: "Project Recovery Advisory | ElevateQCS",
        description: "When projects go off track, we stabilize operations, fix documentation gaps, and restore quality controls quickly. Rapid-response advisory for distressed projects.",
        url: "https://elevateqcs.com/services/project-recovery",
        keywords: ["project recovery advisory", "project turnaround", "QA reset", "subcontractor compliance review", "compliance recovery", "compliance consultant"],
      }}
      hero={{
        label: "Project Recovery Advisory",
        headline: "When Projects Go Off Track, We Get Them Back",
        description: "We help organizations stabilize struggling projects — fixing documentation gaps, restoring quality controls, and getting subcontractor compliance back on track. Whether it's a federal contract or a commercial infrastructure build, we address the root causes of project trouble quickly and practically.",
        image: heroImg,
      }}
      credibility={{
        title: "Built for High-Pressure Recovery",
        paragraphs: [
          "Large-scale projects fail at predictable points. Subcontractor quality systems collapse under schedule pressure. Documentation trails fragment across multiple teams. Corrective actions accumulate without resolution.",
          "Our project recovery practice was built in environments where these failures carry direct financial and contractual consequences — government programs, infrastructure builds, and commercial projects where operational gaps compound into serious risk.",
          "We enter troubled environments quickly — diagnosing root causes in days, not weeks, and implementing structural corrections that restore audit readiness and operational control.",
        ],
      }}
      capabilities={[
        {
          title: "Subcontractor Compliance Review",
          items: [
            "Rapid-cycle subcontractor compliance assessment across all tiers",
            "Documentation gap analysis against contractual and regulatory requirements",
            "Quality system failure pattern identification and root-cause mapping",
            "Evidence chain reconstruction for audit defensibility",
          ],
        },
        {
          title: "QA & Documentation Reset",
          items: [
            "Corrective action prioritization using severity-weighted triage",
            "Document control system restructuring and evidence organization",
            "Non-conformance and CAPA backlog resolution frameworks",
            "Inspection and acceptance workflow redesign",
          ],
        },
        {
          title: "Operational Stabilization",
          items: [
            "Field-to-office process alignment and communication architecture",
            "Real-time quality monitoring and escalation protocol implementation",
            "Subcontractor performance management and flowdown enforcement",
            "Governance structure reinforcement for multi-site environments",
          ],
        },
        {
          title: "Compliance Assessment for Distressed Projects",
          items: [
            "Pre-acquisition compliance due diligence for troubled programs",
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
            "Governance framework implementation under schedule pressure",
            "Vendor and subcontractor AI compliance verification",
            "EU AI Act and emerging regulatory readiness under accelerated timelines",
          ],
        },
      ]}
      people={{
        title: "Our Team Brings Practical Recovery Experience",
        paragraphs: [
          "Our recovery teams bring direct experience from environments where failure carries immediate consequences — government programs, international operations, and high-accountability commercial environments.",
          "We operate at the tempo the situation demands. Our approach is designed to produce defensible results under compressed timelines — not to generate extended engagements. The objective is stabilization and capability transfer.",
          "Every engagement is confidential. We understand the sensitivity of distressed project environments and the reputational implications for all stakeholders involved.",
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
