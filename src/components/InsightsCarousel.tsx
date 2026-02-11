import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { allArticles, type Article } from "@/data/insights-data";

const carouselArticles = allArticles.slice(0, 4);

export default function InsightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % carouselArticles.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + carouselArticles.length) % carouselArticles.length);
  }, []);

  // Auto-rotate every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const featured = carouselArticles[activeIndex];
  const sideArticles = carouselArticles.filter((_, i) => i !== activeIndex);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Featured / Expanded (left) */}
        <Link
          to={`/insights/${featured.slug}`}
          className="card-elevated group overflow-hidden relative"
        >
          {featured.image && (
            <div className="relative h-64 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
              <span className="absolute top-4 left-4 inline-block bg-accent/20 text-accent text-xs uppercase tracking-wide px-3 py-1 rounded-sm backdrop-blur-sm">
                Featured
              </span>
            </div>
          )}
          <div className="p-8 flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
              {featured.category}
            </span>
            <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">
              {featured.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
              {featured.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {featured.readTime}
              </div>
              <span className="inline-flex items-center text-accent font-medium group-hover:translate-x-1 transition-transform">
                Read Article <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </div>
        </Link>

        {/* Summarized (right) */}
        <div className="flex flex-col gap-4">
          {sideArticles.map((article) => (
            <Link
              key={article.slug}
              to={`/insights/${article.slug}`}
              className="card-elevated group overflow-hidden flex"
            >
              {article.image && (
                <div className="hidden sm:block w-32 shrink-0 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                  {article.category}
                </span>
                <h4 className="text-lg mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
          aria-label="Previous insight"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>

        <div className="flex gap-2">
          {carouselArticles.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-accent w-8"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`Go to insight ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 rounded-sm border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
          aria-label="Next insight"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
