import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Search, Compass, Wrench, Users, BarChart3, Shield, Layers, Clock, Activity } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import trustVault from "@/assets/trust-vault.jpg";
import advisoryApproach from "@/assets/advisory-approach.jpg";
import serviceGovernanceStrategy from "@/assets/service-governance-strategy.jpg";
import serviceRiskRegulatory from "@/assets/service-risk-regulatory.jpg";
import serviceFederalAdvisory from "@/assets/service-federal-advisory.jpg";
import serviceSupplyChain from "@/assets/service-supply-chain.jpg";
import serviceQualityInfrastructure from "@/assets/service-quality-infrastructure.jpg";
import serviceAuditReadiness from "@/assets/service-audit-readiness.jpg";
import InsightsCarousel from "@/components/InsightsCarousel";

const stats = [
  { value: "9+", label: "Years of Compliance Advisory Experience" },
  { value: "5", label: "Industries Served: Defense, Manufacturing, Technology, Healthcare, Energy" },
];

const coreServices = [
  {
    title: "Audit & Certification Preparation",
    description: "Get ready for ISO audits, customer assessments, and regulatory inspections with organized evidence and strong processes.",
    href: "/services/audit-certification-readiness",
    image: serviceAuditReadiness,
  },
  {
    title: "Federal & Public Sector Advisory",
    description: "Compliance support for government contractors, subcontractors, and organizations entering the federal marketplace.",
    href: "/services/federal-public-sector",
    image: serviceFederalAdvisory,
  },
  {
    title: "Governance & Strategy",
    description: "Build governance frameworks that align your organization's structure with regulatory requirements and business goals.",
    href: "/services/governance-strategy",
    image: serviceGovernanceStrategy,
  },
  {
    title: "Quality Management Systems",
    description: "We design and build quality management systems (ISO 9001, AS9100, ISO 13485) that your team can use, maintain, and improve.",
    href: "/services/quality-operational-infrastructure",
    image: serviceQualityInfrastructure,
  },
  {
    title: "Risk & Regulatory Compliance",
    description: "We map your regulatory obligations, identify compliance gaps, and build the controls you need to stay compliant.",
    href: "/services/risk-regulatory-compliance",
    image: serviceRiskRegulatory,
  },
  {
    title: "Supply Chain Compliance",
    description: "We help you build supply chain oversight programs, including ethical labor compliance and due diligence frameworks.",
    href: "/services/supply-chain-human-rights",
    image: serviceSupplyChain,
  },
];

const ecamPhases = [
  { icon: Search, name: "Assess", description: "Understand where you stand today", phaseId: "phase-01" },
  { icon: Compass, name: "Design", description: "Build the right system for your needs", phaseId: "phase-02" },
  { icon: Wrench, name: "Build", description: "Put the system into practice", phaseId: "phase-03" },
  { icon: Users, name: "Train", description: "Make sure your team can run it", phaseId: "phase-04" },
  { icon: BarChart3, name: "Support", description: "Keep everything on track over time", phaseId: "phase-05" },
];

const trustSignals = [
  "Vendor-Neutral Advice",
  "Confidential Engagement",
  "Proven Methods",
  "Discreet & Professional",
];

