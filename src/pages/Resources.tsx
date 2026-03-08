import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Rocket, CheckCircle, Crosshair } from "lucide-react";
import { ResourceDisclaimer } from "@/components/ResourceDisclaimer";
import resourcesHero from "@/assets/resources-hero.jpg";
import resourcesGovcon from "@/assets/resources-govcon.jpg";
import resourcesStartup from "@/assets/resources-startup.jpg";
import resourcesPoe from "@/assets/resources-poe.jpg";

const categories = [
  {
    title: "Enterprise & Federal Compliance",
    description: "Professional frameworks for organizations navigating complex regulatory landscapes, federal and state compliance obligations, audit readiness, and operational governance.",
    href: "/resources/enterprise-federal",
    image: resourcesGovcon,
    icon: Shield,
    includes: [
      "Federal contracting compliance (FAR/DFARS)",
      "Anti-trafficking & human rights compliance (CTIP)",
      "Internal audit & certification preparation",
      "Risk mapping & governance architecture",
    ],
  },
  {
    title: "High-Growth & Regulated Market Operations",
    description: "Professional frameworks for companies building scalable operations, compliance foundations, and quality management systems in regulated or rapidly evolving industries.",
    href: "/resources/high-growth",
    image: resourcesStartup,
    icon: Rocket,
    includes: [
      "Quality management & operational controls",
      "Sustainability & corporate due diligence (CS3D)",
      "Investor-ready governance structures",
      "Risk & escalation management",
    ],
  },
  {
    title: "Program & Operational Execution",
    description: "Professional frameworks for active site sustainment, LOGCAP V/VI readiness, and rapid recovery from Prime-issued findings (CAR/NCR). Designed for the high-pressure environment of OCONUS contracting.",
    href: "/resources/program-execution",
    image: resourcesPoe,
    icon: Crosshair,
    includes: [
      "CAPA submission & corrective action response",
      "LOGCAP mobilization & 96-hour readiness",
      "NCR field logging & resolution tracking",
      "OCONUS safety, CTIP surveillance & PWS risk mapping",
    ],
  },
];

export default function Resources() {
  return (
    <Layout>
      <SEOHead
        title="Resource Center | ElevateQCS Professional Frameworks"
        description="Access field-tested Professional Frameworks for enterprise compliance and high-growth operations. Download templates, checklists, and guides from ElevateQCS."
        url="https://elevateqcs.com/resources"
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div className="page-hero-bg" style={{ backgroundImage: `url(${resourcesHero})` }} />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Resource Center
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Professional Frameworks for Compliance Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Field-tested templates, checklists, and operational guides designed to accelerate 
              compliance readiness, operational maturity, and audit preparedness across regulated 
              and high-growth environments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2 className="mb-4">Choose Your Focus Area</h2>
            <p className="text-lg text-muted-foreground">
              Select a framework category to access our curated collection of Professional Frameworks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                to={cat.href}
                className="card-elevated group overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="w-14 h-14 rounded-sm bg-card/90 backdrop-blur-sm flex items-center justify-center">
                      <cat.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{cat.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {cat.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center text-accent font-medium">
                    Access Frameworks
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Need Customized Frameworks?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our Professional Frameworks provide a starting point. For tailored solutions 
            aligned to your specific operational and regulatory context, speak with our team.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>

      <ResourceDisclaimer />
    </Layout>
  );
}
