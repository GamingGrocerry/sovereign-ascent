import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Compass, Wrench, Users, BarChart3 } from "lucide-react";
import methodologyRipples from "@/assets/methodology-ripples.jpg";
import servicesFramework from "@/assets/services-framework.jpg";
import methodologyCompass from "@/assets/methodology-compass.jpg";

const phases = [
  {
    number: "01",
    name: "Diagnose",
    icon: Search,
    title: "Current State Assessment",
    description: "We begin with a comprehensive assessment of your existing compliance infrastructure, organizational context, and risk landscape.",
    activities: [
      "Stakeholder interviews and documentation review",
      "Gap analysis against applicable standards",
      "Risk identification and prioritization",
      "Organizational readiness evaluation",
    ],
    deliverable: "Diagnostic Report with prioritized recommendations",
  },
  {
    number: "02",
    name: "Architect",
    icon: Compass,
    title: "Framework Design",
    description: "Based on diagnostic findings, we design a compliance framework tailored to your organizational structure, culture, and operational requirements.",
    activities: [
      "Process architecture and workflow design",
      "Policy and procedure framework development",
      "Role and responsibility definition",
      "Technology and tooling recommendations",
    ],
    deliverable: "Comprehensive Architecture Blueprint",
  },
  {
    number: "03",
    name: "Implement",
    icon: Wrench,
    title: "Controlled Deployment",
    description: "We support the phased implementation of your compliance framework with hands-on guidance and change management support.",
    activities: [
      "Pilot program execution",
      "Documentation development and refinement",
      "System configuration and integration",
      "Stakeholder communication and training",
    ],
    deliverable: "Implemented and documented compliance system",
  },
  {
    number: "04",
    name: "Embed",
    icon: Users,
    title: "Organizational Integration",
    description: "We work to embed compliance practices into your organizational culture, ensuring sustainable adoption beyond initial implementation.",
    activities: [
      "Training program execution",
      "Competency assessment and development",
      "Process ownership assignment",
      "Cultural integration strategies",
    ],
    deliverable: "Trained workforce with embedded practices",
  },
  {
    number: "05",
    name: "Monitor",
    icon: BarChart3,
    title: "Continuous Improvement",
    description: "We establish monitoring mechanisms that provide ongoing visibility into compliance performance and support continuous improvement.",
    activities: [
      "KPI development and tracking",
      "Internal audit program support",
      "Management review facilitation",
      "Corrective action process oversight",
    ],
    deliverable: "Monitoring framework and improvement roadmap",
  },
];

export default function Methodology() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${methodologyRipples})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Our Methodology
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                The ECAM Framework
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ECAM—Elevate Compliance Architecture Methodology—is our structured 
                approach to building compliance systems that are designed for 
                operational reality, not theoretical perfection.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={methodologyRipples} 
                  alt="Concentric ripples representing methodical process" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <p className="text-primary-foreground/80 text-sm text-center">
            ECAM is an internal advisory methodology developed by ElevateQCS. 
            It is not a certifiable standard or externally validated framework.
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <div className="section-divider mx-auto mb-8" />
            <h2 className="mb-6">Five Phases of Compliance Excellence</h2>
            <p className="text-lg text-muted-foreground">
              Each phase builds upon the previous, creating a structured path 
              from current state to sustainable compliance maturity.
            </p>
          </div>

          {/* Phase Timeline */}
          <div className="flex justify-center gap-4 md:gap-8 mb-24 overflow-x-auto pb-4">
            {phases.map((phase, index) => (
              <div key={phase.number} className="flex items-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-semibold transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    {phase.number}
                  </div>
                  <span className="text-xs uppercase tracking-wide mt-3 text-muted-foreground group-hover:text-accent transition-colors">
                    {phase.name}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="w-8 md:w-16 h-px bg-gradient-to-r from-border to-accent/30 mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Image Break */}
          <div className="relative h-[300px] rounded-sm overflow-hidden mb-24">
            <img 
              src={servicesFramework} 
              alt="Interconnected compliance framework" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-navy/80" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-primary-foreground text-xl md:text-2xl font-serif font-light text-center max-w-2xl px-6">
                "Structured methodology transforms compliance from burden to competitive advantage"
              </p>
            </div>
          </div>

          {/* Phase Details */}
          <div className="space-y-20">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <phase.icon className="w-7 h-7 text-accent" />
                      </div>
                      <div>
                        <span className="text-accent text-xs uppercase tracking-wide">
                          Phase {phase.number}
                        </span>
                        <h3 className="text-2xl">{phase.name}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">
                      {phase.title}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="card-elevated p-10">
                    <p className="text-lg text-foreground mb-8">
                      {phase.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                          Key Activities
                        </h4>
                        <ul className="space-y-3">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm">
                              <div className="w-1.5 h-1.5 bg-gradient-to-br from-accent to-accent/60 rounded-full mt-2 shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                          Primary Deliverable
                        </h4>
                        <p className="text-foreground font-medium">
                          {phase.deliverable}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Apply ECAM to Your Organization</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Our methodology adapts to your organizational context, timeline, 
            and compliance objectives. Let's discuss how ECAM can support your 
            compliance journey.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Start the Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
