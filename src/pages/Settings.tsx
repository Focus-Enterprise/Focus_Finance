// Settings Page | Página de Configurações
// User profile, preferences and contact | Perfil do usuário, preferências e contato

import { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MessageCircle,
  Shield,
  Bell,
  Palette,
  HelpCircle,
  ExternalLink,
  Save
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

export default function Settings() {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    name: 'João Silva',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    pushNotifications: true,
    weeklyReports: true,
    goalReminders: true
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Perfil atualizado",
      description: "Suas informações foram salvas com sucesso.",
    });
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
    toast({
      title: "Configuração atualizada",
      description: "Suas preferências de notificação foram salvas.",
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '(11) 95911-7279',
      action: () => window.open('https://wa.me/5511959117279', '_blank'),
      color: 'text-green-600'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'focus.prise@gmail.com',
      action: () => window.open('mailto:focus.prise@gmail.com', '_blank'),
      color: 'text-blue-600'
    }
  ];

  const helpLinks = [
    { title: 'Termos de Uso', href: '#' },
    { title: 'Política de Privacidade', href: '#' },
    { title: 'Aprenda a usar o Focus', href: '#' },
    { title: 'Central de Ajuda', href: '#' }
  ];

  return (
    <div className="container py-6 space-y-6 max-w-4xl">
      {/* Header | Cabeçalho */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Configurações
        </h1>
        <p className="text-muted-foreground">
          Gerencie seu perfil e preferências do aplicativo
        </p>
      </div>

      {/* User Profile | Perfil do Usuário */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Perfil do Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{userProfile.name}</h3>
                <p className="text-muted-foreground">{userProfile.email}</p>
              </div>
            </div>
            <Button 
              variant={isEditing ? "default" : "outline"}
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'Cancelar' : 'Editar'}
            </Button>
          </div>

          {isEditing && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome completo</Label>
                  <Input
                    id="name"
                    value={userProfile.name}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input
                    id="phone"
                    value={userProfile.phone}
                    onChange={(e) => setUserProfile(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={userProfile.email}
                  onChange={(e) => setUserProfile(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <Button onClick={handleSaveProfile} className="bg-gradient-primary">
                <Save className="h-4 w-4 mr-2" />
                Salvar Alterações
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Theme Settings | Configurações de Tema */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5" />
            Aparência
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium">Tema do aplicativo</h3>
              <p className="text-sm text-muted-foreground">
                Escolha entre modo claro, escuro ou seguir o sistema
              </p>
            </div>
            <ThemeToggle />
          </div>
        </CardContent>
      </Card>

      {/* Notifications | Notificações */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notificações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Alertas por e-mail</h3>
                <p className="text-sm text-muted-foreground">
                  Receba resumos e alertas importantes por e-mail
                </p>
              </div>
              <Switch
                checked={notifications.emailAlerts}
                onCheckedChange={(checked) => handleNotificationChange('emailAlerts', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Notificações push</h3>
                <p className="text-sm text-muted-foreground">
                  Receba notificações instantâneas no seu dispositivo
                </p>
              </div>
              <Switch
                checked={notifications.pushNotifications}
                onCheckedChange={(checked) => handleNotificationChange('pushNotifications', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Relatórios semanais</h3>
                <p className="text-sm text-muted-foreground">
                  Receba um resumo semanal das suas finanças
                </p>
              </div>
              <Switch
                checked={notifications.weeklyReports}
                onCheckedChange={(checked) => handleNotificationChange('weeklyReports', checked)}
              />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">Lembretes de metas</h3>
                <p className="text-sm text-muted-foreground">
                  Receba lembretes sobre o progresso das suas metas
                </p>
              </div>
              <Switch
                checked={notifications.goalReminders}
                onCheckedChange={(checked) => handleNotificationChange('goalReminders', checked)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact Support | Fale Conosco */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Fale Conosco
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            Precisa de ajuda? Entre em contato conosco através dos canais abaixo:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactMethods.map((method) => (
              <Button
                key={method.label}
                variant="outline"
                onClick={method.action}
                className="h-auto p-4 justify-start hover:bg-accent"
              >
                <method.icon className={`h-5 w-5 mr-3 ${method.color}`} />
                <div className="text-left">
                  <div className="font-medium">{method.label}</div>
                  <div className="text-sm text-muted-foreground">{method.value}</div>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security | Privacidade e Segurança */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacidade e Segurança
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {helpLinks.map((link) => (
              <Button
                key={link.title}
                variant="ghost"
                className="w-full justify-between h-auto p-3"
                onClick={() => {
                  // Future navigation to help pages | Futura navegação para páginas de ajuda
                  toast({
                    title: "Em breve",
                    description: "Esta seção estará disponível em breve.",
                  });
                }}
              >
                <span>{link.title}</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* App Version | Versão do App */}
      <Card className="shadow-soft">
        <CardContent className="pt-6">
          <div className="text-center text-sm text-muted-foreground">
            <p>Focus Finance App</p>
            <p>Versão 1.0.0</p>
            <p className="mt-2">
              Desenvolvido com ❤️ para ajudar você a organizar suas finanças
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}