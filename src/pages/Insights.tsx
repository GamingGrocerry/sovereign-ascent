import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";
import { featuredArticle, articles, categories } from "@/data/insights-data";
import insightsLibrary from "@/assets/insights-library.jpg";
import insightsFeatured from "@/assets/insights-featured.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";

const BASE_URL = "https://elevateqcs.com";

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <Layout>
      <SEOHead
        title="Compliance Insights & Analysis | ElevateQCS"
        description="Expert analysis of government contractor compliance risks, audit failure patterns, CTIP enforcement trends, and QMS architecture. Actionable intelligence for GovCon primes and subcontractors."
        url={`${BASE_URL}/insights`}
        keywords={[
          "government contractor compliance",
          "GovCon audit readiness",
          "CTIP compliance advisory",
          "FAR 52.222-50",
          "quality management system",
          "compliance risk analysis",
          "audit failure patterns",
          "supply chain compliance",
          "QMS scalability",
          "regulatory compliance",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "ElevateQCS Compliance Insights",
          description:
            "Analysis and interpretation of recurring compliance risks for government contractors — grounded in operational experience.",
          url: `${BASE_URL}/insights`,
          publisher: {
            "@type": "Organization",
            name: "Elevate Quality Compliance Solutions LLC",
            url: BASE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${BASE_URL}/logos/elevatequcs-logo-blue-hd.png`,
            },
          },
          inLanguage: "en-US",
          blogPost: [featuredArticle, ...articles].map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            description: a.excerpt,
            url: `${BASE_URL}/insights/${a.slug}`,
            datePublished: a.date,
            author: {
              "@type": "Organization",
              name: "ElevateQCS",
            },
          })),
        }}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-24 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${insightsLibrary})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
                Insights
              </p>
              <h1 className="mb-6 gold-accent pb-4">
                Perspectives on Compliance Excellence
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Analysis and interpretation of recurring compliance risks — not
                generic marketing content. Grounded in operational experience
                and focused on actionable intelligence.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img
                  src={insightsLibrary}
                  alt="Legal books representing compliance knowledge and expertise"
                  className="w-full h-[350px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <Link
            to={`/insights/${featuredArticle.slug}`}
            className="relative rounded-sm overflow-hidden group block"
          >
            <img
              src={featuredArticle.image || insightsFeatured}
              alt={featuredArticle.title}
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/60" />
            <div className="absolute inset-0 flex items-center">
              <div className="container-wide">
                <div className="max-w-xl">
                  <span className="inline-block bg-accent/20 text-accent text-xs uppercase tracking-wide px-3 py-1 rounded-sm mb-4">
                    Featured Analysis
                  </span>
                  <h2 className="text-primary-foreground text-3xl md:text-4xl mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-6">
                    <span className="inline-flex items-center text-accent font-medium group-hover:underline">
                      Read full analysis
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="text-primary-foreground/50 text-sm flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <nav aria-label="Article categories" className="flex flex-wrap gap-4">
            {categories
              .filter((c) => c.count > 0)
              .map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  aria-pressed={activeCategory === category.name}
                  className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                    activeCategory === category.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {category.name}
                  <span className="ml-2 opacity-60">({category.count})</span>
                </button>
              ))}
          </nav>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="section-divider mb-8" />
              <h2 className="mb-12">
                {activeCategory === "All"
                  ? "Recent Publications"
                  : activeCategory}
              </h2>

              {filteredArticles.length === 0 ? (
                <p className="text-muted-foreground">
                  No articles in this category yet.
                </p>
              ) : (
                <div className="space-y-8">
                  {filteredArticles.map((article) => (
                    <article key={article.slug}>
                      <Link
                        to={`/insights/${article.slug}`}
                        className="card-elevated overflow-hidden flex flex-col md:flex-row gap-0 group block"
                      >
                        {article.image && (
                          <div className="md:w-48 h-48 md:h-auto shrink-0 overflow-hidden">
                            <img
                              src={article.image}
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <div className="p-6 md:p-8 flex-1 flex gap-6">
                          {article.icon && !article.image && (
                            <div className="hidden md:flex w-16 h-16 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 items-center justify-center shrink-0">
                              <article.icon className="w-8 h-8 text-accent" />
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-accent text-xs uppercase tracking-wide">
                                {article.category}
                              </span>
                              <span className="text-muted-foreground/50">•</span>
                              <span className="text-muted-foreground text-xs flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {article.readTime}
                              </span>
                            </div>
                            <h3 className="text-xl mb-3 group-hover:text-accent transition-colors">
                              {article.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="inline-flex items-center text-accent text-sm font-medium group-hover:underline">
                                Read article
                                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                              </span>
                              <time className="text-muted-foreground text-xs">
                                {article.date}
                              </time>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="card-elevated p-6">
                  <h3 className="text-lg mb-4">About Our Insights</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our publications are grounded in operational experience—not
                    theoretical research. Each analysis reflects lessons learned
                    from real-world compliance challenges.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We publish substantive analysis, not promotional content. No
                    sales pitches, just actionable intelligence.
                  </p>
                </div>

                <div className="relative rounded-sm overflow-hidden">
                  <img
                    src={auditPrecision}
                    alt="Precision measurement representing audit accuracy"
                    className="w-full h-[200px] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-primary-foreground text-sm font-medium">
                      Precision in compliance is not optional
                    </p>
                  </div>
                </div>

                <div className="card-elevated p-6">
                  <h3 className="text-lg mb-4">Topics We Cover</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {[
                      "Quality Management Systems",
                      "CTIP & Ethical Labor Compliance",
                      "Audit Preparation & Response",
                      "Regulatory Trends & Analysis",
                      "Risk Management Frameworks",
                    ].map((topic) => (
                      <li key={topic} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Vendor Neutrality Disclaimer */}
                <div className="card-elevated p-6 border-l-2 border-accent">
                  <h3 className="text-lg mb-3">Vendor Neutrality</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    ElevateQCS maintains a vendor-neutral advisory posture. In
                    the event we identify a vendor, product, or service from
                    which we may receive referral benefits or compensation, we
                    will disclose this transparently to clients during the
                    initial engagement meeting—prior to any recommendation being
                    formalized.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <div className="section-divider mx-auto mb-8" />
          <h2 className="mb-6">Stay Informed</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto">
            Receive our quarterly analysis of regulatory developments,
            enforcement trends, and compliance best practices. No promotional
            content—only substantive insights.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Subscribe to Insights
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
