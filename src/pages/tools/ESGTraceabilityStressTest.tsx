import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { AssessmentShell, type AssessmentQuestion } from "@/components/tools/AssessmentShell";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/integrations/supabase/client";

const questions: AssessmentQuestion[] = [
  {
    id: "supply_chain_visibility",
    category: "Supply Chain Visibility",
    question: "How deep is your supply chain visibility?",
    description: "The EU CS3D and Battery Passport require traceability to Tier 3+ suppliers. Most organisations have visibility only to Tier 1.",
    type: "radio",
    weight: 25,
    options: [
      { label: "Tier 1 only — we know our direct suppliers", value: "tier1" },
      { label: "Tier 1–2 — some visibility into sub-suppliers", value: "tier2" },
      { label: "Tier 1–3 — documented sub-tier mapping exists", value: "tier3" },
      { label: "Full value chain — Tier 1–4+ with documented provenance", value: "full" },
    ],
  },
  {
    id: "labor_compliance",
    category: "Labor & Human Rights",
    question: "Can your suppliers provide forensic evidence of ethical labour practices?",
    description: "CS3D requires documented due diligence on forced labour, child labour, and working conditions across the entire value chain — not just self-attestation.",
    type: "radio",
    weight: 25,
    options: [
      { label: "No visibility — we rely on supplier self-attestation only", value: "no_visibility" },
      { label: "Basic code of conduct signed but no audit or verification", value: "code_only" },
      { label: "Some suppliers audited but gaps at Tier 3+ level", value: "partial_audit" },
      { label: "Documented labour audits with corrective actions across all tiers", value: "full_audit" },
    ],
  },
  {
    id: "carbon_data",
    category: "Carbon & Environmental Data",
    question: "Can you trace carbon footprint data through your supply chain?",
    description: "EU Battery Passport and CSRD requirements demand product-level carbon footprint data from raw material extraction through end-of-life.",
    type: "radio",
    weight: 20,
    options: [
      { label: "No carbon tracking at any level", value: "none" },
      { label: "Corporate-level emissions estimates only (Scope 1–2)", value: "corporate_only" },
      { label: "Scope 3 estimates exist but not product-level or supplier-verified", value: "scope3_estimates" },
      { label: "Product-level carbon data with supplier-verified Scope 3 emissions", value: "product_level" },
    ],
  },
  {
    id: "documentation_standards",
    category: "Documentation & Evidence",
    question: "What standard of evidence do your suppliers provide?",
    description: "Regulatory enforcement under CS3D requires 'forensic-grade' documentation — certificates of origin, labour audit reports, and environmental data — not just declarations.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Self-declarations and questionnaires only", value: "self_declaration" },
      { label: "Certificates of origin for some materials but inconsistent documentation", value: "partial_certs" },
      { label: "Standardised documentation package but not independently verified", value: "standardised" },
      { label: "Third-party verified certificates, audit reports, and chain-of-custody documentation", value: "verified" },
    ],
  },
  {
    id: "risk_assessment_process",
    category: "Risk Assessment Process",
    question: "Do you have a formal supply chain due diligence process?",
    description: "CS3D Article 7–8 requires a risk-based due diligence process that identifies, prevents, mitigates, and accounts for adverse human rights and environmental impacts.",
    type: "radio",
    weight: 15,
    options: [
      { label: "No formal due diligence process for supply chain risks", value: "none" },
      { label: "Basic supplier qualification process without ongoing monitoring", value: "basic" },
      { label: "Risk-based due diligence exists but gaps in monitoring and remediation", value: "partial" },
      { label: "Comprehensive due diligence with ongoing monitoring, remediation plans, and stakeholder engagement", value: "comprehensive" },
    ],
  },
];

