import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageSquare,
  FileSignature,
  Search,
  Compass,
  Wrench,
  Users,
  BarChart3,
  Zap,
  Shield,
  AlertTriangle,
  Clock,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import engagementGateway from "@/assets/engagement-gateway.jpg";
import engagementPartnership from "@/assets/engagement-partnership.jpg";

const standardPhases = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Initial Conversation",
    duration: "1–2 hours",
    description:
      "A confidential discussion to understand your organizational context, compliance objectives, and specific challenges. We determine fit and define the path forward.",
    outcomes: [
      "Mutual understanding of organizational context",
      "Preliminary scope identification",
      "Assessment of fit and approach",
    ],
  },
  {
    step: "02",
    icon: FileSignature,
    title: "NDA & Scope Definition",
    duration: "1 week",
    description:
      "Before any detailed information exchange, we execute a comprehensive Non-Disclosure Agreement. We then define the specific scope, objectives, and deliverables.",
    outcomes: [
      "Executed confidentiality protections",
      "Clear scope boundaries",
      "Defined deliverables and timeline",
    ],
  },
  {
    step: "03",
    icon: Search,
    title: "Vulnerability Mapping",
    duration: "2–4 weeks",
    description:
      "We go beyond gap analysis. Using forensic diagnostic methods — the same logic that powers our CAR Gravity Calculator — we map exactly which gaps will trigger legal, financial, or contractual failure. The output is not a checklist. It is a Red-Flag Report that identifies the specific SOW clauses, algorithmic trigger points, and regulatory fault lines where your exposure is highest.",
    outcomes: [
      "Red-Flag Vulnerability Report",
      "Contractual & regulatory fault-line mapping",
      "Prioritised risk-severity classifications",
    ],
  },
  {
    step: "04",
    icon: Compass,
    title: "Sovereign Architecture",
    duration: "3–6 weeks",
    description:
      "Based on vulnerability mapping, we design a governance architecture built for your specific threat landscape — including Digital Lineage controls, Agentic AI oversight protocols, and human-in-the-loop kill-switch mechanisms where applicable. The result is a Sovereign Architecture: a system designed so your organisation can pass an EU AI Act assessment, survive a Defense Prime audit, or withstand a DCMA escalation — independently.",
    outcomes: [
      "Sovereign Architecture blueprint",
      "Digital Lineage & Agentic control design",
      "Audit-defensible process documentation",
    ],
  },
  {
    step: "05",
    icon: Wrench,
    title: "Implement",
    duration: "Variable",
    description:
      "Phased implementation with hands-on guidance, documentation development, and change management support. Implementation pace is driven by your organizational capacity and milestones — structured as fixed-scope 60–90 day sprints with weekly leadership alignment.",
    outcomes: [
      "Operational compliance systems",
      "Documented processes and procedures",
      "Milestone-driven progress tracking",
    ],
  },
  {
    step: "06",
    icon: Users,
    title: "Capability Transfer",
    duration: "2–4 weeks",
    description:
      "We do not leave you with manuals. We transfer the institutional knowledge and operational capability your teams need to defend the system without us. The outcome is an autonomous Internal Governance Hub — a team that can own, operate, and evolve the architecture independently.",
    outcomes: [
      "Autonomous internal governance capability",
      "Internal Governance Hub established",
      "Full operational independence achieved",
    ],
  },
  {
    step: "07",
    icon: BarChart3,
    title: "Monitor & Support",
    duration: "Ongoing (optional)",
    description:
      "For organisations that benefit from periodic advisory support, we offer ongoing monitoring, health checks, and advisory availability. This is optional — many clients achieve full independence after capability transfer.",
    outcomes: [
      "Periodic health checks",
      "Continuous improvement support",
      "Advisory availability as needed",
    ],
  },
];

const velocityPhases = [
  {
    step: "V1",
    icon: AlertTriangle,
    title: "Crisis Triage",
    duration: "0–24 hours",
    description:
      "A Principal Lead is deployed within 48 hours. We stabilise communications with the regulator, Prime, or Contracting Officer and conduct an immediate forensic assessment of the situation.",
    outcomes: [
      "Stakeholder communications stabilised",
      "Immediate risk containment",
      "Forensic situation assessment",
    ],
  },
  {
    step: "V2",
    icon: Search,
    title: "Forensic Diagnostic",
    duration: "24–72 hours",
    description:
      "Rapid vulnerability mapping focused on the specific failure point — whether it is a Cure Notice, a failed audit, an AI regulatory deadline, or a project in Red Status. We identify root cause and map the blast radius.",
    outcomes: [
      "Root-cause identification",
      "Blast-radius assessment",
      "Red-Flag Report delivered",
    ],
  },
  {
    step: "V3",
    icon: Shield,
    title: "Stabilisation Architecture",
    duration: "48–96 hours",
    description:
      "We design and begin deploying a defensive architecture — corrective action responses, regulatory submissions, or interim governance controls — built to stop the escalation and create a defensible position.",
    outcomes: [
      "Defensive architecture deployed",
      "Corrective action response drafted",
      "Escalation trajectory arrested",
    ],
  },
  {
    step: "V4",
    icon: ArrowRight,
    title: "Transition to Standard Track",
    duration: "Week 2+",
    description:
      "Once the crisis is stabilised, we transition to the Standard ECAM Track for long-term system build — or disengage entirely if the immediate objective is achieved.",
    outcomes: [
      "Crisis formally closed",
      "Long-term roadmap defined",
      "Option to transition or disengage",
    ],
  },
];

