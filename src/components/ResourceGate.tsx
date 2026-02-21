import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Download, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const emailSchema = z.string().trim().email("Please enter a valid email address").max(255);

interface ResourceFile {
  name: string;
  url: string;
}

interface ResourceGateProps {
  type: "govcon" | "startup";
  bucketName: string;
  title: string;
  subtitle: string;
}

export function ResourceGate({ type, bucketName, title, subtitle }: ResourceGateProps) {
  const { toast } = useToast();
  const storageKey = `resource_access_${type}`;
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [files, setFiles] = useState<ResourceFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (isUnlocked) {
      fetchFiles();
    }
  }, [isUnlocked]);

  const fetchFiles = async () => {
    setLoadingFiles(true);
    try {
      const { data, error } = await supabase.storage
        .from(bucketName)
        .list("", { limit: 100, sortBy: { column: "name", order: "asc" } });

      if (error) throw error;

      const fileList: ResourceFile[] = (data || [])
        .filter((f) => f.name && !f.name.startsWith("."))
        .map((f) => {
          const { data: urlData } = supabase.storage
            .from(bucketName)
            .getPublicUrl(f.name);
          return { name: f.name, url: urlData.publicUrl };
        });

      setFiles(fileList);
    } catch {
      toast({
        title: "Error Loading Resources",
        description: "Please try refreshing the page.",
        variant: "destructive",
      });
    }
    setLoadingFiles(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setIsSubmitting(true);
    try {
      const { error: insertError } = await supabase
        .from("resource_leads")
        .insert({ email: result.data, type });

      if (insertError) throw insertError;

      localStorage.setItem(storageKey, "true");
      setIsUnlocked(true);
      toast({
        title: "Access Granted",
        description: "You now have access to our Professional Frameworks.",
      });
    } catch {
      toast({
        title: "Submission Error",
        description: "Please try again or email us at info@elevateqcs.com.",
        variant: "destructive",
      });
    }
    setIsSubmitting(false);
  };

  const formatFileName = (name: string) => {
    return name
      .replace(/\.[^/.]+$/, "")
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  if (!isUnlocked) {
    return (
      <section className="py-28 bg-background section-luxury">
        <div className="container-narrow">
          <div className="max-w-xl mx-auto">
            <div className="card-elevated p-10 md:p-14">
              <div className="text-center mb-10">
                <div className="w-16 h-16 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-accent" />
                </div>
                <h2 className="mb-4">{title}</h2>
                <p className="text-muted-foreground">
                  {subtitle}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="gate-email">Business Email *</Label>
                  <Input
                    id="gate-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="your@company.com"
                    className="h-14 bg-secondary/30 border-border/50 focus:border-accent transition-colors"
                  />
                  {error && <p className="text-sm text-destructive">{error}</p>}
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Access Professional Frameworks"}
                </Button>

                <div className="flex items-center gap-3 text-muted-foreground text-sm">
                  <Lock className="w-4 h-4 text-accent shrink-0" />
                  <p>Your email is stored securely and never shared with third parties.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-background section-luxury">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <div className="section-divider mb-8" />
          <h2 className="mb-4">Professional Frameworks</h2>
          <p className="text-lg text-muted-foreground">
            Download our field-tested frameworks to support your compliance operations.
          </p>
        </div>

        {loadingFiles ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elevated p-8 animate-pulse">
                <div className="w-12 h-12 bg-secondary rounded-sm mb-6" />
                <div className="h-5 bg-secondary rounded w-3/4 mb-3" />
                <div className="h-4 bg-secondary rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : files.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {files.map((file) => (
              <a
                key={file.name}
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated p-8 group"
              >
                <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center mb-6">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg mb-3 group-hover:text-accent transition-colors">
                  {formatFileName(file.name)}
                </h3>
                <span className="inline-flex items-center text-accent text-sm font-medium">
                  <Download className="w-4 h-4 mr-2" />
                  Download Framework
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div className="card-elevated p-12 text-center">
            <Mail className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-xl mb-2">Frameworks Coming Soon</h3>
            <p className="text-muted-foreground">
              Our Professional Frameworks for this category are being finalized. 
              Check back soon or contact us at info@elevateqcs.com.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
