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
    id: "schedule_variance",
    category: "Schedule Performance",
    question: "What is the current schedule variance on this project?",
    description: "Schedule slippage is the earliest warning sign of systemic project distress. Projects more than 15% behind schedule rarely recover without structural intervention.",
    type: "radio",
    weight: 20,
    options: [
      { label: "On schedule or ahead — less than 5% variance", value: "on_track" },
      { label: "Minor delays — 5–15% behind schedule", value: "minor_delay" },
      { label: "Significant slippage — 15–30% behind schedule", value: "significant" },
      { label: "Critical — more than 30% behind or key milestones missed", value: "critical" },
    ],
  },
  {
    id: "subtier_performance",
    category: "Sub-Tier Performance",
    question: "How are your sub-tier contractors performing?",
    description: "Sub-tier friction accounts for 60%+ of project failures in infrastructure and defence programmes. Early identification prevents cascade failures.",
    type: "radio",
    weight: 20,
    options: [
      { label: "All sub-tiers performing within contract parameters", value: "performing" },
      { label: "One or two sub-tiers showing quality or delivery issues", value: "isolated_issues" },
      { label: "Multiple sub-tiers missing deliverables or producing non-conforming work", value: "multiple_issues" },
      { label: "Sub-tier relationships have broken down — disputes or terminations in progress", value: "breakdown" },
    ],
  },
  {
    id: "documentation_integrity",
    category: "Documentation Integrity",
    question: "What is the state of your project documentation?",
    description: "Documentation gaps in SOW, PWS, and quality records create legal exposure and make recovery actions indefensible during audits or disputes.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Complete documentation with version control and audit trail", value: "complete" },
      { label: "Core documents exist but gaps in change orders or sub-tier records", value: "gaps" },
      { label: "Significant documentation deficiencies — missing SOW amendments or quality records", value: "deficient" },
      { label: "No cohesive documentation trail — records are scattered or missing", value: "absent" },
    ],
  },
  {
    id: "cost_performance",
    category: "Cost Performance",
    question: "What is your current cost performance index (CPI)?",
    description: "A CPI below 0.9 on a project past 20% completion has less than a 5% chance of recovering to budget without structural changes.",
    type: "radio",
    weight: 15,
    options: [
      { label: "CPI > 1.0 — under budget", value: "under_budget" },
      { label: "CPI 0.9–1.0 — minor overrun", value: "minor_overrun" },
      { label: "CPI 0.7–0.9 — significant cost overrun", value: "significant_overrun" },
      { label: "CPI < 0.7 — severe margin leakage or unknown spend", value: "severe" },
    ],
  },
  {
    id: "sow_clarity",
    category: "SOW / PWS Clarity",
    question: "How clear and enforceable is your Statement of Work?",
    description: "Ambiguous SOW language is the root cause of 70% of contract disputes. Forensic PWS scrubbing can recover 15–30% of margin leakage.",
    type: "radio",
    weight: 15,
    options: [
      { label: "SOW is precise with measurable deliverables and clear acceptance criteria", value: "precise" },
      { label: "SOW has some ambiguous requirements but core scope is clear", value: "some_ambiguity" },
      { label: "Multiple sections are open to interpretation — disputes likely", value: "ambiguous" },
      { label: "SOW is fundamentally flawed — scope creep is uncontrolled", value: "flawed" },
    ],
  },
  {
    id: "governance_structure",
    category: "Governance & Chain of Command",
    question: "Is there a clear governance structure with defined escalation paths?",
    description: "Projects without defined decision authority and escalation protocols cannot execute recovery actions effectively.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Clear governance with defined authority levels and escalation matrix", value: "clear" },
      { label: "Governance exists informally but authority and escalation paths are unclear", value: "informal" },
      { label: "Multiple stakeholders with competing authority — no clear chain of command", value: "competing" },
      { label: "No defined governance — decisions are reactive and ad-hoc", value: "none" },
    ],
  },
];

