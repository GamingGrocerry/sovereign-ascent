import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plus,
  Minus,
  AlertTriangle,
  Cpu,
  Building2,
  Shield,
  Globe,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    title: "Project Recovery",
    icon: AlertTriangle,
    iconColor: "text-destructive",
    faqs: [
      {
        question: "We are 60 days behind on a $100M build. Can you stabilize this?",
        answer:
          "Yes. We deploy a Forensic Stabilization protocol within 48 hours to identify sub-tier friction, SOW gaps, and the specific contractual fault lines driving margin leak. We don't just 'consult' — we realign the Chain of Command to stop the hemorrhage and rebuild a defensible delivery trajectory.",
      },
      {
        question: "Do you take over the project management?",
        answer:
          "No. We act as the Independent Quality & Governance Lead — the executive-level oversight layer your project managers are too operationally consumed to document. We provide the 'Audit-Ready' forensic layer that ensures you don't trade short-term speed for a future Cure Notice or contract termination.",
      },
      {
        question: "What if we've already received a Cure Notice or Show Cause?",
        answer:
          "We move to our Forensic Velocity Track. A Principal Lead is deployed within 48 hours to stabilize communications with the Contracting Officer, conduct an immediate root-cause analysis, and architect a corrective action response designed to arrest the escalation trajectory. The first 96 hours are structured as a Stabilization Sprint.",
      },
      {
        question: "Can you help if we are about to lose an option year?",
        answer:
          "Yes. Option year evaluations are decided on documented performance, not good intentions. We conduct a rapid vulnerability mapping to identify the specific findings, open CARs, or deliverable gaps that are likely influencing the decision — and architect the defensive documentation package required to shift the narrative.",
      },
    ],
  },
  {
    title: "AI & Digital Sovereignty",
    icon: Cpu,
    iconColor: "text-accent",
    faqs: [
      {
        question: "Is the EU AI Act relevant if we are a U.S. company?",
        answer:
          "If you have a single user in the EU, or your model impacts EU citizens, or you deploy AI that affects EU market participants — yes. By August 2026, non-compliance carries fines up to €35 million or 7% of global turnover. We architect the Technical Documentation, Risk Management Systems, and Human Oversight Protocols required to maintain your market access.",
      },
      {
        question: "Can you audit our AI for 'Bias' and 'Explainability'?",
        answer:
          "We audit the Governance Framework that manages bias — not the algorithm itself. We ensure your engineering teams have the Human-in-the-Loop controls, Algorithmic Impact Assessments, and documentation architecture that regulators now demand. The audit proves your organisation has sovereign control over the system, not that the system is 'perfect.'",
      },
      {
        question: "What is 'Agentic AI Oversight' and do we need it?",
        answer:
          "Agentic AI systems act autonomously — executing tasks, making decisions, and interacting with external systems without direct human instruction. If your AI can take actions with real-world consequences, regulators expect documented 'kill-switch' protocols, escalation thresholds, and human-override mechanisms. We architect these controls before the regulatory inquiry arrives.",
      },
      {
        question: "Do you help with ISO 42001 certification?",
        answer:
          "Yes. ISO 42001 is the emerging global standard for AI Management Systems. We support organisations from initial gap analysis through to certification readiness — building the governance architecture, risk management framework, and documentation required to pass an accredited audit. Use our ISO 42001 Readiness Diagnostic for an immediate assessment.",
      },
    ],
  },
  {
    title: "About Our Services",
    icon: Building2,
    iconColor: "text-accent",
    faqs: [
      {
        question: "Do you provide certifications?",
        answer:
          "No. ElevateQCS is an independent advisory firm — we are not a certification body, accredited registrar, or regulatory agency. We architect the compliance systems and prepare organisations for assessments, but we do not issue certifications, approvals, or authorizations. Organizations seeking certification engage directly with accredited certification bodies.",
      },
      {
        question: "Do you replace legal counsel?",
        answer:
          "No. We are the Technical Translators for your counsel. We turn their legal 'What' into your operational 'How' — saving you thousands in legal billable hours by building the systems, documentation, and evidence packages that satisfy regulatory requirements. We work alongside your legal team in a complementary capacity.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We serve high-accountability organisations in regulated environments: government contractors (prime and sub-tier), defense and aerospace, critical infrastructure, AI and deep-tech, medical devices, and high-growth companies entering regulated markets or preparing for institutional investment. Our expertise spans quality management systems, human rights and ethical labor compliance, AI governance, and audit readiness.",
      },
      {
        question: "Do you work with small organizations?",
        answer:
          "Yes. We work with organisations from Series A startups building their first QMS to multi-billion-dollar primes refining enterprise governance. Our approach scales to organisational context — we design systems appropriate for your current stage while building in the scalability required for growth, acquisition, or new contract vehicles.",
      },
    ],
  },
  {
    title: "Independence & Integrity",
    icon: Shield,
    iconColor: "text-accent",
    faqs: [
      {
        question: "Are you vendor-neutral?",
        answer:
          "Strictly. We don't sell software — we sell Integrity. Our recommendations are based solely on your 2026 audit-readiness, not a commission check. In the event we identify a vendor from which we may receive referral benefits, we disclose this transparently to clients during the initial engagement meeting — prior to any recommendation being formalized.",
      },
      {
        question: "Do you require us to buy expensive GRC software?",
        answer:
          "No. We architect the governance logic first, then integrate it into your existing stack — Slack, Jira, GCC High, SharePoint, or whatever your teams already use. Systems should serve humans, not the other way around. We believe the most expensive software is the one your teams don't actually use.",
      },
      {
        question: "How do you handle confidentiality?",
        answer:
          "Confidentiality is foundational. Every engagement begins with a comprehensive Non-Disclosure Agreement before any substantive information exchange. We do not disclose client identities, engagement details, or any proprietary information without explicit written authorization. Your competitive intelligence remains protected.",
      },
      {
        question: "Will you share information with regulators or auditors?",
        answer:
          "No. Our obligations run to you, the client. We do not share information with regulatory bodies, certification auditors, competitors, or any other parties without your explicit written authorization. We are not an arm of any regulatory or oversight body.",
      },
    ],
  },
  {
    title: "Engagement & Process",
    icon: Globe,
    iconColor: "text-accent",
    faqs: [
      {
        question: "How long do typical engagements last?",
        answer:
          "Standard Track engagements (full system builds) run 12–24 weeks. Velocity Track interventions (crisis stabilization) begin within 48 hours and stabilize within 96 hours, with an optional transition to the Standard Track. Focused diagnostics typically run 4–6 weeks. Duration is driven by scope and organisational complexity.",
      },
      {
        question: "Are engagements project-based or retainer?",
        answer:
          "Project-based with defined scope, milestones, and deliverables — structured as fixed-scope 60–90 day sprints with weekly leadership alignment. We do not operate open-ended retainers. Ongoing advisory is available post-engagement on an optional basis for organisations benefiting from periodic check-ins.",
      },
      {
        question: "How does your remote model work?",
        answer:
          "We operate via Sovereign Workflows. Using encrypted, GCC High-compliant tools, we provide Tier-1 advisory without the $2,000/day travel overhead. Our remote-by-design model allows us to deploy the right expertise to every engagement regardless of geography — supporting clients across the US, EU, and Middle East with consistent quality.",
      },
      {
        question: "What happens after the engagement ends?",
        answer:
          "Our goal is Capability Transfer, not dependency. At engagement conclusion, your teams are equipped to operate, maintain, and improve systems independently. We provide comprehensive documentation, training, and knowledge transfer. You leave with an Internal Governance Hub — a team that can defend the system without us.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:text-accent transition-colors"
      >
        <span className="text-lg font-medium">{question}</span>
        <div
          className={cn(
            "w-8 h-8 rounded-sm bg-secondary flex items-center justify-center shrink-0 transition-colors",
            isOpen && "bg-accent"
          )}
        >
          {isOpen ? (
            <Minus className={cn("w-4 h-4", isOpen && "text-accent-foreground")} />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-[500px] pb-6" : "max-h-0"
        )}
      >
        <p className="text-muted-foreground leading-relaxed pr-12">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      <SEOHead
        title="Frequently Asked Questions | ElevateQCS"
        description="Answers to common questions about our services, how we work, and what to expect. Compliance advisory, project recovery, AI governance, and more."
        url="https://elevateqcs.com/faq"
        keywords={[
          "ElevateQCS FAQ",
          "compliance advisory questions",
          "quality system consulting",
          "compliance consultant",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqCategories.flatMap((cat) =>
            cat.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            }))
          ),
        }}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              FAQ
            </p>
            <h1 className="mb-6 gold-accent pb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Answers to common questions about our services, how we work, 
              and what to expect.
            </p>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-20">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3 justify-center">
            {faqCategories.map((category, index) => (
              <a
                key={index}
                href={`#${category.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                className="px-4 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-accent hover:bg-accent/5 rounded-sm transition-colors flex items-center gap-2"
              >
                <category.icon className={cn("w-4 h-4", category.iconColor)} />
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-20">
            {faqCategories.map((category, index) => (
              <div
                key={index}
                id={category.title.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-sm flex items-center justify-center",
                      category.iconColor === "text-destructive"
                        ? "bg-destructive/10"
                        : "bg-accent/10"
                    )}
                  >
                    <category.icon className={cn("w-6 h-6", category.iconColor)} />
                  </div>
                  <div>
                    <div className="section-divider mb-2" />
                    <h2 className="text-2xl">{category.title}</h2>
                  </div>
                </div>
                <div className="card-elevated">
                  {category.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiered CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-wide">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="text-center mb-4">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            If you don't see your situation here, we welcome the opportunity to 
            discuss your specific requirements in a confidential conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Crisis CTA */}
            <div className="card-elevated p-8 md:p-10 border-l-4 border-destructive">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <p className="text-xs text-destructive uppercase tracking-[0.15em] font-semibold">
                  For Projects in Crisis
                </p>
              </div>
              <h3 className="text-xl mb-3">Request Emergency Intervention</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Cure Notice, failed audit, AI regulatory deadline, or a project in 
                Red Status. We deploy a Principal Lead within 48 hours.
              </p>
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Start Forensic Diagnostic
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Standard CTA */}
            <div className="card-elevated p-8 md:p-10 border-l-4 border-accent">
              <div className="flex items-center gap-3 mb-4">
                <Building2 className="w-6 h-6 text-accent" />
                <p className="text-xs text-accent uppercase tracking-[0.15em] font-semibold">
                  For Growth & Certification
                </p>
              </div>
              <h3 className="text-xl mb-3">Schedule Initial Conversation</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                ISO certification, CMMC preparation, AI governance architecture, or 
                full QMS implementation. No commitment required.
              </p>
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
