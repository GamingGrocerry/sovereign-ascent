import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Lock, Mail, Download, FileText, Loader2 } from "lucide-react";
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
      sendTransactionalEmail({ type: "resources", email: result.data });
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

  const getFileExtension = (name: string) => {
    const ext = name.split(".").pop()?.toLowerCase() || "";
    return ext;
  };

  const [downloadingFile, setDownloadingFile] = useState<string | null>(null);

  const handleDownload = useCallback(async (file: ResourceFile) => {
    setDownloadingFile(file.name);
    try {
      const { data, error } = await supabase.storage
        .from(bucketName)
        .download(file.name);
      if (error) throw error;
      const url = URL.createObjectURL(data);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      toast({
        title: "Download Failed",
        description: "Please try again or contact info@elevateqcs.com.",
        variant: "destructive",
      });
    }
    setDownloadingFile(null);
  }, [bucketName, toast]);

  const getFileIcon = (name: string) => {
    const ext = getFileExtension(name);
    const colorMap: Record<string, string> = {
      pdf: "from-red-500/20 to-red-600/10 text-red-400",
      doc: "from-blue-500/20 to-blue-600/10 text-blue-400",
      docx: "from-blue-500/20 to-blue-600/10 text-blue-400",
      xls: "from-green-500/20 to-green-600/10 text-green-400",
      xlsx: "from-green-500/20 to-green-600/10 text-green-400",
      ppt: "from-orange-500/20 to-orange-600/10 text-orange-400",
      pptx: "from-orange-500/20 to-orange-600/10 text-orange-400",
    };
    return colorMap[ext] || "from-secondary to-secondary/50 text-accent";
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
            These Professional Frameworks are provided for informational purposes and not for official use. 
            For customized versions or implementation support, contact{" "}
            <a href="mailto:info@elevateqcs.com" className="text-accent hover:underline">info@elevateqcs.com</a>{" "}
            or use the <a href="/contact" className="text-accent hover:underline">contact form</a>.
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
              <button
                key={file.name}
                onClick={() => handleDownload(file)}
                disabled={downloadingFile === file.name}
                className="group relative card-elevated p-0 overflow-hidden hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1 text-left w-full disabled:opacity-70"
              >
                {/* Top color bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${getFileIcon(file.name).split(" ").slice(0, 2).join(" ")}`} />

                <div className="p-8">
                  {/* Icon + Extension badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${getFileIcon(file.name)} flex items-center justify-center`}>
                      <FileText className="w-7 h-7" />
                    </div>
                    <span className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-sm">
                      {getFileExtension(file.name)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-semibold leading-snug mb-4 group-hover:text-accent transition-colors line-clamp-2">
                    {formatFileName(file.name)}
                  </h3>

                  {/* Download CTA */}
                  <div className="flex items-center text-accent text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                    {downloadingFile === file.name ? (
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    ) : (
                      <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                    )}
                    {downloadingFile === file.name ? "Downloading..." : "Download Framework"}
                  </div>
                </div>
              </button>
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