import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { ArrowRight, Upload, CheckCircle, Shield, Building2, Scale, Globe, FileCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import rfpHero from "@/assets/rfp-hero.jpg";

const industries = [
  "Defense & Aerospace",
  "Federal IT & Systems Integration",
  "Medical Devices & Life Sciences",
  "Artificial Intelligence & Deep Tech",
  "Advanced Manufacturing",
  "Cybersecurity",
  "Infrastructure & Engineering",
  "Climate & Energy",
  "International Development & Overseas Contracting",
  "Other",
];

const orgSizes = ["1–25 employees", "26–100", "101–500", "500+"];

const engagementTypes = [
  "Governance & Strategy",
  "Risk, Regulatory & Compliance",
  "Federal & Public Sector Advisory",
  "Supply Chain, Human Rights & Due Diligence",
  "Quality & Operational Infrastructure",
  "Regulatory Documentation & Administrative Solutions",
  "Audit, Inspection & Certification Readiness",
  "Managed Compliance & Governance Services",
  "Digital Governance & Technology Enablement",
];

const regulatoryContextOptions = [
  "ISO 9001",
  "ISO 27001",
  "CMMC",
  "CTIP",
  "CS3D",
  "FDA / Medical Device Regulation",
  "Federal Contract Compliance",
  "EU Human Rights Due Diligence",
  "Other",
];

const budgetRanges = [
  "Under $25,000",
  "$25,000 – $75,000",
  "$75,000 – $150,000",
  "$150,000+",
  "Not Yet Determined",
];

const contactMethods = ["Email", "Phone", "Virtual Meeting"];

const whyChooseUs = [
  { icon: Building2, text: "Deep experience in regulated industries" },
  { icon: Shield, text: "Structured, defensible governance frameworks" },
  { icon: Scale, text: "Federal contracting expertise" },
  { icon: Globe, text: "Human rights and supply chain compliance depth" },
  { icon: FileCheck, text: "Integrated compliance and operational alignment" },
];

export default function RFP() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [selectedEngagements, setSelectedEngagements] = useState<string[]>([]);
  const [selectedRegulatory, setSelectedRegulatory] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);

  const toggleCheckbox = (value: string, list: string[], setList: (v: string[]) => void) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    // Basic validation
    const orgName = formDataObj.get("org-name") as string;
    const contactName = formDataObj.get("contact-name") as string;
    const email = formDataObj.get("email") as string;

    if (!orgName?.trim() || !contactName?.trim() || !email?.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please complete all required fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    // Append multi-select values as hidden fields
    formDataObj.set("engagement-types", selectedEngagements.join(", "));
    formDataObj.set("regulatory-context", selectedRegulatory.join(", "));

    setIsSubmitting(true);

    try {
      const body = new URLSearchParams(formDataObj as any).toString();
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast({
        title: "Submission Error",
        description: "Please try again or email us directly at info@elevateqcs.com.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowed = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ];
      if (!allowed.includes(file.type)) {
        toast({
          title: "Unsupported File Type",
          description: "Please upload a PDF, DOCX, or XLSX file.",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }
      if (file.size > 20 * 1024 * 1024) {
        toast({
          title: "File Too Large",
          description: "Maximum file size is 20MB.",
          variant: "destructive",
        });
        e.target.value = "";
        return;
      }
      setFileName(file.name);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEOHead
          title="RFP Submitted | ElevateQCS"
          description="Thank you for submitting your Request for Proposal."
          url="https://elevateqcs.com/rfp"
        />
        <section className="min-h-[80vh] flex items-center justify-center bg-background">
          <div className="container-narrow text-center py-32">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="mb-6">Thank You for Your Submission</h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              A member of our team will review your request and respond within 1–2 business days.
            </p>
            <p className="text-muted-foreground mb-12">
              All submissions are treated with the highest level of confidentiality.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/">
                Return Home
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOHead
        title="Request for Proposal | ElevateQCS"
        description="Submit a structured Request for Proposal for governance, regulatory compliance, and federal advisory services. Confidential review by our leadership team."
        url="https://elevateqcs.com/rfp"
        keywords={["request for proposal", "RFP submission", "governance advisory", "compliance consulting RFP"]}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${rfpHero})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-28 text-center max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
            Request for Proposal
          </p>
          <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
            Submit a Request for Proposal
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto animate-fade-up-delay-2">
            We partner with regulated organizations, federal contractors, and growth-stage companies
            to design governance and compliance systems that withstand scrutiny and enable sustainable growth.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 lg:py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16">
            {/* Main Form */}
            <div>
              <div className="max-w-3xl mb-12">
                <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
                <h2 className="mb-4">Engagement Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To help us evaluate your request efficiently, please provide as much detail as possible.
                  All submissions are treated confidentially.
                </p>
              </div>

              <form name="rfp" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-16">
                <input type="hidden" name="form-name" value="rfp" />
                <input type="hidden" name="engagement-types" value="" />
                <input type="hidden" name="regulatory-context" value="" />
                {/* Section A */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section A — Organization Information</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="org-name">Organization Name <span className="text-accent">*</span></Label>
                      <Input id="org-name" name="org-name" required placeholder="Enter organization name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" name="website" placeholder="https://" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Industry</Label>
                      <Select name="industry">
                        <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                        <SelectContent>
                          {industries.map((i) => (
                            <SelectItem key={i} value={i}>{i}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Organization Size</Label>
                      <Select name="org-size">
                        <SelectTrigger><SelectValue placeholder="Select size" /></SelectTrigger>
                        <SelectContent>
                          {orgSizes.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="hq-location">Headquarters Location</Label>
                      <Input id="hq-location" name="hq-location" placeholder="City, State / Country" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="regions">Operating Regions</Label>
                      <Input id="regions" name="regions" placeholder="U.S., EU, Global, etc." />
                    </div>
                  </div>
                </div>

                {/* Section B */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section B — Contact Information</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Primary Contact Name <span className="text-accent">*</span></Label>
                      <Input id="contact-name" name="contact-name" required placeholder="Full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Title / Role</Label>
                      <Input id="title" name="title" placeholder="e.g., VP of Compliance" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email <span className="text-accent">*</span></Label>
                      <Input id="email" name="email" type="email" required placeholder="email@organization.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Preferred Method of Contact</Label>
                    <Select name="contact-method">
                      <SelectTrigger className="sm:w-1/2"><SelectValue placeholder="Select preference" /></SelectTrigger>
                      <SelectContent>
                        {contactMethods.map((m) => (
                          <SelectItem key={m} value={m}>{m}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Section C */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section C — Type of Engagement Requested</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Select all that apply.</p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {engagementTypes.map((type) => (
                      <div key={type} className="flex items-start space-x-3">
                        <Checkbox
                          id={`eng-${type}`}
                          checked={selectedEngagements.includes(type)}
                          onCheckedChange={() => toggleCheckbox(type, selectedEngagements, setSelectedEngagements)}
                        />
                        <Label htmlFor={`eng-${type}`} className="text-sm leading-snug cursor-pointer">{type}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section D */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section D — Project Scope & Objectives</h3>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="scope">
                      Please describe the nature of your request, current challenges, and desired outcomes.
                    </Label>
                    <Textarea
                      id="scope"
                      name="scope"
                      rows={6}
                      placeholder="Provide as much detail as possible to help us evaluate your request..."
                      className="resize-y"
                    />
                  </div>
                </div>

                {/* Section E */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section E — Regulatory Context</h3>
                    <p className="text-sm text-muted-foreground mt-1">If applicable, select relevant frameworks.</p>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {regulatoryContextOptions.map((opt) => (
                      <div key={opt} className="flex items-start space-x-3">
                        <Checkbox
                          id={`reg-${opt}`}
                          checked={selectedRegulatory.includes(opt)}
                          onCheckedChange={() => toggleCheckbox(opt, selectedRegulatory, setSelectedRegulatory)}
                        />
                        <Label htmlFor={`reg-${opt}`} className="text-sm leading-snug cursor-pointer">{opt}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-notes">Additional regulatory context</Label>
                    <Textarea id="reg-notes" name="reg-notes" rows={3} placeholder="Optional — provide any additional context..." className="resize-y" />
                  </div>
                </div>

                {/* Section F */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section F — Timeline & Budget</h3>
                  </div>
                  <div className="grid sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="start-date">Desired Start Date</Label>
                      <Input id="start-date" name="start-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="timeline">Estimated Timeline</Label>
                      <Input id="timeline" name="timeline" placeholder="e.g., 3–6 months" />
                    </div>
                    <div className="space-y-2">
                      <Label>Budget Range</Label>
                      <Select name="budget">
                        <SelectTrigger><SelectValue placeholder="Select range" /></SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((b) => (
                            <SelectItem key={b} value={b}>{b}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Section G */}
                <div className="space-y-6">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-lg font-serif text-foreground">Section G — Supporting Documentation</h3>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="file-upload">
                      Upload relevant documentation (RFP document, compliance gap analysis, audit findings, etc.)
                    </Label>
                    <div className="relative">
                      <label
                        htmlFor="file-upload"
                        className="flex items-center gap-3 p-4 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-accent/50 transition-colors bg-secondary/20"
                      >
                        <Upload className="w-5 h-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {fileName || "PDF, DOCX, or XLSX — Max 20MB"}
                        </span>
                      </label>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        accept=".pdf,.docx,.xlsx"
                        onChange={handleFileChange}
                        className="sr-only"
                      />
                    </div>
                  </div>
                </div>

                {/* Confidentiality & Submit */}
                <div className="space-y-8">
                  <div className="card-elevated p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      All information submitted will be treated confidentially and reviewed by our leadership team.
                      Submission of this form does not constitute a binding agreement.
                    </p>
                  </div>
                  <div className="text-center space-y-6">
                    <Button type="submit" variant="cta" size="xl" className="min-w-[280px]" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit RFP"}
                      {!isSubmitting && <ArrowRight className="ml-2" size={18} />}
                    </Button>
                    <p className="text-muted-foreground text-sm">
                      Prefer to speak directly?{" "}
                      <Link to="/contact" className="text-accent hover:underline font-medium">
                        Schedule a Consultation
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-8">
                <div className="card-elevated p-8">
                  <h3 className="text-lg font-serif text-foreground mb-6">Why Organizations Choose Us</h3>
                  <div className="space-y-5">
                    {whyChooseUs.map(({ icon: Icon, text }) => (
                      <div key={text} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 text-accent" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="card-elevated p-8">
                  <h3 className="text-lg font-serif text-foreground mb-3">Questions?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    If you have questions about our engagement process or need guidance before submitting,
                    our team is available to assist.
                  </p>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
