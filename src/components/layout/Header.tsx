import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { cn } from "@/lib/utils";

const servicesMegaMenu = [
  { label: "Governance & Strategy", href: "/services/governance-strategy" },
  { label: "Risk, Regulatory & Compliance", href: "/services/risk-regulatory-compliance" },
  { label: "Federal & Public Sector Advisory", href: "/services/federal-public-sector" },
  { label: "Supply Chain, Human Rights & Due Diligence", href: "/services/supply-chain-human-rights" },
  { label: "Quality & Operational Infrastructure", href: "/services/quality-operational-infrastructure" },
  { label: "Regulatory Documentation", href: "/services/regulatory-documentation" },
  { label: "Audit & Certification Readiness", href: "/services/audit-certification-readiness" },
  { label: "Managed Compliance", href: "/services/managed-compliance" },
  { label: "Digital Governance", href: "/services/digital-governance" },
  { label: "Project Recovery & Distressed Assets", href: "/services/project-recovery" },
  { label: "AI Governance & Algorithmic Quality", href: "/services/ai-governance" },
];

const industriesMegaMenu = [
  { label: "Defense & Aerospace", href: "/industries/defense" },
  { label: "Federal IT & Systems Integration", href: "/industries/federal-it" },
  { label: "Medical Devices & Life Sciences", href: "/industries/medical-devices" },
  { label: "AI & Deep Tech", href: "/industries/ai-deep-tech" },
  { label: "Advanced Manufacturing", href: "/industries/advanced-manufacturing" },
  { label: "Cybersecurity", href: "/industries/cybersecurity" },
  { label: "Infrastructure & Engineering", href: "/industries/infrastructure" },
  { label: "International Development", href: "/industries/international-development" },
  { label: "Climate & Energy", href: "/industries/climate-energy" },
];

