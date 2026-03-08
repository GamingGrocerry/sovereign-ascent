import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ResourceGate } from "@/components/ResourceGate";
import { ResourceDisclaimer } from "@/components/ResourceDisclaimer";
import resourcesPoe from "@/assets/resources-poe.jpg";

export default function ResourcesPOE() {
  return (
    <Layout>
      <SEOHead
        title="Program & Operational Execution Frameworks | ElevateQCS Resource Center"
        description="Access Professional Frameworks for active site sustainment, LOGCAP V/VI readiness, CAPA response, NCR field tracking, OCONUS safety, CTIP surveillance, and PWS risk mapping."
        url="https://elevateqcs.com/resources/program-execution"
        keywords={["LOGCAP readiness plan", "CAPA submission framework", "NCR field log", "OCONUS safety manual", "CTIP surveillance audit", "PWS risk mapping"]}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${resourcesPoe})` }} />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Program & Operational Execution
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Program & Operational Execution Frameworks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional frameworks for active site sustainment, LOGCAP V/VI readiness, 
              and rapid recovery from Prime-issued findings. Designed for the high-pressure 
              environment of OCONUS contracting.
            </p>
          </div>
        </div>
      </section>

      <ResourceGate
        type="poe"
        bucketName="elevateqcs-resourcesdocs-poe"
        title="Access Program Execution Frameworks"
        subtitle="Enter your business email to access our curated library of field-ready Program & Operational Execution frameworks."
      />

      <ResourceDisclaimer />
    </Layout>
  );
}
