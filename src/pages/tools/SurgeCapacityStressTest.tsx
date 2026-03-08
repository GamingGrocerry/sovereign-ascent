import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { AssessmentShell, type AssessmentQuestion } from "@/components/tools/AssessmentShell";
import { supabase } from "@/integrations/supabase/client";

const questions: AssessmentQuestion[] = [
  {
    id: "labor_pool",
    category: "Labor Readiness",
    question: "What is the current status of your deployable labor pool for OCONUS operations?",
    description: "LOGCAP task orders typically require full staffing within 96 hours. Pre-screened, cleared, and medically qualified personnel must be on standby.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Fully pre-screened roster with medical clearances, security clearances, and valid travel documents", value: "full" },
      { label: "Partial roster — some personnel pre-screened but gaps in clearances or medical", value: "partial" },
      { label: "Recruiting pipeline exists but no standby roster", value: "developing" },
      { label: "No pre-positioned labor pool — hiring begins at task order award", value: "none" },
    ],
  },
  {
    id: "tcn_visa",
    category: "Visa & Immigration",
    question: "Can you process Third Country National (TCN) visas and work permits within 72 hours?",
    description: "TCN visa processing is the #1 bottleneck in LOGCAP mobilization. Delays here cascade into every other deployment milestone.",
    type: "radio",
    weight: 20,
    options: [
      { label: "Yes — established relationships with embassies, pre-approved visa pipelines in key regions", value: "full" },
      { label: "Partially — some visa channels established but processing times exceed 72 hours", value: "partial" },
      { label: "We rely on subcontractors or agencies to handle visa processing", value: "developing" },
      { label: "No established visa processing capability for TCNs", value: "none" },
    ],
  },
  {
    id: "equipment_fleet",
    category: "Equipment & Logistics",
    question: "Do you maintain pre-positioned equipment or have rapid-access lease agreements for your operational specialty?",
    description: "Equipment mobilization — from vehicles to generators to specialized tools — must align with the deployment timeline, not procurement lead times.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Pre-positioned inventory at regional staging locations with maintenance records current", value: "full" },
      { label: "Rapid-access lease agreements with guaranteed 48-hour delivery", value: "partial" },
      { label: "Standard procurement channels — 1-2 week lead times", value: "developing" },
      { label: "Equipment sourced ad hoc at task order award", value: "none" },
    ],
  },
  {
    id: "logistics_partners",
    category: "Logistics Network",
    question: "Do you have pre-qualified logistics partners with current Letters of Authorization (LOAs) for theater operations?",
    description: "Logistics partners must hold valid theater access credentials. Onboarding new logistics providers post-award adds weeks to mobilization.",
    type: "radio",
    weight: 15,
    options: [
      { label: "Pre-qualified logistics partners with active LOAs and theater access credentials", value: "full" },
      { label: "Logistics partners identified but LOAs require renewal or are pending", value: "partial" },
      { label: "Relationships exist but no formal pre-qualification or LOA process", value: "developing" },
      { label: "No established logistics partners for OCONUS operations", value: "none" },
    ],
  },
  {
    id: "qms_deployment",
    category: "QMS Mobilization",
    question: "Can your Quality Management System be operational at a new site within 96 hours?",
    description: "DCMA and Prime contractors expect documented quality procedures, inspection records, and NCR processes from Day 1 — not Day 30.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Deployable QMS package with pre-built templates, checklists, and digital tools ready for site activation", value: "full" },
      { label: "QMS documentation exists but requires site-specific customization (2-5 days)", value: "partial" },
      { label: "QMS procedures exist at HQ but have not been packaged for rapid deployment", value: "developing" },
      { label: "No portable QMS — procedures are rebuilt at each new site", value: "none" },
    ],
  },
  {
    id: "safety_readiness",
    category: "Safety & Medical",
    question: "Do you have a deployable Site Safety and Health Plan (SSHP) and medical support capability?",
    description: "OSHA-equivalent safety standards apply at OCONUS sites. Medical evacuation plans and on-site medical support are contract requirements, not optional.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Deployable SSHP with site-specific templates, MEDEVAC agreements, and trained SSHO on standby", value: "full" },
      { label: "Generic SSHP exists — requires 3-5 days for site adaptation", value: "partial" },
      { label: "Safety procedures are informal — SSHP would be developed post-award", value: "developing" },
      { label: "No deployable safety or medical capability", value: "none" },
    ],
  },
  {
    id: "comms_infrastructure",
    category: "Communications",
    question: "Can you establish secure communications and reporting infrastructure at an austere site within 48 hours?",
    description: "Daily reporting, incident logging, and secure communications with the Prime and COR begin immediately upon site activation.",
    type: "radio",
    weight: 10,
    options: [
      { label: "Satellite communications, mobile reporting systems, and IT security protocols pre-configured for rapid deployment", value: "full" },
      { label: "Basic communications capability — satellite phones and email, but no integrated reporting system", value: "partial" },
      { label: "Rely on Prime-provided communications infrastructure", value: "developing" },
      { label: "No independent communications capability for austere environments", value: "none" },
    ],
  },
];

