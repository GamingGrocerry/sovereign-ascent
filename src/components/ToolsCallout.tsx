import { Link } from "react-router-dom";
import { Activity, ChevronRight } from "lucide-react";

export function ToolsCallout() {
  return (
    <Link
      to="/tools"
      className="card-elevated group flex items-start gap-4 p-5 hover:border-accent/40 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
        <Activity className="w-5 h-5 text-accent" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors mb-1">
          Diagnostic Tools
        </h4>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Assess your GovCon readiness, QMS maturity, or compliance framework alignment in under 5 minutes.
        </p>
      </div>
      <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5 group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
    </Link>
  );
}
