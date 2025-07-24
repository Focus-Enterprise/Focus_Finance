// Reports Page | Página de Relatórios
// Interactive charts and financial analytics | Gráficos interativos e análise financeira

import { useState } from 'react';
import { useVisibility } from '@/contexts/VisibilityContext';
import { 
  BarChart3, 
  PieChart, 
  Calendar,
  Download,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Reports() {
  const { showBalance } = useVisibility();
  const [selectedPeriod, setSelectedPeriod] = useState('30');
  const [selectedChart, setSelectedChart] = useState('overview');

  // Mock data for charts | Dados simulados para gráficos
  const monthlyData = [
    { month: 'Jan', income: 3200, expenses: 2100, savings: 1100 },
    { month: 'Fev', income: 3400, expenses: 2300, savings: 1100 },
    { month: 'Mar', income: 3100, expenses: 2400, savings: 700 },
    { month: 'Abr', income: 3600, expenses: 2200, savings: 1400 },
    { month: 'Mai', income: 3300, expenses: 2500, savings: 800 },
    { month: 'Jun', income: 3500, expenses: 2100, savings: 1400 },
  ];

  const categoryExpenses = [
    { category: 'Alimentação', amount: 800, percentage: 35, color: 'bg-red-500' },
    { category: 'Transporte', amount: 450, percentage: 20, color: 'bg-yellow-500' },
    { category: 'Moradia', amount: 600, percentage: 26, color: 'bg-blue-500' },
    { category: 'Lazer', amount: 200, percentage: 9, color: 'bg-purple-500' },
    { category: 'Outros', amount: 250, percentage: 10, color: 'bg-gray-500' },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const totalExpenses = categoryExpenses.reduce((sum, cat) => sum + cat.amount, 0);
  const currentMonthIncome = monthlyData[monthlyData.length - 1]?.income || 0;
  const currentMonthExpenses = monthlyData[monthlyData.length - 1]?.expenses || 0;
  const currentMonthSavings = currentMonthIncome - currentMonthExpenses;

  // Calculate trends | Calcular tendências
  const lastMonthIncome = monthlyData[monthlyData.length - 2]?.income || 0;
  const incomeChange = ((currentMonthIncome - lastMonthIncome) / lastMonthIncome) * 100;
  
  const lastMonthExpenses = monthlyData[monthlyData.length - 2]?.expenses || 0;
  const expenseChange = ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses) * 100;

  return (
    <div className="container py-6 space-y-6">
      {/* Header | Cabeçalho */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Relatórios Financeiros
          </h1>
          <p className="text-muted-foreground">
            Análise detalhada das suas finanças
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Últimos 7 dias</SelectItem>
              <SelectItem value="30">Últimos 30 dias</SelectItem>
              <SelectItem value="90">Últimos 3 meses</SelectItem>
              <SelectItem value="365">Último ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar PDF
          </Button>
        </div>
      </div>

      {/* Key Metrics | Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Atual</CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {showBalance ? formatCurrency(currentMonthIncome) : '••••••'}
            </div>
            <p className={`text-xs flex items-center gap-1 ${
              incomeChange >= 0 ? 'text-success' : 'text-destructive'
            }`}>
              {incomeChange >= 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(incomeChange).toFixed(1)}% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gastos Atuais</CardTitle>
            <TrendingDown className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {showBalance ? formatCurrency(currentMonthExpenses) : '••••••'}
            </div>
            <p className={`text-xs flex items-center gap-1 ${
              expenseChange <= 0 ? 'text-success' : 'text-destructive'
            }`}>
              {expenseChange <= 0 ? <TrendingDown className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
              {Math.abs(expenseChange).toFixed(1)}% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Economia Atual</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {showBalance ? formatCurrency(currentMonthSavings) : '••••••'}
            </div>
            <p className="text-xs text-muted-foreground">
              {((currentMonthSavings / currentMonthIncome) * 100).toFixed(1)}% da receita
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Poupança</CardTitle>
            <PieChart className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {((currentMonthSavings / currentMonthIncome) * 100).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">
              Meta recomendada: 20%
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Chart Selection | Seleção de Gráfico */}
      <Card className="shadow-soft">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Análise Visual</CardTitle>
            <Select value={selectedChart} onValueChange={setSelectedChart}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="overview">Visão Geral</SelectItem>
                <SelectItem value="income-expenses">Receitas vs Despesas</SelectItem>
                <SelectItem value="categories">Gastos por Categoria</SelectItem>
                <SelectItem value="trends">Tendências Mensais</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {selectedChart === 'overview' && (
            <div className="space-y-6">
              {/* Simple Bar Chart Representation | Representação Simples de Gráfico de Barras */}
              <div className="space-y-4">
                <h3 className="font-semibold">Últimos 6 Meses</h3>
                <div className="space-y-3">
                  {monthlyData.map((data, index) => (
                    <div key={data.month} className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span>{data.month}</span>
                         <span>{showBalance ? formatCurrency(data.income - data.expenses) : '••••••'}</span>
                       </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                          style={{ 
                            width: `${((data.income - data.expenses) / Math.max(...monthlyData.map(d => d.income - d.expenses))) * 100}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedChart === 'categories' && (
            <div className="space-y-6">
              <h3 className="font-semibold">Gastos por Categoria (Mês Atual)</h3>
              <div className="space-y-4">
                {categoryExpenses.map((category) => (
                  <div key={category.category} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded ${category.color}`} />
                        <span className="font-medium">{category.category}</span>
                      </div>
                       <div className="text-right">
                         <div className="font-semibold">
                           {showBalance ? formatCurrency(category.amount) : '••••••'}
                         </div>
                         <div className="text-sm text-muted-foreground">{category.percentage}%</div>
                       </div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
               <div className="pt-4 border-t">
                 <div className="flex justify-between font-bold">
                   <span>Total</span>
                   <span>{showBalance ? formatCurrency(totalExpenses) : '••••••'}</span>
                 </div>
               </div>
            </div>
          )}

          {selectedChart === 'income-expenses' && (
            <div className="space-y-6">
              <h3 className="font-semibold">Comparativo Receitas vs Despesas</h3>
              <div className="space-y-4">
                {monthlyData.slice(-3).map((data) => (
                  <div key={data.month} className="space-y-3">
                    <h4 className="font-medium">{data.month}</h4>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-success">Receitas</span>
                         <span>{showBalance ? formatCurrency(data.income) : '••••••'}</span>
                       </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-success h-2 rounded-full"
                          style={{ width: `${(data.income / Math.max(...monthlyData.map(d => d.income))) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between text-sm">
                         <span className="text-destructive">Despesas</span>
                         <span>{showBalance ? formatCurrency(data.expenses) : '••••••'}</span>
                       </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-destructive h-2 rounded-full"
                          style={{ width: `${(data.expenses / Math.max(...monthlyData.map(d => d.income))) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Financial Health Score | Pontuação de Saúde Financeira */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Score de Saúde Financeira
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">8.2</div>
            <p className="text-muted-foreground">Saúde financeira muito boa</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm">Taxa de Poupança</span>
              <span className="text-sm font-medium text-success">Excelente</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Controle de Gastos</span>
              <span className="text-sm font-medium text-success">Muito Bom</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Diversificação de Receita</span>
              <span className="text-sm font-medium text-warning">Bom</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Atingimento de Metas</span>
              <span className="text-sm font-medium text-success">Excelente</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">Recomendações</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Continue mantendo uma boa taxa de poupança</li>
              <li>• Considere diversificar suas fontes de renda</li>
              <li>• Monitore os gastos com alimentação (35% do total)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}