const scoreMap: Record<string, number> = { full: 100, partial: 60, developing: 30, none: 0 };

function calculateScore(answers: Record<string, string | string[]>) {
  let totalWeight = 0;
  let weightedScore = 0;
  const findings: { area: string; status: string; recommendation: string }[] = [];
  let worstBottleneck = { area: "", score: 101 };

  for (const q of questions) {
    const answer = answers[q.id] as string;
    const weight = q.weight || 10;
    totalWeight += weight;
    const raw = scoreMap[answer] || 0;
    weightedScore += (raw / 100) * weight;

    if (raw < worstBottleneck.score) {
      worstBottleneck = { area: q.category, score: raw };
    }

    const statusMap: Record<string, string> = {
      full: "Deployment Ready",
      partial: "Conditionally Ready",
      developing: "Not Ready — Requires Build-Out",
      none: "Critical Gap — Contract Risk",
    };

    const recMap: Record<string, string> = {
      full: "Maintain readiness posture and ensure periodic validation exercises.",
      partial: "Close remaining gaps to achieve full deployment readiness within 30 days.",
      developing: "Prioritise this area — it will cause mobilization delays if unaddressed.",
      none: "URGENT: This gap will prevent 96-hour mobilization compliance. Immediate action required.",
    };

    findings.push({
      area: q.category,
      status: statusMap[answer] || "Unknown",
      recommendation: recMap[answer] || "",
    });
  }

  const score = Math.round((weightedScore / totalWeight) * 100);
  return { score, findings, bottleneck: worstBottleneck.area };
}

function getTier(score: number) {
  if (score >= 75) return { tier: "Mobilization Ready", color: "bg-green-100 text-green-800", desc: "Your organisation demonstrates sufficient pre-positioned capability to meet 96-hour LOGCAP deployment requirements. Continue validating through tabletop mobilization exercises." };
  if (score >= 45) return { tier: "Conditionally Ready — Bottlenecks Identified", color: "bg-yellow-100 text-yellow-800", desc: "Your organisation has foundational deployment capability but specific bottlenecks would delay 96-hour mobilization. Targeted remediation of identified gaps is required before pursuing new task orders." };
  return { tier: "Not Mobilization Ready — High Contract Risk", color: "bg-red-100 text-red-800", desc: "Your organisation lacks the pre-positioned infrastructure required for rapid LOGCAP deployment. Attempting mobilization in the current state would likely result in contract breach and documented deficiencies from Day 1." };
}

