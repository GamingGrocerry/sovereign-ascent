import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2, XCircle } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/integrations/supabase/client";

interface Scenario {
  id: string;
  category: string;
  situation: string;
  question: string;
  options: { label: string; value: string; correct: boolean; explanation: string }[];
}

const scenarios: Scenario[] = [
  {
    id: "s1",
    category: "Document Retention",
    situation: "During a site visit at an OCONUS facility, you discover that a sub-tier supplier holds workers' passports in a locked safe 'for safekeeping.' The supplier explains it's standard practice in the region and that workers can request their documents at any time.",
    question: "What is your first move?",
    options: [
      { label: "Accept the explanation — it's a cultural norm in this region", value: "accept", correct: false, explanation: "FAR 52.222-50 explicitly prohibits confiscating identity documents regardless of cultural context. Accepting this practice creates direct liability under U.S. anti-trafficking law." },
      { label: "Immediately report to the Contracting Officer and initiate a corrective action", value: "report", correct: true, explanation: "Correct. Under FAR 52.222-50, passport confiscation is a prohibited practice. Immediate reporting to the CO is required, along with initiating a corrective action plan." },
      { label: "Ask the workers privately if they're comfortable with the arrangement", value: "ask", correct: false, explanation: "While worker interviews are valuable, the practice itself is prohibited regardless of worker consent. Workers may also fear retaliation for objecting." },
      { label: "Document the finding and include it in your next quarterly report", value: "document", correct: false, explanation: "Quarterly reporting is too slow for an active trafficking indicator. This finding requires immediate action and CO notification." },
    ],
  },
  {
    id: "s2",
    category: "Recruitment Fees",
    situation: "Your logistics subcontractor uses a recruitment agency in Southeast Asia. Workers report paying $3,000–$5,000 in recruitment fees to secure their positions. The subcontractor states they have no control over third-party agency fees and that this is the cost of doing business in the region.",
    question: "What action must you take under FAR 52.222-50?",
    options: [
      { label: "Require the subcontractor to reimburse recruitment fees to all affected workers", value: "reimburse", correct: true, explanation: "Correct. FAR 52.222-50 prohibits charging recruitment fees. The contractor and subcontractor are jointly responsible for ensuring no fees are charged, even by third-party agencies." },
      { label: "Note the issue and require the subcontractor to change agencies for the next hiring cycle", value: "change", correct: false, explanation: "Changing agencies for future hiring doesn't address the current violation or provide restitution to affected workers." },
      { label: "Accept it — recruitment agency fees are outside the contractor's control", value: "accept", correct: false, explanation: "The FAR explicitly extends responsibility to sub-tier suppliers and their agents. 'Lack of control' is not a valid defense." },
      { label: "Deduct the fees from the subcontractor's next invoice as a penalty", value: "deduct", correct: false, explanation: "Invoice deductions don't constitute worker restitution. The fees must be returned to the workers, not absorbed as a contract penalty." },
    ],
  },
  {
    id: "s3",
    category: "Worker Freedom of Movement",
    situation: "At a LOGCAP base camp, workers from a TCN (Third Country National) labor force are housed in company-provided accommodations. You observe that the compound gate is locked at night 'for safety reasons,' and workers must request permission to leave during non-working hours.",
    question: "Is this practice compliant with CTIP requirements?",
    options: [
      { label: "Yes — security measures for worker safety are standard practice", value: "yes", correct: false, explanation: "Restricting freedom of movement — even under the guise of safety — is a trafficking indicator when workers cannot leave voluntarily during non-working hours." },
      { label: "No — restricting worker movement during non-working hours violates FAR 52.222-50", value: "no", correct: true, explanation: "Correct. Restricting freedom of movement during non-working hours is a trafficking indicator under FAR 52.222-50 and the Trafficking Victims Protection Act." },
      { label: "It depends on the local security situation and base commander approval", value: "depends", correct: false, explanation: "While security considerations are valid, the restriction must not prevent workers from leaving voluntarily. Alternative security measures must be implemented." },
      { label: "It's acceptable if workers signed a housing agreement acknowledging the policy", value: "signed", correct: false, explanation: "Signed agreements do not override federal anti-trafficking requirements. Coerced or uninformed consent is not valid consent." },
    ],
  },
  {
    id: "s4",
    category: "Wage Practices",
    situation: "A subcontractor operating a dining facility at an overseas installation pays TCN workers their full contracted wage, but deducts housing, meals, and transportation costs that amount to 60% of their salary. Workers take home approximately $200/month.",
    question: "Does this practice constitute a CTIP violation?",
    options: [
      { label: "No — workers agreed to the deductions in their employment contract", value: "no", correct: false, explanation: "Excessive deductions that reduce take-home pay to below subsistence levels constitute debt bondage indicators under FAR 52.222-50, regardless of contractual agreements." },
      { label: "Yes — excessive deductions creating debt bondage conditions violate CTIP requirements", value: "yes", correct: true, explanation: "Correct. Deductions that reduce wages to subsistence levels or create inescapable debt conditions are trafficking indicators. The FAR prohibits practices that create debt bondage." },
      { label: "Only if the deductions exceed local market rates for housing and meals", value: "market", correct: false, explanation: "While market rate comparison is relevant, the fundamental issue is whether deductions create conditions of involuntary servitude or debt bondage — regardless of local market rates." },
      { label: "It depends on the host nation's minimum wage laws", value: "hostlaw", correct: false, explanation: "U.S. anti-trafficking requirements apply regardless of host nation labor laws. FAR 52.222-50 establishes a higher standard than most local labor regulations." },
    ],
  },
  {
    id: "s5",
    category: "Compliance Plan",
    situation: "Your company just won a LOGCAP task order with 15 subcontractors across 3 countries. The Contracting Officer requests your CTIP Compliance Plan within 30 days. Your current plan is a 2-page policy statement that references FAR 52.222-50.",
    question: "Is your current plan sufficient?",
    options: [
      { label: "Yes — referencing the FAR clause demonstrates compliance awareness", value: "yes", correct: false, explanation: "A policy statement alone does not constitute a Compliance Plan. FAR 52.222-50 requires specific program elements including training, monitoring, and reporting mechanisms." },
      { label: "No — a CTIP Compliance Plan requires training programs, monitoring procedures, reporting mechanisms, and sub-tier flow-down provisions", value: "no", correct: true, explanation: "Correct. A compliant CTIP plan must include: employee/subcontractor awareness training, a reporting/complaint mechanism, a monitoring and enforcement plan, sub-tier flow-down provisions, and designated compliance personnel." },
      { label: "It depends on the dollar value of the task order", value: "depends", correct: false, explanation: "While enhanced requirements apply above certain thresholds, the basic CTIP compliance plan requirements apply to all contracts containing FAR 52.222-50." },
      { label: "It's sufficient if supplemented with annual employee training", value: "training", correct: false, explanation: "Training alone doesn't create a complete compliance program. Monitoring, enforcement, reporting mechanisms, and sub-tier oversight are all required elements." },
    ],
  },
  {
    id: "s6",
    category: "Supply Chain Monitoring",
    situation: "During a supply chain audit, you discover that a third-tier cleaning services provider in the Middle East uses a labor broker who charges workers a 'placement fee' and requires workers to sign contracts in a language they do not speak.",
    question: "What is your obligation as the prime contractor?",
    options: [
      { label: "None — third-tier suppliers are outside your contractual responsibility", value: "none", correct: false, explanation: "FAR 52.222-50 extends anti-trafficking requirements to the entire supply chain, including sub-tier suppliers. Prime contractors have due diligence obligations throughout." },
      { label: "Full investigation, remediation, and CO notification — CTIP obligations extend to the entire supply chain", value: "full", correct: true, explanation: "Correct. Prime contractors are responsible for ensuring CTIP compliance throughout their supply chain. Both the placement fee and the contract language issue are violations requiring immediate investigation and CO notification." },
      { label: "Notify your direct subcontractor and let them handle it", value: "notify", correct: false, explanation: "While your direct subcontractor should be involved, the prime contractor retains ultimate responsibility for supply chain compliance and cannot delegate CO notification obligations." },
      { label: "Terminate the third-tier provider and replace them", value: "terminate", correct: false, explanation: "Termination without investigation and remediation doesn't address the underlying violation. The CO must be notified, and affected workers may require restitution." },
    ],
  },
];