const faqs = [
  {
    question: "Do you require us to buy expensive GRC software?",
    answer:
      "No. We are vendor-neutral. We architect the governance logic first, then integrate it into your existing stack — Slack, Jira, GCC High, SharePoint, or whatever your teams already use. Systems should serve humans, not the other way around.",
  },
  {
    question: "What if we are already in 'Red Status' with a client or regulator?",
    answer:
      "We move to our Forensic Velocity Track. We can deploy a Principal Lead within 48 hours to stabilise communications and begin an immediate root-cause recovery. The first 96 hours are structured as a Stabilisation Sprint — no open-ended retainer.",
  },
  {
    question: "How long do typical engagements run?",
    answer:
      "Standard Track engagements run 12–24 weeks for full system builds. Velocity Track interventions begin within 48 hours and stabilise within 96 hours, with an optional transition to the Standard Track for long-term architecture.",
  },
  {
    question: "Are engagements project-based or retainer?",
    answer:
      "Project-based with defined scope, milestones, and deliverables — structured as fixed-scope 60–90 day sprints with weekly leadership alignment. We do not operate open-ended retainers. Ongoing advisory is available post-engagement on an optional basis.",
  },
  {
    question: "How is confidentiality handled?",
    answer:
      "All engagements begin with comprehensive NDAs before any information exchange. We do not disclose client identities, engagement details, or proprietary information. Your competitive intelligence remains protected.",
  },
  {
    question: "What is the difference between the Standard and Velocity Track?",
    answer:
      "The Standard Track is a 12–24 week institutional build — full vulnerability mapping, sovereign architecture, implementation, and capability transfer. The Velocity Track is a 96-hour forensic intervention for projects in crisis, regulatory emergencies, or imminent contract actions. Both tracks use the same forensic methodology. The difference is speed and scope.",
  },
];

