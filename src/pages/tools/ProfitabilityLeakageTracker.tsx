import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight, DollarSign, TrendingDown, TrendingUp, ChevronRight, Download, AlertTriangle } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { supabase } from "@/integrations/supabase/client";
import { generateReport } from "@/components/tools/generateReport";

interface TrackerInputs {
  contractValue: number;
  contractType: string;
  complianceStaffCount: number;
  avgSalary: number;
  manualProcessHours: number;
  reWorkPct: number;
  auditPrepDays: number;
  contractDuration: number;
}

interface TrackerResults {
  annualLeakage: number;
  leakagePct: number;
  leakageBreakdown: { label: string; amount: number; description: string }[];
  recoverableAmount: number;
  digitalGovROI: number;
  tier: string;
  tierColor: string;
  tierDescription: string;
}

const contractTypes = [
  { value: "ffp", label: "Firm-Fixed-Price (FFP)" },
  { value: "cpff", label: "Cost-Plus-Fixed-Fee (CPFF)" },
  { value: "cpaf", label: "Cost-Plus-Award-Fee (CPAF)" },
  { value: "time-materials", label: "Time & Materials (T&M)" },
  { value: "idiq", label: "IDIQ / Task Order" },
];

function CalculatorForm({ onComplete }: { onComplete: (inputs: TrackerInputs) => void }) {
  const [contractValue, setContractValue] = useState("");
  const [contractType, setContractType] = useState("");
  const [complianceStaff, setComplianceStaff] = useState("3");
  const [avgSalary, setAvgSalary] = useState("75000");
  const [manualHours, setManualHours] = useState("80");
  const [reWorkPct, setReWorkPct] = useState("15");
  const [auditPrepDays, setAuditPrepDays] = useState("10");
  const [duration, setDuration] = useState("12");

  const canSubmit = contractValue && contractType;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    onComplete({
      contractValue: parseFloat(contractValue),
      contractType,
      complianceStaffCount: parseInt(complianceStaff),
      avgSalary: parseFloat(avgSalary),
      manualProcessHours: parseFloat(manualHours),
      reWorkPct: parseFloat(reWorkPct) / 100,
      auditPrepDays: parseInt(auditPrepDays),
      contractDuration: parseInt(duration),
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">Post-Award Profitability Leakage Tracker</p>
        <h2 className="!text-2xl md:!text-3xl mb-3">Calculate Your Profit Leakage</h2>
        <p className="text-muted-foreground">
          Discover how much profit is being consumed by inefficient manual governance, rework, and reactive audit preparation — and how much you could recover through digital governance.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="card-elevated p-6 md:p-8 space-y-5">
          <div className="space-y-1.5">
            <Label htmlFor="pl-contract-value">Annual Contract Value (USD) *</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input id="pl-contract-value" type="number" min="50000" step="1000" value={contractValue} onChange={(e) => setContractValue(e.target.value)} placeholder="5,000,000" className="pl-9 bg-secondary/30" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label>Contract Type *</Label>
            <Select value={contractType} onValueChange={setContractType}>
              <SelectTrigger className="bg-secondary/30"><SelectValue placeholder="Select contract type" /></SelectTrigger>
              <SelectContent>
                {contractTypes.map((ct) => <SelectItem key={ct.value} value={ct.value}>{ct.label}</SelectItem>)}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">FFP contracts absorb compliance costs directly from margin. Cost-Plus contracts pass costs but reduce competitiveness.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="pl-staff">Compliance Staff Count</Label>
              <Input id="pl-staff" type="number" min="1" max="50" value={complianceStaff} onChange={(e) => setComplianceStaff(e.target.value)} className="bg-secondary/30" />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pl-salary">Avg. Annual Salary (USD)</Label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input id="pl-salary" type="number" min="30000" step="1000" value={avgSalary} onChange={(e) => setAvgSalary(e.target.value)} className="pl-9 bg-secondary/30" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="pl-manual">Hours/Month Spent on Manual Compliance Processes</Label>
            <Input id="pl-manual" type="number" min="1" max="500" value={manualHours} onChange={(e) => setManualHours(e.target.value)} className="bg-secondary/30" />
            <p className="text-xs text-muted-foreground">Include document formatting, manual data entry, spreadsheet tracking, email-based approvals.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="pl-rework">Rework Rate (%)</Label>
              <Input id="pl-rework" type="number" min="0" max="50" value={reWorkPct} onChange={(e) => setReWorkPct(e.target.value)} className="bg-secondary/30" />
              <p className="text-xs text-muted-foreground">% of deliverables requiring revision due to compliance errors.</p>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pl-audit-days">Days to Prepare for an Audit</Label>
              <Input id="pl-audit-days" type="number" min="1" max="60" value={auditPrepDays} onChange={(e) => setAuditPrepDays(e.target.value)} className="bg-secondary/30" />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="pl-duration">Contract Duration (months)</Label>
            <Input id="pl-duration" type="number" min="1" max="60" value={duration} onChange={(e) => setDuration(e.target.value)} className="bg-secondary/30" />
          </div>
        </div>

        <Button type="submit" variant="cta" size="lg" className="w-full" disabled={!canSubmit}>
          Calculate Profit Leakage <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>
    </div>
  );
}

function ResultsDashboard({ inputs, results, userData }: { inputs: TrackerInputs; results: TrackerResults; userData: { name: string; company: string } }) {
  const fmt = (n: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

  const handleDownload = () => {
    generateReport({
      toolName: "Post-Award Profitability Leakage Tracker",
      companyName: userData.company,
      contactName: userData.name,
      score: Math.round(results.leakagePct * 10),
      tier: results.tier,
      findings: results.leakageBreakdown.map((item) => ({
        area: item.label,
        status: fmt(item.amount),
        recommendation: item.description,
      })),
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">Post-Award Profitability Leakage Tracker</p>
        <h2 className="!text-2xl md:!text-3xl mb-3">Your Profitability Analysis</h2>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <div className="card-elevated p-6 text-center">
          <TrendingDown className="w-6 h-6 text-destructive mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Annual Profit Leakage</p>
          <p className="font-serif text-3xl font-bold text-destructive">{fmt(results.annualLeakage)}</p>
          <p className="text-xs text-muted-foreground">{results.leakagePct.toFixed(1)}% of contract value</p>
        </div>
        <div className="card-elevated p-6 text-center">
          <TrendingUp className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Recoverable Amount</p>
          <p className="font-serif text-3xl font-bold text-accent">{fmt(results.recoverableAmount)}</p>
          <p className="text-xs text-muted-foreground">with Digital Governance</p>
        </div>
        <div className="card-elevated p-6 text-center">
          <DollarSign className="w-6 h-6 text-accent mx-auto mb-2" />
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Digital Governance ROI</p>
          <p className="font-serif text-3xl font-bold text-foreground">{results.digitalGovROI.toFixed(0)}%</p>
          <p className="text-xs text-muted-foreground">first-year return</p>
        </div>
      </div>

      {/* Leakage Breakdown */}
      <div className="card-elevated overflow-hidden mb-8">
        <div className="p-6 border-b border-border">
          <h3 className="!text-lg">Leakage Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Source</th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Annual Cost</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Impact</th>
              </tr>
            </thead>
            <tbody>
              {results.leakageBreakdown.map((item, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="px-6 py-4 font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive/60" />
                    {item.label}
                  </td>
                  <td className="px-6 py-4 text-right text-destructive font-medium">{fmt(item.amount)}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contract Type Analysis */}
      <div className="card-elevated p-6 md:p-8 mb-8 border-l-4 border-accent">
        <h3 className="!text-lg mb-3">Contract Type Impact: {contractTypes.find((c) => c.value === inputs.contractType)?.label}</h3>
        <p className="text-sm text-muted-foreground">
          {inputs.contractType === "ffp"
            ? `Under Firm-Fixed-Price, every dollar of compliance inefficiency comes directly from your margin. Your current leakage of ${fmt(results.annualLeakage)} represents profit that should be on your bottom line.`
            : inputs.contractType === "cpff" || inputs.contractType === "cpaf"
            ? `Under Cost-Plus contracts, compliance costs are reimbursable — but excessive overhead reduces your competitiveness for future awards. Primes see ${results.leakagePct.toFixed(1)}% overhead as a cost management failure.`
            : `Your current governance overhead affects both pricing competitiveness and delivery margin. Digital Governance reduces both, improving win rates and profitability simultaneously.`
          }
        </p>
      </div>

      {/* Recommended Actions */}
      <div className="card-elevated p-6 md:p-8 mb-8">
        <h3 className="!text-lg mb-4">Recommended Next Steps</h3>
        <ul className="space-y-3">
          {[
            "Implement a digital compliance management platform to eliminate manual document processing",
            "Automate audit preparation with continuous compliance monitoring (reduce prep from days to hours)",
            "Deploy standardized templates and workflows to eliminate rework from compliance formatting errors",
            "Transition from reactive audit response to proactive compliance dashboards",
            "Request a Digital Governance ROI consultation tailored to your specific contract portfolio",
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
        DISCLAIMER: This calculator provides estimates based on industry benchmarks and the inputs provided. Actual leakage and recovery amounts will vary based on contract specifics, organizational maturity, and implementation approach. This tool does not constitute financial or professional advice.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button variant="cta" size="lg" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" /> Download Leakage Report
        </Button>
        <Button variant="cta" size="lg" asChild>
          <Link to="/contact">Discuss Digital Governance <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </div>

      <div className="border-t border-border pt-8">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Related Insights</h4>
        <div className="space-y-3">
          {[
            { title: "Why Operational Maturity Dictates Profitability", slug: "govcon-operational-maturity" },
            { title: "Value Over Price: Why Primes Pay More for Maturity", slug: "value-over-price" },
            { title: "ISO 9001 Is Not the Goal — Operational Maturity Is", slug: "iso9001-operational-maturity" },
            { title: "Alliant 3 Operational Readiness", slug: "alliant3-operational-readiness" },
          ].map((insight) => (
            <Link key={insight.slug} to={`/insights/${insight.slug}`} className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors group">
              <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
              {insight.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProfitabilityLeakageTracker() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [inputs, setInputs] = useState<TrackerInputs | null>(null);
  const [results, setResults] = useState<TrackerResults | null>(null);

  const handleCalculate = async (data: TrackerInputs) => {
    setInputs(data);

    const hourlyRate = data.avgSalary / 2080;
    const manualProcessCost = data.manualProcessHours * hourlyRate * 12;
    const reworkCost = data.contractValue * data.reWorkPct * 0.3;
    const auditPrepCost = data.auditPrepDays * 8 * hourlyRate * data.complianceStaffCount * 2;
    const staffOverheadPremium = data.complianceStaffCount * data.avgSalary * 0.15;

    const annualLeakage = manualProcessCost + reworkCost + auditPrepCost + staffOverheadPremium;
    const leakagePct = (annualLeakage / data.contractValue) * 100;

    const recoveryRate = data.contractType === "ffp" ? 0.60 : 0.45;
    const recoverableAmount = annualLeakage * recoveryRate;
    const digitalGovInvestment = data.contractValue * 0.02;
    const digitalGovROI = ((recoverableAmount - digitalGovInvestment) / digitalGovInvestment) * 100;

    let tier: string, tierColor: string, tierDescription: string;
    if (leakagePct <= 3) {
      tier = "Efficient — Low Leakage"; tierColor = "bg-green-100 text-green-800";
      tierDescription = "Your governance overhead is within industry benchmarks. Focus on maintaining efficiency and exploring automation for remaining manual processes.";
    } else if (leakagePct <= 8) {
      tier = "Moderate Leakage — Optimization Opportunity"; tierColor = "bg-yellow-100 text-yellow-800";
      tierDescription = "Your compliance overhead is above optimal levels. Targeted automation of manual processes and standardized workflows could recover significant margin.";
    } else {
      tier = "High Leakage — Urgent Margin Recovery Needed"; tierColor = "bg-red-100 text-red-800";
      tierDescription = "Your governance costs are significantly eroding contract profitability. Without intervention, this leakage compounds with each contract year. Digital Governance transformation is recommended.";
    }

    const r: TrackerResults = {
      annualLeakage, leakagePct, recoverableAmount, digitalGovROI, tier, tierColor, tierDescription,
      leakageBreakdown: [
        { label: "Manual Compliance Processing", amount: manualProcessCost, description: `${data.manualProcessHours} hrs/month of manual document processing, data entry, and spreadsheet tracking` },
        { label: "Rework & Error Correction", amount: reworkCost, description: `${(data.reWorkPct * 100).toFixed(0)}% rework rate on compliance deliverables due to formatting errors and version control issues` },
        { label: "Reactive Audit Preparation", amount: auditPrepCost, description: `${data.auditPrepDays} days of emergency prep per audit instead of continuous readiness` },
        { label: "Staff Overhead Premium", amount: staffOverheadPremium, description: `Additional overhead from ${data.complianceStaffCount} staff compensating for lack of automation` },
      ],
    };

    setResults(r);

    if (userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
        consent: true, tool_used: "profitability-leakage-tracker", score: Math.round(leakagePct * 10),
        tier, date_completed: new Date().toISOString(), answers_json: data as any,
      });
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Post-Award Profitability Leakage Tracker | Contract Margin Optimization | ElevateQCS"
        description="Calculate how much profit is being consumed by inefficient manual governance. Discover the ROI of Digital Governance for government contractors."
        url="https://elevateqcs.com/tools/profitability-leakage-tracker"
        keywords={["profitability leakage", "contract margin optimization", "digital governance ROI", "compliance cost reduction", "government contractor profitability"]}
      />
      <section className="py-20 pt-32 bg-background">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-sm text-muted-foreground hover:text-accent mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
          </Link>
          <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />
          {isUnlocked && !results && <CalculatorForm onComplete={handleCalculate} />}
          {isUnlocked && results && inputs && userData && (
            <ResultsDashboard inputs={inputs} results={results} userData={userData} />
          )}
        </div>
      </section>
    </Layout>
  );
}
