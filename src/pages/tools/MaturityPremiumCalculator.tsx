import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, DollarSign, TrendingUp, ChevronRight, Download } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { supabase } from "@/integrations/supabase/client";
import { generateReport } from "@/components/tools/generateReport";

interface CalculatorInputs {
  contractValue: number;
  auditHoursPerMonth: number;
  hourlyRate: number;
  currentMaturity: string;
  contractDuration: number;
}

interface CalculatorResults {
  currentOversightCost: number;
  currentOversightPct: number;
  projectedPremium: number;
  projectedPremiumPct: number;
  netBenefit: number;
  roi: number;
  maturityUpgrade: string;
  breakdownItems: { label: string; current: number; projected: number }[];
}

const maturityLevels = [
  { value: "ad-hoc", label: "Ad-Hoc — No formal QMS or compliance processes" },
  { value: "basic", label: "Basic — Some documented procedures, inconsistent execution" },
  { value: "developing", label: "Developing — QMS in place but not fully implemented" },
  { value: "managed", label: "Managed — QMS operational with regular audits and reviews" },
  { value: "optimized", label: "Optimized — Mature QMS with continuous improvement culture" },
];

const maturityMultipliers: Record<string, { oversightReduction: number; premiumPct: number; targetLevel: string }> = {
  "ad-hoc": { oversightReduction: 0.65, premiumPct: 0.12, targetLevel: "Managed" },
  "basic": { oversightReduction: 0.55, premiumPct: 0.10, targetLevel: "Managed" },
  "developing": { oversightReduction: 0.40, premiumPct: 0.07, targetLevel: "Optimized" },
  "managed": { oversightReduction: 0.25, premiumPct: 0.04, targetLevel: "Optimized" },
  "optimized": { oversightReduction: 0.10, premiumPct: 0.02, targetLevel: "Industry Leader" },
};

