import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building2, Rocket, AlertTriangle, CheckCircle } from "lucide-react";
import whoWeServeHero from "@/assets/who-we-serve-hero.jpg";
import whoWeServeQuote from "@/assets/who-we-serve-quote.jpg";

const audiences = [
  {
    icon: Building2,
    title: "Prime Contractors",
    description: "Close the gap between contractual compliance expectations and operational systems. Teams needing defensible compliance systems before audits, contract milestones, or regulatory assessments.",
    risks: [
      "DCMA quality system reviews and surveillance audits",
      "FAR 52.222-50 CTIP compliance requirements",
      "ISO 9001/AS9100 certification maintenance",
      "Subcontractor compliance flow-down obligations",
      "Customer quality clauses and contract-specific requirements",
    ],
    support: [
      "Quality management system architecture aligned with regulatory expectations",
      "CTIP program development and implementation support",
      "Pre-audit readiness assessment and gap remediation",
      "Corrective action planning and root cause analysis",
      "Internal audit program development",
    ],
  },
  {
    icon: Shield,
    title: "Subcontractors & Suppliers",
    description: "Prepare internal controls and evidence structures to satisfy prime and customer requirements. Organizations needing structured compliance readiness to meet prime contractor expectations.",
    risks: [
      "Prime contractor audit exposure and flow-down compliance",
      "Quality requirements without internal QMS infrastructure",
      "CTIP program requirements as a supply chain participant",
      "Customer questionnaires and compliance assessments",
      "Resource constraints affecting compliance investment",
    ],
    support: [
      "Right-sized QMS development for organizational scale",
      "Flow-down compliance mapping and gap analysis",
      "CTIP policy and program development",
      "Documentation systems that support growth",
      "Training programs for compliance ownership",
    ],
  },
  {
    icon: Rocket,
    title: "High-Growth Regulated Companies",
    description: "Establish scalable compliance foundations that support growth, funding, and enterprise footprints. Companies preparing for enterprise customers or regulated markets.",
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
];

export default function WhoWeServe() {
  return (
    <Layout>
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
              We Serve Organizations Where Compliance Risk Meets Operational Demand
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We work with organizations operating in regulated and high-scrutiny 
              environments — those where compliance is not optional but fundamental 
              to operational viability and competitive positioning.
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
              Whether navigating regulatory requirements or building 
              compliance infrastructure for the first time, they need practical, 
              implementable solutions — not theoretical frameworks.
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
              We serve organizations where compliance is not optional — it's 
              fundamental to operational viability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Ready to Discuss Your Needs?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            If you recognize your organization in these descriptions, we'd welcome 
            the opportunity to discuss how our advisory services might support 
            your compliance objectives.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request a Confidential Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
