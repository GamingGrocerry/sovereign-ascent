import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

type Category = "Quality" | "Regulation" | "Audit" | "Governance" | "Supply Chain" | "AI";

interface GlossaryTerm {
  term: string;
  category: Category;
  definition: string;
  whyItMatters: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AI Governance",
    category: "AI",
    definition:
      "AI Governance is the set of policies, controls, processes, and oversight structures that an organization uses to make sure its AI systems are used responsibly, legally, and ethically.\n\nThink of it like traffic laws for AI inside your organization. Just as traffic laws tell drivers what they can and cannot do, AI governance tells your organization how AI systems can be used, who is responsible for monitoring them, what happens when something goes wrong, and how to document AI-related decisions for regulators and auditors.\n\nGood AI governance answers: Who approved this AI tool? What decisions is it making? Is a human reviewing those decisions? What do we do if it makes a mistake?",
    whyItMatters:
      "The EU AI Act requires organizations that use high-risk AI systems to have formal governance structures in place. Without them, you risk fines, regulatory action, and reputational damage.",
  },
  {
    term: "Audit",
    category: "Audit",
    definition:
      "An audit is a formal check-up of your business. An independent person — called an auditor — visits your company (or reviews your documents online) to verify that you are doing what you say you are doing and that you meet a specific set of requirements.\n\nThink of it like a health inspection at a restaurant. The inspector does not take your word for it — they look at your records, watch how you work, and compare what they see against the rulebook.\n\nAudits can be done by your customers (who want to verify your quality), by certification bodies (who issue certificates like ISO 9001), or by government regulators.",
    whyItMatters:
      "Failing an audit can cost you contracts, certifications, or your ability to operate in certain markets. Passing one builds trust with customers and opens doors to new business.",
  },
  {
    term: "CAPA (Corrective and Preventive Action)",
    category: "Quality",
    definition:
      "CAPA stands for Corrective and Preventive Action. It is a structured process used in quality management to fix problems and stop them from happening again.\n\nCorrective action deals with problems that have already happened — you find the root cause and fix it. Preventive action deals with risks that have not happened yet — you identify potential problems and put controls in place before they occur.\n\nTogether they form a continuous improvement loop: something goes wrong, you investigate why, you fix the cause, you prevent it recurring, and your system gets better over time.",
    whyItMatters:
      "CAPA is one of the most scrutinized parts of any quality audit. Auditors look at whether your corrective actions actually fix root causes — not just symptoms. A weak CAPA process is one of the most common reasons companies fail audits.",
  },
  {
    term: "Certification Body",
    category: "Audit",
    definition:
      "A certification body — sometimes called a CB or a registrar — is an independent organization that is officially accredited to audit companies against a specific standard (like ISO 9001) and issue certificates when they pass.\n\nWell-known certification bodies include BSI (British Standards Institution), Bureau Veritas, SGS, DNV, TÜV Rheinland, and Lloyd's Register. They employ professional auditors who are trained and qualified to assess organizations against specific standards.\n\nYou hire a certification body to audit your organization. If you pass, they issue a certificate. If you fail, they issue non-conformances that you must correct before they will certify you.",
    whyItMatters:
      "Choosing the right certification body matters — some are more recognized in specific industries or regions than others. Your certificate is only valid if the certification body is accredited by a recognized national accreditation body.",
  },
  {
    term: "Compliance Gap Analysis",
    category: "Audit",
    definition:
      "A compliance gap analysis is the process of comparing where your organization is today against where a specific regulation or standard requires it to be.\n\nThe word 'gap' refers to the difference between your current state and the required state. For example, if ISO 9001 requires you to have a documented corrective action procedure and you do not have one — that is a gap.\n\nA gap analysis produces a report listing every gap found, ranked by importance, with recommendations for what to fix first.",
    whyItMatters:
      "A gap analysis tells you exactly what you need to do to pass an audit or meet a regulation — before an auditor or regulator finds the gaps for you.",
  },
  {
    term: "Corrective Action (CAR / NCR)",
    category: "Quality",
    definition:
      "A corrective action is the formal process of fixing a problem that has already happened — and making sure it does not happen again.\n\nWhen an auditor finds something wrong, they issue a Non-Conformance Report (NCR) — essentially a written record of what was wrong. Your organization must then respond with a Corrective Action Request (CAR) that explains what caused the problem, what you did to fix it, and what you changed to prevent it happening again.\n\nThe key is not just fixing the problem — it is finding and fixing the root cause so it does not repeat itself.",
    whyItMatters:
      "Auditors look closely at how you handle corrective actions. A company that closes issues quickly and prevents recurrence is rated highly. A company that keeps having the same problems is considered high risk.",
  },
  {
    term: "CS3D (Corporate Sustainability Due Diligence Directive)",
    category: "Regulation",
    definition:
      "CS3D is a European Union law that requires large companies to identify, prevent, and address harm to people and the environment across their entire supply chain — not just in their own operations.\n\nIn simple terms: if a company somewhere in your supply chain is using forced labor, polluting the environment, or violating human rights — and you knew or should have known about it — you are legally responsible.\n\nThe law applies to large EU companies and to non-EU companies that sell significantly into EU markets. It requires companies to conduct regular due diligence on their suppliers and to have a plan to fix problems they find.",
    whyItMatters:
      "Companies that fail to comply with CS3D face civil lawsuits and significant fines. Large buyers are already requiring their suppliers to demonstrate CS3D compliance before awarding contracts.",
  },
  {
    term: "EU AI Act",
    category: "Regulation",
    definition:
      "The EU AI Act is a law passed by the European Union that regulates how artificial intelligence systems are developed, sold, and used. It is the first major AI law in the world.\n\nThe law classifies AI systems into risk levels — from banned systems (like AI that manipulates people) to high-risk systems (like AI used in hiring, credit scoring, or medical decisions) to lower-risk systems (like chatbots).\n\nImportantly, the law does not only apply to companies that build AI. It also applies to any company that USES AI tools in their operations — even if those tools were built by someone else. If your HR software uses AI to screen job applicants, or your bank uses AI for credit decisions — your company has compliance obligations under this law.",
    whyItMatters:
      "Companies that do not comply with the EU AI Act face significant fines and may be required to stop using non-compliant AI systems. Obligations for high-risk AI systems became enforceable in August 2026.",
  },
  {
    term: "Governance Framework",
    category: "Governance",
    definition:
      "A governance framework is the documented structure that defines how decisions are made in your organization, who is responsible for what, and how rules and regulations are followed and monitored.\n\nThink of it as your organization's rulebook and accountability map. It answers: Who decides what? Who is accountable when something goes wrong? What controls exist to prevent mistakes? How is compliance monitored and reported?\n\nA governance framework is not a single document — it is the combination of your policies, procedures, reporting lines, committee structures, and oversight processes.",
    whyItMatters:
      "Without a clear governance framework, organizations struggle to demonstrate accountability to regulators, auditors, and investors. It is also the foundation for scaling a business without losing control.",
  },
  {
    term: "ISO 9001",
    category: "Quality",
    definition:
      "ISO 9001 is the world's most widely used quality management standard. ISO stands for the International Organization for Standardization — a global body that sets rules and benchmarks that organizations in every country agree to follow.\n\nISO 9001 tells you the minimum requirements for a quality management system. If you follow these requirements, you can get a certificate that proves to your customers and partners that your operations are consistent, controlled, and reliable.\n\nThink of it as the global rulebook for quality. Companies that hold ISO 9001 certification have proven to an independent auditor that they have proper systems in place.",
    whyItMatters:
      "Many large companies and government buyers require their suppliers to hold ISO 9001 certification before they will do business with them. It is a market access requirement as much as a quality tool.",
  },
  {
    term: "ISO 9001:2026",
    category: "Quality",
    definition:
      "ISO 9001:2026 is the next version of the ISO 9001 standard. The current version is ISO 9001:2015 — meaning it was last updated in 2015. The new version adds requirements around leadership behavior, quality culture, digital systems, and climate considerations.\n\nThe new standard is expected to publish in September 2026. Organizations that currently hold ISO 9001:2015 certification will need to transition to the new version before the deadline — estimated late 2029.\n\nThe transition requires a gap analysis (finding what is different), updating your documentation and processes, and passing a transition audit.",
    whyItMatters:
      "If you are currently ISO 9001 certified, your certificate will expire if you do not transition to the 2026 version before the deadline. Starting early means you avoid the rush and have time to do it properly.",
  },
  {
    term: "Quality Management System (QMS)",
    category: "Quality",
    definition:
      "A Quality Management System — usually called a QMS — is the collection of documented processes, procedures, records, and responsibilities that define how your organization consistently delivers quality products or services.\n\nThink of it as your company's operations manual for quality. It answers questions like: How do we make sure every product meets our standards? What happens when something goes wrong? Who is responsible for each quality process? How do we keep improving?\n\nA QMS is not just a folder of documents. It is a living system that your team actually uses every day to maintain consistent quality.",
    whyItMatters:
      "A well-built QMS reduces errors, prevents defects, helps you pass audits, and gives customers confidence that you deliver what you promise — every time.",
  },
  {
    term: "Regulatory Compliance",
    category: "Regulation",
    definition:
      "Regulatory compliance means that your organization is meeting all the legal requirements, rules, and standards that apply to your industry and location.\n\nEvery industry has regulations — food manufacturers must meet food safety laws, medical device companies must meet health regulations, financial firms must follow banking rules, and so on. Compliance means you are following these rules correctly and can prove it if asked.\n\nCompliance is not optional. Regulators can inspect your business at any time, and non-compliance can result in fines, product recalls, license revocations, or criminal charges.",
    whyItMatters:
      "In regulated industries, compliance is the price of doing business. Beyond avoiding penalties, demonstrating strong compliance builds trust with customers, partners, and investors.",
  },
  {
    term: "Risk Management",
    category: "Governance",
    definition:
      "Risk management is the process of identifying things that could go wrong in your business, deciding how likely they are to happen, understanding how serious the impact would be, and putting controls in place to reduce or prevent them.\n\nIn compliance and quality management, risks include things like: an audit finding serious non-conformances, a regulatory change you were not prepared for, a supplier failing to deliver compliant products, or an internal process breaking down.\n\nRisk management is not about eliminating all risk — it is about knowing your risks and making deliberate decisions about how to handle them.",
    whyItMatters:
      "ISO 9001:2026 and most major regulatory frameworks require formal risk management. Organizations with good risk management are more resilient, pass audits more easily, and recover faster when problems occur.",
  },
  {
    term: "SOP (Standard Operating Procedure)",
    category: "Quality",
    definition:
      "A Standard Operating Procedure — called an SOP — is a written document that explains step by step how to carry out a specific task or process in your organization.\n\nThink of it as a recipe. A recipe tells a chef exactly what ingredients to use, in what order, at what temperature, and for how long — so the dish comes out the same every time no matter who makes it. An SOP does the same thing for business processes.\n\nSOPs cover things like how to handle a customer complaint, how to inspect a product before it ships, how to onboard a new supplier, or how to respond to an audit finding.",
    whyItMatters:
      "Without SOPs, processes depend on individual memory and habit — meaning they vary from person to person and day to day. SOPs create consistency, support training, and provide evidence during audits that your processes are controlled.",
  },
  {
    term: "Supply Chain Due Diligence",
    category: "Supply Chain",
    definition:
      "Supply chain due diligence is the process of investigating and monitoring the companies that supply you with goods and services to make sure they operate legally, ethically, and safely.\n\nThink of it as background checks for your suppliers. You are checking that they treat their workers fairly, follow environmental rules, do not use child labor or forced labor, and operate their businesses legally.\n\nDue diligence does not stop at your direct suppliers. Regulations like CS3D require you to look further into your supply chain — at the suppliers of your suppliers — to make sure problems are not hidden deeper in the chain.",
    whyItMatters:
      "If a supplier in your chain is found to be violating human rights or environmental laws — and you did not check — you can be held legally and reputationally responsible. Due diligence protects your business and your customers.",
  },
];