export default function Index() {
  const navigate = useNavigate();
  return (
    <Layout>
      <SEOHead
        title="ElevateQCS | Quality & Compliance Consulting for Regulated Industries"
        description="ElevateQCS is an independent compliance consulting firm. We help businesses build quality management systems, prepare for audits, and meet regulatory requirements."
        url="https://elevateqcs.com"
        keywords={["compliance consultant", "quality management consultant", "ISO 9001 help", "audit preparation services", "regulatory compliance help", "QMS consultant"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://elevateqcs.com/#organization",
              name: "Elevate Quality Compliance Solutions LLC",
              alternateName: "ElevateQCS",
              url: "https://elevateqcs.com",
              logo: {
                "@type": "ImageObject",
                url: "https://elevateqcs.com/logos/elevatequcs-logo-blue-hd.png",
              },
              description: "Independent compliance consulting firm helping businesses build quality management systems, prepare for audits, and meet regulatory requirements.",
              foundingDate: "2026",
              areaServed: ["US", "EU", "Middle East"],
              serviceType: [
                "Quality Management Systems",
                "Audit Preparation",
                "Regulatory Compliance",
                "Governance & Strategy",
              ],
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": "https://elevateqcs.com/#website",
              url: "https://elevateqcs.com",
              name: "ElevateQCS",
              publisher: { "@id": "https://elevateqcs.com/#organization" },
              inLanguage: "en-US",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://elevateqcs.com/acronyms?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "WebPage",
              "@id": "https://elevateqcs.com/#webpage",
              url: "https://elevateqcs.com",
              name: "ElevateQCS | Quality & Compliance Consulting for Regulated Industries",
              isPartOf: { "@id": "https://elevateqcs.com/#website" },
              about: { "@id": "https://elevateqcs.com/#organization" },
              description: "Quality and compliance consulting for businesses in regulated industries.",
              inLanguage: "en-US",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:scale-105"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-16 sm:py-24 max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10 sm:mb-14 animate-fade-up">
            <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-4">
              Quality & Compliance Advisory
            </p>
            <h1 className="text-primary-foreground mb-4 sm:mb-6 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-5xl !leading-tight">
              Build Compliance Systems That Actually Work
            </h1>
            <p className="text-primary-foreground/80 !text-xs sm:!text-base md:!text-lg font-light !leading-relaxed max-w-2xl">
              We help businesses build quality management systems, prepare for audits, 
              and meet regulatory requirements — so you can focus on growing your business 
              instead of worrying about compliance gaps.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14 animate-fade-up-delay-1">
            {[
              {
                title: "Unified Compliance Systems",
                desc: "We connect your quality, safety, and regulatory systems so everything works together — no more compliance silos or duplicated effort.",
              },
              {
                title: "Systems That Grow With You",
                desc: "Whether you're 20 people or 2,000, we build compliance infrastructure that scales without breaking or slowing you down.",
              },
              {
                title: "Always Audit-Ready",
                desc: "We design your workflows so compliance evidence is captured automatically — no more scrambling before an audit.",
              },
              {
                title: "Your Team Owns It",
                desc: "We build systems your people actually use and understand. When we leave, your team runs the show independently.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-sm p-5 sm:p-6 hover:bg-primary-foreground/10 transition-colors"
              >
                <h3 className="text-primary-foreground text-sm sm:text-base font-semibold mb-2">
                  {pillar.title}
                </h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Value Statement + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 animate-fade-up-delay-2">
            <blockquote className="max-w-2xl border-l-2 border-accent pl-5 sm:pl-6">
              <p className="text-primary-foreground/90 font-serif text-sm sm:text-base md:text-lg font-light leading-relaxed italic">
                "In regulated industries, your quality system is one of your most 
                valuable business assets. We help you build it right."
              </p>
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button variant="hero" size="lg" asChild className="!text-xs sm:!text-base !px-4 sm:!px-8">
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 shrink-0" size={16} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="!text-xs sm:!text-base !px-4 sm:!px-8">
                <Link to="/services">
                  See How We Help
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-14 lg:py-20 bg-background">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">
                Insights
              </p>
              <h2 className="!text-2xl lg:!text-3xl">What Compliance Leaders Are Reading</h2>
            </div>
            <Button variant="outline" size="sm" asChild className="self-start sm:self-auto">
              <Link to="/insights">
                View All
                <ChevronRight className="ml-1" size={14} />
              </Link>
            </Button>
          </div>

          <InsightsCarousel />
        </div>
      </section>

      {/* Entry Services */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Most Popular
            </p>
            <h2 className="mb-4">Where Most Clients Start</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need to pass an upcoming audit or get a struggling project back on track, these services deliver results fast.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link to="/services/audit-certification-readiness" className="card-elevated p-8 text-center group hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Audit Readiness</h3>
              <p className="text-muted-foreground text-sm mb-4">Find out if you're ready for your next audit — before the auditor does.</p>
              <span className="inline-flex items-center text-accent text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/services/regulatory-documentation" className="card-elevated p-8 text-center group hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">SOW & Documentation</h3>
              <p className="text-muted-foreground text-sm mb-4">Get your contracts, SOPs, and compliance documents organized and audit-proof.</p>
              <span className="inline-flex items-center text-accent text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/services/project-recovery" className="card-elevated p-8 text-center group hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center mx-auto mb-4">
                <Activity className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Project Recovery</h3>
              <p className="text-muted-foreground text-sm mb-4">Struggling project? We stabilize operations and get things back on track fast.</p>
              <span className="inline-flex items-center text-accent text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Diagnostic Tools Section */}
      <section className="py-20 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">
                <Activity className="w-3.5 h-3.5 inline mr-1.5 -mt-0.5" />
                Free Tools
              </p>
              <h2 className="!text-2xl lg:!text-3xl">Free Compliance Assessments</h2>
            </div>
            <Button variant="outline" size="sm" asChild className="self-start sm:self-auto">
              <Link to="/tools">
                All Tools
                <ChevronRight className="ml-1" size={14} />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "GovCon Readiness Score", desc: "Evaluate governance structures for U.S. government supply chain participation.", time: "3–5 min", href: "/tools/govcon-readiness", icon: Shield },
              { title: "Compliance Framework Builder", desc: "Receive a tailored compliance roadmap based on your regulatory environment.", time: "2–4 min", href: "/tools/compliance-framework-builder", icon: Layers },
              { title: "QMS Gap Analysis", desc: "Assess quality management system maturity and identify areas for improvement.", time: "3–5 min", href: "/tools/qms-gap-analysis", icon: BarChart3 },
            ].map((tool) => (
              <Link key={tool.href} to={tool.href} className="card-elevated group p-6">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <tool.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="!text-base mb-2 group-hover:text-accent transition-colors">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{tool.time}</span>
                  <span className="text-accent text-xs font-medium inline-flex items-center">Run Assessment <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" /></span>
                </div>
              </Link>
            ))}
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
              How We Help
            </h2>
            <p className="text-lg">
              From building your first quality system to preparing for complex audits, 
              we offer practical advisory services for businesses in regulated industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="card-elevated group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
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

      {/* Choosing the Right Service */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Not Sure Where to Start?
              </p>
              <h2 className="mb-6">
                Advisory for Every Stage of Compliance Maturity
              </h2>
              <p className="text-lg mb-6">
                Whether you're a federal contractor stabilizing operations, a company 
                preparing for certification, or a growth-stage business entering 
                regulated markets — our services are structured to meet you where you are.
              </p>
              <Button variant="outline" size="lg" asChild>
                  <Link to="/choosing-the-right-service">
                  Explore How We Can Help
                  <ChevronRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={advisoryApproach} 
                  alt="Institutional advisory environment representing tailored compliance services" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ECAM Methodology Preview */}
      <section className="py-28 lg:py-36 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Methodology
            </p>
            <h2 className="mb-6">Our Proven Process</h2>
            <p className="text-lg text-muted-foreground">
              Every engagement follows a clear five-step process: understand your situation, 
              design the right system, help you implement it, train your team, and set up 
              ongoing monitoring.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-4 lg:gap-8 mb-12">
            {ecamPhases.map((phase, index) => (
              <div key={phase.name} className="flex items-center">
                <button
                  className="flex flex-col items-center text-center group flex-1 md:flex-initial cursor-pointer"
                  onClick={() => {
                    navigate(`/methodology#${phase.phaseId}`);
                  }}
                >
                  <div className="w-16 h-16 rounded-sm bg-primary text-primary-foreground flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:scale-110 mb-3">
                    <phase.icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide mb-1 group-hover:text-accent transition-colors">
                    {phase.name}
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-[160px]">
                    {phase.description}
                  </p>
                </button>
                {index < ecamPhases.length - 1 && (
                  <div className="hidden md:block w-8 lg:w-12 h-px bg-gradient-to-r from-border to-accent/30 mx-2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/methodology">
                Learn About Our Process
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
                Independent & Objective Advice
              </h2>
              <p className="text-lg mb-8">
                We don't sell software or certifications. We give you honest, practical 
                advice based on what your organization actually needs. If we ever have a 
                financial relationship with a vendor we recommend, we tell you upfront.
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
            
            <div className="relative">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={trustVault} 
                  alt="Reinforced vault representing trust, confidentiality, and structured protection for compliance-sensitive organizations"
                  className="w-full h-[500px] object-cover"
                />
              </div>
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
          <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-2xl mx-auto">
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
            Ready to Get Started?
          </h2>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Book a Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
          <p className="text-muted-foreground text-sm mt-8">
            All consultations are confidential
          </p>
        </div>
      </section>
    </Layout>
  );
}
