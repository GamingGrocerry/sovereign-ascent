import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import serviceGovernanceStrategy from "@/assets/service-governance-strategy.jpg";
import serviceRiskRegulatory from "@/assets/service-risk-regulatory.jpg";
import serviceFederalAdvisory from "@/assets/service-federal-advisory.jpg";
import serviceSupplyChain from "@/assets/service-supply-chain.jpg";
import serviceQualityInfrastructure from "@/assets/service-quality-infrastructure.jpg";
import serviceRegulatoryDocs from "@/assets/service-regulatory-docs.jpg";
import serviceAuditReadiness from "@/assets/service-audit-readiness.jpg";
import serviceManagedCompliance from "@/assets/service-managed-compliance.jpg";
import serviceDigitalGovernance from "@/assets/service-digital-governance.jpg";
import serviceProjectRecovery from "@/assets/service-project-recovery.jpg";
import serviceAiGovernance from "@/assets/service-ai-governance.jpg";

const serviceGrid = [
  {
    title: "AI Compliance Advisory",
    description: "Help your AI systems meet emerging regulations like the EU AI Act, with documentation, risk assessments, and governance frameworks.",
    href: "/services/ai-governance",
    image: serviceAiGovernance,
  },
  {
    title: "Audit & Certification Preparation",
    description: "Get ready for ISO audits, customer assessments, and regulatory inspections with organized evidence and strong processes.",
    href: "/services/audit-certification-readiness",
    image: serviceAuditReadiness,
  },
  {
    title: "Compliance Technology Advisory",
    description: "Get advice on selecting and implementing the right compliance and quality management software for your organization.",
    href: "/services/digital-governance",
    image: serviceDigitalGovernance,
  },
  {
    title: "Documentation & SOPs",
    description: "We create the policies, procedures, and documentation systems your organization needs to prove compliance.",
    href: "/services/regulatory-documentation",
    image: serviceRegulatoryDocs,
  },
  {
    title: "Federal & Public Sector Advisory",
    description: "We support government contractors and public-sector-aligned organizations in stabilizing operations, meeting contractual compliance obligations, and scaling with institutional maturity.",
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
    title: "Ongoing Compliance Support",
    description: "Get ongoing compliance management, monitoring, and maintenance for organizations that need sustained advisory support.",
    href: "/services/managed-compliance",
    image: serviceManagedCompliance,
  },
  {
    title: "Project Recovery",
    description: "When projects go off track, we stabilize operations, fix documentation gaps, and restore quality controls quickly.",
    href: "/services/project-recovery",
    image: serviceProjectRecovery,
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


export default function Services() {
  return (
    <Layout>
      <SEOHead
        title="Compliance Advisory Services | ISO, Audit Prep, QMS | ElevateQCS"
        description="We help businesses solve their most complex compliance challenges — from building quality management systems to preparing for audits and navigating regulatory requirements."
        url="https://elevateqcs.com/services"
        keywords={["compliance advisory services", "ISO 9001 consultant", "audit preparation services", "quality system consulting", "compliance advisory firm", "QMS consultant"]}
      />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 text-center max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
            Our Services
          </p>
          <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
            Our Services
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-12 animate-fade-up-delay-2">
            We help businesses solve their most complex compliance challenges — from 
            building quality management systems to preparing for audits and navigating 
            regulatory requirements.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-up-delay-3 px-2 sm:px-0">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 shrink-0" size={16} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
              <Link to="/rfp">
                Submit a Request for Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Independence Banner */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-primary-foreground">
              <h3 className="text-xl font-serif mb-2">Independent Advisory</h3>
              <p className="text-primary-foreground/70 text-sm">
                We're independent advisors. We don't certify, audit, or replace your legal team. 
                Our job is to help you build compliance systems that work.
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

      {/* Services Grid */}
      <section className="py-28 lg:py-36 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Capabilities
            </p>
            <h2 className="mb-6">
              How We Help
            </h2>
            <p className="text-lg text-muted-foreground">
              Each practice area is led by experienced professionals. Select a 
              service to learn more about our approach and capabilities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceGrid.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="card-elevated group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif mb-3 group-hover:text-accent transition-colors text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm font-medium">
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="relative h-[450px] overflow-hidden">
        <img 
          src={serviceManagedCompliance} 
          alt="Executive advisory environment representing institutional depth and measured counsel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
              <h2 className="text-primary-foreground mb-6">Meeting Expectations Is Only the Beginning</h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
                Our advisory relationships are built on long-term trust, measurable impact, 
                and a commitment to doing what's right. We approach every engagement with 
                the care and professionalism your organization deserves.
              </p>
              <p className="text-primary-foreground/70">
                Integrity is our baseline. Practical results are where we measure ourselves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Entry Services Highlight */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Where to Start
            </p>
            <h2 className="mb-4">Most Clients Begin Here</h2>
            <p className="text-muted-foreground">
              Not sure which service fits? These entry-point engagements deliver measurable results quickly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <Link to="/services/audit-certification-readiness" className="card-elevated p-8 group hover:border-accent/30 transition-all duration-300">
              <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Get an Audit Readiness Check</h3>
              <p className="text-muted-foreground text-sm mb-4">Assess your compliance posture against applicable standards before scrutiny arrives. Most engagements begin within 5 business days.</p>
              <span className="inline-flex items-center text-accent text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link to="/services/regulatory-documentation" className="card-elevated p-8 group hover:border-accent/30 transition-all duration-300">
              <h3 className="text-lg mb-2 group-hover:text-accent transition-colors">Get a Documentation Review</h3>
              <p className="text-muted-foreground text-sm mb-4">Contract documentation review and analysis to identify gaps, improve clarity, and ensure compliance readiness.</p>
              <span className="inline-flex items-center text-accent text-sm font-medium">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Ready to discuss how our services apply to your organization?
          </p>
          <h2 className="mb-12">Start a Confidential Conversation</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Contact
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/rfp">
                Submit a Request for Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
