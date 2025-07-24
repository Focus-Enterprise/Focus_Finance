// Main Layout Component | Componente de Layout Principal
// Responsive layout with bottom navigation for mobile | Layout responsivo com navegação inferior para mobile

import { Outlet } from 'react-router-dom';
import { 
  Home, 
  Target, 
  ArrowUpDown, 
  BarChart3, 
  Settings,
  Plus
} from 'lucide-react';
import focusLogo from '/lovable-uploads/922516b4-9d12-41b8-8093-6ccd25a59adc.png';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: Home, ariaLabel: 'Página inicial' },
  { name: 'Planejamento', href: '/planning', icon: Target, ariaLabel: 'Planejamento financeiro' },
  { name: 'Transações', href: '/transactions', icon: ArrowUpDown, ariaLabel: 'Transações financeiras' },
  { name: 'Relatórios', href: '/reports', icon: BarChart3, ariaLabel: 'Relatórios e gráficos' },
  { name: 'Configurações', href: '/settings', icon: Settings, ariaLabel: 'Configurações do app' },
];

export function Layout() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header - Desktop and Tablet | Cabeçalho - Desktop e Tablet */}
      <header className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur supports-[backdrop-filter]:bg-gradient-to-r supports-[backdrop-filter]:from-primary/10 supports-[backdrop-filter]:to-secondary/10">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <img 
                src={focusLogo} 
                alt="Focus Finance Logo" 
                className="h-8 w-8 object-contain"
              />
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Focus
              </h1>
            </div>
          </div>

          {/* Desktop Navigation | Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Navegação principal">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary',
                    isActive 
                      ? 'text-primary border-b-2 border-primary pb-4 -mb-4' 
                      : 'text-muted-foreground'
                  )
                }
                aria-label={item.ariaLabel}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content | Conteúdo Principal */}
      <main className="flex-1 pb-20 md:pb-8">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation | Navegação Inferior Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
        <nav className="flex items-center justify-around h-16 px-2" role="navigation" aria-label="Navegação mobile">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                cn(
                  'flex flex-col items-center justify-center space-y-1 py-1 px-2 rounded-lg transition-colors min-w-0 flex-1',
                  isActive 
                    ? 'text-primary bg-accent' 
                    : 'text-muted-foreground hover:text-primary hover:bg-accent/50'
                )
              }
              aria-label={item.ariaLabel}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium truncate">{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Floating Action Button - Add Transaction | Botão Flutuante - Adicionar Transação */}
      <Button
        size="icon"
        className="fixed bottom-20 right-4 md:bottom-8 h-14 w-14 rounded-full shadow-strong z-40 bg-gradient-primary hover:shadow-green transition-all hover:scale-105"
        aria-label="Adicionar nova transação"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
}