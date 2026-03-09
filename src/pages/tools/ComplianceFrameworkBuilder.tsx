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
    id: "industry",
    category: "Industry Context",
    question: "What is your primary industry?",
    type: "select",
    options: [
      { label: "Defense & Aerospace", value: "defense" },
      { label: "Medical Devices & Life Sciences", value: "medical" },
      { label: "Advanced Manufacturing", value: "manufacturing" },
      { label: "AI & Deep Tech", value: "ai" },
      { label: "Logistics & Supply Chain", value: "logistics" },
      { label: "Infrastructure & Engineering", value: "infrastructure" },
      { label: "Professional Services", value: "services" },
      { label: "Climate & Energy", value: "energy" },
    ],
  },
  {
    id: "geography",
    category: "Geographic Operations",
    question: "Where does your organisation primarily operate?",
    type: "select",
    options: [
      { label: "United States only", value: "us" },
      { label: "European Union only", value: "eu" },
      { label: "United States and European Union", value: "us_eu" },
      { label: "Global (multiple jurisdictions)", value: "global" },
    ],
  },
  {
    id: "gov_clients",
    category: "Government Exposure",
    question: "Does your organisation serve government clients or prime contractors?",
    type: "radio",
    options: [
      { label: "Yes — direct government contracts", value: "direct" },
      { label: "Yes — as a subcontractor to prime contractors", value: "sub" },
      { label: "Planning to enter government contracting", value: "planning" },
      { label: "No government exposure", value: "none" },
    ],
  },
  {
    id: "certifications",
    category: "Current Certifications",
    question: "Which certifications does your organisation currently hold?",
    description: "Select all that apply.",
    type: "multi-select",
    options: [
      { label: "ISO 9001", value: "iso9001" },
      { label: "ISO 27001", value: "iso27001" },
      { label: "ISO 14001", value: "iso14001" },
      { label: "AS9100 / AS9120", value: "as9100" },
      { label: "CMMI", value: "cmmi" },
      { label: "SOC 2", value: "soc2" },
      { label: "None", value: "none" },
    ],
  },
  {
    id: "workforce",
    category: "Workforce Size",
    question: "How many employees does your organisation have?",
    type: "radio",
    options: [
      { label: "1–50", value: "small" },
      { label: "51–250", value: "medium" },
      { label: "251–1,000", value: "large" },
      { label: "1,000+", value: "enterprise" },
    ],
  },
  {
    id: "supply_chain",
    category: "Supply Chain Complexity",
    question: "How complex is your supply chain?",
    type: "radio",
    options: [
      { label: "Simple — few direct suppliers, domestic", value: "simple" },
      { label: "Moderate — multiple suppliers, some international", value: "moderate" },
      { label: "Complex — multi-tier, international, high-risk regions", value: "complex" },
    ],
  },
];

interface FrameworkRec {
  name: string;
  reason: string;
  priority: "Critical" | "Recommended" | "Advantageous";
}

