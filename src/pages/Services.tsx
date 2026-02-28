import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";
import governanceBoardroom from "@/assets/governance-boardroom.jpg";
import ethicsBalance from "@/assets/ethics-balance.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";
import ctipProtection from "@/assets/ctip-protection.jpg";
import qmsStructure from "@/assets/qms-structure.jpg";
import servicesFramework from "@/assets/services-framework.jpg";
import advisoryApproach from "@/assets/advisory-approach.jpg";
import methodologyCompass from "@/assets/methodology-compass.jpg";
import heroArchitecture from "@/assets/hero-architecture.jpg";

const serviceGrid = [
  {
    title: "Governance & Strategy",
    description: "We design governance frameworks that align organizational structure with regulatory obligations and strategic objectives — establishing the control architecture that sustains long-term operational integrity.",
    href: "/services/governance-strategy",
    image: governanceBoardroom,
  },
  {
    title: "Risk, Regulatory & Compliance",
    description: "We map regulatory landscapes, quantify compliance risk, and build structured control environments that transform regulatory exposure into defensible operational discipline.",
    href: "/services/risk-regulatory-compliance",
    image: ethicsBalance,
  },
  {
    title: "Federal & Public Sector Advisory",
    description: "We support government contractors and public-sector-aligned organizations in stabilizing operations, meeting contractual compliance obligations, and scaling with institutional maturity.",
    href: "/services/federal-public-sector",
    image: heroArchitecture,
  },
  {
    title: "Supply Chain, Human Rights & Due Diligence",
    description: "We structure human rights programs, supply chain due diligence frameworks, and ethical labor compliance systems aligned with FAR 52.222-50, EU CS3D, and international standards.",
    href: "/services/supply-chain-human-rights",
    image: ctipProtection,
  },
  {
    title: "Quality & Operational Infrastructure",
    description: "We architect quality management systems and operational control frameworks that function in real workflows — designed for scalability, auditability, and internal ownership.",
    href: "/services/quality-operational-infrastructure",
    image: qmsStructure,
  },
  {
    title: "Regulatory Documentation & Administrative Solutions",
    description: "We develop documentation systems, standard operating procedures, and administrative frameworks that ensure regulatory evidence is organized, accessible, and audit-ready.",
    href: "/services/regulatory-documentation",
    image: servicesFramework,
  },
  {
    title: "Audit, Inspection & Certification Readiness",
    description: "We prepare organizations for third-party assessments, customer audits, and certification reviews by organizing evidence, strengthening control narratives, and structuring corrective action.",
    href: "/services/audit-certification-readiness",
    image: auditPrecision,
  },
  {
    title: "Managed Compliance & Governance Services",
    description: "We provide ongoing compliance management, governance monitoring, and regulatory maintenance services for organizations requiring sustained advisory support beyond project-based engagements.",
    href: "/services/managed-compliance",
    image: advisoryApproach,
  },
  {
    title: "Digital Governance & Technology Enablement",
    description: "We advise on the integration of governance, risk, and compliance technologies — ensuring digital transformation efforts are aligned with regulatory requirements and operational controls.",
    href: "/services/digital-governance",
    image: methodologyCompass,
  },
];

const audiences = [
  { name: "Federal contractors", detail: "navigating FAR/DFARS and agency-specific requirements" },
  { name: "Defense & aerospace companies", detail: "requiring CMMC, AS9100, and ITAR compliance" },
  { name: "Medical device & life sciences startups", detail: "entering FDA and EU MDR regulated markets" },
  { name: "AI & deep tech companies", detail: "preparing for enterprise procurement and regulatory scrutiny" },
  { name: "Advanced manufacturing firms", detail: "scaling quality systems across operations" },
  { name: "EU-exposed companies", detail: "with human rights due diligence obligations under CS3D" },
];

export default function Services() {
  return (
    <Layout>
      <SEOHead
        title="Advisory Services | ElevateQCS"
        description="A wide range of governance, regulatory compliance, and operational advisory services for federal contractors, defense firms, and growth-stage companies in regulated industries."
        url="https://elevateqcs.com/services"
        keywords={["compliance advisory services", "governance strategy", "federal contractor advisory", "audit readiness", "CTIP compliance", "QMS architecture", "managed compliance"]}
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
            A Wide Range of Services. Extensive Experience. Measurable Results.
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto mb-3 sm:mb-4 animate-fade-up-delay-2">
            We treat regulatory complexity as an opportunity for institutional growth.
            Our specialists combine governance expertise, regulatory depth, and operational 
            infrastructure design to help organizations solve their most complex compliance 
            and structural challenges.
          </p>
          <p className="text-primary-foreground/60 !text-[10px] sm:!text-base font-light tracking-wide max-w-3xl mx-auto mb-6 sm:mb-12 animate-fade-up-delay-2">
            With deep industry experience, we help companies build sustainable, defensible, and scalable systems.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-up-delay-3 px-2 sm:px-0">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
              <Link to="/contact">
                Request a Consultation
                <ArrowRight className="ml-2 shrink-0" size={16} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
              <Link to="/contact">
                Submit a Request for Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Independence Doctrine Banner */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-primary-foreground">
              <h3 className="text-xl font-serif mb-2">Vendor-Neutral Advisory</h3>
              <p className="text-primary-foreground/70 text-sm">
                We do not certify, approve, or authorize compliance programs, nor do we 
                replace legal or regulatory counsel. Our role is to support organizations 
                in building internal systems that are operationally effective, auditable, 
                and aligned with applicable requirements.
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
              Services Built for Institutional Resilience
            </h2>
            <p className="text-lg text-muted-foreground">
              Each practice area is led by specialists with deep regulatory and 
              operational experience. Select a service to learn more about our 
              approach and capabilities.
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
          src={advisoryApproach} 
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
                and a commitment to public interest. We approach every engagement with the 
                institutional rigour of a firm that understands what is at stake.
              </p>
              <p className="text-primary-foreground/70">
                Integrity is not a differentiator — it is a baseline. Strategic impact 
                is where we measure ourselves.
              </p>
            </div>
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
              <Link to="/contact">
                Submit a Request for Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
