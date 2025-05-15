import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StudentProvider } from "./contexts/StudentContext";
import Index from "./pages/Index";
import Welcome from "./pages/Welcome";
import SubjectsPage from "./pages/SubjectsPage";
import SubjectDetailPage from "./pages/SubjectDetailPage";
import NotFound from "./pages/NotFound";
// import AIToolsAndEdTechUpdates from "./pages/AIToolsAndEdTechUpdates";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StudentProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/subject/:subjectId" element={<SubjectDetailPage />} />
            {/* <Route path="/ai-edtech" element={<AIToolsAndEdTechUpdates />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </StudentProvider>
  </QueryClientProvider>
);

export default App;
