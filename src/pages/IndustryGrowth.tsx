import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle, Target, Clock, Users, TrendingUp } from "lucide-react";
import industryGrowthHero from "@/assets/industry-growth-hero.jpg";

const environmentItems = [
  "ISO 9001 / AS9100 certification preparation",
  "Enterprise vendor assessments",
  "Investor governance scrutiny",
  "Rapid headcount expansion",
  "Entry into regulated or government markets",
];

const struggleItems = [
  "Undefined process ownership",
  "Founder bottlenecks slowing execution",
  "Inconsistent documentation across departments",
  "Weak internal control structures",
  "Reactive problem-solving instead of prevention",
];

const maturityAreas = [
  {
    title: "QMS Design Aligned to Your Business Model",
    description: "Systems built around SaaS, services, manufacturing, or hybrid operations — not generic templates.",
  },
  {
    title: "Process Ownership & Accountability Mapping",
    description: "Clear RACI structures tied to authority and decision rights.",
  },
  {
    title: "Internal Control Architecture",
    description: "Approval workflows, segregation of duties, audit trails, and governance visibility without operational drag.",
  },
  {
    title: "Certification Readiness Roadmaps",
    description: "Focused 60–90 day implementation paths designed for operational integration first — certification second.",
  },
  {
    title: "Leadership Rollout & Monitoring",
    description: "Structured training and monitored deployment to ensure adoption across departments.",
  },
];

const idealClients = [
  "50–500 employee organizations entering regulated or enterprise markets",
  "Companies pursuing ISO certification within 6–12 months",
  "Leadership teams committed to operational discipline",
  "Firms ready for structured 60–90 day implementation",
];

const engagementSteps = [
  { icon: Clock, label: "60-Minute Operational Maturity Assessment" },
  { icon: Target, label: "Fixed-Scope Proposal with Defined Milestones" },
  { icon: Users, label: "60–90 Day Implementation Sprint" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Growth-Stage & Regulated Commercial Compliance | ElevateQCS",
  description: "Structured quality and control systems for scaling companies. ISO 9001 certification readiness, investor governance, and operational maturity architecture for growth-stage enterprises.",
  url: "https://elevateqcs.com/industries/growth-stage",
  publisher: {
    "@type": "Organization",
    name: "ElevateQCS",
    url: "https://elevateqcs.com",
    logo: { "@type": "ImageObject", url: "https://elevateqcs.com/logos/elevatequcs-logo-blue-hd.png" },
  },
  mainEntity: {
    "@type": "Service",
    name: "Growth-Stage Compliance & Operational Maturity Advisory",
    provider: { "@type": "Organization", name: "ElevateQCS" },
    serviceType: "Quality Management System Design",
    areaServed: "US",
    description: "QMS design, certification readiness roadmaps, and internal control architecture for growth-stage regulated enterprises.",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://elevateqcs.com/" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://elevateqcs.com/industries/growth-stage" },
      { "@type": "ListItem", position: 3, name: "Growth-Stage & Regulated Commercial" },
    ],
  },
};

export default function IndustryGrowth() {
  return (
    <Layout>
      <SEOHead
        title="Growth-Stage & Regulated Commercial Compliance | ElevateQCS"
        description="Structured quality and control systems for scaling companies. ISO 9001 certification readiness, investor governance, and operational maturity architecture for growth-stage enterprises."
        url="https://elevateqcs.com/industries/growth-stage"
        keywords={[
          "growth-stage compliance",
          "ISO 9001 certification readiness",
          "operational maturity model",
          "investor-ready systems",
          "QMS development and implementation",
          "regulated commercial enterprises",
          "startup compliance funding",
          "enterprise vendor assessment readiness",
          "quality management system design",
        ]}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${industryGrowthHero})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Industry Focus
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Growth-Stage & Regulated Commercial Enterprises
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Operational maturity is a competitive requirement. As companies scale,
              informal execution breaks down.
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
              <h2 className="mb-6">The Environment You're Entering</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Enterprise customers demand ISO certification. Investors expect governance visibility.
                Regulated markets require documented control. Operational maturity becomes the gatekeeper
                to revenue growth.
              </p>
              <p className="text-muted-foreground">
                ElevateQCS builds structured quality and control systems that enable scale without
                bureaucratic drag.
              </p>
            </div>
            <div className="card-elevated p-8">
              <h3 className="text-lg font-medium mb-6">Market Demands</h3>
              <ul className="space-y-4">
                {environmentItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <TrendingUp className="w-4 h-4 text-accent mt-1 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Where Growth Companies Struggle */}
      <section className="py-20 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">Where Growth Companies Struggle</h2>
            <p className="text-lg text-muted-foreground">
              Revenue growth without structural maturity creates fragility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {struggleItems.map((item, i) => (
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

      {/* How ElevateQCS Builds Structural Maturity */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">How ElevateQCS Builds Structural Maturity</h2>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {maturityAreas.map((area, i) => (
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
                No open-ended retainers. No theoretical frameworks. Structured execution.
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
              { title: "Startup Compliance & Funding", slug: "startup-compliance-funding" },
              { title: "QMS for Early-Stage Companies", slug: "qms-early-stage" },
              { title: "ISO 9001 Operational Maturity", slug: "iso9001-operational-maturity" },
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
            Enterprise growth requires proof of control.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Build maturity before losing the contract that demands it.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule Your Operational Maturity Assessment
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
