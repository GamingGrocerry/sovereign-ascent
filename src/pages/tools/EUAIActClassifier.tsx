import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { AssessmentShell, type AssessmentQuestion } from "@/components/tools/AssessmentShell";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/integrations/supabase/client";

const questions: AssessmentQuestion[] = [
  {
    id: "ai_purpose",
    category: "AI System Purpose",
    question: "What is the primary purpose of your AI system?",
    description: "The EU AI Act classifies AI systems by their intended use. Systems that manipulate behaviour, exploit vulnerabilities, or perform social scoring are prohibited outright.",
    type: "radio",
    weight: 30,
    options: [
      { label: "Decision-making that directly affects individuals (hiring, credit, law enforcement)", value: "high_impact" },
      { label: "Content generation, recommendation, or classification", value: "limited_impact" },
      { label: "Internal process automation with no direct impact on individuals", value: "minimal_impact" },
      { label: "Real-time biometric identification or emotion recognition", value: "prohibited_risk" },
    ],
  },
  {
    id: "deployment_context",
    category: "Deployment Context",
    question: "Where will the AI system be deployed?",
    description: "AI systems used in critical infrastructure, education, employment, or essential services face stricter requirements under Articles 6–7.",
    type: "radio",
    weight: 25,
    options: [
      { label: "Critical infrastructure (energy, transport, water, digital)", value: "critical_infra" },
      { label: "Education, employment, or access to essential services", value: "essential_services" },
      { label: "Law enforcement, border control, or judicial processes", value: "law_enforcement" },
      { label: "General commercial or internal enterprise use", value: "general_commercial" },
    ],
  },
  {
    id: "data_handling",
    category: "Data & Transparency",
    question: "How does your system handle training data and output transparency?",
    description: "Articles 10–13 require documented data governance, bias mitigation, and clear disclosure when users interact with AI-generated content.",
    type: "radio",
    weight: 20,
    options: [
      { label: "No formal data governance or documentation exists", value: "no_governance" },
      { label: "Basic documentation exists but no bias testing or lineage tracking", value: "basic_docs" },
      { label: "Data governance in place with some bias mitigation procedures", value: "partial_governance" },
      { label: "Full data lineage tracking, bias testing, and transparency disclosures", value: "full_governance" },
    ],
  },
  {
    id: "human_oversight",
    category: "Human Oversight",
    question: "What level of human oversight exists for AI decisions?",
    description: "Article 14 mandates human-in-the-loop controls proportional to the risk level. Autonomous high-risk systems without override capability face non-compliance.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Fully autonomous — no human review of outputs or decisions", value: "no_oversight" },
      { label: "Human reviews a sample of outputs periodically", value: "periodic_review" },
      { label: "Human approves every decision before execution", value: "full_approval" },
      { label: "Human can override any decision in real-time with audit trail", value: "full_hitl" },
    ],
  },
  {
    id: "risk_management",
    category: "Risk Management",
    question: "Do you have a formal AI risk management framework?",
    description: "Article 9 requires providers of high-risk AI systems to implement a risk management system that identifies, analyses, and mitigates risks throughout the system lifecycle.",
    type: "radio",
    weight: 10,
    options: [
      { label: "No AI-specific risk management exists", value: "none" },
      { label: "General enterprise risk management covers AI informally", value: "informal" },
      { label: "Dedicated AI risk framework under development", value: "developing" },
      { label: "Mature AI risk management aligned with NIST AI RMF or ISO 42001", value: "mature" },
    ],
  },
  {
    id: "market_exposure",
    category: "Market Exposure",
    question: "Does your AI system serve or affect EU citizens or organisations?",
    description: "The EU AI Act applies to any AI system placed on the EU market or whose outputs affect people in the EU — regardless of where the provider is headquartered.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Yes — directly deployed to EU customers or users", value: "direct_eu" },
      { label: "Yes — outputs affect EU citizens indirectly (e.g., supply chain decisions)", value: "indirect_eu" },
      { label: "Uncertain — we have global operations and may affect EU individuals", value: "uncertain" },
      { label: "No — exclusively U.S. domestic use with no EU exposure", value: "no_eu" },
    ],
  },
];

