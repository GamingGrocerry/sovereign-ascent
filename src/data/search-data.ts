import { allArticles } from "@/data/insights-data";

export interface SearchResult {
  title: string;
  description: string;
  href: string;
  category: string;
}

const sitePages: SearchResult[] = [
  { title: "Home", description: "Operational compliance systems built for real-world execution", href: "/", category: "Pages" },
  { title: "About ElevateQCS", description: "Principal-led advisory firm built on field-tested compliance experience", href: "/about", category: "Pages" },
  { title: "Our Credentials", description: "Experience measured in outcomes — advisory depth behind every engagement", href: "/credentials", category: "Pages" },
  { title: "Services", description: "Compliance & management system architecture, audit readiness, CTIP, and training", href: "/services", category: "Pages" },
  { title: "Services", description: "Governance, risk, compliance, federal advisory, audit readiness, and managed compliance services", href: "/services", category: "Pages" },
  { title: "Methodology", description: "EQCS Compliance Architecture Model — diagnose, architect, implement, embed, monitor", href: "/methodology", category: "Pages" },
  { title: "Engagement Model", description: "Seven-phase engagement structure from diagnosis through monitoring", href: "/engagement", category: "Pages" },
  { title: "Governance & Independence", description: "Vendor-neutral advisory posture and ethical governance framework", href: "/governance", category: "Pages" },
  { title: "Insights", description: "Analytical thought leadership on compliance, audit readiness, and risk", href: "/insights", category: "Pages" },
  { title: "Contact", description: "Request a confidential consultation with ElevateQCS", href: "/contact", category: "Pages" },
  { title: "Careers & Collaborations", description: "Opportunities for experienced compliance and quality specialists", href: "/careers", category: "Pages" },
  { title: "FAQs", description: "Frequently asked questions about ElevateQCS advisory services", href: "/faq", category: "Pages" },
  { title: "Privacy Policy", description: "How ElevateQCS handles and protects your data", href: "/privacy", category: "Legal" },
  { title: "Terms of Use", description: "Terms governing use of the ElevateQCS website", href: "/terms", category: "Legal" },
  { title: "Accessibility", description: "Our commitment to digital accessibility", href: "/accessibility", category: "Legal" },
];

const articleResults: SearchResult[] = allArticles.map((a) => ({
  title: a.title,
  description: a.excerpt,
  href: `/insights/${a.slug}`,
  category: "Insights",
}));

const allSearchItems: SearchResult[] = [...sitePages, ...articleResults];

export function searchSite(query: string): SearchResult[] {
  if (!query || query.trim().length < 2) return [];
  
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  
  return allSearchItems
    .map((item) => {
      const text = `${item.title} ${item.description} ${item.category}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (item.title.toLowerCase().includes(term)) score += 3;
        else if (item.description.toLowerCase().includes(term)) score += 1;
        else if (item.category.toLowerCase().includes(term)) score += 1;
        else score -= 2;
      }
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ item }) => item);
}

export function getPopularSuggestions(): SearchResult[] {
  return [
    sitePages.find((p) => p.href === "/services")!,
    sitePages.find((p) => p.href === "/methodology")!,
    sitePages.find((p) => p.href === "/credentials")!,
    ...articleResults.slice(0, 3),
  ];
}
