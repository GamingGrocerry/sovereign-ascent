import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, AlertTriangle, Info, Download, ChevronRight } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/lib/supabaseClient";

interface Hotspot {
  id: string;
  phrase: string;
  riskLevel: "critical" | "high" | "moderate" | "low";
  explanation: string;
  contractualImpact: string;
  recommendation: string;
}

const pwsParagraphs = [
  {
    id: "para1",
    title: "Task Order Performance Requirements",
    text: `The Contractor shall provide all personnel, equipment, tools, materials, supervision, and other items necessary to perform base operations support services as defined herein. Work shall be performed {at the discretion of the Contracting Officer} and may include {surge requirements with no additional compensation}. The Contractor shall maintain {a staffing level sufficient to meet all performance objectives} as determined by the Government representative. {Response times for critical services shall not exceed 2 hours}, unless {otherwise directed by the COR}.`,
    hotspots: [
      {
        id: "h1",
        phrase: "at the discretion of the Contracting Officer",
        riskLevel: "critical" as const,
        explanation: "This phrase gives the CO unilateral authority to modify scope, schedule, or deliverables without formal contract modification. It creates an open-ended obligation with no ceiling on effort.",
        contractualImpact: "Can be used to justify scope expansion without equitable adjustment. If you perform the additional work without a formal modification, you may waive your right to claim additional compensation.",
        recommendation: "Negotiate for 'mutual agreement' language or request that discretionary changes above a defined threshold require a formal contract modification under the Changes clause.",
      },
      {
        id: "h2",
        phrase: "surge requirements with no additional compensation",
        riskLevel: "critical" as const,
        explanation: "This clause obligates the contractor to absorb cost increases for unplanned surges. Combined with 'at the discretion of the CO,' this creates unlimited financial exposure.",
        contractualImpact: "Direct P&L impact. Surge labor costs (overtime, travel, equipment) will erode margins. If surge becomes routine, you may be operating at a loss on affected CLINs.",
        recommendation: "Propose a surge CLIN with pre-negotiated rates, or negotiate a surge threshold (e.g., 10% above baseline staffing) beyond which additional compensation applies.",
      },
      {
        id: "h3",
        phrase: "a staffing level sufficient to meet all performance objectives",
        riskLevel: "high" as const,
        explanation: "Undefined staffing requirements create risk because 'sufficient' is subjective and determined by the Government. If performance objectives change, your staffing obligation changes automatically.",
        contractualImpact: "Understaffing leads to performance deductions. Overstaffing erodes margins. Without defined FTE counts, you cannot accurately price the task order.",
        recommendation: "Request a defined staffing matrix or minimum/maximum FTE range tied to specific performance objectives. Include a labor adjustment mechanism for scope changes.",
      },
      {
        id: "h4",
        phrase: "Response times for critical services shall not exceed 2 hours",
        riskLevel: "moderate" as const,
        explanation: "A 2-hour response time for 'critical services' requires 24/7 on-call capability, which significantly increases labor costs. The definition of 'critical' may expand over time.",
        contractualImpact: "Requires maintaining standby personnel across all shifts. If the definition of 'critical services' is not bounded, any service could be classified as critical.",
        recommendation: "Request a defined list of services classified as 'critical' with specific response time tiers. Negotiate separate response times for routine vs. emergency services.",
      },
      {
        id: "h5",
        phrase: "otherwise directed by the COR",
        riskLevel: "high" as const,
        explanation: "COR direction outside the scope of the COR delegation letter may not be contractually binding, but non-compliance creates relationship risk. CORs frequently issue direction beyond their authority.",
        contractualImpact: "Following unauthorized COR direction without CO confirmation may constitute a voluntary scope change. You may not be able to recover costs for work performed under COR-only direction.",
        recommendation: "Establish a protocol requiring written CO confirmation for any COR direction that changes scope, cost, or schedule. Document all COR communications in your contract file.",
      },
    ],
  },
  {
    id: "para2",
    title: "Quality Assurance & Surveillance",
    text: `The Government will evaluate contractor performance through {unannounced inspections at any time during the period of performance}. {All deficiencies identified during surveillance shall be corrected within 24 hours} at the Contractor's expense. The Contractor shall maintain {a Quality Control Plan acceptable to the Government} and shall {provide monthly performance reports in a format prescribed by the COR}. {Failure to meet any performance standard may result in a reduction in payment} as outlined in the Performance Requirements Summary.`,
    hotspots: [
      {
        id: "h6",
        phrase: "unannounced inspections at any time during the period of performance",
        riskLevel: "moderate" as const,
        explanation: "While standard in government contracts, unannounced inspections require your site to be inspection-ready at all times. This includes documentation, personnel qualifications, and physical conditions.",
        contractualImpact: "Non-compliance discovered during unannounced inspections carries more weight than self-reported findings. Multiple failed inspections create a pattern that supports contract termination.",
        recommendation: "Implement a 'continuous readiness' program with daily pre-inspection checklists. Maintain a document control system that ensures current versions are always accessible.",
      },
      {
        id: "h7",
        phrase: "All deficiencies identified during surveillance shall be corrected within 24 hours",
        riskLevel: "critical" as const,
        explanation: "A 24-hour correction window for ALL deficiencies — regardless of severity or complexity — is operationally unrealistic for systemic issues. This creates automatic non-compliance for any finding requiring root cause analysis.",
        contractualImpact: "Systemic deficiencies (training gaps, equipment procurement, process redesign) cannot be resolved in 24 hours. Each day beyond the deadline may trigger payment deductions or constitute a separate non-conformance.",
        recommendation: "Negotiate tiered correction timelines: 24 hours for safety-critical, 72 hours for operational, 30 days for systemic. Include provisions for corrective action plans on complex findings.",
      },
      {
        id: "h8",
        phrase: "a Quality Control Plan acceptable to the Government",
        riskLevel: "moderate" as const,
        explanation: "'Acceptable to the Government' is subjective and may change with personnel turnover. A new COR or QA representative may require significant QCP revisions.",
        contractualImpact: "Repeated QCP rejection delays contract start. QCP revision costs are typically at contractor expense. Without defined acceptance criteria, approval can be withheld indefinitely.",
        recommendation: "Request defined QCP acceptance criteria in the contract. Include a timeline for Government review and a dispute resolution process for QCP disagreements.",
      },
      {
        id: "h9",
        phrase: "provide monthly performance reports in a format prescribed by the COR",
        riskLevel: "low" as const,
        explanation: "COR-prescribed reporting formats may change frequently, creating administrative burden. However, this is standard practice and manageable with a flexible reporting system.",
        contractualImpact: "Format changes require labor hours to implement. If reporting requirements escalate significantly, you may need to negotiate additional administrative support.",
        recommendation: "Build your reporting system with configurable templates. Establish a change management process for reporting format modifications.",
      },
      {
        id: "h10",
        phrase: "Failure to meet any performance standard may result in a reduction in payment",
        riskLevel: "high" as const,
        explanation: "The word 'any' means even minor, administrative performance standards can trigger payment reductions. Combined with subjective standards, this creates significant financial risk.",
        contractualImpact: "Payment reductions compound quickly across multiple CLINs. A pattern of deductions strengthens the Government's position in any termination action.",
        recommendation: "Negotiate a cure period before deductions apply. Request defined materiality thresholds — minor administrative deficiencies should trigger warnings, not payment reductions.",
      },
    ],
  },
];

