import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { allArticles, type Article } from "@/data/insights-data";

interface ServiceLink {
  title: string;
  description: string;
  href: string;
}

interface IndustryPageLayoutProps {
  seoTitle: string;
  seoDescription: string;
  seoUrl: string;
  seoKeywords?: string[];
  heroImage: string;
  heroTitle: string;
  heroDescription: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  challengesTitle: string;
  challenges: string[];
  services: ServiceLink[];
  impactTitle: string;
  impactParagraphs: string[];
  scenarioTitle?: string;
  scenarioText?: string;
  relatedInsightSlugs: string[];
}

export function IndustryPageLayout({
  seoTitle,
  seoDescription,
  seoUrl,
  seoKeywords,
  heroImage,
  heroTitle,
  heroDescription,
  overviewTitle,
  overviewParagraphs,
  challengesTitle,
  challenges,
  services,
  impactTitle,
  impactParagraphs,
  scenarioTitle,
  scenarioText,
  relatedInsightSlugs,
}: IndustryPageLayoutProps) {
  const relatedInsights = relatedInsightSlugs
    .map((slug) => allArticles.find((a) => a.slug === slug))
    .filter(Boolean) as Article[];

  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        url={seoUrl}
        keywords={seoKeywords}
      />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 image-overlay" />
        <div className="hidden sm:block absolute top-8 left-8 w-24 h-24 border-l border-t border-primary-foreground/20" />
        <div className="hidden sm:block absolute bottom-8 right-8 w-24 h-24 border-r border-b border-primary-foreground/20" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 py-20 sm:py-32 text-center max-w-5xl mx-auto">
          <p className="text-primary-foreground/60 uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-3 sm:mb-6 animate-fade-up">
            Industry Focus
          </p>
          <h1 className="text-primary-foreground mb-4 sm:mb-8 animate-fade-up-delay-1 text-balance !text-xl sm:!text-3xl md:!text-5xl lg:!text-6xl !leading-tight">
            {heroTitle}
          </h1>
          <p className="text-primary-foreground/80 !text-xs sm:!text-lg md:!text-xl font-light !leading-relaxed max-w-4xl mx-auto animate-fade-up-delay-2">
            {heroDescription}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-4xl">
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
            <h2 className="mb-8">{overviewTitle}</h2>
            {overviewParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Industry Challenges
            </p>
            <h2 className="mb-6">{challengesTitle}</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, i) => (
              <div key={i} className="card-elevated p-6">
                <div className="w-2 h-2 bg-accent rounded-full mb-4" />
                <p className="text-foreground font-medium text-sm leading-relaxed">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Support This Industry — Services Cards */}
      <section className="py-28 lg:py-36 bg-background section-luxury">
        <div className="container-wide">
          <div className="max-w-3xl mb-16">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              How We Support This Industry
            </p>
            <h2 className="mb-6">Relevant Service Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Our advisory services are structured to address the specific regulatory,
              operational, and strategic requirements of this sector.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="card-elevated group p-6"
              >
                <h3 className="text-lg font-serif mb-3 group-hover:text-accent transition-colors text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium">
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Impact */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-0.5 bg-gradient-to-r from-accent to-transparent mb-8" />
            <h2 className="text-primary-foreground mb-6">{impactTitle}</h2>
            {impactParagraphs.map((p, i) => (
              <p key={i} className="text-primary-foreground/80 text-lg leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Scenario (Optional) */}
      {scenarioTitle && scenarioText && (
        <section className="py-20 bg-secondary/30">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Scenario
              </p>
              <h3 className="mb-6">{scenarioTitle}</h3>
              <div className="card-elevated p-8">
                <p className="text-muted-foreground leading-relaxed italic">{scenarioText}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Insights */}
      {relatedInsights.length > 0 && (
        <section className="py-28 lg:py-36 bg-background section-luxury">
          <div className="container-wide">
            <div className="max-w-3xl mb-16">
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Related Insights
              </p>
              <h2 className="mb-6">Analytical Perspectives</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-xs text-accent uppercase tracking-wider mb-2">{article.category}</p>
                    <h4 className="text-lg font-serif group-hover:text-accent transition-colors text-foreground mb-2">
                      {article.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                    <span className="inline-flex items-center text-accent text-sm font-medium">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
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
            Ready to discuss how our advisory services apply to your organization?
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
