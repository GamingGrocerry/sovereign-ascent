import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, BarChart3, Layers, ChevronRight, Siren, Eye, FileSearch, TrendingUp, ShieldAlert, HardHat, Zap, Scale, ScanSearch, DollarSign, Brain, Fingerprint, Building2, Leaf } from "lucide-react";
import toolsHero from "@/assets/tools-hero.jpg";

interface ToolDef {
  title: string;
  description: string;
  time: string;
  href: string;
  icon: React.ElementType;
  isNew?: boolean;
}

const streams: { id: string; label: string; description: string; tools: ToolDef[] }[] = [
  {
    id: "federal",
    label: "Federal Authority",
    description: "Diagnostics for government contractors navigating FAR, DFARS, CMMC, and federal audit environments.",
    tools: [
      {
        title: "GovCon Readiness Score",
        description: "Evaluate governance structures required for U.S. government supply chains. Assess anti-trafficking policies, code of conduct, supplier compliance, and quality documentation.",
        time: "3–5 min",
        href: "/tools/govcon-readiness",
        icon: Shield,
      },
      {
        title: "CAR Gravity Calculator",
        description: "Assess finding severity and calculate the likelihood of a Cure Notice. Your finding is scored — but the specific mitigation steps to block that notice require a Principal-Led briefing.",
        time: "2–3 min",
        href: "/tools/car-gravity-calculator",
        icon: Siren,
      },
      {
        title: "CPSR Financial Integrity Shield",
        description: "A mock-audit of your purchasing workflow. Identify Material Weaknesses in price justification, debarment screening, and fair & reasonable determinations before DCMA does.",
        time: "3–5 min",
        href: "/tools/cpsr-financial-integrity",
        icon: ScanSearch,
      },
      {
        title: "LOGCAP Surge Capacity Stress Test",
        description: "Input your warm-status assets and discover whether you can meet the mandatory 96-hour LOGCAP deployment window. Failures here mean you're not ready — we can show you what readiness looks like.",
        time: "3–5 min",
        href: "/tools/surge-capacity-stress-test",
        icon: Zap,
      },
      {
        title: "RFO Business Judgment Matrix",
        description: "Five procurement scenarios where the correct answer isn't in the manual. Test whether your team can document 'Defensible Logic' under the 2026 FAR overhaul standards.",
        time: "4–6 min",
        href: "/tools/rfo-business-judgment",
        icon: Scale,
      },
      {
        title: "Labor Ethics Stress Test",
        description: "Face 6 real-world CTIP scenarios and test your team's ability to identify trafficking indicators under FAR 52.222-50. A pass/fail grade with immediate feedback — but remediation requires advisory support.",
        time: "3–5 min",
        href: "/tools/labor-ethics-stress-test",
        icon: ShieldAlert,
      },
      {
        title: "Austere Environment Safety Checklist",
        description: "Check off current site safety features across 8 categories and 44 items. Generate a gap report for your SSHO — the fixes require operational expertise.",
        time: "4–6 min",
        href: "/tools/austere-safety-checklist",
        icon: HardHat,
      },
    ],
  },
  {
    id: "commercial",
    label: "Commercial Resilience",
    description: "Diagnostics for infrastructure operators, growth-stage companies, and commercial enterprises managing operational risk.",
    tools: [
      {
        title: "Project Health Forensic Diagnostic",
        description: "Identify early-warning signs of project collapse — sub-tier friction, documentation gaps, SOW ambiguity. Get a Stabilisation Priority Score with a 96-hour emergency action plan.",
        time: "3–5 min",
        href: "/tools/project-health-diagnostic",
        icon: Building2,
        isNew: true,
      },
      {
        title: "Maturity Premium ROI Calculator",
        description: "Calculate how much more you could charge — and how much oversight cost you could eliminate — by elevating your operational maturity. The diagnosis is free; the implementation roadmap is ours.",
        time: "2–3 min",
        href: "/tools/maturity-premium-calculator",
        icon: TrendingUp,
      },
      {
        title: "ESG & Supply Chain Traceability Stress Test",
        description: "Test if your Tier 3–4 suppliers can provide forensic evidence of ethical labour and carbon data under 2026 EU CS3D and Battery Passport requirements.",
        time: "4–6 min",
        href: "/tools/esg-traceability-stress-test",
        icon: Leaf,
        isNew: true,
      },
      {
        title: "Post-Award Profitability Leakage Tracker",
        description: "Calculate how much profit is consumed by inefficient manual governance. The leakage number is yours — the Digital Governance solution is ours.",
        time: "3–5 min",
        href: "/tools/profitability-leakage-tracker",
        icon: DollarSign,
      },
      {
        title: "QMS Maturity Score",
        description: "Assess quality management system maturity across process documentation, corrective actions, internal audits, training, and supplier management. Phase 1 roadmap included — full architecture requires engagement.",
        time: "3–5 min",
        href: "/tools/qms-gap-analysis",
        icon: BarChart3,
      },
      {
        title: "Compliance Framework Builder",
        description: "Receive a tailored compliance roadmap based on industry, geography, and certifications. Phase 1 implementation plan provided — full regulatory mapping is a Principal-Led engagement.",
        time: "2–4 min",
        href: "/tools/compliance-framework-builder",
        icon: Layers,
      },
    ],
  },
  {
    id: "digital",
    label: "Digital Governance",
    description: "Diagnostics for organisations navigating AI regulation, algorithmic oversight, and digital risk in 2026.",
    tools: [
      {
        title: "EU AI Act Risk Classifier",
        description: "Determine if your AI system is Prohibited, High-Risk, or Limited Risk under the EU AI Act. Get a Risk Tier Report mapping your use-case to Articles 8–15 legal requirements.",
        time: "4–6 min",
        href: "/tools/eu-ai-act-classifier",
        icon: Brain,
        isNew: true,
      },
      {
        title: "ISO 42001 Readiness Scan",
        description: "Gap analysis against the AIMS clauses. Get a prioritised Road to Certification checklist showing exactly which SOPs and technical logs are missing.",
        time: "5–7 min",
        href: "/tools/iso-42001-readiness",
        icon: Fingerprint,
        isNew: true,
      },
      {
        title: "Virtual Spot-Check Quiz",
        description: "Test your ability to identify compliant vs. non-compliant conditions across 8 audit scenarios. Get your Forensic Readiness score — but auditor-grade remediation requires our team.",
        time: "3–5 min",
        href: "/tools/virtual-spot-check",
        icon: Eye,
      },
      {
        title: "PWS Risk Highlighter",
        description: "Analyse PWS paragraphs with interactive hotspots. Click highlighted phrases to reveal hidden contractual risks and financial exposure — negotiation strategy is a separate engagement.",
        time: "3–5 min",
        href: "/tools/pws-risk-highlighter",
        icon: FileSearch,
      },
    ],
  },
];

