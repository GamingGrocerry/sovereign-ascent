import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, BarChart3, Layers, ChevronRight, Siren, Eye, FileSearch, TrendingUp, ShieldAlert, HardHat, Zap, Scale, ScanSearch, Network, DollarSign } from "lucide-react";
import toolsHero from "@/assets/tools-hero.jpg";

const tools = [
  {
    title: "GovCon Readiness Score",
    description: "Evaluate whether your organisation has the governance structures required to participate in U.S. government supply chains. This diagnostic assesses anti-trafficking policies, code of conduct, supplier compliance, and quality documentation.",
    time: "3–5 minutes",
    href: "/tools/govcon-readiness",
    icon: Shield,
  },
  {
    title: "Compliance Framework Builder",
    description: "Receive a tailored compliance roadmap based on your industry, geography, government client exposure, and existing certifications. The builder maps your regulatory obligations into a phased implementation plan.",
    time: "2–4 minutes",
    href: "/tools/compliance-framework-builder",
    icon: Layers,
  },
  {
    title: "QMS Gap Analysis",
    description: "Assess your quality management system maturity across process documentation, corrective actions, internal audits, training, supplier management, and management review. Identify contract risk implications.",
    time: "3–5 minutes",
    href: "/tools/qms-gap-analysis",
    icon: BarChart3,
  },
  {
    title: "CAR Gravity Calculator",
    description: "Received a finding? Assess the severity of your Corrective Action Request and calculate the likelihood of receiving a Cure Notice based on finding source, repeat status, impact scope, and response history.",
    time: "2–3 minutes",
    href: "/tools/car-gravity-calculator",
    icon: Siren,
  },
  {
    title: "Virtual Spot-Check Quiz",
    description: "Test your ability to identify compliant vs. non-compliant site conditions across 8 real-world audit scenarios. Get your Forensic Readiness score and compare against DCMA auditor standards.",
    time: "3–5 minutes",
    href: "/tools/virtual-spot-check",
    icon: Eye,
  },
  {
    title: "PWS Risk Highlighter",
    description: "Analyse sample Performance Work Statement paragraphs with interactive hotspots. Click highlighted phrases to reveal hidden contractual risks, financial exposure, and negotiation recommendations.",
    time: "3–5 minutes",
    href: "/tools/pws-risk-highlighter",
    icon: FileSearch,
  },
  {
    title: "Maturity Premium ROI Calculator",
    description: "Calculate how much more you could charge — and how much oversight cost you could eliminate — by elevating your operational maturity rating. Data-backed ROI analysis.",
    time: "2–3 minutes",
    href: "/tools/maturity-premium-calculator",
    icon: TrendingUp,
  },
  {
    title: "Labor Ethics Stress Test",
    description: "Face 6 real-world CTIP scenarios and test your team's ability to identify trafficking indicators under FAR 52.222-50. Receive a pass/fail grade with immediate feedback.",
    time: "3–5 minutes",
    href: "/tools/labor-ethics-stress-test",
    icon: ShieldAlert,
  },
  {
    title: "Austere Environment Safety Checklist",
    description: "Check off your current site safety features across 8 categories and 44 items. Generate a printable gap report for your Site Safety and Health Officer (SSHO).",
    time: "4–6 minutes",
    href: "/tools/austere-safety-checklist",
    icon: HardHat,
  },
  {
    title: "LOGCAP Surge Capacity Stress Test",
    description: "Input your current warm-status assets — labor pools, equipment fleets, logistics partners — and discover whether you can meet the mandatory 96-hour LOGCAP deployment window.",
    time: "3–5 minutes",
    href: "/tools/surge-capacity-stress-test",
    icon: Zap,
  },
  {
    title: "RFO Business Judgment Matrix",
    description: "Five procurement scenarios where the correct answer isn't in the manual. Test whether your team can document 'Defensible Logic' under the 2026 FAR overhaul standards.",
    time: "4–6 minutes",
    href: "/tools/rfo-business-judgment",
    icon: Scale,
  },
  {
    title: "CPSR Financial Integrity Shield",
    description: "A mock-audit of your purchasing workflow. Identify Material Weaknesses in price justification, debarment screening, and fair & reasonable determinations before DCMA does.",
    time: "3–5 minutes",
    href: "/tools/cpsr-financial-integrity",
    icon: ScanSearch,
  },
  {
    title: "Supply Chain Risk Designation Scan",
    description: "Select your tech stack — AI models, cloud providers, hardware origins — and see which components are under active national security scrutiny and need a rip-and-replace strategy.",
    time: "2–4 minutes",
    href: "/tools/supply-chain-risk-scan",
    icon: Network,
  },
  {
    title: "Post-Award Profitability Leakage Tracker",
    description: "Calculate how much profit is being consumed by inefficient manual governance and prove that investing in Digital Governance actually increases your net margin.",
    time: "3–5 minutes",
    href: "/tools/profitability-leakage-tracker",
    icon: DollarSign,
  },
];

