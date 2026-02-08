import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import methodologyRipples from "@/assets/methodology-ripples.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${methodologyRipples})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Content */}
        <div className="relative z-10 container-narrow text-center py-20">
          {/* Large 404 */}
          <div className="mb-8">
            <span className="font-serif text-[180px] md:text-[240px] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-muted-foreground/20 via-accent/30 to-muted-foreground/20">
              404
            </span>
          </div>
          
          <div className="section-divider mx-auto mb-8" />
          
          <h1 className="text-3xl md:text-4xl mb-6">
            Page Not Found
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let us help you navigate back to familiar territory.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/">
                <Home className="mr-2" size={18} />
                Return to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-muted-foreground text-sm mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/about" className="text-accent hover:underline">
                About Us
              </Link>
              <Link to="/services/startups" className="text-accent hover:underline">
                Our Services
              </Link>
              <Link to="/methodology" className="text-accent hover:underline">
                Methodology
              </Link>
              <Link to="/insights" className="text-accent hover:underline">
                Insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