const categoryColors: Record<Category, string> = {
  Quality: "bg-accent/10 text-accent border-accent/20",
  Regulation: "bg-destructive/10 text-destructive border-destructive/20",
  Audit: "bg-secondary text-secondary-foreground border-border",
  Governance: "bg-primary/10 text-primary border-primary/20",
  "Supply Chain": "bg-accent/10 text-accent border-accent/20",
  AI: "bg-primary/10 text-primary border-primary/20",
};

export default function Glossary() {
  const [search, setSearch] = useState("");

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <SEOHead
        title="Compliance Glossary | ElevateQCS"
        description="Plain-language definitions of compliance, quality management, and regulatory terms — written for business owners and operations teams."
        url="https://elevateqcs.com/glossary"
        keywords={["compliance glossary", "ISO 9001", "QMS", "audit", "regulatory compliance", "AI governance"]}
      />

      {/* Hero */}
      <section className="bg-primary py-20 pt-32">
        <div className="container-wide text-center">
          <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Reference
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-primary-foreground mb-6">
            Compliance Terms Explained
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Plain-language definitions of every term we use — written for business owners and operations teams, not compliance lawyers.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="bg-background border-b border-border sticky top-[72px] z-30">
        <div className="container-wide py-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search terms... (e.g. ISO 9001, audit, QMS)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Terms Grid */}
      <section className="bg-background py-16">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              No terms match your search. Try a different keyword.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((t) => (
                <div key={t.term} className="card-elevated p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="font-serif text-xl text-accent font-semibold">{t.term}</h3>
                    <Badge
                      variant="outline"
                      className={`shrink-0 text-[10px] ${categoryColors[t.category]}`}
                    >
                      {t.category}
                    </Badge>
                  </div>
                  <div className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line mb-4 flex-1">
                    {t.definition}
                  </div>
                  <p className="text-sm text-muted-foreground italic leading-relaxed border-t border-border pt-4">
                    {t.whyItMatters}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="container-wide text-center">
          <h2 className="font-serif text-2xl mb-4">
            Have a question about a term you don't see here?
          </h2>
          <Button variant="cta" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
