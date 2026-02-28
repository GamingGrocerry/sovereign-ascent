import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Globe, Shield, Target, Eye, Wifi } from "lucide-react";
import aboutPrecision from "@/assets/about-precision.jpg";
import aboutHeritage from "@/assets/about-heritage.jpg";
import governanceEthics from "@/assets/governance-ethics.jpg";


const values = [
  {
    icon: Award,
    title: "Operational Clarity",
    description: "We transform complex regulatory requirements into actionable, implementable frameworks that your teams can execute with confidence.",
  },
  {
    icon: Users,
    title: "Risk Reduction",
    description: "Our methodologies identify, quantify, and systematically address compliance risks before they become audit findings.",
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

export default function About() {
  return (
    <Layout>
      <SEOHead
        title="About ElevateQCS | Independent Quality & Compliance Advisory"
        description="ElevateQCS is a principal-led advisory firm built on hands-on experience designing QMS frameworks across major government contracting programs. Vendor-neutral, NDA-first."
        url="https://elevateqcs.com/about"
        keywords={["about ElevateQCS", "compliance advisory firm", "quality management advisory", "GovCon compliance"]}
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
                We Build Compliance Systems for Clarity and Control
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
              ElevateQCS is a principal-led advisory firm built on hands-on 
                experience designing, implementing, monitoring, and supporting 
                QMS frameworks across high-value, highly regulated government 
                contracting programs.
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
                  This distinction is fundamental. We don't certify — we architect. 
                  We don't approve — we advise. We don't authorize — we support. 
                  Our role is to transfer knowledge and capability to your 
                  organization, not to create dependency.
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
                "We don't certify. We architect. We don't approve. We advise. 
                We don't authorize. We support."
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

      {/* Remote by Design */}
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
              <p className="text-muted-foreground leading-relaxed">
                Our remote model enables us to support clients across the US, 
                EU, and Middle East without the overhead that inflates advisory 
                fees. Secure communications, structured workflows, and 
                disciplined project management ensure every engagement 
                receives the same rigor as in-person delivery.
              </p>
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
                <p className="text-xs text-muted-foreground">Encrypted communications</p>
              </div>
              <div className="card-elevated p-6 text-center">
                <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                <h4 className="text-sm font-semibold mb-1">Right Expertise</h4>
                <p className="text-xs text-muted-foreground">No geographic limits</p>
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

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Work With Us</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            If you're seeking advisory support grounded in real-world experience 
            and delivered with complete discretion, we'd welcome the opportunity 
            to discuss your compliance objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Request a Confidential Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/governance">
                Learn About Our Governance
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
