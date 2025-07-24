// Tutorial Page | Página Tutorial
// Complete guide for using Focus Finance | Guia completo para usar o Focus Finance

import { ArrowLeft, Home, Target, TrendingUp, CreditCard, BarChart3, Settings, Eye, EyeOff, Plus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import focusLogo from '/lovable-uploads/922516b4-9d12-41b8-8093-6ccd25a59adc.png';

export default function Tutorial() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={focusLogo} 
                alt="Focus Finance Logo" 
                className="h-8 w-8 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Focus Finance
                </h1>
                <p className="text-sm text-muted-foreground">Tutorial Completo</p>
              </div>
            </div>
            <Button 
              onClick={() => navigate('/')} 
              className="bg-gradient-primary hover:opacity-90"
            >
              <Home className="h-4 w-4 mr-2" />
              Ir ao App
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4 py-12">
          <Badge className="bg-gradient-primary text-white border-0 px-4 py-2">
            🎯 Guia Completo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Aprenda a usar o <span className="bg-gradient-primary bg-clip-text text-transparent">Focus Finance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seu aplicativo completo de gestão financeira pessoal. 
            Controle suas finanças de forma simples e eficiente.
          </p>
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="features">Funcionalidades</TabsTrigger>
            <TabsTrigger value="tips">Dicas</TabsTrigger>
            <TabsTrigger value="legal">Termos & Política</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Controle de Visibilidade
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex gap-2">
                    <Eye className="h-5 w-5 text-primary" />
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ícone do Olho</h4>
                    <p className="text-sm text-muted-foreground">
                      Clique no ícone do olho no Dashboard para ocultar/mostrar todos os valores em todas as páginas do app. 
                      Útil para privacidade quando outras pessoas estão por perto.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>🎯 Para que serve o Focus Finance?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    O Focus Finance é seu assistente pessoal de finanças que ajuda você a:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Controlar gastos:</strong> Saiba exatamente onde seu dinheiro está indo</li>
                    <li>• <strong>Definir metas:</strong> Planeje suas grandes conquistas financeiras</li>
                    <li>• <strong>Acompanhar progresso:</strong> Veja seu crescimento financeiro em tempo real</li>
                    <li>• <strong>Tomar decisões:</strong> Relatórios inteligentes para melhor gestão</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>🚀 Primeiros Passos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary">1</Badge>
                      <span className="text-sm">Explore o Dashboard para entender sua situação atual</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary">2</Badge>
                      <span className="text-sm">Adicione suas primeiras transações na aba Transações</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary">3</Badge>
                      <span className="text-sm">Defina suas metas financeiras no Planejamento</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-primary/10 text-primary">4</Badge>
                      <span className="text-sm">Acompanhe seu progresso nos Relatórios</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-6">
            <div className="grid gap-6">
              {/* Dashboard */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="h-5 w-5 text-primary" />
                    Dashboard - Sua Central de Controle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    O Dashboard é sua página inicial onde você tem uma visão geral completa das suas finanças.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">📊 Saldo Atual</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Valor destacado do seu saldo total</li>
                        <li>• Indicador visual: verde (positivo) ou vermelho (negativo)</li>
                        <li>• Botão para ocultar valores (ícone do olho)</li>
                        <li>• Percentual de crescimento mensal</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">💰 Resumo Financeiro</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Total de receitas do mês</li>
                        <li>• Total de despesas do mês</li>
                        <li>• Valor economizado</li>
                        <li>• Progresso da meta de economia</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Planning */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Planejamento - Defina Suas Metas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Crie e acompanhe suas metas financeiras com prazo e prioridade definidos.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">✨ Criar Nova Meta</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Clique em "Nova Meta" (botão <Plus className="inline h-3 w-3" />)</li>
                        <li>• Defina título e valor alvo</li>
                        <li>• Escolha data limite</li>
                        <li>• Selecione categoria e prioridade</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">📈 Acompanhar Progresso</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Barra de progresso visual</li>
                        <li>• Percentual de conclusão</li>
                        <li>• Dias restantes para meta</li>
                        <li>• Editar ou excluir metas</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transactions */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Transações - Controle Receitas e Despesas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Gerencie todas suas entradas e saídas de dinheiro com categorização inteligente.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">🔍 Filtros e Busca</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Buscar por nome ou categoria</li>
                        <li>• Filtrar por tipo (receita/despesa)</li>
                        <li>• Filtrar por categoria específica</li>
                        <li>• Resultados em tempo real</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">📊 Resumo Visual</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Totais de receitas e despesas</li>
                        <li>• Saldo líquido calculado</li>
                        <li>• Cores para identificar tipos</li>
                        <li>• Contador de transações</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reports */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    Relatórios - Análise Inteligente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Visualize tendências, analise gastos por categoria e acompanhe sua saúde financeira.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold">📈 Gráficos Visuais</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Visão geral dos últimos meses</li>
                        <li>• Receitas vs Despesas</li>
                        <li>• Gastos por categoria</li>
                        <li>• Tendências mensais</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">🏆 Score de Saúde</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Pontuação de 0 a 10</li>
                        <li>• Avaliação por categorias</li>
                        <li>• Recomendações personalizadas</li>
                        <li>• Comparação com mês anterior</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tips Tab */}
          <TabsContent value="tips" className="space-y-6">
            <div className="grid gap-6">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>💡 Dicas para Usar o Focus Finance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">🎯 Definindo Metas Realistas</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Comece com metas pequenas e alcançáveis</li>
                        <li>• Defina prazos realistas (nem muito curtos, nem muito longos)</li>
                        <li>• Priorize metas de emergência primeiro</li>
                        <li>• Revise suas metas mensalmente</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">💰 Controlando Gastos</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Registre todas as transações, mesmo as pequenas</li>
                        <li>• Use categorias consistentes</li>
                        <li>• Analise seus gastos semanalmente</li>
                        <li>• Identifique padrões de consumo</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">📊 Analisando Relatórios</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Compare seus gastos mês a mês</li>
                        <li>• Identifique categorias com maior gasto</li>
                        <li>• Use o score de saúde como guia</li>
                        <li>• Siga as recomendações do sistema</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-primary">🔒 Privacidade</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Use o ícone do olho para ocultar valores</li>
                        <li>• Ideal quando outras pessoas estão por perto</li>
                        <li>• Funciona em todas as páginas do app</li>
                        <li>• Clique novamente para mostrar os valores</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">🎓 Boas Práticas Financeiras</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl mb-2">50%</div>
                      <div className="text-sm font-semibold">Necessidades</div>
                      <div className="text-xs text-muted-foreground mt-1">Moradia, alimentação, transporte</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl mb-2">30%</div>
                      <div className="text-sm font-semibold">Desejos</div>
                      <div className="text-xs text-muted-foreground mt-1">Lazer, entretenimento, compras</div>
                    </div>
                    <div className="text-center p-4 bg-background/50 rounded-lg">
                      <div className="text-2xl mb-2">20%</div>
                      <div className="text-sm font-semibold">Poupança</div>
                      <div className="text-xs text-muted-foreground mt-1">Emergência, metas, investimentos</div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Regra 50-30-20: Uma forma simples de organizar seu orçamento
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Legal Tab */}
          <TabsContent value="legal" className="space-y-6">
            <div className="grid gap-6">
              {/* Terms of Use */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>📋 Termos de Uso</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">1. Aceitação dos Termos</h4>
                    <p>
                      Ao utilizar o Focus Finance, você concorda com estes termos de uso. 
                      Se você não concorda com qualquer parte destes termos, não deve usar nosso aplicativo.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">2. Uso do Aplicativo</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• O Focus Finance é destinado apenas para uso pessoal de gestão financeira</li>
                      <li>• Você é responsável pela precisão das informações inseridas</li>
                      <li>• Não utilize o aplicativo para atividades ilegais ou não autorizadas</li>
                      <li>• O aplicativo é fornecido "como está" sem garantias expressas ou implícitas</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">3. Responsabilidades do Usuário</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• Manter a confidencialidade de suas informações de acesso</li>
                      <li>• Usar o aplicativo de forma responsável e ética</li>
                      <li>• Não tentar comprometer a segurança do sistema</li>
                      <li>• Reportar bugs ou problemas de segurança identificados</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">4. Limitação de Responsabilidade</h4>
                    <p>
                      O Focus Finance não se responsabiliza por decisões financeiras tomadas com base 
                      nas informações fornecidas pelo aplicativo. Use sempre seu bom senso e consulte 
                      profissionais quando necessário.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">5. Modificações</h4>
                    <p>
                      Reservamo-nos o direito de modificar estes termos a qualquer momento. 
                      Continuando a usar o aplicativo após as mudanças, você aceita os novos termos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Policy */}
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle>🔒 Política de Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">1. Informações que Coletamos</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• Dados financeiros inseridos voluntariamente (transações, metas, etc.)</li>
                      <li>• Informações de uso do aplicativo para melhorar a experiência</li>
                      <li>• Dados técnicos como tipo de dispositivo e navegador</li>
                      <li>• Preferências de configuração e personalização</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">2. Como Usamos Suas Informações</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• Fornecer e melhorar nossos serviços</li>
                      <li>• Gerar relatórios e análises personalizadas</li>
                      <li>• Personalizar sua experiência no aplicativo</li>
                      <li>• Enviar notificações relevantes (se autorizadas)</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">3. Proteção de Dados</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• Seus dados financeiros são armazenados localmente no seu dispositivo</li>
                      <li>• Utilizamos criptografia para proteger informações sensíveis</li>
                      <li>• Não compartilhamos seus dados financeiros com terceiros</li>
                      <li>• Você pode excluir seus dados a qualquer momento</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">4. Seus Direitos</h4>
                    <ul className="space-y-1 pl-4">
                      <li>• Acessar todos os dados que temos sobre você</li>
                      <li>• Corrigir informações incorretas ou desatualizadas</li>
                      <li>• Excluir sua conta e todos os dados associados</li>
                      <li>• Exportar seus dados em formato legível</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">5. Cookies e Tecnologias Similares</h4>
                    <p>
                      Utilizamos cookies apenas para melhorar sua experiência, como lembrar suas 
                      preferências de tema e configurações. Você pode desabilitar os cookies nas 
                      configurações do seu navegador.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">6. Contato</h4>
                    <p>
                      Se você tiver dúvidas sobre nossa política de privacidade ou sobre como 
                      tratamos seus dados, entre em contato conosco através das configurações do aplicativo.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="shadow-soft bg-muted/30">
                <CardHeader>
                  <CardTitle>📞 Suporte e Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Precisa de ajuda ou tem alguma dúvida? Estamos aqui para te ajudar!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">📧 Email de Suporte</h4>
                      <p className="text-sm text-muted-foreground">suporte@focusfinance.app</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">💬 Chat Online</h4>
                      <p className="text-sm text-muted-foreground">Disponível nas configurações do app</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-xs text-muted-foreground text-center">
                      Última atualização: Janeiro 2024 • Focus Finance v1.0
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}