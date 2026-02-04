import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicesGovConPrimes from "./pages/ServicesGovConPrimes";
import ServicesGovConSubs from "./pages/ServicesGovConSubs";
import ServicesStartups from "./pages/ServicesStartups";
import Methodology from "./pages/Methodology";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Navigate to="/services/startups" replace />} />
          <Route path="/services/govcon-primes" element={<ServicesGovConPrimes />} />
          <Route path="/services/govcon-subs" element={<ServicesGovConSubs />} />
          <Route path="/services/startups" element={<ServicesStartups />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
