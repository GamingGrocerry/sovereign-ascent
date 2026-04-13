import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";
import { sendTransactionalEmail } from "@/utils/sendTransactionalEmail";
import { ArrowRight, Shield, FileCheck, Lock, Users, Scale, HardHat, Briefcase, Clock, Siren, ScanSearch, Zap, ShieldAlert, Eye } from "lucide-react";
import heroArchitecture from "@/assets/hero-architecture.jpg";

const services = [
  { icon: Scale, title: "FAR/DFARS Compliance Architecture", desc: "Structured compliance systems for federal acquisition regulation obligations." },
  { icon: Lock, title: "CMMC 2.0 Assessment Preparation", desc: "Readiness advisory for Cybersecurity Maturity Model Certification." },
  { icon: FileCheck, title: "DCAA/DCMA Audit Readiness", desc: "Prepare your systems and evidence for Defense Contract Audit Agency reviews." },
  { icon: Users, title: "Subcontractor Compliance & Flow-Downs", desc: "Flow-down management and subcontractor compliance oversight programs." },
  { icon: Shield, title: "CTIP Program Development (FAR 52.222-50)", desc: "Anti-trafficking compliance programs for federal contractors." },
  { icon: HardHat, title: "LOGCAP & OCONUS Operations Support", desc: "Operational compliance for contingency logistics and overseas sustainment." },
  { icon: Briefcase, title: "AS9100 Quality System Implementation", desc: "Aerospace quality management system design and certification readiness." },
];

const govconTools = [
  {
    title: "GovCon Readiness Score",
    description: "Evaluate governance structures required for U.S. government supply chains. Assess anti-trafficking policies, code of conduct, supplier compliance, and quality documentation.",
    time: "3–5 min",
    href: "/tools/govcon-readiness",
    icon: Shield,
  },
  {
    title: "CAR Gravity Calculator",
    description: "Assess finding severity and calculate the likelihood of a Cure Notice. Your finding is scored — but the specific mitigation steps require a consultation.",
    time: "2–3 min",
    href: "/tools/car-gravity-calculator",
    icon: Siren,
  },
  {
    title: "CPSR Financial Integrity Shield",
    description: "A mock-audit of your purchasing workflow. Identify weaknesses in price justification, debarment screening, and fair & reasonable determinations before your next review.",
    time: "3–5 min",
    href: "/tools/cpsr-financial-integrity",
    icon: ScanSearch,
  },
  {
    title: "LOGCAP Surge Capacity Stress Test",
    description: "Input your warm-status assets and discover whether you can meet mandatory deployment windows. Failures here mean you're not ready — we can show you what readiness looks like.",
    time: "3–5 min",
    href: "/tools/surge-capacity-stress-test",
    icon: Zap,
  },
  {
    title: "RFO Business Judgment Matrix",
    description: "Five procurement scenarios where the correct answer isn't in the manual. Test whether your team can document defensible logic under current FAR standards.",
    time: "4–6 min",
    href: "/tools/rfo-business-judgment",
    icon: Scale,
  },
  {
    title: "Labor Ethics Stress Test",
    description: "Face 6 real-world CTIP scenarios and test your team's ability to identify trafficking indicators under FAR 52.222-50. Immediate feedback — remediation guidance available through consultation.",
    time: "3–5 min",
    href: "/tools/labor-ethics-stress-test",
    icon: ShieldAlert,
  },
  {
    title: "Austere Environment Safety Checklist",
    description: "Check off current site safety features across 8 categories and 44 items. Generate a gap report for your safety officer.",
    time: "4–6 min",
    href: "/tools/austere-safety-checklist",
    icon: HardHat,
  },
];

