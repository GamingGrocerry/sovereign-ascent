import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X, ArrowRight, FileText, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { searchSite, getPopularSuggestions, SearchResult } from "@/data/search-data";

interface SearchBarProps {
  isDark?: boolean;
}

export function SearchBar({ isDark = false }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const suggestions = getPopularSuggestions();

  useEffect(() => {
    if (query.trim().length >= 2) {
      setResults(searchSite(query));
      setActiveIndex(-1);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
      setResults([]);
      setActiveIndex(-1);
    }
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Keyboard shortcut
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((o) => !o);
      }
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const displayItems = query.trim().length >= 2 ? results : suggestions;
  const showingResults = query.trim().length >= 2;

  const goTo = (href: string) => {
    setIsOpen(false);
    navigate(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, displayItems.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter" && activeIndex >= 0 && displayItems[activeIndex]) {
      e.preventDefault();
      goTo(displayItems[activeIndex].href);
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category === "Insights") return FileText;
    return Globe;
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-sm text-xs transition-all",
          isDark
            ? "text-primary-foreground/60 hover:text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/40"
            : "text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30"
        )}
        aria-label="Search site"
      >
        <Search className="w-3.5 h-3.5" />
        <span className="hidden xl:inline">Search</span>
        <kbd className={cn(
          "hidden xl:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono",
          isDark ? "bg-primary-foreground/10 text-primary-foreground/40" : "bg-secondary text-muted-foreground/60"
        )}>
          ⌘K
        </kbd>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-[360px] bg-card border border-border rounded-sm shadow-2xl overflow-hidden z-50 animate-fade-in">
          {/* Input */}
          <div className="flex items-center gap-3 px-4 border-b border-border">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, articles..."
              className="flex-1 bg-transparent py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Results */}
          <div className="max-h-[360px] overflow-y-auto py-1">
            {!showingResults && (
              <p className="px-4 py-2 text-[10px] text-muted-foreground/60 uppercase tracking-wider">
                Popular
              </p>
            )}
            {showingResults && results.length === 0 && (
              <p className="px-4 py-6 text-sm text-muted-foreground text-center">
                No results for "{query}"
              </p>
            )}
            {displayItems.map((item, index) => {
              const Icon = getCategoryIcon(item.category);
              return (
                <button
                  key={item.href}
                  onClick={() => goTo(item.href)}
                  onMouseEnter={() => setActiveIndex(index)}
                  className={cn(
                    "w-full flex items-start gap-3 px-4 py-2.5 text-left transition-colors",
                    activeIndex === index ? "bg-secondary" : "hover:bg-secondary/50"
                  )}
                >
                  <div className="w-7 h-7 rounded-sm bg-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-foreground truncate block">
                      {item.title}
                    </span>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.description}
                    </p>
                  </div>
                  <ArrowRight className="w-3 h-3 text-muted-foreground/40 shrink-0 mt-1.5" />
                </button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="px-4 py-2 border-t border-border text-[10px] text-muted-foreground/50 text-right">
            ⌘K to toggle
          </div>
        </div>
      )}
    </div>
  );
}
