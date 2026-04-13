import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { AssessmentShell, type AssessmentQuestion } from "@/components/tools/AssessmentShell";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/lib/supabaseClient";

const questions: AssessmentQuestion[] = [
  {
    id: "aims_scope",
    category: "AIMS Scope & Context",
    question: "Have you defined the scope and context of your AI Management System?",
    description: "ISO 42001 Clause 4 requires understanding your organisation's context, the needs of interested parties, and defining clear AIMS boundaries.",
    type: "radio",
    weight: 20,
    options: [
      { label: "No — we haven't started scoping an AIMS", value: "none" },
      { label: "We have informal AI governance but no formal scope defined", value: "informal" },
      { label: "Scope is documented but not aligned to ISO 42001 structure", value: "partial" },
      { label: "Formal AIMS scope defined with context analysis and stakeholder mapping", value: "complete" },
    ],
  },
  {
    id: "leadership_commitment",
    category: "Leadership & Commitment",
    question: "Is there executive-level commitment to AI governance?",
    description: "Clause 5 requires top management to demonstrate leadership and commitment, establish an AI policy, and assign roles and responsibilities.",
    type: "radio",
    weight: 20,
    options: [
      { label: "No executive awareness or involvement in AI governance", value: "none" },
      { label: "Executive awareness exists but no formal AI policy or role assignments", value: "awareness" },
      { label: "AI policy exists but roles and accountability are unclear", value: "policy_only" },
      { label: "Executive-sponsored AI policy with clear roles, accountability, and resource allocation", value: "full" },
    ],
  },
  {
    id: "risk_assessment",
    category: "AI Risk Assessment",
    question: "How do you assess and treat AI-specific risks?",
    description: "Clause 6.1 requires a systematic process for AI risk assessment, including ethical, societal, and operational risks specific to AI systems.",
    type: "radio",
    weight: 20,
    options: [
      { label: "No AI-specific risk assessment process exists", value: "none" },
      { label: "General risk assessments occasionally cover AI topics", value: "general" },
      { label: "Dedicated AI risk assessment process exists but is ad-hoc", value: "dedicated_adhoc" },
      { label: "Systematic AI risk assessment with treatment plans, ethical review, and lifecycle monitoring", value: "systematic" },
    ],
  },
  {
    id: "operational_controls",
    category: "Operational Controls",
    question: "What operational controls exist for AI development and deployment?",
    description: "Clause 8 requires documented operational controls for the AI lifecycle — from design and development through deployment, monitoring, and decommissioning.",
    type: "radio",
    weight: 15,
    options: [
      { label: "No formalised AI development or deployment controls", value: "none" },
      { label: "Basic development practices exist but are not documented as SOPs", value: "basic" },
      { label: "SOPs exist for some AI lifecycle stages but gaps remain", value: "partial_sops" },
      { label: "Complete lifecycle SOPs covering design, testing, deployment, monitoring, and decommissioning", value: "complete_sops" },
    ],
  },
  {
    id: "data_management",
    category: "Data Management",
    question: "How mature is your AI data management practice?",
    description: "ISO 42001 requires documented data governance including data quality, provenance, bias assessment, and privacy-by-design principles.",
    type: "radio",
    weight: 15,
    options: [
      { label: "No formal data governance for AI training or inference data", value: "none" },
      { label: "Basic data quality checks exist but no provenance tracking or bias testing", value: "basic" },
      { label: "Data governance framework exists with some provenance and bias controls", value: "framework" },
      { label: "Mature data governance with lineage tracking, bias testing, privacy controls, and audit trails", value: "mature" },
    ],
  },
  {
    id: "monitoring_improvement",
    category: "Monitoring & Improvement",
    question: "Do you monitor AI system performance and conduct management reviews?",
    description: "Clauses 9–10 require performance evaluation, internal audits, management reviews, and continuous improvement of the AIMS.",
    type: "radio",
    weight: 10,
    options: [
      { label: "No AI performance monitoring or management review process", value: "none" },
      { label: "Ad-hoc monitoring of some AI systems but no formal review cycle", value: "adhoc" },
      { label: "Regular monitoring with periodic management reviews but no internal AIMS audits", value: "monitoring" },
      { label: "Full performance monitoring, internal audits, management reviews, and continuous improvement cycle", value: "full" },
    ],
  },
];

