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
    id: "price_justification",
    category: "Price Justification",
    question: "For your last 3 sub-tier purchases, can you locate the documented price justification within 15 minutes?",
    description: "DCMA auditors will request price justification files during a CPSR. If you cannot produce them rapidly, the finding is 'Material Weakness — Documentation Control.'",
    type: "radio",
    weight: 20,
    options: [
      { label: "Yes — all price justifications are filed in a searchable procurement system with audit-ready indexing", value: "full" },
      { label: "Most are retrievable but scattered across email, shared drives, and individual files", value: "partial" },
      { label: "Some exist but there is no consistent filing methodology", value: "developing" },
      { label: "Price justifications are not routinely documented", value: "none" },
    ],
  },
  {
    id: "debarment_screening",
    category: "Debarment & Exclusion",
    question: "Do you screen all vendors against the System for Award Management (SAM.gov) exclusions list before issuing purchase orders?",
    description: "Purchasing from a debarred or suspended entity is a material violation that can result in contract termination and referral to the OIG.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Yes — automated SAM.gov screening integrated into our procurement workflow with timestamped records", value: "full" },
      { label: "Yes — manual SAM.gov checks performed but not always documented with timestamps", value: "partial" },
      { label: "Occasional checks — no systematic screening process", value: "developing" },
      { label: "No debarment screening is performed", value: "none" },
    ],
  },
  {
    id: "fair_reasonable",
    category: "Fair & Reasonable Determination",
    question: "How do you determine that prices paid to sub-tier suppliers are 'fair and reasonable'?",
    description: "FAR 15.404-1 requires a price analysis for every procurement. The method must be documented and defensible — not based on assumption.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Documented price analysis using competitive quotes, market research, historical pricing, or independent estimates for every purchase", value: "full" },
      { label: "Competitive quotes for major purchases, but smaller purchases rely on single-source pricing without analysis", value: "partial" },
      { label: "Informal price comparisons — no structured methodology", value: "developing" },
      { label: "Prices are accepted as quoted without analysis", value: "none" },
    ],
  },
  {
    id: "procurement_authority",
    category: "Procurement Authority",
    question: "Do you have documented procurement authority levels (who can approve purchases at what dollar thresholds)?",
    description: "Unauthorized procurement — purchases approved by personnel without delegated authority — is a common CPSR finding that triggers material weakness determinations.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Yes — formal delegation of procurement authority with documented approval thresholds and signature matrices", value: "full" },
      { label: "Informal authority levels exist but are not formally documented", value: "partial" },
      { label: "Authority is ad hoc — various personnel issue POs without formal delegation", value: "developing" },
      { label: "No defined procurement authority structure", value: "none" },
    ],
  },
  {
    id: "conflict_interest",
    category: "Conflict of Interest",
    question: "Do you maintain Organizational Conflict of Interest (OCI) screening procedures for procurement decisions?",
    description: "OCI violations undermine the integrity of the purchasing system. Primes and DCMA specifically look for OCI controls during CPSRs.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Yes — formal OCI screening with documented disclosure and mitigation procedures", value: "full" },
      { label: "OCI awareness exists but no formal screening process", value: "partial" },
      { label: "OCI considerations are addressed informally on a case-by-case basis", value: "developing" },
      { label: "No OCI screening or procedures exist", value: "none" },
    ],
  },
  {
    id: "flowdown_clauses",
    category: "Flow-Down Compliance",
    question: "Do your sub-tier purchase orders include all required FAR/DFARS flow-down clauses?",
    description: "Missing flow-down clauses in sub-tier POs is the most common CPSR finding. It indicates systemic failure in purchasing system controls.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Yes — standardized PO templates with clause matrices mapped to contract requirements", value: "full" },
      { label: "Most clauses are included but clause matrices are not systematically maintained", value: "partial" },
      { label: "Some flow-down clauses are included ad hoc — no systematic mapping", value: "developing" },
      { label: "Flow-down clauses are not consistently included in sub-tier POs", value: "none" },
    ],
  },
  {
    id: "audit_trail",
    category: "Audit Trail Integrity",
    question: "Can you produce a complete procurement audit trail — from requisition to receipt — for any purchase order within 24 hours?",
    description: "The 'cradle-to-grave' audit trail is the foundation of CPSR compliance. Missing links in the chain create material weakness findings.",
    type: "radio",
    weight: 5,
    options: [
      { label: "Yes — integrated procurement system with complete digital audit trails for every transaction", value: "full" },
      { label: "Most trails are complete but some steps rely on paper records or email approvals", value: "partial" },
      { label: "Partial trails exist — significant gaps in documentation for older purchases", value: "developing" },
      { label: "No consistent audit trail methodology", value: "none" },
    ],
  },
];

const scoreMap: Record<string, number> = { full: 100, partial: 60, developing: 30, none: 0 };

function calculateScore(answers: Record<string, string | string[]>) {
  let totalWeight = 0;
  let weightedScore = 0;
  const findings: { area: string; status: string; recommendation: string }[] = [];
  const materialWeaknesses: string[] = [];

  for (const q of questions) {
    const answer = answers[q.id] as string;
    const weight = q.weight || 10;
    totalWeight += weight;
    const raw = scoreMap[answer] || 0;
    weightedScore += (raw / 100) * weight;

    if (raw === 0 && weight >= 15) materialWeaknesses.push(q.category);

    const statusMap: Record<string, string> = {
      full: "Approved",
      partial: "Observation — Minor Finding",
      developing: "Finding — Corrective Action Required",
      none: "Material Weakness",
    };

    const recMap: Record<string, string> = {
      full: "Maintain current controls. Document any process changes.",
      partial: "Formalize procedures and strengthen documentation practices.",
      developing: "Implement structured controls before next surveillance review.",
      none: "CRITICAL: This would trigger a material weakness finding and potential purchasing system disapproval.",
    };

    findings.push({ area: q.category, status: statusMap[answer] || "Unknown", recommendation: recMap[answer] || "" });
  }

  return { score: Math.round((weightedScore / totalWeight) * 100), findings, materialWeaknesses };
}

