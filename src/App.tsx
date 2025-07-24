import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TransactionsProvider } from "@/contexts/TransactionsContext";
import { VisibilityProvider } from "@/contexts/VisibilityContext";
import { Layout } from "@/components/Layout";
import { Footer } from "@/components/Footer";
import Dashboard from "./pages/Dashboard";
import Planning from "./pages/Planning";
import Transactions from "./pages/Transactions";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="focus-ui-theme">
      <VisibilityProvider>
        <TransactionsProvider>
          <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="planning" element={<Planning />} />
              <Route path="transactions" element={<Transactions />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
          </TooltipProvider>
        </TransactionsProvider>
      </VisibilityProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
