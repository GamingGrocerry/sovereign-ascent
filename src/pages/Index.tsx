import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Target, FileCheck, BookOpen, ChevronRight, ArrowRight, Search, Compass, Wrench, Users, BarChart3, Clock } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import aboutPrecision from "@/assets/about-precision.jpg";
import servicesFramework from "@/assets/services-framework.jpg";
import trustVault from "@/assets/trust-vault.jpg";
import qmsStructure from "@/assets/qms-structure.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";
import ctipProtection from "@/assets/ctip-protection.jpg";
import { featuredArticle, articles } from "@/data/insights-data";

const stats = [
  { value: "9+", label: "Years of Regulatory & Operational Advisory Experience" },
  { value: "10,000+", label: "Audits Observed, Supported, and Prepared For" },
  { value: "125+", label: "Compliance & Control Frameworks Delivered" },
  { value: "€500K–€25M", label: "Advisory Exposure Across Project Environments" },
];

const services = [
  {
    icon: Shield,
    title: "Turn Compliance Risk Into Structured Control",
    description: "Design and align compliance systems so operations are understandable, auditable, and ready to withstand scrutiny.",
    href: "/services",
    image: qmsStructure,
  },
  {
    icon: Target,
    title: "Embed Ethical & Human Rights Safeguards",
    description: "Structure human rights and ethical labor programs that are understood, applied, and monitored across operations and supply chains.",
    href: "/services",
    image: ctipProtection,
  },
  {
    icon: FileCheck,
    title: "Prepare for Scrutiny — Before It Arrives",
    description: "Organize evidence, strengthen control narratives, and structure corrective action so it is understandable and sustainable.",
    href: "/services",
    image: auditPrecision,
  },
  {
    icon: BookOpen,
    title: "Build Internal Capability Across Teams",
    description: "Practical training for teams who must operate compliance systems day-to-day, focused on confidence and internal ownership.",
    href: "/services",
    image: servicesFramework,
  },
];

const ecamPhases = [
  { icon: Search, name: "Diagnose", description: "Identify gaps with real operational impact" },
  { icon: Compass, name: "Architect", description: "Structure systems teams can use" },
  { icon: Wrench, name: "Implement", description: "Guide deployment with internal clarity" },
  { icon: Users, name: "Embed", description: "Support adoption through role-based expectations" },
  { icon: BarChart3, name: "Monitor", description: "Enable ongoing control and evidence maintenance" },
];

const audiences = [
  {
    title: "Government Contracting Organizations",
    description: "Teams needing defensible compliance systems before audits, contract milestones, or regulatory assessments.",
  },
  {
    title: "Subcontractors & Suppliers",
    description: "Organizations needing structured compliance readiness to meet prime contractor and customer expectations.",
  },
  {
    title: "High-Growth Regulated Companies",
    description: "Scalable compliance foundations for companies preparing for enterprise customers or regulated markets.",
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
              Operational Risk That Survives Scrutiny — Before It Costs You
            </h1>
            <p className="text-primary-foreground/80 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-12 animate-fade-up-delay-2">
              Empowering regulated leaders and government contracting teams with 
              operational compliance systems built for real-world execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request a Confidential Consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/services">
                  Explore Our Services
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


      {/* About Preview Section */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={aboutPrecision} 
                  alt="Architectural precision representing structured compliance readiness for risk-exposed organizations" 
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
                We Build Compliance Systems for Clarity and Control
              </h2>
              <p className="text-lg mb-6">
                We form compliance systems not to check boxes, but to give 
                operational leaders clarity and control — grounded in field-tested 
                experience across major government contracting programs.
              </p>
              <p className="mb-8">
                We work with leadership, quality functions, and operations teams 
                who must make compliance work in practice — not just in documents.
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
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Services
            </p>
            <h2 className="mb-6">
              Compliance Challenges Are Rarely Abstract
            </h2>
            <p className="text-lg">
              They appear when contracts tighten, audits occur, or systems break 
              under pressure. Our services help organizations anticipate, structure, 
              and operate compliance systems that hold up in real environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="p-6">
                  <h3 className="text-lg mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
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

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ECAM Methodology Preview */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Methodology
            </p>
            <h2 className="mb-6">A Repeatable Approach to Compliance Complexity</h2>
            <p className="text-lg text-muted-foreground">
              The EQCS Compliance Architecture Model is a five-phase structure that 
              brings order to compliance complexity: diagnose, architect, implement, 
              embed, monitor.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-4 lg:gap-8 mb-12">
            {ecamPhases.map((phase, index) => (
              <div key={phase.name} className="flex items-center">
                <div className="flex flex-col items-center text-center group flex-1 md:flex-initial">
                  <div className="w-16 h-16 rounded-sm bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110 mb-3">
                    <phase.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-1 group-hover:text-accent transition-colors">
                    {phase.name}
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-[160px]">
                    {phase.description}
                  </p>
                </div>
                {index < ecamPhases.length - 1 && (
                  <div className="hidden md:block w-8 lg:w-12 h-px bg-gradient-to-r from-border to-accent/30 mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/methodology">
                Learn About Our Methodology
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-28 lg:py-36 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Who We Serve
            </p>
            <h2 className="mb-6">
              We Serve Organizations Where Compliance Risk Meets Operational Demand
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {audiences.map((audience, index) => (
              <div key={index} className="card-elevated p-8">
                <h3 className="text-xl mb-4">{audience.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/who-we-serve">
                Learn More About Who We Serve
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </Button>
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
                  alt="Reinforced vault representing trust, confidentiality, and structured protection for compliance-sensitive organizations"
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
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/credentials">
                See Our Full Credentials
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Insights
            </p>
            <h2 className="mb-6">Analytical Perspectives on Compliance Risk</h2>
            <p className="text-lg text-muted-foreground">
              Field-informed analysis on regulatory trends, audit patterns, and decision frameworks for compliance leaders.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Featured Article */}
            <Link
              to={`/insights/${featuredArticle.slug}`}
              className="card-elevated group overflow-hidden row-span-2"
            >
              <div className="p-8 h-full flex flex-col">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                  Featured
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  {featuredArticle.category}
                </span>
                <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredArticle.readTime}
                  </div>
                  <span className="inline-flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                    Read Article <ChevronRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Recent Articles */}
            <div className="flex flex-col gap-4">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.slug}
                  to={`/insights/${article.slug}`}
                  className="card-elevated group p-6 flex flex-col"
                >
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {article.category}
                  </span>
                  <h4 className="text-lg mb-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/insights">
                View All Insights
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-28 lg:py-36 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Your compliance system shouldn't fail you when scrutiny arrives.
          </p>
          <h2 className="mb-12">
            Ready to Build Compliance That Holds?
          </h2>
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