function StressTestShell({ onComplete }: { onComplete: (answers: Record<string, { selected: string; correct: boolean }>) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selected: string; correct: boolean }>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const scenario = scenarios[currentIndex];
  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  const handleSelect = (value: string) => {
    if (showFeedback) return;
    setSelectedOption(value);
  };

  const handleConfirm = () => {
    if (!selectedOption) return;
    const option = scenario.options.find((o) => o.value === selectedOption);
    if (!option) return;
    setAnswers((prev) => ({ ...prev, [scenario.id]: { selected: selectedOption, correct: option.correct } }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    } else {
      onComplete(answers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            Scenario {currentIndex + 1} of {scenarios.length}
          </p>
        </div>
        <div className="w-full bg-secondary/50 rounded-full h-1.5">
          <div className="bg-accent h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <span className="inline-block text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">
        {scenario.category}
      </span>

      {/* Situation */}
      <div className="card-elevated p-6 mb-6 border-l-4 border-accent">
        <p className="text-sm leading-relaxed text-foreground/90">{scenario.situation}</p>
      </div>

      <h3 className="!text-lg mb-6">{scenario.question}</h3>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {scenario.options.map((opt) => {
          const isSelected = selectedOption === opt.value;
          const isAnswered = showFeedback;
          let borderClass = "border-border hover:border-accent/30";
          if (isSelected && !isAnswered) borderClass = "border-accent bg-accent/5";
          if (isAnswered && opt.correct) borderClass = "border-green-500 bg-green-50";
          if (isAnswered && isSelected && !opt.correct) borderClass = "border-destructive bg-destructive/5";

          return (
            <button
              key={opt.value}
              onClick={() => handleSelect(opt.value)}
              disabled={isAnswered}
              className={`w-full text-left flex items-start gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 ${borderClass} ${isAnswered ? "cursor-default" : ""}`}
            >
              <div className="shrink-0 mt-0.5">
                {isAnswered && opt.correct && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                {isAnswered && isSelected && !opt.correct && <XCircle className="w-5 h-5 text-destructive" />}
                {!isAnswered && (
                  <div className={`w-5 h-5 rounded-full border-2 ${isSelected ? "border-accent bg-accent" : "border-muted-foreground/30"}`} />
                )}
              </div>
              <div className="flex-1">
                <span className="text-sm">{opt.label}</span>
                {isAnswered && (isSelected || opt.correct) && (
                  <p className="text-xs text-muted-foreground mt-2">{opt.explanation}</p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div />
        {!showFeedback ? (
          <Button variant="cta" onClick={handleConfirm} disabled={!selectedOption}>
            Submit Answer <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button variant="cta" onClick={handleNext}>
            {currentIndex === scenarios.length - 1 ? "View Results" : "Next Scenario"} <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default function LaborEthicsStressTest() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [results, setResults] = useState<ReturnType<typeof calculateResults> | null>(null);

  const calculateResults = (answers: Record<string, { selected: string; correct: boolean }>) => {
    const total = scenarios.length;
    const correct = Object.values(answers).filter((a) => a.correct).length;
    const pct = Math.round((correct / total) * 100);

    let tier: string, tierColor: string, tierDescription: string;

    if (pct >= 85) {
      tier = "PASS — Strong CTIP Awareness";
      tierColor = "bg-green-100 text-green-800";
      tierDescription = "Your responses demonstrate a strong understanding of FAR 52.222-50 requirements and trafficking indicators. Your team appears well-positioned to identify and respond to CTIP violations in the field.";
    } else if (pct >= 60) {
      tier = "CONDITIONAL — Gaps in Field Application";
      tierColor = "bg-yellow-100 text-yellow-800";
      tierDescription = "You understand the basics of CTIP compliance but missed key application scenarios. These gaps could result in missed violations during field operations. Targeted training on specific indicators is recommended.";
    } else {
      tier = "FAIL — Significant CTIP Compliance Risk";
      tierColor = "bg-red-100 text-red-800";
      tierDescription = "Your responses indicate significant gaps in CTIP awareness that could expose your organisation to enforcement action under FAR 52.222-50 and the Trafficking Victims Protection Act. Immediate comprehensive training is required.";
    }

    const findings = scenarios.map((s) => {
      const answer = answers[s.id];
      return {
        area: s.category,
        status: answer?.correct ? "Correct" : "Incorrect",
        recommendation: answer?.correct
          ? "Maintains compliance — continue reinforcing this area through regular training"
          : `Review FAR 52.222-50 requirements for ${s.category.toLowerCase()} scenarios`,
      };
    });

    const recommendedActions = [
      "Conduct annual CTIP awareness training for all employees and subcontractors",
      "Implement a confidential reporting mechanism for trafficking indicators",
      "Develop a CTIP Compliance Plan that meets all FAR 52.222-50 program elements",
      "Establish supply chain monitoring protocols for sub-tier labor practices",
      "Download the ElevateQCS CTIP Response Framework for your compliance library",
    ];

    if (pct < 60) {
      recommendedActions.unshift("URGENT: Schedule comprehensive CTIP training before your next Government surveillance review");
    }

    return {
      score: correct,
      maxScore: total,
      tier,
      tierColor,
      tierDescription,
      findings,
      recommendedActions,
      relatedInsights: [
        { title: "Beyond Recruitment: The Operational Reality of CTIP", slug: "ctip-beyond-recruitment" },
        { title: "CTIP Enforcement Trends: What 2025 Means for 2026", slug: "ctip-enforcement-trends" },
        { title: "Common CTIP Mistakes Among Logistics Providers", slug: "logistics-ctip-compliance-mistakes" },
        { title: "Your Business May Already Be Non-Compliant: CTIP vs. EU CS3D", slug: "ctip-cs3d-compliance" },
      ],
    };
  };

  const handleComplete = async (answers: Record<string, { selected: string; correct: boolean }>) => {
    const r = calculateResults(answers);
    setResults(r);
    try {
      await supabase.from("assessment_leads").update({
        score: r.score,
        tier: r.tier,
        tool_used: "Labor Ethics Stress Test",
        date_completed: new Date().toISOString(),
        answers_json: answers as any,
      }).eq("email", userData?.email ?? "");
    } catch {}
  };

  return (
    <Layout>
      <SEOHead
        title="Labor Ethics Stress Test — CTIP Compliance Assessment | ElevateQCS"
        description="Test your team's ability to identify trafficking indicators and respond to CTIP violations under FAR 52.222-50. Branching scenario assessment with pass/fail grading."
        url="https://elevateqcs.com/tools/labor-ethics-stress-test"
        keywords={["CTIP compliance test", "labor ethics assessment", "FAR 52.222-50 training", "anti-trafficking compliance", "labor ethics stress test"]}
      />
      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />
          {isUnlocked && !results && (
            <div>
              <div className="max-w-2xl mx-auto mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                    <ShieldAlert className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h1 className="!text-2xl md:!text-3xl">Labor Ethics Stress Test</h1>
                    <p className="text-xs text-muted-foreground">6 scenarios · ~4 minutes · Pass/Fail grading</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  You'll face 6 real-world scenarios involving potential CTIP violations. For each scenario, select the response that best aligns with FAR 52.222-50 requirements. You'll receive immediate feedback after each answer.
                </p>
              </div>
              <StressTestShell onComplete={handleComplete} />
            </div>
          )}
          {isUnlocked && results && userData && (
            <ResultsPage
              toolName="Labor Ethics Stress Test"
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
