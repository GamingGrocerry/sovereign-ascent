import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Shield, AlertTriangle, CheckCircle, Lock, Download, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const questions = [
  {
    id: "labor-agencies",
    question: "Do you use third-party labor agencies or brokers for driver recruitment?",
    options: [
      { label: "Yes — we rely on third-party agencies for some or all recruitment", value: "yes" },
      { label: "No — all hiring is managed internally", value: "no" },
      { label: "Unsure — we have not audited our recruitment chain", value: "unsure" },
    ],
  },
  {
    id: "employer-pays",
    question: "Do you have a written 'Employer Pays' recruitment policy?",
    options: [
      { label: "Yes — documented and enforced across all tiers", value: "yes" },
      { label: "Partially — policy exists but enforcement is inconsistent", value: "partial" },
      { label: "No — no formal policy in place", value: "no" },
    ],
  },
  {
    id: "housing-audit",
    question: "Do you audit sub-tier housing and document controls for workers?",
    options: [
      { label: "Yes — regular audits with documented findings", value: "yes" },
      { label: "Occasionally — audits are ad hoc or informal", value: "occasional" },
      { label: "No — no sub-tier housing audits conducted", value: "no" },
    ],
  },
];

function getRiskLevel(answers: Record<string, string>): { level: string; score: number; color: string; icon: typeof Shield } {
  let risk = 0;
  if (answers["labor-agencies"] === "yes") risk += 2;
  if (answers["labor-agencies"] === "unsure") risk += 3;
  if (answers["employer-pays"] === "no") risk += 3;
  if (answers["employer-pays"] === "partial") risk += 1;
  if (answers["housing-audit"] === "no") risk += 3;
  if (answers["housing-audit"] === "occasional") risk += 1;

  if (risk >= 6) return { level: "High Risk", score: risk, color: "text-destructive", icon: AlertTriangle };
  if (risk >= 3) return { level: "Moderate Risk", score: risk, color: "text-amber-500", icon: Shield };
  return { level: "Low Risk", score: risk, color: "text-emerald-500", icon: CheckCircle };
}

async function generateLogisticsPDF() {
  let logoDataUri = "";
  try {
    const response = await fetch("/logos/elevatequcs-report-logo.png");
    const blob = await response.blob();
    logoDataUri = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(blob);
    });
  } catch {}

  const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><title>ElevateQCS: Logistics CTIP Compliance Roadmap</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Segoe UI',system-ui,sans-serif;color:#1a1f36;line-height:1.7;padding:40px 50px;max-width:900px;margin:0 auto}
