import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Search,
  Briefcase,
  TrendingUp,
  Zap,
  Cpu,
  Shield,
  Target,
  Users,
} from "lucide-react";
import aboutPrecision from "@/assets/about-precision.jpg";

const authorityMetrics = [
  {
    icon: Clock,
    value: "9+",
    headline: "Years Navigating the Defense-Commercial Nexus",
    description:
      "From zero-failure military sustainment operations to high-velocity commercial builds, ElevateQCS has operated at the intersection where regulatory rigour meets market speed. This isn't theoretical advisory — it's field-tested judgment refined across environments where compliance failures carry career-ending consequences.",
    context:
      "We don't teach what we read. We apply what we survived.",
  },
  {
    icon: Search,
    value: "1,000+",
    headline: "Forensic Audit Interactions — Auditor Psychology Decoded",
    description:
      "Across internal assessments, DCMA reviews, Prime contractor surveillance, and third-party certification audits, ElevateQCS has accumulated over 1,000 direct audit interactions. This isn't about 'observing' audits — it's about understanding the Auditor's Psychology: what triggers escalation, what satisfies scrutiny, and where organisations consistently fail the 'hard questions.'",
    context:
      "We know what the auditor writes in the report. More importantly, we know what they think before they write it.",
  },
  {
    icon: Briefcase,
    value: "125+",
    headline: "Rapid-Deployment Architectures — 40% Faster Implementation",
    description:
      "From QMS builds to CTIP program architecture and corrective action frameworks, ElevateQCS has delivered over 125 compliance and control systems. These aren't bespoke experiments — they are proven architectures refined across deployments, reducing implementation timelines by up to 40% compared to greenfield builds.",
    context:
      "Commercial clients care about speed. We deliver battle-tested blueprints, not discovery-phase exploration.",
  },
  {
    icon: TrendingUp,
    value: "$20M+",
    headline: "Total Contract Value Protected & Stabilised",
    description:
      "Across distressed programs, audit interventions, and governance architecture projects, ElevateQCS advisory has protected or stabilised over $20 million in contract value. This isn't advisory fee volume — it's the Assets at Risk that our forensic methodology prevented from escalating to Cure Notice, termination, or regulatory sanction.",
    context:
      "We don't measure success in billable hours. We measure it in contracts saved and margins preserved.",
  },
];

const frontierMetrics = [
  {
    icon: Zap,
    label: "48-Hour Rapid Forensic Diagnostics",
    description: "Root-cause identification for projects in crisis — deployed within 48 hours, stabilised within 96.",
  },
  {
    icon: Cpu,
    label: "Audit-Ready Digital Lineage Architecture",
    description: "Governance controls for automated workflows, AI systems, and agentic decision chains.",
  },
  {
    icon: Shield,
    label: "First-Attempt Certification Success",
    description: "System architecture designed to pass ISO, CMMC, and regulatory certification on the first attempt.",
  },
];

const trustStack = [
  {
    icon: Zap,
    title: "The Forensic Fixer",
    description: "Project Recovery specialisation: stabilising distressed $10M+ infrastructure assets and arresting contract death spirals.",
  },
  {
    icon: Cpu,
    title: "The System Architect",
    description: "ISO 42001, ISO 9001, AS9100: architecting governance systems that pass certification on the first attempt and scale with growth.",
  },
  {
    icon: Target,
    title: "The Audit Guardian",
    description: "Defensible Logic: 1,000+ audit interactions informing how to answer the 'hard questions' before the auditor asks them.",
  },
];

export default function Credentials() {
  return (
    <Layout>
      <SEOHead
        title="Authority Metrics — Credentials & Experience | ElevateQCS"
        description="9+ years navigating the defense-commercial nexus. 1,000+ forensic audit interactions. $100M+ in contract value protected. Experience measured in problems solved, not hours billed."
        url="https://elevateqcs.com/credentials"
        keywords={[
          "compliance credentials",
          "advisory experience",
          "audit readiness experience",
          "project recovery advisory",
          "AI governance credentials",
        ]}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${aboutPrecision})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Authority Metrics
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Not What We Did. What We Solved.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              These figures don't measure activity — they measure authority. 
              Each metric represents problems solved, contracts protected, and 
              systems that survived scrutiny when it mattered.
            </p>
          </div>
        </div>
      </section>

      {/* Authority Metrics Detail */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="space-y-24">
            {authorityMetrics.map((cred, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-start ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Metric highlight */}
                <div
                  className={`lg:col-span-4 ${
                    index % 2 === 1 ? "lg:col-start-9" : ""
                  }`}
                >
                  <div className="card-elevated p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                    <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mx-auto mb-6">
                      <cred.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="font-serif text-5xl md:text-6xl text-foreground font-semibold mb-4">
                      {cred.value}
                    </div>
                    <div className="text-muted-foreground text-sm leading-tight">
                      {cred.headline}
                    </div>
                  </div>
                </div>

                {/* Narrative */}
                <div
                  className={`lg:col-span-8 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="section-divider mb-8" />
                  <h2 className="text-2xl mb-6">{cred.headline}</h2>
                  <div className="prose prose-lg text-muted-foreground space-y-6">
                    <p>{cred.description}</p>
                    <div className="border-l-2 border-accent/30 pl-6">
                      <p className="italic text-foreground/80">{cred.context}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Frontier Metrics */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Forward-Looking Capabilities
            </p>
            <h2 className="mb-4">The 2026 Frontier</h2>
            <p className="text-lg text-muted-foreground">
              New capabilities built on proven foundations — for Project Recovery, 
              AI Governance, and the emerging regulatory landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {frontierMetrics.map((metric, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-6">
                  <metric.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg mb-3">{metric.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stack Grid */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-4">The Trust Stack</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three roles. One standard of judgment. This is how authority translates 
              into operational outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trustStack.map((item, index) => (
              <div
                key={index}
                className="card-elevated p-8 text-center border-t-4 border-accent"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Commitment */}
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Users className="w-10 h-10 text-accent mx-auto mb-6" />
            <h3 className="text-2xl text-primary-foreground mb-6 font-serif">
              The Principal's Commitment
            </h3>
            <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
              We don't provide theoretical reports. We provide the operational 
              architecture that allows you to stand in front of a regulator, a 
              client, or a board of directors with absolute confidence in your data.
            </p>
            <p className="text-primary-foreground/60 text-xs leading-relaxed">
              All figures represent cumulative advisory experience and are presented 
              for informational context. Past engagement scope does not constitute a 
              promise of future results.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnostic Suite CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="card-elevated p-10 md:p-14 max-w-4xl mx-auto text-center border-l-4 border-accent">
            <h2 className="text-2xl mb-4">See How Your Systems Measure Up</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Our metrics are the result of rigorous, field-tested methodologies. 
              Use our Diagnostic Suite to benchmark your own governance posture — 
              and understand where the gaps are before the auditor finds them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/tools">
                  Enter the Diagnostic Suite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