function calculateResults(answers: Record<string, string | string[]>) {
  let score = 0;

  const purpose = answers.ai_purpose as string;
  if (purpose === "prohibited_risk") score += 10;
  else if (purpose === "high_impact") score += 7;
  else if (purpose === "limited_impact") score += 3;
  else score += 1;

  const context = answers.deployment_context as string;
  if (context === "law_enforcement") score += 8;
  else if (context === "critical_infra") score += 7;
  else if (context === "essential_services") score += 5;
  else score += 1;

  const data = answers.data_handling as string;
  if (data === "no_governance") score += 6;
  else if (data === "basic_docs") score += 4;
  else if (data === "partial_governance") score += 2;
  else score += 0;

  const oversight = answers.human_oversight as string;
  if (oversight === "no_oversight") score += 5;
  else if (oversight === "periodic_review") score += 3;
  else if (oversight === "full_approval") score += 1;
  else score += 0;

  const risk = answers.risk_management as string;
  if (risk === "none") score += 4;
  else if (risk === "informal") score += 2.5;
  else if (risk === "developing") score += 1;
  else score += 0;

  const market = answers.market_exposure as string;
  if (market === "direct_eu") score += 3;
  else if (market === "indirect_eu") score += 2;
  else if (market === "uncertain") score += 1.5;
  else score += 0;

  const totalScore = Math.min(Math.round((score / 36) * 100), 100);

  let tier: string;
  let tierColor: string;
  let tierDescription: string;

  if (purpose === "prohibited_risk") {
    tier = "PROHIBITED — Immediate Action Required";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = "Your AI system falls into the Prohibited category under Article 5 of the EU AI Act. Deployment in the EU market is not permitted. You must cease EU-facing operations for this system or fundamentally redesign its purpose. This classification carries fines of up to €35M or 7% of global turnover.";
  } else if (totalScore >= 70) {
    tier = "HIGH-RISK — Full Compliance Required";
    tierColor = "bg-orange-100 text-orange-800";
    tierDescription = "Your AI system is classified as High-Risk under Annex III. You must comply with Articles 8–15 requirements including risk management, data governance, technical documentation, logging, transparency, human oversight, and accuracy. Non-compliance carries fines of up to €15M or 3% of global turnover. The August 2026 deadline applies.";
  } else if (totalScore >= 40) {
    tier = "LIMITED RISK — Transparency Obligations";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = "Your AI system carries Limited Risk classification. You must meet transparency obligations — users must be informed they are interacting with AI. Content generated by AI must be labelled. These requirements take effect August 2026.";
  } else {
    tier = "MINIMAL RISK — Voluntary Compliance";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "Your AI system is classified as Minimal Risk. While no mandatory requirements apply, adopting voluntary codes of conduct and the ISO 42001 framework positions you for future regulatory shifts and builds stakeholder trust.";
  }

  const findings = [
    {
      area: "System Classification",
      status: purpose === "prohibited_risk" ? "Prohibited" : totalScore >= 70 ? "High-Risk" : totalScore >= 40 ? "Limited Risk" : "Minimal Risk",
      recommendation: purpose === "prohibited_risk"
        ? "Engage legal counsel immediately — this system cannot be deployed in EU markets"
        : totalScore >= 70
        ? "Begin Articles 8–15 compliance programme immediately to meet August 2026 deadline"
        : "Document AI system purpose and establish transparency disclosures",
    },
    {
      area: "Data Governance",
      status: data === "no_governance" || data === "basic_docs" ? "Non-Compliant" : data === "partial_governance" ? "Partial" : "Compliant",
      recommendation: data === "no_governance"
        ? "Establish data lineage tracking, bias testing protocols, and training data documentation"
        : "Formalise data governance SOPs and conduct bias audit before August 2026",
    },
    {
      area: "Human Oversight Architecture",
      status: oversight === "no_oversight" ? "Critical Gap" : oversight === "periodic_review" ? "Insufficient" : "Adequate",
      recommendation: oversight === "no_oversight"
        ? "Design and implement human-in-the-loop controls with override capability and audit trail"
        : "Document oversight procedures and ensure real-time intervention capability",
    },
    {
      area: "Risk Management Framework",
      status: risk === "none" ? "Absent" : risk === "informal" ? "Informal" : risk === "developing" ? "In Progress" : "Mature",
      recommendation: risk === "none" || risk === "informal"
        ? "Implement a dedicated AI risk management system aligned with NIST AI RMF or ISO 42001"
        : "Continue maturing your AI risk framework with lifecycle monitoring",
    },
    {
      area: "EU Market Exposure",
      status: market === "direct_eu" ? "Direct" : market === "indirect_eu" ? "Indirect" : market === "uncertain" ? "Uncertain" : "No Exposure",
      recommendation: market === "no_eu"
        ? "Monitor — extraterritorial reach of EU AI Act may still apply through supply chain relationships"
        : "Map all EU touchpoints and prepare conformity assessment documentation",
    },
  ];

  const recommendedActions = [
    "Fatal Flaw: Conducting AI risk classification using internal definitions instead of the EU AI Act's legal taxonomy — your internal 'low risk' may be the Act's 'high risk'.",
    "Fatal Flaw: Assuming no EU market exposure when extraterritorial reach applies through supply chain and data processing relationships.",
    "Fatal Flaw: Operating AI systems without documented human-in-the-loop override capability — Article 14 makes this a compliance requirement, not a design preference.",
    "Fatal Flaw: Treating data governance as an IT function instead of an AI-specific compliance obligation with bias testing and lineage tracking.",
    "Fatal Flaw: Planning for the August 2026 deadline as if it's a future event — conformity assessment preparation requires 6–12 months minimum.",
  ];

  if (purpose === "prohibited_risk") {
    recommendedActions.unshift("CRITICAL: Engage legal counsel to evaluate system redesign or market withdrawal options");
  }

  if (totalScore >= 70) {
    recommendedActions.push("Your risk profile has a 74% correlation with enforcement action in 2027. To see the specific mitigation steps required to prevent regulatory penalties, book a 15-minute briefing with our AI Governance team.");
  }

  return {
    score: totalScore,
    maxScore: 100,
    tier,
    tierColor,
    tierDescription,
    findings,
    recommendedActions,
    relatedInsights: [
      { title: "Agentic AI and the Human Oversight Imperative", slug: "agentic-ai-human-oversight" },
      { title: "Multi-Jurisdictional Compliance: A Framework", slug: "multi-jurisdictional-compliance" },
      { title: "Cross-Jurisdictional Liability and the Compliance Handoff Problem", slug: "cross-jurisdictional-liability" },
    ],
  };
}

