// Tutorial Page | Página de Tutorial
// Complete guide for first-time users | Guia completo para novos usuários

import { 
  Home, 
  Target, 
  ArrowUpDown, 
  BarChart3, 
  Settings,
  Plus,
  Eye,
  EyeOff,
  TrendingUp,
  TrendingDown,
  Filter,
  Search,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Tutorial do Focus Finance
          </h1>
          <p className="text-xl text-muted-foreground">
            Aprenda a usar todas as funcionalidades do seu app de finanças pessoais
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Bem-vindo ao Focus Finance!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              O Focus Finance é seu companheiro ideal para controlar suas finanças pessoais. 
              Com ele, você pode acompanhar receitas, despesas, definir metas e gerar relatórios detalhados.
            </p>
            <p>
              Este tutorial vai te ensinar tudo que você precisa saber para começar a usar o app com confiança.
            </p>
          </CardContent>
        </Card>

        {/* Navigation Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="h-5 w-5" />
              Navegação do App
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Dashboard</h4>
                    <p className="text-sm text-muted-foreground">
                      Visão geral das suas finanças com saldo atual, receitas, despesas e transações recentes.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Planejamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Defina metas financeiras e acompanhe seu progresso mensalmente.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ArrowUpDown className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Transações</h4>
                    <p className="text-sm text-muted-foreground">
                      Lista completa de todas suas receitas e despesas com filtros avançados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Relatórios</h4>
                    <p className="text-sm text-muted-foreground">
                      Gráficos e análises detalhadas dos seus gastos por categoria e período.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Settings className="h-5 w-5 text-primary" />
                  <div>
                    <h4 className="font-semibold">Configurações</h4>
                    <p className="text-sm text-muted-foreground">
                      Personalize seu perfil, notificações e preferências do app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Dashboard Features */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dashboard - Seu Painel Principal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Cartão de Saldo Atual</h4>
              <div className="bg-gradient-primary text-white p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/80 text-sm">Saldo atual</span>
                  <Eye className="h-4 w-4" />
                </div>
                <div className="text-2xl font-bold">R$ 2.599,30</div>
              </div>
              <div className="space-y-2">
                <p><strong>Cor Verde:</strong> Quando seu saldo está positivo (você tem dinheiro)</p>
                <p><strong>Cor Vermelha:</strong> Quando seu saldo está negativo (você deve mais do que tem)</p>
                <p className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <strong>Botão de Visibilidade:</strong> Clique para ocultar/mostrar todos os valores financeiros
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Cards de Resumo</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Receitas</span>
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="text-xl font-bold text-green-500">R$ 3.975,50</div>
                  <p className="text-xs text-muted-foreground">Todo dinheiro que entra</p>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Despesas</span>
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  </div>
                  <div className="text-xl font-bold text-red-500">R$ 1.376,20</div>
                  <p className="text-xs text-muted-foreground">Todo dinheiro que sai</p>
                </div>

                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Economia</span>
                    <Target className="h-4 w-4 text-blue-500" />
                  </div>
                  <div className="text-xl font-bold text-blue-500">R$ 2.599,30</div>
                  <p className="text-xs text-muted-foreground">O que você conseguiu guardar</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Transações Recentes</h4>
              <p>Mostra as 5 últimas transações que você adicionou, com link para "Ver todas" que leva para a página de Transações.</p>
            </div>
          </CardContent>
        </Card>

        {/* Adding Transactions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Como Adicionar Transações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Botão Flutuante Verde (+)</h4>
              <p>
                No Dashboard e Planejamento, você verá um botão verde redondo no canto inferior direito. 
                Clique nele para adicionar uma nova transação.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Preenchendo o Formulário</h4>
              <div className="space-y-3">
                <div>
                  <strong>1. Tipo de Transação:</strong>
                  <p>• <span className="text-green-600">Receita:</span> Dinheiro que você recebeu (salário, freelance, vendas)</p>
                  <p>• <span className="text-red-600">Despesa:</span> Dinheiro que você gastou (compras, contas, lazer)</p>
                </div>
                
                <div>
                  <strong>2. Descrição:</strong>
                  <p>Nome curto para identificar a transação (ex: "Salário Janeiro", "Supermercado")</p>
                </div>

                <div>
                  <strong>3. Valor:</strong>
                  <p>Digite apenas o número (ex: 1500.00 para mil e quinhentos reais)</p>
                </div>

                <div>
                  <strong>4. Categoria:</strong>
                  <p>Escolha uma categoria da lista ou selecione "Outro" para criar uma personalizada</p>
                </div>

                <div>
                  <strong>5. Descrição Adicional:</strong>
                  <p>Campo opcional para mais detalhes sobre a transação</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Page */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowUpDown className="h-5 w-5" />
              Página de Transações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Cards de Totais</h4>
              <p>No topo da página, você vê três cards com:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Total de Receitas:</strong> Soma de todo dinheiro que entrou</li>
                <li><strong>Total de Despesas:</strong> Soma de todo dinheiro que saiu</li>
                <li><strong>Saldo Líquido:</strong> Diferença entre receitas e despesas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Filtros de Busca</h4>
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  <strong>Busca por Texto:</strong> Digite para encontrar transações por nome ou categoria
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <strong>Filtro por Tipo:</strong> Mostre apenas receitas, apenas despesas, ou ambos
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <strong>Filtro por Categoria:</strong> Filtre por categoria específica (Alimentação, Transporte, etc.)
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Lista de Transações</h4>
              <p>
                Cada transação mostra o nome, valor (verde para receitas, vermelho para despesas), 
                categoria com cor específica e data da transação.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Planning Page */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Planejamento Financeiro
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Use esta página para definir metas financeiras mensais e acompanhar seu progresso. 
              Defina quanto quer economizar, quanto pode gastar em cada categoria, e veja se está 
              no caminho certo para atingir seus objetivos.
            </p>
          </CardContent>
        </Card>

        {/* Reports Page */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Relatórios e Gráficos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Visualize seus gastos em gráficos coloridos, veja tendências ao longo do tempo 
              e analise em quais categorias você mais gasta. Ideal para entender seus hábitos 
              financeiros e tomar decisões mais conscientes.
            </p>
          </CardContent>
        </Card>

        {/* Settings Page */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configurações
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Personalize sua experiência: altere suas informações pessoais, configure 
              notificações, escolha o tema (claro/escuro) e ajuste outras preferências do app.
            </p>
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dicas para Começar</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Comece adicionando suas receitas:</strong> Salário, freelances, vendas, etc.
              </li>
              <li>
                <strong>Adicione suas despesas principais:</strong> Aluguel, alimentação, transporte, etc.
              </li>
              <li>
                <strong>Use categorias consistentes:</strong> Isso ajudará nos relatórios futuros
              </li>
              <li>
                <strong>Verifique o saldo regularmente:</strong> Use o Dashboard para acompanhar sua situação
              </li>
              <li>
                <strong>Explore os filtros:</strong> Na página de Transações, use os filtros para analisar períodos específicos
              </li>
              <li>
                <strong>Defina metas:</strong> Use o Planejamento para estabelecer objetivos financeiros
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle>Precisa de Ajuda?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Se você ainda tiver dúvidas ou encontrar algum problema, entre em contato conosco 
              através das configurações do app. Estamos aqui para ajudar você a ter sucesso 
              no controle das suas finanças!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}