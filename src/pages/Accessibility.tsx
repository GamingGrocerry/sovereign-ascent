import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Accessibility() {
  return (
    <Layout>
      <SEOHead
        title="Accessibility Statement | ElevateQCS"
        description="ElevateQCS commitment to digital accessibility and inclusivity. WCAG 2.1 AA compliance efforts."
        url="https://elevateqcs.com/accessibility"
      />
      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div className="page-hero-overlay" />
        <div className="container-narrow relative z-10">
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            Commitment
          </p>
          <h1 className="mb-6 gold-accent pb-4">Accessibility Statement</h1>
          <p className="text-muted-foreground">
            Our commitment to digital accessibility and inclusivity
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
              We believe everyone deserves equal access to information. Our website 
              is designed to work with screen readers, keyboard navigation, and other 
              assistive technologies. We follow WCAG 2.2 AA standards and are always 
              working to improve. If you encounter any barrier, please let us know — 
              we take accessibility feedback seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none space-y-12">
            
            <div>
              <h2 className="text-2xl mb-4">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Elevate Quality Compliance Solutions LLC is committed to ensuring 
                digital accessibility for people with disabilities. We are continually 
                improving the user experience for everyone and applying the relevant 
                accessibility standards to our website and digital communications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Accessibility Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 
                at Level AA. These guidelines explain how to make web content more 
                accessible for people with disabilities and more user-friendly for everyone.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our efforts include:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Clear and consistent navigation throughout the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Sufficient color contrast between text and backgrounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Descriptive alternative text for images</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Keyboard-accessible navigation and interactive elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Semantic HTML structure for screen reader compatibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Responsive design that adapts to different screen sizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Clear and readable typography with appropriate sizing</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Assistive Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website is designed to be compatible with assistive technologies, 
                including screen readers, screen magnifiers, and voice recognition 
                software. We regularly test our website with various assistive 
                technologies to ensure broad compatibility.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Known Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for full accessibility, some content may have 
                limitations due to the nature of certain features or third-party 
                integrations. We are actively working to address any known issues 
                and improve accessibility across all aspects of our digital presence.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Feedback</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We welcome your feedback on the accessibility of our website. 
                If you encounter any barriers or have suggestions for improvement, 
                please contact us. We take all feedback seriously and will work 
                to address issues promptly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When reporting accessibility issues, please include:
              </p>
              <ul className="space-y-3 text-muted-foreground mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>The page URL where you encountered the issue</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>A description of the problem</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>The assistive technology used (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>Your browser and operating system</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Alternative Formats</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you require information from our website in an alternative format, 
                please contact us and we will work to accommodate your needs within 
                a reasonable timeframe.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For accessibility-related inquiries or to report issues:
              </p>
              <div className="mt-4 p-6 bg-secondary/30 rounded-sm">
                <p className="text-foreground font-medium">Elevate Quality Compliance Solutions LLC</p>
                <p className="text-muted-foreground text-sm mt-2">
                  Email:{" "}
                  <a href="mailto:info@elevateqcs.com" className="text-accent hover:text-accent/80 transition-colors">
                    info@elevateqcs.com
                  </a>
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Or use our <Link to="/contact" className="text-accent hover:text-accent/80 transition-colors">contact form</Link> for accessibility feedback.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Questions or Feedback?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're committed to continuous improvement. If you have suggestions 
            for making our website more accessible, please let us know.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