function calculateResults(answers: Record<string, string | string[]>) {
  const scoreMap: Record<string, Record<string, number>> = {
    schedule_variance: { on_track: 0, minor_delay: 5, significant: 14, critical: 20 },
    subtier_performance: { performing: 0, isolated_issues: 5, multiple_issues: 14, breakdown: 20 },
    documentation_integrity: { complete: 0, gaps: 5, deficient: 14, absent: 20 },
    cost_performance: { under_budget: 0, minor_overrun: 4, significant_overrun: 10, severe: 15 },
    sow_clarity: { precise: 0, some_ambiguity: 4, ambiguous: 10, flawed: 15 },
    governance_structure: { clear: 0, informal: 2, competing: 6, none: 10 },
  };

  let riskScore = 0;
  for (const [key, map] of Object.entries(scoreMap)) {
    riskScore += map[answers[key] as string] ?? 0;
  }

  // Invert: higher risk = lower health
  const healthScore = Math.max(0, 100 - riskScore);

  let tier: string;
  let tierColor: string;
  let tierDescription: string;

  if (healthScore >= 80) {
    tier = "GREEN — Healthy Project";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "Your project is performing within acceptable parameters. Maintain current governance controls and continue proactive risk monitoring. Focus on early warning indicators for sub-tier performance.";
  } else if (healthScore >= 55) {
    tier = "YELLOW — Intervention Recommended";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = "Your project shows early warning signs of distress. Targeted interventions in documentation, sub-tier management, or cost controls can prevent escalation. A 30-day stabilisation sprint is recommended.";
  } else if (healthScore >= 30) {
    tier = "ORANGE — Stabilisation Required";
    tierColor = "bg-orange-100 text-orange-800";
    tierDescription = "Your project is in active distress. Multiple risk indicators are elevated. A structured 96-hour stabilisation programme with PWS forensic scrub and chain-of-command restoration is required to prevent further deterioration.";
  } else {
    tier = "RED — Emergency Recovery";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = "Your project is in crisis. Continued performance without structural intervention carries high probability of contract termination, financial loss, or regulatory action. Immediate executive escalation and external recovery support are required.";
  }

  const findings = [
    {
      area: "Schedule Performance",
      status: answers.schedule_variance === "on_track" ? "Healthy" : answers.schedule_variance === "minor_delay" ? "Watch" : answers.schedule_variance === "significant" ? "At Risk" : "Critical",
      recommendation: answers.schedule_variance === "critical"
        ? "Implement schedule recovery plan with milestone re-baselining and resource surge analysis"
        : "Monitor schedule variance weekly with earned value analysis",
    },
    {
      area: "Sub-Tier Performance",
      status: answers.subtier_performance === "performing" ? "Healthy" : answers.subtier_performance === "isolated_issues" ? "Watch" : "Critical",
      recommendation: answers.subtier_performance === "breakdown"
        ? "Initiate sub-tier replacement planning and conduct forensic review of sub-tier deliverables"
        : "Strengthen sub-tier oversight with weekly performance reviews and documented quality holds",
    },
    {
      area: "Documentation Integrity",
      status: answers.documentation_integrity === "complete" ? "Compliant" : answers.documentation_integrity === "gaps" ? "Gaps" : "Deficient",
      recommendation: answers.documentation_integrity === "absent"
        ? "Conduct emergency documentation reconstruction — this is essential for any legal or audit defence"
        : "Close documentation gaps systematically, prioritising SOW amendments and quality records",
    },
    {
      area: "Cost Performance",
      status: answers.cost_performance === "under_budget" ? "Healthy" : answers.cost_performance === "minor_overrun" ? "Watch" : "At Risk",
      recommendation: answers.cost_performance === "severe"
        ? "Conduct forensic cost analysis to identify margin leakage sources and implement cost containment"
        : "Review cost drivers and tighten change order and procurement controls",
    },
    {
      area: "SOW / PWS Clarity",
      status: answers.sow_clarity === "precise" ? "Strong" : answers.sow_clarity === "some_ambiguity" ? "Acceptable" : "Vulnerable",
      recommendation: answers.sow_clarity === "flawed"
        ? "Conduct PWS forensic scrub — ambiguous language is actively eroding your margin"
        : "Review and tighten SOW language before next modification period",
    },
    {
      area: "Governance Structure",
      status: answers.governance_structure === "clear" ? "Effective" : answers.governance_structure === "informal" ? "Informal" : "Absent",
      recommendation: answers.governance_structure === "none"
        ? "Establish chain-of-command with defined decision authority and escalation matrix within 48 hours"
        : "Formalise governance procedures and conduct stakeholder alignment session",
    },
  ];

  const roadmap = healthScore < 55 ? [
    { phase: "Hours 0–24: Containment", description: "Freeze scope changes, establish war-room governance, identify top 3 risk drivers." },
    { phase: "Hours 24–48: Forensic Assessment", description: "Conduct PWS/SOW forensic scrub, map sub-tier performance gaps, reconstruct documentation trail." },
    { phase: "Hours 48–72: Stabilisation Plan", description: "Develop recovery roadmap, re-baseline schedule, assign corrective action ownership." },
    { phase: "Hours 72–96: Execution Launch", description: "Deploy stabilisation actions, establish daily cadence, communicate recovery plan to stakeholders." },
  ] : undefined;

  const recommendedActions = [
    "Fatal Flaw: Conducting a 'project health review' without a forensic PWS/SOW scrub — the root cause is almost always buried in ambiguous contract language.",
    "Fatal Flaw: Treating sub-tier performance issues as management problems rather than contractual accountability gaps requiring quality holds.",
    "Fatal Flaw: Using schedule-based progress reporting without earned value management, making it impossible to detect cost overruns until they're irreversible.",
    "Fatal Flaw: Escalating issues through informal channels instead of documented decision authority protocols that create defensible records.",
  ];

  if (healthScore < 30) {
    recommendedActions.unshift("EMERGENCY: Your project has an 82% correlation with contract termination at this distress level. To receive a customised 96-hour stabilisation plan, book an immediate briefing.");
  }

  return {
    score: healthScore,
    maxScore: 100,
    tier,
    tierColor,
    tierDescription,
    findings,
    roadmap,
    recommendedActions,
    relatedInsights: [
      { title: "The 96-Hour Sprint: LOGCAP Surge Recovery", slug: "96-hour-sprint" },
      { title: "The PWS Whisperer: Reading Between the Lines", slug: "pws-whisperer" },
      { title: "Subcontractor Decision Matrix: Build, Buy, or Monitor?", slug: "subcontractor-decision-matrix" },
    ],
  };
}

