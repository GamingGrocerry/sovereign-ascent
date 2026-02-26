import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Shield, Lock, FileText, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import contactInterior from "@/assets/contact-interior.jpg";

const inquiryTypes = [
  { value: "compliance-architecture", label: "Compliance & Management System Architecture" },
  { value: "human-rights", label: "Human Rights & Ethical Labor Compliance" },
  { value: "audit-readiness", label: "Audit Readiness & Corrective Action Advisory" },
  { value: "education", label: "Education & Capability Development" },
  { value: "general", label: "General Inquiry" },
  { value: "work-with-us", label: "Work With ElevateQCS" },
];

const trustPoints = [
  {
    icon: Lock,
    title: "NDA-First Engagement",
    description: "All consultations are protected by comprehensive non-disclosure agreements.",
  },
  {
    icon: Shield,
    title: "Secure Communications",
    description: "We use encrypted channels for all client communications and document exchange.",
  },
  {
    icon: FileText,
    title: "Project-Based Pricing",
    description: "Transparent, scope-defined pricing with no hidden fees or ongoing obligations.",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const body = new URLSearchParams(new FormData(form) as any).toString();
      
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      
      toast({
        title: "Inquiry Received",
        description: "We will respond within 48 business hours. Thank you for your interest in ElevateQCS.",
      });
      
      setFormData({
        name: "",
        email: "",
        organization: "",
        inquiryType: "",
        message: "",
      });
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
      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div 
          className="page-hero-bg" 
          style={{ backgroundImage: `url(${contactInterior})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Contact
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Request a Confidential Consultation
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every engagement begins with a comprehensive understanding of your 
                organizational context and compliance objectives. Share your 
                requirements, and we'll respond with a tailored approach.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={contactInterior} 
                  alt="Modern professional interior" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-28 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="section-divider mb-8" />
              <h2 className="mb-8">Start the Conversation</h2>
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-14 bg-secondary/30 border-border/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-14 bg-secondary/30 border-border/50 focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="h-14 bg-secondary/30 border-border/50 focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                      name="inquiry-type"
                    >
                      <SelectTrigger className="h-14 bg-secondary/30 border-border/50 focus:border-accent transition-colors">
                        <SelectValue placeholder="Select a service area" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="inquiry-type" value={formData.inquiryType} />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How Can We Support Your Organization? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your compliance objectives, current challenges, or specific requirements..."
                    className="bg-secondary/30 border-border/50 focus:border-accent transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="xl" 
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Confidential Inquiry"}
                </Button>

                <div className="flex items-center gap-3 mt-4 text-muted-foreground text-sm">
                  <Lock className="w-4 h-4 text-accent shrink-0" />
                  <p>
                    This form is privacy-compliant. All inquiries are treated with 
                    discretion and confidentiality. We typically respond within 48 
                    business hours.
                  </p>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-10">
                {/* Trust Points */}
                <div className="space-y-8">
                  {trustPoints.map((point, index) => (
                    <div key={index} className="flex gap-5">
                      <div className="w-14 h-14 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center shrink-0">
                        <point.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg mb-2">{point.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scope Boundaries */}
                <div className="bg-secondary/50 p-8 rounded-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                  <h4 className="font-serif text-lg mb-4">Scope Boundaries</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    To ensure clarity of engagement, please note that ElevateQCS does not:
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 shrink-0" />
                      Act as a certification body
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 shrink-0" />
                      Replace legal counsel
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 shrink-0" />
                      Perform third-party certification audits
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 shrink-0" />
                      Represent clients before regulators
                    </li>
                  </ul>
                </div>

                {/* Direct Contact */}
                <div className="bg-secondary/50 p-8 rounded-sm">
                  <h4 className="font-serif text-lg mb-3">Direct Contact</h4>
                  <a
                    href="mailto:info@elevateqcs.com"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    info@elevateqcs.com
                  </a>
                </div>

                {/* Disclaimer */}
                <div className="border-l-2 border-accent pl-6">
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    ElevateQCS is an independent advisory firm. We are not a 
                    certification body or a government regulatory agency. All 
                    services are advisory in nature and do not constitute legal, 
                    certification, or regulatory services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
