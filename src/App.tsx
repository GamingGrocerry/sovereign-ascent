import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Methodology from "./pages/Methodology";
import Insights from "./pages/Insights";
import InsightArticle from "./pages/InsightArticle";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Accessibility from "./pages/Accessibility";
import Governance from "./pages/Governance";
import EngagementModel from "./pages/EngagementModel";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Credentials from "./pages/Credentials";
import CookiePolicy from "./pages/CookiePolicy";
import Acronyms from "./pages/Acronyms";
import Resources from "./pages/Resources";
import ResourcesGovcon from "./pages/ResourcesGovcon";
import ResourcesStartup from "./pages/ResourcesStartup";
import IndustryDefense from "./pages/IndustryDefense";
import IndustryGrowth from "./pages/IndustryGrowth";
import Industries from "./pages/Industries";
import IndustryFederalIT from "./pages/industries/FederalIT";
import IndustryMedicalDevices from "./pages/industries/MedicalDevices";
import IndustryAIDeepTech from "./pages/industries/AIDeepTech";
import IndustryManufacturing from "./pages/industries/Manufacturing";
import IndustryCybersecurity from "./pages/industries/Cybersecurity";
import IndustryInfrastructure from "./pages/industries/Infrastructure";
import IndustryInternationalDev from "./pages/industries/InternationalDev";
import IndustryClimateEnergy from "./pages/industries/ClimateEnergy";
import ChoosingService from "./pages/ChoosingService";
import GovernanceStrategy from "./pages/services/GovernanceStrategy";
import RiskRegulatoryCompliance from "./pages/services/RiskRegulatoryCompliance";
import FederalPublicSector from "./pages/services/FederalPublicSector";
import SupplyChainHumanRights from "./pages/services/SupplyChainHumanRights";
import QualityOperationalInfrastructure from "./pages/services/QualityOperationalInfrastructure";
import RegulatoryDocumentation from "./pages/services/RegulatoryDocumentation";
import AuditCertificationReadiness from "./pages/services/AuditCertificationReadiness";
import ManagedCompliance from "./pages/services/ManagedCompliance";
import DigitalGovernance from "./pages/services/DigitalGovernance";
import SectorFederalContractors from "./pages/sectors/FederalContractors";
import SectorDefenseAerospace from "./pages/sectors/DefenseAerospace";
import SectorMedicalLifeSciences from "./pages/sectors/MedicalLifeSciences";
import SectorAIDeepTech from "./pages/sectors/AIDeepTech";
import SectorAdvancedManufacturing from "./pages/sectors/AdvancedManufacturing";
import SectorEUExposed from "./pages/sectors/EUExposed";
import RFP from "./pages/RFP";
import Tools from "./pages/Tools";
import GovConReadiness from "./pages/tools/GovConReadiness";
import ComplianceFrameworkBuilder from "./pages/tools/ComplianceFrameworkBuilder";
import QMSGapAnalysis from "./pages/tools/QMSGapAnalysis";
import CARGravityCalculator from "./pages/tools/CARGravityCalculator";
import VirtualSpotCheck from "./pages/tools/VirtualSpotCheck";
import PWSRiskHighlighter from "./pages/tools/PWSRiskHighlighter";
import MaturityPremiumCalculator from "./pages/tools/MaturityPremiumCalculator";
import LaborEthicsStressTest from "./pages/tools/LaborEthicsStressTest";
import AustereSafetyChecklist from "./pages/tools/AustereSafetyChecklist";
import SurgeCapacityStressTest from "./pages/tools/SurgeCapacityStressTest";
import RFOBusinessJudgment from "./pages/tools/RFOBusinessJudgment";
import CPSRFinancialIntegrity from "./pages/tools/CPSRFinancialIntegrity";
import SupplyChainRiskScan from "./pages/tools/SupplyChainRiskScan";
import ProfitabilityLeakageTracker from "./pages/tools/ProfitabilityLeakageTracker";
import Capabilities from "./pages/Capabilities";
import ResourcesPOE from "./pages/ResourcesPOE";
import GenerateResources from "./pages/admin/GenerateResources";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightArticle />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/engagement" element={<EngagementModel />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/enterprise-federal" element={<ResourcesGovcon />} />
          <Route path="/resources/govcon" element={<ResourcesGovcon />} />
          <Route path="/resources/high-growth" element={<ResourcesStartup />} />
          <Route path="/resources/startup" element={<ResourcesStartup />} />
          <Route path="/resources/program-execution" element={<ResourcesPOE />} />
          <Route path="/resources/poe" element={<ResourcesPOE />} />
          <Route path="/acronyms" element={<Acronyms />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/defense" element={<IndustryDefense />} />
          <Route path="/industries/growth-stage" element={<IndustryGrowth />} />
          <Route path="/industries/federal-it" element={<IndustryFederalIT />} />
          <Route path="/industries/medical-devices" element={<IndustryMedicalDevices />} />
          <Route path="/industries/ai-deep-tech" element={<IndustryAIDeepTech />} />
          <Route path="/industries/advanced-manufacturing" element={<IndustryManufacturing />} />
          <Route path="/industries/cybersecurity" element={<IndustryCybersecurity />} />
          <Route path="/industries/infrastructure" element={<IndustryInfrastructure />} />
          <Route path="/industries/international-development" element={<IndustryInternationalDev />} />
          <Route path="/industries/climate-energy" element={<IndustryClimateEnergy />} />
          <Route path="/choosing-the-right-service" element={<ChoosingService />} />
          <Route path="/services/governance-strategy" element={<GovernanceStrategy />} />
          <Route path="/services/risk-regulatory-compliance" element={<RiskRegulatoryCompliance />} />
          <Route path="/services/federal-public-sector" element={<FederalPublicSector />} />
          <Route path="/services/supply-chain-human-rights" element={<SupplyChainHumanRights />} />
          <Route path="/services/quality-operational-infrastructure" element={<QualityOperationalInfrastructure />} />
          <Route path="/services/regulatory-documentation" element={<RegulatoryDocumentation />} />
          <Route path="/services/audit-certification-readiness" element={<AuditCertificationReadiness />} />
          <Route path="/services/managed-compliance" element={<ManagedCompliance />} />
          <Route path="/services/digital-governance" element={<DigitalGovernance />} />
          <Route path="/sectors/federal-contractors" element={<SectorFederalContractors />} />
          <Route path="/sectors/defense-aerospace" element={<SectorDefenseAerospace />} />
          <Route path="/sectors/medical-life-sciences" element={<SectorMedicalLifeSciences />} />
          <Route path="/sectors/ai-deep-tech" element={<SectorAIDeepTech />} />
          <Route path="/sectors/advanced-manufacturing" element={<SectorAdvancedManufacturing />} />
          <Route path="/sectors/eu-exposed" element={<SectorEUExposed />} />
          <Route path="/rfp" element={<RFP />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/govcon-readiness" element={<GovConReadiness />} />
          <Route path="/tools/compliance-framework-builder" element={<ComplianceFrameworkBuilder />} />
          <Route path="/tools/qms-gap-analysis" element={<QMSGapAnalysis />} />
          <Route path="/tools/car-gravity-calculator" element={<CARGravityCalculator />} />
          <Route path="/tools/virtual-spot-check" element={<VirtualSpotCheck />} />
          <Route path="/tools/pws-risk-highlighter" element={<PWSRiskHighlighter />} />
          <Route path="/tools/maturity-premium-calculator" element={<MaturityPremiumCalculator />} />
          <Route path="/tools/labor-ethics-stress-test" element={<LaborEthicsStressTest />} />
          <Route path="/tools/austere-safety-checklist" element={<AustereSafetyChecklist />} />
          <Route path="/tools/surge-capacity-stress-test" element={<SurgeCapacityStressTest />} />
          <Route path="/tools/rfo-business-judgment" element={<RFOBusinessJudgment />} />
          <Route path="/tools/cpsr-financial-integrity" element={<CPSRFinancialIntegrity />} />
          <Route path="/tools/supply-chain-risk-scan" element={<SupplyChainRiskScan />} />
          <Route path="/tools/profitability-leakage-tracker" element={<ProfitabilityLeakageTracker />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/admin/generate-resources" element={<GenerateResources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