export default function EngagementModel() {
  const [activeTrack, setActiveTrack] = useState<"standard" | "velocity">("standard");

  const currentPhases = activeTrack === "standard" ? standardPhases : velocityPhases;

  return (
    <Layout>
      <SEOHead
        title="How We Work With You — Engagement Model | ElevateQCS"
        description="Two engagement tracks: Standard for institutional system builds and Urgent Support for crisis situations. Choose the approach that fits your situation."
        url="https://elevateqcs.com/engagement"
        keywords={[
          "compliance engagement model",
          "compliance consulting process",
          "project recovery advisory",
          "quality system consulting",
        ]}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${engagementGateway})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Engagement Model
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              How We Work With You
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Not every engagement begins the same way. Some organisations need 
              compliance systems built over months. Others need urgent support 
              right away. We designed for both.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" asChild>
                <a href="#tracks">
                  Explore the Methodology
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dual-Speed Overview */}
      <section className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2 className="mb-4">Two Ways to Engage</h2>
            <p className="text-lg text-muted-foreground">
              A project in crisis and a startup preparing for ISO 9001 certification 
              don't need the same engagement. Our methodology adapts to your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {/* Standard Track Card */}
            <div className="card-elevated p-8 md:p-10 border-t-4 border-accent">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                  <Compass className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl mb-0">Standard Engagement</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    12–24 Weeks
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The full system build. Gap assessment, system design, phased 
                implementation, and team training. For organisations building 
                compliance systems that last.
              </p>
              <ul className="space-y-3 mb-8">
                {["ISO 9001 / AS9100 system builds", "CMMC Level 2 preparation", "EU AI Act governance architecture", "Full QMS implementation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={activeTrack === "standard" ? "cta" : "outline"}
                className="w-full"
                onClick={() => setActiveTrack("standard")}
              >
                View Standard Track
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Velocity Track Card */}
            <div className="card-elevated p-8 md:p-10 border-t-4 border-destructive">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-sm bg-destructive/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl mb-0">Urgent Support</h3>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    96 Hours
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                The emergency intervention. Senior-led crisis assessment, 
                root-cause analysis, and corrective action planning — deployed 
                quickly. For projects in trouble, regulatory deadlines, or 
                imminent contract actions.
              </p>
              <ul className="space-y-3 mb-8">
                {["Cure Notice / Show Cause response", "Failed audit recovery", "AI regulatory deadline intervention", "Project in Red Status stabilisation"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={activeTrack === "velocity" ? "cta" : "outline"}
                className="w-full"
                onClick={() => setActiveTrack("velocity")}
              >
                View Velocity Track
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lifecycle Visual */}
      <section className="py-16 bg-secondary/20">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            {activeTrack === "standard" ? (
              <>
                {["Conversation", "NDA & Scope", "Vulnerability Mapping", "Sovereign Architecture", "Implement", "Capability Transfer", "Monitor"].map((label, i, arr) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="px-4 py-2 rounded-sm bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                      {label}
                    </div>
                    {i < arr.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                {["Crisis Triage", "Forensic Diagnostic", "Stabilisation", "Transition / Exit"].map((label, i, arr) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="px-4 py-2 rounded-sm bg-destructive text-destructive-foreground text-xs font-semibold uppercase tracking-wider whitespace-nowrap">
                      {label}
                    </div>
                    {i < arr.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 uppercase tracking-wider">
            {activeTrack === "standard"
              ? "The Institutional Resilience Lifecycle — 12 to 24 Weeks"
              : "The Forensic Sprint Lifecycle — 96 Hours to Stabilisation"}
          </p>
        </div>
      </section>

      {/* Phase Detail Timeline */}
      <section id="tracks" className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <div className="flex items-center gap-4 mb-4">
              {activeTrack === "velocity" && (
                <div className="px-3 py-1 rounded-sm bg-destructive/10 text-destructive text-xs font-semibold uppercase tracking-wider">
                  Velocity Track
                </div>
              )}
              {activeTrack === "standard" && (
                <div className="px-3 py-1 rounded-sm bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                  Standard Track
                </div>
              )}
            </div>
            <h2 className="mb-4">
              {activeTrack === "standard"
                ? "The ECAM Engagement Journey"
                : "The Forensic Sprint"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {activeTrack === "standard"
                ? "Seven phases from initial conversation to operational independence. Each phase produces a defined deliverable. No open-ended retainers."
                : "Four phases from crisis triage to stabilisation. Principal-led. Deployed within 48 hours. Designed for the engagements that cannot wait."}
            </p>
          </div>

          <div className="space-y-12">
            {currentPhases.map((phase, index) => (
              <div key={index} className="grid lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <div
                      className={`w-16 h-16 rounded-sm flex items-center justify-center font-serif text-lg font-semibold ${
                        activeTrack === "velocity"
                          ? "bg-destructive text-destructive-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {phase.step}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide lg:mt-2">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {phase.duration}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-10">
                  <div className="card-elevated p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-sm flex items-center justify-center ${
                          activeTrack === "velocity"
                            ? "bg-gradient-to-br from-destructive/20 to-destructive/5"
                            : "bg-gradient-to-br from-accent/20 to-accent/5"
                        }`}
                      >
                        <phase.icon
                          className={`w-6 h-6 ${
                            activeTrack === "velocity" ? "text-destructive" : "text-accent"
                          }`}
                        />
                      </div>
                      <h3 className="text-xl">{phase.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                        Key Outcomes
                      </h4>
                      <ul className="grid md:grid-cols-3 gap-3">
                        {phase.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div
                              className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                                activeTrack === "velocity" ? "bg-destructive" : "bg-accent"
                              }`}
                            />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Image Break */}
      <section className="relative h-[300px] overflow-hidden">
        <img
          src={engagementPartnership}
          alt="Connected links representing partnership"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <p className="text-foreground text-xl md:text-2xl font-serif font-light leading-relaxed">
              The average consultant is being replaced by AI. You hire us for 
              judgment — the ability to identify exactly where the fire is and 
              architect the system to prevent the next one.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Common Questions
            </p>
            <h2 className="gold-accent pb-4">Working With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elevated p-8">
                <h3 className="text-lg mb-4">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiered CTA */}
      <section className="py-28 bg-background">
        <div className="container-wide">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="text-center mb-4">Choose Your Entry Point</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            The right engagement depends on where you are today. Select the track 
            that matches your current reality.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Crisis CTA */}
            <div className="card-elevated p-8 md:p-10 border-l-4 border-destructive">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-destructive" />
                <p className="text-xs text-destructive uppercase tracking-[0.15em] font-semibold">
                  For Projects in Crisis
                </p>
              </div>
              <h3 className="text-xl mb-3">Start a 96-Hour Forensic Diagnostic</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                You have a Cure Notice, a failed audit, a regulatory deadline, or a 
                project in Red Status. We deploy a Principal Lead within 48 hours.
              </p>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Request Emergency Intervention
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Institutional CTA */}
            <div className="card-elevated p-8 md:p-10 border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <Compass className="w-6 h-6 text-accent" />
                <p className="text-xs text-accent uppercase tracking-[0.15em] font-semibold">
                  For Growth & Certification
                </p>
              </div>
              <h3 className="text-xl mb-3">Request an Institutional Architecture Proposal</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                You are building for scale — ISO certification, CMMC preparation, 
                AI governance, or full QMS implementation. We architect systems that 
                endure.
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Schedule Initial Conversation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
