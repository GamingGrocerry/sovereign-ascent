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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
