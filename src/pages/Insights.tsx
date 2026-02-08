import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, ChevronRight, BookOpen, TrendingUp, AlertCircle } from "lucide-react";
import insightsLibrary from "@/assets/insights-library.jpg";
import insightsFeatured from "@/assets/insights-featured.jpg";
import auditPrecision from "@/assets/audit-precision.jpg";

const featuredArticle = {
  slug: "cost-of-non-compliance",
  category: "Risk Analysis",
  title: "The True Cost of Non-Compliance in Government Contracting",
  excerpt: "Beyond immediate penalties, non-compliance creates cascading risks that can permanently alter an organization's competitive position in the federal marketplace.",
  readTime: "8 min read",
  date: "January 2026",
};

const articles = [
  {
    slug: "audit-failure-patterns",
    category: "Audit Insights",
    icon: AlertCircle,
    title: "Common Patterns in Failed Quality Audits",
    excerpt: "Analysis of recurring themes in audit findings reveals that most failures stem from systemic issues rather than isolated non-conformances.",
    readTime: "6 min read",
    date: "January 2026",
  },
  {
    slug: "ctip-enforcement-trends",
    category: "Regulatory Landscape",
    icon: TrendingUp,
    title: "CTIP Enforcement: What 2025 Trends Mean for 2026 Compliance",
    excerpt: "Recent enforcement actions signal increased scrutiny of contractor CTIP programs. Organizations should prepare for heightened oversight.",
    readTime: "7 min read",
    date: "January 2026",
  },
  {
    slug: "qms-scalability",
    category: "System Architecture",
    icon: BookOpen,
    title: "Designing QMS for Scalability: Lessons from High-Growth Contractors",
    excerpt: "Quality management systems that work at $10M often fail at $100M. Here's how to architect for growth from the beginning.",
    readTime: "10 min read",
    date: "December 2025",
  },
  {
    slug: "compliance-decision-framework",
    category: "Decision Making",
    icon: TrendingUp,
    title: "A Framework for Compliance Investment Decisions",
    excerpt: "How to evaluate compliance initiatives against organizational priorities using a structured risk-benefit analysis approach.",
    readTime: "5 min read",
    date: "December 2025",
  },
  {
    slug: "documentation-best-practices",
    category: "Operations",
    icon: BookOpen,
    title: "Documentation as Competitive Advantage",
    excerpt: "In regulated environments, documentation quality often determines audit outcomes. Best practices for building defensible records.",
    readTime: "6 min read",
    date: "November 2025",
  },
  {
    slug: "supply-chain-compliance",
    category: "Risk Management",
    icon: AlertCircle,
    title: "Supply Chain Compliance: Beyond First-Tier Visibility",
    excerpt: "Extending compliance oversight into sub-tier supply chains requires systematic approaches that balance thoroughness with practicality.",
    readTime: "8 min read",
    date: "November 2025",
  },
];

const categories = [
  { name: "All", count: 7 },
  { name: "Risk Analysis", count: 2 },
  { name: "Audit Insights", count: 1 },
  { name: "Regulatory Landscape", count: 1 },
  { name: "System Architecture", count: 2 },
  { name: "Operations", count: 1 },
];

export default function Insights() {
  return (
    <Layout>
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
                Analytical thought leadership on quality management, regulatory 
                compliance, and the operational realities of high-stakes 
                contracting environments.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="image-frame rounded-sm overflow-hidden">
                <img 
                  src={insightsLibrary} 
                  alt="Legal books representing knowledge and expertise" 
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="relative rounded-sm overflow-hidden group cursor-pointer">
            <img 
              src={methodologyRipples} 
              alt="Abstract ripples representing methodical thinking"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
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
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm rounded-sm transition-colors ${
                  index === 0 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {category.name}
                <span className="ml-2 opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background section-luxury">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="section-divider mb-8" />
              <h2 className="mb-12">Recent Publications</h2>
              <div className="space-y-8">
                {articles.map((article) => (
                  <article
                    key={article.slug}
                    className="card-elevated p-6 md:p-8 flex gap-6 group cursor-pointer"
                  >
                    <div className="hidden md:flex w-16 h-16 rounded-sm bg-gradient-to-br from-secondary to-secondary/50 items-center justify-center shrink-0">
                      <article.icon className="w-8 h-8 text-accent" />
                    </div>
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
                        <span className="text-muted-foreground text-xs">
                          {article.date}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                {/* About Insights */}
                <div className="card-elevated p-6">
                  <h3 className="text-lg mb-4">About Our Insights</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Our publications are grounded in operational experience—not 
                    theoretical research. Each analysis reflects lessons learned 
                    from real-world compliance challenges.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We publish substantive analysis, not promotional content. 
                    No sales pitches, just actionable intelligence.
                  </p>
                </div>

                {/* Image */}
                <div className="relative rounded-sm overflow-hidden">
                  <img 
                    src={auditPrecision} 
                    alt="Precision measurement representing audit accuracy"
                    className="w-full h-[200px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-primary-foreground text-sm font-medium">
                      Precision in compliance is not optional
                    </p>
                  </div>
                </div>

                {/* Topics */}
                <div className="card-elevated p-6">
                  <h3 className="text-lg mb-4">Topics We Cover</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Quality Management Systems
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      CTIP & Ethical Labor Compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Audit Preparation & Response
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Regulatory Trends & Analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      Risk Management Frameworks
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
            enforcement trends, and compliance best practices. 
            No promotional content—only substantive insights.
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
