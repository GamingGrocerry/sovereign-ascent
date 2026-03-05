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
    id: "process_docs",
    category: "Process Documentation",
    question: "How would you describe your organisation's process documentation?",
    description: "Documented procedures, work instructions, and standard operating procedures form the foundation of a quality management system.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Comprehensive — SOPs, work instructions, and process maps are documented, version-controlled, and regularly reviewed", value: "audit_ready" },
      { label: "Functional — key processes are documented but not all are formalised or consistently maintained", value: "operational" },
      { label: "Emerging — some procedures exist but documentation is incomplete", value: "developing" },
      { label: "Minimal — operations rely on tribal knowledge with little documentation", value: "basic" },
    ],
  },
  {
    id: "corrective_actions",
    category: "Corrective & Preventive Actions",
    question: "How does your organisation handle corrective and preventive actions (CAPA)?",
    description: "A structured CAPA process is essential for identifying root causes and preventing recurrence of nonconformities.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Formal CAPA system with root cause analysis, tracking, and effectiveness verification", value: "audit_ready" },
      { label: "CAPAs are initiated for major issues but tracking is inconsistent", value: "operational" },
      { label: "Problems are addressed reactively without formal root cause analysis", value: "developing" },
      { label: "No structured approach to corrective actions", value: "basic" },
    ],
  },
  {
    id: "internal_audits",
    category: "Internal Audits",
    question: "Does your organisation conduct internal audits of its quality management system?",
    type: "radio",
    weight: 20,
    options: [
      { label: "Yes — scheduled audit programme with trained auditors and documented findings", value: "audit_ready" },
      { label: "Periodic reviews occur but without a formal audit schedule or methodology", value: "operational" },
      { label: "Informal reviews are conducted occasionally", value: "developing" },
      { label: "No internal audit programme", value: "basic" },
    ],
  },
  {
    id: "training",
    category: "Training & Competency",
    question: "How does your organisation manage employee training and competency?",
    type: "radio",
    weight: 15,
    options: [
      { label: "Structured training programme with competency matrices, records, and effectiveness evaluation", value: "audit_ready" },
      { label: "Training is provided but records and competency tracking are incomplete", value: "operational" },
      { label: "On-the-job training only, with limited documentation", value: "developing" },
      { label: "No formal training programme", value: "basic" },
    ],
  },
  {
    id: "supplier_mgmt",
    category: "Supplier Management",
    question: "How does your organisation manage and evaluate suppliers?",
    type: "radio",
    weight: 15,
    options: [
      { label: "Approved supplier list with qualification criteria, periodic evaluation, and performance monitoring", value: "audit_ready" },
      { label: "Key suppliers are evaluated but no formal approved supplier list exists", value: "operational" },
      { label: "Suppliers are selected based on price and availability without formal evaluation", value: "developing" },
      { label: "No supplier management process", value: "basic" },
    ],
  },
  {
    id: "management_review",
    category: "Management Review",
    question: "Does your organisation conduct management reviews of the quality system?",
    description: "Management review ensures leadership engagement with quality performance, trends, and improvement opportunities.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Scheduled management reviews with defined agenda, minutes, and action items", value: "audit_ready" },
      { label: "Leadership discusses quality occasionally but without a formal review process", value: "operational" },
      { label: "Quality is discussed only when problems arise", value: "developing" },
      { label: "No management involvement in quality oversight", value: "basic" },
    ],
  },
];

const maturityScoreMap: Record<string, number> = { audit_ready: 100, operational: 70, developing: 40, basic: 10 };
const maturityLabelMap: Record<string, string> = { audit_ready: "Audit-Ready", operational: "Operational", developing: "Developing", basic: "Basic" };

function calculateQMS(answers: Record<string, string | string[]>) {
  let totalWeight = 0;
  let weightedScore = 0;
  const findings: { area: string; status: string; recommendation: string }[] = [];

  for (const q of questions) {
    const answer = answers[q.id] as string;
    const weight = q.weight || 10;
    totalWeight += weight;
    const raw = maturityScoreMap[answer] || 0;
    weightedScore += (raw / 100) * weight;

    const recMap: Record<string, string> = {
      audit_ready: "Maintain current maturity. Ensure continuous improvement cycles are documented.",
      operational: "Formalise and standardise existing practices. Close documentation gaps.",
      developing: "Establish structured processes with assigned ownership and documented procedures.",
      basic: "Critical gap — implement foundational controls immediately to reduce contract risk.",
    };

    findings.push({
      area: q.category,
      status: maturityLabelMap[answer] || "Unknown",
      recommendation: recMap[answer] || "",
    });
  }

  const score = Math.round((weightedScore / totalWeight) * 100);
  return { score, findings };
}