const faqs = [
  {
    q: "What is a GovCon readiness assessment?",
    a: "A diagnostic that evaluates whether an organisation has the governance structures required to participate in U.S. government supply chains.",
  },
  {
    q: "How long does the assessment take?",
    a: "Most assessments require between 2 and 4 minutes.",
  },
  {
    q: "Do I need to register to use the tools?",
    a: "Yes. A single email registration unlocks all three tools. Results are delivered as downloadable reports.",
  },
  {
    q: "Are the assessments legally binding audits?",
    a: "No. They are advisory diagnostics designed to identify potential gaps. They do not constitute legal, regulatory, or professional advice.",
  },
];

export default function Tools() {
  return (
    <Layout>
      <SEOHead
        title="Compliance Readiness Assessments | GovCon & QMS Diagnostic Tools | ElevateQCS"
        description="Run professional compliance readiness assessments for government contracting, QMS maturity, and regulatory frameworks. Free diagnostic tools with downloadable reports."
        url="https://elevateqcs.com/tools"
        keywords={["compliance assessment", "QMS readiness assessment", "government contractor compliance checklist", "subcontractor readiness assessment", "GovCon readiness score"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Compliance Readiness Diagnostic Tools",
              url: "https://elevateqcs.com/tools",
              description: "Professional compliance readiness assessments for government contracting, QMS maturity, and regulatory frameworks.",
            },
            {
              "@type": "SoftwareApplication",
              name: "GovCon Readiness Assessment",
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
              Diagnostic Tools
            </p>
            <h1 className="text-primary-foreground mb-6 animate-fade-up-delay-1">
              Compliance Readiness Diagnostic Tools
            </h1>
            <p className="text-primary-foreground/80 text-lg font-light max-w-2xl animate-fade-up-delay-2">
              Professional-grade assessments that identify governance gaps, map regulatory obligations, and evaluate operational maturity — in under five minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Assess Your Readiness</p>
            <h2 className="mb-6">Fourteen Diagnostics. One Registration.</h2>
            <p className="text-lg">
              Register once to unlock all tools. Each assessment produces a downloadable report with your score, classification tier, and recommended compliance roadmap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                to={tool.href}
                className="card-elevated group p-8 flex flex-col"
              >
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
                    Start Assessment
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              A guided diagnostic journey from registration to actionable compliance insights.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Register", desc: "Provide your details once to unlock all tools" },
              { step: "02", title: "Assess", desc: "Answer guided questions — one per screen" },
              { step: "03", title: "Review", desc: "Receive your score, tier, and findings" },
              { step: "04", title: "Download", desc: "Get your branded compliance report" },
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
          <h2 className="mb-6">Need a Deeper Assessment?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our diagnostic tools provide a starting point. For a comprehensive compliance review tailored to your contractual and regulatory environment, speak with our advisory team.
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
