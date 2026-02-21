import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ResourceGate } from "@/components/ResourceGate";
import { ResourceDisclaimer } from "@/components/ResourceDisclaimer";
import resourcesGovcon from "@/assets/resources-govcon.jpg";

export default function ResourcesGovcon() {
  return (
    <Layout>
      <SEOHead
        title="GovCon Professional Frameworks | ElevateQCS Resource Center"
        description="Access Professional Frameworks for government contracting compliance including FAR/DFARS templates, CTIP program guides, and audit readiness checklists."
        url="https://elevateqcs.com/resources/govcon"
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${resourcesGovcon})` }} />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              GovCon Resources
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Government Contracting Professional Frameworks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Field-tested frameworks for federal compliance, FAR/DFARS alignment, 
              CTIP program development, and audit readiness in government contracting environments.
            </p>
          </div>
        </div>
      </section>

      <ResourceGate
        type="govcon"
        bucketName="elevateqcs-resourcesdocs-govcon"
        title="Access GovCon Frameworks"
        subtitle="Enter your business email to access our curated library of government contracting Professional Frameworks."
      />

      <ResourceDisclaimer />
    </Layout>
  );
}
