import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import industriesHero from "@/assets/industries-hero.jpg";
import industryDefenseHero from "@/assets/industry-defense-hero.jpg";
import industryFederalIt from "@/assets/industry-federal-it.jpg";
import industryMedical from "@/assets/industry-medical-devices.jpg";
import industryAI from "@/assets/industry-ai-tech.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryCybersecurity from "@/assets/industry-cybersecurity.jpg";
import industryInfrastructure from "@/assets/industry-infrastructure.jpg";
import industryIntlDev from "@/assets/industry-international-dev.jpg";
import industryClimate from "@/assets/industry-climate-energy.jpg";

const industries = [
  {
    name: "Defense & Aerospace",
    description: "Governance, quality, and compliance architecture for defence contractors and aerospace manufacturers operating under FAR/DFARS, CMMC, AS9100, and ITAR requirements.",
    href: "/industries/defense",
    image: industryDefenseHero,
  },
  {
    name: "Federal IT & Systems Integration",
    description: "Compliance infrastructure for federal IT service providers and systems integrators navigating FedRAMP, FISMA, and agency-specific security requirements.",
    href: "/industries/federal-it",
    image: industryFederalIt,
  },
  {
    name: "Medical Devices & Life Sciences",
    description: "Quality management systems and regulatory infrastructure for medical device companies entering FDA, EU MDR, and ISO 13485 regulated markets.",
    href: "/industries/medical-devices",
    image: industryMedical,
  },
  {
    name: "Artificial Intelligence & Deep Tech",
    description: "Governance frameworks and compliance architecture for AI companies preparing for enterprise procurement, EU AI Act, and regulatory scrutiny.",
    href: "/industries/ai-deep-tech",
    image: industryAI,
  },
  {
    name: "Advanced Manufacturing",
    description: "Quality systems and operational infrastructure for manufacturing firms scaling operations while maintaining ISO 9001 and customer-specific quality requirements.",
    href: "/industries/advanced-manufacturing",
    image: industryManufacturing,
  },
  {
    name: "Cybersecurity",
    description: "Governance and compliance frameworks for cybersecurity firms navigating CMMC, FedRAMP, SOC 2, and federal acquisition security requirements.",
    href: "/industries/cybersecurity",
    image: industryCybersecurity,
  },
  {
    name: "Infrastructure & Engineering",
    description: "Compliance and quality systems for infrastructure and engineering firms operating under government contracting, safety, and environmental regulatory requirements.",
    href: "/industries/infrastructure",
    image: industryInfrastructure,
  },
  {
    name: "International Development & Overseas Contracting",
    description: "Governance, CTIP compliance, and regulatory infrastructure for organizations with overseas operations and international development contracts.",
    href: "/industries/international-development",
    image: industryIntlDev,
  },
  {
    name: "Climate & Energy",
    description: "Regulatory compliance, ESG governance, and quality systems for clean energy, climate technology, and energy infrastructure organizations.",
    href: "/industries/climate-energy",
    image: industryClimate,
  },
];

export default function Industries() {
  return (
    <Layout>
      <SEOHead
        title="Industries | ElevateQCS"
        description="Deep industry knowledge and practical regulatory expertise for defense, federal IT, medical devices, AI, manufacturing, cybersecurity, infrastructure, and climate sectors."
        url="https://elevateqcs.com/industries"
        keywords={["industry compliance advisory", "defense governance", "medical device QMS", "AI compliance", "manufacturing quality systems"]}
      />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${industriesHero})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 text-center max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
            Industries
          </p>
          <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
            Deep Industry Knowledge. Practical Regulatory Expertise. Measurable Impact.
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto animate-fade-up-delay-2">
            We combine sector-specific insight with governance and regulatory infrastructure
            design to help organizations operate with confidence in highly regulated and
            oversight-intensive environments.
          </p>
        </div>
      </section>

      {/* Our Industry Focus */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Industry Focus
            </p>
            <h2 className="mb-8">
              Specialized in Sectors Where Compliance Is Mission-Critical
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We do not serve every industry. We specialize in sectors where governance,
              compliance, and regulatory integrity are mission-critical — where operational
              gaps carry contractual, financial, or legal consequence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.href}
                to={industry.href}
                className="card-elevated group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-serif mb-3 group-hover:text-accent transition-colors text-foreground">
                    {industry.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {industry.description}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm font-medium">
                    Explore Industry
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-narrow relative z-10 text-center">
          <h2 className="text-primary-foreground mb-6">Ready to Discuss Your Industry?</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Our advisory team combines deep sector knowledge with governance and regulatory expertise
            to help organizations in your industry build sustainable compliance infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
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
