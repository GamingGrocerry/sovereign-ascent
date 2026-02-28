import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Clock } from "lucide-react";
import { allArticles, type Article } from "@/data/insights-data";

interface Capability {
  title: string;
  items: string[];
}

interface ServicePageProps {
  seo: {
    title: string;
    description: string;
    url: string;
    keywords?: string[];
  };
  hero: {
    label: string;
    headline: string;
    description: string;
    image: string;
  };
  credibility: {
    title: string;
    paragraphs: string[];
  };
  capabilities: Capability[];
  people: {
    title: string;
    paragraphs: string[];
  };
  relatedInsightSlugs: string[];
}

export default function ServicePageLayout({
  seo,
  hero,
  credibility,
  capabilities,
  people,
  relatedInsightSlugs,
}: ServicePageProps) {
  const relatedInsights = relatedInsightSlugs
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter(Boolean) as Article[];

  return (
    <Layout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        url={seo.url}
        keywords={seo.keywords}
      />

      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${hero.image})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 text-center max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
            {hero.label}
          </p>
          <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
            {hero.headline}
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto mb-6 sm:mb-12 animate-fade-up-delay-2">
            {hero.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 animate-fade-up-delay-3 px-2 sm:px-0">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
              <Link to="/contact">
                Contact
                <ArrowRight className="ml-2 shrink-0" size={16} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild className="w-full sm:w-auto !text-xs sm:!text-base !px-4 sm:!px-8">
              <Link to="/contact">
                Submit a Request for Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
            <h2 className="mb-8">{credibility.title}</h2>
            {credibility.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28 lg:py-36 bg-secondary/30 section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Our Capabilities
            </p>
            <h2>What We Deliver</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <div key={i} className="card-elevated p-8">
                <h4 className="text-lg font-serif mb-5 text-foreground">{cap.title}</h4>
                <ul className="space-y-3">
                  {cap.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* People & Expertise */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              People & Expertise
            </p>
            <h2 className="mb-8">{people.title}</h2>
            {people.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="py-28 lg:py-36 bg-secondary/30 section-luxury">
          <div className="container-wide">
            <div className="max-w-3xl mb-16">
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Related Insights
              </p>
              <h2>Perspectives That Inform This Practice</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedInsights.map((article) => (
                <Link
                  key={article.slug}
                  to={`/insights/${article.slug}`}
                  className="card-elevated group overflow-hidden"
                >
                  {article.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">
                      {article.category}
                    </span>
                    <h4 className="text-lg font-serif mb-3 group-hover:text-accent transition-colors text-foreground">
                      {article.title}
                    </h4>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </div>
                      <span className="inline-flex items-center text-accent font-medium">
                        Read <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-28 bg-background">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Start a Confidential Conversation</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to discuss how this practice applies to your organization?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">
                Contact
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/contact">
                Submit a Request for Proposal
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
