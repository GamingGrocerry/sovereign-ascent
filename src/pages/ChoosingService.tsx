import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesHero from "@/assets/services-hero.jpg";
import sectorFederal from "@/assets/sector-federal-contractors.jpg";
import sectorDefense from "@/assets/sector-defense-aerospace.jpg";
import sectorMedical from "@/assets/sector-medical-life-sciences.jpg";
import sectorAI from "@/assets/sector-ai-deep-tech.jpg";
import sectorManufacturing from "@/assets/sector-advanced-manufacturing.jpg";
import sectorEU from "@/assets/sector-eu-exposed.jpg";

const sectors = [
  {
    name: "Federal Contractors",
    detail: "Navigating FAR/DFARS and agency-specific requirements",
    href: "/sectors/federal-contractors",
    image: sectorFederal,
  },
  {
    name: "Defense & Aerospace Companies",
    detail: "Requiring CMMC, AS9100, and ITAR compliance",
    href: "/sectors/defense-aerospace",
    image: sectorDefense,
  },
  {
    name: "Medical Device & Life Sciences Startups",
    detail: "Entering FDA and EU MDR regulated markets",
    href: "/sectors/medical-life-sciences",
    image: sectorMedical,
  },
  {
    name: "AI & Deep Tech Companies",
    detail: "Preparing for enterprise procurement and regulatory scrutiny",
    href: "/sectors/ai-deep-tech",
    image: sectorAI,
  },
  {
    name: "Advanced Manufacturing Firms",
    detail: "Scaling quality systems across operations",
    href: "/sectors/advanced-manufacturing",
    image: sectorManufacturing,
  },
  {
    name: "EU-Exposed Companies",
    detail: "With human rights due diligence obligations under CS3D",
    href: "/sectors/eu-exposed",
    image: sectorEU,
  },
];

export default function ChoosingService() {
  return (
    <Layout>
      <SEOHead
        title="Choosing the Right Service | ElevateQCS"
        description="Find the right governance, compliance, and operational advisory services for your sector — from federal contracting to life sciences, defense, AI, and manufacturing."
        url="https://elevateqcs.com/choosing-the-right-service"
        keywords={["compliance advisory", "sector services", "federal contractors", "defense compliance", "medical device QMS", "AI regulatory", "manufacturing quality"]}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${servicesHero})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 text-center max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
            Choosing the Right Service
          </p>
          <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
            Multidisciplinary Advisory for Regulated, Contract-Driven Environments
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-12 animate-fade-up-delay-2">
            Whether you're a regulated startup entering a complex market, a federal
            contractor stabilizing operations, or a scaling organization preparing
            for audit or certification, our multidisciplinary services are designed
            to support sustainable and compliant growth.
          </p>
        </div>
      </section>

      {/* Sector Grid */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Select Your Sector
            </p>
            <h2 className="mb-6">
              Advisory Tailored to Your Industry
            </h2>
            <p className="text-lg text-muted-foreground">
              Each sector carries distinct regulatory obligations, procurement requirements,
              and operational pressures. Select your environment to explore the services
              most relevant to your organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <Link
                key={sector.href}
                to={sector.href}
                className="card-elevated group overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-2 h-2 bg-accent rounded-full mb-4" />
                  <h3 className="text-lg font-serif mb-2 group-hover:text-accent transition-colors text-foreground">
                    {sector.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {sector.detail}
                  </p>
                  <span className="inline-flex items-center text-accent text-sm font-medium">
                    Explore Services
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
          <h2 className="text-primary-foreground mb-6">Not Sure Where to Start?</h2>
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
            Our team can help identify the right combination of services based on your
            regulatory environment, growth stage, and operational priorities.
          </p>
          <Button variant="hero" size="xl" asChild>
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
