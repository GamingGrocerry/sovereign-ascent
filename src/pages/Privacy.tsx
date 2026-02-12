import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div className="page-hero-overlay" />
        <div className="container-narrow relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Legal
          </p>
          <h1 className="mb-6 gold-accent pb-4">Privacy Policy</h1>
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
              We collect only the information needed to respond to your inquiry and 
              deliver our services. We never sell your data. All client information 
              is protected under NDA. We use encryption and secure access controls 
              to protect your information. You can request access to, correction of, 
              or deletion of your data at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none space-y-12">
            
            <div>
              <h2 className="text-2xl mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elevate Quality Compliance Solutions LLC ("ElevateQCS," "we," "our," or "us") 
                is committed to protecting the privacy and confidentiality of our clients, 
                prospective clients, and website visitors. This Privacy Policy describes 
                how we collect, use, and protect personal information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following categories of information:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, company name, and job title provided through inquiry forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Engagement Information:</strong> Details about your organization's compliance needs shared during consultations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span><strong className="text-foreground">Technical Information:</strong> Browser type, IP address, and usage data collected automatically through cookies and analytics.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use collected information solely for legitimate business purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Responding to inquiries and providing requested information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Delivering advisory services under engagement agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Sending relevant insights and publications (with consent)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Improving our website and services</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Complying with legal and regulatory obligations</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Confidentiality Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Confidentiality is foundational to our practice. All client information 
                shared during engagements is protected under comprehensive Non-Disclosure 
                Agreements executed at the commencement of each engagement. We do not 
                disclose client identities, engagement details, or any proprietary 
                information without explicit written authorization.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect 
                personal information against unauthorized access, alteration, disclosure, 
                or destruction. These measures include encryption, secure access controls, 
                and regular security assessments.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain personal information only for as long as necessary to fulfill 
                the purposes for which it was collected, comply with legal obligations, 
                resolve disputes, and enforce agreements. Engagement records are retained 
                in accordance with professional standards and applicable regulations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your jurisdiction, you may have rights regarding your personal information:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Access to personal information we hold about you</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Correction of inaccurate information</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Deletion of personal information (subject to legal requirements)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Objection to processing for marketing purposes</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, rent, or trade personal information to third parties. 
                We may use trusted service providers for website hosting and analytics, 
                who are bound by contractual obligations to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">International Transfers</h2>
              <p className="text-muted-foreground leading-relaxed">
                ElevateQCS operates globally. Personal information may be transferred 
                to and processed in jurisdictions outside your country of residence. 
                We ensure appropriate safeguards are in place for such transfers in 
                compliance with applicable data protection laws.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For privacy-related inquiries or to exercise your rights, please contact 
                us at{" "}
                <a href="mailto:info@elevateqcs.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@elevateqcs.com
                </a>{" "}
                or through our secure contact form.
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

            <div>
              <h2 className="text-2xl mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically. Material changes will 
                be communicated through our website. Continued use of our services 
                after such changes constitutes acceptance of the updated policy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
