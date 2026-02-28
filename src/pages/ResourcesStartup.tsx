import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ResourceGate } from "@/components/ResourceGate";
import { ResourceDisclaimer } from "@/components/ResourceDisclaimer";
import resourcesStartup from "@/assets/resources-startup.jpg";

export default function ResourcesStartup() {
  return (
    <Layout>
      <SEOHead
        title="High-Growth & Regulated Market Frameworks | ElevateQCS Resource Center"
        description="Access Professional Frameworks for high-growth operations including quality management templates, governance structures, due diligence guides, and risk management controls."
        url="https://elevateqcs.com/resources/high-growth"
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${resourcesStartup})` }} />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              High-Growth & Regulated Markets
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              High-Growth & Regulated Market Frameworks
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional frameworks for companies building scalable operations, compliance 
              foundations, and quality management systems in regulated or rapidly evolving industries.
            </p>
          </div>
        </div>
      </section>

      <ResourceGate
        type="startup"
        bucketName="elevateqcs-resourcesdocs-startups"
        title="Access High-Growth Frameworks"
        subtitle="Enter your business email to access our curated library of high-growth and regulated market Professional Frameworks."
      />

      <ResourceDisclaimer />
    </Layout>
  );
}
