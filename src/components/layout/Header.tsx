import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Industries",
    href: "/industries/defense",
    dropdown: [
      { label: "Defense & Government Contracting", href: "/industries/defense" },
      { label: "Growth-Stage & Commercial", href: "/industries/growth-stage" },
    ]
  },
  { label: "Methodology", href: "/methodology" },
  { label: "Insights", href: "/insights" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "All Resources", href: "/resources" },
      { label: "GovCon Resources", href: "/resources/govcon" },
      { label: "Startup Resources", href: "/resources/startup" },
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

  // Determine if we're on the homepage (dark header) or other pages (light header)
  const isHomePage = location.pathname === "/";
  const showDarkHeader = isHomePage && !isScrolled;

  // Filter out duplicate About link for desktop
  const desktopNavItems = navItems.filter(item => item.label !== "About");

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
          <Link to="/" className="flex items-center gap-3 group">
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
            {desktopNavItems.map((item) => (
              <div 
                key={item.href + item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "text-xs font-medium tracking-widest uppercase transition-colors relative flex items-center gap-1 py-2",
                    location.pathname === item.href
                      ? showDarkHeader 
                        ? "text-primary-foreground" 
                        : "text-accent"
                      : showDarkHeader
                      ? "text-primary-foreground/70 hover:text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    location.pathname === item.href && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                  )}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Dropdown Menu */}
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
              </div>
            ))}
          </div>

          {/* Search + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <SearchBar isDark={showDarkHeader} />
            <Button
              variant={showDarkHeader ? "hero" : "cta"}
              size="default"
              asChild
            >
              <Link to="/contact">Request Consultation</Link>
            </Button>
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
            <Link
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block text-sm font-medium tracking-wide uppercase py-3 transition-colors",
                location.pathname === "/services"
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Services
            </Link>
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

            {/* Industries Group */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Industries</p>
              {[
                { label: "Defense & Government Contracting", href: "/industries/defense" },
                { label: "Growth-Stage & Commercial", href: "/industries/growth-stage" },
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

            {/* Resources Group */}
            <div className="py-2">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-wider mb-2">Resources</p>
              {[
                { label: "All Resources", href: "/resources" },
                { label: "GovCon Resources", href: "/resources/govcon" },
                { label: "Startup Resources", href: "/resources/startup" },
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
                { label: "Credentials", href: "/credentials" },
                { label: "Governance & Independence", href: "/governance" },
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
