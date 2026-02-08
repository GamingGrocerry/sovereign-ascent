import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, FileCheck, CheckCircle2 } from "lucide-react";
import servicesFramework from "@/assets/services-framework.jpg";
import heroArchitecture from "@/assets/hero-architecture.jpg";

const services = [
  {
    id: "qms",
    icon: Shield,
    title: "QMS Architecture",
    subtitle: "Quality Management System Design & Implementation",
    description: "We architect enterprise-grade quality management systems that are designed from the ground up to withstand regulatory scrutiny, support operational excellence, and scale with organizational growth.",
    capabilities: [
      "ISO 9001/AS9100 framework architecture",
      "Process mapping and documentation",
      "Quality policy and objective development",
      "Management review system design",
      "Document and record control systems",
      "Internal audit program development",
    ],
    outcomes: [
      "Audit-ready quality infrastructure",
      "Scalable process architecture",
      "Regulatory compliance foundation",
    ],
  },
  {
    id: "ctip",
    icon: Target,
    title: "CTIP as a Service",
    subtitle: "Combating Trafficking in Persons Program Development",
    description: "Comprehensive CTIP program development, implementation, and ongoing monitoring designed to meet FAR 52.222-50 requirements and demonstrate organizational commitment to human rights compliance.",
    capabilities: [
      "CTIP compliance plan development",
      "Awareness training program design",
      "Employee/subcontractor certification processes",
      "Monitoring and reporting mechanisms",
      "Recruitment and wage practice reviews",
      "Supply chain risk assessment",
    ],
    outcomes: [
      "FAR 52.222-50 compliance",
      "Documented due diligence program",
      "Contractually defensible CTIP posture",
    ],
  },
  {
    id: "audit",
    icon: FileCheck,
    title: "Audit & CAPA Advisory",
    subtitle: "Audit Readiness & Corrective Action Support",
    description: "Strategic audit preparation and Corrective Action Plan (CAPA) development that transforms compliance gaps into documented improvements and operational strengths.",
    capabilities: [
      "Pre-audit readiness assessments",
      "Mock audit execution",
      "Finding response strategy",
      "Root cause analysis facilitation",
      "CAPA development and tracking",
      "Closure evidence preparation",
    ],
    outcomes: [
      "Reduced audit findings",
      "Systematic issue resolution",
      "Continuous improvement culture",
    ],
  },
];

export default function ServicesStartups() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${servicesFramework})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Global Startups
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Compliance Foundations for High-Growth Startups
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We support high-growth startups in architecting, implementing, and 
                monitoring compliance frameworks that scale with your ambitions 
                and meet the demands of enterprise customers and regulatory environments.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={heroArchitecture} 
                  alt="Modern architectural structure" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Independence Doctrine */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-primary-foreground">
              <h3 className="text-xl font-serif mb-2">Vendor-Neutral Advisory</h3>
              <p className="text-primary-foreground/70 text-sm">
                We do not resell software, take referral fees, or maintain partnerships 
                that could compromise our advisory objectivity.
              </p>
            </div>
            <Link 
              to="/about" 
              className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center whitespace-nowrap"
            >
              Learn about our approach
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="space-y-28">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-8">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="mb-2 gold-accent pb-4">{service.title}</h2>
                    <p className="text-accent text-sm uppercase tracking-wide mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground mb-10">
                      {service.description}
                    </p>
                    <Button variant="cta" size="lg" asChild>
                      <Link to="/contact">
                        Discuss Your Requirements
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-8">
                    <div className="card-elevated p-10">
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-6">
                        Capabilities
                      </h4>
                      <ul className="space-y-4">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-4 text-foreground">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/50 p-10 rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-6">
                        Expected Outcomes
                      </h4>
                      <ul className="space-y-4">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-4 text-foreground font-medium">
                            <div className="w-2 h-2 bg-gradient-to-br from-accent to-accent/60 rounded-full mt-2 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-border/50 mt-28" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Start a Confidential Conversation</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Every engagement begins with a comprehensive understanding of your 
            organizational context, compliance objectives, and growth trajectory.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
