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
            Last updated: February 13, 2026 · Effective date: February 13, 2026
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
                This Privacy Policy describes the policies of Elevate Quality Compliance 
                Solutions LLC, 2604 Whittier Pl, Delaware 19808, United States of America, 
                email:{" "}
                <a href="mailto:info@elevateqcs.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@elevateqcs.com
                </a>
                , on the collection, use and disclosure of your information that we collect 
                when you use our website ({" "}
                <a href="https://elevateqcs.com/" className="text-accent hover:text-accent/80 transition-colors">
                  https://elevateqcs.com/
                </a>
                ) (the "Service"). By accessing or using the Service, you are consenting to 
                the collection, use and disclosure of your information in accordance with 
                this Privacy Policy. If you do not consent to the same, please do not access 
                or use the Service.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We may modify this Privacy Policy at any time without any prior notice to you 
                and will post the revised Privacy Policy on the Service. The revised Policy 
                will be effective 180 days from when the revised Policy is posted in the 
                Service and your continued access or use of the Service after such time will 
                constitute your acceptance of the revised Privacy Policy. We therefore 
                recommend that you periodically review this page.
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
                We will use the information that we collect about you for the following purposes:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Customer feedback collection</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Administration info</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Targeted advertising</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Manage customer order</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Site protection</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                If we want to use your information for any other purpose, we will ask you for 
                consent and will use your information only on receiving your consent and then, 
                only for the purpose(s) for which you grant consent unless we are required to 
                do otherwise by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">How We Share Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We will not transfer your personal information to any third party without 
                seeking your consent, except in limited circumstances as described below:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Analytics</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We require such third party's to use the personal information we transfer to 
                them only for the purpose for which it was transferred and not to retain it 
                for longer than is required for fulfilling the said purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We may also disclose your personal information for the following: (1) to comply 
                with applicable law, regulation, court order or other legal process; (2) to 
                enforce your agreements with us, including this Privacy Policy; or (3) to respond 
                to claims that your use of the Service violates any third-party rights. If the 
                Service or our company is merged or acquired with another company, your information 
                will be one of the assets that is transferred to the new owner.
              </p>
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
              <h2 className="text-2xl mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on the law that applies, you may have a right to access and rectify 
                or erase your personal data or receive a copy of your personal data, restrict 
                or object to the active processing of your data, ask us to share (port) your 
                personal information to another entity, withdraw any consent you provided to 
                us to process your data, a right to lodge a complaint with a statutory authority 
                and such other rights as may be relevant under applicable laws. To exercise 
                these rights, you can write to us at{" "}
                <a href="mailto:info@elevateqcs.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@elevateqcs.com
                </a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Do note that if you do not allow us to collect or process the required personal 
                information or withdraw the consent to process the same for the required purposes, 
                you may not be able to access or use the services for which your information was sought.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                To learn more about how we use cookies and your choices in relation to these 
                tracking technologies, please refer to our{" "}
                <Link to="/cookie-policy" className="text-accent hover:text-accent/80 transition-colors">
                  Cookie Policy
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                The security of your information is important to us and we will use reasonable 
                security measures to prevent the loss, misuse or unauthorized alteration of your 
                information under our control. However, given the inherent risks, we cannot 
                guarantee absolute security and consequently, we cannot ensure or warrant the 
                security of any information you transmit to us and you do so at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Third Party Links & Use Of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our Service may contain links to other websites that are not operated by us. 
                This Privacy Policy does not address the privacy policy and other practices 
                of any third parties, including any third party operating any website or service 
                that may be accessible via a link on the Service. We strongly advise you to 
                review the privacy policy of every site you visit. We have no control over and 
                assume no responsibility for the content, privacy policies or practices of any 
                third party sites or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Grievance / Data Protection Officer</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any queries or concerns about the processing of your information 
                that is available with us, you may email our Grievance Officer at Elevate 
                Quality Compliance Solutions LLC, 2604 Whittier Pl, email:{" "}
                <a href="mailto:info@elevateqcs.com" className="text-accent hover:text-accent/80 transition-colors">
                  info@elevateqcs.com
                </a>. 
                We will address your concerns in accordance with applicable law.
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

            <div className="pt-4 border-t border-border">
              <p className="text-muted-foreground/60 text-xs">
                Privacy Policy generated with{" "}
                <a href="https://www.cookieyes.com/" target="_blank" rel="noopener noreferrer" className="text-accent/60 hover:text-accent/80 transition-colors">
                  CookieYes
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
