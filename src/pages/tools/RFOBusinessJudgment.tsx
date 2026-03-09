import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
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
    id: "bj1",
    category: "Sole Source Justification",
    situation: "Your procurement team needs a specialized software license that only one vendor provides. Under the old FAR, you would simply cite FAR 6.302-1 (Only One Responsible Source). Under the 2026 RFO, the Contracting Officer asks you to provide a 'Business Judgment Memorandum' explaining why this sole-source approach represents the best value to the Government.",
    question: "What should your Business Judgment Memorandum include?",
    options: [
      { label: "A statement that only one vendor exists, referencing the old FAR 6.302-1 citation", value: "old_cite", correct: false, explanation: "Under the RFO, simply citing the old regulation is insufficient. The FAR now expects documented reasoning, not regulatory citations for non-statutory requirements." },
      { label: "A market research summary, cost-benefit analysis of alternatives considered, risk assessment of delay, and a documented rationale for why this approach serves the Government's interest", value: "full_bj", correct: true, explanation: "Correct. The RFO's principle-based approach requires 'Defensible Logic' — documented evidence that you considered alternatives, assessed risks, and arrived at a reasoned conclusion." },
      { label: "An email from the vendor confirming they are the sole provider", value: "vendor_email", correct: false, explanation: "Vendor self-certification is not independent market research. Business Judgment requires contractor-driven analysis, not vendor claims." },
      { label: "A price comparison showing the vendor's pricing is reasonable", value: "price_only", correct: false, explanation: "Price reasonableness is one element, but Business Judgment requires a holistic analysis including alternatives considered, risk assessment, and documented reasoning." },
    ],
  },
  {
    id: "bj2",
    category: "Subcontractor Selection",
    situation: "You have two qualified subcontractors for a task order. Subcontractor A is 15% cheaper but has no government contracting experience. Subcontractor B is more expensive but has a proven DCMA performance record and existing security clearances. The Practitioner Album guidance suggests 'best value' considerations, but the FAR itself only requires 'fair and reasonable' pricing.",
    question: "How do you document your selection under the RFO framework?",
    options: [
      { label: "Select Subcontractor A — lowest price wins under 'fair and reasonable' requirements", value: "lowest", correct: false, explanation: "The RFO shifts away from pure price competition. 'Fair and reasonable' is the floor, not the ceiling. Business Judgment requires documenting why your selection represents the best value." },
      { label: "Create a Business Judgment Record that documents both options, evaluates past performance risk, clearance timeline costs, and demonstrates why the total cost of ownership favors Subcontractor B despite higher unit pricing", value: "documented_bj", correct: true, explanation: "Correct. The RFO framework rewards documented reasoning. Showing that you considered total cost of ownership — including risk of clearance delays and performance uncertainty — demonstrates defensible Business Judgment." },
      { label: "Select Subcontractor B and note their past performance in an email to the CO", value: "informal", correct: false, explanation: "Informal email communication is not a Business Judgment Record. The RFO requires structured documentation that can withstand audit scrutiny." },
      { label: "Request a waiver from the Contracting Officer to avoid competitive evaluation", value: "waiver", correct: false, explanation: "The RFO actually gives you MORE flexibility — you don't need a waiver. You need documented reasoning that demonstrates sound Business Judgment." },
    ],
  },
  {
    id: "bj3",
    category: "Commercial Item Determination",
    situation: "Your company wants to purchase an off-the-shelf drone system for a government contract. The manufacturer sells it commercially, but you need to add government-specific encryption and hardened communications. Under the old FAR Part 12, this might qualify as a 'commercial item with minor modifications.' Under the RFO, the Practitioner Album guidance has been removed from the FAR itself.",
    question: "How do you justify the commercial item determination?",
    options: [
      { label: "Cite the manufacturer's commercial sales data and apply FAR Part 12 procedures", value: "old_part12", correct: false, explanation: "While commercial sales data is relevant, the RFO requires you to document WHY you believe the modifications don't change the fundamental commercial character — the reasoning, not just the citation." },
      { label: "Document the base commercial product's market presence, catalog the specific modifications required, analyze whether modifications exceed the 'commercial character' threshold, and create a Business Judgment Record explaining your determination", value: "full_analysis", correct: true, explanation: "Correct. Under the RFO, commercial item determinations require documented analysis — not just a checkbox. Your Business Judgment Record must show the reasoning chain from commercial product to modified item." },
      { label: "Ask the Contracting Officer to make the determination for you", value: "defer_co", correct: false, explanation: "While the CO has final authority, contractors are expected to provide the analytical foundation. Deferring entirely signals a lack of procurement maturity." },
      { label: "Classify it as a non-commercial item to avoid the documentation burden", value: "avoid", correct: false, explanation: "Misclassifying items increases cost and reduces acquisition flexibility. The RFO encourages commercial approaches — but requires documented justification." },
    ],
  },
  {
    id: "bj4",
    category: "Risk-Based Oversight",
    situation: "You manage 12 subcontractors on a large IDIQ contract. Under the old FAR, you performed identical oversight procedures for all 12. Under the RFO's principle-based approach, the Contracting Officer suggests you implement 'risk-based oversight' — but the FAR no longer specifies exactly what that means.",
    question: "What constitutes compliant 'risk-based oversight' under the RFO?",
    options: [
      { label: "Continue identical oversight for all 12 subcontractors — consistency equals compliance", value: "identical", correct: false, explanation: "The RFO explicitly moves away from one-size-fits-all oversight. Applying identical procedures regardless of risk profile wastes resources and misses critical risk areas." },
      { label: "Develop a documented risk classification framework that categorizes subcontractors by risk level, applies differentiated oversight intensity, and creates a Business Judgment Record explaining the classification methodology", value: "risk_framework", correct: true, explanation: "Correct. The RFO expects 'Business Judgment' in how you allocate oversight resources. A documented risk framework demonstrates you've thought critically about where risks concentrate and allocated oversight accordingly." },
      { label: "Reduce oversight for all subcontractors since the FAR removed specific requirements", value: "reduce_all", correct: false, explanation: "The RFO removed prescriptive requirements but increased the expectation of reasoned judgment. Reducing oversight across the board without risk analysis would fail any audit." },
      { label: "Wait for the Practitioner Album to provide specific guidance before changing anything", value: "wait", correct: false, explanation: "Practitioner Albums are guidance, not requirements. The RFO expects contractors to exercise judgment now, not wait for someone to tell them what to do." },
    ],
  },
  {
    id: "bj5",
    category: "Contract Modification",
    situation: "A subcontractor requests a contract modification to change their delivery schedule due to supply chain disruptions. Under the old FAR, you would evaluate this against specific FAR 43 modification procedures. Under the RFO, the procedural guidance has moved to a Practitioner Album, and the FAR simply requires 'documented rationale for contract changes.'",
    question: "How do you process this modification request?",
    options: [
      { label: "Apply the old FAR 43 procedures exactly as before — the substance hasn't changed", value: "old_procedures", correct: false, explanation: "While the substance is similar, the RFO requires you to document your REASONING, not just follow procedures. The 'why' is now as important as the 'how.'" },
      { label: "Create a Modification Business Judgment Record that documents the supply chain evidence, evaluates impact on Government deliverables, assesses cost implications, considers alternatives to schedule modification, and documents the rationale for approval or denial", value: "full_bjr", correct: true, explanation: "Correct. The RFO's principle-based approach requires that every contract change is supported by documented reasoning. Your Business Judgment Record becomes the audit trail that proves you exercised sound judgment." },
      { label: "Approve the modification based on the subcontractor's verbal explanation", value: "verbal", correct: false, explanation: "Verbal explanations leave no audit trail. Under the RFO, every significant decision must be supported by documented rationale — this is the core of 'Business Judgment.'" },
      { label: "Deny the modification to avoid the documentation requirement", value: "deny", correct: false, explanation: "Denying a legitimate modification to avoid documentation is itself poor Business Judgment. The RFO expects contractors to make reasoned decisions, not avoidant ones." },
    ],
  },
];

