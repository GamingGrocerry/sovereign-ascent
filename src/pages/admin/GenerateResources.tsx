import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { CheckCircle, Loader2, Upload, AlertCircle } from "lucide-react";
import {
  generateFarComplianceMatrix,
  generateProposalChecklist,
  generateCmmcGapAssessment,
  generateCtipAuditChecklist,
} from "@/utils/govconPdfs";
import {
  generateStartupSop,
  generateRiskRegister,
  generateComplianceRoadmap,
  generatePreIsoAssessment,
  generateInvestorCompliancePack,
} from "@/utils/startupPdfs";
import {
  generateCapaSubmission,
  generateMobilizationPlan,
  generateNcrFieldLog,
  generateOconusSafetyManual,
  generateCtipSurveillancePack,
  generatePwsRiskMapping,
} from "@/utils/poePdfs";

interface PdfTask {
  name: string;
  bucket: string;
  fileName: string;
  generator: () => Blob;
  status: "pending" | "uploading" | "done" | "error";
  error?: string;
}

const PDF_TASKS: PdfTask[] = [
  { name: "FAR Compliance Matrix Framework", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-001-FAR-Compliance-Matrix-Framework.pdf", generator: generateFarComplianceMatrix, status: "pending" },
  { name: "Proposal Compliance Checklist Framework", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-002-Proposal-Compliance-Checklist-Framework.pdf", generator: generateProposalChecklist, status: "pending" },
  { name: "CMMC 2.0 Gap Assessment Checklist Framework", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-006-CMMC-2.0-Gap-Assessment-Checklist-Framework.pdf", generator: generateCmmcGapAssessment, status: "pending" },
  { name: "CTIP 2026 Audit Readiness Checklist Framework", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-009-CTIP-2026-Audit-Readiness-Checklist-Framework.pdf", generator: generateCtipAuditChecklist, status: "pending" },
  { name: "Standard Operating Procedure Framework", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-001-Startup-SOP-Framework.pdf", generator: generateStartupSop, status: "pending" },
  { name: "Operational Risk Register Framework", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-004-Startup-Risk-Register-Framework.pdf", generator: generateRiskRegister, status: "pending" },
  { name: "Compliance Roadmap Framework", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-005-Startup-Compliance-Roadmap-Framework.pdf", generator: generateComplianceRoadmap, status: "pending" },
  { name: "Pre-ISO 9001 Self-Assessment Checklist Framework", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-006-Pre-ISO-Self-Assessment-Checklist-Framework.pdf", generator: generatePreIsoAssessment, status: "pending" },
  { name: "Investor Compliance Summary Pack Framework", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-007-Investor-Compliance-Summary-Pack-Framework.pdf", generator: generateInvestorCompliancePack, status: "pending" },
  { name: "CAPA Submission Framework", bucket: "elevateqcs-resourcesdocs-poe", fileName: "POE-DLV-001-CAPA-Submission-Framework.pdf", generator: generateCapaSubmission, status: "pending" },
  { name: "LOGCAP VI Mobilization & 96-Hour Readiness Plan", bucket: "elevateqcs-resourcesdocs-poe", fileName: "POE-DLV-002-LOGCAP-Mobilization-96-Hour-Readiness-Plan.pdf", generator: generateMobilizationPlan, status: "pending" },
  { name: "NCR Field Log & Resolution Tracker", bucket: "elevateqcs-resourcesdocs-poe", fileName: "POE-DLV-003-NCR-Field-Log-Resolution-Tracker.pdf", generator: generateNcrFieldLog, status: "pending" },
  { name: "OCONUS Site Safety (OSHA 2026) Manual Template", bucket: "elevateqcs-resourcesdocs-poe", fileName: "POE-DLV-004-OCONUS-Site-Safety-Manual-Template.pdf", generator: generateOconusSafetyManual, status: "pending" },
  { name: "Sub-tier CTIP Surveillance & Audit Pack", bucket: "elevateqcs-resourcesdocs-poe", fileName: "POE-DLV-005-CTIP-Surveillance-Audit-Pack.pdf", generator: generateCtipSurveillancePack, status: "pending" },
  { name: "PWS Risk Mapping Matrix", bucket: "elevateqcs-resourcesdocs-poe", fileName: "POE-DLV-006-PWS-Risk-Mapping-Matrix.pdf", generator: generatePwsRiskMapping, status: "pending" },
];

export default function GenerateResources() {
  const [tasks, setTasks] = useState<PdfTask[]>(PDF_TASKS);
  const [running, setRunning] = useState(false);

  const updateTask = (index: number, update: Partial<PdfTask>) => {
    setTasks((prev) => prev.map((t, i) => (i === index ? { ...t, ...update } : t)));
  };

  const handleGenerateAll = async () => {
    setRunning(true);
    for (let i = 0; i < tasks.length; i++) {
      updateTask(i, { status: "uploading" });
      try {
        const blob = tasks[i].generator();
        await supabase.storage.from(tasks[i].bucket).remove([tasks[i].fileName]);
        const { error } = await supabase.storage
          .from(tasks[i].bucket)
          .upload(tasks[i].fileName, blob, { contentType: "application/pdf", upsert: true });
        if (error) throw error;
        updateTask(i, { status: "done" });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        updateTask(i, { status: "error", error: msg });
      }
    }
    setRunning(false);
    toast.success("All PDFs generated and uploaded successfully.");
  };

  const completedCount = tasks.filter((t) => t.status === "done").length;

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-secondary/30">
        <div className="container-wide">
          <h1 className="mb-4">Resource PDF Generator</h1>
          <p className="text-muted-foreground mb-8">
            Generate all 15 branded Professional Framework PDFs and upload them to storage, replacing existing files.
          </p>
          <Button onClick={handleGenerateAll} disabled={running} className="bg-accent hover:bg-accent/90 text-accent-foreground mb-12" size="lg">
            {running ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating & Uploading…</>
            ) : (
              <><Upload className="mr-2 h-4 w-4" /> Generate & Upload All PDFs</>
            )}
          </Button>
          {completedCount > 0 && (
            <p className="text-sm text-muted-foreground mb-6">{completedCount} / {tasks.length} completed</p>
          )}
          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div key={i} className={`card-elevated p-5 flex items-center gap-4 ${task.status === "done" ? "border-green-500/30" : task.status === "error" ? "border-destructive/30" : ""}`}>
                <div className="flex-shrink-0">
                  {task.status === "done" ? <CheckCircle className="h-5 w-5 text-green-500" /> : task.status === "uploading" ? <Loader2 className="h-5 w-5 text-accent animate-spin" /> : task.status === "error" ? <AlertCircle className="h-5 w-5 text-destructive" /> : <div className="h-5 w-5 rounded-full border-2 border-border" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{task.name}</p>
                  <p className="text-xs text-muted-foreground">{task.bucket} / {task.fileName}</p>
                  {task.error && <p className="text-xs text-destructive mt-1">{task.error}</p>}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{task.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