function getTier(score: number, weaknesses: string[]) {
  if (score >= 75 && weaknesses.length === 0) return { tier: "Purchasing System: Approved", color: "bg-green-100 text-green-800", desc: "Your purchasing system demonstrates sufficient controls to pass a CPSR or Prime contractor purchasing review. Continue maintaining documented evidence of execution." };
  if (score >= 45) return { tier: "Purchasing System: Conditionally Approved — Corrective Actions Required", color: "bg-yellow-100 text-yellow-800", desc: `Your purchasing system has foundational controls but material gaps were identified${weaknesses.length > 0 ? ` in: ${weaknesses.join(", ")}` : ""}. A Prime contractor would likely issue corrective action requirements before approving your purchasing system.` };
  return { tier: "Purchasing System: Disapproved — Material Weaknesses", color: "bg-red-100 text-red-800", desc: `Your purchasing system would likely be disapproved during a CPSR. Material weaknesses identified in: ${weaknesses.join(", ") || "multiple areas"}. Disapproval can result in withheld payments and contract action.` };
}

export default function CPSRFinancialIntegrity() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateScore> | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => { if (!isUnlocked) { setShowGate(true); } else { setStarted(true); } };
  const handleUnlock = (data: { name: string; email: string; company: string; industry: string }) => { unlock(data); setShowGate(false); setStarted(true); };

  const handleComplete = async (answers: Record<string, string | string[]>) => {
    const result = calculateScore(answers);
    setResults(result);
    const tierInfo = getTier(result.score, result.materialWeaknesses);
    if (userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
        consent: true, tool_used: "cpsr-financial-integrity", score: result.score, tier: tierInfo.tier,
        date_completed: new Date().toISOString(), answers_json: answers,
      });
    }
  };

  const tierInfo = results ? getTier(results.score, results.materialWeaknesses) : null;

  return (
    <Layout>
      <SEOHead
        title="CPSR Financial Integrity Shield | Purchasing System Audit | ElevateQCS"
        description="Mock-audit your purchasing system against DCMA CPSR standards. Identify material weaknesses in price justification, debarment screening, and fair & reasonable determinations."
        url="https://elevateqcs.com/tools/cpsr-financial-integrity"
        keywords={["CPSR audit", "purchasing system review", "DCMA compliance", "DFARS 252.244-7001", "contractor purchasing system", "price justification audit"]}
      />
      <ToolEmailGate open={showGate} onUnlock={handleUnlock} />
      <section className="pt-32 pb-8 bg-primary">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Tools
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Purchasing System Audit</p>
            <h1 className="text-primary-foreground mb-4">CPSR Financial Integrity Shield</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              A mock-audit of your purchasing workflow that identifies Material Weaknesses before DCMA or your Prime contractor finds them first.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {!started && !results && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-elevated p-12">
                <h2 className="mb-4">Would Your Purchasing System Pass a CPSR?</h2>
                <p className="text-muted-foreground mb-8">
                  This diagnostic evaluates seven critical areas of your purchasing workflow: price justification, debarment screening, fair & reasonable determinations, procurement authority, conflict of interest controls, flow-down compliance, and audit trail integrity.
                </p>
                <Button variant="cta" size="xl" onClick={handleStart}>Start Mock Audit</Button>
                <p className="text-xs text-muted-foreground mt-4">Takes approximately 3–5 minutes</p>
              </div>
            </div>
          )}

          {started && !results && (
            <AssessmentShell title="CPSR Financial Integrity Shield" estimatedTime="3–5 min" questions={questions} onComplete={handleComplete} />
          )}

          {results && tierInfo && userData && (
            <ResultsPage
              toolName="CPSR Financial Integrity Shield"
              score={results.score}
              tier={tierInfo.tier}
              tierColor={tierInfo.color}
              tierDescription={tierInfo.desc}
              findings={results.findings}
              roadmap={[
                { phase: "Immediate (0–30 days)", description: "Address all Material Weakness findings. Implement SAM.gov screening and documented price analysis procedures." },
                { phase: "Short-Term (30–90 days)", description: "Build standardized PO templates with flow-down clause matrices. Establish formal procurement authority delegations." },
                { phase: "Sustainment (90+ days)", description: "Implement a digital procurement system with integrated audit trails. Conduct internal purchasing system reviews quarterly." },
              ]}
              recommendedActions={[
                "Implement automated SAM.gov exclusion screening before every purchase order",
                "Create documented price analysis templates for all procurement types",
                "Map FAR/DFARS flow-down clause requirements to standardized PO templates",
                "Establish formal delegation of procurement authority with documented thresholds",
                "Build a digital procurement audit trail system for cradle-to-grave traceability",
              ]}
              relatedInsights={[
                { title: "The Forensic Auditor's View: Supply Chain Transparency", slug: "forensic-auditor-supply-chain" },
                { title: "FAR Flow-Downs Under 52.244-6", slug: "far-flowdowns-52-244-6" },
                { title: "Subcontractor Audit Evidence That Survives Review", slug: "subcontractor-audit-review" },
                { title: "What U.S. Primes Actually Expect From Subcontractors", slug: "govcon-prime-expectations" },
              ]}
              userData={userData}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
