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
    id: "anti_trafficking",
    category: "Anti-Trafficking Policy",
    question: "Does your organisation have a documented anti-trafficking and forced labour policy?",
    description: "FAR 52.222-50 requires compliance plans for contracts exceeding $550,000 with overseas performance. Even domestic subcontractors benefit from established policies.",
    type: "radio",
    weight: 25,
    options: [
      { label: "Yes — documented, trained, and audited annually", value: "full" },
      { label: "Yes — documented but not regularly reviewed", value: "partial" },
      { label: "In development", value: "developing" },
      { label: "No policy exists", value: "none" },
    ],
  },
  {
    id: "code_of_conduct",
    category: "Code of Conduct",
    question: "Does your organisation maintain a formal code of conduct?",
    description: "A code of conduct demonstrates institutional commitment to ethical operations and is frequently requested during prime contractor onboarding.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Yes — distributed to all employees with acknowledgement records", value: "full" },
      { label: "Yes — exists but distribution is inconsistent", value: "partial" },
      { label: "Informal guidelines only", value: "developing" },
      { label: "No code of conduct", value: "none" },
    ],
  },
  {
    id: "supplier_compliance",
    category: "Supplier Compliance",
    question: "Do you conduct due diligence on your supply chain partners?",
    description: "Prime contractors increasingly require evidence of supply chain oversight, including screening and periodic evaluation of sub-tier suppliers.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Yes — formal screening, contracts include flow-down clauses", value: "full" },
      { label: "Partial — some screening but no formal flow-down requirements", value: "partial" },
      { label: "Ad hoc evaluation only", value: "developing" },
      { label: "No supply chain oversight", value: "none" },
    ],
  },
  {
    id: "qms_documentation",
    category: "QMS Documentation",
    question: "Does your organisation operate under a documented quality management system?",
    description: "A structured QMS — whether ISO 9001-aligned or equivalent — is a baseline requirement for most government contract environments.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Yes — certified or audit-ready QMS", value: "full" },
      { label: "Yes — documented procedures but not certified", value: "partial" },
      { label: "Some procedures exist informally", value: "developing" },
      { label: "No documented QMS", value: "none" },
    ],
  },
  {
    id: "document_retention",
    category: "Document Retention",
    question: "Does your organisation have a formal document retention policy?",
    description: "Federal contracts typically require retention of records for 3–6 years. A formal policy demonstrates institutional control over information lifecycle.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Yes — formal policy with defined retention periods", value: "full" },
      { label: "Informal practices exist", value: "partial" },
      { label: "Under development", value: "developing" },
      { label: "No retention policy", value: "none" },
    ],
  },
  {
    id: "training_program",
    category: "Training Program",
    question: "Does your organisation conduct compliance-related training?",
    description: "Documented training programs covering ethics, anti-trafficking, cybersecurity awareness, and quality procedures are standard expectations for subcontractors.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Yes — scheduled, documented, and role-based", value: "full" },
      { label: "Occasional training without formal records", value: "partial" },
      { label: "Planning to implement", value: "developing" },
      { label: "No training program", value: "none" },
    ],
  },
  {
    id: "reporting_mechanism",
    category: "Reporting Mechanism",
    question: "Does your organisation provide a confidential reporting mechanism for compliance concerns?",
    description: "Whistleblower and ethics hotlines demonstrate a culture of accountability — a key signal during contractor vetting.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Yes — anonymous channel with documented response procedures", value: "full" },
      { label: "Yes — reporting channel exists but response process is informal", value: "partial" },
      { label: "Open-door policy only", value: "developing" },
      { label: "No mechanism exists", value: "none" },
    ],
  },
];

const scoreMap: Record<string, number> = { full: 100, partial: 60, developing: 30, none: 0 };

function calculateScore(answers: Record<string, string | string[]>): { score: number; findings: { area: string; status: string; recommendation: string }[] } {
  let totalWeight = 0;
  let weightedScore = 0;
  const findings: { area: string; status: string; recommendation: string }[] = [];

  for (const q of questions) {
    const answer = answers[q.id] as string;
    const weight = q.weight || 10;
    totalWeight += weight;
    const raw = scoreMap[answer] || 0;
    weightedScore += (raw / 100) * weight;

    const statusMap: Record<string, string> = {
      full: "Compliant",
      partial: "Partially Compliant",
      developing: "In Development",
      none: "Non-Compliant",
    };

    const recMap: Record<string, string> = {
      full: "Maintain current controls and ensure annual review.",
      partial: "Formalise documentation and establish regular review cycles.",
      developing: "Prioritise completion and assign responsibility for implementation.",
      none: "Establish this control immediately — this represents a critical compliance gap.",
    };

    findings.push({
      area: q.category,
      status: statusMap[answer] || "Unknown",
      recommendation: recMap[answer] || "",
    });
  }

  return { score: Math.round((weightedScore / totalWeight) * 100), findings };
}

