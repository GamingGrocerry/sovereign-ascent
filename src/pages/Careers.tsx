import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Handshake, Globe, Award } from "lucide-react";
import careersHero from "@/assets/careers-hero.jpg";
import governanceEthics from "@/assets/governance-ethics.jpg";
const collaborationTypes = [
  {
    icon: Users,
    title: "Subject Matter Experts",
    description: "We collaborate with experienced professionals who bring deep domain expertise in specific regulatory frameworks, industry verticals, or technical disciplines.",
  },
  {
    icon: Handshake,
    title: "Strategic Partners",
    description: "We maintain relationships with complementary professional services firms—legal, accounting, technology—to provide holistic support when client needs extend beyond our core competencies.",
  },
  {
    icon: Globe,
    title: "Regional Specialists",
    description: "For engagements requiring in-depth regional knowledge or language capabilities, we work with qualified local professionals who understand specific jurisdictional requirements.",
  },
  {
    icon: Award,
    title: "Former Practitioners",
    description: "We value the perspective of those who have operated compliance systems from within organizations—former quality managers, compliance officers, and audit professionals.",
  },
];

const values = [
  {
    title: "Excellence Over Volume",
    description: "We prioritize quality of work and client outcomes over scaling for its own sake. Every engagement receives the attention it deserves.",
  },
  {
    title: "Independence & Integrity",
    description: "We maintain strict independence and make recommendations based solely on client interests, never influenced by external relationships.",
  },
  {
    title: "Practical Application",
    description: "We value real-world experience and practical wisdom. Theoretical knowledge matters, but implementation expertise is what delivers results.",
  },
  {
    title: "Continuous Learning",
    description: "The regulatory landscape evolves constantly. We invest in staying current with emerging requirements, enforcement trends, and best practices.",
  },
];

export default function Careers() {
  return (
    <Layout>
      <SEOHead
        title="Careers & Collaborations | ElevateQCS"
        description="Work with ElevateQCS as a subject matter expert, strategic partner, or regional specialist. Collaborate with an independent compliance advisory firm."
        url="https://elevateqcs.com/careers"
        keywords={["compliance careers", "advisory collaboration", "compliance consulting careers"]}
      />
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${careersHero})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Join Us
            </p>
            <h1 className="mb-6 gold-accent pb-4">Careers & Collaborations</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We work with experienced professionals and specialists who share 
              our commitment to excellence, independence, and practical impact 
              in compliance advisory.
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
              <h2 className="mb-6">Our Approach to Growth</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ElevateQCS grows thoughtfully. We prioritize the quality of our 
                advisory services and client relationships over rapid expansion. 
                This means we're selective about who we work with—both clients 
                and collaborators.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe the best advisory work comes from professionals with 
                deep expertise and genuine commitment to client outcomes. Whether 
                as team members or collaboration partners, we seek those who 
                share this philosophy.
              </p>
            </div>
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Why Work With Us</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Working with us means engaging with meaningful compliance 
                challenges for organizations where the work makes a real 
                difference. It means operating with complete independence 
                and integrity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We offer the focus and client proximity of a specialized advisory 
                practice with the depth and rigor of institutional consulting. 
                Every project involves direct senior engagement and 
                meaningful responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-24 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Working Together
            </p>
            <h2 className="gold-accent pb-4">Collaboration Opportunities</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <div key={index} className="card-elevated p-8">
                <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl mb-4">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote Work */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              How We Work
            </p>
            <h2 className="mb-6">Fully Remote, Fully Committed</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All collaboration with ElevateQCS is remote by design. We work with 
              specialists across time zones using secure, structured workflows — 
              ensuring flexibility without compromising rigor or confidentiality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="card-elevated p-6 text-center">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="text-sm font-semibold mb-2">Location-Independent</h4>
              <p className="text-xs text-muted-foreground">Collaborate from anywhere with a secure connection</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <Handshake className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="text-sm font-semibold mb-2">Structured Engagement</h4>
              <p className="text-xs text-muted-foreground">Clear deliverables, timelines, and communication protocols</p>
            </div>
            <div className="card-elevated p-6 text-center">
              <Award className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="text-sm font-semibold mb-2">Merit-Based Selection</h4>
              <p className="text-xs text-muted-foreground">Expertise and track record drive every collaboration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics Image Break */}
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src={governanceEthics} 
          alt="Balance and integrity in collaboration" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <p className="text-primary-foreground text-xl md:text-2xl font-serif font-light leading-relaxed">
              We seek collaborators who share our commitment to excellence, 
              independence, and practical impact.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2>What We Value</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {values.map((value, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-1 bg-gradient-to-b from-accent to-accent/20 shrink-0" />
                <div>
                  <h3 className="text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-card border border-border rounded-sm p-8 md:p-12">
              <h2 className="text-2xl mb-6">Current Opportunities</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We are not currently advertising specific positions. However, 
                we are always interested in connecting with experienced 
                professionals who share our commitment to excellence in 
                compliance advisory.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you believe your expertise and approach align with our 
                practice, we welcome your outreach. Please include context 
                about your background and the type of collaboration you envision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Interested in Collaborating?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We'd welcome the opportunity to discuss potential collaboration. 
            Please reach out through our contact form with context about 
            your background and interests.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
