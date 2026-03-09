import { ArrowRight } from "lucide-react";
import type { SectorMode } from "./CapabilitiesData";

interface InstitutionalLogicProps {
  mode: SectorMode;
}

const federalSteps = [
  { label: "Defense-Grade QMS", sublabel: "ISO 9001 · AS9100 · CMMC" },
  { label: "Regulatory Architecture", sublabel: "FAR · DFARS · NIST 800-171" },
  { label: "Audit-Ready Operations", sublabel: "Continuous compliance posture" },
  { label: "Contract Protection", sublabel: "CAR mitigation · Cure prevention" },
];

const commercialSteps = [
  { label: "Defense-Grade Discipline", sublabel: "Transferred to commercial ops" },
  { label: "Infrastructure Recovery", sublabel: "Forensic stabilization at scale" },
  { label: "AI & Algorithmic Trust", sublabel: "EU AI Act · ISO 42001" },
  { label: "Market Advantage", sublabel: "Compliance as competitive moat" },
];

export function InstitutionalLogic({ mode }: InstitutionalLogicProps) {
  const steps = mode === "federal" ? federalSteps : commercialSteps;

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Institutional Logic
          </p>
          <h2 className="mb-4">
            {mode === "federal"
              ? "From Regulatory Framework to Operational Discipline"
              : "Defense-Grade Governance — Transferred to Commercial Scale"}
          </h2>
          <div className="section-divider mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground">
            {mode === "federal"
              ? "Our governance architecture converts complex regulatory obligations into structured, auditable operational systems."
              : "The same rigor that protects $500M defense contracts now protects your data center builds, AI products, and global supply chains."}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 md:gap-2">
              <div className="card-elevated p-6 text-center min-w-[200px]">
                <p className="font-semibold text-foreground text-sm mb-1">{step.label}</p>
                <p className="text-xs text-muted-foreground">{step.sublabel}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="h-5 w-5 text-accent hidden md:block flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
