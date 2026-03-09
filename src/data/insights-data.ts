import { AlertCircle, BookOpen, TrendingUp, Shield, Target, BarChart3, Siren, Repeat, Search, FileText, Lock, Zap, Scale, Hammer, Layers, Eye, LucideIcon } from "lucide-react";

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

// Import all articles
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
import ctipCs3dCompliance from "./articles/ctip-cs3d-compliance";
import cmmc2026SupplyChainFlowdowns from "./articles/cmmc-2026-supply-chain-flowdowns";
import oversoldUnderDelivered from "./articles/oversold-under-delivered-compliance-gap";
import logisticsCtipComplianceMistakes from "./articles/logistics-ctip-compliance-mistakes";
import subcontractorDecisionMatrix from "./articles/subcontractor-decision-matrix";
import crossJurisdictionalLiability from "./articles/cross-jurisdictional-liability";
import subcontractorAuditReview from "./articles/subcontractor-audit-review";
import ncrVsCar from "./articles/ncr-vs-car";
import locCrisisResponse from "./articles/loc-crisis-response";
import capaLoop from "./articles/capa-loop";
import forensicAuditorSupplyChain from "./articles/forensic-auditor-supply-chain";
import farOverhaul2026 from "./articles/far-overhaul-2026";
import pwsWhisperer from "./articles/pws-whisperer";
import sprint96Hour from "./articles/96-hour-sprint";
import oconusSustainment from "./articles/oconus-sustainment";
import farFlowdowns from "./articles/far-flowdowns-52-244-6";
import oshaOconus from "./articles/osha-oconus-safety";
import isoLogcapBridge from "./articles/iso-logcap-bridge";
import ctipBeyondRecruitment from "./articles/ctip-beyond-recruitment";
import valueOverPrice from "./articles/value-over-price";
import logisticsPaperTrail from "./articles/logistics-paper-trail";
import siteSecurityPerimeter from "./articles/site-security-perimeter";

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
import imgCtipCs3d from "@/assets/insight-ctip-cs3d-compliance.jpg";
import imgCmmcFlowdowns from "@/assets/insight-cmmc-supply-chain-flowdowns.jpg";
import imgComplianceGap from "@/assets/insight-compliance-capability-gap.jpg";
import imgLogisticsCtip from "@/assets/insight-logistics-ctip-compliance.jpg";
import imgDecisionMatrix from "@/assets/insight-subcontractor-decision-matrix.jpg";
import imgCrossJurisdictional from "@/assets/insight-cross-jurisdictional-liability.jpg";
import imgAuditReview from "@/assets/insight-subcontractor-audit-review.jpg";
import imgNcrVsCar from "@/assets/insight-ncr-vs-car.jpg";
import imgLocCrisis from "@/assets/insight-loc-crisis.jpg";
import imgCapaLoop from "@/assets/insight-capa-loop.jpg";
import imgForensicAuditor from "@/assets/insight-forensic-auditor.jpg";
import imgFarOverhaul from "@/assets/insight-far-overhaul-2026.jpg";
import imgPwsWhisperer from "@/assets/insight-pws-whisperer.jpg";
import img96HourSprint from "@/assets/insight-96-hour-sprint.jpg";
import imgOconusSustainment from "@/assets/insight-oconus-sustainment.jpg";
import imgFarFlowdowns from "@/assets/insight-far-flowdowns.jpg";
import imgOshaOconus from "@/assets/insight-osha-oconus.jpg";
import imgIsoLogcap from "@/assets/insight-iso-logcap-bridge.jpg";
import imgCtipBeyond from "@/assets/insight-ctip-beyond-recruitment.jpg";
import imgValueOverPrice from "@/assets/insight-value-over-price.jpg";
import imgLogisticsPaperTrail from "@/assets/insight-logistics-paper-trail.jpg";
import imgSiteSecurity from "@/assets/insight-site-security-perimeter.jpg";

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
alliant3OperationalReadiness.icon = TrendingUp;
alliant3OperationalReadiness.image = imgAlliant3Readiness;
ctipCs3dCompliance.icon = AlertCircle;
ctipCs3dCompliance.image = imgCtipCs3d;
cmmc2026SupplyChainFlowdowns.icon = Shield;
cmmc2026SupplyChainFlowdowns.image = imgCmmcFlowdowns;
oversoldUnderDelivered.icon = Target;
oversoldUnderDelivered.image = imgComplianceGap;
logisticsCtipComplianceMistakes.icon = AlertCircle;
logisticsCtipComplianceMistakes.image = imgLogisticsCtip;
subcontractorDecisionMatrix.icon = BarChart3;
subcontractorDecisionMatrix.image = imgDecisionMatrix;
crossJurisdictionalLiability.icon = TrendingUp;
crossJurisdictionalLiability.image = imgCrossJurisdictional;
subcontractorAuditReview.icon = AlertCircle;
subcontractorAuditReview.image = imgAuditReview;
ncrVsCar.icon = Siren;
ncrVsCar.image = imgNcrVsCar;
locCrisisResponse.icon = Siren;
locCrisisResponse.image = imgLocCrisis;
capaLoop.icon = Repeat;
capaLoop.image = imgCapaLoop;
forensicAuditorSupplyChain.icon = Search;
forensicAuditorSupplyChain.image = imgForensicAuditor;
farOverhaul2026.icon = Scale;
farOverhaul2026.image = imgFarOverhaul;
pwsWhisperer.icon = Search;
pwsWhisperer.image = imgPwsWhisperer;
sprint96Hour.icon = Zap;
sprint96Hour.image = img96HourSprint;
oconusSustainment.icon = AlertCircle;
oconusSustainment.image = imgOconusSustainment;
farFlowdowns.icon = FileText;
farFlowdowns.image = imgFarFlowdowns;
oshaOconus.icon = Hammer;
oshaOconus.image = imgOshaOconus;
isoLogcapBridge.icon = BookOpen;
isoLogcapBridge.image = imgIsoLogcap;
ctipBeyondRecruitment.icon = AlertCircle;
ctipBeyondRecruitment.image = imgCtipBeyond;
valueOverPrice.icon = Target;
valueOverPrice.image = imgValueOverPrice;
logisticsPaperTrail.icon = FileText;
logisticsPaperTrail.image = imgLogisticsPaperTrail;
siteSecurityPerimeter.icon = Lock;
siteSecurityPerimeter.image = imgSiteSecurity;

