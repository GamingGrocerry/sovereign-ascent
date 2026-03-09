import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  ArrowRight,
  Download,
  Shield,
  Scale,
  ClipboardCheck,
  Building2,
  Cpu,
  Factory,
  Stethoscope,
  Lock,
  Leaf,
  Target,
  Eye,
  Handshake,
  FileCheck,
  Search,
  Briefcase,
  BarChart3,
  Wrench,
  Brain,
  Zap,
  Server,
  Battery,
  Rocket,
  ShieldCheck,
  Globe,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import { generateCapabilitiesPdf } from "@/components/capabilities/generateCapabilitiesPdf";

/* ─── DATA ─── */

const advisoryDomains = [
  {
    icon: Shield,
    title: "Governance & Quality Architecture",
    description:
      "Enterprise-grade governance structures and Quality Management Systems (QMS) that anchor internal operations and enable sustainable compliance.",
    items: [
      "ISO 9001 Quality Management Systems",
      "AS9100 Aerospace Quality Systems",
      "ISO 13485 Medical Device Quality Systems",
      "ISO 31000 Risk Management",
      "Enterprise governance and internal control environments",
    ],
    footer:
      "By integrating governance strategy with operational execution, we create systems designed for longevity, auditability, and internal ownership.",
  },
  {
    icon: Scale,
    title: "Federal & Regulatory Discipline",
    description:
      "Organizations participating in government supply chains face complex regulatory obligations that require structured compliance infrastructure.",
    items: [
      "FAR and DFARS contractual obligations",
      "CMMC and NIST 800-171 cybersecurity requirements",
      "Federal supply chain risk management expectations",
      "Human rights compliance including FAR 52.222-50 and EU CSDDD frameworks",
    ],
    footer:
      "Our advisory translates regulatory exposure into structured governance systems that reduce operational risk while strengthening procurement readiness.",
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Compliance Infrastructure",
    description:
      "Regulatory compliance is not a single event — it is a continuous operational condition.",
    items: [
      "Regulatory inspections",
      "Certification audits",
      "Contract compliance reviews",
      "Supplier governance evaluations",
    ],
    footer:
      "Our advisory includes regulatory documentation architecture, internal compliance workflows, and operational controls designed to produce verifiable evidence under scrutiny.",
  },
  {
    icon: Wrench,
    title: "Infrastructure Recovery & Forensic Stabilization",
    description:
      "When high-value programs stall or distress, we deploy forensic stabilization teams that restore operational control within 96 hours.",
    items: [
      "PWS/SOW forensic scrub and contractual friction analysis",
      "Chain-of-command restoration for distressed programs",
      "Sub-tier alignment and margin leakage prevention",
      "Level III CAR and Cure Notice mitigation",
    ],
    footer:
      "From $100M+ data center builds to LOGCAP sustainment operations, we rescue assets from sub-tier chaos and restore delivery discipline.",
    tags: { commercial: "Rescuing distressed infrastructure assets from margin leakage and sub-tier misalignment.", govcon: "Mitigating Level III CARs and Cure Notices through rapid 96-hour stabilization." },
  },
  {
    icon: Brain,
    title: "AI Governance & Algorithmic Trust",
    description:
      "As AI systems move from experimentation to regulated deployment, organizations need governance architectures that satisfy the EU AI Act, NIST AI RMF, and ISO/IEC 42001.",
    items: [
      "EU AI Act compliance and high-risk classification mapping",
      "ISO/IEC 42001 AI Management System design",
      "Data lineage tracking and algorithmic bias auditing",
      "Human-in-the-loop oversight architecture",
    ],
    footer:
      "We build the audit trail required for both commercial AI product launches and federal agentic AI modernization — preventing product bans and €35M penalties.",
    tags: { commercial: "Navigating the 2026 EU AI Act and ISO/IEC 42001 to prevent product bans and €35M fines.", govcon: "Building the audit trail required for federal agentic AI modernization programs." },
  },
];

