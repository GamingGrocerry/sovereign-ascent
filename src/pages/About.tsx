import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe } from "lucide-react";

const stats = [
  { value: "9+", label: "Years Collective Industry Pedigree", subtext: "US, EU, Middle East" },
  { value: "10,000+", label: "Audits Observed & Supported" },
  { value: "125+", label: "High-Value Contracts Supported", subtext: "Including CTIP Plans" },
  { value: "€500K–€25M", label: "Project Exposure Range" },
];

const values = [
  {
    icon: Award,
    title: "Operational Clarity",
    description: "We transform complex regulatory requirements into actionable, implementable frameworks that your teams can execute with confidence.",
  },
  {
    icon: Users,
    title: "Risk Reduction",
    description: "Our methodologies are designed to identify, quantify, and systematically address compliance risks before they become audit findings.",
  },
  {
    icon: Globe,
    title: "Discretion & Confidentiality",
    description: "Every engagement begins with comprehensive NDAs. Your competitive intelligence and compliance posture remain protected.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              About ElevateQCS
            </p>
            <h1 className="mb-6">
              Institutional Authority Earned Through Field Experience
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ElevateQCS was founded in 2026 by senior quality and compliance 
              architects with hands-on experience designing, implementing, 
              monitoring, and supporting QMS frameworks across major billion-dollar 
              U.S. Government contracting programs.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-gradient py-16">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-primary-foreground font-semibold mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm leading-tight">
                  {stat.label}
                </div>
                {stat.subtext && (
                  <div className="text-primary-foreground/50 text-xs mt-1">
                    {stat.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="mb-6">Our Heritage</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Our founding team has spent nearly a decade embedded within 
                  the quality and compliance ecosystems of major defense, 
                  aerospace, and government services contractors. This isn't 
                  theoretical knowledge—it's field-tested experience gained 
                  through direct participation in high-value program execution.
                </p>
                <p>
                  We've observed thousands of internal and external audits, 
                  architected quality management systems for contracts spanning 
                  multiple continents, and supported organizations through the 
                  most demanding regulatory environments in the world.
                </p>
                <p>
                  This operational experience informs every aspect of our 
                  advisory practice. We understand not just what compliance 
                  frameworks should look like on paper, but how they function 
                  under the pressure of real-world program execution.
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-6">Our Position</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  ElevateQCS occupies a deliberate position in the market: we 
                  are neither a certification body nor a regulatory agency. We 
                  are independent advisors who support organizations in building 
                  their own compliance capabilities.
                </p>
                <p>
                  This distinction is fundamental to how we operate. We don't 
                  certify—we architect. We don't approve—we advise. We don't 
                  authorize—we support. Our role is to transfer knowledge and 
                  capability to your organization, not to create dependency.
                </p>
                <p>
                  Our vendor-neutral stance means we recommend solutions based 
                  solely on your organizational needs. We don't resell software, 
                  take referral fees, or maintain partnerships that could 
                  compromise our objectivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Values
            </p>
            <h2>Principles That Guide Every Engagement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Work With Us</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            If you're seeking advisory support grounded in real-world experience 
            and delivered with complete discretion, we'd welcome the opportunity 
            to discuss your compliance objectives.
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
