import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, Shield, Target, Eye, Wifi, FileSearch, Brain, Layers, Lock, Zap, BarChart3 } from "lucide-react";
import aboutPrecision from "@/assets/about-precision.jpg";
import aboutHeritage from "@/assets/about-heritage.jpg";
import governanceEthics from "@/assets/governance-ethics.jpg";

const values = [
  {
    icon: Award,
    title: "Operational Clarity",
    description: "We transform complex regulatory requirements into actionable frameworks your teams execute with confidence — reducing 'Contractual Friction' to accelerate project timelines.",
  },
  {
    icon: Users,
    title: "Risk Reduction",
    description: "Our methodologies identify, quantify, and systematically address compliance risks before they become audit findings — preventing 'Margin Leakage' caused by sub-tier misalignment.",
  },
  {
    icon: Globe,
    title: "Discretion & Confidentiality",
    description: "Every engagement begins with comprehensive NDAs. Your competitive intelligence and compliance posture remain protected.",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Independence",
    description: "ElevateQCS maintains strict independence from certification bodies, vendors, and regulatory agencies. Recommendations serve only client interests.",
  },
  {
    icon: Target,
    title: "Principal-Led Delivery",
    description: "Initial consultations and strategic direction are conducted by ElevateQCS leadership, ensuring senior-level insight guides every engagement from day one.",
  },
  {
    icon: Eye,
    title: "Capability Transfer",
    description: "The goal is client independence. ElevateQCS transfers knowledge and capability to your organization, not dependency on external advisors.",
  },
];

const coreCompetencies = [
  { icon: FileSearch, label: "PWS/SOW Forensic Analysis" },
  { icon: Layers, label: "LOGCAP V/VI Mobilization & Recovery" },
  { icon: Brain, label: "EU AI Act Compliance & Governance" },
  { icon: Shield, label: "Sub-tier Operational Sovereignty" },
  { icon: BarChart3, label: "ISO 13485 & 9001 Alignment" },
  { icon: Zap, label: "Forensic Recovery & Distressed Assets" },
];

