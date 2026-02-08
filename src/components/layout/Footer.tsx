import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Our Services", href: "/services" },
    { label: "Who We Serve", href: "/who-we-serve" },
    { label: "Methodology", href: "/methodology" },
    { label: "Engagement Model", href: "/engagement" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Governance & Independence", href: "/governance" },
    { label: "Insights", href: "/insights" },
    { label: "Careers & Collaborations", href: "/careers" },
    { label: "FAQs", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-sm bg-primary-foreground text-primary flex items-center justify-center font-serif font-bold text-lg">
                E
              </div>
              <span className="font-serif font-semibold text-xl tracking-tight">
                ElevateQCS
              </span>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Elevate Quality Compliance Solutions LLC provides independent, 
              vendor-neutral advisory services to organizations operating in 
              regulated and high-scrutiny environments.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span className="text-sm">Follow on LinkedIn</span>
            </a>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-lg mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              © 2026 Elevate Quality Compliance Solutions LLC. All rights reserved.
            </div>
            <div className="text-primary-foreground/60 text-sm">
              Jurisdiction: Delaware, USA | Global Operations
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-navy-light/50">
        <div className="container-wide py-4">
          <p className="text-primary-foreground/50 text-xs leading-relaxed text-center">
            ElevateQCS is an independent advisory firm. We are not a certification body, 
            accredited registrar, or government regulatory agency. All services are advisory 
            in nature and do not constitute legal, certification, or regulatory services.
          </p>
        </div>
      </div>
    </footer>
  );
}