export default function GovCon() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", org: "", role: "", contract: "", description: "", contactMethod: "email" });

  const handleGovConSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const id = crypto.randomUUID();
      const { error: dbError } = await supabase.from("contact_submissions").insert({
        id,
        name: form.name,
        email: form.email,
        organization: form.org || null,
        inquiry_type: "federal-advisory",
        message: [
          form.role && `Role: ${form.role}`,
          form.contract && `Contract/Program: ${form.contract}`,
          form.description,
        ].filter(Boolean).join('\n'),
      });
      if (dbError) throw dbError;

      sendTransactionalEmail({
        templateName: "govcon-confirmation",
        recipientEmail: form.email,
        idempotencyKey: `govcon-confirm-${id}`,
        templateData: { name: form.name },
      });
      sendTransactionalEmail({
        templateName: "admin-form-notification",
        recipientEmail: "info@elevateqcs.com",
        idempotencyKey: `govcon-admin-${id}`,
        templateData: {
          formType: "GovCon / Federal Advisory",
          name: form.name,
          email: form.email,
          organization: form.org,
          inquiryType: "Federal Advisory",
          message: form.description,
          fields: [
            form.role && `Role: ${form.role}`,
            form.contract && `Contract/Program: ${form.contract}`,
          ].filter(Boolean).join('\n'),
        },
      });

      toast({
        title: "Inquiry Received",
        description: "We will respond within 2 business days. Thank you for your interest.",
      });
      setForm({ name: "", email: "", org: "", role: "", contract: "", description: "", contactMethod: "email" });
    } catch {
      toast({
        title: "Submission Error",
        description: "Please try again or email us directly at info@elevateqcs.com.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <SEOHead
        title="Federal & Government Contracting Advisory | ElevateQCS"
        description="Compliance support for government contractors, subcontractors, and organizations entering the federal marketplace. FAR/DFARS, CMMC, CTIP, audit readiness."
        url="https://elevateqcs.com/govcon"
        keywords={["GovCon compliance", "federal contractor compliance", "CMMC advisory", "FAR DFARS compliance", "CTIP compliance", "government contracting consultant"]}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${heroArchitecture})` }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-wide relative z-10 py-24 pt-32">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4 animate-fade-up">Federal Advisory</p>
            <h1 className="text-primary-foreground mb-6 animate-fade-up-delay-1">Federal & Government Contracting Advisory</h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed animate-fade-up-delay-2">
              Compliance support for government contractors, subcontractors, and organizations entering the federal marketplace.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-4 animate-fade-up-delay-2">
              Our federal advisory services are in active development. Contact us to discuss your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <h2 className="mb-6">GovCon Advisory Services</h2>
            <p className="text-lg text-muted-foreground">
              ElevateQCS brings hands-on experience from defense and government contracting environments. We help federal contractors and subcontractors with FAR/DFARS compliance, CMMC preparation, audit readiness, and the operational maturity requirements that prime contractors expect.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.title} className="card-elevated p-8">
                <div className="w-12 h-12 rounded-sm bg-accent/10 flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-sm text-muted-foreground">
              Looking for compliance terminology? Visit our <Link to="/acronyms" className="text-accent underline hover:text-accent/80">Acronyms & Glossary</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* GovCon Assessment Tools */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <div className="section-divider mb-8" />
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">Free Assessments</p>
            <h2 className="mb-6">GovCon Compliance Tools</h2>
            <p className="text-lg text-muted-foreground">
              Free assessments for government contractors navigating FAR, DFARS, CMMC, and federal audit environments. Each one takes just a few minutes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {govconTools.map((tool) => (
              <Link
                key={tool.href}
                to={tool.href}
                className="card-elevated group p-8 flex flex-col"
              >
                <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <tool.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="!text-lg mb-3 group-hover:text-accent transition-colors">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {tool.time}
                  </div>
                  <span className="inline-flex items-center text-accent text-sm font-medium">
                    Start Assessment
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-divider mb-8" />
              <h2 className="mb-6">Discuss Your Federal Compliance Needs</h2>
              <p className="text-muted-foreground mb-6">
                Submit your information and a brief description of your requirements. We'll respond within 2 business days.
              </p>
              <p className="text-xs text-muted-foreground">All inquiries are treated confidentially.</p>
            </div>
            <form className="card-elevated p-8 lg:p-10 space-y-5" onSubmit={handleGovConSubmit}>
              <div className="space-y-2">
                <Label>Name <span className="text-destructive">*</span></Label>
                <Input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label>Email <span className="text-destructive">*</span></Label>
                <Input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder="Work email" />
              </div>
              <div className="space-y-2">
                <Label>Organization <span className="text-destructive">*</span></Label>
                <Input required value={form.org} onChange={(e) => setForm({...form, org: e.target.value})} placeholder="Company name" />
              </div>
              <div className="space-y-2">
                <Label>Role / Title</Label>
                <Input value={form.role} onChange={(e) => setForm({...form, role: e.target.value})} placeholder="Your role" />
              </div>
              <div className="space-y-2">
                <Label>Contract Vehicle or Program (optional)</Label>
                <Input value={form.contract} onChange={(e) => setForm({...form, contract: e.target.value})} placeholder="e.g., LOGCAP, Alliant 3" />
              </div>
              <div className="space-y-2">
                <Label>Description of Requirements <span className="text-destructive">*</span></Label>
                <Textarea required value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} placeholder="Briefly describe your compliance needs" rows={4} />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Federal Inquiry"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
