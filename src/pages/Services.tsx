import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Target, FileCheck, CheckCircle2 } from "lucide-react";

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

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Services
            </p>
            <h1 className="mb-6">
              Advisory Services for High-Stakes Compliance
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We support organizations in architecting, implementing, and 
              monitoring compliance frameworks that meet the rigorous demands 
              of U.S. Government contracting and international regulatory environments.
            </p>
          </div>
        </div>
      </section>

      {/* Independence Doctrine */}
      <section className="py-12 bg-primary">
        <div className="container-wide">
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
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="w-14 h-14 rounded-sm bg-secondary flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="mb-2">{service.title}</h2>
                    <p className="text-accent text-sm uppercase tracking-wide mb-6">
                      {service.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>
                    <Button variant="cta" asChild>
                      <Link to="/contact">
                        Discuss Your Requirements
                        <ArrowRight className="ml-2" size={16} />
                      </Link>
                    </Button>
                  </div>
                  <div className="space-y-8">
                    <div className="card-elevated p-8">
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                        Capabilities
                      </h4>
                      <ul className="space-y-3">
                        {service.capabilities.map((cap, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-secondary/50 p-8 rounded-sm">
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                        Expected Outcomes
                      </h4>
                      <ul className="space-y-3">
                        {service.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-foreground font-medium">
                            <div className="w-2 h-2 bg-accent rounded-full mt-2 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {index < services.length - 1 && (
                  <div className="border-b border-border mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GovCon Coming Soon */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Coming Soon
            </p>
            <h2 className="mb-6">GovCon Advisory Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are expanding our service offerings to include specialized 
              advisory support for organizations entering or scaling within the 
              U.S. Government contracting ecosystem. Contact us for early access.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Express Interest
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Start a Confidential Conversation</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Every engagement begins with a comprehensive understanding of your 
            organizational context, compliance objectives, and risk landscape.
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