const industries = [
  {
    icon: Server,
    title: "AI Infrastructure (Hyperscale)",
    description:
      "Governance for the 100 GW of data centers being built by 2030 — addressing power compliance, cooling infrastructure ethics, and AI model deployment oversight.",
  },
  {
    icon: Shield,
    title: "Defense & Aerospace",
    description:
      "FAR, DFARS, CMMC, ITAR, AS9100 governance structures for organizations participating in federal and defense supply chains.",
  },
  {
    icon: Battery,
    title: "Renewable Energy Supply Chain",
    description:
      "EU Battery Passport compliance, CS3D ethical labor due diligence, and supply chain governance for clean energy infrastructure.",
  },
  {
    icon: Rocket,
    title: "Digital Defense Tech",
    description:
      "Commercial startups entering the DIU (Defense Innovation Unit) ecosystem — bridging commercial velocity with defense-grade compliance.",
  },
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description:
      "Scalable ISO 9001 systems and operational governance for manufacturers entering international regulated supply chains.",
  },
  {
    icon: Stethoscope,
    title: "Medical Devices & Life Sciences",
    description:
      "Quality and regulatory alignment with FDA, EU MDR, and ISO 13485 requirements for medical device manufacturers and suppliers.",
  },
  {
    icon: Building2,
    title: "Federal IT & Systems",
    description:
      "Compliance advisory for contractors supporting federal agencies, including cybersecurity frameworks, procurement governance, and regulatory alignment.",
  },
  {
    icon: Lock,
    title: "Cybersecurity & Technology",
    description:
      "Governance infrastructure for cybersecurity firms, software providers, and technology companies operating in regulated markets.",
  },
];

const differentiators = [
  {
    icon: Brain,
    title: "Agentic Oversight",
    description:
      "We don't just audit humans; we audit the governance of your AI agents. As autonomous systems proliferate, we design the oversight architectures that ensure algorithmic accountability.",
  },
  {
    icon: Globe,
    title: "Remote-First Security",
    description:
      "Leveraging GCC High and ISO 27001 compliant workflows for global, secure delivery. Our remote-by-design model eliminates geographic constraints without compromising data sovereignty.",
  },
  {
    icon: GraduationCap,
    title: "Capability Transfer",
    description:
      "We don't create dependency. Every engagement concludes with an Internal Governance Manual and a trained team — ensuring your organization owns its compliance posture permanently.",
  },
];

const approachItems = [
  {
    icon: Target,
    title: "Strategic Integration",
    description:
      "ElevateQCS bridges the gap between regulatory interpretation and operational implementation. Our advisory translates regulatory frameworks into governance systems that function within real organizational workflows.",
  },
  {
    icon: Eye,
    title: "Audit-Ready Culture",
    description:
      "Instead of preparing for audits reactively, we design systems that maintain a continuous state of compliance readiness. Organizations operating with audit-ready infrastructures reduce operational disruption and regulatory exposure.",
  },
  {
    icon: Handshake,
    title: "Vendor-Neutral Advisory",
    description:
      "ElevateQCS does not certify, accredit, or authorize compliance. We design the internal governance architecture that enables organizations to successfully pursue certification through recognized bodies.",
  },
];

const engagementModels = [
  {
    icon: Briefcase,
    title: "Governance Architecture Projects",
    description:
      "Design and implementation of enterprise governance frameworks and quality management systems.",
  },
  {
    icon: Search,
    title: "Compliance Gap Assessments",
    description:
      "Structured diagnostic reviews identifying regulatory exposure and operational compliance gaps.",
  },
  {
    icon: BarChart3,
    title: "Federal Supply Chain Readiness",
    description:
      "Governance preparation for organizations entering government contracting ecosystems.",
  },
  {
    icon: FileCheck,
    title: "Audit & Certification Preparation",
    description:
      "System architecture and documentation design supporting ISO certification and regulatory inspections.",
  },
];

const coreCompetencies = [
  "PWS/SOW Forensic Analysis",
  "LOGCAP V/VI Mobilization & Recovery",
  "EU AI Act Compliance & Governance",
  "Sub-tier Operational Sovereignty",
  "ISO 13485 & 9001 Alignment",
  "CMMC & NIST 800-171 Readiness",
  "CS3D Ethical Labor Due Diligence",
  "Data Lineage & Algorithmic Auditing",
];

