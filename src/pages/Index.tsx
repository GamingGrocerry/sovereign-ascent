import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Target, FileCheck, ChevronRight, ArrowRight } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import aboutPrecision from "@/assets/about-precision.jpg";
import servicesFramework from "@/assets/services-framework.jpg";
import trustVault from "@/assets/trust-vault.jpg";
import qmsStructure from "@/assets/qms-structure.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";
import ctipProtection from "@/assets/ctip-protection.jpg";

const stats = [
  { value: "9+", label: "Years Collective Industry Pedigree", subtext: "US, EU, Middle East" },
  { value: "10,000+", label: "Audits Observed & Supported" },
  { value: "125+", label: "High-Value Contracts Supported", subtext: "Including CTIP Plans" },
  { value: "€500K–€25M", label: "Project Exposure Range" },
];

const services = [
  {
    icon: Shield,
    title: "Compliance & Management System Architecture",
    description: "We support organizations in designing and structuring internal management and compliance systems that are understandable, maintainable, and aligned with regulatory, contractual, and customer expectations.",
    href: "/services",
    image: qmsStructure,
  },
  {
    icon: Target,
    title: "Human Rights & Ethical Labor Compliance",
    description: "We advise on the development and operational implementation of human rights and ethical labor compliance programs, with a focus on preventing forced labor, trafficking in persons, and related risks.",
    href: "/services",
    image: ctipProtection,
  },
  {
    icon: FileCheck,
    title: "Audit Readiness & Corrective Action Advisory",
    description: "We support organizations in preparing for external assessments by strengthening internal controls, organizing evidence, and structuring corrective actions in a controlled and practical manner.",
    href: "/services",
    image: auditPrecision,
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 image-overlay" />
        
        {/* Decorative Corner Accents */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
        
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

      {/* About Preview Section */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={aboutPrecision} 
                  alt="Precision engineering and architectural planning" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/20 rounded-sm -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/10 rounded-sm -z-10" />
            </div>
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Our Distinction
              </p>
              <h2 className="mb-6 gold-accent pb-4">
                Institutional Pedigree in High-Stakes Compliance
              </h2>
              <p className="text-lg mb-6">
                ElevateQCS was founded by senior quality and compliance architects 
                with hands-on experience designing, implementing, and monitoring 
                QMS frameworks across major Government Contracting programs.
              </p>
              <p className="mb-8">
                Our team has supported organizations navigating FAR requirements, 
                DCAA audits, and international compliance mandates across sectors 
                including defense, aerospace, and regulated technology.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn About Our Heritage
                  <ChevronRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-28 lg:py-36 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
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
            <div className="relative hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={servicesFramework} 
                  alt="Interconnected compliance framework visualization" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="card-elevated group overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 rounded-sm bg-card/90 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-28 lg:py-36 bg-background">
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
              <div className="grid grid-cols-2 gap-6">
                {trustSignals.map((signal, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-sm text-foreground"
                  >
                    <div className="w-2 h-2 bg-gradient-to-br from-accent to-accent/60 rounded-full" />
                    {signal}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Trust Image with Quote Overlay */}
            <div className="relative">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={trustVault} 
                  alt="Security vault representing trust and confidentiality"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Quote Overlay */}
              <div className="absolute -bottom-8 -left-8 right-8 bg-primary p-8 rounded-sm shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
                <blockquote className="text-primary-foreground">
                  <p className="text-lg font-serif leading-relaxed mb-4 font-light">
                    "In high-stakes regulatory environments, compliance is not a 
                    checkbox—it's the architecture upon which operational 
                    credibility is built."
                  </p>
                  <footer className="text-primary-foreground/60 text-xs uppercase tracking-wider">
                    — ElevateQCS Founding Principles
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">
            Ready to Elevate Your Compliance Posture?
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
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
          <p className="text-muted-foreground text-sm mt-8">
            All initial consultations are protected by NDA
          </p>
        </div>
      </section>
    </Layout>
  );
}
