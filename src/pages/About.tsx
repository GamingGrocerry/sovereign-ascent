import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, Shield, Target, Eye } from "lucide-react";
import aboutPrecision from "@/assets/about-precision.jpg";
import methodologyRipples from "@/assets/methodology-ripples.jpg";
import trustVault from "@/assets/trust-vault.jpg";

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

const differentiators = [
  {
    icon: Shield,
    title: "Independence",
    description: "We maintain strict independence from certification bodies, vendors, and regulatory agencies. Our recommendations serve only your interests.",
  },
  {
    icon: Target,
    title: "Practical Focus",
    description: "We design systems for operational reality, not theoretical perfection. Every framework is built to function under real-world pressure.",
  },
  {
    icon: Eye,
    title: "Capability Transfer",
    description: "Our goal is your independence. We transfer knowledge and capability, not create dependency on external advisors.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${aboutPrecision})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                About ElevateQCS
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Institutional Authority Earned Through Field Experience
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ElevateQCS was founded in 2026 by senior quality and compliance 
                architects with hands-on experience designing, implementing, 
                monitoring, and supporting QMS frameworks across major billion-dollar 
                U.S. Government contracting programs.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={aboutPrecision} 
                  alt="Precision engineering and architectural planning" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-gradient py-20">
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="font-serif text-4xl md:text-5xl text-primary-foreground font-semibold mb-3 transition-transform duration-300 group-hover:scale-105">
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
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-8">Our Heritage</h2>
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
              <div className="section-divider mb-8" />
              <h2 className="mb-8">Our Position</h2>
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

      {/* Image with Quote */}
      <section className="relative h-[450px] overflow-hidden">
        <img 
          src={trustVault} 
          alt="Secure vault representing trust and protection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
              <p className="text-primary-foreground text-2xl md:text-3xl font-serif font-light leading-relaxed mb-6">
                "We don't certify. We architect. We don't approve. We advise. 
                We don't authorize. We support."
              </p>
              <p className="text-accent text-sm uppercase tracking-widest">
                Our Operational Philosophy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Values
            </p>
            <h2 className="gold-accent pb-4">Principles That Guide Every Engagement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elevated p-10">
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-8">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[350px] overflow-hidden">
        <img 
          src={methodologyRipples} 
          alt="Concentric ripples representing methodical process" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Work With Us</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            If you're seeking advisory support grounded in real-world experience 
            and delivered with complete discretion, we'd welcome the opportunity 
            to discuss your compliance objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/governance">
                Learn About Our Governance
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
