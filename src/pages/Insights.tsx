import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, ChevronRight } from "lucide-react";

const articles = [
  {
    slug: "cost-of-non-compliance",
    category: "Risk Analysis",
    title: "The True Cost of Non-Compliance in Government Contracting",
    excerpt: "Beyond immediate penalties, non-compliance creates cascading risks that can permanently alter an organization's competitive position in the federal marketplace.",
    readTime: "8 min read",
    date: "January 2026",
  },
  {
    slug: "audit-failure-patterns",
    category: "Audit Insights",
    title: "Common Patterns in Failed Quality Audits",
    excerpt: "Analysis of recurring themes in audit findings reveals that most failures stem from systemic issues rather than isolated non-conformances.",
    readTime: "6 min read",
    date: "January 2026",
  },
  {
    slug: "ctip-enforcement-trends",
    category: "Regulatory Landscape",
    title: "CTIP Enforcement: What 2025 Trends Mean for 2026 Compliance",
    excerpt: "Recent enforcement actions signal increased scrutiny of contractor CTIP programs. Organizations should prepare for heightened oversight.",
    readTime: "7 min read",
    date: "January 2026",
  },
  {
    slug: "qms-scalability",
    category: "System Architecture",
    title: "Designing QMS for Scalability: Lessons from High-Growth Contractors",
    excerpt: "Quality management systems that work at $10M often fail at $100M. Here's how to architect for growth from the beginning.",
    readTime: "10 min read",
    date: "December 2025",
  },
  {
    slug: "compliance-decision-framework",
    category: "Decision Making",
    title: "A Framework for Compliance Investment Decisions",
    excerpt: "How to evaluate compliance initiatives against organizational priorities using a structured risk-benefit analysis approach.",
    readTime: "5 min read",
    date: "December 2025",
  },
  {
    slug: "documentation-best-practices",
    category: "Operations",
    title: "Documentation as Competitive Advantage",
    excerpt: "In regulated environments, documentation quality often determines audit outcomes. Best practices for building defensible records.",
    readTime: "6 min read",
    date: "November 2025",
  },
];

export default function Insights() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              Insights
            </p>
            <h1 className="mb-6">
              Perspectives on Compliance Excellence
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Analytical thought leadership on quality management, regulatory 
              compliance, and the operational realities of high-stakes 
              contracting environments.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="card-elevated p-8 flex flex-col group"
              >
                <div className="mb-4">
                  <span className="text-accent text-xs uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl mb-4 group-hover:text-accent transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                  <span className="text-muted-foreground text-xs">
                    {article.date}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center text-accent text-sm font-medium cursor-pointer group-hover:underline">
                    Read article
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Stay Informed</h2>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
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
