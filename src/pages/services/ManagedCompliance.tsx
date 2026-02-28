import ServicePageLayout from "@/components/ServicePageLayout";
import heroImg from "@/assets/service-managed-compliance.jpg";

export default function ManagedCompliance() {
  return (
    <ServicePageLayout
      seo={{
        title: "Managed Compliance & Governance Services | ElevateQCS",
        description: "Ongoing compliance management, governance monitoring, and regulatory maintenance services for organizations requiring sustained advisory support beyond project-based engagements.",
        url: "https://elevateqcs.com/services/managed-compliance",
        keywords: ["managed compliance", "ongoing governance", "compliance monitoring", "regulatory maintenance", "outsourced compliance"],
      }}
      hero={{
        label: "Managed Compliance & Governance Services",
        headline: "Sustained Governance for Organizations That Cannot Afford Gaps",
        description: "We provide ongoing compliance management, governance monitoring, and regulatory maintenance services for organizations requiring sustained advisory support beyond project-based engagements — ensuring systems remain current, effective, and defensible.",
        image: heroImg,
      }}
      credibility={{
        title: "Compliance Is Not a Project — It Is a Discipline",
        paragraphs: [
          "Building a compliance system is only the first step. Maintaining it — updating policies as regulations evolve, ensuring training remains current, managing corrective actions through closure, and preparing for recurring audits — requires sustained attention that many organizations struggle to resource internally.",
          "Our managed services practice provides the institutional capacity that compliance demands. We function as an extension of our clients' governance and quality functions — delivering ongoing support with the rigour and consistency of an internal team, backed by the breadth and depth of specialized advisory expertise.",
          "This is not outsourced compliance. It is a managed partnership designed to maintain the systems we help build — and to continuously strengthen them as organizations grow and regulatory environments evolve.",
        ],
      }}
      capabilities={[
        {
          title: "Ongoing Compliance Management",
          items: [
            "Regulatory change monitoring and impact assessment",
            "Policy and procedure update cycles and version control",
            "Compliance calendar management and obligation tracking",
            "Periodic compliance health assessments and status reporting",
          ],
        },
        {
          title: "Governance Monitoring & Reporting",
          items: [
            "Management review facilitation and documentation",
            "KPI tracking and governance performance dashboards",
            "Internal audit program management and scheduling",
            "Board and executive compliance reporting packages",
          ],
        },
        {
          title: "Corrective Action & Continuous Improvement",
          items: [
            "CAPA system monitoring and effectiveness verification",
            "Trend analysis across nonconformances and audit findings",
            "Continuous improvement initiative identification and tracking",
            "Surveillance and recertification audit support",
          ],
        },
      ]}
      people={{
        title: "A Dedicated Team — Not a Rotating Bench",
        paragraphs: [
          "Our managed services engagements are staffed with dedicated professionals who develop institutional knowledge of our clients' operations, regulatory obligations, and organizational culture. This continuity allows us to provide advisory support that is contextually informed and operationally relevant.",
          "We bring the same rigour to managed engagements that we apply to project-based advisory — with the added advantage of longitudinal perspective. Over time, we develop an understanding of patterns, risks, and opportunities that only sustained engagement can provide.",
          "Our managed services model is designed for organizations that recognize compliance as a permanent function — and want to ensure it receives the expert attention it requires.",
        ],
      }}
      relatedInsightSlugs={[
        "qms-scalability",
        "cost-of-non-compliance",
        "compliance-decision-framework",
        "audit-failure-patterns",
      ]}
    />
  );
}