function getQMSTier(score: number) {
  if (score >= 80) return { tier: "Audit-Ready", color: "bg-green-100 text-green-800", desc: "Your quality management system demonstrates maturity consistent with certification readiness. Maintain documented controls and continue scheduled internal audits." };
  if (score >= 60) return { tier: "Operational — Enhancement Required", color: "bg-yellow-100 text-yellow-800", desc: "Your QMS has functional elements but gaps in formalisation, documentation, or consistency may create risk during audits or contractor vetting. Targeted improvements are recommended." };
  if (score >= 35) return { tier: "Developing — Significant Gaps", color: "bg-orange-100 text-orange-800", desc: "Your organisation has emerging quality practices but lacks the structured documentation and processes required for most regulated contract environments." };
  return { tier: "Basic — Fundamental QMS Buildout Required", color: "bg-red-100 text-red-800", desc: "Your organisation may face difficulty qualifying as a subcontractor due to lack of documented operational controls. A comprehensive QMS buildout is recommended." };
}

export default function QMSGapAnalysis() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<{ score: number; findings: { area: string; status: string; recommendation: string }[] } | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!isUnlocked) setShowGate(true);
    else setStarted(true);
  };

  const handleUnlock = (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data);
    setShowGate(false);
    setStarted(true);
  };

  const handleComplete = async (answers: Record<string, string | string[]>) => {
    const result = calculateQMS(answers);
    setResults(result);

    const tierInfo = getQMSTier(result.score);
    if (userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name,
        email: userData.email,
        company: userData.company,
        industry: userData.industry,
        consent: true,
        tool_used: "qms-gap-analysis",
        score: result.score,
        tier: tierInfo.tier,
        date_completed: new Date().toISOString(),
        answers_json: answers,
      });
    }
  };

  const tierInfo = results ? getQMSTier(results.score) : null;

  return (
    <Layout>
      <SEOHead
        title="QMS Gap Analysis | Quality Management System Maturity Assessment | ElevateQCS"
        description="Assess your quality management system maturity across process documentation, corrective actions, internal audits, training, and supplier management. Identify contract risk implications."
        url="https://elevateqcs.com/tools/qms-gap-analysis"
        keywords={["QMS gap analysis", "quality management system assessment", "QMS maturity", "ISO 9001 readiness", "quality audit readiness"]}
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
            <h1 className="text-primary-foreground mb-4">QMS Gap Analysis</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              Evaluate your quality management system maturity and identify contract risk implications across six critical domains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {!started && !results && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-elevated p-12">
                <h2 className="mb-4">Assess Your QMS Maturity</h2>
                <p className="text-muted-foreground mb-8">
                  This diagnostic evaluates six core domains of quality management maturity: process documentation, corrective actions, internal audits, training, supplier management, and management review.
                </p>
                <Button variant="cta" size="xl" onClick={handleStart}>Start Assessment</Button>
                <p className="text-xs text-muted-foreground mt-4">Takes approximately 3–5 minutes</p>
              </div>
            </div>
          )}

          {started && !results && (
            <AssessmentShell
              title="QMS Gap Analysis"
              estimatedTime="3–5 min"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && tierInfo && userData && (
            <ResultsPage
              toolName="QMS Gap Analysis"
              score={results.score}
              tier={tierInfo.tier}
              tierColor={tierInfo.color}
              tierDescription={tierInfo.desc}
              findings={results.findings}
              recommendedActions={[
                "Establish documented standard operating procedures for all critical processes.",
                "Implement a formal CAPA system with root cause analysis and effectiveness tracking.",
                "Schedule and resource an internal audit programme with trained auditors.",
                "Build competency matrices linking roles to required training and qualifications.",
                "Create an approved supplier list with qualification criteria and periodic review cycles.",
                "Initiate scheduled management reviews with defined agenda and documented outcomes.",
              ]}
              relatedInsights={[
                { title: "Building a QMS That Scales With Your Growth", slug: "qms-scalability" },
                { title: "QMS Architecture for Early-Stage Regulated Companies", slug: "qms-early-stage" },
                { title: "ISO 9001 as an Operational Maturity Engine", slug: "iso9001-operational-maturity" },
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
