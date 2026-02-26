import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Scale, Eye, Lock, FileCheck, Users } from "lucide-react";
import governanceBoardroom from "@/assets/governance-boardroom.jpg";
import ethicsBalance from "@/assets/ethics-balance.jpg";
const principles = [
  {
    icon: Scale,
    title: "Independence",
    description: "We maintain strict independence from certification bodies, regulatory agencies, and software vendors. Our recommendations are based solely on client needs, not external relationships or referral arrangements.",
  },
  {
    icon: Shield,
    title: "Vendor Neutrality",
    description: "We recommend solutions based solely on your organizational needs. In the event we identify a vendor, product, or service from which we may receive referral benefits or compensation, we disclose this transparently to clients during the initial engagement meeting — prior to any recommendation being formalized.",
  },
  {
    icon: Eye,
    title: "Conflict of Interest Management",
    description: "We proactively identify and disclose potential conflicts. If we cannot serve your interests without compromise, we will decline the engagement rather than proceed with divided loyalties.",
  },
  {
    icon: FileCheck,
    title: "Advisory-Only Scope",
    description: "We are advisors, not certifiers. We do not issue certificates, approvals, or authorizations. Our role is to help you build internal capabilities—not to create dependency on external validation.",
  },
  {
    icon: Lock,
    title: "NDA-First Engagement",
    description: "Every engagement begins with a comprehensive Non-Disclosure Agreement. Your competitive intelligence, compliance posture, and organizational details are protected from the first conversation.",
  },
  {
    icon: Users,
    title: "Client Primacy",
    description: "Our obligations run to you, the client. We do not share information with regulatory bodies, competitors, or other parties without explicit authorization. Your interests guide every recommendation.",
  },
];

export default function Governance() {
  return (
    <Layout>
      <SEOHead
        title="Governance & Ethics | ElevateQCS"
        description="ElevateQCS governance framework: independence, vendor neutrality, conflict of interest management, NDA-first engagement, and advisory-only scope boundaries."
        url="https://elevateqcs.com/governance"
        keywords={["compliance governance", "advisory ethics", "vendor neutral advisory"]}
      />
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${governanceBoardroom})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Standards
            </p>
            <h1 className="mb-6 gold-accent pb-4">Governance & Independence</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our governance principles are not marketing statements—they are 
              operational commitments that define how we engage with every client 
              and inform every recommendation we make.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Why Governance Matters</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In the compliance advisory space, conflicts of interest are endemic. 
                Many firms recommend solutions from which they benefit financially, 
                or maintain relationships with certification bodies that compromise 
                objectivity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ElevateQCS was founded with a different model. We believe that 
                advisory independence is not just ethically important—it is 
                practically essential for delivering recommendations that truly 
                serve client interests.
              </p>
            </div>
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Our Position</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We are not a certification body. We are not a regulatory agency. 
                We do not issue certifications, approvals, or authorizations of 
                any kind.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our role is to support organizations in building their own 
                compliance capabilities. We transfer knowledge and methodology, 
                not create ongoing dependency. When our engagement ends, you 
                should be more capable than when we started.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-24 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Core Principles
            </p>
            <h2 className="gold-accent pb-4">How We Operate</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                  <principle.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl mb-4">{principle.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[350px] overflow-hidden">
        <img 
          src={ethicsBalance} 
          alt="Scales of justice representing balance and ethics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-wide">
            <div className="max-w-xl">
              <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
              <p className="text-primary-foreground text-2xl md:text-3xl font-serif font-light leading-relaxed mb-4">
                "Independence is not a marketing claim—it is the foundation of 
                every recommendation we make."
              </p>
              <p className="text-accent text-sm uppercase tracking-widest">
                Our Governance Philosophy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary/5 border border-primary/10 rounded-sm p-8 md:p-12">
              <h2 className="text-2xl mb-6 text-center">Legal & Advisory Disclaimer</h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p>
                  <strong className="text-foreground">Advisory Services:</strong> All services 
                  provided by Elevate Quality Compliance Solutions LLC are advisory in nature. 
                  We do not provide legal advice, and our services do not replace the need for 
                  qualified legal counsel when addressing legal or regulatory matters.
                </p>
                <p>
                  <strong className="text-foreground">Not a Certification Body:</strong> ElevateQCS 
                  is not a certification body, accredited registrar, or regulatory agency. We do 
                  not issue certifications, approvals, or authorizations. Clients seeking 
                  certification should engage directly with appropriate certification bodies.
                </p>
                <p>
                  <strong className="text-foreground">No Guarantee of Outcomes:</strong> While 
                  we apply rigorous methodology and professional expertise, we cannot guarantee 
                  audit outcomes, certification results, or regulatory findings. These outcomes 
                  depend on many factors, including client implementation and organizational context.
                </p>
                <p>
                  <strong className="text-foreground">Confidentiality:</strong> All client 
                  information is treated as confidential under executed Non-Disclosure Agreements. 
                  We do not disclose client identities or engagement details without explicit 
                  written authorization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Questions About Our Approach?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We welcome questions about our governance practices. Transparency 
            about how we operate is part of building the trust that effective 
            advisory relationships require.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Start a Confidential Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
