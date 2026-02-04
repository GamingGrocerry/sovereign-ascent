import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    dropdown: [
      { 
        label: "GovCon Primes", 
        href: "/services/govcon-primes",
        description: "Enterprise compliance for prime contractors managing complex programs"
      },
      { 
        label: "GovCon Subs", 
        href: "/services/govcon-subs",
        description: "Right-sized compliance frameworks for subcontractor organizations"
      },
      { 
        label: "Global Startups", 
        href: "/services/startups",
        description: "Scalable compliance foundations for high-growth companies"
      },
    ]
  },
  { label: "Methodology", href: "/methodology" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Determine if we're on the homepage (dark header) or other pages (light header)
  const isHomePage = location.pathname === "/";
  const showDarkHeader = isHomePage && !isScrolled;

  const isServicePage = location.pathname.startsWith("/services");

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
            <div className={cn(
              "w-10 h-10 rounded-sm flex items-center justify-center font-serif font-bold text-lg transition-colors",
              showDarkHeader 
                ? "bg-primary-foreground text-primary" 
                : "bg-primary text-primary-foreground"
            )}>
              E
            </div>
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
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className={cn(
                      "text-xs font-medium tracking-widest uppercase transition-colors relative inline-flex items-center gap-1",
                      isServicePage
                        ? showDarkHeader 
                          ? "text-primary-foreground" 
                          : "text-accent"
                        : showDarkHeader
                        ? "text-primary-foreground/70 hover:text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                      isServicePage && "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                    )}
                  >
                    {item.label}
                    <ChevronDown 
                      size={14} 
                      className={cn(
                        "transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )} 
                    />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      "text-xs font-medium tracking-widest uppercase transition-colors relative",
                      location.pathname === item.href
                        ? showDarkHeader 
                          ? "text-primary-foreground" 
                          : "text-accent"
                        : showDarkHeader
                        ? "text-primary-foreground/70 hover:text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground",
                      location.pathname === item.href && "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-72 bg-card border border-border rounded-sm shadow-lg overflow-hidden">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className={cn(
                            "block px-5 py-3 hover:bg-secondary/50 transition-colors",
                            location.pathname === subItem.href && "bg-secondary/30"
                          )}
                        >
                          <span className="block text-sm font-medium text-foreground mb-1">
                            {subItem.label}
                          </span>
                          <span className="block text-xs text-muted-foreground">
                            {subItem.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
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
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container-wide py-6 space-y-4">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.dropdown ? (
                  <div className="space-y-2">
                    <span className="block text-sm font-medium tracking-wide uppercase py-2 text-foreground">
                      {item.label}
                    </span>
                    <div className="pl-4 space-y-2 border-l-2 border-border">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.href}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "block py-2 transition-colors",
                            location.pathname === subItem.href
                              ? "text-accent"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <span className="block text-sm font-medium">{subItem.label}</span>
                          <span className="block text-xs text-muted-foreground mt-0.5">
                            {subItem.description}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block text-sm font-medium tracking-wide uppercase py-2 transition-colors",
                      location.pathname === item.href
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
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