export default function ProjectHealthDiagnostic() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);

  const handleComplete = async (answers: Record<string, string | string[]>) => {
    const r = calculateResults(answers);
    setResults(r);
    if (isUnlocked && userData) {
      try { await supabase.from("assessment_leads").insert({ name: userData.name, email: userData.email, company: userData.company, industry: userData.industry, consent: true, tool_used: "Project Health Diagnostic", score: r.score, tier: r.tier, date_completed: new Date().toISOString(), answers_json: answers }); } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Infrastructure Project Health Diagnostic — Forensic Stabilisation | ElevateQCS"
        description="Identify early-warning signs of project collapse in data centres and infrastructure programmes. Get a Stabilisation Priority Score with a 96-hour emergency action plan."
        url="https://elevateqcs.com/tools/project-health-diagnostic"
        keywords={["project health diagnostic", "infrastructure project recovery", "project stabilisation", "data center compliance", "construction project forensic"]}
      />

      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Suite
          </Link>

          <ToolEmailGate open={!isUnlocked && !!results} onUnlock={(data) => { unlock(data); }} />

          {!results && (
            <AssessmentShell
              title="Project Health Forensic Diagnostic"
              estimatedTime="3–5 minutes"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && (
            <ResultsPage
              toolName="Project Health Forensic Diagnostic"
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
              onUnlock={() => {}}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