const riskColors = {
  critical: "bg-destructive/10 text-destructive border-destructive/30",
  high: "bg-orange-100 text-orange-800 border-orange-300",
  moderate: "bg-yellow-100 text-yellow-800 border-yellow-300",
  low: "bg-green-100 text-green-800 border-green-300",
};

const riskLabels = {
  critical: "Critical Risk",
  high: "High Risk",
  moderate: "Moderate Risk",
  low: "Low Risk",
};

function PWSInteractive({ onComplete }: { onComplete: (found: number, total: number) => void }) {
  const [revealedHotspots, setRevealedHotspots] = useState<Set<string>>(new Set());
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const para = pwsParagraphs[currentParagraph];
  const allHotspots = pwsParagraphs.flatMap((p) => p.hotspots);
  const totalHotspots = allHotspots.length;

  const handleHotspotClick = (hotspot: Hotspot) => {
    setRevealedHotspots((prev) => new Set([...prev, hotspot.id]));
    setActiveHotspot(hotspot);
  };

  const renderParagraph = () => {
    const parts: React.ReactNode[] = [];
    let remaining = para.text;

    para.hotspots.forEach((hotspot) => {
      const marker = `{${hotspot.phrase}}`;
      const idx = remaining.indexOf(marker);
      if (idx === -1) return;

      if (idx > 0) {
        parts.push(<span key={`pre-${hotspot.id}`}>{remaining.substring(0, idx)}</span>);
      }

      const isRevealed = revealedHotspots.has(hotspot.id);
      parts.push(
        <button
          key={hotspot.id}
          onClick={() => handleHotspotClick(hotspot)}
          className={`inline px-1 py-0.5 rounded cursor-pointer transition-all duration-200 border-b-2 ${
            isRevealed
              ? `${riskColors[hotspot.riskLevel]} border-current font-medium`
              : "bg-accent/10 border-accent/40 hover:bg-accent/20 text-foreground"
          }`}
          title="Click to reveal hidden risk"
        >
          {hotspot.phrase}
          {!isRevealed && <AlertTriangle className="inline w-3 h-3 ml-1 text-accent" />}
        </button>
      );

      remaining = remaining.substring(idx + marker.length);
    });

    if (remaining) {
      parts.push(<span key="end">{remaining}</span>);
    }

    return parts;
  };

  const isLastParagraph = currentParagraph === pwsParagraphs.length - 1;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">
          PWS Risk Highlighter
        </p>
        <h2 className="!text-2xl md:!text-3xl mb-3">Identify Hidden Contractual Risks</h2>
        <p className="text-muted-foreground">
          Click on the highlighted phrases in the sample PWS paragraph below to reveal hidden risks, contractual traps, and negotiation recommendations.
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        <span>Paragraph {currentParagraph + 1} of {pwsParagraphs.length}</span>
        <span>{revealedHotspots.size} of {totalHotspots} risks identified</span>
      </div>

      {/* Paragraph Card */}
      <div className="card-elevated p-6 md:p-8 mb-6">
        <h3 className="!text-lg mb-4 text-accent">{para.title}</h3>
        <p className="text-sm leading-relaxed text-foreground/90">
          {renderParagraph()}
        </p>
      </div>

      {/* Active Hotspot Detail */}
      {activeHotspot && (
        <div className={`card-elevated p-6 mb-6 border-l-4 ${riskColors[activeHotspot.riskLevel]}`}>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              {riskLabels[activeHotspot.riskLevel]}
            </span>
          </div>
          <h4 className="text-sm font-semibold mb-2">"{activeHotspot.phrase}"</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <p className="font-medium text-foreground mb-1">Why This Matters</p>
              <p>{activeHotspot.explanation}</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Contractual Impact</p>
              <p>{activeHotspot.contractualImpact}</p>
            </div>
            <div>
              <p className="font-medium text-foreground mb-1">Recommended Action</p>
              <p>{activeHotspot.recommendation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 mb-8">
        {Object.entries(riskLabels).map(([level, label]) => (
          <span key={level} className={`text-[10px] px-2 py-1 rounded ${riskColors[level as keyof typeof riskColors]}`}>
            {label}
          </span>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentParagraph((i) => i - 1)}
          disabled={currentParagraph === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Previous
        </Button>
        {isLastParagraph ? (
          <Button variant="cta" onClick={() => onComplete(revealedHotspots.size, totalHotspots)}>
            View My Results <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button variant="cta" onClick={() => setCurrentParagraph((i) => i + 1)}>
            Next Paragraph <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default function PWSRiskHighlighter() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [results, setResults] = useState<{
    score: number;
    maxScore: number;
    tier: string;
    tierColor: string;
    tierDescription: string;
    findings: { area: string; status: string; recommendation: string }[];
    recommendedActions: string[];
    relatedInsights: { title: string; slug: string }[];
  } | null>(null);

  const handleComplete = async (found: number, total: number) => {
    const pct = Math.round((found / total) * 100);
    let tier: string, tierColor: string, tierDescription: string;

    if (pct >= 90) {
      tier = "EXPERT — Contract Risk Analyst";
      tierColor = "bg-green-100 text-green-800";
      tierDescription = "You identified nearly all hidden contractual risks. Your ability to read between the lines of a PWS is at the level expected of senior contracts professionals. You would likely catch most traps before they become performance issues.";
    } else if (pct >= 70) {
      tier = "PROFICIENT — Risk-Aware Reader";
      tierColor = "bg-blue-100 text-blue-800";
      tierDescription = "You identified the majority of hidden risks but missed some nuanced traps. With targeted training on Government contract language patterns, you could significantly reduce your bid risk exposure.";
    } else if (pct >= 40) {
      tier = "DEVELOPING — Gaps in Contract Awareness";
      tierColor = "bg-yellow-100 text-yellow-800";
      tierDescription = "You identified some risks but missed several critical contractual traps. These missed risks could translate into significant financial exposure during contract execution. A structured PWS review process is recommended.";
    } else {
      tier = "AT RISK — Significant Exposure";
      tierColor = "bg-red-100 text-red-800";
      tierDescription = "Most contractual risks went undetected. Without improvement in PWS analysis capability, your organisation is at significant risk of accepting unfavourable terms that erode margins and create compliance exposure.";
    }

    const findings = [
      { area: "Scope Definition Risks", status: found >= 4 ? "Identified" : "Missed", recommendation: "Always flag discretionary language ('at the discretion of') that gives one party unilateral control." },
      { area: "Financial Exposure Clauses", status: found >= 6 ? "Identified" : "Missed", recommendation: "Surge, staffing, and 'no additional compensation' clauses must be bounded with thresholds or separate CLINs." },
      { area: "Quality & Inspection Traps", status: found >= 8 ? "Identified" : "Missed", recommendation: "Tiered correction timelines and defined acceptance criteria protect against open-ended quality obligations." },
      { area: "Payment Reduction Triggers", status: found >= 9 ? "Identified" : "Missed", recommendation: "Negotiate cure periods and materiality thresholds before accepting performance-based deduction clauses." },
      { area: "Authority Boundaries", status: found >= 5 ? "Identified" : "Missed", recommendation: "Distinguish between CO authority and COR direction — only CO direction modifies contractual obligations." },
    ];

    const r = {
      score: found,
      maxScore: total,
      tier,
      tierColor,
      tierDescription,
      findings,
      recommendedActions: [
        "Fatal Flaw: Submitting bids without a structured PWS/TOR review checklist — you're pricing against language you haven't fully analysed.",
        "Fatal Flaw: Failing to calculate the financial impact of open-ended clauses like 'at no additional cost' before submitting pricing.",
        "Fatal Flaw: Accepting 'as directed by the COR' language without distinguishing it from CO authority — only CO direction modifies contractual obligations.",
        "Fatal Flaw: Not negotiating tiered response times and defined scope boundaries, leaving your margin exposed to unlimited performance expectations.",
        "Fatal Flaw: Submitting high-value task orders without specialist contract review, accepting terms that erode 15–30% of your projected margin.",
      ],
      relatedInsights: [
        { title: "The PWS Whisperer: Reading Between the Lines", slug: "pws-whisperer" },
        { title: "Value Over Price: Why Primes Pay More for Maturity", slug: "value-over-price" },
        { title: "The 96-Hour Sprint: Why LOGCAP Subcontractors Fail", slug: "96-hour-sprint" },
        { title: "FAR 52.244-6: The Unfair Advantage of Mandatory Flow-downs", slug: "far-flowdowns-52-244-6" },
      ],
    };

    setResults(r);
    if (isUnlocked && userData) {
      try { await supabase.from("assessment_leads").insert({ name: userData.name, email: userData.email, company: userData.company, industry: userData.industry, consent: true, tool_used: "PWS Risk Highlighter", score: found, tier, date_completed: new Date().toISOString(), answers_json: { found, total } as any }); } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="PWS Risk Highlighter — Contract Risk Analysis Tool | ElevateQCS"
        description="Identify hidden contractual risks in Performance Work Statements. Interactive tool reveals scope traps, financial exposure, and negotiation opportunities in government contract language."
        url="https://elevateqcs.com/tools/pws-risk-highlighter"
        keywords={["PWS risk analysis", "contract risk identification", "performance work statement review", "government contract traps", "bid risk assessment"]}
      />
      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          <ToolEmailGate open={!isUnlocked && !!results} onUnlock={(data) => { unlock(data); }} />
          {!results && <PWSInteractive onComplete={handleComplete} />}
          {results && (
            <ResultsPage
              toolName="PWS Risk Highlighter"
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
              onUnlock={() => {}}
            />
          )}
        </div>
      </section>
    </Layout>
  );
}
