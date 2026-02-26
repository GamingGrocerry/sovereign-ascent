import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, FileSignature, Search, Compass, Wrench, Users, BarChart3 } from "lucide-react";
import engagementGateway from "@/assets/engagement-gateway.jpg";
import engagementPartnership from "@/assets/engagement-partnership.jpg";
const phases = [
  {
    step: "01",
    icon: MessageSquare,
    title: "Initial Conversation",
    duration: "1-2 hours",
    description: "We begin with a confidential discussion to understand your organizational context, compliance objectives, and specific challenges. This conversation helps us determine whether our advisory services are a good fit for your needs.",
    outcomes: [
      "Mutual understanding of organizational context",
      "Preliminary scope identification",
      "Assessment of fit and approach",
    ],
  },
  {
    step: "02",
    icon: FileSignature,
    title: "NDA & Scope Definition",
    duration: "1 week",
    description: "Before any detailed information exchange, we execute a comprehensive Non-Disclosure Agreement. We then work together to define the specific scope, objectives, and deliverables for the engagement.",
    outcomes: [
      "Executed confidentiality protections",
      "Clear scope boundaries",
      "Defined deliverables and timeline",
    ],
  },
  {
    step: "03",
    icon: Search,
    title: "Diagnose",
    duration: "2-4 weeks",
    description: "We conduct a thorough assessment of your current state—existing systems, documentation, organizational context, and gap analysis against applicable requirements. This phase produces the foundation for all subsequent work.",
    outcomes: [
      "Current state assessment",
      "Gap analysis report",
      "Prioritized recommendations",
    ],
  },
  {
    step: "04",
    icon: Compass,
    title: "Architect",
    duration: "3-6 weeks",
    description: "Based on diagnostic findings, we design a tailored compliance architecture—process frameworks, governance structures, documentation requirements, and implementation roadmaps that fit your organizational reality.",
    outcomes: [
      "Compliance architecture blueprint",
      "Process design documentation",
      "Implementation roadmap",
    ],
  },
  {
    step: "05",
    icon: Wrench,
    title: "Implement",
    duration: "Variable",
    description: "We support phased implementation with hands-on guidance, documentation development, and change management support. Implementation pace is driven by your organizational capacity and priorities.",
    outcomes: [
      "Operational compliance systems",
      "Documented processes and procedures",
      "Integrated organizational practices",
    ],
  },
  {
    step: "06",
    icon: Users,
    title: "Embed",
    duration: "2-4 weeks",
    description: "We transfer knowledge and capability to your teams through training, coaching, and documentation that enables internal ownership. Our goal is your independence, not ongoing dependency.",
    outcomes: [
      "Trained internal teams",
      "Knowledge transfer completion",
      "Internal ownership established",
    ],
  },
  {
    step: "07",
    icon: BarChart3,
    title: "Monitor & Support",
    duration: "Ongoing (optional)",
    description: "For organizations that benefit from periodic advisory support, we offer ongoing monitoring, check-ins, and advisory availability. This is optional—many clients achieve full independence after embedding.",
    outcomes: [
      "Periodic health checks",
      "Continuous improvement support",
      "Advisory availability as needed",
    ],
  },
];

const faqs = [
  {
    question: "How long do typical engagements run?",
    answer: "Engagements range from focused 4-6 week diagnostic assessments to comprehensive 6-12 month implementation programs. Duration depends on scope, organizational complexity, and implementation pace.",
  },
  {
    question: "Are engagements project-based or retainer?",
    answer: "Most engagements are project-based with defined scope and deliverables. Ongoing retainer arrangements are available for organizations seeking periodic advisory support after initial implementation.",
  },
  {
    question: "How is communication handled during engagements?",
    answer: "We establish regular check-ins (typically weekly or bi-weekly), provide secure document sharing, and maintain availability for ad-hoc consultations. Communication protocols are defined at engagement start.",
  },
  {
    question: "Can you work with our existing systems and tools?",
    answer: "Absolutely. We are vendor-neutral and work within your existing technology environment. We provide recommendations but do not mandate specific tools or platforms.",
  },
  {
    question: "What about confidentiality during the engagement?",
    answer: "All engagements begin with comprehensive NDAs. We do not disclose client identities, engagement details, or any proprietary information. Your competitive intelligence remains protected.",
  },
];

export default function EngagementModel() {
  return (
    <Layout>
      <SEOHead
        title="Engagement Model | ElevateQCS"
        description="How ElevateQCS engagements work: from initial conversation and NDA through diagnostic, architecture, implementation, and capability transfer. Project-based pricing."
        url="https://elevateqcs.com/engagement"
        keywords={["compliance engagement model", "advisory engagement process", "compliance consulting process"]}
      />
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${engagementGateway})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Working Together
            </p>
            <h1 className="mb-6 gold-accent pb-4">Engagement Model</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe in transparency about how engagements work. Understanding 
              the process helps you make informed decisions and sets expectations 
              for effective collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2 className="mb-4">The Engagement Journey</h2>
            <p className="text-lg text-muted-foreground">
              Every engagement follows our ECAM methodology, adapted to your 
              specific context and needs. Here's how the process typically unfolds.
            </p>
          </div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Step indicator */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-start">
                    <div className="w-16 h-16 rounded-sm bg-primary text-primary-foreground flex items-center justify-center font-serif text-lg font-semibold">
                      {phase.step}
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wide lg:mt-2">
                      {phase.duration}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-10">
                  <div className="card-elevated p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                        <phase.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl">{phase.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">{phase.description}</p>
                    <div>
                      <h4 className="text-sm uppercase tracking-wide text-muted-foreground mb-3">
                        Key Outcomes
                      </h4>
                      <ul className="grid md:grid-cols-3 gap-3">
                        {phase.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Image Break */}
      <section className="relative h-[300px] overflow-hidden">
        <img 
          src={engagementPartnership} 
          alt="Connected links representing partnership" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-secondary/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <p className="text-foreground text-xl md:text-2xl font-serif font-light leading-relaxed">
              Every engagement is built on trust, transparency, and a shared 
              commitment to practical outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Common Questions
            </p>
            <h2 className="gold-accent pb-4">Working With Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            {faqs.map((faq, index) => (
              <div key={index} className="card-elevated p-8">
                <h3 className="text-lg mb-4">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Ready to Begin?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            The first step is a confidential conversation to understand your 
            needs. There's no commitment—just an opportunity to explore whether 
            we're the right fit for your compliance objectives.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Schedule Initial Conversation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
