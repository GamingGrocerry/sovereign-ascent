import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, ChevronRight } from "lucide-react";
import { getArticleBySlug, articles } from "@/data/insights-data";
import insightsFeatured from "@/assets/insights-featured.jpg";
import NotFound from "./NotFound";

const BASE_URL = "https://elevateqcs.com";

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // Build keyword-rich terms from title and category
  const keywords = [
    article.category.toLowerCase(),
    "government contractor compliance",
    "GovCon advisory",
    ...article.title.toLowerCase().split(/\s+/).filter((w) => w.length > 4),
  ];

  return (
    <Layout>
      <SEOHead
        title={`${article.title} | ElevateQCS Insights`}
        description={article.excerpt}
        url={`${BASE_URL}/insights/${article.slug}`}
        type="article"
        publishedDate={article.date}
        keywords={keywords}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          url: `${BASE_URL}/insights/${article.slug}`,
          datePublished: article.date,
          author: {
            "@type": "Organization",
            name: "Elevate Quality Compliance Solutions LLC",
            url: BASE_URL,
          },
          publisher: {
            "@type": "Organization",
            name: "ElevateQCS",
            url: BASE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${BASE_URL}/logos/elevatequcs-logo-blue-hd.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${BASE_URL}/insights/${article.slug}`,
          },
          articleSection: article.category,
          inLanguage: "en-US",
          isAccessibleForFree: true,
        }}
      />

      {/* Hero */}
      <section className="page-hero pt-32 pb-16 bg-secondary/30">
        <div
          className="page-hero-bg"
          style={{ backgroundImage: `url(${insightsFeatured})` }}
        />
        <div className="page-hero-overlay" />
        <div className="container-narrow relative z-10">
          <Link
            to="/insights"
            className="inline-flex items-center text-accent text-sm mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
            {article.category}
          </p>
          <h1 className="mb-6 gold-accent pb-4">{article.title}</h1>
          <div className="flex items-center gap-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
            <time>{article.date}</time>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container-narrow">
          <div className="prose prose-lg max-w-none article-content">
            {renderMarkdown(article.content)}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="section-divider mb-8" />
          <h2 className="mb-12">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((a) => (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                className="card-elevated p-6 group"
              >
                <span className="text-accent text-xs uppercase tracking-wide">
                  {a.category}
                </span>
                <h3 className="text-lg mt-3 mb-3 group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                  {a.excerpt}
                </p>
                <span className="inline-flex items-center text-accent text-sm font-medium group-hover:underline">
                  Read article
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container-narrow text-center">
          <h2 className="mb-6">Need Guidance on This Topic?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our advisory team can help you apply these insights to your
            organization's specific compliance challenges.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">
              Request Consultation
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

/* ─── Markdown Renderer ─── */

function renderMarkdown(md: string) {
  const lines = md.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const parseInline = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(\[(.+?)\]\((.+?)\))|(`(.+?)`)/g;
    let lastIndex = 0;
    let match;
    let inlineKey = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
      if (match[1]) parts.push(<strong key={inlineKey++}>{match[2]}</strong>);
      else if (match[3]) parts.push(<em key={inlineKey++}>{match[4]}</em>);
      else if (match[5])
        parts.push(
          <Link key={inlineKey++} to={match[7]} className="text-link">
            {match[6]}
          </Link>
        );
      else if (match[8])
        parts.push(
          <code key={inlineKey++} className="bg-secondary px-1.5 py-0.5 rounded text-sm">
            {match[9]}
          </code>
        );
      lastIndex = match.index + match[0].length;
    }
    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts.length ? parts : [text];
  };

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") { i++; continue; }

    if (/^---+$/.test(line.trim())) {
      elements.push(<hr key={key++} className="my-10 border-border" />);
      i++; continue;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const Tag = `h${level}` as keyof JSX.IntrinsicElements;
      const className = level === 2 ? "mt-12 mb-6" : level === 3 ? "mt-8 mb-4" : "mt-6 mb-3";
      elements.push(<Tag key={key++} className={className}>{parseInline(headingMatch[2])}</Tag>);
      i++; continue;
    }

    if (line.includes("|") && i + 1 < lines.length && lines[i + 1]?.includes("---")) {
      const headerCells = line.split("|").map((c) => c.trim()).filter(Boolean);
      i += 2;
      const rows: string[][] = [];
      while (i < lines.length && lines[i].includes("|")) {
        rows.push(lines[i].split("|").map((c) => c.trim()).filter(Boolean));
        i++;
      }
      elements.push(
        <div key={key++} className="overflow-x-auto my-8">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                {headerCells.map((cell, ci) => (
                  <th key={ci} className="text-left py-3 px-4 border-b-2 border-border font-semibold text-foreground">
                    {parseInline(cell)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-3 px-4 border-b border-border text-muted-foreground">
                      {parseInline(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(<li key={items.length} className="text-muted-foreground">{parseInline(lines[i].replace(/^\d+\.\s/, ""))}</li>);
        i++;
      }
      elements.push(<ol key={key++} className="list-decimal list-inside space-y-2 my-6 pl-4">{items}</ol>);
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items: React.ReactNode[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(<li key={items.length} className="text-muted-foreground">{parseInline(lines[i].replace(/^[-*]\s/, ""))}</li>);
        i++;
      }
      elements.push(<ul key={key++} className="list-disc list-inside space-y-2 my-6 pl-4">{items}</ul>);
      continue;
    }

    elements.push(<p key={key++} className="my-4 text-muted-foreground leading-relaxed">{parseInline(line)}</p>);
    i++;
  }

  return <>{elements}</>;
}