const faqs = [
  {
    q: "What is a diagnostic assessment?",
    a: "A professional-grade evaluation that identifies governance gaps, maps regulatory obligations, and evaluates operational maturity — providing a score, classification tier, and recommended actions.",
  },
  {
    q: "How long does each assessment take?",
    a: "Most diagnostics require between 2 and 7 minutes depending on complexity.",
  },
  {
    q: "Do I need to register to use the tools?",
    a: "The interactive assessment is free to complete. To download your personalised PDF report with scores and Principal Recommendations, a business email registration is required.",
  },
  {
    q: "Are the assessments legally binding audits?",
    a: "No. They are advisory diagnostics designed to identify potential gaps. They do not constitute legal, regulatory, or professional advice. For full advisory services, contact ElevateQCS directly.",
  },
  {
    q: "What happens after I complete an assessment?",
    a: "You receive a Score and Diagnosis. The specific mitigation steps required to close your gaps are delivered through a Principal-Led engagement — because every organisation's risk profile is unique.",
  },
];

export default function Tools() {
  const [activeStream, setActiveStream] = useState("federal");

  return (
    <Layout>
      <SEOHead
        title="The Diagnostic Suite — Compliance & Governance Assessments | ElevateQCS"
        description="Professional-grade diagnostic assessments across Federal Authority, Commercial Resilience, and Digital Governance. Identify governance gaps and map regulatory obligations in under 7 minutes."
        url="https://elevateqcs.com/tools"
        keywords={["compliance diagnostic suite", "AI governance assessment", "GovCon readiness score", "EU AI Act classifier", "project health diagnostic", "ESG traceability stress test", "ISO 42001 readiness"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "The Diagnostic Suite — Compliance & Governance Assessments",
              url: "https://elevateqcs.com/tools",
              description: "Professional-grade diagnostic assessments across Federal Authority, Commercial Resilience, and Digital Governance.",
            },
            {
              "@type": "SoftwareApplication",
              name: "ElevateQCS Diagnostic Suite",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            },
            {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${toolsHero})` }} />
        <div className="absolute inset-0 image-overlay" />
        <div className="relative z-10 container-wide py-24 pt-32">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4 animate-fade-up">
              The Diagnostic Suite
            </p>
            <h1 className="text-primary-foreground mb-6 animate-fade-up-delay-1">
              Professional-Grade Governance Diagnostics
            </h1>
            <p className="text-primary-foreground/80 text-lg font-light max-w-2xl animate-fade-up-delay-2">
              Seventeen assessments across three Impact Streams. Each diagnostic delivers a Score and Diagnosis — because the first step in solving a governance gap is proving it exists.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stream Selector + Tools */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Impact Streams</p>
            <h2 className="mb-6">Seventeen Diagnostics. Three Disciplines. One Registration.</h2>
            <p className="text-lg">
              Select your domain to see the diagnostics built for your risk environment. Register once to unlock all seventeen assessments with downloadable reports.
            </p>
          </div>

          {/* Stream Tabs */}
          <div className="flex flex-wrap gap-3 mb-12">
            {streams.map((stream) => (
              <button
                key={stream.id}
                onClick={() => setActiveStream(stream.id)}
                className={`px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeStream === stream.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {stream.label}
              </button>
            ))}
          </div>

          {/* Stream Description */}
          {streams.filter(s => s.id === activeStream).map(stream => (
            <div key={stream.id}>
              <p className="text-muted-foreground mb-10 max-w-2xl">{stream.description}</p>

              {/* Tools Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {stream.tools.map((tool) => (
                  <Link
                    key={tool.href}
                    to={tool.href}
                    className="card-elevated group p-8 flex flex-col relative"
                  >
                    {tool.isNew && (
                      <span className="absolute top-4 right-4 px-2.5 py-1 bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider rounded-sm">
                        New
                      </span>
                    )}
                    <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                      <tool.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="!text-lg mb-3 group-hover:text-accent transition-colors">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6 flex-1">{tool.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {tool.time}
                      </div>
                      <span className="inline-flex items-center text-accent text-sm font-medium">
                        Start Diagnostic
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">How the Diagnostic Suite Works</h2>
            <p className="text-lg text-muted-foreground">
              A guided diagnostic journey — the Score is free; the Cure requires expertise.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Assess", desc: "Answer guided questions — each diagnostic runs 2–7 minutes" },
              { step: "02", title: "Score", desc: "Receive your classification tier and detailed findings" },
              { step: "03", title: "Download", desc: "Register to unlock your personalised PDF report" },
              { step: "04", title: "Act", desc: "Book a Principal-Led briefing for the mitigation roadmap" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-sm bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-serif font-bold text-lg">
                  {item.step}
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wide mb-2">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <div className="section-divider mb-8" />
          <h2 className="mb-10">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="!text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="mb-6">The Diagnosis Is Free. The Cure Requires Expertise.</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our diagnostics identify the gap. For a comprehensive compliance programme tailored to your contractual and regulatory environment, engage our advisory team.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Book a Principal-Led Briefing
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
