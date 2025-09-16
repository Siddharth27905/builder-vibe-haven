import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MakePage from "./pages/Make";
import CarDetails from "./pages/CarDetails";
import Consult from "./pages/Consult";
import Drive from "./pages/Drive";
import Deliver from "./pages/Deliver";
import GaragePerformance from "./pages/GaragePerformance";
import GarageMaintenance from "./pages/GarageMaintenance";
import GarageDetailing from "./pages/GarageDetailing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/make/:makeId" element={<MakePage />} />
          <Route path="/car/:make/:model" element={<CarDetails />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/drive" element={<Drive />} />
          <Route path="/deliver" element={<Deliver />} />
          <Route path="/garage/performance" element={<GaragePerformance />} />
          <Route path="/garage/maintenance" element={<GarageMaintenance />} />
          <Route path="/garage/detailing" element={<GarageDetailing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
