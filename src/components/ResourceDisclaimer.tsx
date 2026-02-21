import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

export function ResourceDisclaimer() {
  return (
    <>
      {/* Contact CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              These Professional Frameworks are provided for informational purposes and not for official use. 
              For customized versions or implementation support, contact{" "}
              <a href="mailto:info@elevateqcs.com" className="text-link inline-flex items-center gap-1">
                <Mail className="w-4 h-4" />
                info@elevateqcs.com
              </a>{" "}
              or use the{" "}
              <Link to="/contact" className="text-link">contact form</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-10 bg-background border-t border-border/50">
        <div className="container-wide">
          <p className="text-xs text-muted-foreground/60 leading-relaxed text-center max-w-4xl mx-auto">
            DISCLAIMER: This template is provided by Elevate Quality Compliance Solutions LLC for informational 
            purposes only. It does not constitute legal, regulatory, or professional advice. Users are solely 
            responsible for ensuring compliance with applicable laws and regulations.
          </p>
        </div>
      </section>
    </>
  );
}
