import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, AlertTriangle, CheckCircle, Target, Clock, Users } from "lucide-react";
import industryDefenseHero from "@/assets/industry-defense-hero.jpg";

const breakdownItems = [
  "Repeated audit findings across cycles",
  "Documentation disconnected from real operations",
  "Weak corrective action ownership",
  "Supplier nonconformance trends discovered too late",
  "Overextended quality leaders carrying structural gaps",
];

const controlAreas = [
  {
    title: "Integrated QMS Architecture",
    description: "We align AS9100/IA9100, CMMC 2.0, and FAR/DFARS controls into one coherent operational system — not parallel documentation silos.",
  },
  {
    title: "Cross-Standard Gap Analysis",
    description: "We identify overlaps to leverage and gaps that create audit exposure.",
  },
  {
    title: "Supplier & Procurement Reinforcement",
    description: "Structured supplier qualification, inspection controls, and accountability mechanisms tied to procurement decisions.",
  },
  {
    title: "Internal Audit Strengthening",
    description: "Building audit capability internally — focused on root cause discipline and corrective action closure velocity.",
  },
  {
    title: "60–90 Day Implementation Sprint",
    description: "Structured execution with weekly milestones, leadership alignment, and monitored rollout across departments.",
  },
];

const idealClients = [
  "Active DoD or federal contractors under compliance pressure",
  "Organizations facing audit findings or CMMC certification timelines",
  "Leadership willing to implement structural change — not just update procedures",
  "Teams prepared to invest 60–90 days in disciplined execution",
];

const engagementSteps = [
  { icon: Clock, label: "60-Minute Compliance Readiness Assessment" },
  { icon: Target, label: "Fixed-Scope Implementation Proposal" },
  { icon: Users, label: "60–90 Day Monitored Deployment" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Defense & Government Contracting Compliance | ElevateQCS",
  description: "Operationally embedded quality and compliance architecture for defense contractors. FAR/DFARS, CMMC 2.0, AS9100 aligned QMS systems built to withstand DCAA reviews and prime audits.",
  url: "https://elevateqcs.com/industries/defense",
  publisher: {
    "@type": "Organization",
    name: "ElevateQCS",
    url: "https://elevateqcs.com",
    logo: { "@type": "ImageObject", url: "https://elevateqcs.com/logos/elevatequcs-logo-blue-hd.png" },
  },
  mainEntity: {
    "@type": "Service",
    name: "Defense & Government Contracting Compliance Advisory",
    provider: { "@type": "Organization", name: "ElevateQCS" },
    serviceType: "Quality Management System Architecture",
    areaServed: "US",
    description: "Integrated QMS architecture aligning AS9100, CMMC 2.0, and FAR/DFARS controls for defense and federal contractors.",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://elevateqcs.com/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://elevateqcs.com/industries/defense" },
      { "@type": "ListItem", position: 3, name: "Defense & Government Contracting" },
    ],
  },
};

export default function IndustryDefense() {
  return (
    <Layout>
      <SEOHead
        title="Defense & Government Contracting Compliance | ElevateQCS"
        description="Operationally embedded quality and compliance architecture for defense contractors. FAR/DFARS, CMMC 2.0, AS9100 aligned QMS systems built to withstand DCAA reviews and prime audits."
        url="https://elevateqcs.com/industries/defense"
        keywords={[
          "defense contractor compliance",
          "GovCon QMS architecture",
          "CMMC 2.0 compliance",
          "FAR DFARS compliance",
          "AS9100 quality management",
          "DCAA audit readiness",
          "government contracting quality systems",
          "NIST 800-171 mapping",
          "defense quality management system",
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${industryDefenseHero})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Industry Focus
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Defense & Government Contracting
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Compliance is contractual. In defense and federal contracting, it is a condition
              of award and payment — not a best practice.
            </p>
          </div>
        </div>
      </section>

      {/* The Environment */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">The Environment You Operate In</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                FAR/DFARS clauses, CMMC 2.0 requirements, AS9100/IA9100 expectations, and prime
                contractor flow-downs demand systems that function under scrutiny — not documentation
                that exists for audit day.
              </p>
              <p className="text-muted-foreground">
                ElevateQCS designs operationally embedded quality and compliance architecture built
                to withstand <Link to="/insights/govcon-operational-maturity" className="text-link">DCAA reviews</Link>,
                CMMC assessments, and customer audits.
              </p>
            </div>
            <div className="card-elevated p-8">
              <h3 className="text-lg font-medium mb-6">Regulatory Landscape</h3>
              <ul className="space-y-4">
                {[
                  "FAR / DFARS contractual obligations",
                  "CMMC 2.0 (Levels 1–3) and NIST 800-171 mapping",
                  "Prime contractor quality flow-down requirements",
                  "Supplier oversight and traceability pressure",
                  "CPAR performance scrutiny",
                  "Multi-program scaling risk",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <Shield className="w-4 h-4 text-accent mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where Contractors Break Down */}
      <section className="py-20 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">Where Contractors Break Down</h2>
            <p className="text-lg text-muted-foreground">
              Compliance fatigue is usually not a knowledge problem — it is a{" "}
              <Link to="/methodology" className="text-link">system architecture</Link> problem.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {breakdownItems.map((item, i) => (
              <div key={i} className="card-elevated p-6 flex items-start gap-4">
                <div className="w-8 h-8 rounded-sm bg-destructive/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </div>
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How ElevateQCS Builds Control */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">How ElevateQCS Builds Control</h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {controlAreas.map((area, i) => (
              <div key={i} className="card-elevated p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{area.title}</h3>
                    <p className="text-muted-foreground">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work Best With */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Who We Work Best With</h2>
              <ul className="space-y-4">
                {idealClients.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Engagement Structure</h2>
              <div className="space-y-4">
                {engagementSteps.map((step, i) => (
                  <div key={i} className="card-elevated p-6 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                    <p className="font-medium text-foreground">{step.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Clear scope. Defined milestones. Measurable progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Insights */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="section-divider mb-8" />
          <h2 className="mb-8">Related Insights</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "GovCon Operational Maturity", slug: "govcon-operational-maturity" },
              { title: "Prime Contractor Expectations", slug: "govcon-prime-expectations" },
              { title: "Subcontractor QMS Failures", slug: "subcontractor-qms-failures" },
            ].map((insight) => (
              <Link
                key={insight.slug}
                to={`/insights/${insight.slug}`}
                className="card-elevated p-6 group"
              >
                <p className="text-sm text-accent uppercase tracking-wider mb-2">Insight</p>
                <h4 className="text-lg font-medium group-hover:text-accent transition-colors">
                  {insight.title}
                </h4>
                <div className="flex items-center gap-1 mt-4 text-sm text-accent">
                  Read more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Line CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">The Bottom Line</h2>
          <p className="text-lg text-muted-foreground mb-4">
            When audit scrutiny increases, documentation theater collapses.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Operationally embedded systems endure. Let's build one that does.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule Your Compliance Readiness Assessment
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