function calculateResults(answers: Record<string, string | string[]>) {
  const scoreMap: Record<string, Record<string, number>> = {
    aims_scope: { none: 0, informal: 4, partial: 12, complete: 20 },
    leadership_commitment: { none: 0, awareness: 5, policy_only: 12, full: 20 },
    risk_assessment: { none: 0, general: 5, dedicated_adhoc: 12, systematic: 20 },
    operational_controls: { none: 0, basic: 4, partial_sops: 9, complete_sops: 15 },
    data_management: { none: 0, basic: 4, framework: 9, mature: 15 },
    monitoring_improvement: { none: 0, adhoc: 2, monitoring: 6, full: 10 },
  };

  let score = 0;
  for (const [key, map] of Object.entries(scoreMap)) {
    score += map[answers[key] as string] ?? 0;
  }

  let tier: string;
  let tierColor: string;
  let tierDescription: string;

  if (score >= 80) {
    tier = "CERTIFICATION READY — Final Audit Preparation";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "Your AI Management System demonstrates strong alignment with ISO 42001. You are positioned for Stage 1 and Stage 2 certification audits. Focus on closing any remaining documentation gaps and conducting a pre-certification internal audit.";
  } else if (score >= 55) {
    tier = "DEVELOPING — Structured Gap Closure Needed";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = "Core AIMS elements are in place but significant gaps remain in documentation, operational controls, or governance maturity. A structured 90-day gap closure programme can position you for certification readiness.";
  } else if (score >= 30) {
    tier = "FOUNDATIONAL — System Architecture Required";
    tierColor = "bg-orange-100 text-orange-800";
    tierDescription = "Your organisation has some AI governance awareness but lacks the structured management system required for ISO 42001. A 6-month AIMS implementation programme is recommended.";
  } else {
    tier = "PRE-FOUNDATIONAL — Full AIMS Build Required";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = "Your organisation does not currently have the governance foundations for ISO 42001 certification. A comprehensive AIMS build — including policy development, risk framework, and operational controls — is required before certification can be considered.";
  }

  const findings = [
    {
      area: "AIMS Scope & Context (Clause 4)",
      status: (answers.aims_scope === "complete") ? "Compliant" : (answers.aims_scope === "partial") ? "Partial" : "Gap",
      recommendation: answers.aims_scope === "complete"
        ? "Maintain scope documentation and review annually"
        : "Define formal AIMS scope with context analysis and interested party mapping",
    },
    {
      area: "Leadership & Policy (Clause 5)",
      status: (answers.leadership_commitment === "full") ? "Compliant" : (answers.leadership_commitment === "policy_only") ? "Partial" : "Gap",
      recommendation: answers.leadership_commitment === "full"
        ? "Ensure AI policy is reviewed and communicated annually"
        : "Secure executive sponsorship and establish documented AI policy with role assignments",
    },
    {
      area: "Risk Assessment (Clause 6)",
      status: (answers.risk_assessment === "systematic") ? "Compliant" : (answers.risk_assessment === "dedicated_adhoc") ? "Partial" : "Gap",
      recommendation: answers.risk_assessment === "systematic"
        ? "Continue lifecycle risk monitoring and treatment plan updates"
        : "Implement systematic AI risk assessment with ethical review and treatment plans",
    },
    {
      area: "Operational Controls (Clause 8)",
      status: (answers.operational_controls === "complete_sops") ? "Compliant" : (answers.operational_controls === "partial_sops") ? "Partial" : "Gap",
      recommendation: answers.operational_controls === "complete_sops"
        ? "Audit SOPs annually and update for new AI system types"
        : "Develop lifecycle SOPs for AI design, testing, deployment, and decommissioning",
    },
    {
      area: "Data Governance",
      status: (answers.data_management === "mature") ? "Compliant" : (answers.data_management === "framework") ? "Partial" : "Gap",
      recommendation: answers.data_management === "mature"
        ? "Maintain data lineage and bias testing cadence"
        : "Establish data provenance tracking, bias testing protocols, and privacy controls",
    },
    {
      area: "Monitoring & Improvement (Clauses 9–10)",
      status: (answers.monitoring_improvement === "full") ? "Compliant" : (answers.monitoring_improvement === "monitoring") ? "Partial" : "Gap",
      recommendation: answers.monitoring_improvement === "full"
        ? "Continue audit cycle and management review cadence"
        : "Implement internal AIMS audits, management reviews, and continuous improvement cycle",
    },
  ];

  const roadmap = [
    { phase: "Phase 1: Foundation (Weeks 1–4)", description: "Define AIMS scope, secure executive sponsorship, establish AI policy, and assign governance roles." },
    { phase: "Phase 2: Risk Architecture (Weeks 5–8)", description: "Implement AI risk assessment framework, conduct initial risk analysis, and develop treatment plans." },
    { phase: "Phase 3: Operational Controls (Weeks 9–14)", description: "Develop lifecycle SOPs, data governance procedures, and human oversight architecture." },
    { phase: "Phase 4: Audit Readiness (Weeks 15–20)", description: "Conduct internal audits, management reviews, close remaining gaps, and prepare for Stage 1 certification audit." },
  ];

  const recommendedActions = [
    "Fatal Flaw: Attempting to retrofit an existing ISO 9001 system into an AIMS without addressing AI-specific lifecycle requirements.",
    "Fatal Flaw: Developing AI risk assessments without integrating ethical review — ISO 42001 requires human rights impact analysis, not just technical risk.",
    "Fatal Flaw: Creating lifecycle SOPs that cover development but omit deployment monitoring and decommissioning procedures.",
    "Fatal Flaw: Treating data governance as a checkbox rather than implementing provenance tracking with bias testing protocols.",
    "Fatal Flaw: Assuming a Stage 1 audit can be passed without 6+ months of documented operational evidence.",
  ];

  if (score < 30) {
    recommendedActions.push("Your readiness level requires a full AIMS build. To receive a customised 6-month implementation roadmap, book a Principal-Led briefing.");
  }

  return {
    score,
    maxScore: 100,
    tier,
    tierColor,
    tierDescription,
    findings,
    roadmap,
    recommendedActions,
    relatedInsights: [
      { title: "Agentic AI and the Human Oversight Imperative", slug: "agentic-ai-human-oversight" },
      { title: "ESG as a Performance Metric", slug: "esg-performance-metric" },
      { title: "Multi-Jurisdictional Compliance: A Framework", slug: "multi-jurisdictional-compliance" },
    ],
  };
}

