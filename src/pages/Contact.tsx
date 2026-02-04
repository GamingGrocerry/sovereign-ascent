import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
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
import { Shield, Lock, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const inquiryTypes = [
  { value: "qms", label: "QMS Architecture" },
  { value: "ctip", label: "CTIP Program Development" },
  { value: "audit", label: "Audit & CAPA Advisory" },
  { value: "general", label: "General Inquiry" },
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
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
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Contact
            </p>
            <h1 className="mb-6">
              Request a Confidential Consultation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every engagement begins with a comprehensive understanding of your 
              organizational context and compliance objectives. Share your 
              requirements, and we'll respond with a tailored approach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Business Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiry-type">Inquiry Type</Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                    >
                      <SelectTrigger className="h-12">
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
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How Can We Support Your Organization? *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please describe your compliance objectives, current challenges, or specific requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="cta" 
                  size="lg" 
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Confidential Inquiry"}
                </Button>

                <p className="text-muted-foreground text-sm">
                  We typically respond within 48 business hours. All inquiries are 
                  treated with strict confidentiality.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32 space-y-8">
                {/* Trust Points */}
                <div className="space-y-6">
                  {trustPoints.map((point, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-sm bg-secondary flex items-center justify-center shrink-0">
                        <point.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg mb-1">{point.title}</h4>
                        <p className="text-muted-foreground text-sm">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Scope Boundaries */}
                <div className="bg-secondary/50 p-6 rounded-sm">
                  <h4 className="font-serif text-lg mb-4">Scope Boundaries</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    To ensure clarity of engagement, please note that ElevateQCS does not:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      Act as a certification body
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      Replace legal counsel
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      Perform third-party certification audits
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">•</span>
                      Represent clients before regulators
                    </li>
                  </ul>
                </div>

                {/* Disclaimer */}
                <div className="border-l-2 border-accent pl-4">
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