function getTier(score: number) {
  if (score >= 71) return { tier: "Positioned for Subcontracting", color: "bg-green-100 text-green-800", desc: "Your organisation demonstrates sufficient governance infrastructure to pursue subcontracting opportunities under U.S. government prime contractors. Continue strengthening documented controls and maintaining audit readiness." };
  if (score >= 40) return { tier: "Conditionally Eligible — Critical Compliance Gaps Identified", color: "bg-yellow-100 text-yellow-800", desc: "Your organisation has foundational governance elements but critical gaps remain that could result in disqualification during prime contractor vetting. Remediation of identified gaps is recommended before pursuing new contract opportunities." };
  return { tier: "Not Eligible — Fundamental Governance Gaps", color: "bg-red-100 text-red-800", desc: "Your organisation lacks the minimum governance infrastructure required for government supply chain participation. A structured compliance buildout is recommended before engaging with prime contractors." };
}

export default function GovConReadiness() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<{ score: number; findings: { area: string; status: string; recommendation: string }[] } | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!isUnlocked) {
      setShowGate(true);
    } else {
      setStarted(true);
    }
  };

  const handleUnlock = (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data);
    setShowGate(false);
    setStarted(true);
  };

  const handleComplete = async (answers: Record<string, string | string[]>) => {
    const result = calculateScore(answers);
    setResults(result);

    // Save to database
    const tierInfo = getTier(result.score);
    if (userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name,
        email: userData.email,
        company: userData.company,
        industry: userData.industry,
        consent: true,
        tool_used: "govcon-readiness",
        score: result.score,
        tier: tierInfo.tier,
        date_completed: new Date().toISOString(),
        answers_json: answers,
      });
    }
  };

  const tierInfo = results ? getTier(results.score) : null;

  return (
    <Layout>
      <SEOHead
        title="GovCon Readiness Score | Government Contractor Compliance Assessment | ElevateQCS"
        description="Evaluate your organisation's readiness to participate in U.S. government supply chains. Assess anti-trafficking policy, QMS documentation, supplier compliance, and more."
        url="https://elevateqcs.com/tools/govcon-readiness"
        keywords={["GovCon readiness assessment", "government contractor compliance checklist", "subcontractor readiness", "FAR compliance assessment"]}
      />

      <ToolEmailGate open={showGate} onUnlock={handleUnlock} />

      <section className="pt-32 pb-8 bg-primary">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Diagnostic Tools
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Diagnostic Assessment</p>
            <h1 className="text-primary-foreground mb-4">GovCon Readiness Score</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              A weighted assessment evaluating governance structures required for U.S. government supply chain participation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {!started && !results && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-elevated p-12">
                <h2 className="mb-4">Ready to Assess Your GovCon Readiness?</h2>
                <p className="text-muted-foreground mb-8">
                  This diagnostic evaluates seven critical governance areas with weighted scoring. Anti-trafficking policy and supplier compliance carry the highest weight, reflecting current federal enforcement priorities.
                </p>
                <Button variant="cta" size="xl" onClick={handleStart}>
                  Start Assessment
                </Button>
                <p className="text-xs text-muted-foreground mt-4">Takes approximately 3–5 minutes</p>
              </div>
            </div>
          )}

          {started && !results && (
            <AssessmentShell
              title="GovCon Readiness Score"
              estimatedTime="3–5 min"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && tierInfo && userData && (
            <ResultsPage
              toolName="GovCon Readiness Score"
              score={results.score}
              tier={tierInfo.tier}
              tierColor={tierInfo.color}
              tierDescription={tierInfo.desc}
              findings={results.findings}
              recommendedActions={[
                "Implement a documented anti-trafficking and forced labour policy aligned with FAR 52.222-50.",
                "Establish a formal document retention policy with defined retention periods.",
                "Conduct supplier due diligence and include compliance flow-down clauses in subcontracts.",
                "Deploy role-based compliance training with documented attendance records.",
                "Establish a confidential reporting mechanism for ethics and compliance concerns.",
              ]}
              relatedInsights={[
                { title: "CTIP & CS3D: Dual Compliance for International Operators", slug: "ctip-cs3d-compliance" },
                { title: "Why EU Subcontractors Lose Millions to the Compliance-Capability Gap", slug: "oversold-under-delivered-compliance-gap" },
                { title: "What U.S. Primes Actually Expect From Subcontractors", slug: "govcon-prime-expectations" },
                { title: "Subcontractor QMS Failures That Cost Contracts", slug: "subcontractor-qms-failures" },
              ]}
              userData={userData}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
