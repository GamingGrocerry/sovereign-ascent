import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  url: string;
  type?: "website" | "article";
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  keywords?: string[];
  image?: string;
  jsonLd?: Record<string, unknown>;
}

/**
 * Sets document head meta tags for SEO, Open Graph, Twitter Cards,
 * and injects JSON-LD structured data for AI search engines
 * (Google, ChatGPT, Perplexity, Grok, Gemini, Copilot).
 */
export function SEOHead({
  title,
  description,
  url,
  type = "website",
  publishedDate,
  modifiedDate,
  author = "Elevate Quality Compliance Solutions LLC",
  keywords = [],
  image = "https://elevateqcs.com/og-image.png",
  jsonLd,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard meta
    setMeta("name", "description", description);
    if (keywords.length) setMeta("name", "keywords", keywords.join(", "));
    setMeta("name", "author", author);
    setMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type === "article" ? "article" : "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "ElevateQCS");
    setMeta("property", "og:locale", "en_US");
    if (type === "article" && publishedDate) {
      setMeta("property", "article:published_time", publishedDate);
      if (modifiedDate) setMeta("property", "article:modified_time", modifiedDate);
      setMeta("property", "article:author", author);
    }

    // Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // JSON-LD
    const ldId = "seo-json-ld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    const defaultLd = {
      "@context": "https://schema.org",
      "@type": type === "article" ? "Article" : "WebPage",
      name: title,
      headline: title,
      description,
      url,
      image,
      author: { "@type": "Organization", name: author, url: "https://elevateqcs.com" },
      publisher: {
        "@type": "Organization",
        name: "ElevateQCS",
        url: "https://elevateqcs.com",
        logo: { "@type": "ImageObject", url: "https://elevateqcs.com/logos/elevatequcs-logo-blue-hd.png" },
      },
      ...(publishedDate && { datePublished: publishedDate }),
      ...(modifiedDate && { dateModified: modifiedDate }),
      inLanguage: "en-US",
    };

    script.textContent = JSON.stringify(jsonLd || defaultLd);

    return () => {
      // Cleanup JSON-LD on unmount
      const el = document.getElementById(ldId);
      if (el) el.remove();
    };
  }, [title, description, url, type, publishedDate, modifiedDate, author, keywords, image, jsonLd]);

  return null;
}
