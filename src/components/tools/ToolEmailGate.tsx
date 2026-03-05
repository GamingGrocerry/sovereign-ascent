import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Lock, Shield } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

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
}

export function ToolEmailGate({ open, onUnlock }: ToolEmailGateProps) {
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

    const result = leadSchema.safeParse({ name, email, company, industry });
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
        name: result.data.name as string,
        email: result.data.email as string,
        company: result.data.company as string,
        industry: result.data.industry as string,
      };

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
      toast({ title: "Access Granted", description: "All diagnostic tools are now unlocked." });
    } catch {
      toast({ title: "Submission Error", description: "Please try again or contact info@elevateqcs.com.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-lg" onPointerDownOutside={(e) => e.preventDefault()}>
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
            <Label htmlFor="gate-name">Full Name *</Label>
            <Input id="gate-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className="bg-secondary/30" />
            {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gate-email">Business Email *</Label>
            <Input id="gate-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" className="bg-secondary/30" />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gate-company">Company *</Label>
            <Input id="gate-company" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Corp" className="bg-secondary/30" />
            {errors.company && <p className="text-xs text-destructive">{errors.company}</p>}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gate-industry">Industry *</Label>
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
            {errors.industry && <p className="text-xs text-destructive">{errors.industry}</p>}
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
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [userData, setUserData] = useState<{ name: string; email: string; company: string; industry: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setIsUnlocked(true);
        setUserData(data);
      } catch { /* ignore */ }
    }
  }, []);

  const unlock = (data: { name: string; email: string; company: string; industry: string }) => {
    setIsUnlocked(true);
    setUserData(data);
  };

  return { isUnlocked, userData, unlock };
}