export default function ISO42001Readiness() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]> | null>(null);

  const handleUnlock = async (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data); setShowGate(false);
    if (results && answers) {
      try { await supabase.from("assessment_leads").insert({ name: data.name, email: data.email, company: data.company, industry: data.industry, consent: true, tool_used: "ISO 42001 Readiness Scan", score: results.score, tier: results.tier, date_completed: new Date().toISOString(), answers_json: answers }); } catch {}
    }
  };

  const handleComplete = async (submittedAnswers: Record<string, string | string[]>) => {
    const r = calculateResults(submittedAnswers);
    setAnswers(submittedAnswers);
    setResults(r);
    if (isUnlocked && userData) {
      try { await supabase.from("assessment_leads").insert({ name: userData.name, email: userData.email, company: userData.company, industry: userData.industry, consent: true, tool_used: "ISO 42001 Readiness Scan", score: r.score, tier: r.tier, date_completed: new Date().toISOString(), answers_json: submittedAnswers }); } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="ISO 42001 Readiness Scan — AI Management System Gap Analysis | ElevateQCS"
        description="Assess your readiness for ISO 42001 certification. Get a prioritised Road to Certification checklist showing which SOPs and technical logs are missing from your AI Management System."
        url="https://elevateqcs.com/tools/iso-42001-readiness"
        keywords={["ISO 42001 readiness", "AIMS gap analysis", "AI management system certification", "AI governance assessment", "ISO 42001 checklist"]}
      />

      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Suite
          </Link>

          <ToolEmailGate open={showGate} onUnlock={handleUnlock} />

          {!results && (
            <AssessmentShell
              title="ISO 42001 Readiness Scan"
              estimatedTime="5–7 minutes"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && (
            <ResultsPage
              toolName="ISO 42001 Readiness Scan"
              score={results.score}
              maxScore={results.maxScore}
              tier={results.tier}
              tierColor={results.tierColor}
              tierDescription={results.tierDescription}
              findings={results.findings}
              roadmap={results.roadmap}
              recommendedActions={results.recommendedActions}
              relatedInsights={results.relatedInsights}
              userData={userData || { name: "", company: "" }}
              isUnlocked={isUnlocked}
              onUnlock={() => setShowGate(true)}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
