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
    id: "finding_source",
    category: "Finding Source",
    question: "Who issued the finding?",
    description: "The source of the finding significantly impacts severity and response expectations. Government-issued findings carry more contractual weight than internal discoveries.",
    type: "radio",
    weight: 30,
    options: [
      { label: "Government auditor (DCMA, DCAA, or CO)", value: "government" },
      { label: "Prime Contractor quality team", value: "prime" },
      { label: "Internal audit or management review", value: "internal" },
      { label: "Customer complaint or field failure", value: "customer" },
    ],
  },
  {
    id: "repeat_finding",
    category: "Repeat Status",
    question: "Is this a repeat finding in the same process area?",
    description: "Repeat findings indicate the previous corrective action was ineffective — a significant escalation trigger for Contracting Officers and Prime auditors.",
    type: "radio",
    weight: 25,
    options: [
      { label: "Yes — same finding, same process area within the last 12 months", value: "repeat_same" },
      { label: "Similar — related process area or similar root cause", value: "similar" },
      { label: "No — this is the first finding in this area", value: "first" },
      { label: "Unknown — we don't track finding history by area", value: "unknown" },
    ],
  },
  {
    id: "impact_scope",
    category: "Impact Scope",
    question: "What is the operational impact of this finding?",
    description: "Findings that affect safety, mission-critical deliverables, or classified environments escalate faster than administrative process gaps.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Safety, security, or mission-critical deliverable affected", value: "critical" },
      { label: "Deliverable quality or schedule directly impacted", value: "major" },
      { label: "Process non-conformance with no direct deliverable impact", value: "moderate" },
      { label: "Documentation gap only — no operational impact", value: "minor" },
    ],
  },
  {
    id: "response_history",
    category: "Response Capability",
    question: "What is your track record for closing corrective actions on time?",
    description: "Your corrective action closure history directly influences how auditors assess the risk of unresolved findings and future non-conformances.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Strong — 90%+ CARs closed on time with verified effectiveness", value: "strong" },
      { label: "Moderate — most CARs closed on time, some delayed", value: "moderate" },
      { label: "Weak — multiple overdue CARs currently open", value: "weak" },
      { label: "No formal CAR tracking system exists", value: "none" },
    ],
  },
  {
    id: "contract_context",
    category: "Contract Context",
    question: "What is your current contract status?",
    description: "Findings during option year evaluation periods or near contract milestones carry elevated risk because they directly influence renewal decisions.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Within 6 months of option year decision", value: "option_year" },
      { label: "Active base period with no immediate milestones", value: "base_period" },
      { label: "New contract — less than 6 months of performance", value: "new_contract" },
      { label: "Multiple concurrent contracts affected", value: "multiple" },
    ],
  },
];

