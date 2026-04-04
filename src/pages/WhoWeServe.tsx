import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building2, Rocket, Briefcase, AlertTriangle, CheckCircle } from "lucide-react";
import whoWeServeHero from "@/assets/who-we-serve-hero.jpg";
import whoWeServeQuote from "@/assets/who-we-serve-quote.jpg";

const audiences = [
  {
    icon: Building2,
    title: "Government Contractors",
    description: "Federal contractors and subcontractors who need defensible compliance systems before audits, contract milestones, or regulatory assessments.",
    risks: [
      "Quality system reviews and surveillance audits",
      "Anti-trafficking compliance requirements (CTIP)",
      "ISO 9001/AS9100 certification maintenance",
      "Subcontractor compliance flow-down obligations",
      "Customer quality clauses and contract-specific requirements",
    ],
    support: [
      "Quality management system architecture aligned with federal requirements",
      "CTIP program development and implementation support",
      "Pre-audit readiness assessment and gap remediation",
      "Corrective action planning and root cause analysis",
      "Internal audit program development",
    ],
    note: "For detailed federal contracting advisory, visit our ",
    noteLink: "/govcon",
    noteLinkText: "GovCon page",
  },
  {
    icon: Rocket,
    title: "Growing Businesses",
    description: "Companies entering regulated markets or preparing for enterprise customers who need scalable compliance foundations that support growth and funding.",
    risks: [
      "Scaling operations without scalable compliance systems",
      "Entering regulated markets without regulatory experience",
      "Customer due diligence revealing compliance gaps",
      "First-time certification or assessment requirements",
      "Investor or customer expectations exceeding internal capabilities",
    ],
    support: [
      "Compliance system design for rapid scaling",
      "Regulatory landscape assessment and requirement mapping",
      "Management system architecture from first principles",
      "Evidence and documentation frameworks",
      "Training and capability transfer for internal ownership",
    ],
  },
  {
    icon: Briefcase,
    title: "Established Companies",
    description: "Mid-size organizations that need to upgrade or formalize existing quality systems to meet evolving regulatory requirements or new market expectations.",
    risks: [
      "Legacy quality systems that no longer meet current standards",
      "New regulatory requirements from expanding into additional markets",
      "Customer audits revealing gaps in formalized processes",
      "Difficulty integrating multiple compliance obligations",
      "Internal teams stretched thin managing compliance alongside operations",
    ],
    support: [
      "Quality system modernization and gap closure",
      "Multi-standard integration (ISO 9001, AS9100, ISO 13485)",
      "Documentation restructuring and process standardization",
      "Internal audit capability development",
      "Transition planning for updated standards (e.g., ISO 9001:2026)",
    ],
  },
];

export default function WhoWeServe() {
  return (
    <Layout>
      <SEOHead
        title="Who We Work With | ElevateQCS"
        description="ElevateQCS works with government contractors, growing businesses, and established companies in regulated industries who need practical compliance systems that actually work."
        url="https://elevateqcs.com/who-we-serve"
        keywords={["compliance consulting clients", "quality management consulting", "regulated industry compliance", "compliance help for businesses"]}
      />
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${whoWeServeHero})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Clients
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Who We Work With
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We work with organizations in regulated industries — where getting 
              compliance right directly impacts your ability to win contracts, 
              pass audits, and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our clients share common characteristics: they operate in environments 
              where regulatory compliance, customer oversight, and operational 
              discipline directly impact their ability to win and execute contracts. 
              They need practical, implementable solutions — not theoretical frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* Audience Sections */}
      <section className="py-20 bg-background section-luxury">
        <div className="container-wide">
          <div className="space-y-24">
            {audiences.map((audience, index) => (
              <div key={index} className="relative">
                <div className="grid lg:grid-cols-12 gap-12">
                  {/* Header */}
                  <div className="lg:col-span-4">
                    <div className="sticky top-32">
                      <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                        <audience.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl mb-4">{audience.title}</h2>
                      <p className="text-muted-foreground">
                        {audience.description}
                      </p>
                      {"note" in audience && audience.note && (
                        <p className="text-sm text-accent mt-4">
                          {audience.note}
                          <Link to={audience.noteLink!} className="underline hover:text-accent/80">
                            {audience.noteLinkText}
                          </Link>.
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-8 space-y-8">
                    {/* Risks */}
                    <div className="card-elevated p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-sm bg-destructive/10 flex items-center justify-center">
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        </div>
                        <h3 className="text-lg font-medium">Typical Risks & Challenges</h3>
                      </div>
                      <ul className="space-y-3">
                        {audience.risks.map((risk, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-destructive/60 rounded-full mt-2.5 shrink-0" />
                            {risk}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Support */}
                    <div className="card-elevated p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center">
                          <CheckCircle className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-medium">How We Support</h3>
                      </div>
                      <ul className="space-y-3">
                        {audience.support.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Per-section CTA */}
                    <div className="pt-4">
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/contact">
                          Discuss Your Requirements
                          <ArrowRight className="ml-2" size={16} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {index < audiences.length - 1 && (
                  <div className="mt-24 border-b border-border/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Visual */}
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src={whoWeServeQuote} 
          alt="Abstract ocean waves representing flowing, adaptive compliance structures" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/60 to-secondary/40" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <p className="text-foreground text-xl md:text-2xl font-serif font-light leading-relaxed">
              We work with organizations where compliance directly impacts 
              the ability to operate, grow, and win business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            If your organization needs practical compliance support, 
            we'd welcome the opportunity to discuss how we can help.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Get a Free Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
