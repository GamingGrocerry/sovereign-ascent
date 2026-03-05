import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
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
  generateFarComplianceMatrixDocx,
  generateProposalChecklistDocx,
  generateCmmcGapAssessmentDocx,
  generateCtipAuditChecklistDocx,
} from "@/utils/govconDocx";
import {
  generateStartupSopDocx,
  generateRiskRegisterDocx,
  generateComplianceRoadmapDocx,
  generatePreIsoAssessmentDocx,
  generateInvestorCompliancePackDocx,
} from "@/utils/startupDocx";

interface FileTask {
  name: string;
  bucket: string;
  fileName: string;
  generator: () => Blob | Promise<Blob>;
  contentType: string;
  status: "pending" | "uploading" | "done" | "error";
  error?: string;
}

const FILE_TASKS: FileTask[] = [
  // ── GovCon PDFs ──
  { name: "FAR Compliance Matrix (PDF)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-001-FAR-Compliance-Matrix-Framework.pdf", generator: generateFarComplianceMatrix, contentType: "application/pdf", status: "pending" },
  { name: "Proposal Compliance Checklist (PDF)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-002-Proposal-Compliance-Checklist-Framework.pdf", generator: generateProposalChecklist, contentType: "application/pdf", status: "pending" },
  { name: "CMMC 2.0 Gap Assessment (PDF)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-006-CMMC-2.0-Gap-Assessment-Checklist-Framework.pdf", generator: generateCmmcGapAssessment, contentType: "application/pdf", status: "pending" },
  { name: "CTIP 2026 Audit Readiness (PDF)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-009-CTIP-2026-Audit-Readiness-Checklist-Framework.pdf", generator: generateCtipAuditChecklist, contentType: "application/pdf", status: "pending" },
  // ── GovCon DOCX ──
  { name: "FAR Compliance Matrix (DOCX)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-001-FAR-Compliance-Matrix-Framework.docx", generator: generateFarComplianceMatrixDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "Proposal Compliance Checklist (DOCX)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-002-Proposal-Compliance-Checklist-Framework.docx", generator: generateProposalChecklistDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "CMMC 2.0 Gap Assessment (DOCX)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-006-CMMC-2.0-Gap-Assessment-Checklist-Framework.docx", generator: generateCmmcGapAssessmentDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "CTIP 2026 Audit Readiness (DOCX)", bucket: "elevateqcs-resourcesdocs-govcon", fileName: "EFC-DLV-009-CTIP-2026-Audit-Readiness-Checklist-Framework.docx", generator: generateCtipAuditChecklistDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  // ── Startup PDFs ──
  { name: "Standard Operating Procedure (PDF)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-001-Startup-SOP-Framework.pdf", generator: generateStartupSop, contentType: "application/pdf", status: "pending" },
  { name: "Operational Risk Register (PDF)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-004-Startup-Risk-Register-Framework.pdf", generator: generateRiskRegister, contentType: "application/pdf", status: "pending" },
  { name: "Compliance Roadmap (PDF)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-005-Startup-Compliance-Roadmap-Framework.pdf", generator: generateComplianceRoadmap, contentType: "application/pdf", status: "pending" },
  { name: "Pre-ISO 9001 Self-Assessment (PDF)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-006-Pre-ISO-Self-Assessment-Checklist-Framework.pdf", generator: generatePreIsoAssessment, contentType: "application/pdf", status: "pending" },
  { name: "Investor Compliance Pack (PDF)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-007-Investor-Compliance-Summary-Pack-Framework.pdf", generator: generateInvestorCompliancePack, contentType: "application/pdf", status: "pending" },
  // ── Startup DOCX ──
  { name: "Standard Operating Procedure (DOCX)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-001-Startup-SOP-Framework.docx", generator: generateStartupSopDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "Operational Risk Register (DOCX)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-004-Startup-Risk-Register-Framework.docx", generator: generateRiskRegisterDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "Compliance Roadmap (DOCX)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-005-Startup-Compliance-Roadmap-Framework.docx", generator: generateComplianceRoadmapDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "Pre-ISO 9001 Self-Assessment (DOCX)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-006-Pre-ISO-Self-Assessment-Checklist-Framework.docx", generator: generatePreIsoAssessmentDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
  { name: "Investor Compliance Pack (DOCX)", bucket: "elevateqcs-resourcesdocs-startups", fileName: "RMO-DLV-007-Investor-Compliance-Summary-Pack-Framework.docx", generator: generateInvestorCompliancePackDocx, contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", status: "pending" },
];

export default function GenerateResources() {
  const [tasks, setTasks] = useState<FileTask[]>(FILE_TASKS);
  const [running, setRunning] = useState(false);

  const updateTask = (index: number, update: Partial<FileTask>) => {
    setTasks((prev) => prev.map((t, i) => (i === index ? { ...t, ...update } : t)));
  };

  const handleGenerateAll = async () => {
    setRunning(true);

    for (let i = 0; i < tasks.length; i++) {
      updateTask(i, { status: "uploading" });

      try {
        const blob = await Promise.resolve(tasks[i].generator());

        await supabase.storage.from(tasks[i].bucket).remove([tasks[i].fileName]);

        const { error } = await supabase.storage
          .from(tasks[i].bucket)
          .upload(tasks[i].fileName, blob, {
            contentType: tasks[i].contentType,
            upsert: true,
          });

        if (error) throw error;
        updateTask(i, { status: "done" });
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        updateTask(i, { status: "error", error: msg });
      }
    }

    setRunning(false);
    toast.success("All files generated and uploaded successfully.");
  };

  const completedCount = tasks.filter((t) => t.status === "done").length;

  return (
    <Layout>
      <section className="pt-32 pb-24 bg-secondary/30">
        <div className="container-wide">
          <h1 className="mb-4">Resource File Generator</h1>
          <p className="text-muted-foreground mb-8">
            Generate all {tasks.length} branded Professional Framework files (PDF + DOCX) and upload them to
            storage, replacing existing files.
          </p>

          <Button
            onClick={handleGenerateAll}
            disabled={running}
            className="bg-accent hover:bg-accent/90 text-accent-foreground mb-12"
            size="lg"
          >
            {running ? (
              <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Generating & Uploading…</>
            ) : (
              <><Upload className="mr-2 h-4 w-4" /> Generate & Upload All Files</>
            )}
          </Button>

          {completedCount > 0 && (
            <p className="text-sm text-muted-foreground mb-6">
              {completedCount} / {tasks.length} completed
            </p>
          )}

          <div className="space-y-3">
            {tasks.map((task, i) => (
              <div
                key={i}
                className={`card-elevated p-5 flex items-center gap-4 ${
                  task.status === "done" ? "border-green-500/30" : 
                  task.status === "error" ? "border-destructive/30" : ""
                }`}
              >
                <div className="flex-shrink-0">
                  {task.status === "done" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : task.status === "uploading" ? (
                    <Loader2 className="h-5 w-5 text-accent animate-spin" />
                  ) : task.status === "error" ? (
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-border" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{task.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {task.bucket} / {task.fileName}
                  </p>
                  {task.error && (
                    <p className="text-xs text-destructive mt-1">{task.error}</p>
                  )}
                </div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
