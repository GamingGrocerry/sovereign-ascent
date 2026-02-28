import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { allArticles } from "@/data/insights-data";

const carouselArticles = allArticles.slice(0, 4);

export default function InsightsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % carouselArticles.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + carouselArticles.length) % carouselArticles.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div>
      {/* Horizontal 4-card row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {carouselArticles.map((article, i) => (
          <Link
            key={article.slug}
            to={`/insights/${article.slug}`}
            className={`group relative overflow-hidden rounded-sm transition-all duration-500 ${
              i === activeIndex
                ? "ring-2 ring-accent/60 shadow-xl shadow-accent/10 scale-[1.02]"
                : "ring-1 ring-border/40 hover:ring-accent/30"
            }`}
          >
            {/* Image */}
            <div className="relative h-44 overflow-hidden">
              {article.image && (
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
              {i === activeIndex && (
                <span className="absolute top-3 left-3 inline-block bg-accent text-accent-foreground text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-sm">
                  Read More
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5 bg-card">
              <span className="text-[10px] text-accent uppercase tracking-widest font-medium mb-2 block">
                {article.category}
              </span>
              <h4 className="text-sm font-semibold leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h4>
              <p className="text-muted-foreground text-xs line-clamp-2 mb-3 leading-relaxed">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </div>
                <span className="text-accent text-xs font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Read <ChevronRight className="w-3 h-3 ml-0.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Minimal controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
          aria-label="Previous insight"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
        </button>
        <div className="flex gap-1.5">
          {carouselArticles.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "bg-accent w-6"
                  : "bg-border/60 w-1.5 hover:bg-muted-foreground"
              }`}
              aria-label={`Go to insight ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-8 h-8 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-colors"
          aria-label="Next insight"
        >
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
