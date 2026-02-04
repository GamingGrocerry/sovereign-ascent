import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Target, FileCheck, ChevronRight, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "9+", label: "Years Collective Industry Pedigree", subtext: "US, EU, Middle East" },
  { value: "10,000+", label: "Audits Observed & Supported" },
  { value: "125+", label: "High-Value Contracts Supported", subtext: "Including CTIP Plans" },
  { value: "€500K–€25M", label: "Project Exposure Range" },
];

const services = [
  {
    icon: Shield,
    title: "QMS Architecture",
    description: "We architect enterprise-grade quality management systems designed to withstand regulatory scrutiny and scale with organizational growth.",
    href: "/services#qms",
  },
  {
    icon: Target,
    title: "CTIP as a Service",
    description: "Comprehensive Combating Trafficking in Persons program development, implementation, and ongoing monitoring for FAR 52.222-50 compliance.",
    href: "/services#ctip",
  },
  {
    icon: FileCheck,
    title: "Audit & CAPA Advisory",
    description: "Strategic audit readiness support and Corrective Action Plan development to transform compliance gaps into operational strengths.",
    href: "/services#audit",
  },
];

const trustSignals = [
  "Vendor-Neutral Advisory",
  "NDA-First Engagement",
  "Field-Tested Methodologies",
  "Confidential & Discreet",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 hero-overlay" />
        
        {/* Content */}
        <div className="relative z-10 container-wide py-32 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary-foreground/60 uppercase tracking-[0.3em] text-xs mb-6 animate-fade-up">
              Quality & Compliance Advisory
            </p>
            <h1 className="text-primary-foreground mb-8 animate-fade-up-delay-1 text-balance">
              Architecting Compliance Excellence for High-Stakes Environments
            </h1>
            <p className="text-primary-foreground/80 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-up-delay-2">
              ElevateQCS is an independent advisory firm specializing in quality 
              management system architecture and CTIP program development for 
              U.S. Government Contractors and regulated enterprises.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Confidential Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/methodology">
                  Explore Our Methodology
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
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

      {/* Services Overview */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Services
            </p>
            <h2 className="mb-6">
              Compliance Frameworks Built for Scrutiny
            </h2>
            <p className="text-lg">
              We support organizations in architecting, implementing, and 
              monitoring compliance frameworks that meet the rigorous demands 
              of U.S. Government contracting and international regulatory environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="card-elevated p-8 group"
              >
                <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium">
                  Learn more
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 lg:py-32 bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Our Approach
              </p>
              <h2 className="mb-6">
                Independence & Discretion as Doctrine
              </h2>
              <p className="text-lg mb-8">
                ElevateQCS operates with complete vendor neutrality. We do not 
                resell software, take referral fees, or maintain partnerships 
                that could compromise our advisory objectivity. Our recommendations 
                serve your organizational interests—nothing else.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {trustSignals.map((signal, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary p-10 lg:p-12 rounded-sm">
              <blockquote className="text-primary-foreground">
                <p className="text-xl lg:text-2xl font-serif leading-relaxed mb-6 font-light">
                  "In high-stakes regulatory environments, compliance is not a 
                  checkbox—it's the architecture upon which operational 
                  credibility is built."
                </p>
                <footer className="text-primary-foreground/60 text-sm">
                  — ElevateQCS Founding Principles
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6">
            Ready to Elevate Your Compliance Posture?
          </h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Whether you're facing an upcoming audit, expanding into government 
            contracting, or building compliance infrastructure from the ground up, 
            we're here to support your mission.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request a Confidential Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <p className="text-muted-foreground text-sm mt-6">
            All initial consultations are protected by NDA
          </p>
        </div>
      </section>
    </Layout>
  );
}
