import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    title: "About Our Services",
    faqs: [
      {
        question: "Do you provide certifications?",
        answer: "No. ElevateQCS is an independent advisory firm—we are not a certification body, accredited registrar, or regulatory agency. We support organizations in building compliance systems and preparing for assessments, but we do not issue certifications, approvals, or authorizations. Organizations seeking certification should engage directly with appropriate certification bodies.",
      },
      {
        question: "Do you replace legal counsel?",
        answer: "No. Our services are advisory in nature and do not constitute legal advice. While we provide guidance on compliance frameworks and regulatory requirements, we strongly recommend that clients engage qualified legal counsel for matters requiring legal interpretation or representation. We often work alongside clients' legal teams in a complementary capacity.",
      },
      {
        question: "What industries do you serve?",
        answer: "We primarily serve organizations in government contracting (both prime contractors and subcontractors) and high-growth companies entering regulated markets. Our expertise spans quality management systems, human rights and ethical labor compliance, and audit readiness across various sectors including defense, aerospace, and technology.",
      },
      {
        question: "Do you work with small organizations?",
        answer: "Yes. We work with organizations of various sizes, from emerging companies building their first compliance systems to established enterprises refining existing frameworks. Our approach scales to organizational context—we design systems appropriate for your current stage while building in scalability for growth.",
      },
    ],
  },
  {
    title: "Engagement & Process",
    faqs: [
      {
        question: "Are engagements project-based or retainer?",
        answer: "Most engagements are project-based with defined scope, deliverables, and timelines. This approach provides clarity on investment and outcomes. For organizations benefiting from ongoing advisory support after initial implementation, we offer retainer arrangements with periodic check-ins and advisory availability.",
      },
      {
        question: "How long do typical engagements last?",
        answer: "Engagement duration varies based on scope and organizational complexity. Focused diagnostic assessments typically run 4-6 weeks. Comprehensive implementation programs may span 6-12 months. We work with you to define realistic timelines that account for your organizational capacity and priorities.",
      },
      {
        question: "What happens after the engagement ends?",
        answer: "Our goal is to transfer capability, not create dependency. At engagement conclusion, your teams should be equipped to operate, maintain, and improve systems independently. We provide comprehensive documentation, training, and knowledge transfer. Optional ongoing support is available but not required.",
      },
      {
        question: "How does your remote model work?",
        answer: "ElevateQCS operates as a fully remote advisory practice by design — not as a temporary arrangement. This allows us to deploy the right expertise to every engagement regardless of geography, using secure communications, structured workflows, and disciplined project management. Our remote model supports clients across the US, EU, and Middle East without the overhead that inflates advisory fees.",
      },
    ],
  },
  {
    title: "Independence & Confidentiality",
    faqs: [
      {
        question: "Are you truly vendor-neutral?",
        answer: "Yes. Our recommendations are based solely on our assessment of what serves your organizational needs. We maintain a vendor-neutral advisory posture across all engagements. In the event we identify a vendor, product, or service from which we may receive referral benefits or compensation, we disclose this transparently to clients during the initial engagement meeting — prior to any recommendation being formalized.",
      },
      {
        question: "How do you handle confidentiality?",
        answer: "Confidentiality is foundational to our practice. Every engagement begins with a comprehensive Non-Disclosure Agreement before any substantive information exchange. We do not disclose client identities, engagement details, or any proprietary information without explicit written authorization. Your competitive intelligence remains protected.",
      },
      {
        question: "Will you share information with regulators or auditors?",
        answer: "No. Our obligations run to you, the client. We do not share information with regulatory bodies, certification auditors, competitors, or any other parties without your explicit written authorization. We are not an arm of any regulatory or oversight body.",
      },
    ],
  },
  {
    title: "Global Operations",
    faqs: [
      {
        question: "Do you work internationally?",
        answer: "Yes. We provide advisory services globally, with experience supporting organizations operating across the US, EU, Middle East, and other regions. Our team understands the nuances of different regulatory environments and can support multi-jurisdictional compliance requirements.",
      },
      {
        question: "What languages do you work in?",
        answer: "Our primary working language is English. For engagements requiring other languages, we can coordinate with qualified professionals to ensure effective communication while maintaining quality and consistency of advisory services.",
      },
      {
        question: "How do you handle different regulatory frameworks?",
        answer: "We design systems that can accommodate multiple regulatory frameworks—whether FAR/DFARS requirements, ISO standards, UK Modern Slavery Act obligations, or EU due-diligence requirements. Our approach focuses on building integrated systems rather than siloed compliance for each requirement.",
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
        <div className={cn(
          "w-8 h-8 rounded-sm bg-secondary flex items-center justify-center shrink-0 transition-colors",
          isOpen && "bg-accent"
        )}>
          {isOpen ? (
            <Minus className={cn("w-4 h-4", isOpen && "text-accent-foreground")} />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </div>
      </button>
      <div className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[500px] pb-6" : "max-h-0"
      )}>
        <p className="text-muted-foreground leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Questions & Answers
            </p>
            <h1 className="mb-6 gold-accent pb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Common questions about our services, approach, and how we work. 
              If you don't find your answer here, we welcome your inquiry.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-16">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <div className="section-divider mb-6" />
                <h2 className="text-2xl mb-8">{category.title}</h2>
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

      {/* CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Still Have Questions?</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            We welcome the opportunity to address your specific questions in 
            a confidential conversation. No commitment required.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
