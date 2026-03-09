import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/integrations/supabase/client";

interface Scenario {
  id: string;
  category: string;
  description: string;
  detail: string;
  correctAnswer: "compliant" | "non-compliant";
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    id: "calibration",
    category: "Calibration Control",
    description: "Measurement Equipment Calibration",
    detail: "A digital caliper used for incoming inspection has a calibration sticker showing it was last calibrated 14 months ago. The calibration procedure requires annual calibration. The operator states the tool 'still reads correctly.'",
    correctAnswer: "non-compliant",
    explanation: "Equipment used beyond its calibration due date is non-compliant regardless of perceived accuracy. All measurements taken with this equipment since the expiration date are suspect and may require re-inspection. This is a common DCMA finding.",
  },
  {
    id: "document_control",
    category: "Document Control",
    description: "Work Instruction at the Workstation",
    detail: "A laminated work instruction is posted at a production workstation. The revision is 'Rev C.' The document control system shows the current approved revision is 'Rev D,' released 3 weeks ago. The operator is following the posted (Rev C) instructions.",
    correctAnswer: "non-compliant",
    explanation: "Using an obsolete document revision is a document control non-conformance. The system failed to ensure obsolete copies were replaced. This indicates a gap in the document distribution and retrieval process — a systemic issue that auditors flag as a potential CAR.",
  },
  {
    id: "training_records",
    category: "Training & Competency",
    description: "Training Records for Critical Process",
    detail: "An employee performing soldering on a defense electronics assembly has a signed training record dated 6 months ago. The record includes the trainer's name, employee's signature, and date. There is no evidence of a competency assessment or proficiency test.",
    correctAnswer: "non-compliant",
    explanation: "For critical processes (especially in defense manufacturing), training records must demonstrate competency verification — not just attendance. A signed training record without evidence of assessed proficiency does not meet most quality standard requirements for special processes.",
  },
  {
    id: "receiving_inspection",
    category: "Receiving Inspection",
    description: "Incoming Material Acceptance",
    detail: "A shipment of fasteners arrives with a Certificate of Conformance (CoC) from the supplier. The receiving inspector stamps the CoC 'Accepted,' files it, and releases the material to stock. The purchase order required dimensional verification of a 10% sample.",
    correctAnswer: "non-compliant",
    explanation: "The PO specified dimensional verification of a 10% sample, but only supplier certification was accepted. Receiving inspection must follow the verification method specified in the purchase order. Accepting material based on a CoC when the PO requires dimensional inspection is a non-conformance.",
  },
  {
    id: "ncr_disposition",
    category: "Non-Conformance Control",
    description: "Non-Conforming Material Segregation",
    detail: "A red-tagged component with an open NCR is stored on a dedicated 'Hold' shelf in the stockroom. The shelf is clearly labeled 'NON-CONFORMING — DO NOT USE.' The NCR was opened 5 business days ago and has a root cause analysis in progress.",
    correctAnswer: "compliant",
    explanation: "This demonstrates proper non-conforming material control. The material is segregated, clearly identified, and has an active NCR with investigation in progress. The hold area prevents inadvertent use. This is what auditors want to see — controlled disposition of non-conforming material.",
  },
  {
    id: "supplier_approval",
    category: "Supplier Management",
    description: "Approved Supplier List Currency",
    detail: "The Approved Supplier List (ASL) shows 47 active suppliers. Each entry includes the date of initial qualification. 12 suppliers have not been re-evaluated in over 24 months. The supplier evaluation procedure requires annual performance reviews.",
    correctAnswer: "non-compliant",
    explanation: "Having 25% of your supplier base beyond the required re-evaluation period is a systemic supplier management gap. Auditors check ASL currency as a leading indicator of supply chain oversight. Suppliers operating beyond their evaluation period should be placed on conditional status.",
  },
  {
    id: "management_review",
    category: "Management Review",
    description: "Management Review Records",
    detail: "The most recent management review meeting minutes include attendance records, a review of quality objectives with trend data, analysis of customer complaints, internal audit results, CAPA status, and documented action items with assigned owners and due dates.",
    correctAnswer: "compliant",
    explanation: "This management review meets the key requirements: documented attendance, review of required inputs (quality objectives, audit results, CAPA status, customer feedback), data-driven analysis, and actionable outputs with accountability. This is evidence of an effective management review process.",
  },
  {
    id: "internal_audit",
    category: "Internal Audit",
    description: "Internal Audit Independence",
    detail: "The company's quality manager conducted the internal audit of the quality department's document control process. The audit report found zero non-conformances and noted 'all processes are effective.' No objective evidence is referenced in the report.",
    correctAnswer: "non-compliant",
    explanation: "The quality manager auditing their own department violates auditor independence requirements. The finding of zero non-conformances with no referenced objective evidence suggests the audit lacked depth. This is one of the most common internal audit program deficiencies identified during external audits.",
  },
];

