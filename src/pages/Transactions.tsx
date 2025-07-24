// Transactions Page | Página de Transações
// Income and expense management with categories | Gestão de receitas e despesas com categorias

import { useState } from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Search,
  Filter,
  Calendar,
  Tag,
  Plus
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
  description?: string;
};

const categories = {
  income: ['Salário', 'Freelance', 'Investimentos', 'Vendas', 'Outros'],
  expense: ['Alimentação', 'Transporte', 'Moradia', 'Saúde', 'Educação', 'Lazer', 'Roupas', 'Outros']
};

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'income' | 'expense'>('all');
  const [filterCategory, setFilterCategory] = useState('all');

  // Mock transactions data | Dados simulados de transações
  const [transactions] = useState<Transaction[]>([
    { id: 1, title: 'Salário Janeiro', amount: 3200.00, type: 'income', date: '2024-01-15', category: 'Salário', description: 'Salário mensal da empresa' },
    { id: 2, title: 'Supermercado Extra', amount: -234.50, type: 'expense', date: '2024-01-14', category: 'Alimentação', description: 'Compras do mês' },
    { id: 3, title: 'Gasolina Posto Shell', amount: -120.00, type: 'expense', date: '2024-01-13', category: 'Transporte' },
    { id: 4, title: 'Freelance Design', amount: 450.00, type: 'income', date: '2024-01-12', category: 'Freelance', description: 'Logo para cliente' },
    { id: 5, title: 'Aluguel', amount: -800.00, type: 'expense', date: '2024-01-10', category: 'Moradia', description: 'Aluguel apartamento' },
    { id: 6, title: 'Consultório Médico', amount: -180.00, type: 'expense', date: '2024-01-09', category: 'Saúde' },
    { id: 7, title: 'Dividendos ITUB4', amount: 25.50, type: 'income', date: '2024-01-08', category: 'Investimentos' },
    { id: 8, title: 'Uber', amount: -15.80, type: 'expense', date: '2024-01-07', category: 'Transporte' },
    { id: 9, title: 'Netflix', amount: -25.90, type: 'expense', date: '2024-01-06', category: 'Lazer' },
    { id: 10, title: 'Venda Celular Usado', amount: 300.00, type: 'income', date: '2024-01-05', category: 'Vendas' },
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  // Filter transactions | Filtrar transações
  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch = transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || transaction.type === filterType;
    const matchesCategory = filterCategory === 'all' || transaction.category === filterCategory;
    
    return matchesSearch && matchesType && matchesCategory;
  });

  // Calculate totals | Calcular totais
  const totalIncome = filteredTransactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = Math.abs(filteredTransactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0));

  const getCategoryColor = (category: string, type: 'income' | 'expense') => {
    const incomeColors = {
      'Salário': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
      'Freelance': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
      'Investimentos': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
      'Vendas': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300',
      'Outros': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    };

    const expenseColors = {
      'Alimentação': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
      'Transporte': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
      'Moradia': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
      'Saúde': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
      'Educação': 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300',
      'Lazer': 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300',
      'Roupas': 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300',
      'Outros': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    };

    return type === 'income' ? incomeColors[category as keyof typeof incomeColors] : expenseColors[category as keyof typeof expenseColors];
  };

  return (
    <div className="container py-6 space-y-6">
      {/* Header | Cabeçalho */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            Transações
          </h1>
          <p className="text-muted-foreground">
            Gerencie suas receitas e despesas
          </p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-green transition-all">
          <Plus className="h-4 w-4 mr-2" />
          Nova Transação
        </Button>
      </div>

      {/* Summary Cards | Cartões de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Receitas</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">
              {formatCurrency(totalIncome)}
            </div>
            <p className="text-xs text-muted-foreground">
              {filteredTransactions.filter(t => t.type === 'income').length} transações
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Despesas</CardTitle>
            <ArrowDownRight className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">
              {formatCurrency(totalExpenses)}
            </div>
            <p className="text-xs text-muted-foreground">
              {filteredTransactions.filter(t => t.type === 'expense').length} transações
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Saldo Líquido</CardTitle>
            <ArrowUpRight className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${
              totalIncome - totalExpenses >= 0 ? 'text-success' : 'text-destructive'
            }`}>
              {formatCurrency(totalIncome - totalExpenses)}
            </div>
            <p className="text-xs text-muted-foreground">
              {filteredTransactions.length} transações total
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Filters | Filtros */}
      <Card className="shadow-soft">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar transações..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filterType} onValueChange={(value: any) => setFilterType(value)}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="income">Receitas</SelectItem>
                <SelectItem value="expense">Despesas</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-full sm:w-40">
                <SelectValue placeholder="Categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                {[...categories.income, ...categories.expense].map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transactions List | Lista de Transações */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Resultados ({filteredTransactions.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 max-h-96 overflow-y-auto p-3 sm:p-6">
          {filteredTransactions.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Nenhuma transação encontrada</p>
            </div>
          ) : (
            filteredTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-start space-x-3 p-3 sm:p-4 border rounded-xl hover:bg-accent/50 transition-colors">
                <div className={`p-2 sm:p-3 rounded-lg flex-shrink-0 ${
                  transaction.type === 'income' 
                    ? 'bg-success/10 text-success' 
                    : 'bg-destructive/10 text-destructive'
                }`}>
                  {transaction.type === 'income' ? (
                    <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <ArrowDownRight className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm sm:text-base">{transaction.title}</h3>
                  <p className={`text-base sm:text-lg font-bold mt-1 ${
                    transaction.type === 'income' ? 'text-success' : 'text-destructive'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}
                    {formatCurrency(Math.abs(transaction.amount))}
                  </p>
                  {transaction.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{transaction.description}</p>
                  )}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getCategoryColor(transaction.category, transaction.type)}`}
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {transaction.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {formatDate(transaction.date)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}