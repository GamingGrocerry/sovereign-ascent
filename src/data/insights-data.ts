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
  image?: string;
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
import qmsEarlyStage from "./articles/qms-early-stage";
import subcontractorQmsFailures from "./articles/subcontractor-qms-failures";

// Import article images
import imgCostNoncompliance from "@/assets/insight-cost-noncompliance.jpg";
import imgAuditFailures from "@/assets/insight-audit-failures.jpg";
import imgCtipTrends from "@/assets/insight-ctip-trends.jpg";
import imgQmsScalability from "@/assets/insight-qms-scalability.jpg";
import imgDecisionFramework from "@/assets/insight-decision-framework.jpg";
import imgDocumentation from "@/assets/insight-documentation.jpg";
import imgSupplyChain from "@/assets/insight-supply-chain.jpg";
import imgQmsEarlyStage from "@/assets/insight-qms-early-stage.jpg";
import imgSubcontractorQms from "@/assets/insight-subcontractor-qms.jpg";

// Assign icons and images
costOfNonCompliance.image = imgCostNoncompliance;
auditFailurePatterns.icon = AlertCircle;
auditFailurePatterns.image = imgAuditFailures;
ctipEnforcementTrends.icon = TrendingUp;
ctipEnforcementTrends.image = imgCtipTrends;
qmsScalability.icon = BookOpen;
qmsScalability.image = imgQmsScalability;
complianceDecisionFramework.icon = TrendingUp;
complianceDecisionFramework.image = imgDecisionFramework;
documentationBestPractices.icon = BookOpen;
documentationBestPractices.image = imgDocumentation;
supplyChainCompliance.icon = AlertCircle;
supplyChainCompliance.image = imgSupplyChain;
qmsEarlyStage.icon = BookOpen;
qmsEarlyStage.image = imgQmsEarlyStage;
subcontractorQmsFailures.icon = AlertCircle;
subcontractorQmsFailures.image = imgSubcontractorQms;

export const featuredArticle = costOfNonCompliance;

export const articles: Article[] = [
  qmsEarlyStage,
  subcontractorQmsFailures,
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
