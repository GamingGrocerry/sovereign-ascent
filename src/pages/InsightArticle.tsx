import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { getArticleBySlug, articles, type Article } from "@/data/insights-data";
import { ShareButton } from "@/components/ShareButton";
import insightsFeatured from "@/assets/insights-featured.jpg";
import NotFound from "./NotFound";
import { ArticleContent } from "@/components/ArticleContent";
import { ReadinessScorecard } from "@/components/ReadinessScorecard";
import { GlossaryCallout } from "@/components/GlossaryCallout";
import { ToolsCallout } from "@/components/ToolsCallout";
import { LogisticsRiskAssessment } from "@/components/LogisticsRiskAssessment";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const BASE_URL = "https://elevateqcs.com";

/** Extract FAQ pairs from article content (### Question / paragraph answer after the "## Frequently Asked Questions" heading) */
function extractFAQs(content: string): { question: string; answer: string }[] {
  const faqSectionMatch = content.split(/^## Frequently Asked Questions$/m);
  if (faqSectionMatch.length < 2) return [];

  const faqContent = faqSectionMatch[1];
  const faqs: { question: string; answer: string }[] = [];
  const lines = faqContent.trim().split("\n");
  let currentQuestion = "";
  let currentAnswer: string[] = [];

  for (const line of lines) {
    const qMatch = line.match(/^###\s+(.+)/);
    if (qMatch) {
      if (currentQuestion && currentAnswer.length) {
        faqs.push({ question: currentQuestion, answer: currentAnswer.join(" ").trim() });
      }
      currentQuestion = qMatch[1];
      currentAnswer = [];
    } else if (currentQuestion && line.trim()) {
      currentAnswer.push(line.trim());
    }
  }
  if (currentQuestion && currentAnswer.length) {
    faqs.push({ question: currentQuestion, answer: currentAnswer.join(" ").trim() });
  }

  return faqs;
}

function RelatedCarousel({ articles: relatedArticles }: { articles: Article[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
    loop: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container-wide">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="section-divider mb-8" />
            <h2>Continue Reading</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
              aria-label="Previous articles"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-sm border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-30"
              aria-label="Next articles"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8">
            {relatedArticles.map((a) => (
              <Link
                key={a.slug}
                to={`/insights/${a.slug}`}
                className="card-elevated group overflow-hidden flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(33.333%-1.35rem)]"
              >
                {a.image && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.imageAlt || a.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InsightArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) return <NotFound />;

  const related = articles.filter((a) => a.slug !== article.slug);
  const faqs = extractFAQs(article.content);

  // Build keyword-rich terms from title and category
  const keywords = [
    article.category.toLowerCase(),
    "regulated industry compliance",
    "GovCon advisory",
    ...article.title.toLowerCase().split(/\s+/).filter((w) => w.length > 4),
  ];

  // Build JSON-LD — include FAQPage schema when FAQs exist
  const jsonLdItems: Record<string, unknown>[] = [
    {
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
    },
  ];

  if (faqs.length > 0) {
    jsonLdItems.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // Combine into a single JSON-LD graph
  const jsonLd = jsonLdItems.length === 1 ? jsonLdItems[0] : { "@context": "https://schema.org", "@graph": jsonLdItems };

  return (
    <Layout>
      <SEOHead
        title={`${article.title} | ElevateQCS Insights`}
        description={article.metaDescription || article.excerpt}
        url={`${BASE_URL}/insights/${article.slug}`}
        type="article"
        publishedDate={article.date}
        keywords={keywords}
        jsonLd={jsonLd}
      />

      {/* Hero with Cover Image */}
      <section className="relative pt-24 pb-0 bg-primary">
        <div className="container-wide relative z-10 pt-8">
          <Link
            to="/insights"
            className="inline-flex items-center text-primary-foreground/70 text-sm mb-6 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </Link>
          <div className="max-w-3xl mb-8">
            <p className="text-accent uppercase tracking-[0.2em] text-xs font-medium mb-4">
              {article.category}
            </p>
            <h1 className="text-primary-foreground mb-6 gold-accent pb-4">{article.title}</h1>
            <p className="text-accent text-sm font-medium mb-4">
              Published by ElevateQCS
            </p>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-6 text-primary-foreground/60 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime}
                </span>
                <time>{article.date}</time>
              </div>
              <ShareButton
                title={article.title}
                url={`${BASE_URL}/insights/${article.slug}`}
                description={article.metaDescription || article.excerpt}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-[420px] mt-4 overflow-hidden">
          <img
            src={article.image || insightsFeatured}
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-primary/40" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 min-w-0">
              <div className="prose prose-lg max-w-none article-content">
                <ArticleContent content={article.content} />
                {article.slug === "oversold-under-delivered-compliance-gap" && (
                  <ReadinessScorecard />
                )}
              </div>
            </div>
            <aside className="lg:w-72 shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6">
                <ToolsCallout />
                <GlossaryCallout />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles Carousel */}
      <RelatedCarousel articles={related} />

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
