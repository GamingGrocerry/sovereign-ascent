import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "eqcs_newsletter_dismissed";
const POPUP_DELAY_MS = 8000;

export function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), POPUP_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem(STORAGE_KEY, "1");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const { error } = await supabase.from("newsletter_subscribers").insert({ email: trimmed });
      if (error) {
        if (error.code === "23505") {
          // Already subscribed — treat as success
          setStatus("success");
        } else {
          throw error;
        }
      } else {
        setStatus("success");
      }
      setTimeout(dismiss, 2500);
    } catch {
      setErrorMsg("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-card border border-border rounded-sm shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header band */}
        <div className="bg-primary px-8 py-6">
          <h2 className="font-serif text-xl font-semibold text-primary-foreground tracking-tight">
            Quality & Compliance Global Briefing
          </h2>
          <p className="text-primary-foreground/70 text-sm mt-1">
            Regulatory intelligence. Operational insight. No noise.
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          aria-label="Close newsletter popup"
        >
          <X size={20} />
        </button>

        {/* Body */}
        <div className="px-8 py-6">
          {status === "success" ? (
            <div className="text-center py-4">
              <p className="text-accent font-semibold text-lg">You're in.</p>
              <p className="text-muted-foreground text-sm mt-2">
                Expect concise, actionable briefings — not clutter.
              </p>
            </div>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Join senior compliance leaders who receive our curated briefings on regulatory shifts, operational frameworks, and governance strategy.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className="h-11"
                  required
                  autoFocus
                />
                {status === "error" && (
                  <p className="text-destructive text-xs">{errorMsg}</p>
                )}
                <Button
                  type="submit"
                  variant="cta"
                  className="w-full h-11"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Subscribing…" : "Subscribe"}
                </Button>
              </form>
              <p className="text-[11px] text-muted-foreground/60 mt-4 leading-snug">
                We respect your inbox. Unsubscribe anytime. No spam, ever.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
