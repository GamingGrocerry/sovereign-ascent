import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, HardHat, AlertTriangle } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { ResultsPage } from "@/components/tools/ResultsPage";
import { supabase } from "@/integrations/supabase/client";

interface ChecklistCategory {
  id: string;
  title: string;
  description: string;
  items: { id: string; label: string; critical: boolean }[];
}

const categories: ChecklistCategory[] = [
  {
    id: "ppe",
    title: "Personal Protective Equipment (PPE)",
    description: "Verify that all required PPE is available, serviceable, and properly fitted for site conditions.",
    items: [
      { id: "ppe1", label: "Hard hats available and worn in all designated areas", critical: true },
      { id: "ppe2", label: "Safety glasses/goggles provided for debris and chemical exposure", critical: false },
      { id: "ppe3", label: "High-visibility vests for all personnel in vehicle movement areas", critical: true },
      { id: "ppe4", label: "Steel-toe or composite-toe boots required for all site workers", critical: false },
      { id: "ppe5", label: "Hearing protection available for high-noise environments (>85 dB)", critical: false },
      { id: "ppe6", label: "Respiratory protection available for dust/chemical exposure areas", critical: true },
    ],
  },
  {
    id: "fire",
    title: "Fire Prevention & Emergency Response",
    description: "Assess fire prevention controls and emergency response readiness for austere conditions.",
    items: [
      { id: "fire1", label: "Fire extinguishers inspected monthly and placed within 75-foot travel distance", critical: true },
      { id: "fire2", label: "Emergency evacuation plan posted in all occupied structures", critical: true },
      { id: "fire3", label: "Emergency muster points clearly identified and communicated", critical: true },
      { id: "fire4", label: "Fire watch procedures established for hot work operations", critical: false },
      { id: "fire5", label: "Flammable materials stored in approved containers and designated areas", critical: false },
      { id: "fire6", label: "Emergency lighting functional in all egress routes", critical: false },
    ],
  },
  {
    id: "electrical",
    title: "Electrical Safety",
    description: "Verify electrical systems meet safety standards despite austere infrastructure limitations.",
    items: [
      { id: "elec1", label: "Generator grounding systems installed and tested", critical: true },
      { id: "elec2", label: "GFCIs installed on all temporary power circuits in wet/damp areas", critical: true },
      { id: "elec3", label: "Extension cords in good condition — no damaged insulation or exposed wiring", critical: false },
      { id: "elec4", label: "Electrical panels clearly labelled with circuit identification", critical: false },
      { id: "elec5", label: "Lockout/Tagout procedures established for equipment maintenance", critical: true },
      { id: "elec6", label: "Qualified electrician available for all electrical installations and repairs", critical: false },
    ],
  },
  {
    id: "hazcom",
    title: "Hazard Communication & Chemical Safety",
    description: "Ensure proper handling, storage, and communication of hazardous materials on site.",
    items: [
      { id: "haz1", label: "Safety Data Sheets (SDS) accessible for all hazardous materials on site", critical: true },
      { id: "haz2", label: "Chemical containers properly labelled with contents and hazard warnings", critical: true },
      { id: "haz3", label: "Secondary containment provided for liquid chemical storage", critical: false },
      { id: "haz4", label: "Spill response kits staged at chemical storage and use areas", critical: false },
      { id: "haz5", label: "Workers trained on chemical hazards specific to their work area", critical: true },
    ],
  },
  {
    id: "fall",
    title: "Fall Protection",
    description: "Evaluate fall protection measures for elevated work and open-sided surfaces.",
    items: [
      { id: "fall1", label: "Guardrails installed on all open-sided floors/platforms above 6 feet", critical: true },
      { id: "fall2", label: "Personal fall arrest systems available for work above 6 feet without guardrails", critical: true },
      { id: "fall3", label: "Ladders in good condition and secured against displacement", critical: false },
      { id: "fall4", label: "Scaffolding erected by competent person with proper planking", critical: true },
      { id: "fall5", label: "Floor openings covered and marked to prevent falls", critical: false },
    ],
  },
  {
    id: "medical",
    title: "Medical & First Aid Readiness",
    description: "Confirm medical response capability appropriate for remote/austere operations.",
    items: [
      { id: "med1", label: "First aid kits stocked and accessible in all work areas", critical: true },
      { id: "med2", label: "Trained first aid responder(s) available on each shift", critical: true },
      { id: "med3", label: "Medical evacuation plan established with identified transport routes", critical: true },
      { id: "med4", label: "AED (Automated External Defibrillator) available and tested", critical: false },
      { id: "med5", label: "Heat/cold stress prevention program implemented based on climate", critical: false },
      { id: "med6", label: "Potable water supply tested and available for all site personnel", critical: true },
    ],
  },
  {
    id: "training",
    title: "Safety Training & Documentation",
    description: "Verify that safety training records are current and site-specific orientations are conducted.",
    items: [
      { id: "train1", label: "Site-specific safety orientation conducted for all new personnel", critical: true },
      { id: "train2", label: "Daily safety briefings (toolbox talks) documented", critical: false },
      { id: "train3", label: "Competent person designated for each high-risk activity", critical: true },
      { id: "train4", label: "Incident investigation procedures documented and trained", critical: false },
      { id: "train5", label: "Safety training records maintained and accessible for audit", critical: true },
    ],
  },
  {
    id: "site",
    title: "Site Conditions & Housekeeping",
    description: "Assess general site conditions, access control, and housekeeping standards.",
    items: [
      { id: "site1", label: "Walking/working surfaces free of trip hazards and debris", critical: false },
      { id: "site2", label: "Adequate lighting in all work areas and egress routes", critical: false },
      { id: "site3", label: "Vehicle and pedestrian traffic routes separated and marked", critical: true },
      { id: "site4", label: "Waste disposal procedures established and containers available", critical: false },
      { id: "site5", label: "Sanitary facilities adequate for workforce size and maintained", critical: false },
      { id: "site6", label: "Perimeter security controls in place for restricted areas", critical: true },
    ],
  },
];

