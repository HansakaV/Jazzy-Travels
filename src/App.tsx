import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dubai from "./pages/Dubai";
import Thailand from "./pages/Thailand";
import Singapore from "./pages/Singapore";
import Malaysia from "./pages/Malayasia";
import Cambodia from "./pages/Cambodia";
import Indonesia from "./pages/Indonisia";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dubai" element={<Dubai />} />
          <Route path="/thailand" element={<Thailand />} />
          <Route path="/malaysia" element={<Malaysia />} />
          <Route path="/singapore" element={<Singapore />} />
          <Route path="/cambodia" element={<Cambodia />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
