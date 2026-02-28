import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ResourceGate } from "@/components/ResourceGate";
import { ResourceDisclaimer } from "@/components/ResourceDisclaimer";
import resourcesGovcon from "@/assets/resources-govcon.jpg";

export default function ResourcesGovcon() {
  return (
    <Layout>
      <SEOHead
        title="Enterprise & Federal Compliance Frameworks | ElevateQCS Resource Center"
        description="Access Professional Frameworks for enterprise and federal compliance including FAR/DFARS templates, CTIP program guides, audit readiness checklists, and governance architecture."
        url="https://elevateqcs.com/resources/enterprise-federal"
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${resourcesGovcon})` }} />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Enterprise & Federal Compliance
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Enterprise & Federal Compliance Frameworks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional frameworks for organizations navigating complex regulatory landscapes, 
              federal and state compliance obligations, audit readiness, and operational governance.
            </p>
          </div>
        </div>
      </section>

      <ResourceGate
        type="govcon"
        bucketName="elevateqcs-resourcesdocs-govcon"
        title="Access Enterprise & Federal Frameworks"
        subtitle="Enter your business email to access our curated library of enterprise and federal compliance Professional Frameworks."
      />

      <ResourceDisclaimer />
    </Layout>
  );
}
