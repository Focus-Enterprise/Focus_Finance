// Dashboard Page | Página do Dashboard
// Main overview with balance, income, expenses and charts | Visão geral principal com saldo, receitas, despesas e gráficos

import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Eye,
  EyeOff,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(true);
  
  // Mock data | Dados simulados
  const balance = 2547.83;
  const income = 3200.00;
  const expenses = 1852.17;
  const monthlyGoal = 5000.00;
  const goalProgress = ((income - expenses) / monthlyGoal) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const recentTransactions = [
    { id: 1, title: 'Salário', amount: 3200.00, type: 'income', date: '2024-01-15', category: 'Trabalho' },
    { id: 2, title: 'Supermercado', amount: -234.50, type: 'expense', date: '2024-01-14', category: 'Alimentação' },
    { id: 3, title: 'Gasolina', amount: -120.00, type: 'expense', date: '2024-01-13', category: 'Transporte' },
    { id: 4, title: 'Freelance', amount: 450.00, type: 'income', date: '2024-01-12', category: 'Extra' },
  ];

  return (
    <div className="container py-6 space-y-6">
      {/* Welcome Section | Seção de Boas-vindas */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Olá! 👋
        </h1>
        <p className="text-muted-foreground">
          Aqui está um resumo das suas finanças hoje
        </p>
      </div>

      {/* Balance Card | Cartão de Saldo */}
      <Card className="bg-gradient-primary text-primary-foreground shadow-green">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-primary-foreground/80 text-sm">Saldo atual</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBalance(!showBalance)}
              className="h-8 w-8 text-primary-foreground hover:bg-white/20"
              aria-label={showBalance ? 'Ocultar saldo' : 'Mostrar saldo'}
            >
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <div className="text-3xl md:text-4xl font-bold">
            {showBalance ? formatCurrency(balance) : '••••••'}
          </div>
          <div className="flex items-center mt-3 text-primary-foreground/80">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+12.5% este mês</span>
          </div>
        </CardContent>
      </Card>

      {/* Financial Summary | Resumo Financeiro */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receitas</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {formatCurrency(income)}
            </div>
            <p className="text-xs text-muted-foreground">
              +8.2% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Despesas</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatCurrency(expenses)}
            </div>
            <p className="text-xs text-muted-foreground">
              +2.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {formatCurrency(income - expenses)}
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-2">
              <div 
                className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(goalProgress, 100)}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {goalProgress.toFixed(1)}% da meta mensal
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions | Transações Recentes */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Transações Recentes</span>
            <Button variant="ghost" size="sm" className="text-primary">
              Ver todas
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'income' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpRight className="h-4 w-4" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4" />
                  )}
                </div>
                <div>
                  <p className="font-medium">{transaction.title}</p>
                  <p className="text-sm text-muted-foreground">{transaction.category}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-semibold ${
                  transaction.type === 'income' ? 'text-success' : 'text-destructive'
                }`}>
                  {transaction.type === 'income' ? '+' : ''}
                  {formatCurrency(Math.abs(transaction.amount))}
                </p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}