function buildFramework(answers: Record<string, string | string[]>): {
  frameworks: FrameworkRec[];
  roadmap: { phase: string; description: string }[];
  findings: { area: string; status: string; recommendation: string }[];
  tier: string;
} {
  const frameworks: FrameworkRec[] = [];
  const industry = answers.industry as string;
  const geography = answers.geography as string;
  const govClients = answers.gov_clients as string;
  const certs = (answers.certifications as string[]) || [];
  const supply = answers.supply_chain as string;

  // Base QMS
  if (!certs.includes("iso9001")) {
    frameworks.push({ name: "ISO 9001:2015 Quality Management System", reason: "Foundational quality infrastructure required for most regulated contract environments.", priority: "Critical" });
  }

  // Government clients
  if (govClients === "direct" || govClients === "sub") {
    frameworks.push({ name: "FAR/DFARS Compliance Framework", reason: "Required for organisations operating within U.S. government contract structures.", priority: "Critical" });
    frameworks.push({ name: "CTIP / FAR 52.222-50 Program", reason: "Anti-trafficking compliance required for federal contracts exceeding $550,000.", priority: "Critical" });
  } else if (govClients === "planning") {
    frameworks.push({ name: "FAR/DFARS Readiness Assessment", reason: "Pre-entry evaluation to identify gaps before pursuing government opportunities.", priority: "Recommended" });
  }

  // Industry-specific
  if (industry === "defense") {
    if (!certs.includes("as9100")) frameworks.push({ name: "AS9100D Aerospace Quality", reason: "Industry-standard quality framework for defence and aerospace supply chains.", priority: "Critical" });
    if (!certs.includes("iso27001")) frameworks.push({ name: "CMMC / Cybersecurity Maturity", reason: "DFARS 252.204-7021 requires CMMC certification for contracts involving CUI.", priority: "Critical" });
  }
  if (industry === "medical") {
    frameworks.push({ name: "ISO 13485 Medical Devices QMS", reason: "Required for medical device manufacturing and distribution.", priority: "Critical" });
    frameworks.push({ name: "FDA 21 CFR Part 820 Compliance", reason: "U.S. regulatory requirement for medical device quality systems.", priority: "Critical" });
  }
  if (industry === "ai") {
    frameworks.push({ name: "AI Governance & Ethics Framework", reason: "Emerging regulatory requirements for AI systems in defence and government.", priority: "Recommended" });
  }

  // EU exposure
  if (geography === "eu" || geography === "us_eu" || geography === "global") {
    frameworks.push({ name: "EU CS3D Supply Chain Due Diligence", reason: "European Corporate Sustainability Due Diligence Directive requiring supply chain human rights compliance.", priority: geography === "eu" ? "Critical" : "Recommended" });
  }

  // Supply chain complexity
  if (supply === "complex") {
    frameworks.push({ name: "Supply Chain Risk Management Program", reason: "Multi-tier international supply chains require structured risk management and supplier qualification.", priority: "Critical" });
  }

  // Cybersecurity
  if (!certs.includes("iso27001") && !certs.includes("soc2") && industry !== "defense") {
    frameworks.push({ name: "Information Security Framework (ISO 27001 / SOC 2)", reason: "Increasingly required by prime contractors and regulated industries for data protection.", priority: "Recommended" });
  }

  // Build roadmap
  const critical = frameworks.filter((f) => f.priority === "Critical");
  const recommended = frameworks.filter((f) => f.priority === "Recommended");
  const advantageous = frameworks.filter((f) => f.priority === "Advantageous");

  const roadmap = [
    { phase: "Phase 1 — Governance Foundation", description: `Establish core governance infrastructure: ${critical.slice(0, 3).map((f) => f.name).join(", ") || "quality management baseline"}.` },
    { phase: "Phase 2 — Regulatory Alignment", description: `Align operations with contractual requirements: ${(critical.slice(3).concat(recommended.slice(0, 2))).map((f) => f.name).join(", ") || "industry-specific certifications and regulatory compliance"}.` },
    { phase: "Phase 3 — Certification & Maturity", description: `Pursue formal certification and continuous improvement: ${recommended.slice(2).concat(advantageous).map((f) => f.name).join(", ") || "advanced maturity and competitive positioning"}.` },
  ];

  const findings = frameworks.map((f) => ({
    area: f.name,
    status: f.priority,
    recommendation: f.reason,
  }));

  const tier = critical.length === 0
    ? "Well-Positioned — Minor Enhancements Recommended"
    : critical.length <= 2
    ? "Partially Aligned — Critical Frameworks Required"
    : "Significant Gaps — Comprehensive Buildout Recommended";

  return { frameworks, roadmap, findings, tier };
}