function calculateResults(userAnswers: Record<string, "compliant" | "non-compliant">) {
  let correct = 0;
  const findings = scenarios.map((s) => {
    const userAnswer = userAnswers[s.id];
    const isCorrect = userAnswer === s.correctAnswer;
    if (isCorrect) correct++;
    return {
      area: s.category,
      status: isCorrect ? "Correct" : "Incorrect",
      recommendation: isCorrect
        ? `You correctly identified this as ${s.correctAnswer}. ${s.explanation}`
        : `This was ${s.correctAnswer}. ${s.explanation}`,
    };
  });

  const score = Math.round((correct / scenarios.length) * 100);

  let tier: string;
  let tierColor: string;
  let tierDescription: string;

  if (score >= 88) {
    tier = "Forensic-Ready";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "Your eye for compliance detail matches that of experienced DCMA and Prime auditors. You correctly identified the critical compliance indicators that separate audit-ready operations from high-risk environments.";
  } else if (score >= 63) {
    tier = "Developing Awareness";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = "You demonstrate solid baseline awareness but missed key compliance indicators. The scenarios you missed are among the most common findings in external quality audits. Focus on the areas flagged below.";
  } else {
    tier = "Audit Vulnerability";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = "Your ability to distinguish compliant from non-compliant conditions indicates significant gaps in audit readiness awareness. These are the exact conditions that trigger NCRs and CARs during DCMA surveillance visits and Prime contractor audits.";
  }

  const recommendedActions = [
    "Fatal Flaw: Reviewing audit scenarios in theory without conducting physical walkthroughs of your own facility using these exact criteria.",
    "Fatal Flaw: Assuming your quality team can identify non-conformances when they haven't been trained on current DCMA surveillance standards.",
    "Fatal Flaw: Treating mock audits as optional when external auditors use exactly these conditions to issue NCRs and CARs.",
    "Fatal Flaw: Discussing findings in management review without mapping each one to a specific corrective action with measurable closure criteria.",
    "Fatal Flaw: Believing audit readiness is a periodic event rather than a continuous operational discipline.",
  ];

  return {
    score,
    maxScore: 100,
    tier,
    tierColor,
    tierDescription,
    findings,
    recommendedActions,
    relatedInsights: [
      { title: "Common Patterns in Failed Quality Audits", slug: "audit-failure-patterns" },
      { title: "The Forensic Auditor's View: Supply Chain Transparency", slug: "forensic-auditor-supply-chain" },
      { title: "NCR vs. CAR: Surviving Non-Conformance", slug: "ncr-vs-car" },
      { title: "What Prime Contractors Actually Look For", slug: "subcontractor-audit-review" },
    ],
  };
}

export default function VirtualSpotCheck() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, "compliant" | "non-compliant">>({});
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);

  const scenario = scenarios[currentIndex];
  const progress = ((currentIndex + 1) / scenarios.length) * 100;
  const currentAnswer = answers[scenario?.id];

  const handleAnswer = (answer: "compliant" | "non-compliant") => {
    setAnswers((prev) => ({ ...prev, [scenario.id]: answer }));
  };

  const handleNext = async () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      const r = calculateResults(answers);
      setResults(r);
      if (isUnlocked && userData) {
        try {
          await supabase.from("assessment_leads").insert({
            name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
            consent: true, tool_used: "Virtual Spot-Check Quiz", score: r.score, tier: r.tier,
            date_completed: new Date().toISOString(), answers_json: answers as any,
          });
        } catch {}
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  return (
    <Layout>
      <SEOHead
        title="Virtual Spot-Check Quiz — Forensic Audit Readiness | ElevateQCS"
        description="Test your ability to identify compliant vs. non-compliant conditions in 8 real-world audit scenarios. Get your Forensic Readiness score and compare against DCMA auditor standards."
        url="https://elevateqcs.com/tools/virtual-spot-check"
        keywords={["audit readiness quiz", "DCMA spot check", "quality audit training", "compliance readiness assessment", "forensic audit readiness"]}
      />

      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>

          <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />

          {isUnlocked && !results && scenario && (
            <div className="max-w-2xl mx-auto">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
                    Scenario {currentIndex + 1} of {scenarios.length}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    3–5 minutes
                  </div>
                </div>
                <Progress value={progress} className="h-1.5" />
              </div>

              {/* Category badge */}
              <span className="inline-block text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
                {scenario.category}
              </span>

              <h3 className="!text-xl md:!text-2xl mb-3">{scenario.description}</h3>
              <div className="bg-secondary/30 border border-border rounded-sm p-6 mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">{scenario.detail}</p>
              </div>

              <p className="text-sm font-medium mb-4">Is this condition compliant or non-compliant?</p>

              <div className="space-y-3 mb-10">
                <button
                  onClick={() => handleAnswer("compliant")}
                  className={`w-full flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 text-left ${
                    currentAnswer === "compliant"
                      ? "border-green-500 bg-green-50 dark:bg-green-950/20 shadow-sm"
                      : "border-border hover:border-green-300 hover:bg-secondary/30"
                  }`}
                >
                  <CheckCircle2 className={`w-5 h-5 shrink-0 ${currentAnswer === "compliant" ? "text-green-600" : "text-muted-foreground/40"}`} />
                  <span className="text-sm font-medium">Compliant</span>
                </button>

                <button
                  onClick={() => handleAnswer("non-compliant")}
                  className={`w-full flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 text-left ${
                    currentAnswer === "non-compliant"
                      ? "border-red-500 bg-red-50 dark:bg-red-950/20 shadow-sm"
                      : "border-border hover:border-red-300 hover:bg-secondary/30"
                  }`}
                >
                  <XCircle className={`w-5 h-5 shrink-0 ${currentAnswer === "non-compliant" ? "text-red-600" : "text-muted-foreground/40"}`} />
                  <span className="text-sm font-medium">Non-Compliant</span>
                </button>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                <Button variant="cta" onClick={handleNext} disabled={!currentAnswer}>
                  {currentIndex === scenarios.length - 1 ? "View Results" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {isUnlocked && results && userData && (
            <ResultsPage
              toolName="Virtual Spot-Check Quiz — Forensic Readiness Report"
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