const institutionalLogicSteps = [
  { label: "Defense-Grade Rigor", detail: "Proven under LOGCAP, CMMC, and zero-failure audit environments.", side: "govcon" },
  { label: "Transferable Methodology", detail: "The same forensic discipline applies to distressed data centers, AI governance, and supply chain ethics.", side: "bridge" },
  { label: "Commercial Velocity", detail: "Adapted for the speed, ROI expectations, and board-level reporting commercial leaders demand.", side: "commercial" },
];

const sectorContent = {
  federal: {
    headline: "Federal Prime / Sub Capabilities",
    items: [
      { title: "CMMC Level 2–3 Readiness", desc: "Full NIST 800-171 control mapping, SSP development, and POA&M remediation." },
      { title: "FAR/DFARS Compliance Architecture", desc: "Flowdown analysis, contractual friction audits, and clause-level risk assessment." },
      { title: "CAR & Cure Notice Recovery", desc: "96-hour stabilization for programs facing Level III CARs or termination risk." },
      { title: "LOGCAP Mobilization Support", desc: "Governance and quality infrastructure for austere-environment sustainment operations." },
    ],
  },
  commercial: {
    headline: "Commercial / Tech Leader Capabilities",
    items: [
      { title: "EU AI Act & ISO 42001", desc: "High-risk classification mapping, compliance gap analysis, and governance system design." },
      { title: "Data Center Recovery", desc: "Forensic stabilization of distressed $100M+ infrastructure builds — restoring delivery discipline." },
      { title: "ESG & Supply Chain Integrity", desc: "CS3D readiness, Battery Passport compliance, and ethical labor due diligence programs." },
      { title: "Investor-Ready Operations", desc: "Governance maturity frameworks that command premium valuations during due diligence." },
    ],
  },
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ElevateQCS",
  description:
    "Compliance advisory firm specializing in governance systems, infrastructure recovery, AI governance, ISO frameworks, federal contracting compliance, and supply chain regulatory oversight.",
  areaServed: "Global",
  serviceType: [
    "ISO 9001 Consulting",
    "CMMC Readiness Advisory",
    "Government Contract Compliance",
    "Supply Chain Compliance",
    "Regulatory Governance Systems",
    "AI Governance Advisory",
    "Infrastructure Recovery",
    "EU AI Act Compliance",
  ],
  url: "https://elevateqcs.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Inquiries",
    email: "info@elevateqcs.com",
  },
};

