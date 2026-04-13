import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Shield, X } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { sendTransactionalEmail } from "@/utils/sendTransactionalEmail";

const STORAGE_KEY = "eqcs_tools_access";

const leadSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").max(255),
});

const industries = [
  "Defense & Aerospace",
  "Federal IT & Systems Integration",
  "Medical Devices & Life Sciences",
  "AI & Deep Tech",
  "Advanced Manufacturing",
  "Cybersecurity",
  "Infrastructure & Engineering",
  "International Development",
  "Climate & Energy",
  "Logistics & Supply Chain",
  "Professional Services",
  "Other",
];

interface ToolEmailGateProps {
  open: boolean;
  onUnlock: (data: { name: string; email: string; company: string; industry: string }) => void;
  onClose?: () => void;
}

export function ToolEmailGate({ open, onUnlock, onClose }: ToolEmailGateProps) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [industry, setIndustry] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse({ email });
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[String(err.path[0])] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (!consent) {
      setErrors({ consent: "You must agree to continue" });
      return;
    }

    setIsSubmitting(true);
    try {
      const validData = {
        name: name.trim() || "",
        email: result.data.email as string,
        company: company.trim() || "",
        industry: industry || "",
      };

      // Check if this email already exists (returning user)
      const { data: exists } = await supabase.rpc("check_assessment_email" as any, {
        _email: validData.email,
      });

      if (exists) {
        // Returning user — grant access without re-inserting
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          ...validData,
          ts: Date.now(),
        }));
        onUnlock(validData);
        toast({ title: "Welcome Back", description: "Your access has been restored." });
      } else {
        await supabase.from("assessment_leads").insert({
          name: validData.name,
          email: validData.email,
          company: validData.company,
          industry: validData.industry,
          consent: true,
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          ...validData,
          ts: Date.now(),
        }));

        onUnlock(validData);
        const id = crypto.randomUUID();
        sendTransactionalEmail({
          templateName: "contact-confirmation",
          recipientEmail: validData.email,
          idempotencyKey: `tool-confirm-${id}`,
          templateData: { name: validData.name },
        });
        toast({ title: "Access Granted", description: "All diagnostic tools are now unlocked." });
      }
    } catch {
      toast({ title: "Submission Error", description: "Please try again or contact info@elevateqcs.com.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isOpen && onClose) onClose(); }}>
      <DialogContent className="sm:max-w-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-sm bg-accent/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <DialogTitle className="text-xl">Start Your Assessment</DialogTitle>
          </div>
          <DialogDescription>
            Enter your details once to unlock all three diagnostic tools. Results are delivered as downloadable reports.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="gate-email">Business Email *</Label>
            <Input id="gate-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" className="bg-secondary/30" />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gate-name">Full Name</Label>
            <Input id="gate-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className="bg-secondary/30" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gate-company">Company</Label>
            <Input id="gate-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Corp" className="bg-secondary/30" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gate-industry">Industry</Label>
            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger className="bg-secondary/30">
                <SelectValue placeholder="Select your industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((ind) => (
                  <SelectItem key={ind} value={ind}>{ind}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-3 pt-2">
            <Checkbox id="gate-consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} />
            <label htmlFor="gate-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
              I agree to receive the assessment results and compliance updates from ElevateQCS. Your data is stored securely and never shared with third parties.
            </label>
          </div>
          {errors.consent && <p className="text-xs text-destructive">{errors.consent}</p>}

          <Button type="submit" variant="cta" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Unlock Diagnostic Tools"}
          </Button>

          <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
            Disclaimer: The assessments and reports provided by ElevateQCS are for informational purposes only. They do not constitute legal, financial, regulatory, or professional advice. For full advisory services, please contact ElevateQCS directly.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function useToolAccess() {
  const [userData] = useState<{ name: string; email: string; company: string; industry: string }>({
    name: "",
    email: "",
    company: "",
    industry: "",
  });

  const unlock = (_data?: { name: string; email: string; company: string; industry: string }) => {};

  return { isUnlocked: true, userData, unlock };
}