function CalculatorForm({ onComplete }: { onComplete: (inputs: CalculatorInputs) => void }) {
  const [contractValue, setContractValue] = useState("");
  const [auditHours, setAuditHours] = useState("");
  const [hourlyRate, setHourlyRate] = useState("85");
  const [maturity, setMaturity] = useState("");
  const [duration, setDuration] = useState("12");

  const canSubmit = contractValue && auditHours && maturity && duration;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onComplete({
      contractValue: parseFloat(contractValue),
      auditHoursPerMonth: parseFloat(auditHours),
      hourlyRate: parseFloat(hourlyRate),
      currentMaturity: maturity,
      contractDuration: parseInt(duration),
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">Maturity Premium ROI Calculator</p>
        <h2 className="!text-2xl md:!text-3xl mb-3">Calculate Your Maturity Premium</h2>
        <p className="text-muted-foreground">
          Discover how much more you could charge — and how much oversight cost you could eliminate — by elevating your operational maturity rating.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card-elevated p-6 md:p-8 space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="contract-value">Current Annual Contract Value (USD) *</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="contract-value"
                type="number"
                min="10000"
                step="1000"
                value={contractValue}
                onChange={(e) => setContractValue(e.target.value)}
                placeholder="2,500,000"
                className="pl-9 bg-secondary/30"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="audit-hours">Hours Spent on Audits & Compliance Per Month *</Label>
            <Input
              id="audit-hours"
              type="number"
              min="1"
              max="500"
              value={auditHours}
              onChange={(e) => setAuditHours(e.target.value)}
              placeholder="40"
              className="bg-secondary/30"
            />
            <p className="text-xs text-muted-foreground">Include internal audits, corrective actions, document prep, surveillance prep, and reporting.</p>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="hourly-rate">Blended Hourly Rate for Compliance Staff (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                id="hourly-rate"
                type="number"
                min="20"
                max="500"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="pl-9 bg-secondary/30"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Current Operational Maturity Level *</Label>
            <Select value={maturity} onValueChange={setMaturity}>
              <SelectTrigger className="bg-secondary/30">
                <SelectValue placeholder="Select your maturity level" />
              </SelectTrigger>
              <SelectContent>
                {maturityLevels.map((l) => (
                  <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="duration">Contract Duration (months)</Label>
            <Input
              id="duration"
              type="number"
              min="1"
              max="60"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-secondary/30"
            />
          </div>
        </div>

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={!canSubmit}>
          Calculate My Maturity Premium <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </div>
  );
}

function ResultsDashboard({ inputs, results, userData }: { inputs: CalculatorInputs; results: CalculatorResults; userData: { name: string; company: string } }) {
  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const handleDownload = () => {
    generateReport({
      toolName: "Maturity Premium ROI Calculator",
      companyName: userData.company,
      contactName: userData.name,
      score: Math.round(results.roi),
      tier: `${results.roi.toFixed(0)}% ROI — Target: ${results.maturityUpgrade}`,
      findings: results.breakdownItems.map((item) => ({
        area: item.label,
        status: `Current: ${fmt(item.current)}`,
        recommendation: `Projected: ${fmt(item.projected)}`,
      })),
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">Maturity Premium ROI Calculator</p>
        <h2 className="!text-2xl md:!text-3xl mb-3">Your Maturity Premium Analysis</h2>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="card-elevated p-6 text-center">
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Projected Premium</p>
          <p className="font-serif text-3xl font-bold text-foreground">{fmt(results.projectedPremium)}</p>
          <p className="text-xs text-muted-foreground">+{results.projectedPremiumPct.toFixed(1)}% per year</p>
        </div>
        <div className="card-elevated p-6 text-center">
          <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Oversight Savings</p>
          <p className="font-serif text-3xl font-bold text-foreground">{fmt(results.currentOversightCost * maturityMultipliers[inputs.currentMaturity].oversightReduction)}</p>
          <p className="text-xs text-muted-foreground">per year</p>
        </div>
        <div className="card-elevated p-6 text-center">
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Net Benefit</p>
          <p className="font-serif text-3xl font-bold text-foreground">{fmt(results.netBenefit)}</p>
          <p className="text-xs text-muted-foreground">{results.roi.toFixed(0)}% ROI</p>
        </div>
      </div>

      {/* Breakdown Table */}
      <div className="card-elevated overflow-hidden mb-8">
        <div className="p-6 border-b border-border">
          <h3 className="!text-lg">Cost-Benefit Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Metric</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Current</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Projected</th>
              </tr>
            </thead>
            <tbody>
              {results.breakdownItems.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="px-6 py-4 font-medium">{item.label}</td>
                  <td className="px-6 py-4 text-right text-muted-foreground">{fmt(item.current)}</td>
                  <td className="px-6 py-4 text-right text-accent font-medium">{fmt(item.projected)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Maturity Upgrade */}
      <div className="card-elevated p-6 md:p-8 mb-8 border-l-4 border-accent">
        <h3 className="!text-lg mb-3">Target Maturity: {results.maturityUpgrade}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Moving from your current maturity level to "{results.maturityUpgrade}" would enable you to command a {(results.projectedPremiumPct * 100).toFixed(0)}% premium on your next bid while simultaneously reducing compliance overhead by {(maturityMultipliers[inputs.currentMaturity].oversightReduction * 100).toFixed(0)}%.
        </p>
        <p className="text-sm text-muted-foreground">
          Over a {inputs.contractDuration}-month contract, the combined benefit of higher pricing power and lower oversight costs yields a net gain of <span className="font-semibold text-foreground">{fmt(results.netBenefit)}</span>.
        </p>
      </div>

      {/* Recommended Actions */}
      <div className="card-elevated p-6 md:p-8 mb-8">
        <h3 className="!text-lg mb-4">Recommended Next Steps</h3>
        <ul className="space-y-3">
          {[
            "Conduct a formal QMS maturity assessment against ISO 9001 and contract-specific requirements",
            "Implement the ElevateQCS Maturity Staircase to systematically advance your operational rating",
            "Build a 'Maturity Evidence Portfolio' that demonstrates your upgraded capabilities to Prime evaluators",
            "Recalculate your pricing models to reflect the reduced oversight cost and higher-value positioning",
            "Request a confidential consultation to develop your maturity acceleration roadmap",
          ].map((action, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs text-accent font-bold">{i + 1}</span>
              </div>
              <span className="text-sm text-muted-foreground">{action}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[10px] text-muted-foreground/60 leading-relaxed mb-8">
        DISCLAIMER: This calculator provides estimates based on industry benchmarks and the inputs provided. Actual premiums and cost savings will vary based on contract type, competitive landscape, and implementation quality. This tool does not constitute financial or professional advice.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button variant="cta" size="lg" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" /> Download ROI Report
        </Button>
        <Button variant="cta" size="lg" asChild>
          <Link to="/contact">
            Discuss My Maturity Strategy <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>

      <div className="border-t border-border pt-8">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Related Insights</h4>
        <div className="space-y-3">
          {[
            { title: "Value Over Price: Why Primes Pay More for Maturity", slug: "value-over-price" },
            { title: "Why ISO 9001 Is Not the Goal — Operational Maturity Is", slug: "iso9001-operational-maturity" },
            { title: "Alliant 3 Operational Readiness", slug: "alliant3-operational-readiness" },
            { title: "GovCon Operational Maturity for Post-Award Execution", slug: "govcon-operational-maturity" },
          ].map((insight) => (
            <Link
              key={insight.slug}
              to={`/insights/${insight.slug}`}
              className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors group"
            >
              <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
              {insight.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function MaturityPremiumCalculator() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [inputs, setInputs] = useState<CalculatorInputs | null>(null);
  const [results, setResults] = useState<CalculatorResults | null>(null);

  const handleCalculate = async (data: CalculatorInputs) => {
    setInputs(data);
    const mult = maturityMultipliers[data.currentMaturity];
    const annualOversightCost = data.auditHoursPerMonth * data.hourlyRate * 12;
    const oversightPct = (annualOversightCost / data.contractValue) * 100;
    const projectedPremium = data.contractValue * mult.premiumPct;
    const projectedPremiumPct = mult.premiumPct;
    const oversightSavings = annualOversightCost * mult.oversightReduction;
    const annualNetBenefit = projectedPremium + oversightSavings;
    const totalNetBenefit = annualNetBenefit * (data.contractDuration / 12);
    const investmentEstimate = data.contractValue * 0.015; // ~1.5% of contract value for maturity investment
    const roi = ((totalNetBenefit - investmentEstimate) / investmentEstimate) * 100;

    const r: CalculatorResults = {
      currentOversightCost: annualOversightCost,
      currentOversightPct: oversightPct,
      projectedPremium,
      projectedPremiumPct,
      netBenefit: totalNetBenefit,
      roi,
      maturityUpgrade: mult.targetLevel,
      breakdownItems: [
        { label: "Annual Contract Value", current: data.contractValue, projected: data.contractValue + projectedPremium },
        { label: "Annual Oversight Cost", current: annualOversightCost, projected: annualOversightCost - oversightSavings },
        { label: "Net Operating Margin Impact", current: 0, projected: annualNetBenefit },
        { label: `Total Benefit (${data.contractDuration} months)`, current: 0, projected: totalNetBenefit },
      ],
    };

    setResults(r);
    try {
      await supabase.from("assessment_leads").update({
        score: Math.round(roi),
        tier: `${roi.toFixed(0)}% ROI`,
        tool_used: "Maturity Premium Calculator",
        date_completed: new Date().toISOString(),
        answers_json: data as any,
      }).eq("email", userData?.email ?? "");
    } catch {}
  };

  return (
    <Layout>
      <SEOHead
        title="Maturity Premium ROI Calculator — Contract Value Optimization | ElevateQCS"
        description="Calculate how much more you could charge and how much oversight cost you could eliminate by elevating your operational maturity rating. Data-backed ROI analysis for government contractors."
        url="https://elevateqcs.com/tools/maturity-premium-calculator"
        keywords={["maturity premium calculator", "ROI compliance investment", "government contractor pricing", "operational maturity ROI", "contract value optimization"]}
      />
      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />
          {isUnlocked && !results && <CalculatorForm onComplete={handleCalculate} />}
          {isUnlocked && results && inputs && userData && (
            <ResultsDashboard inputs={inputs} results={results} userData={{ name: userData.name, company: userData.company }} />
          )}
        </div>
      </section>
    </Layout>
  );
}
