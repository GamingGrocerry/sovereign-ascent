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
    id: "commercial",
    label: "Commercial & Growth",
    description: "Assessments for infrastructure operators, growth-stage companies, and commercial enterprises managing operational risk.",
    tools: [
      {
        title: "Project Health Diagnostic",
        description: "Identify early-warning signs of project trouble — subcontractor friction, documentation gaps, scope ambiguity. Get a priority score with an action plan.",
        time: "3–5 min",
        href: "/tools/project-health-diagnostic",
        icon: Building2,
        isNew: true,
      },
      {
        title: "Maturity Premium ROI Calculator",
        description: "Calculate how much more you could charge — and how much overhead you could eliminate — by elevating your operational maturity.",
        time: "2–3 min",
        href: "/tools/maturity-premium-calculator",
        icon: TrendingUp,
      },
      {
        title: "ESG & Supply Chain Traceability Stress Test",
        description: "Test if your suppliers can provide evidence of ethical labour and carbon data under 2026 EU CS3D and Battery Passport requirements.",
        time: "4–6 min",
        href: "/tools/esg-traceability-stress-test",
        icon: Leaf,
        isNew: true,
      },
      {
        title: "Post-Award Profitability Leakage Tracker",
        description: "Calculate how much profit is consumed by inefficient manual governance. See the leakage — then let us help you fix it.",
        time: "3–5 min",
        href: "/tools/profitability-leakage-tracker",
        icon: DollarSign,
      },
      {
        title: "QMS Maturity Score",
        description: "Assess quality management system maturity across process documentation, corrective actions, internal audits, training, and supplier management.",
        time: "3–5 min",
        href: "/tools/qms-gap-analysis",
        icon: BarChart3,
      },
      {
        title: "Compliance Framework Builder",
        description: "Receive a tailored compliance roadmap based on industry, geography, and certifications. Phase 1 plan provided — full regulatory mapping available through engagement.",
        time: "2–4 min",
        href: "/tools/compliance-framework-builder",
        icon: Layers,
      },
    ],
  },
  {
    id: "digital",
    label: "AI & Technology",
    description: "Assessments for organisations navigating AI regulation, algorithmic oversight, and digital risk.",
    tools: [
      {
        title: "EU AI Act Risk Classifier",
        description: "Determine if your AI system is Prohibited, High-Risk, or Limited Risk under the EU AI Act. Get a Risk Tier Report mapping your use-case to legal requirements.",
        time: "4–6 min",
        href: "/tools/eu-ai-act-classifier",
        icon: Brain,
        isNew: true,
      },
      {
        title: "ISO 42001 Readiness Scan",
        description: "Gap analysis against the AIMS clauses. Get a prioritised checklist showing exactly which SOPs and technical logs are missing.",
        time: "5–7 min",
        href: "/tools/iso-42001-readiness",
        icon: Fingerprint,
        isNew: true,
      },
      {
        title: "Virtual Spot-Check Quiz",
        description: "Test your ability to identify compliant vs. non-compliant conditions across 8 audit scenarios. Get your readiness score — remediation guidance available through consultation.",
        time: "3–5 min",
        href: "/tools/virtual-spot-check",
        icon: Eye,
      },
      {
        title: "PWS Risk Highlighter",
        description: "Analyse PWS paragraphs with interactive hotspots. Click highlighted phrases to reveal hidden contractual risks and financial exposure.",
        time: "3–5 min",
        href: "/tools/pws-risk-highlighter",
        icon: FileSearch,
      },
    ],
  },
];

const faqs = [
  {
    q: "What is a compliance assessment?",
    a: "A structured evaluation that identifies gaps in your compliance setup, maps risk levels, and highlights the areas most likely to cause problems during an audit or regulatory review.",
  },
  {
    q: "How long does each assessment take?",
    a: "Most assessments require between 2 and 7 minutes depending on complexity.",
  },
  {
    q: "What do I see for free?",
    a: "You receive your Score, Risk Tier, and a summary of key findings immediately. To unlock the Detailed Findings and your downloadable report, a business email is required.",
  },
  {
    q: "Why do I need to enter my email?",
    a: "The detailed findings are generated specifically for your risk profile. The email allows us to deliver your personalised report and, where appropriate, offer a follow-up consultation to discuss your results.",
  },
  {
    q: "Are the assessments legally binding audits?",
    a: "No. They are advisory assessments designed to identify potential gaps and areas of concern. They do not constitute legal, regulatory, or professional advice. For full advisory services, contact ElevateQCS directly.",
  },
  {
    q: "What happens after I complete an assessment?",
    a: "You receive your Score and Risk Tier immediately. Once unlocked, the Detailed Findings show the specific areas needing attention. Schedule a consultation to discuss personalised recommendations for your situation.",
  },
];

export default function Tools() {
  const [activeStream, setActiveStream] = useState("commercial");

  return (
    <Layout>
      <SEOHead
        title="Free Compliance Assessment Tools | ElevateQCS"
        description="Free compliance assessments across Government Contractors, Commercial & Growth, and AI & Technology categories. Identify governance gaps and assess your compliance readiness in under 7 minutes."
        url="https://elevateqcs.com/tools"
        keywords={["free compliance tools", "compliance assessment", "GovCon readiness score", "EU AI Act classifier", "project health diagnostic", "ESG traceability stress test", "ISO 42001 readiness", "compliance consultant", "quality management consultant"]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Free Compliance Assessment Tools",
              url: "https://elevateqcs.com/tools",
              description: "Free compliance assessments across Government Contractors, Commercial & Growth, and AI & Technology categories.",
            },
            {
              "@type": "SoftwareApplication",
              name: "ElevateQCS Compliance Tools",
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
              Free Compliance Tools
            </p>
            <h1 className="text-primary-foreground mb-6 animate-fade-up-delay-1">
              Assess Your Compliance Readiness
            </h1>
            <p className="text-primary-foreground/80 text-lg font-light max-w-2xl animate-fade-up-delay-2">
              Free assessments to help you understand where your compliance stands. Each one takes just a few minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Stream Selector + Tools */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Categories</p>
            <h2 className="mb-6">Choose Your Focus Area</h2>
            <p className="text-lg">
              Select your category to see assessments built for your environment. Register once to unlock all assessments with downloadable reports.
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
                        Start Assessment
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
            <h2 className="mb-6">How It Works</h2>
            <p className="text-lg text-muted-foreground">
              A simple process — get your score for free, then get personalised recommendations from our team.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Assess", desc: "Answer guided questions — each assessment runs 2–7 minutes" },
              { step: "02", title: "Score", desc: "Receive your risk tier and key findings" },
              { step: "03", title: "Download", desc: "Register to unlock your personalised PDF report" },
              { step: "04", title: "Act", desc: "Schedule a consultation to discuss your results" },
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
          <h2 className="mb-6">Need Help With Your Results?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our assessments identify the gaps. For a comprehensive compliance programme tailored to your situation, schedule a consultation with our team.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule a Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
