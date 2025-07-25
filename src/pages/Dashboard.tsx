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
import { useTransactions } from '@/contexts/TransactionsContext';
import { useVisibility } from '@/contexts/VisibilityContext';
import { useUserProfile } from '@/contexts/UserProfileContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const { transactions, totalIncome, totalExpenses, balance } = useTransactions();
  const { showBalance, toggleVisibility } = useVisibility();
  const { userProfile } = useUserProfile();
  const monthlyGoal = 5000.00;
  const goalProgress = ((totalIncome - totalExpenses) / monthlyGoal) * 100;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  // Get recent transactions (last 5)
  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="container py-6 space-y-6">
      {/* Welcome Section | Seção de Boas-vindas */}
      <div className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Olá, {userProfile.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-muted-foreground">
          Aqui está um resumo das suas finanças hoje
        </p>
      </div>

      {/* Balance Card | Cartão de Saldo */}
      <Card className={`text-primary-foreground shadow-strong ${
        balance >= 0 
          ? 'bg-gradient-primary shadow-green' 
          : 'bg-gradient-to-r from-red-400 to-red-500 shadow-red-200'
      }`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-primary-foreground/80 text-sm">Saldo atual</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleVisibility}
              className="h-8 w-8 text-primary-foreground hover:bg-white/20"
              aria-label={showBalance ? 'Ocultar saldo' : 'Mostrar saldo'}
            >
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>
          <div className={`text-3xl md:text-4xl font-bold ${
            balance >= 0 ? 'text-white' : 'text-white'
          }`}>
            {showBalance ? formatCurrency(balance) : '••••••'}
          </div>
          <div className="flex items-center mt-3 text-primary-foreground/80">
            {balance >= 0 ? (
              <>
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+12.5% este mês</span>
              </>
            ) : (
              <>
                <TrendingDown className="h-4 w-4 mr-1" />
                <span className="text-sm">Saldo negativo</span>
              </>
            )}
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
              {showBalance ? formatCurrency(totalIncome) : '••••••'}
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
              {showBalance ? formatCurrency(totalExpenses) : '••••••'}
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
              {showBalance ? formatCurrency(totalIncome - totalExpenses) : '••••••'}
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
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-primary hover:text-primary/80"
              onClick={() => navigate('/transactions')}
            >
              Ver todas
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentTransactions.length > 0 ? (
            recentTransactions.map((transaction) => (
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
                      {transaction.type === 'income' ? '+' : '-'}
                      {showBalance ? formatCurrency(transaction.amount) : '••••••'}
                    </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(transaction.date).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-muted-foreground py-4">
              Nenhuma transação encontrada
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}