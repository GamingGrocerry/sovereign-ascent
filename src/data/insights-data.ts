import { AlertCircle, BookOpen, TrendingUp, LucideIcon } from "lucide-react";

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  featured?: boolean;
  icon?: LucideIcon;
  content: string;
}

// Import all articles — each file is individually editable via GitHub
import costOfNonCompliance from "./articles/cost-of-non-compliance";
import auditFailurePatterns from "./articles/audit-failure-patterns";
import ctipEnforcementTrends from "./articles/ctip-enforcement-trends";
import qmsScalability from "./articles/qms-scalability";
import complianceDecisionFramework from "./articles/compliance-decision-framework";
import documentationBestPractices from "./articles/documentation-best-practices";
import supplyChainCompliance from "./articles/supply-chain-compliance";

// Assign icons (kept separate from content files for simplicity)
auditFailurePatterns.icon = AlertCircle;
ctipEnforcementTrends.icon = TrendingUp;
qmsScalability.icon = BookOpen;
complianceDecisionFramework.icon = TrendingUp;
documentationBestPractices.icon = BookOpen;
supplyChainCompliance.icon = AlertCircle;

export const featuredArticle = costOfNonCompliance;

export const articles: Article[] = [
  auditFailurePatterns,
  ctipEnforcementTrends,
  qmsScalability,
  complianceDecisionFramework,
  documentationBestPractices,
  supplyChainCompliance,
];

export const allArticles: Article[] = [costOfNonCompliance, ...articles];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export const categories = [
  { name: "All", count: allArticles.length },
  { name: "Risk Analysis", count: allArticles.filter((a) => a.category === "Risk Analysis").length },
  { name: "Audit Insights", count: allArticles.filter((a) => a.category === "Audit Insights").length },
  { name: "Regulatory Landscape", count: allArticles.filter((a) => a.category === "Regulatory Landscape").length },
  { name: "System Architecture", count: allArticles.filter((a) => a.category === "System Architecture").length },
  { name: "Operations", count: allArticles.filter((a) => a.category === "Operations").length },
  { name: "Decision Making", count: allArticles.filter((a) => a.category === "Decision Making").length },
  { name: "Risk Management", count: allArticles.filter((a) => a.category === "Risk Management").length },
];