export default function ComplianceFrameworkBuilder() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [showGate, setShowGate] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof buildFramework> | null>(null);
  const [answers, setAnswers] = useState<Record<string, string | string[]> | null>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleUnlock = async (data: { name: string; email: string; company: string; industry: string }) => {
    unlock(data);
    setShowGate(false);
    if (results && answers) {
      await supabase.from("assessment_leads").insert({
        name: data.name, email: data.email, company: data.company, industry: data.industry,
        consent: true, tool_used: "compliance-framework-builder", tier: results.tier,
        date_completed: new Date().toISOString(), answers_json: answers,
      });
    }
  };

  const handleComplete = async (submittedAnswers: Record<string, string | string[]>) => {
    const result = buildFramework(submittedAnswers);
    setAnswers(submittedAnswers);
    setResults(result);

    if (isUnlocked && userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
        consent: true, tool_used: "compliance-framework-builder", tier: result.tier,
        date_completed: new Date().toISOString(), answers_json: submittedAnswers,
      });
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Compliance Framework Builder | Regulatory Roadmap Tool | ElevateQCS"
        description="Build a tailored compliance roadmap based on your industry, geography, and government exposure. Map regulatory obligations into phased implementation."
        url="https://elevateqcs.com/tools/compliance-framework-builder"
        keywords={["compliance framework builder", "regulatory roadmap", "compliance planning tool", "ISO certification roadmap"]}
      />

      <ToolEmailGate open={showGate} onUnlock={handleUnlock} />

      <section className="pt-32 pb-8 bg-primary">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Diagnostic Tools
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Diagnostic Tool</p>
            <h1 className="text-primary-foreground mb-4">Compliance Framework Builder</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              Receive a tailored compliance roadmap based on your industry, regulatory environment, and operational complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {!started && !results && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="card-elevated p-12">
                <h2 className="mb-4">Build Your Compliance Roadmap</h2>
                <p className="text-muted-foreground mb-8">
                  Answer six questions about your industry, geography, government exposure, and existing certifications. The builder maps your regulatory obligations into a phased implementation plan.
                </p>
                <Button variant="cta" size="xl" onClick={handleStart}>Start Assessment</Button>
                <p className="text-xs text-muted-foreground mt-4">Takes approximately 2–4 minutes</p>
              </div>
            </div>
          )}

          {started && !results && (
            <AssessmentShell
              title="Compliance Framework Builder"
              estimatedTime="2–4 min"
              questions={questions}
              onComplete={handleComplete}
            />
          )}

          {results && (
            <ResultsPage
              toolName="Compliance Framework Builder"
              tier={results.tier}
              tierColor={
                results.tier.startsWith("Well") ? "bg-green-100 text-green-800" :
                results.tier.startsWith("Partially") ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              }
              tierDescription={
                results.tier.startsWith("Well")
                  ? "Your organisation demonstrates strong alignment with relevant regulatory requirements. Minor enhancements in specific areas can further strengthen your compliance posture."
                  : results.tier.startsWith("Partially")
                  ? "Your organisation has established some compliance infrastructure but critical frameworks remain unaddressed. A phased buildout is recommended."
                  : "Significant regulatory gaps exist across multiple domains. A comprehensive compliance buildout is recommended before pursuing contract opportunities in regulated markets."
              }
              findings={results.findings}
              roadmap={results.roadmap}
              recommendedActions={[
                "Fatal Flaw: Assuming a single ISO certification covers all regulatory obligations for your industry and geography.",
                "Fatal Flaw: Building compliance frameworks in isolation without mapping cross-jurisdictional overlap and conflict.",
                "Fatal Flaw: Treating compliance as a one-time project rather than a continuously maintained governance architecture.",
                "Fatal Flaw: Failing to phase implementation, resulting in resource exhaustion and incomplete controls across all frameworks.",
              ]}
              relatedInsights={[
                { title: "The Real Cost of Non-Compliance in Regulated Industries", slug: "cost-of-non-compliance" },
                { title: "Multi-Jurisdictional Compliance for International Operations", slug: "multi-jurisdictional-compliance" },
                { title: "ISO 9001 as an Operational Maturity Engine", slug: "iso9001-operational-maturity" },
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
