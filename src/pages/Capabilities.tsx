import { useState, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { ArrowRight, Download } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";
import { generateCapabilitiesPdf } from "@/components/capabilities/generateCapabilitiesPdf";
import { SectorSelector } from "@/components/capabilities/SectorSelector";
import { InstitutionalLogic } from "@/components/capabilities/InstitutionalLogic";
import {
  advisoryDomains,
  industries,
  differentiators,
  engagementModels,
  schemaJsonLd,
  type SectorMode,
} from "@/components/capabilities/CapabilitiesData";

export default function Capabilities() {
  const [sectorMode, setSectorMode] = useState<SectorMode>("federal");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
  });
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const downloadRef = useRef<HTMLDivElement>(null);

  const scrollToDownload = () => {
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast.error("Please acknowledge the disclaimer before downloading.");
      return;
    }
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Please complete all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      await supabase.from("resource_leads").insert({
        email: formData.email,
        type: "capabilities-statement",
      });
      generateCapabilitiesPdf(formData);
      toast.success("Your capabilities statement is downloading.");
      setFormData({ name: "", email: "", company: "", industry: "" });
      setConsent(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEOHead
        title="Sovereign Quality for Distressed Infrastructure & Regulated AI | ElevateQCS"
        description="ElevateQCS designs governance infrastructure for distressed infrastructure recovery, regulated AI compliance, and federal contracting. ISO, CMMC, EU AI Act, FAR/DFARS advisory."
        url="https://elevateqcs.com/capabilities"
        keywords={[
          "compliance advisory firm",
          "government contracting compliance",
          "ISO 9001 consulting",
          "CMMC advisory",
          "EU AI Act compliance",
          "infrastructure recovery advisory",
          "AI governance consulting",
          "FAR DFARS compliance consulting",
        ]}
        jsonLd={schemaJsonLd}
      />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[85vh] flex items-center hero-gradient overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroArchitecture})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-wide relative z-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-6 animate-fade-up">
              Capabilities Statement
            </p>
            <h1 className="text-primary-foreground mb-8 animate-fade-up-delay-1">
              Sovereign Quality for Distressed Infrastructure and Regulated AI
            </h1>
            <div className="space-y-5 animate-fade-up-delay-2">
              <p className="text-primary-foreground/80 text-lg leading-relaxed">
                ElevateQCS is a specialized governance and compliance advisory
                firm that architects the internal systems required to stabilize
                distressed assets, govern AI deployments, and meet global
                regulatory expectations.
              </p>
              <p className="text-primary-foreground/70 leading-relaxed">
                We design governance frameworks, quality management systems,
                and compliance infrastructures that protect contract value,
                prevent margin leakage, and align operational workflows
                with international standards — from FAR/DFARS to the EU AI Act.
              </p>
              <p className="text-primary-foreground/60 italic">
                Defense-grade discipline. Applied to sovereign infrastructure.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-10 animate-fade-up-delay-3">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact">
                  Request a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                onClick={scrollToDownload}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Capabilities Statement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTOR SELECTOR ─── */}
      <section className="py-16 lg:py-20 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Digital Capability Statement
            </p>
            <h2 className="mb-4">Select Your Sector</h2>
            <p className="text-muted-foreground">
              Our advisory serves both federal and commercial markets. Select your context to see capabilities most relevant to your environment.
            </p>
          </div>
          <SectorSelector mode={sectorMode} onChange={setSectorMode} />
        </div>
      </section>

      {/* ─── STRATEGIC ADVISORY DOMAINS ─── */}
      <section className="section-luxury py-24 lg:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Strategic Advisory Domains
            </p>
            <h2>
              {sectorMode === "federal"
                ? "Governance architecture for contract-driven, high-accountability environments"
                : "Defense-grade systems — applied to commercial infrastructure and regulated technology"}
            </h2>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid gap-10">
            {advisoryDomains.map((domain) => (
              <div key={domain.title} className="card-elevated p-8 lg:p-10">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center">
                    <domain.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl mb-4">{domain.title}</h3>
                    {/* Sector-specific pitch */}
                    {(sectorMode === "federal" && domain.federalPitch) && (
                      <div className="mb-4 px-4 py-3 rounded-md bg-primary/5 border border-primary/10">
                        <p className="text-sm font-medium text-foreground">{domain.federalPitch}</p>
                      </div>
                    )}
                    {(sectorMode === "commercial" && domain.commercialPitch) && (
                      <div className="mb-4 px-4 py-3 rounded-md bg-accent/5 border border-accent/10">
                        <p className="text-sm font-medium text-foreground">{domain.commercialPitch}</p>
                      </div>
                    )}
                    <p className="mb-5">{domain.description}</p>
                    <p className="text-foreground font-medium text-sm mb-3">
                      Our advisory supports organizations implementing or
                      strengthening frameworks aligned with:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                      {domain.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-muted-foreground text-sm"
                        >
                          <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    {domain.keyCompetency && (
                      <p className="text-xs font-medium text-accent mb-4">
                        Key Competency: {domain.keyCompetency}
                      </p>
                    )}
                    <p className="text-muted-foreground text-sm italic border-l-2 border-accent/30 pl-4">
                      {domain.footer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INSTITUTIONAL LOGIC ─── */}
      <InstitutionalLogic mode={sectorMode} />

      {/* ─── INDUSTRIES ─── */}
      <section className="py-24 lg:py-32 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Industries We Support
            </p>
            <h2>
              Specialized expertise for the hyper-growth sectors of 2026
            </h2>
            <div className="section-divider mt-6" />
            <p className="mt-6">
              ElevateQCS supports organizations in sectors where operational failure carries regulatory, financial, or contractual consequences.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((ind) => (
              <div key={ind.title} className="card-elevated p-8">
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <ind.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg mb-3">{ind.title}</h4>
                <p className="text-sm">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIFFERENTIATORS — THE 2026 EDGE ─── */}
      <section className="py-24 lg:py-32 bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              The 2026 Edge
            </p>
            <h2>What sets ElevateQCS apart</h2>
            <div className="section-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="card-elevated p-8">
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg mb-3">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ENGAGEMENT MODELS ─── */}
      <section className="py-24 lg:py-32 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              Engagement Models
            </p>
            <h2>
              Structured advisory programs aligned with regulatory expectations
            </h2>
            <div className="section-divider mt-6" />
            <p className="mt-6">
              Organizations engage ElevateQCS through structured advisory
              programs designed to align governance infrastructure with
              regulatory expectations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {engagementModels.map((model) => (
              <div key={model.title} className="card-elevated p-8">
                <div className="w-11 h-11 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <model.icon className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-lg mb-3">{model.title}</h4>
                <p className="text-sm">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOWNLOAD / LEAD CAPTURE ─── */}
      <section ref={downloadRef} className="py-24 lg:py-32 bg-secondary/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
                Download Capabilities Statement
              </p>
              <h2 className="mb-6">ElevateQCS Capabilities Statement (PDF)</h2>
              <div className="section-divider mb-8" />
              <p className="mb-4">
                Our full capabilities statement provides an overview of our
                advisory domains, regulatory expertise, and engagement models.
              </p>
              <p className="text-muted-foreground">
                Download the official ElevateQCS capabilities statement used by
                organizations evaluating advisory partnerships.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="card-elevated p-8 lg:p-10 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="cap-name">
                  Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cap-name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  maxLength={100}
                  placeholder="Full name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cap-email">
                  Email <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cap-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  maxLength={255}
                  placeholder="Work email"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cap-company">
                  Company <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="cap-company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                  maxLength={100}
                  placeholder="Organization name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cap-industry">Industry</Label>
                <Input
                  id="cap-industry"
                  value={formData.industry}
                  onChange={(e) =>
                    setFormData({ ...formData, industry: e.target.value })
                  }
                  maxLength={100}
                  placeholder="e.g., Defense, AI Infrastructure"
                />
              </div>
              <div className="flex items-start gap-3 pt-2">
                <Checkbox
                  id="cap-consent"
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                />
                <Label
                  htmlFor="cap-consent"
                  className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                >
                  I understand this document is informational and does not
                  constitute legal, financial, or compliance advisory.
                </Label>
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                {submitting ? "Processing…" : "Download Capabilities Statement"}
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ─── DISCLAIMER ─── */}
      <section className="py-12 border-t border-border">
        <div className="container-narrow">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>DISCLAIMER:</strong> The materials provided by ElevateQCS,
            including tools, templates, frameworks, reports, or publications, are
            provided for informational purposes only. They do not constitute
            legal advice, financial advice, regulatory certification, or formal
            compliance advisory. Organizations should conduct independent due
            diligence and consult appropriate professional advisors before
            implementing any governance or compliance program. Use of these
            materials does not establish an advisory relationship with
            ElevateQCS.
          </p>
        </div>
      </section>
    </Layout>
  );
}