const allItems = categories.flatMap((c) => c.items);
const criticalItems = allItems.filter((i) => i.critical);

function ChecklistInteractive({ onComplete }: { onComplete: (checked: Set<string>) => void }) {
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [currentCategory, setCurrentCategory] = useState(0);

  const cat = categories[currentCategory];
  const totalChecked = checkedItems.size;

  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
            <HardHat className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="!text-2xl md:!text-3xl">Austere Environment Safety Checklist</h1>
            <p className="text-xs text-muted-foreground">8 categories · {allItems.length} items · ~5 minutes</p>
          </div>
        </div>
        <p className="text-muted-foreground">
          Check off the safety features currently in place at your site. Items marked with a warning icon are critical requirements — gaps in these areas represent the highest risk exposure.
        </p>
      </div>

      {/* Progress */}
      <div className="flex items-center justify-between mb-4 text-xs text-muted-foreground">
        <span>Category {currentCategory + 1} of {categories.length}: {cat.title}</span>
        <span>{totalChecked} of {allItems.length} items checked</span>
      </div>

      <div className="card-elevated p-6 md:p-8 mb-6">
        <h3 className="!text-lg mb-2">{cat.title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{cat.description}</p>

        <div className="space-y-3">
          {cat.items.map((item) => (
            <label
              key={item.id}
              className={`flex items-start gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 ${
                checkedItems.has(item.id)
                  ? "border-green-500/40 bg-green-50/50"
                  : "border-border hover:border-accent/30"
              }`}
            >
              <Checkbox
                checked={checkedItems.has(item.id)}
                onCheckedChange={() => toggleItem(item.id)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <span className="text-sm">{item.label}</span>
                {item.critical && (
                  <span className="inline-flex items-center gap-1 ml-2 text-[10px] text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded">
                    <AlertTriangle className="w-3 h-3" /> Critical
                  </span>
                )}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentCategory((i) => i - 1)}
          disabled={currentCategory === 0}
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Previous
        </Button>
        {currentCategory === categories.length - 1 ? (
          <Button variant="cta" onClick={() => onComplete(checkedItems)}>
            Generate Gap Report <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        ) : (
          <Button variant="cta" onClick={() => setCurrentCategory((i) => i + 1)}>
            Next Category <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default function AustereSafetyChecklist() {
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

  const handleComplete = async (checked: Set<string>) => {
    const totalItems = allItems.length;
    const checkedCount = checked.size;
    const pct = Math.round((checkedCount / totalItems) * 100);

    const criticalMissed = criticalItems.filter((i) => !checked.has(i.id));
    const criticalPct = Math.round(((criticalItems.length - criticalMissed.length) / criticalItems.length) * 100);

    let tier: string, tierColor: string, tierDescription: string;

    if (pct >= 90 && criticalPct >= 95) {
      tier = "MISSION READY — Comprehensive Safety Program";
      tierColor = "bg-green-100 text-green-800";
      tierDescription = "Your site safety program meets or exceeds OSHA and DoD safety requirements for austere environments. Continue maintaining your safety management system with regular inspections and drills.";
    } else if (pct >= 70 && criticalPct >= 75) {
      tier = "OPERATIONAL — Minor Gaps Identified";
      tierColor = "bg-blue-100 text-blue-800";
      tierDescription = "Your site has a solid safety foundation with some gaps that should be addressed within 30 days. Focus on the critical items identified in the gap report below.";
    } else if (pct >= 50) {
      tier = "AT RISK — Significant Safety Gaps";
      tierColor = "bg-yellow-100 text-yellow-800";
      tierDescription = "Multiple safety gaps exist that could result in OSHA citations, lost-time injuries, or DCMA corrective actions. Immediate action is required on critical deficiencies.";
    } else {
      tier = "CRITICAL — Immediate Intervention Required";
      tierColor = "bg-red-100 text-red-800";
      tierDescription = "Your site safety program has critical deficiencies that present immediate risk to personnel safety and contract compliance. A comprehensive safety stand-down and program overhaul is recommended.";
    }

    const findings = categories.map((cat) => {
      const catChecked = cat.items.filter((i) => checked.has(i.id)).length;
      const catTotal = cat.items.length;
      const catCriticalMissed = cat.items.filter((i) => i.critical && !checked.has(i.id));
      const status = catChecked === catTotal ? "Complete" : catCriticalMissed.length > 0 ? "Critical Gaps" : "Minor Gaps";
      const recommendation = catCriticalMissed.length > 0
        ? `Address ${catCriticalMissed.length} critical item(s): ${catCriticalMissed.map((i) => i.label.split(" ").slice(0, 4).join(" ") + "...").join("; ")}`
        : catChecked === catTotal
        ? "Maintain current standards — schedule next inspection within 30 days"
        : `${catTotal - catChecked} non-critical item(s) to address within 60 days`;

      return { area: cat.title, status, recommendation };
    });

    const recommendedActions = [
      "Fatal Flaw: Treating this gap report as informational rather than requiring immediate SSHO action within 72 hours.",
      "Fatal Flaw: Addressing safety deficiencies without updating Activity Hazard Analyses (AHAs) for all current work activities.",
      "Fatal Flaw: Conducting refresher training on 'general safety' instead of targeting the specific gap areas identified in this assessment.",
      "Fatal Flaw: Assuming a formal site inspection can wait — the conditions flagged here are the exact items that trigger OSHA citations and stop-work orders.",
    ];

    if (criticalMissed.length > 5) {
      recommendedActions.unshift("CRITICAL FATAL FLAW: Operating with this many critical deficiencies has a direct correlation with recordable incidents. A safety stand-down is warranted.");
    }

    const r = {
      score: checkedCount,
      maxScore: totalItems,
      tier,
      tierColor,
      tierDescription,
      findings,
      recommendedActions,
      relatedInsights: [
        { title: "OSHA 2026 OCONUS: Applying Stateside Safety to LOGCAP Sites", slug: "osha-oconus-safety" },
        { title: "OCONUS Site Sustainment: Regulatory Friction in Austere Sites", slug: "oconus-sustainment" },
        { title: "Sustaining the Perimeter: Site Security & Cleared Personnel", slug: "site-security-perimeter" },
        { title: "The 96-Hour Sprint: Why LOGCAP Subcontractors Fail", slug: "96-hour-sprint" },
      ],
    };

    setResults(r);
    if (isUnlocked && userData) {
      try { await supabase.from("assessment_leads").insert({ name: userData.name, email: userData.email, company: userData.company, industry: userData.industry, consent: true, tool_used: "Austere Safety Checklist", score: checkedCount, tier, date_completed: new Date().toISOString(), answers_json: { checked: Array.from(checked), criticalMissed: criticalMissed.map((i) => i.id) } as any }); } catch {}
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Austere Environment Safety Checklist — OCONUS Site Safety Gap Report | ElevateQCS"
        description="Interactive safety checklist for austere and OCONUS environments. Generate a custom gap report for your Site Safety and Health Officer covering PPE, fire safety, electrical, fall protection, and medical readiness."
        url="https://elevateqcs.com/tools/austere-safety-checklist"
        keywords={["OCONUS safety checklist", "austere environment safety", "site safety gap report", "LOGCAP safety compliance", "SSHO safety checklist"]}
      />
      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />
          {isUnlocked && !results && <ChecklistInteractive onComplete={handleComplete} />}
          {isUnlocked && results && userData && (
            <ResultsPage
              toolName="Austere Environment Safety Checklist"
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
