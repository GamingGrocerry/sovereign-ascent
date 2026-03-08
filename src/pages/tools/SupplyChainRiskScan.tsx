import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Download, ChevronRight, AlertTriangle, ShieldCheck, ShieldAlert } from "lucide-react";
import { ToolEmailGate, useToolAccess } from "@/components/tools/ToolEmailGate";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";
import { generateReport } from "@/components/tools/generateReport";

interface TechItem {
  id: string;
  name: string;
  category: string;
  riskLevel: "high" | "medium" | "low";
  reason: string;
  mitigation: string;
}

const techInventory: TechItem[] = [
  { id: "huawei", name: "Huawei / ZTE Networking Equipment", category: "Hardware", riskLevel: "high", reason: "Banned under Section 889 of the 2019 NDAA. Prohibited in all government contracts and supply chains.", mitigation: "Immediate rip-and-replace required. No waiver pathway available for new contracts." },
  { id: "kaspersky", name: "Kaspersky Lab Software", category: "Software", riskLevel: "high", reason: "Banned by DHS Binding Operational Directive 17-01. Prohibited in government systems and contractor networks.", mitigation: "Remove from all systems processing government data. Implement alternative endpoint protection." },
  { id: "tiktok", name: "TikTok / ByteDance Applications", category: "Software", riskLevel: "high", reason: "Banned on government devices. Organizations handling CUI must prohibit installation on any device with access to controlled information.", mitigation: "Implement MDM policies prohibiting installation. Issue written policy to all personnel with CUI access." },
  { id: "dji", name: "DJI Drones / UAS", category: "Hardware", riskLevel: "high", reason: "DoD has designated Chinese-manufactured UAS as supply chain risks. Executive orders restrict procurement.", mitigation: "Transition to Blue UAS-approved alternatives (e.g., Skydio, Parrot ANAFI USA). Document transition timeline." },
  { id: "hikvision", name: "Hikvision / Dahua Surveillance Systems", category: "Hardware", riskLevel: "high", reason: "Banned under Section 889 NDAA. Used extensively in CCTV and access control systems worldwide.", mitigation: "Audit all physical security systems for banned components. Replace with compliant alternatives." },
  { id: "alibaba_cloud", name: "Alibaba Cloud / Tencent Cloud", category: "Cloud Infrastructure", riskLevel: "high", reason: "Chinese cloud providers are under active national security scrutiny. Data sovereignty concerns.", mitigation: "Migrate all government-related workloads to FedRAMP-authorized cloud providers." },
  { id: "aws_govcloud", name: "AWS GovCloud / Azure Government", category: "Cloud Infrastructure", riskLevel: "low", reason: "FedRAMP High authorized. Meets DoD Impact Level 5 requirements.", mitigation: "Maintain current authorization status. Ensure continuous monitoring program is active." },
  { id: "openai_api", name: "OpenAI / Commercial AI APIs", category: "AI & Machine Learning", riskLevel: "medium", reason: "Commercial AI models processing government data require careful data classification review. Not all AI services meet FedRAMP or ITAR requirements.", mitigation: "Conduct data classification review. Ensure no CUI/ITAR data flows to non-authorized AI services. Consider Azure Government OpenAI Service." },
  { id: "open_source_ai", name: "Open-Source AI Models (Self-Hosted)", category: "AI & Machine Learning", riskLevel: "medium", reason: "Self-hosted models offer data control but require rigorous supply chain verification of model weights and training data provenance.", mitigation: "Document model provenance. Implement model integrity verification. Maintain air-gapped deployment for classified work." },
  { id: "semiconductors_china", name: "Chinese-Origin Semiconductors / PCBs", category: "Hardware", riskLevel: "high", reason: "Under active supply chain risk designation. CHIPS Act and related policies restrict procurement from designated entities.", mitigation: "Audit component supply chains. Identify alternative sources through trusted foundries program. Document compliance." },
  { id: "vpn_foreign", name: "Foreign-Origin VPN / Encryption Tools", category: "Software", riskLevel: "medium", reason: "VPN and encryption tools from non-Five Eyes nations face scrutiny for potential backdoors or key escrow requirements.", mitigation: "Use only FIPS 140-2/3 validated encryption. Transition to U.S. or allied-nation security tools." },
  { id: "iot_consumer", name: "Consumer IoT Devices on Government Networks", category: "Hardware", riskLevel: "medium", reason: "Smart devices, consumer routers, and IoT sensors often lack enterprise security controls and may transmit data to foreign servers.", mitigation: "Segment all IoT devices from government networks. Implement zero-trust architecture for device access." },
];

