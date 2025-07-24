// Planning Page | Página de Planejamento
// Financial goals, savings and future predictions | Metas financeiras, economias e previsões futuras

import { useState } from 'react';
import { 
  Target, 
  PiggyBank, 
  Calendar,
  TrendingUp,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

export default function Planning() {
  // Mock data for goals | Dados simulados para metas
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Viagem para Europa',
      targetAmount: 15000,
      currentAmount: 4200,
      deadline: '2024-12-31',
      category: 'Viagem',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Reserva de Emergência',
      targetAmount: 20000,
      currentAmount: 12500,
      deadline: '2024-06-30',
      category: 'Segurança',
      priority: 'high'
    },
    {
      id: 3,
      title: 'Novo Notebook',
      targetAmount: 3500,
      currentAmount: 1800,
      deadline: '2024-04-15',
      category: 'Tecnologia',
      priority: 'medium'
    },
    {
      id: 4,
      title: 'Curso de Investimentos',
      targetAmount: 800,
      currentAmount: 650,
      deadline: '2024-03-01',
      category: 'Educação',
      priority: 'low'
    }
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getDaysRemaining = (deadline: string) => {
    const today = new Date();
    const targetDate = new Date(deadline);
    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive text-destructive-foreground';
      case 'medium': return 'bg-warning text-warning-foreground';
      case 'low': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case 'high': return 'Alta';
      case 'medium': return 'Média';
      case 'low': return 'Baixa';
      default: return 'Baixa';
    }
  };

  const handleEditGoal = (goalId: number) => {
    console.log('Editando meta:', goalId);
    // Aqui você pode implementar a lógica de edição
  };

  const handleDeleteGoal = (goalId: number) => {
    const updatedGoals = goals.filter(goal => goal.id !== goalId);
    setGoals(updatedGoals);
    console.log('Meta excluída:', goalId);
  };

  const totalTargetAmount = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const totalCurrentAmount = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const overallProgress = (totalCurrentAmount / totalTargetAmount) * 100;

  return (
    <div className="container py-6 space-y-6">
      {/* Header | Cabeçalho */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Planejamento Financeiro
        </h1>
        <p className="text-muted-foreground">
          Defina e acompanhe suas metas financeiras
        </p>
      </div>

      {/* Overview Cards | Cartões de Visão Geral */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Planejado</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalTargetAmount)}</div>
            <p className="text-xs text-muted-foreground">
              {goals.length} metas ativas
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Economizado</CardTitle>
            <PiggyBank className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{formatCurrency(totalCurrentAmount)}</div>
            <p className="text-xs text-muted-foreground">
              {overallProgress.toFixed(1)}% do total
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Geral</CardTitle>
            <TrendingUp className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{overallProgress.toFixed(1)}%</div>
            <Progress value={overallProgress} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Goals List | Lista de Metas */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Suas Metas</h2>
        <div className="grid gap-4">
          {goals.map((goal) => {
            const progress = getProgressPercentage(goal.currentAmount, goal.targetAmount);
            const daysRemaining = getDaysRemaining(goal.deadline);
            const isOverdue = daysRemaining < 0;
            const isNearDeadline = daysRemaining <= 30 && daysRemaining > 0;

            return (
              <Card key={goal.id} className="shadow-soft hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-lg">{goal.title}</h3>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(goal.priority)}>
                            {getPriorityLabel(goal.priority)}
                          </Badge>
                          <div className="flex gap-1">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => handleEditGoal(goal.id)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-8 w-8 text-destructive hover:text-destructive"
                              onClick={() => handleDeleteGoal(goal.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Progresso</span>
                          <span className="font-medium">{progress.toFixed(1)}%</span>
                        </div>
                        <Progress 
                          value={progress} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-sm">
                          <span className="text-success font-medium">
                            {formatCurrency(goal.currentAmount)}
                          </span>
                          <span className="text-muted-foreground">
                            de {formatCurrency(goal.targetAmount)}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">
                            {formatDate(goal.deadline)}
                          </span>
                        </div>
                        <div className={`font-medium ${
                          isOverdue 
                            ? 'text-destructive' 
                            : isNearDeadline 
                              ? 'text-warning' 
                              : 'text-muted-foreground'
                        }`}>
                          {isOverdue 
                            ? `${Math.abs(daysRemaining)} dias atrasado`
                            : `${daysRemaining} dias restantes`
                          }
                        </div>
                      </div>

                      <div className="pt-2">
                        <Badge variant="outline" className="text-xs">
                          {goal.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions | Ações Rápidas */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Dicas de Planejamento</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <p className="text-sm text-muted-foreground">
              Defina metas realistas e com prazos alcançáveis
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <p className="text-sm text-muted-foreground">
              Revise suas metas mensalmente e ajuste conforme necessário
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="h-2 w-2 rounded-full bg-primary mt-2" />
            <p className="text-sm text-muted-foreground">
              Priorize metas de emergência e segurança financeira
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}