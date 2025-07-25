// Theme Toggle Component | Componente de Alternância de Tema
// Advanced theme selector with dropdown menu | Seletor de tema avançado com menu dropdown
// Allows switching between light, dark, and system preference themes | Permite alternar entre temas claro, escuro e preferência do sistema

// Icon imports for theme options | Importações de ícones para opções de tema
import { Moon, Sun, Monitor } from 'lucide-react'; // Theme icons: moon (dark), sun (light), monitor (system) | Ícones de tema: lua (escuro), sol (claro), monitor (sistema)

// UI component imports | Importações de componentes da UI
import { Button } from '@/components/ui/button'; // Button component | Componente de botão
import {
  DropdownMenu, // Main dropdown container | Container principal do dropdown
  DropdownMenuContent, // Dropdown content wrapper | Wrapper do conteúdo do dropdown
  DropdownMenuItem, // Individual menu item | Item individual do menu
  DropdownMenuTrigger, // Trigger button for dropdown | Botão gatilho para o dropdown
} from '@/components/ui/dropdown-menu';

// Theme context hook | Hook do contexto de tema
import { useTheme } from '@/contexts/ThemeContext'; // Custom hook for theme management | Hook customizado para gerenciamento de tema

export function ThemeToggle() {
  // Get theme state and setter from context | Obtém estado do tema e setter do contexto
  const { setTheme, theme } = useTheme();

  return (
    // Dropdown menu container | Container do menu dropdown
    <DropdownMenu>
      {/* Trigger button for opening dropdown | Botão gatilho para abrir dropdown */}
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" // Outlined button style | Estilo de botão com contorno
          size="icon" // Icon-only button size | Tamanho de botão apenas com ícone
          className="h-9 w-9" // Button dimensions | Dimensões do botão
          aria-label="Alternar tema" // Accessibility label | Rótulo de acessibilidade
        >
          {/* Sun icon for light theme - visible in light mode | Ícone do sol para tema claro - visível no modo claro */}
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          {/* Moon icon for dark theme - visible in dark mode | Ícone da lua para tema escuro - visível no modo escuro */}
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          {/* Screen reader text | Texto para leitores de tela */}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      
      {/* Dropdown content with theme options | Conteúdo do dropdown com opções de tema */}
      <DropdownMenuContent align="end" className="min-w-32">
        {/* Light theme option | Opção de tema claro */}
        <DropdownMenuItem 
          onClick={() => setTheme('light')} // Set light theme | Define tema claro
          className={theme === 'light' ? 'bg-accent' : ''} // Highlight if active | Destaca se ativo
        >
          <Sun className="mr-2 h-4 w-4" /> {/* Sun icon | Ícone do sol */}
          <span>Claro</span> {/* Light theme label | Rótulo do tema claro */}
        </DropdownMenuItem>
        
        {/* Dark theme option | Opção de tema escuro */}
        <DropdownMenuItem 
          onClick={() => setTheme('dark')} // Set dark theme | Define tema escuro
          className={theme === 'dark' ? 'bg-accent' : ''} // Highlight if active | Destaca se ativo
        >
          <Moon className="mr-2 h-4 w-4" /> {/* Moon icon | Ícone da lua */}
          <span>Escuro</span> {/* Dark theme label | Rótulo do tema escuro */}
        </DropdownMenuItem>
        
        {/* System theme option | Opção de tema do sistema */}
        <DropdownMenuItem 
          onClick={() => setTheme('system')} // Set system theme | Define tema do sistema
          className={theme === 'system' ? 'bg-accent' : ''} // Highlight if active | Destaca se ativo
        >
          <Monitor className="mr-2 h-4 w-4" /> {/* Monitor icon | Ícone do monitor */}
          <span>Sistema</span> {/* System theme label | Rótulo do tema do sistema */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}