export default function Capabilities() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeSector, setActiveSector] = useState<"federal" | "commercial">("federal");
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Please acknowledge the disclaimer before downloading.");
      return;
    }
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Please complete all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await supabase.from("resource_leads").insert({
        email: formData.email,
        type: "capabilities-statement",
      });

      generateCapabilitiesPdf(formData);

      toast.success("Your capabilities statement is downloading.");
      setFormData({ name: "", email: "", company: "", industry: "" });
      setConsent(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const currentSector = sectorContent[activeSector];

  return (
    <Layout>
      <SEOHead
        title="Sovereign Quality for Distressed Infrastructure & Regulated AI | ElevateQCS"
        description="ElevateQCS architects governance infrastructure for distressed infrastructure recovery, regulated AI governance, and federal compliance. ISO, CMMC, EU AI Act, FAR/DFARS advisory."
        url="https://elevateqcs.com/capabilities"
        keywords={[
          "compliance advisory firm",
          "government contracting compliance",
          "ISO 9001 consulting",
          "CMMC advisory",
          "FAR DFARS compliance consulting",
          "supply chain compliance advisory",
          "EU AI Act governance",
          "infrastructure recovery advisory",
          "AI governance consulting",
          "distressed project recovery",
        ]}
        jsonLd={schemaJsonLd}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-wide relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
              Capabilities Statement
            </p>
            <h1 className="text-primary-foreground mb-8 animate-fade-up-delay-1">
              Sovereign Quality for Distressed Infrastructure and Regulated AI
            </h1>
            <div className="space-y-5 animate-fade-up-delay-2">
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                ElevateQCS architects the governance infrastructure that stabilizes 
                distressed programs, governs high-risk AI systems, and fortifies 
                organizations operating where failure carries institutional consequence.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed">
                From the forensic recovery of stalled $100M+ infrastructure builds to 
                the governance of agentic AI under the EU AI Act, we design the frameworks 
                that ensure institutional survival — bridging the zero-failure rigor of 
                defense-scale operations with the velocity demands of commercial markets.
              </p>
              <p className="text-primary-foreground/60 italic">
                We don't just maintain systems; we stabilize them.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                onClick={scrollToDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Capabilities Statement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTOR SELECTOR (Interactive Digital Capability Statement) ─── */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Tailored to Your Sector
            </p>
            <h2 className="mb-4">Select Your Operating Environment</h2>
            <p className="text-muted-foreground">
              Our advisory is structured for two distinct operating realities. 
              Select your sector to see relevant capabilities.
            </p>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-card border border-border rounded-sm overflow-hidden">
              <button
                onClick={() => setActiveSector("federal")}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSector === "federal"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Shield className="w-4 h-4" />
                I am a Federal Prime / Sub
              </button>
              <button
                onClick={() => setActiveSector("commercial")}
                className={`px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSector === "commercial"
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Cpu className="w-4 h-4" />
                I am a Commercial / Tech Leader
              </button>
            </div>
          </div>

          {/* Sector Content */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-8 text-center">{currentSector.headline}</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {currentSector.items.map((item) => (
                <div key={item.title} className="card-elevated p-6">
                  <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link to={activeSector === "federal" ? "/contact?track=federal" : "/contact?track=commercial"}>
                  {activeSector === "federal" ? "Request an Audit-Readiness Stress Test" : "Request a Project Friction Assessment"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STRATEGIC ADVISORY DOMAINS (5 Pillars) ─── */}
      <section className="section-luxury py-24 lg:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Strategic Advisory Domains
            </p>
            <h2>
              Five pillars of institutional resilience
            </h2>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid gap-10">
            {advisoryDomains.map((domain) => (
              <div
                key={domain.title}
                className="card-elevated p-8 lg:p-10"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                    <domain.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl mb-4">{domain.title}</h3>
                    <p className="mb-5">{domain.description}</p>
                    {domain.tags && (
                      <div className="grid sm:grid-cols-2 gap-3 mb-5">
                        <div className="bg-secondary/60 border border-border rounded-sm p-3">
                          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">Commercial</p>
                          <p className="text-sm text-muted-foreground">{domain.tags.commercial}</p>
                        </div>
                        <div className="bg-secondary/60 border border-border rounded-sm p-3">
                          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-1">GovCon</p>
                          <p className="text-sm text-muted-foreground">{domain.tags.govcon}</p>
                        </div>
                      </div>
                    )}
                    <p className="text-foreground font-medium text-sm mb-3">
                      Key competencies:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                      {domain.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-muted-foreground text-sm italic border-l-2 border-accent/30 pl-4">
                      {domain.footer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTITUTIONAL LOGIC DIAGRAM ─── */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The Defense-Commercial Nexus
            </p>
            <h2 className="mb-4">Defense-Grade Rigor. Commercial Velocity.</h2>
            <p className="text-muted-foreground">
              Our defense background is not red tape — it's a transferable asset. 
              The same forensic discipline that survives DCMA scrutiny stabilizes 
              distressed commercial infrastructure.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-0 items-stretch">
              {institutionalLogicSteps.map((step, index) => (
                <div key={step.label} className="relative flex flex-col items-center text-center">
                  <div className={`w-full p-8 rounded-sm border ${
                    step.side === "bridge" 
                      ? "bg-accent/10 border-accent/30" 
                      : "card-elevated"
                  }`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 ${
                      step.side === "govcon" ? "bg-primary text-primary-foreground" :
                      step.side === "bridge" ? "bg-accent text-accent-foreground" :
                      "bg-primary text-primary-foreground"
                    }`}>
                      <span className="text-sm font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-base font-semibold mb-2">{step.label}</h4>
                    <p className="text-sm text-muted-foreground">{step.detail}</p>
                  </div>
                  {index < institutionalLogicSteps.length - 1 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                      <ChevronRight className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE COMPETENCIES (AI Entity Extraction) ─── */}
      <section className="py-16 bg-background border-y border-border">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-accent font-medium tracking-widest uppercase text-xs mb-3">
              Core Competencies
            </p>
            <h3 className="text-lg font-semibold">Structured for Regulatory Precision</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {coreCompetencies.map((comp) => (
              <span key={comp} className="px-4 py-2 bg-secondary/60 border border-border rounded-sm text-sm text-foreground">
                {comp}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES (Modernized) ─── */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Industries We Support
            </p>
            <h2>
              Specialized expertise for hyper-growth sectors and regulated environments
            </h2>
            <div className="section-divider mt-6" />
            <p className="mt-6">
              ElevateQCS supports organizations operating in mission-critical industries 
              where governance failures carry financial, legal, or operational consequence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div key={ind.title} className="card-elevated p-6">
                <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center mb-4">
                  <ind.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-base font-semibold mb-2">{ind.title}</h4>
                <p className="text-sm text-muted-foreground">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2026 DIFFERENTIATORS ─── */}
      <section className="section-luxury py-24 lg:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The 2026 Edge
            </p>
            <h2>What sets us apart in an evolving regulatory landscape</h2>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="card-elevated p-8">
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The ElevateQCS Approach
            </p>
            <h2>Governance systems designed for operational reality</h2>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {approachItems.map((item) => (
              <div key={item.title} className="card-elevated p-8">
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="section-luxury py-24 lg:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Engagement Models
            </p>
            <h2>
              Structured advisory programs aligned with regulatory expectations
            </h2>
            <div className="section-divider mt-6" />
            <p className="mt-6">
              Organizations engage ElevateQCS through structured advisory
              programs designed to align governance infrastructure with
              regulatory expectations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {engagementModels.map((model) => (
              <div key={model.title} className="card-elevated p-8">
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <model.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg mb-3">{model.title}</h4>
                <p className="text-sm text-muted-foreground">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOWNLOAD / LEAD CAPTURE ─── */}
      <section
        ref={downloadRef}
        className="py-24 lg:py-32 bg-secondary/50"
      >
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Download Capabilities Statement
              </p>
              <h2 className="mb-6">ElevateQCS Capabilities Statement (PDF)</h2>
              <div className="section-divider mb-8" />
              <p className="mb-4">
                Our full capabilities statement provides an overview of our
                advisory domains, regulatory expertise, and engagement models.
              </p>
              <p className="text-muted-foreground">
                Download the official ElevateQCS capabilities statement used by
                organizations evaluating advisory partnerships.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="card-elevated p-8 lg:p-10 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="cap-name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cap-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  maxLength={100}
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cap-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cap-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  maxLength={255}
                  placeholder="Work email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cap-company">
                  Company <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cap-company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                  maxLength={100}
                  placeholder="Organization name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cap-industry">Industry</Label>
                <Input
                  id="cap-industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  maxLength={100}
                  placeholder="e.g., Defense, AI Infrastructure"
                />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="cap-consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                />
                <Label
                  htmlFor="cap-consent"
                  className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I understand this document is informational and does not
                  constitute legal, financial, or compliance advisory.
                </Label>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                {submitting ? "Processing…" : "Download Capabilities Statement"}
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section className="py-12 border-t border-border">
        <div className="container-narrow">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>DISCLAIMER:</strong> The materials provided by ElevateQCS,
            including tools, templates, frameworks, reports, or publications, are
            provided for informational purposes only. They do not constitute
            legal advice, financial advice, regulatory certification, or formal
            compliance advisory. Organizations should conduct independent due
            diligence and consult appropriate professional advisors before
            implementing any governance or compliance program. Use of these
            materials does not establish an advisory relationship with
            ElevateQCS.
          </p>
        </div>
      </section>
    </Layout>
  );
}
