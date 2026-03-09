import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, ChevronRight, Lock } from "lucide-react";
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
  userData?: { name: string; company: string };
  isUnlocked?: boolean;
  onUnlock?: () => void;
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
  isUnlocked = true,
  onUnlock,
}: ResultsPageProps) {
  const handleDownload = async () => {
    if (!userData) return;
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

      {!isUnlocked ? (
        <div className="card-elevated p-8 md:p-12 mb-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-[6px] z-10 flex flex-col items-center justify-center p-6 border border-border/50">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
              <Lock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Unlock Your Forensic Blueprint</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm leading-relaxed">
              Your score indicates underlying structural gaps. Enter your work email to reveal the specific fatal flaws in your current approach and unlock your detailed remediation blueprint.
            </p>
            <Button variant="cta" size="xl" onClick={onUnlock}>
              Reveal Detailed Findings
            </Button>
          </div>
          
          <div className="opacity-30 blur-[4px] select-none pointer-events-none">
            <h3 className="!text-lg mb-6 text-left">Detailed Findings</h3>
            <div className="space-y-4 text-left">
              <div className="h-16 bg-secondary/50 rounded w-full"></div>
              <div className="h-16 bg-secondary/50 rounded w-full"></div>
              <div className="h-16 bg-secondary/50 rounded w-full"></div>
            </div>
            <h3 className="!text-lg mb-4 mt-8 text-left">Critical Fatal Flaws</h3>
            <ul className="space-y-3 text-left">
              <li className="h-8 bg-secondary/50 rounded w-3/4"></li>
              <li className="h-8 bg-secondary/50 rounded w-5/6"></li>
              <li className="h-8 bg-secondary/50 rounded w-4/5"></li>
            </ul>
          </div>
        </div>
      ) : (
        <>
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
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Status / Severity</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Consequence</th>
                  </tr>
                </thead>
                <tbody>
                  {findings.map((f, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                      <td className="px-6 py-4 font-medium align-top">{f.area}</td>
                      <td className="px-6 py-4 text-muted-foreground font-medium align-top">{f.status}</td>
                      <td className="px-6 py-4 text-muted-foreground align-top">{f.recommendation}</td>
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

          {/* Recommended Actions / Fatal Flaws */}
          <div className="card-elevated p-6 md:p-8 mb-8">
            <h3 className="!text-lg mb-4">Critical Execution Flaws Identified</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Based on your profile, your organisation is highly susceptible to the following fatal errors in remediation:
            </p>
            <ul className="space-y-4">
              {recommendedActions.map((action, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs text-destructive font-bold">!</span>
                  </div>
                  <span className="text-sm text-foreground font-medium">{action}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sell the Gap */}
          <div className="card-elevated p-6 md:p-8 mb-8 border-l-4 border-accent bg-accent/5">
            <h3 className="!text-lg mb-2">The Principal Review</h3>
            <p className="text-sm text-muted-foreground mb-6">
              This score was generated by our algorithmic risk model. Closing the gap requires executive-level intervention. To have an ElevateQCS Principal review your specific vulnerability profile and outline a defensive architecture, schedule a 15-minute diagnostic briefing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Book a 15-Minute Briefing
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownload}>
                <Download className="w-4 h-4 mr-2" />
                Download Blueprint
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed mb-8">
            DISCLAIMER: This assessment is provided by Elevate Quality Compliance Solutions LLC for informational purposes only. It does not constitute legal, financial, regulatory, or professional advice. ElevateQCS assumes no responsibility for decisions or actions taken based on this report.
          </p>

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
        </>
      )}
    </div>
  );
}
