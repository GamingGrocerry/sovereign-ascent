import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";

export default function Terms() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div className="page-hero-overlay" />
        <div className="container-narrow relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Legal
          </p>
          <h1 className="mb-6 gold-accent pb-4">Terms of Use</h1>
          <p className="text-muted-foreground">
            Last updated: January 2026
          </p>
        </div>
      </section>

      {/* Plain Language Summary */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-narrow relative z-10">
          <div className="text-primary-foreground">
            <h3 className="text-lg font-serif mb-3">In Plain Language</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Our services are advisory only — we don't certify, audit, or replace 
              legal counsel. Specific engagements are governed by separate agreements. 
              All content on this site is our intellectual property. We protect your 
              confidentiality through NDAs executed at the start of every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none space-y-12">
            
            <div>
              <h2 className="text-2xl mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using the ElevateQCS website and services, you agree to 
                be bound by these Terms of Use. If you do not agree to these terms, 
                please do not use our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Nature of Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                ElevateQCS provides independent, vendor-neutral advisory services. 
                It is important to understand the scope and limitations of our services:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Advisory Only:</strong> All services are advisory in nature and do not constitute certification, legal advice, or regulatory approval.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Not a Certification Body:</strong> ElevateQCS is not a certification body or accredited registrar. We do not issue certifications or approvals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Not Legal Counsel:</strong> Our services do not replace legal counsel. Clients should consult qualified legal professionals for legal advice.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Not a Government Agency:</strong> We are a private advisory firm with no governmental authority or regulatory powers.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Engagement Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Specific advisory engagements are governed by separate engagement 
                agreements that detail scope, deliverables, timelines, and fees. 
                These Terms of Use apply to website usage and general interactions; 
                engagement-specific terms take precedence for contracted services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, graphics, logos, and 
                methodologies, is the property of ElevateQCS and protected by 
                intellectual property laws. You may not reproduce, distribute, 
                or create derivative works without prior written permission.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The ECAM (Elevate Compliance Architecture Methodology) framework 
                is a proprietary advisory methodology developed by ElevateQCS. 
                It is not a certifiable standard or externally validated framework.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take confidentiality seriously. All engagements begin with the 
                execution of comprehensive Non-Disclosure Agreements. Information 
                shared with us during inquiries and engagements is treated as 
                confidential unless otherwise agreed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Disclaimer of Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website and its content are provided "as is" without warranties 
                of any kind, express or implied. While we strive for accuracy, we 
                do not guarantee that website content is complete, current, or 
                error-free. Advisory outcomes depend on many factors beyond our 
                control, including client implementation and organizational context.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, ElevateQCS shall not be 
                liable for any indirect, incidental, special, consequential, or 
                punitive damages arising from your use of our website or services. 
                Our total liability shall not exceed the fees paid for the specific 
                engagement giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless ElevateQCS from any claims, 
                damages, or expenses arising from your violation of these Terms of 
                Use or your misuse of our website or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Use are governed by the laws of the State of Delaware, 
                USA, without regard to conflict of law principles. Any disputes 
                arising from these terms shall be resolved in the courts of Delaware.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms of Use at any time. 
                Changes will be posted on this page with an updated revision date. 
                Continued use of the website after changes constitutes acceptance 
                of the modified terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Use, please contact us at{" "}
                <a href="mailto:info@elevateqcs.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@elevateqcs.com
                </a>{" "}
                or through our secure contact form.
              </p>
              <div className="mt-4 p-6 bg-secondary/30 rounded-sm">
                <p className="text-foreground font-medium">Elevate Quality Compliance Solutions LLC</p>
                <p className="text-muted-foreground text-sm mt-1">
                  Jurisdiction: Delaware, USA<br />
                  Global Operations
                </p>
                <div className="mt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium text-sm rounded-sm hover:bg-accent/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
