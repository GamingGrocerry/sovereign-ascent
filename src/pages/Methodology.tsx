import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Compass, Wrench, Users, BarChart3 } from "lucide-react";

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
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Methodology
            </p>
            <h1 className="mb-6">
              The ECAM Framework
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              ECAM—Elevate Compliance Architecture Methodology—is our structured 
              approach to building compliance systems that are designed for 
              operational reality, not theoretical perfection.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-primary">
        <div className="container-wide">
          <p className="text-primary-foreground/80 text-sm text-center">
            ECAM is an internal advisory methodology developed by ElevateQCS. 
            It is not a certifiable standard or externally validated framework.
          </p>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6">Five Phases of Compliance Excellence</h2>
            <p className="text-lg text-muted-foreground">
              Each phase builds upon the previous, creating a structured path 
              from current state to sustainable compliance maturity.
            </p>
          </div>

          {/* Phase Timeline */}
          <div className="flex justify-center gap-4 md:gap-8 mb-20 overflow-x-auto pb-4">
            {phases.map((phase, index) => (
              <div key={phase.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-semibold">
                    {phase.number}
                  </div>
                  <span className="text-xs uppercase tracking-wide mt-2 text-muted-foreground">
                    {phase.name}
                  </span>
                </div>
                {index < phases.length - 1 && (
                  <div className="w-8 md:w-16 h-px bg-border mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Phase Details */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="grid lg:grid-cols-12 gap-8 items-start"
              >
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-accent" />
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
                  <div className="card-elevated p-8">
                    <p className="text-lg text-foreground mb-6">
                      {phase.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
                          Key Activities
                        </h4>
                        <ul className="space-y-2">
                          {phase.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
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
      <section className="py-24 bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Apply ECAM to Your Organization</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
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