const navItems = [
  {
    label: "Services",
    href: "/services",
    megaMenu: true,
  },
  {
    label: "Industries",
    href: "/industries",
    megaMenu: "industries",
  },
  { label: "Methodology", href: "/methodology" },
  { label: "Insights", href: "/insights" },
  { label: "Tools", href: "/tools" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "All Frameworks", href: "/resources" },
      { label: "Enterprise & Federal Compliance", href: "/resources/enterprise-federal" },
      { label: "High-Growth & Regulated Markets", href: "/resources/high-growth" },
      { label: "Program & Operational Execution", href: "/resources/program-execution" },
    ]
  },
  { 
    label: "About Us", 
    href: "/about",
    dropdown: [
      { label: "Our Firm", href: "/about" },
      { label: "Credentials", href: "/credentials" },
      { label: "Governance & Independence", href: "/governance" },
      { label: "Engagement Model", href: "/engagement" },
      { label: "FAQs", href: "/faq" },
      { label: "Careers & Collaborations", href: "/careers" },
    ]
  },
];

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";
  const showDarkHeader = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : showDarkHeader
          ? "bg-transparent"
          : "bg-card border-b border-border"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group -ml-4">
            <img 
              src={showDarkHeader ? "/logos/elevatequcs-icon-dark.png" : "/logos/elevatequcs-icon-light.png"}
              alt="ElevateQCS"
              className="w-10 h-10 object-contain transition-opacity"
            />
            <div className="hidden sm:block">
              <span className={cn(
                "font-serif font-semibold text-lg tracking-tight transition-colors",
                showDarkHeader ? "text-primary-foreground" : "text-foreground"
              )}>
                ElevateQCS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div 
                key={item.href + item.label}
                className="relative"
                onMouseEnter={() => (item.dropdown || item.megaMenu) && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-xs font-medium tracking-widest uppercase transition-colors relative flex items-center gap-1 py-2",
                    location.pathname === item.href || (item.megaMenu === true && location.pathname.startsWith("/services")) || (item.megaMenu === "industries" && location.pathname.startsWith("/industries"))
                      ? showDarkHeader 
                        ? "text-primary-foreground" 
                        : "text-accent"
                      : showDarkHeader
                      ? "text-primary-foreground/70 hover:text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    (location.pathname === item.href || (item.megaMenu === true && location.pathname.startsWith("/services")) || (item.megaMenu === "industries" && location.pathname.startsWith("/industries"))) && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                  )}
                >
                  {item.label}
                  {(item.dropdown || item.megaMenu) && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Standard Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                    <div className="bg-card border border-border rounded-sm shadow-lg py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          className={cn(
                            "block px-4 py-2.5 text-sm transition-colors hover:bg-secondary",
                            location.pathname === subItem.href
                              ? "text-accent"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Mega Menu */}
                {item.megaMenu === true && openDropdown === item.label && (
                  <div className="absolute top-full -left-20 pt-2 w-[680px]">
                    <div className="bg-card border border-border rounded-sm shadow-lg p-6">
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                        {servicesMegaMenu.map((service) => (
                          <Link
                            key={service.href}
                            to={service.href}
                            className={cn(
                              "block py-2.5 text-sm transition-colors hover:text-accent",
                              location.pathname === service.href
                                ? "text-accent"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border mt-4 pt-4">
                        <Link
                          to="/choosing-the-right-service"
                          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                        >
                          Choosing the Right Service
                          <ChevronDown className="w-3 h-3 ml-1 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Industries Mega Menu */}
                {item.megaMenu === "industries" && openDropdown === item.label && (
                  <div className="absolute top-full -left-20 pt-2 w-[680px]">
                    <div className="bg-card border border-border rounded-sm shadow-lg p-6">
                      <div className="grid grid-cols-3 gap-x-6 gap-y-1">
                        {industriesMegaMenu.map((industry) => (
                          <Link
                            key={industry.href}
                            to={industry.href}
                            className={cn(
                              "block py-2.5 text-sm transition-colors hover:text-accent",
                              location.pathname === industry.href
                                ? "text-accent"
                                : "text-muted-foreground hover:text-foreground"
                            )}
                          >
                            {industry.label}
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-border mt-4 pt-4">
                        <Link
                          to="/industries"
                          className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                        >
                          All Industries
                          <ChevronDown className="w-3 h-3 ml-1 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search + CTA */}
          <div className="hidden lg:flex items-center gap-4 -mr-4">
            <Button
              variant={showDarkHeader ? "hero" : "cta"}
              size="default"
              asChild
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <SearchBar isDark={showDarkHeader} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              showDarkHeader ? "text-primary-foreground" : "text-foreground"
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="container-wide py-6 space-y-1">
            {/* Services Group */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Services</p>
              {servicesMegaMenu.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm py-2 pl-4 transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/choosing-the-right-service"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-sm py-2 pl-4 font-medium transition-colors",
                  location.pathname === "/choosing-the-right-service"
                    ? "text-accent"
                    : "text-accent/70 hover:text-accent"
                )}
              >
                Choosing the Right Service →
              </Link>
            </div>

            <Link
              to="/methodology"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-medium tracking-wide uppercase py-3 transition-colors",
                location.pathname === "/methodology"
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Methodology
            </Link>
            <Link
              to="/insights"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-medium tracking-wide uppercase py-3 transition-colors",
                location.pathname === "/insights"
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Insights
            </Link>

            <Link
              to="/tools"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-medium tracking-wide uppercase py-3 transition-colors",
                location.pathname.startsWith("/tools")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Tools
            </Link>

            {/* Industries Group */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Industries</p>
              {industriesMegaMenu.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm py-2 pl-4 transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-sm py-2 pl-4 font-medium transition-colors",
                  location.pathname === "/industries"
                    ? "text-accent"
                    : "text-accent/70 hover:text-accent"
                )}
              >
                All Industries →
              </Link>
            </div>

            {/* Resources Group */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Resources</p>
              {[
                { label: "All Frameworks", href: "/resources" },
                { label: "Enterprise & Federal Compliance", href: "/resources/enterprise-federal" },
                { label: "High-Growth & Regulated Markets", href: "/resources/high-growth" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm py-2 pl-4 transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* About Group */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">About Us</p>
              {[
                { label: "Our Firm", href: "/about" },
                { label: "Credentials", href: "/credentials" },
                { label: "Governance & Independence", href: "/governance" },
                { label: "Engagement Model", href: "/engagement" },
                { label: "FAQs", href: "/faq" },
                { label: "Careers & Collaborations", href: "/careers" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm py-2 pl-4 transition-colors",
                    location.pathname === item.href
                      ? "text-accent"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="pt-4">
              <Button variant="cta" size="lg" className="w-full" asChild>
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Request Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
