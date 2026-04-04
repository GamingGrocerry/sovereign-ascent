import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Compass, Wrench, Users, BarChart3, CheckCircle } from "lucide-react";
import methodologyRipples from "@/assets/methodology-ripples.jpg";
import methodologyNavigation from "@/assets/methodology-navigation.jpg";
import methodologyCompass from "@/assets/methodology-compass.jpg";

const phases = [
  {
    number: "01",
    name: "Assess",
    icon: Search,
    title: "Understand where you stand today",
    description: "We start by reviewing your current compliance setup — your documentation, processes, risks, and team readiness. The goal is to understand what's working and what needs attention.",
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
    name: "Design",
    icon: Compass,
    title: "Build the right system for your needs",
    description: "Based on what we find, we design a compliance framework that fits your organization — your structure, your culture, and your operational requirements.",
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
    name: "Build",
    icon: Wrench,
    title: "Put the system into practice",
    description: "We help you roll out the new system step by step — writing documentation, configuring tools, and making sure everyone knows what's expected.",
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
    name: "Train",
    icon: Users,
    title: "Make sure your team can run it",
    description: "We train your team to own and operate the system independently — with clear expectations for every role and the confidence to maintain it without us.",
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
    name: "Support",
    icon: BarChart3,
    title: "Keep everything on track over time",
    description: "We set up monitoring so you can see how your compliance system is performing — and catch issues before they become problems.",
    activities: [
      "KPI development and tracking",
      "Internal audit program support",
      "Management review facilitation",
      "Corrective action process oversight",
    ],
    deliverable: "Monitoring framework and improvement roadmap",
  },
];

const principles = [
  "Systems designed for operational reality, not theoretical perfection",
  "Frameworks that scale with organizational growth",
  "Knowledge transfer that builds internal capability",
  "Practical documentation that teams actually use",
  "Risk-based prioritization of improvement efforts",
];

export default function Methodology() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, [hash]);

  return (
    <Layout>
      <SEOHead
        title="Our Process — ECAM Methodology | ElevateQCS"
        description="A clear five-step process for building compliance systems: Assess, Design, Build, Train, and Support. Practical methodology built for real organizations."
        url="https://elevateqcs.com/methodology"
        keywords={["compliance methodology", "compliance process", "quality management methodology", "compliance consulting process"]}
      />
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
                Our Process
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Our Process
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                ECAM is our five-step process for building compliance systems. 
                It gives every engagement a clear structure from start to finish.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={methodologyCompass} 
                  alt="Brass compass representing methodical guidance and direction in compliance navigation" 
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

      {/* Core Principles */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Guiding Principles</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our process is built on principles that focus on what works in 
                practice — not just in documentation.
              </p>
              <ul className="space-y-4">
                {principles.map((principle, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={methodologyNavigation} 
                  alt="Antique navigation instruments representing structured methodology and precision" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section className="py-28 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              The Framework
            </p>
            <h2 className="mb-6">Five Steps to Compliance Maturity</h2>
            <p className="text-lg text-muted-foreground">
              Each phase builds on the previous one — creating a clear path 
              from where you are today to where you need to be.
            </p>
          </div>

          {/* Phase Timeline */}
          <div className="flex justify-center gap-4 md:gap-8 mb-24 overflow-x-auto pb-4">
            {phases.map((phase, index) => (
              <div key={phase.number} className="flex items-center">
                <button
                  className="flex flex-col items-center group cursor-pointer"
                  onClick={() => {
                    const el = document.getElementById(`phase-${phase.number}`);
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  <div className="w-16 h-16 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-semibold transition-all duration-300 group-hover:bg-accent group-hover:scale-110">
                    {phase.number}
                  </div>
                  <span className="text-xs uppercase tracking-wide mt-3 text-muted-foreground group-hover:text-accent transition-colors">
                    {phase.name}
                  </span>
                </button>
                {index < phases.length - 1 && (
                  <div className="w-8 md:w-16 h-px bg-gradient-to-r from-border to-accent/30 mx-2 md:mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* Phase Details */}
          <div className="space-y-16">
            {phases.map((phase) => (
              <div
                key={phase.number}
                id={`phase-${phase.number}`}
                className="grid lg:grid-cols-12 gap-8 items-start scroll-mt-28"
              >
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-32">
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
                  <div className="card-elevated p-8 md:p-10">
                    <p className="text-lg text-foreground mb-8">
                      {phase.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
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
                        <div className="bg-secondary/50 rounded-sm p-4">
                          <p className="text-foreground font-medium">
                            {phase.deliverable}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Break */}
      <section className="relative h-[350px] overflow-hidden">
        <img 
          src={methodologyRipples} 
          alt="Concentric ripples representing systematic, methodical compliance process"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/90" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-6">
            <p className="text-primary-foreground text-2xl md:text-3xl font-serif font-light mb-6">
              "A clear process turns compliance from a burden into a business advantage"
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Our process adapts to your organization's size, industry, 
            and compliance objectives. Let's discuss how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Book a Free Consultation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/engagement">
                View Engagement Model
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