function ScanForm({ onComplete }: { onComplete: (selected: string[]) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const categories = [...new Set(techInventory.map((t) => t.category))];

  const toggle = (id: string) => {
    setSelected((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-2">Supply Chain Risk Designation Scan</p>
        <h2 className="!text-2xl md:!text-3xl mb-3">Select Your Technology Stack</h2>
        <p className="text-muted-foreground">
          Select all technologies, platforms, and hardware components currently in use across your organization. We'll scan for items under active national security scrutiny.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h3 className="!text-lg mb-4">{cat}</h3>
          <div className="space-y-3">
            {techInventory.filter((t) => t.category === cat).map((tech) => {
              const isSelected = selected.includes(tech.id);
              return (
                <label key={tech.id} className={`flex items-center gap-4 p-4 rounded-sm border cursor-pointer transition-all duration-200 ${isSelected ? "border-accent bg-accent/5 shadow-sm" : "border-border hover:border-accent/30 hover:bg-secondary/30"}`}>
                  <Checkbox checked={isSelected} onCheckedChange={() => toggle(tech.id)} />
                  <div className="flex-1">
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-sm ${tech.riskLevel === "high" ? "bg-red-100 text-red-800" : tech.riskLevel === "medium" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}>
                    {tech.riskLevel}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      ))}

      <Button variant="cta" size="lg" className="w-full" onClick={() => onComplete(selected)} disabled={selected.length === 0}>
        Scan My Tech Stack <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

function ScanResults({ selected, userData }: { selected: string[]; userData: { name: string; company: string } }) {
  const items = techInventory.filter((t) => selected.includes(t.id));
  const highRisk = items.filter((t) => t.riskLevel === "high");
  const mediumRisk = items.filter((t) => t.riskLevel === "medium");
  const lowRisk = items.filter((t) => t.riskLevel === "low");

  let tier: string, tierColor: string, tierDescription: string;
  if (highRisk.length === 0 && mediumRisk.length === 0) {
    tier = "Low Risk — No Designated Technologies Detected";
    tierColor = "bg-green-100 text-green-800";
    tierDescription = "Your selected technology stack does not include any items currently under active national security designation. Continue monitoring the Federal Register and ICTS supply chain risk advisories.";
  } else if (highRisk.length === 0) {
    tier = "Moderate Risk — Review Recommended";
    tierColor = "bg-yellow-100 text-yellow-800";
    tierDescription = `${mediumRisk.length} technology component(s) in your stack require review for government contract compliance. While not prohibited, these items need documented risk assessments and mitigation plans.`;
  } else {
    tier = "High Risk — Prohibited Technologies Detected";
    tierColor = "bg-red-100 text-red-800";
    tierDescription = `${highRisk.length} technology component(s) in your stack are prohibited or designated as supply chain risks under federal regulation. Immediate action is required to maintain contract eligibility.`;
  }

  const handleDownload = () => {
    generateReport({
      toolName: "Supply Chain Risk Designation Scan",
      companyName: userData.company,
      contactName: userData.name,
      score: highRisk.length === 0 ? (mediumRisk.length === 0 ? 100 : 60) : 20,
      tier,
      findings: items.map((t) => ({ area: t.name, status: t.riskLevel.toUpperCase(), recommendation: t.mitigation })),
      date: new Date().toISOString().split("T")[0],
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card-elevated p-8 md:p-12 mb-8">
        <p className="text-xs text-accent uppercase tracking-[0.2em] font-medium mb-6">Supply Chain Risk Designation Scan</p>
        <div className={`inline-block px-4 py-1.5 rounded-sm text-sm font-semibold mb-4 ${tierColor}`}>{tier}</div>
        <p className="text-muted-foreground leading-relaxed">{tierDescription}</p>
      </div>

      {/* Risk Heat Map */}
      <div className="card-elevated overflow-hidden mb-8">
        <div className="p-6 border-b border-border">
          <h3 className="!text-lg">Technology Risk Heat Map</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Technology</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Risk</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Reason</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {[...highRisk, ...mediumRisk, ...lowRisk].map((t, i) => (
                <tr key={t.id} className={i % 2 === 0 ? "bg-card" : "bg-secondary/20"}>
                  <td className="px-6 py-4 font-medium">{t.name}</td>
                  <td className="px-6 py-4 text-muted-foreground">{t.category}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${t.riskLevel === "high" ? "text-red-700" : t.riskLevel === "medium" ? "text-yellow-700" : "text-green-700"}`}>
                      {t.riskLevel === "high" ? <ShieldAlert className="w-3.5 h-3.5" /> : t.riskLevel === "medium" ? <AlertTriangle className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                      {t.riskLevel.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{t.reason}</td>
                  <td className="px-6 py-4 text-muted-foreground text-xs">{t.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground/60 leading-relaxed mb-8">
        DISCLAIMER: This scan is based on publicly available federal designations and regulatory guidance as of March 2026. Supply chain risk designations change frequently. This tool does not constitute legal advice. Consult with qualified counsel for formal compliance determinations.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button variant="cta" size="lg" onClick={handleDownload}>
          <Download className="w-4 h-4 mr-2" /> Download Risk Report
        </Button>
        <Button variant="cta" size="lg" asChild>
          <Link to="/contact">Discuss Mitigation Strategy <ArrowRight className="w-4 h-4 ml-2" /></Link>
        </Button>
      </div>

      <div className="border-t border-border pt-8">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Related Insights</h4>
        <div className="space-y-3">
          {[
            { title: "Supply Chain Compliance: Beyond First-Tier Visibility", slug: "supply-chain-compliance" },
            { title: "The Forensic Auditor's View: Supply Chain Transparency", slug: "forensic-auditor-supply-chain" },
            { title: "CMMC 2026 Supply Chain Flow-Downs", slug: "cmmc-2026-supply-chain-flowdowns" },
            { title: "FAR Flow-Downs Under 52.244-6", slug: "far-flowdowns-52-244-6" },
          ].map((insight) => (
            <Link key={insight.slug} to={`/insights/${insight.slug}`} className="flex items-center gap-3 text-sm text-foreground hover:text-accent transition-colors group">
              <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 transition-transform" />
              {insight.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SupplyChainRiskScan() {
  const { isUnlocked, userData, unlock } = useToolAccess();
  const [selected, setSelected] = useState<string[] | null>(null);

  const handleComplete = async (items: string[]) => {
    setSelected(items);
    const flaggedItems = techInventory.filter((t) => items.includes(t.id));
    const highCount = flaggedItems.filter((t) => t.riskLevel === "high").length;
    if (userData) {
      await supabase.from("assessment_leads").insert({
        name: userData.name, email: userData.email, company: userData.company, industry: userData.industry,
        consent: true, tool_used: "supply-chain-risk-scan", score: highCount === 0 ? 80 : 20,
        tier: highCount > 0 ? "High Risk" : "Low/Moderate Risk",
        date_completed: new Date().toISOString(), answers_json: { selected: items } as any,
      });
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Supply Chain Risk Designation Scan | Federal Technology Compliance | ElevateQCS"
        description="Scan your technology stack for items under active national security scrutiny. Identify prohibited hardware, software, and AI components that require rip-and-replace or mitigation plans."
        url="https://elevateqcs.com/tools/supply-chain-risk-scan"
        keywords={["supply chain risk", "Section 889 NDAA", "banned technology federal contracts", "ICTS supply chain", "technology compliance scan"]}
      />
      <ToolEmailGate open={!isUnlocked} onUnlock={unlock} />
      <section className="pt-32 pb-8 bg-primary">
        <div className="container-wide">
          <Link to="/tools" className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostic Tools
          </Link>
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Technology Risk Scanner</p>
            <h1 className="text-primary-foreground mb-4">Supply Chain Risk Designation Scan</h1>
            <p className="text-primary-foreground/70 text-lg font-light">
              Select your technology stack. We'll identify which components are under active national security scrutiny and need a mitigation plan — or a rip-and-replace strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-wide">
          {isUnlocked && !selected && <ScanForm onComplete={handleComplete} />}
          {isUnlocked && selected && userData && <ScanResults selected={selected} userData={userData} />}
        </div>
      </section>
    </Layout>
  );
}