function calculateResults(answers: Record<string, string | string[]>) {
  const scoreMap: Record<string, Record<string, number>> = {
    supply_chain_visibility: { tier1: 0, tier2: 6, tier3: 16, full: 25 },
    labor_compliance: { no_visibility: 0, code_only: 6, partial_audit: 16, full_audit: 25 },
    carbon_data: { none: 0, corporate_only: 5, scope3_estimates: 12, product_level: 20 },
    documentation_standards: { self_declaration: 0, partial_certs: 4, standardised: 9, verified: 15 },
    risk_assessment_process: { none: 0, basic: 4, partial: 9, comprehensive: 15 },
  };

  let score = 0;
  for (const [key, map] of Object.entries(scoreMap)) {
    score += map[answers[key] as string] ?? 0;
  }

  let tier: string;
  let tierColor: string;
  let tierDescription: string;

  if (score >= 80) {
    tier = "HIGH INTEGRITY — Value Chain Verified";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "Your value chain demonstrates strong traceability and due diligence practices. You are well-positioned for CS3D compliance and Battery Passport requirements. Focus on continuous monitoring and extending verification depth.";
  } else if (score >= 55) {
    tier = "DEVELOPING — Gaps in Deep-Tier Traceability";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = "Core due diligence practices exist but significant gaps remain at Tier 3+ levels. Carbon data and labour verification need strengthening before CS3D enforcement deadlines.";
  } else if (score >= 30) {
    tier = "VULNERABLE — High-Risk Supplier Nodes Detected";
    tierColor = "bg-orange-100 text-orange-800";
    tierDescription = "Your supply chain has limited visibility beyond Tier 1 and insufficient evidence standards. You are exposed to significant regulatory, reputational, and financial risk under CS3D and Battery Passport requirements.";
  } else {
    tier = "CRITICAL — Value Chain Opacity";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = "Your value chain is effectively opaque. Without structural intervention, you face enforcement action under CS3D, exclusion from EU public procurement, and material ESG rating downgrades. Immediate supply chain mapping and due diligence programme required.";
  }

  // Identify high-risk nodes
  const highRiskNodes: string[] = [];
  if (answers.supply_chain_visibility === "tier1") highRiskNodes.push("All Tier 2+ suppliers (unverified)");
  if (answers.labor_compliance === "no_visibility" || answers.labor_compliance === "code_only") highRiskNodes.push("Labour compliance at sub-tier levels");
  if (answers.carbon_data === "none" || answers.carbon_data === "corporate_only") highRiskNodes.push("Carbon data beyond corporate boundary");
  if (answers.documentation_standards === "self_declaration") highRiskNodes.push("All supplier evidence (self-declaration only)");

  const findings = [
    {
      area: "Supply Chain Depth",
      status: answers.supply_chain_visibility === "full" ? "Verified" : answers.supply_chain_visibility === "tier3" ? "Adequate" : "Insufficient",
      recommendation: answers.supply_chain_visibility === "tier1"
        ? "Map supply chain to Tier 3 minimum — CS3D enforcement targets value chain opacity"
        : "Extend mapping depth and implement ongoing supplier verification cadence",
    },
    {
      area: "Labour & Human Rights Due Diligence",
      status: answers.labor_compliance === "full_audit" ? "Verified" : answers.labor_compliance === "partial_audit" ? "Partial" : "Non-Compliant",
      recommendation: answers.labor_compliance === "no_visibility"
        ? "Implement forensic labour audit programme — self-attestation will not survive CS3D scrutiny"
        : "Close audit gaps at Tier 3+ level and implement corrective action tracking",
    },
    {
      area: "Carbon & Environmental Traceability",
      status: answers.carbon_data === "product_level" ? "Compliant" : answers.carbon_data === "scope3_estimates" ? "Developing" : "Gap",
      recommendation: answers.carbon_data === "none"
        ? "Establish carbon measurement framework — EU Battery Passport requires product-level data"
        : "Move from estimates to verified product-level carbon data with supplier validation",
    },
    {
      area: "Evidence Standards",
      status: answers.documentation_standards === "verified" ? "Forensic Grade" : answers.documentation_standards === "standardised" ? "Acceptable" : "Inadequate",
      recommendation: answers.documentation_standards === "self_declaration"
        ? "Self-declarations will not meet enforcement standards — transition to third-party verified evidence"
        : "Standardise documentation requirements and implement independent verification",
    },
    {
      area: "Due Diligence Process",
      status: answers.risk_assessment_process === "comprehensive" ? "Mature" : answers.risk_assessment_process === "partial" ? "Developing" : "Absent",
      recommendation: answers.risk_assessment_process === "none"
        ? "Establish formal CS3D-aligned due diligence process with risk-based supplier assessment"
        : "Strengthen ongoing monitoring, remediation tracking, and stakeholder engagement",
    },
  ];

  if (highRiskNodes.length > 0) {
    findings.push({
      area: "High-Risk Supplier Nodes",
      status: `${highRiskNodes.length} node(s) identified`,
      recommendation: highRiskNodes.join("; "),
    });
  }

  const recommendedActions = [
    "Fatal Flaw: Relying on supplier self-attestation instead of forensic labour audit evidence — self-attestation has a 73% failure rate under CS3D enforcement.",
    "Fatal Flaw: Mapping your value chain only to Tier 1, leaving Tier 3+ suppliers as an unmonitored enforcement liability.",
    "Fatal Flaw: Using estimated carbon data instead of product-level, supplier-verified footprint tracking.",
    "Fatal Flaw: Treating ESG compliance as a reporting exercise rather than an operational due diligence process aligned with CS3D Articles 7–8.",
  ];

  if (score < 30) {
    recommendedActions.push("Your value chain risk level has a direct correlation with regulatory enforcement and procurement exclusion. To receive a customised remediation roadmap, book a Principal-Led briefing.");
  }

  return {
    score,
    maxScore: 100,
    tier,
    tierColor,
    tierDescription,
    findings,
    recommendedActions,
    relatedInsights: [
      { title: "CTIP and CS3D: The Convergence of Human Rights Compliance", slug: "ctip-cs3d-compliance" },
      { title: "ESG as a Performance Metric", slug: "esg-performance-metric" },
      { title: "Forensic Auditor: Supply Chain Integrity", slug: "forensic-auditor-supply-chain" },
      { title: "Supply Chain Compliance: Beyond the Checkbox", slug: "supply-chain-compliance" },
    ],
  };
}