function calculateResults(answers: Record<string, string | string[]>) {
  let score = 0;

  // Finding Source (0-3 points)
  const source = answers.finding_source as string;
  if (source === "government") score += 3;
  else if (source === "prime") score += 2.5;
  else if (source === "customer") score += 2;
  else if (source === "internal") score += 0.5;

  // Repeat Status (0-3 points)
  const repeat = answers.repeat_finding as string;
  if (repeat === "repeat_same") score += 3;
  else if (repeat === "similar") score += 2;
  else if (repeat === "unknown") score += 1.5;
  else if (repeat === "first") score += 0.5;

  // Impact Scope (0-2 points)
  const impact = answers.impact_scope as string;
  if (impact === "critical") score += 2;
  else if (impact === "major") score += 1.5;
  else if (impact === "moderate") score += 0.5;
  else if (impact === "minor") score += 0;

  // Response History (0-1.5 points)
  const history = answers.response_history as string;
  if (history === "none") score += 1.5;
  else if (history === "weak") score += 1;
  else if (history === "moderate") score += 0.5;
  else if (history === "strong") score += 0;

  // Contract Context (0-0.5 points)
  const context = answers.contract_context as string;
  if (context === "option_year") score += 0.5;
  else if (context === "multiple") score += 0.5;
  else if (context === "new_contract") score += 0.25;
  else if (context === "base_period") score += 0;

  const gravityScore = Math.round(score);

  let tier: string;
  let tierColor: string;
  let tierDescription: string;

  if (gravityScore >= 8) {
    tier = "CRITICAL — Cure Notice Likely";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = "Your finding profile indicates a high probability of receiving a Cure Notice or being excluded from the next option year. Immediate crisis-level response is required within 24 hours. Engage cross-functional leadership and consider external corrective action support.";
  } else if (gravityScore >= 6) {
    tier = "HIGH — Escalation Probable";
    tierColor = "bg-orange-100 text-orange-800";
    tierDescription = "The combination of finding source, repeat status, and impact creates a strong escalation trajectory. A formal corrective action response with root cause analysis and effectiveness verification plan should be submitted within 48 hours.";
  } else if (gravityScore >= 4) {
    tier = "MODERATE — Managed Response Required";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = "The finding requires a structured corrective action response but is unlikely to escalate to contract action if addressed within the standard response timeline. Focus on system-level root cause analysis and preventive action deployment.";
  } else {
    tier = "LOW — Standard Correction";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "The finding represents a manageable non-conformance that can be resolved through standard corrective action processes. Monitor for recurrence and update your trending analysis.";
  }

  const findings = [
    {
      area: "Finding Source Risk",
      status: source === "government" ? "Critical" : source === "prime" ? "High" : source === "customer" ? "Moderate" : "Low",
      recommendation: source === "government"
        ? "Government-issued findings require executive-level response within 24 hours"
        : source === "prime"
        ? "Prime contractor findings should be addressed through your formal CAR process"
        : "Document the finding in your CAPA system with standard response timelines",
    },
    {
      area: "Repeat Finding Risk",
      status: repeat === "repeat_same" ? "Critical" : repeat === "similar" ? "High" : repeat === "unknown" ? "Moderate" : "Low",
      recommendation: repeat === "repeat_same"
        ? "Repeat findings double perceived risk — previous corrective action must be re-evaluated"
        : repeat === "unknown"
        ? "Implement finding tracking by process area to identify patterns proactively"
        : "Continue monitoring for recurrence through trending analysis",
    },
    {
      area: "Impact Assessment",
      status: impact === "critical" ? "Critical" : impact === "major" ? "High" : impact === "moderate" ? "Moderate" : "Low",
      recommendation: impact === "critical"
        ? "Safety or mission-critical impact requires immediate containment and notification"
        : "Document the impact scope and containment actions taken",
    },
    {
      area: "Response Capability",
      status: history === "none" || history === "weak" ? "At Risk" : history === "moderate" ? "Developing" : "Mature",
      recommendation: history === "none"
        ? "Establish a formal CAPA tracking system before responding to this finding"
        : history === "weak"
        ? "Address overdue CARs in parallel — auditors review your open CAR log"
        : "Leverage your strong track record in your response narrative",
    },
    {
      area: "Contract Timing",
      status: context === "option_year" || context === "multiple" ? "Elevated" : "Standard",
      recommendation: context === "option_year"
        ? "Findings near option year decisions carry outsized weight — prioritize rapid closure"
        : "Document response within standard timelines",
    },
  ];

  const recommendedActions = [
    "Fatal Flaw: Treating the finding as a localized symptom rather than a systemic failure.",
    "Fatal Flaw: Implementing a 'band-aid' fix without conducting a formalized 5-Whys or Ishikawa root cause analysis.",
    "Fatal Flaw: Responding to a DCMA or Prime auditor using internal jargon instead of standard acquisition terminology.",
    "Fatal Flaw: Failing to provide objective evidence of effectiveness verification after 60 days.",
    "Fatal Flaw: Assuming a repeat finding won't immediately escalate to a Level III CAR or Cure Notice.",
  ];

  if (gravityScore >= 6) {
    recommendedActions.unshift("CRITICAL FATAL FLAW: Attempting an internal-only response at this severity level without external advisory support. 80% of firms fail the follow-up audit due to 'Linguistic Mismatch' with government standards.");
  }

  return {
    score: gravityScore,
    maxScore: 10,
    tier,
    tierColor,
    tierDescription,
    findings,
    recommendedActions,
    relatedInsights: [
      { title: "NCR vs. CAR: Surviving Non-Conformance", slug: "ncr-vs-car" },
      { title: "The CAPA Loop: Corrective Actions into Preventive Advantage", slug: "capa-loop" },
      { title: "Common Patterns in Failed Quality Audits", slug: "audit-failure-patterns" },
      { title: "Received a Letter of Concern? The First 24 Hours", slug: "loc-crisis-response" },
    ],
  };
}

export default function CARGravityCalculator() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]> | null>(null);
  
  const handleUnlock = async (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data);
    setShowGate(false);
    
    if (results && answers) {
      try {
        await supabase.from("assessment_leads").insert({
          name: data.name,
          email: data.email,
          company: data.company,
          industry: data.industry,
          consent: true,
          tool_used: "car-gravity-calculator",
          score: results.score,
          tier: results.tier,
          date_completed: new Date().toISOString(),
          answers_json: answers,
        });
      } catch {}
    }
  };

  const handleComplete = async (submittedAnswers: Record<string, string | string[]>) => {
    const r = calculateResults(submittedAnswers);
    setAnswers(submittedAnswers);
    setResults(r);
    
    if (isUnlocked && userData) {
      try {
        await supabase.from("assessment_leads").insert({
          name: userData.name,
          email: userData.email,
          company: userData.company,
          industry: userData.industry,
          consent: true,
          tool_used: "car-gravity-calculator",
          score: r.score,
          tier: r.tier,
          date_completed: new Date().toISOString(),
          answers_json: submittedAnswers,
        });
      } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="CAR Gravity Calculator — Corrective Action Risk Assessment | ElevateQCS"
        description="Assess the severity of your corrective action finding. Calculate the likelihood of receiving a Cure Notice based on finding source, repeat status, impact scope, and response history."
        url="https://elevateqcs.com/tools/car-gravity-calculator"
        keywords={["CAR severity calculator", "corrective action risk assessment", "cure notice risk", "non-conformance severity", "government contractor audit tool"]}
      />

      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>

          <ToolEmailGate open={showGate} onUnlock={handleUnlock} />

          {!results && (
            <AssessmentShell
              title="CAR Gravity Calculator"
              estimatedTime="2–3 minutes"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && (
            <ResultsPage
              toolName="CAR Gravity Calculator"
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
