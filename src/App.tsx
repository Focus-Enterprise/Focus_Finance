// Focus Finance - Main Application Component | Focus Finance - Componente Principal da Aplicação
// Manages global state, routing, and application structure | Gerencia estado global, roteamento e estrutura da aplicação

// Toast notification components | Componentes de notificação toast
import { Toaster } from "@/components/ui/toaster"; // shadcn/ui toast notifications | Notificações toast do shadcn/ui
import { Toaster as Sonner } from "@/components/ui/sonner"; // Sonner toast library for better UX | Biblioteca toast Sonner para melhor UX
import { TooltipProvider } from "@/components/ui/tooltip"; // Tooltip context provider | Provedor de contexto para tooltips

// React Query for server state management | React Query para gerenciamento de estado do servidor
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router for client-side routing | React Router para roteamento do lado cliente
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Global context providers for application state | Provedores de contexto global para estado da aplicação
import { ThemeProvider } from "@/contexts/ThemeContext"; // Dark/light theme management | Gerenciamento de tema escuro/claro
import { TransactionsProvider } from "@/contexts/TransactionsContext"; // Financial transactions state | Estado das transações financeiras
import { VisibilityProvider } from "@/contexts/VisibilityContext"; // Data visibility toggle (hide sensitive info) | Alternância de visibilidade de dados (ocultar info sensível)
import { UserProfileProvider } from "@/contexts/UserProfileContext"; // User profile information | Informações do perfil do usuário

// Layout components | Componentes de layout
import { Layout } from "@/components/Layout"; // Main app layout with sidebar and navigation | Layout principal com sidebar e navegação
import { Footer } from "@/components/Footer"; // Application footer | Rodapé da aplicação

// Page components | Componentes de página
import Dashboard from "./pages/Dashboard"; // Main dashboard with financial overview | Dashboard principal com visão geral financeira
import Planning from "./pages/Planning"; // Financial planning and goals | Planejamento financeiro e metas
import Transactions from "./pages/Transactions"; // Transaction management | Gerenciamento de transações
import Reports from "./pages/Reports"; // Financial reports and analytics | Relatórios financeiros e análises
import Settings from "./pages/Settings"; // User settings and preferences | Configurações e preferências do usuário
import Tutorial from "./pages/Tutorial"; // Tutorial and onboarding | Tutorial e integração
import NotFound from "./pages/NotFound"; // 404 error page | Página de erro 404

// Initialize React Query client for caching and synchronization | Inicializa cliente React Query para cache e sincronização
const queryClient = new QueryClient();

// Main App component with nested providers and routing | Componente App principal com provedores aninhados e roteamento
const App = () => (
  // React Query Provider - manages server state and caching | Provedor React Query - gerencia estado do servidor e cache
  <QueryClientProvider client={queryClient}>
    {/* Theme Provider - manages dark/light mode with system preference | Provedor de Tema - gerencia modo escuro/claro com preferência do sistema */}
    <ThemeProvider defaultTheme="system" storageKey="focus-ui-theme">
      {/* User Profile Provider - manages user information across app | Provedor de Perfil - gerencia informações do usuário na aplicação */}
      <UserProfileProvider>
        {/* Visibility Provider - controls showing/hiding sensitive financial data | Provedor de Visibilidade - controla exibição/ocultação de dados financeiros sensíveis */}
        <VisibilityProvider>
          {/* Transactions Provider - manages financial transactions state | Provedor de Transações - gerencia estado das transações financeiras */}
          <TransactionsProvider>
            {/* Tooltip Provider - enables tooltips throughout the app | Provedor de Tooltip - habilita tooltips em toda aplicação */}
            <TooltipProvider>
              {/* Toast notification components | Componentes de notificação toast */}
              <Toaster />
              <Sonner />
              
              {/* Router setup for navigation | Configuração do roteador para navegação */}
              <BrowserRouter>
                <Routes>
                  {/* Main application routes with Layout wrapper | Rotas principais da aplicação com wrapper Layout */}
                  <Route path="/" element={<Layout />}>
                    {/* Dashboard - main page with financial overview | Dashboard - página principal com visão geral financeira */}
                    <Route index element={<Dashboard />} />
                    {/* Planning - financial goals and planning | Planejamento - metas e planejamento financeiro */}
                    <Route path="planning" element={<Planning />} />
                    {/* Transactions - income and expense management | Transações - gerenciamento de receitas e despesas */}
                    <Route path="transactions" element={<Transactions />} />
                    {/* Reports - financial analytics and charts | Relatórios - análises financeiras e gráficos */}
                    <Route path="reports" element={<Reports />} />
                    {/* Settings - user preferences and configuration | Configurações - preferências e configuração do usuário */}
                    <Route path="settings" element={<Settings />} />
                  </Route>
                  {/* Tutorial - standalone onboarding page | Tutorial - página independente de integração */}
                  <Route path="/tutorial" element={<Tutorial />} />
                  {/* Catch-all route for 404 errors | Rota catch-all para erros 404 */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                {/* Global footer component | Componente de rodapé global */}
                <Footer />
              </BrowserRouter>
            </TooltipProvider>
          </TransactionsProvider>
        </VisibilityProvider>
      </UserProfileProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
