import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const dimensions = [
  {
    id: "doc-alignment",
    label: "Documentation-Implementation Alignment",
    description:
      "Your quality manual, SSP, and compliance documentation accurately reflect implemented controls. An independent review has verified alignment within the last 12 months.",
  },
  {
    id: "regulatory-mapping",
    label: "Cross-Jurisdictional Regulatory Mapping",
    description:
      "You have mapped EU certifications to U.S. federal requirements (FAR, DFARS, NIST, CMMC, ITAR/EAR). Gaps are documented with remediation timelines.",
  },
  {
    id: "evidence-collection",
    label: "Evidence Collection Infrastructure",
    description:
      "You can produce objective compliance evidence — audit logs, corrective action records, training certifications — within 48 hours of a Prime request.",
  },
  {
    id: "governance-integration",
    label: "Governance-Operations Integration",
    description:
      "Compliance is integrated with operations, not siloed. Requirements flow into project execution plans and performance metrics.",
  },
  {
    id: "vetting-rehearsal",
    label: "Prime Vetting Rehearsal",
    description:
      "You have conducted a simulated Prime vetting — SPRS review, evidence questionnaire, document production — within the last six months.",
  },
];

function getRiskLevel(count: number) {
  if (count >= 4)
    return {
      level: "Low",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10 border-emerald-400/30",
      icon: CheckCircle,
      message:
        "Your compliance infrastructure appears aligned for Prime vetting. Maintain operational discipline and conduct periodic reassessments.",
    };
  if (count >= 2)
    return {
      level: "Medium",
      color: "text-amber-400",
      bg: "bg-amber-400/10 border-amber-400/30",
      icon: AlertTriangle,
      message:
        "Material gaps exist in your compliance-capability alignment. Address unresolved dimensions before committing to Prime proposals.",
    };
  return {
    level: "High",
    color: "text-red-400",
    bg: "bg-red-400/10 border-red-400/30",
    icon: Shield,
    message:
      "Significant structural risk. Pursuing a U.S. Prime opportunity without addressing these gaps carries a high probability of the contract death spiral.",
  };
}

export function ReadinessScorecard() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const count = Object.values(checked).filter(Boolean).length;
  const risk = getRiskLevel(count);
  const RiskIcon = risk.icon;

  return (
    <div className="my-10 rounded-sm border border-border bg-secondary/30 overflow-hidden">
      <div className="px-6 py-5 border-b border-border bg-primary/5">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          5-Point Compliance Readiness Scorecard
        </h3>
        <p className="text-sm text-muted-foreground">
          Assess your compliance-capability alignment. Toggle each dimension you
          can affirm today.
        </p>
      </div>

      <div className="p-6 space-y-5">
        {dimensions.map((d) => (
          <label
            key={d.id}
            className="flex items-start gap-4 cursor-pointer group"
          >
            <Checkbox
              checked={!!checked[d.id]}
              onCheckedChange={(v) =>
                setChecked((prev) => ({ ...prev, [d.id]: !!v }))
              }
              className="mt-1"
            />
            <div>
              <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                {d.label}
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                {d.description}
              </p>
            </div>
          </label>
        ))}
      </div>

      <div className={`mx-6 mb-6 p-5 rounded-sm border ${risk.bg} transition-all duration-300`}>
        <div className="flex items-center gap-3 mb-2">
          <RiskIcon className={`w-5 h-5 ${risk.color}`} />
          <span className={`font-semibold ${risk.color}`}>
            Risk Level: {risk.level}
          </span>
          <span className="text-sm text-muted-foreground ml-auto">
            {count}/5 affirmed
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{risk.message}</p>
      </div>
    </div>
  );
}