.header{display:flex;align-items:center;gap:16px;border-bottom:3px solid #c9a84c;padding-bottom:20px;margin-bottom:30px}
.header img{height:44px;width:auto}
.header h1{font-size:14px;color:#0f172a;letter-spacing:0.08em;text-transform:uppercase;font-weight:600}
h2{color:#0f172a;font-size:20px;margin:28px 0 14px;border-left:4px solid #c9a84c;padding-left:14px}
h3{color:#1e293b;font-size:16px;margin:20px 0 10px}
p{margin:0 0 12px;font-size:14px;color:#334155}
ul{margin:0 0 16px 20px;font-size:14px;color:#334155}
li{margin-bottom:6px}
.checklist{background:#f8fafc;border:1px solid #e2e8f0;border-radius:6px;padding:20px 24px;margin:20px 0}
.checklist h3{margin-top:0;color:#0f172a}
.check-item{display:flex;align-items:flex-start;gap:10px;margin:8px 0;font-size:14px;color:#334155}
.check-item::before{content:"☐";font-size:16px;flex-shrink:0;color:#c9a84c}
.footer{margin-top:40px;padding-top:20px;border-top:2px solid #e2e8f0;font-size:11px;color:#94a3b8;text-align:center}
.disclaimer{background:#fffbeb;border:1px solid #fde68a;border-radius:6px;padding:16px;margin:24px 0;font-size:12px;color:#92400e}
</style></head><body>
<div class="header">
${logoDataUri ? `<img src="${logoDataUri}" alt="ElevateQCS" />` : ""}
<h1>Logistics CTIP Compliance Roadmap</h1>
</div>

<h2>FAR 52.222-50 Requirements Summary</h2>
<p>Contracts exceeding $550,000 with performance outside the United States require a formal Combating Trafficking in Persons (CTIP) compliance plan. Key obligations include:</p>
<ul>
<li>Prohibition of trafficking-related activities by contractor, employees, and agents</li>
<li>Written compliance plan with awareness program, recruitment practices, and housing standards</li>
<li>Flow-down of CTIP requirements to all subcontractors</li>
<li>Reporting mechanisms accessible to all workers at every tier</li>
<li>Corrective action procedures for identified violations</li>
</ul>

<h2>Labor Broker Audit Checklist</h2>
<div class="checklist">
<h3>Recruitment Practices</h3>
<div class="check-item">Verify written "Employer Pays" recruitment policy is in place</div>
<div class="check-item">Confirm zero recruitment fees charged to workers at all tiers</div>
<div class="check-item">Audit labor broker fee structures for hidden cost allocations</div>
<div class="check-item">Document verification of broker licensing and regulatory compliance</div>
<div class="check-item">Review employment contracts for coercive or deceptive terms</div>
</div>

<div class="checklist">
<h3>Document & Housing Controls</h3>
<div class="check-item">Confirm no passport or identity document confiscation at any tier</div>
<div class="check-item">Verify worker access to personal documents at all times</div>
<div class="check-item">Audit employer-provided housing for safety and habitability</div>
<div class="check-item">Assess housing conditions against local and federal standards</div>
<div class="check-item">Document housing inspection results with photographic evidence</div>
</div>

<div class="checklist">
<h3>Supply Chain Due Diligence</h3>
<div class="check-item">Map complete labor supply chain from Tier 1 to individual workers</div>
<div class="check-item">Conduct risk assessments for each sub-tier labor provider</div>
<div class="check-item">Verify CTIP compliance plan flow-down to all subcontractors</div>
<div class="check-item">Establish monitoring schedule for high-risk sub-tier entities</div>
<div class="check-item">Maintain documented corrective action records for identified gaps</div>
</div>

<div class="checklist">
<h3>Training & Incident Response</h3>
<div class="check-item">Deliver role-specific CTIP training (not generic slide decks)</div>
<div class="check-item">Verify comprehension through testing, not just attendance records</div>
<div class="check-item">Ensure reporting channels are accessible to all worker tiers</div>
<div class="check-item">Test incident response protocols at least annually</div>
<div class="check-item">Document agency notification procedures and escalation timelines</div>
</div>

<div class="disclaimer">
<strong>DISCLAIMER:</strong> This checklist is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, regulatory, or professional advice. Users are solely responsible for ensuring compliance with applicable laws and regulations. For customized implementation support, contact info@elevateqcs.com.
</div>

<div class="footer">
<p>© ${new Date().getFullYear()} Elevate Quality Compliance Solutions LLC — elevateqcs.com</p>
<p>Generated ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
</div>
</body></html>`;

  const blob = new Blob([html], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "ElevateQCS-Logistics-CTIP-Compliance-Roadmap.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function LogisticsRiskAssessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showGate, setShowGate] = useState(false);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const startTime = useRef(Date.now());

  const q = questions[currentQ];
  const currentAnswer = answers[q.id];
  const allAnswered = Object.keys(answers).length === questions.length;
  const result = allAnswered ? getRiskLevel(answers) : null;

  const handleAnswer = (value: string) => {
    const updated = { ...answers, [q.id]: value };
    setAnswers(updated);

    if (currentQ < questions.length - 1) {
      setTimeout(() => setCurrentQ((i) => i + 1), 300);
    } else if (Object.keys(updated).length === questions.length) {
      // All answered — show gate
      setTimeout(() => setShowGate(true), 500);
    }
  };

  const handleSubmitEmail = async () => {
    if (!email || !consent) return;
    setSubmitting(true);
    try {
      const elapsed = Math.round((Date.now() - startTime.current) / 1000);
      const riskResult = getRiskLevel(answers);
      await supabase.from("assessment_leads").insert({
        name: "",
        email,
        company: "",
        industry: "Logistics",
        consent,
        tool_used: "CTIP-Logistics-Quick-Check",
        score: riskResult.score,
        tier: riskResult.level,
        date_completed: new Date().toISOString(),
        time_to_complete: elapsed,
        answers_json: answers,
      });
      setUnlocked(true);
      setShowGate(false);
      toast.success("Your risk assessment is ready.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const ResultIcon = result?.icon || Shield;

  return (
    <div className="my-12 border border-border rounded-sm overflow-hidden bg-secondary/20">
      {/* Header */}
      <div className="bg-primary px-6 py-4 flex items-center gap-3">
        <Shield className="w-5 h-5 text-accent" />
        <div>
          <h4 className="text-primary-foreground text-base font-semibold m-0">
            Logistics CTIP Risk Assessment
          </h4>
          <p className="text-primary-foreground/60 text-xs m-0">
            3 questions · 60 seconds
          </p>
        </div>
      </div>

      <div className="p-6">
        {/* Questions */}
        {!allAnswered && (
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">
              Question {currentQ + 1} of {questions.length}
            </p>
            <h5 className="text-base font-medium mb-4 text-foreground">{q.question}</h5>
            <RadioGroup
              value={currentAnswer || ""}
              onValueChange={handleAnswer}
              className="space-y-2"
            >
              {q.options.map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-3 p-3 rounded-sm border cursor-pointer transition-all duration-200 ${
                    currentAnswer === opt.value
                      ? "border-accent bg-accent/5"
                      : "border-border hover:border-accent/30 hover:bg-secondary/30"
                  }`}
                >
                  <RadioGroupItem value={opt.value} id={`lra-${q.id}-${opt.value}`} />
                  <Label htmlFor={`lra-${q.id}-${opt.value}`} className="cursor-pointer text-sm font-normal flex-1">
                    {opt.label}
                  </Label>
                </label>
              ))}
            </RadioGroup>
            {currentQ > 0 && (
              <button
                onClick={() => setCurrentQ((i) => i - 1)}
                className="text-xs text-muted-foreground hover:text-accent mt-3 transition-colors"
              >
                ← Previous question
              </button>
            )}
          </div>
        )}

        {/* Blurred Result (before email) */}
        {allAnswered && !unlocked && (
          <div className="relative">
            <div className="blur-md select-none pointer-events-none">
              <div className="flex items-center gap-3 mb-3">
                <ResultIcon className={`w-6 h-6 ${result?.color}`} />
                <span className={`text-lg font-semibold ${result?.color}`}>{result?.level}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your logistics operation shows indicators that require structured CTIP program review.
              </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setShowGate(true)}
                className="flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-sm text-sm font-medium hover:bg-accent/90 transition-colors shadow-lg"
              >
                <Lock className="w-4 h-4" />
                Unlock Your CTIP Risk Score
              </button>
            </div>
          </div>
        )}

        {/* Unlocked Result */}
        {allAnswered && unlocked && result && (
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ResultIcon className={`w-6 h-6 ${result.color}`} />
              <span className={`text-lg font-semibold ${result.color}`}>{result.level}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {result.level === "High Risk"
                ? "Your logistics operation has significant CTIP compliance gaps that require immediate structural remediation. Download the roadmap below for actionable next steps."
                : result.level === "Moderate Risk"
                ? "Your logistics operation shows partial compliance but lacks the governance depth that enforcement reviews require. The roadmap below identifies priority areas."
                : "Your logistics operation demonstrates foundational CTIP controls. The roadmap below can help identify areas for continuous improvement."}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="sm" onClick={generateLogisticsPDF}>
                <Download className="w-4 h-4 mr-2" />
                Download Compliance Roadmap
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="/tools">
                  Take Full GovCon Readiness Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Email Gate Dialog */}
      <Dialog open={showGate} onOpenChange={setShowGate}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>See Your CTIP Risk Score</DialogTitle>
            <DialogDescription>
              Enter your email to unlock your risk assessment results and download the 2026 Logistics CTIP Compliance Checklist (PDF).
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <Input
              type="email"
              placeholder="Business email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={consent}
                onCheckedChange={(v) => setConsent(v === true)}
                className="mt-0.5"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                I consent to ElevateQCS storing my email address for the purpose of delivering this assessment. View our{" "}
                <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
              </span>
            </label>
            <Button
              variant="cta"
              className="w-full"
              disabled={!email || !consent || submitting}
              onClick={handleSubmitEmail}
            >
              {submitting ? "Processing…" : "Unlock Results"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
