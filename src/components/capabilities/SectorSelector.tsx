import { Shield, Building2 } from "lucide-react";
import type { SectorMode } from "./CapabilitiesData";

interface SectorSelectorProps {
  mode: SectorMode;
  onChange: (mode: SectorMode) => void;
}

export function SectorSelector({ mode, onChange }: SectorSelectorProps) {
  return (
    <div className="flex justify-center mb-16 animate-fade-up">
      <div className="inline-flex rounded-lg border border-border bg-card p-1 shadow-sm">
        <button
          onClick={() => onChange("federal")}
          className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
            mode === "federal"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <Shield className="h-4 w-4" />
          Federal Prime / Sub
        </button>
        <button
          onClick={() => onChange("commercial")}
          className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
            mode === "commercial"
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          }`}
        >
          <Building2 className="h-4 w-4" />
          Commercial / Tech Leader
        </button>
      </div>
    </div>
  );
}
