// Main Layout Component | Componente de Layout Principal
// Responsive layout with bottom navigation for mobile | Layout responsivo com navegação inferior para mobile

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactionType, setTransactionType] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const location = useLocation();
  const isPlanning = location.pathname === '/planning';
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica para salvar a transação
    console.log('Nova transação adicionada');
    setIsModalOpen(false);
  };
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
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger asChild>
            <Button
            size="icon"
            className="fixed bottom-20 right-4 md:bottom-8 h-14 w-14 rounded-full shadow-strong z-40 bg-gradient-primary hover:shadow-green transition-all hover:scale-105"
            aria-label={isPlanning ? "Adicionar nova meta" : "Adicionar nova transação"}
          >
            <Plus className="h-6 w-6" />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md max-w-[calc(100vw-2rem)] mx-auto rounded-2xl border-0 shadow-2xl bg-background/95 backdrop-blur-md">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-xl font-semibold text-center bg-gradient-primary bg-clip-text text-transparent">
              {isPlanning ? 'Nova Meta' : 'Nova Transação'}
            </DialogTitle>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {isPlanning ? (
              // Formulário para Nova Meta
              <>
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">Título da Meta</Label>
                  <Input 
                    id="title"
                    placeholder="Ex: Viagem para Europa, Reserva de Emergência..."
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetAmount" className="text-sm font-medium">Valor Alvo</Label>
                  <Input 
                    id="targetAmount"
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="currentAmount" className="text-sm font-medium">Valor Atual</Label>
                  <Input 
                    id="currentAmount"
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deadline" className="text-sm font-medium">Data Limite</Label>
                  <Input 
                    id="deadline"
                    type="date"
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">Categoria</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="rounded-xl border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="viagem">🌎 Viagem</SelectItem>
                      <SelectItem value="seguranca">🛡️ Segurança</SelectItem>
                      <SelectItem value="tecnologia">💻 Tecnologia</SelectItem>
                      <SelectItem value="educacao">📚 Educação</SelectItem>
                      <SelectItem value="casa">🏠 Casa</SelectItem>
                      <SelectItem value="veiculo">🚗 Veículo</SelectItem>
                      <SelectItem value="investimento">📈 Investimento</SelectItem>
                      <SelectItem value="outro">✏️ Outro</SelectItem>
                    </SelectContent>
                  </Select>
                  {selectedCategory === 'outro' && (
                    <Input 
                      id="customCategory"
                      placeholder="Digite a categoria personalizada..."
                      value={customCategory}
                      onChange={(e) => setCustomCategory(e.target.value)}
                      className="rounded-xl border-border/50 focus:border-primary mt-2"
                    />
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority" className="text-sm font-medium">Prioridade</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione a prioridade" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="high">🔴 Alta</SelectItem>
                      <SelectItem value="medium">🟡 Média</SelectItem>
                      <SelectItem value="low">🟢 Baixa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              // Formulário para Nova Transação
              <>
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-sm font-medium">Tipo</Label>
                  <Select value={transactionType} onValueChange={setTransactionType}>
                    <SelectTrigger className="rounded-xl border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="income">💰 Receita</SelectItem>
                      <SelectItem value="expense">💸 Despesa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">Descrição</Label>
                  <Input 
                    id="description"
                    placeholder="Ex: Salário, Compras..."
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-sm font-medium">Valor</Label>
                  <Input 
                    id="amount"
                    type="number"
                    step="0.01"
                    placeholder="0,00"
                    className="rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm font-medium">Categoria</Label>
                  <Select>
                    <SelectTrigger className="rounded-xl border-border/50 focus:border-primary">
                      <SelectValue placeholder="Selecione uma categoria" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="food">🍽️ Alimentação</SelectItem>
                      <SelectItem value="transport">🚗 Transporte</SelectItem>
                      <SelectItem value="health">🏥 Saúde</SelectItem>
                      <SelectItem value="education">📚 Educação</SelectItem>
                      <SelectItem value="entertainment">🎬 Entretenimento</SelectItem>
                      <SelectItem value="salary">💼 Salário</SelectItem>
                      <SelectItem value="investment">📈 Investimento</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}

            <div className="flex gap-3 pt-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950 dark:hover:text-red-300"
              >
                Cancelar
              </Button>
              <Button 
                type="submit"
                className="flex-1 rounded-xl bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                Salvar
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}