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
  imageAlt?: string;
  metaDescription?: string;
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
import iso9001OperationalMaturity from "./articles/iso9001-operational-maturity";
import govconPrimeExpectations from "./articles/govcon-prime-expectations";
import multiJurisdictionalCompliance from "./articles/multi-jurisdictional-compliance";
import govconOperationalMaturity from "./articles/govcon-operational-maturity";
import startupComplianceFunding from "./articles/startup-compliance-funding";
import alliant3OperationalReadiness from "./articles/alliant3-operational-readiness";

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
import imgIso9001Maturity from "@/assets/insight-iso9001-maturity.jpg";
import imgGovconPrime from "@/assets/insight-govcon-prime-expectations.jpg";
import imgMultiJurisdictional from "@/assets/insight-multi-jurisdictional.jpg";
import imgGovconOperationalMaturity from "@/assets/insight-govcon-operational-maturity.jpg";
import imgStartupComplianceFunding from "@/assets/insight-startup-compliance-funding.jpg";
import imgAlliant3Readiness from "@/assets/insight-alliant3-readiness.jpg";

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
iso9001OperationalMaturity.icon = BookOpen;
iso9001OperationalMaturity.image = imgIso9001Maturity;
govconPrimeExpectations.icon = TrendingUp;
govconPrimeExpectations.image = imgGovconPrime;
multiJurisdictionalCompliance.icon = TrendingUp;
multiJurisdictionalCompliance.image = imgMultiJurisdictional;
govconOperationalMaturity.icon = TrendingUp;
govconOperationalMaturity.image = imgGovconOperationalMaturity;
startupComplianceFunding.icon = BookOpen;
startupComplianceFunding.image = imgStartupComplianceFunding;

export const featuredArticle = costOfNonCompliance;

export const articles: Article[] = [
  govconOperationalMaturity,
  startupComplianceFunding,
  multiJurisdictionalCompliance,
  govconPrimeExpectations,
  iso9001OperationalMaturity,
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

// Build categories dynamically — counts reflect the filterable article list (excludes featured)
const categoryOrder = [
  "Risk Analysis",
  "Audit Insights",
  "Regulatory Landscape",
  "System Architecture",
  "Operations",
  "Decision Making",
  "Risk Management",
];

export const categories = [
  { name: "All", count: articles.length },
  ...categoryOrder
    .map((name) => ({ name, count: articles.filter((a) => a.category === name).length }))
    .filter((c) => c.count > 0),
];
