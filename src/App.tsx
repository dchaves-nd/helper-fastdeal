import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FranqueadoPage from "./pages/FranqueadoPage"; // Renomeado
import FranqueadorPage from "./pages/FranqueadorPage"; // Nova página
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/franqueado" replace />} /> {/* Redireciona a raiz para /franqueado */}
          <Route path="/franqueado" element={<FranqueadoPage />} /> {/* Rota da página de franqueado */}
          <Route path="/franqueador" element={<FranqueadorPage />} /> {/* Rota da nova página de franqueador */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;