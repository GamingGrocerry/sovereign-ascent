import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
import { generateReport } from "./generateReport";

interface Finding {
  area: string;
  status: string;
  recommendation: string;
}

interface Roadmap {
  phase: string;
  description: string;
}

interface ResultsPageProps {
  toolName: string;
  score?: number;
  maxScore?: number;
  tier: string;
  tierColor: string;
  tierDescription: string;
  findings: Finding[];
  roadmap?: Roadmap[];
  recommendedActions: string[];
  relatedInsights: { title: string; slug: string }[];
  userData: { name: string; company: string };
}

export function ResultsPage({
  toolName,
  score,
  maxScore = 100,
  tier,
  tierColor,
  tierDescription,
  findings,
  roadmap,
  recommendedActions,
  relatedInsights,
  userData,
}: ResultsPageProps) {
  const handleDownload = async () => {
    generateReport({
      toolName,
      companyName: userData.company,
      contactName: userData.name,
      score,
      tier,
      findings,
      roadmap,
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Score Card */}
      <div className="card-elevated p-8 md:p-12 mb-8">
        <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-6">{toolName}</p>

        {score !== undefined && (
          <div className="flex items-end gap-4 mb-4">
            <span className="font-serif text-6xl md:text-7xl font-bold text-foreground">{score}</span>
            <span className="text-2xl text-muted-foreground font-light mb-2">/ {maxScore}</span>
          </div>
        )}

        <div className={`inline-block px-4 py-1.5 rounded-sm text-sm font-semibold mb-4 ${tierColor}`}>
          {tier}
        </div>

        <p className="text-muted-foreground leading-relaxed">{tierDescription}</p>
      </div>

      {/* Findings Table */}
      <div className="card-elevated overflow-hidden mb-8">
        <div className="p-6 border-b border-border">
          <h3 className="!text-lg">Detailed Findings</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Area</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Recommendation</th>
              </tr>
            </thead>
            <tbody>
              {findings.map((f, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="px-6 py-4 font-medium">{f.area}</td>
                  <td className="px-6 py-4 text-muted-foreground">{f.status}</td>
                  <td className="px-6 py-4 text-muted-foreground">{f.recommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Roadmap */}
      {roadmap && roadmap.length > 0 && (
        <div className="card-elevated p-6 md:p-8 mb-8">
          <h3 className="!text-lg mb-6">Recommended Compliance Roadmap</h3>
          <div className="space-y-4">
            {roadmap.map((r, i) => (
              <div key={i} className="border-l-2 border-accent pl-6 py-2">
                <h4 className="text-sm font-semibold text-foreground mb-1">{r.phase}</h4>
                <p className="text-sm text-muted-foreground">{r.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommended Actions */}
      <div className="card-elevated p-6 md:p-8 mb-8">
        <h3 className="!text-lg mb-4">Recommended Next Steps</h3>
        <ul className="space-y-3">
          {recommendedActions.map((action, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs text-accent font-bold">{i + 1}</span>
              </div>
              <span className="text-sm text-muted-foreground">{action}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Disclaimer */}
      <p className="text-[10px] text-muted-foreground/60 leading-relaxed mb-8">
        DISCLAIMER: This assessment is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, financial, regulatory, or professional advice. ElevateQCS assumes no responsibility for decisions or actions taken based on this report.
      </p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button variant="cta" size="lg" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" />
          Download Full Report
        </Button>
        <Button variant="cta" size="lg" asChild>
          <Link to="/contact">
            Analyse My Next Offer
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <div className="border-t border-border pt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Related Insights</h4>
          <div className="space-y-3">
            {relatedInsights.map((insight) => (
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
      )}
    </div>
  );
}