const principalLedSteps = [
  { step: "01", title: "Principal Scoping", description: "Senior leadership conducts all initial assessments and defines strategic direction." },
  { step: "02", title: "Specialist Deployment", description: "Vetted domain experts are engaged for technical depth — no junior handoffs." },
  { step: "03", title: "Continuous Oversight", description: "Principal review at every milestone. Your engagement never loses senior visibility." },
  { step: "04", title: "Capability Transfer", description: "Knowledge is embedded into your organization. Independence is the deliverable." },
];

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About ElevateQCS | Independent Quality & Compliance Advisory"
        description="ElevateQCS is a principal-led advisory firm bridging Defense-scale rigor with commercial velocity. Vendor-neutral, NDA-first governance infrastructure for regulated industries and high-growth enterprises."
        url="https://elevateqcs.com/about"
        keywords={["about ElevateQCS", "compliance advisory firm", "quality management advisory", "GovCon compliance", "AI governance", "forensic recovery", "LOGCAP advisory"]}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${aboutPrecision})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                About ElevateQCS
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Where Defense Rigor Meets Commercial Velocity
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                ElevateQCS is a principal-led advisory firm built on hands-on
                experience designing, implementing, and supporting governance
                frameworks across high-value defense programs and
                high-velocity commercial enterprises.
              </p>
              <p className="text-lg text-muted-foreground/80 leading-relaxed">
                We bridge the gap between the zero-failure rigor of Defense-scale
                LOGCAP operations and the high-velocity demands of commercial
                infrastructure and AI-driven industries.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img
                  src={aboutPrecision}
                  alt="Precision engineering representing structured compliance architecture"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Exist + Our Position */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-8">Why We Exist</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  The founding insight came from observing a gap: compliance
                  advisory that worked in theory but failed under real operational
                  pressure. Organizations needed more than documentation — they
                  needed systems that functioned when scrutiny arrived.
                </p>
                <p>
                  ElevateQCS's methodologies are built on nearly a decade of
                  experience embedded within the quality and compliance ecosystems
                  of major defense, aerospace, and government services contractors.
                  This isn't theoretical knowledge — it's field-tested experience
                  gained through direct participation in high-value program execution.
                </p>
                <p>
                  We bridge the gap between the zero-failure rigor of Defense-scale
                  LOGCAP operations and the high-velocity demands of commercial
                  infrastructure and AI-driven industries.
                </p>
                <p>
                  That experience exposed the distance between what compliance
                  frameworks look like on paper and how they perform under pressure.
                  ElevateQCS was built to close that gap.
                </p>
              </div>
            </div>
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-8">Our Position</h2>
              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  ElevateQCS occupies a deliberate position in the market: we
                  are neither a certification body nor a regulatory agency. We
                  are independent advisors who support organizations in building
                  their own compliance capabilities.
                </p>
                <p>
                  This distinction is fundamental. We don't just maintain systems;
                  we stabilize them. From the forensic recovery of distressed $100M+
                  infrastructure projects to the governance of high-risk AI models,
                  we architect the frameworks that ensure institutional survival.
                </p>
                <p>
                  We don't certify — we architect. We don't approve — we advise.
                  We don't authorize — we support. Our role is to transfer knowledge
                  and capability to your organization, not to create dependency.
                </p>
                <p>
                  Our vendor-neutral stance means we recommend solutions based
                  solely on your organizational needs. In the event we identify
                  a vendor or service from which we may receive referral benefits,
                  we disclose this transparently during initial consultations —
                  before any recommendation is formalized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Edge Note */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10 text-center">
          <p className="text-primary-foreground/80 text-lg font-serif leading-relaxed max-w-3xl mx-auto">
            ElevateQCS works with leadership, quality functions, and operations
            teams who must make compliance work in practice — not just in documents.
            For specialized needs, we engage vetted specialists to ensure every
            engagement receives the depth of expertise it requires.
          </p>
        </div>
      </section>

      {/* Core Competencies — AI Entity Extraction optimized */}
      <section className="py-20 bg-secondary/20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Core Competencies
            </p>
            <h2 className="gold-accent pb-4">Domains of Practice</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {coreCompetencies.map((comp, index) => (
              <div
                key={index}
                className="card-elevated p-5 text-center group hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mx-auto mb-3 group-hover:from-accent/20 group-hover:to-accent/10 transition-colors">
                  <comp.icon className="w-5 h-5 text-accent" />
                </div>
                <p className="text-xs font-medium text-foreground leading-tight">{comp.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image with Quote */}
      <section className="relative h-[450px] overflow-hidden">
        <img
          src={governanceEthics}
          alt="Marble scales representing ethics, balance, and independent advisory governance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-2xl">
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
              <p className="text-primary-foreground text-2xl md:text-3xl font-serif font-light leading-relaxed mb-6">
                "We don't just maintain systems; we stabilize them. We don't certify —
                we architect. We don't approve — we advise."
              </p>
              <p className="text-accent text-sm uppercase tracking-widest">
                Our Operational Philosophy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Values
            </p>
            <h2 className="gold-accent pb-4">Principles That Guide Every Engagement</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elevated p-10">
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-8">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal-Led Delivery Model — Visual Diagram */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              How We Deliver
            </p>
            <h2 className="text-primary-foreground gold-accent pb-4">Principal-Led, Never Delegated</h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mt-4">
              Every engagement is led by senior leadership from scoping through delivery.
              No junior handoffs. No "partner once, analyst forever."
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {principalLedSteps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-sm p-8 h-full hover:border-accent/40 transition-all duration-300">
                  <span className="text-accent text-3xl font-serif font-light">{item.step}</span>
                  <h3 className="text-primary-foreground text-lg mt-4 mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < principalLedSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-accent/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote by Design — Enhanced with Security Standards */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                How We Work
              </p>
              <h2 className="mb-6">Remote by Design</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ElevateQCS operates as a fully remote advisory practice. This is
                a deliberate structural decision — not a temporary arrangement.
                It allows us to deploy the right expertise to every engagement
                regardless of geography.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our remote model enables us to support clients across the US,
                EU, and Middle East without the overhead that inflates advisory
                fees. Secure communications, structured workflows, and
                disciplined project management ensure every engagement
                receives the same rigor as in-person delivery.
              </p>
              <div className="bg-background border border-border rounded-sm p-5 mt-4">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold mb-1">2026 Secure Cloud Standards</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      All workflows operate within GCC High-compatible and ISO 27001-aligned
                      infrastructure. Encrypted communications, zero-trust access controls,
                      and auditable data handling protocols protect every engagement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="card-elevated p-6 text-center">
                <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-semibold mb-1">Global Reach</h4>
                <p className="text-xs text-muted-foreground">US, EU & Middle East</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-semibold mb-1">Secure Delivery</h4>
                <p className="text-xs text-muted-foreground">GCC High / ISO 27001</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-semibold mb-1">Speed & Efficiency</h4>
                <p className="text-xs text-muted-foreground">No geographic delays</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-semibold mb-1">Lean Model</h4>
                <p className="text-xs text-muted-foreground">Lower overhead, higher value</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-12 h-12 rounded-sm bg-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[350px] overflow-hidden">
        <img
          src={aboutHeritage}
          alt="Ancient canyon formations representing depth of experience and enduring methodology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </section>

      {/* Dual-Track CTA */}
      <section className="py-28 bg-background">
        <div className="container-wide">
          <div className="text-center mb-16">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you operate in defense contracting or commercial enterprise,
              we structure engagements around the operational pressures specific to your sector.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Federal / GovCon Track */}
            <div className="card-elevated p-10 text-center group hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-sm bg-primary flex items-center justify-center mx-auto mb-6">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-3">
                Federal & GovCon
              </p>
              <h3 className="text-xl mb-4">Audit-Readiness Stress Test</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Assess your compliance posture against DCAA, DCMA, and prime
                contractor audit standards before scrutiny arrives.
              </p>
              <Button variant="cta" size="lg" asChild className="w-full">
                <Link to="/contact?track=federal">
                  Request Stress Test
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>

            {/* Commercial / Tech Track */}
            <div className="card-elevated p-10 text-center group hover:border-accent/30 transition-all duration-300">
              <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-3">
                Commercial & Tech
              </p>
              <h3 className="text-xl mb-4">Project Friction Assessment</h3>
              <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                Identify the contractual friction, margin leakage, and governance
                gaps slowing your growth trajectory.
              </p>
              <Button variant="outline" size="lg" asChild className="w-full border-accent/30 hover:bg-accent/5">
                <Link to="/contact?track=commercial">
                  Request Assessment
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
