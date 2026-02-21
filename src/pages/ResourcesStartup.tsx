import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ResourceGate } from "@/components/ResourceGate";
import { ResourceDisclaimer } from "@/components/ResourceDisclaimer";
import resourcesStartup from "@/assets/resources-startup.jpg";

export default function ResourcesStartup() {
  return (
    <Layout>
      <SEOHead
        title="Startup Professional Frameworks | ElevateQCS Resource Center"
        description="Access Professional Frameworks for startup operations including QMS templates, compliance checklists, and operational control guides for scaling companies."
        url="https://elevateqcs.com/resources/startup"
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${resourcesStartup})` }} />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Startup Resources
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Startup Operations Professional Frameworks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Practical frameworks for high-growth companies building compliance foundations, 
              quality management systems, and operational controls for regulated markets.
            </p>
          </div>
        </div>
      </section>

      <ResourceGate
        type="startup"
        bucketName="ElevateQCS.com Resources Docs - Startup"
        title="Access Startup Frameworks"
        subtitle="Enter your business email to access our curated library of startup operations Professional Frameworks."
      />

      <ResourceDisclaimer />
    </Layout>
  );
}