export default function ESGTraceabilityStressTest() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]> | null>(null);

  const handleUnlock = async (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data); setShowGate(false);
    if (results && answers) {
      try { await supabase.from("assessment_leads").insert({ name: data.name, email: data.email, company: data.company, industry: data.industry, consent: true, tool_used: "ESG Traceability Stress Test", score: results.score, tier: results.tier, date_completed: new Date().toISOString(), answers_json: answers }); } catch {}
    }
  };

  const handleComplete = async (submittedAnswers: Record<string, string | string[]>) => {
    const r = calculateResults(submittedAnswers);
    setAnswers(submittedAnswers);
    setResults(r);
    if (isUnlocked && userData) {
      try { await supabase.from("assessment_leads").insert({ name: userData.name, email: userData.email, company: userData.company, industry: userData.industry, consent: true, tool_used: "ESG Traceability Stress Test", score: r.score, tier: r.tier, date_completed: new Date().toISOString(), answers_json: submittedAnswers }); } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="ESG & Supply Chain Traceability Stress Test — CS3D Compliance | ElevateQCS"
        description="Test if your Tier 3–4 suppliers can provide forensic evidence of ethical labour and carbon data. Get a Value Chain Integrity Rating and high-risk supplier node analysis."
        url="https://elevateqcs.com/tools/esg-traceability-stress-test"
        keywords={["ESG supply chain traceability", "CS3D compliance", "EU Battery Passport", "supply chain due diligence", "value chain integrity assessment"]}
      />

      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Suite
          </Link>

          <ToolEmailGate open={showGate} onUnlock={handleUnlock} />

          {!results && (
            <AssessmentShell
              title="ESG & Supply Chain Traceability Stress Test"
              estimatedTime="4–6 minutes"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && (
            <ResultsPage
              toolName="ESG & Supply Chain Traceability Stress Test"
              score={results.score}
              maxScore={results.maxScore}
              tier={results.tier}
              tierColor={results.tierColor}
              tierDescription={results.tierDescription}
              findings={results.findings}
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
