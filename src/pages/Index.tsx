import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight, Search, Compass, Wrench, Users, BarChart3 } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import aboutPrecision from "@/assets/about-precision.jpg";
import trustVault from "@/assets/trust-vault.jpg";
import governanceBoardroom from "@/assets/governance-boardroom.jpg";
import ethicsBalance from "@/assets/ethics-balance.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";
import ctipProtection from "@/assets/ctip-protection.jpg";
import qmsStructure from "@/assets/qms-structure.jpg";
import advisoryApproach from "@/assets/advisory-approach.jpg";
import InsightsCarousel from "@/components/InsightsCarousel";

const stats = [
  { value: "9+", label: "Years of Regulatory & Operational Advisory Experience" },
  { value: "1,000+", label: "Audits Observed, Supported, and Prepared For" },
  { value: "125+", label: "Compliance & Control Frameworks Delivered" },
  { value: "€500K–€25M", label: "Advisory Exposure Across Project Environments" },
];

const coreServices = [
  {
    title: "Governance & Strategy",
    description: "Governance frameworks that align organizational structure with regulatory obligations and strategic objectives.",
    href: "/services/governance-strategy",
    image: governanceBoardroom,
  },
  {
    title: "Risk, Regulatory & Compliance",
    description: "Structured control environments that transform regulatory exposure into defensible operational discipline.",
    href: "/services/risk-regulatory-compliance",
    image: ethicsBalance,
  },
  {
    title: "Federal & Public Sector Advisory",
    description: "Operational stability, contractual compliance, and institutional maturity for government contractors.",
    href: "/services/federal-public-sector",
    image: heroArchitecture,
  },
  {
    title: "Supply Chain, Human Rights & Due Diligence",
    description: "Human rights programs and supply chain due diligence aligned with FAR 52.222-50, EU CS3D, and international standards.",
    href: "/services/supply-chain-human-rights",
    image: ctipProtection,
  },
  {
    title: "Quality & Operational Infrastructure",
    description: "Quality management systems designed for scalability, auditability, and internal ownership.",
    href: "/services/quality-operational-infrastructure",
    image: qmsStructure,
  },
  {
    title: "Audit, Inspection & Certification Readiness",
    description: "Organized evidence, strengthened control narratives, and structured corrective action for assessment readiness.",
    href: "/services/audit-certification-readiness",
    image: auditPrecision,
  },
];

const ecamPhases = [
  { icon: Search, name: "Diagnose", description: "Identify gaps with real operational impact", phaseId: "phase-01" },
  { icon: Compass, name: "Architect", description: "Structure systems teams can use", phaseId: "phase-02" },
  { icon: Wrench, name: "Implement", description: "Guide deployment with internal clarity", phaseId: "phase-03" },
  { icon: Users, name: "Embed", description: "Support adoption through role-based expectations", phaseId: "phase-04" },
  { icon: BarChart3, name: "Monitor", description: "Enable ongoing control and evidence maintenance", phaseId: "phase-05" },
];

const trustSignals = [
  "Vendor-Neutral Advisory",
  "NDA-First Engagement",
  "Field-Tested Methodologies",
  "Confidential & Discreet",
];

export default function Index() {
  const navigate = useNavigate();
  return (
    <Layout>
      <SEOHead
        title="ElevateQCS | Quality & Compliance Advisory for Regulated Industries"
        description="ElevateQCS is an independent advisory firm specializing in QMS architecture, CTIP program development, and audit readiness for organizations in regulated environments and government contracting."
        url="https://elevateqcs.com"
        keywords={["CTIP as a Service", "FAR 52.222-50 implementation", "GovCon QMS architecture", "quality management system", "compliance advisory", "ISO 9001 alignment"]}
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
              description: "Independent advisory firm specializing in QMS architecture, CTIP program development, and audit readiness for regulated industries and government contractors.",
              foundingDate: "2024",
              areaServed: ["US", "EU", "Middle East"],
              serviceType: [
                "Governance & Strategy",
                "Risk, Regulatory & Compliance",
                "Federal & Public Sector Advisory",
                "Quality & Operational Infrastructure",
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
            },
            {
              "@type": "WebPage",
              "@id": "https://elevateqcs.com/#webpage",
              url: "https://elevateqcs.com",
              name: "ElevateQCS | Quality & Compliance Advisory for Regulated Industries",
              isPartOf: { "@id": "https://elevateqcs.com/#website" },
              about: { "@id": "https://elevateqcs.com/#organization" },
              description: "Architecting compliance excellence for organizations in regulated environments and government contracting.",
              inLanguage: "en-US",
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:scale-105"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
        
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 text-center max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
              Quality & Compliance Advisory
            </p>
            <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
              Operational Risk That Survives Scrutiny — Before It Costs You
            </h1>
            <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-2xl font-light !leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-6 animate-fade-up-delay-2">
              We architect governance infrastructure that strengthens internal controls, 
              institutionalizes compliance discipline, and aligns operations with contractual 
              and regulatory requirements — so growth doesn't create hidden risk.
            </p>
            <p className="text-primary-foreground/50 !text-[10px] sm:!text-sm md:!text-base font-light tracking-wide max-w-2xl mx-auto mb-6 sm:mb-12 animate-fade-up-delay-2">
              Built for regulated, contract-driven environments where operational gaps carry financial consequence.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-up-delay-3 px-2 sm:px-0">
              <Button variant="hero" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
                <Link to="/contact">
                  Request a Confidential Consultation
                  <ArrowRight className="ml-2 shrink-0" size={16} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
                <Link to="/services">
                  Explore Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/40">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary-foreground/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={aboutPrecision} 
                  alt="Architectural precision representing structured compliance readiness for risk-exposed organizations" 
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-accent/20 rounded-sm -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-accent/10 rounded-sm -z-10" />
            </div>
            
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

      {/* Insights Section */}
      <section className="py-28 lg:py-36 bg-secondary/30 section-luxury">
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

          <InsightsCarousel />

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/insights">
                View All Insights
                <ChevronRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview — 6-card grid */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Services
            </p>
            <h2 className="mb-6">
              A Wide Range of Services for Regulated Environments
            </h2>
            <p className="text-lg">
              From governance strategy to audit readiness, our multidisciplinary 
              capabilities are designed for organizations where compliance is 
              fundamental to operational viability.
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

      {/* Choosing the Right Service — brief reference */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Choosing the Right Service
              </p>
              <h2 className="mb-6">
                Advisory for Every Stage of Compliance Maturity
              </h2>
              <p className="text-lg mb-6">
                Whether you're a federal contractor stabilizing operations, a defence 
                firm preparing for certification, or a growth-stage company entering 
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
                Learn About Our Methodology
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
               ElevateQCS operates with complete vendor neutrality. Our recommendations 
                serve your organizational interests — nothing else. In the event we 
                identify a vendor or service from which we may receive referral 
                benefits, we disclose this transparently during initial consultations — 
                before any recommendation is formalized.
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