export default function SurgeCapacityStressTest() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateScore> | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!isUnlocked) { setShowGate(true); } else { setStarted(true); }
  };

  const handleUnlock = (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data); setShowGate(false); setStarted(true);
  };

  const handleComplete = async (answers: Record<string, string | string[]>) => {
    const result = calculateScore(answers);
    setResults(result);
    const tierInfo = getTier(result.score);
    if (userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
        consent: true, tool_used: "surge-capacity-stress-test", score: result.score, tier: tierInfo.tier,
        date_completed: new Date().toISOString(), answers_json: answers,
      });
    }
  };

  const tierInfo = results ? getTier(results.score) : null;

  return (
    <Layout>
      <SEOHead
        title="LOGCAP Surge Capacity Stress Test | 96-Hour Mobilization Readiness | ElevateQCS"
        description="Assess whether your organisation can meet the mandatory 96-hour LOGCAP deployment window. Identify mobilization bottlenecks in labor, equipment, logistics, and QMS readiness."
        url="https://elevateqcs.com/tools/surge-capacity-stress-test"
        keywords={["LOGCAP readiness assessment", "96-hour mobilization", "surge capacity test", "OCONUS deployment readiness", "military logistics subcontractor"]}
      />
      <ToolEmailGate open={showGate} onUnlock={handleUnlock} />
      <section className="pt-32 pb-8 bg-primary">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Tools
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Surge Capacity Diagnostic</p>
            <h1 className="text-primary-foreground mb-4">LOGCAP VI Surge Capacity Stress Test</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              A branching diagnostic that evaluates whether your pre-positioned assets — labor, equipment, logistics, and quality infrastructure — can meet the mandatory 96-hour deployment window.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {!started && !results && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-elevated p-12">
                <h2 className="mb-4">Can You Deploy in 96 Hours?</h2>
                <p className="text-muted-foreground mb-8">
                  This diagnostic evaluates seven critical mobilization areas: labor readiness, TCN visa processing, equipment availability, logistics partnerships, QMS deployment capability, safety infrastructure, and communications. Each area is weighted by its impact on the 96-hour timeline.
                </p>
                <Button variant="cta" size="xl" onClick={handleStart}>
                  Start Stress Test
                </Button>
                <p className="text-xs text-muted-foreground mt-4">Takes approximately 3–5 minutes</p>
              </div>
            </div>
          )}

          {started && !results && (
            <AssessmentShell title="Surge Capacity Stress Test" estimatedTime="3–5 min" questions={questions} onComplete={handleComplete} />
          )}

          {results && tierInfo && userData && (
            <ResultsPage
              toolName="LOGCAP VI Surge Capacity Stress Test"
              score={results.score}
              tier={tierInfo.tier}
              tierColor={tierInfo.color}
              tierDescription={`${tierInfo.desc} Your primary mobilization bottleneck: ${results.bottleneck}.`}
              findings={results.findings}
              roadmap={[
                { phase: "Immediate (0–30 days)", description: "Address critical gaps in the identified bottleneck area. Establish pre-screened personnel rosters and validate visa processing timelines." },
                { phase: "Short-Term (30–90 days)", description: "Pre-position equipment at regional staging locations. Formalize logistics partner agreements with guaranteed response times." },
                { phase: "Operational (90–180 days)", description: "Conduct tabletop mobilization exercises simulating 96-hour deployment scenarios. Validate QMS deployment packages at test sites." },
              ]}
              recommendedActions={[
                `Immediately address your primary bottleneck: ${results.bottleneck}`,
                "Build a pre-screened personnel roster with current medical and security clearances",
                "Establish TCN visa processing pipelines with embassy-level relationships in key deployment regions",
                "Pre-position deployable QMS packages with site-activation checklists",
                "Conduct quarterly tabletop mobilization exercises to validate 96-hour readiness",
              ]}
              relatedInsights={[
                { title: "The 96-Hour Sprint: Why Subcontractors Fail the Readiness Test", slug: "96-hour-sprint" },
                { title: "OCONUS Sustainment: Maintaining Quality in Austere Environments", slug: "oconus-sustainment" },
                { title: "ISO to LOGCAP: Bridging the Civilian–Military Quality Divide", slug: "iso-logcap-bridge" },
                { title: "Site Security and Perimeter Control Under LOGCAP", slug: "site-security-perimeter" },
              ]}
              userData={userData}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