export const featuredArticle = costOfNonCompliance;

export const articles: Article[] = [
  valueOverPrice,
  siteSecurityPerimeter,
  logisticsPaperTrail,
  forensicAuditorSupplyChain,
  ctipBeyondRecruitment,
  capaLoop,
  isoLogcapBridge,
  oshaOconus,
  locCrisisResponse,
  farFlowdowns,
  ncrVsCar,
  oconusSustainment,
  sprint96Hour,
  pwsWhisperer,
  farOverhaul2026,
  subcontractorDecisionMatrix,
  crossJurisdictionalLiability,
  subcontractorAuditReview,
  logisticsCtipComplianceMistakes,
  oversoldUnderDelivered,
  cmmc2026SupplyChainFlowdowns,
  ctipCs3dCompliance,
  alliant3OperationalReadiness,
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
].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const allArticles: Article[] = [costOfNonCompliance, ...articles];

export function getArticleBySlug(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

// Build categories dynamically
const categoryOrder = [
  "Risk Analysis",
  "Audit Insights",
  "Regulatory Landscape",
  "System Architecture",
  "Operations",
  "Decision Making",
  "Risk Management",
  "Quality Systems",
  "Safety & Health",
  "Strategic Positioning",
];

export const categories = [
  { name: "All", count: articles.length },
  ...categoryOrder
    .map((name) => ({ name, count: articles.filter((a) => a.category === name).length }))
    .filter((c) => c.count > 0),
];