function ScenarioShell({ onComplete }: { onComplete: (answers: Record<string, { selected: string; correct: boolean }>) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { selected: string; correct: boolean }>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const scenario = scenarios[currentIndex];
  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  const handleSelect = (value: string) => { if (!showFeedback) setSelectedOption(value); };

  const handleConfirm = () => {
    if (!selectedOption) return;
    const option = scenario.options.find((o) => o.value === selectedOption);
    if (!option) return;
    setAnswers((prev) => ({ ...prev, [scenario.id]: { selected: selectedOption, correct: option.correct } }));
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentIndex < scenarios.length - 1) {
      setCurrentIndex((i) => i + 1); setSelectedOption(null); setShowFeedback(false);
    } else { onComplete(answers); }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-medium">Scenario {currentIndex + 1} of {scenarios.length}</p>
        </div>
        <div className="w-full bg-secondary/50 rounded-full h-1.5">
          <div className="bg-accent h-1.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <span className="inline-block text-accent text-[10px] uppercase tracking-[0.2em] font-semibold mb-4">{scenario.category}</span>

      <div className="card-elevated p-6 mb-6 border-l-4 border-accent">
        <p className="text-sm leading-relaxed text-foreground/90">{scenario.situation}</p>
      </div>

      <h3 className="!text-lg mb-6">{scenario.question}</h3>

      <div className="space-y-3 mb-8">
        {scenario.options.map((opt) => {
          const isSelected = selectedOption === opt.value;
          const isAnswered = showFeedback;
          let borderClass = "border-border hover:border-accent/30";
          if (isSelected && !isAnswered) borderClass = "border-accent bg-accent/5";
          if (isAnswered && opt.correct) borderClass = "border-green-500 bg-green-50";
          if (isAnswered && isSelected && !opt.correct) borderClass = "border-destructive bg-destructive/5";

          return (
            <button key={opt.value} onClick={() => handleSelect(opt.value)} disabled={isAnswered}
              className={`w-full text-left flex items-start gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 ${borderClass} ${isAnswered ? "cursor-default" : ""}`}>
              <div className="shrink-0 mt-0.5">
                {isAnswered && opt.correct && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                {isAnswered && isSelected && !opt.correct && <XCircle className="w-5 h-5 text-destructive" />}
                {!isAnswered && <div className={`w-5 h-5 rounded-full border-2 ${isSelected ? "border-accent bg-accent" : "border-muted-foreground/30"}`} />}
              </div>
              <div className="flex-1">
                <span className="text-sm">{opt.label}</span>
                {isAnswered && (isSelected || opt.correct) && <p className="text-xs text-muted-foreground mt-2">{opt.explanation}</p>}
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <div />
        {!showFeedback ? (
          <Button variant="cta" onClick={handleConfirm} disabled={!selectedOption}>Submit Answer <ArrowRight className="w-4 h-4 ml-2" /></Button>
        ) : (
          <Button variant="cta" onClick={handleNext}>{currentIndex === scenarios.length - 1 ? "View Results" : "Next Scenario"} <ArrowRight className="w-4 h-4 ml-2" /></Button>
        )}
      </div>
    </div>
  );
}

export default function RFOBusinessJudgment() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<{ score: number; maxScore: number; tier: string; tierColor: string; tierDescription: string; findings: { area: string; status: string; recommendation: string }[]; recommendedActions: string[] } | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => { setStarted(true); };
  const handleUnlock = (data: { name: string; email: string; company: string; industry: string }) => { unlock(data); setShowGate(false); setStarted(true); };

  const handleComplete = async (answers: Record<string, { selected: string; correct: boolean }>) => {
    const total = scenarios.length;
    const correct = Object.values(answers).filter((a) => a.correct).length;
    const pct = Math.round((correct / total) * 100);

    let tier: string, tierColor: string, tierDescription: string;
    if (pct >= 80) {
      tier = "RFO Ready — Strong Business Judgment Capability";
      tierColor = "bg-green-100 text-green-800";
      tierDescription = "Your responses demonstrate a strong understanding of principle-based procurement under the 2026 FAR overhaul. Your team appears capable of documenting defensible Business Judgment.";
    } else if (pct >= 50) {
      tier = "Transitional — Gaps in Principle-Based Documentation";
      tierColor = "bg-yellow-100 text-yellow-800";
      tierDescription = "You understand the shift toward principle-based governance but gaps remain in applying Business Judgment documentation. Targeted training on the RFO framework is recommended.";
    } else {
      tier = "At Risk — Still Operating Under Old FAR Mindset";
      tierColor = "bg-red-100 text-red-800";
      tierDescription = "Your responses indicate your team is still applying pre-RFO procedural thinking. Under the 2026 framework, this approach will fail audit scrutiny. Comprehensive RFO transition training is required.";
    }

    const findings = scenarios.map((s) => {
      const answer = answers[s.id];
      return {
        area: s.category,
        status: answer?.correct ? "Correct" : "Incorrect",
        recommendation: answer?.correct
          ? "Demonstrates sound Business Judgment documentation capability"
          : `Review RFO requirements for ${s.category.toLowerCase()} — Business Judgment Record needed`,
      };
    });

    const recommendedActions = [
      "Fatal Flaw: Continuing to apply prescriptive FAR procedures under a principle-based framework — auditors now expect documented rationale, not checklist compliance.",
      "Fatal Flaw: Failing to create Business Judgment Records for procurement decisions above $25,000, leaving your decisions indefensible during protest.",
      "Fatal Flaw: Treating the RFO transition as a 'training update' rather than a fundamental redesign of your procurement documentation architecture.",
      "Fatal Flaw: Assuming existing procurement manuals are compliant when they reference superseded FAR Part procedures.",
      "Fatal Flaw: Not establishing a 'Defensible Logic' review process, meaning every procurement decision is a potential audit finding.",
    ];

    const r = { score: correct, maxScore: total, tier, tierColor, tierDescription, findings, recommendedActions };
    setResults(r);

    if (isUnlocked && userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
        consent: true, tool_used: "rfo-business-judgment", score: correct, tier,
        date_completed: new Date().toISOString(), answers_json: answers as any,
      });
    }
  };

  return (
    <Layout>
      <SEOHead
        title="RFO Business Judgment Matrix | FAR 2026 Procurement Assessment | ElevateQCS"
        description="Test your team's ability to document defensible Business Judgment under the 2026 FAR overhaul. Five procurement scenarios where the correct answer isn't in the manual."
        url="https://elevateqcs.com/tools/rfo-business-judgment"
        keywords={["FAR overhaul 2026", "RFO business judgment", "principle-based procurement", "federal acquisition reform", "business judgment documentation"]}
      />
      <ToolEmailGate open={showGate} onUnlock={handleUnlock} />
      <section className="pt-32 pb-8 bg-primary">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Tools
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Procurement Assessment</p>
            <h1 className="text-primary-foreground mb-4">The "RFO" Business Judgment Matrix</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              Five procurement scenarios where the correct answer isn't in the manual. Test whether your team can document "Defensible Logic" under the 2026 FAR standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {!started && !results && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-elevated p-12">
                <h2 className="mb-4">Can Your Team Document Business Judgment?</h2>
                <p className="text-muted-foreground mb-8">
                  The 2026 FAR overhaul replaced prescriptive rules with principle-based requirements. Contractors must now document WHY they made procurement decisions — not just WHAT procedures they followed. This assessment tests whether your team is ready for that shift.
                </p>
                <Button variant="cta" size="xl" onClick={handleStart}>Start Assessment</Button>
                <p className="text-xs text-muted-foreground mt-4">5 scenarios · approximately 4–6 minutes</p>
              </div>
            </div>
          )}

          {started && !results && <ScenarioShell onComplete={handleComplete} />}

          {results && (
            <ResultsPage
              toolName="RFO Business Judgment Matrix"
              score={results.score}
              maxScore={results.maxScore}
              tier={results.tier}
              tierColor={results.tierColor}
              tierDescription={results.tierDescription}
              findings={results.findings}
              recommendedActions={results.recommendedActions}
              relatedInsights={[
                { title: "The Revolutionary FAR Overhaul (RFO) of 2026", slug: "far-overhaul-2026" },
                { title: "FAR Flow-Downs Under 52.244-6", slug: "far-flowdowns-52-244-6" },
                { title: "The Compliance Decision Framework", slug: "compliance-decision-framework" },
                { title: "Documentation Best Practices for Government Contractors", slug: "documentation-best-practices" },
              ]}
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