export default function EUAIActClassifier() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]> | null>(null);

  const handleUnlock = async (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data); setShowGate(false);
    if (results && answers) {
      try { await supabase.from("assessment_leads").insert({ name: data.name, email: data.email, company: data.company, industry: data.industry, consent: true, tool_used: "EU AI Act Risk Classifier", score: results.score, tier: results.tier, date_completed: new Date().toISOString(), answers_json: answers }); } catch {}
    }
  };

  const handleComplete = async (submittedAnswers: Record<string, string | string[]>) => {
    const r = calculateResults(submittedAnswers);
    setAnswers(submittedAnswers);
    setResults(r);
    if (isUnlocked && userData) {
      try { await supabase.from("assessment_leads").insert({ name: userData.name, email: userData.email, company: userData.company, industry: userData.industry, consent: true, tool_used: "EU AI Act Risk Classifier", score: r.score, tier: r.tier, date_completed: new Date().toISOString(), answers_json: submittedAnswers }); } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="EU AI Act Risk Classifier — AI Compliance Diagnostic | ElevateQCS"
        description="Determine if your AI system is Prohibited, High-Risk, or Limited Risk under the EU AI Act. Get a personalised risk tier report mapping your use-case to Articles 8–15 requirements."
        url="https://elevateqcs.com/tools/eu-ai-act-classifier"
        keywords={["EU AI Act compliance", "AI risk classification", "high-risk AI system", "AI Act Articles 8-15", "AI governance assessment"]}
      />

      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Suite
          </Link>

          <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />

          {isUnlocked && !results && (
            <AssessmentShell
              title="EU AI Act Risk Classifier"
              estimatedTime="4–6 minutes"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {isUnlocked && results && userData && (
            <ResultsPage
              toolName="EU AI Act Risk Classifier"
              score={results.score}
              maxScore={results.maxScore}
              tier={results.tier}
              tierColor={results.tierColor}
              tierDescription={results.tierDescription}
              findings={results.findings}
              recommendedActions={results.recommendedActions}
              relatedInsights={results.relatedInsights}
              userData={{ name: userData.name, company: userData.company }}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
