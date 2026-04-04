import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileCheck, Lock, Users, Scale, HardHat, Briefcase } from "lucide-react";
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

export default function GovCon() {
  const [form, setForm] = useState({ name: "", email: "", org: "", role: "", contract: "", description: "", contactMethod: "email" });

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
            <form className="card-elevated p-8 lg:p-10 space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
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
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                Submit Federal Inquiry
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
