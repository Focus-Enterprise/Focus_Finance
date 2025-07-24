// 404 Not Found Page | Página 404 Não Encontrada
// Custom error page with Focus branding | Página de erro customizada com marca Focus

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-strong">
        <CardContent className="p-8 text-center space-y-6">
          <div className="space-y-4">
            <div className="h-20 w-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-3xl">F</span>
            </div>
            <div>
              <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
              <h2 className="text-xl font-semibold text-foreground mb-2">Página não encontrada</h2>
              <p className="text-muted-foreground">
                A página que você está procurando não existe ou foi movida.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/')} 
              className="w-full bg-gradient-primary hover:shadow-green"
            >
              <Home className="h-4 w-4 mr-2" />
              Voltar ao Dashboard
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="w-full"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Página Anterior
            </Button>
          </div>

          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              Precisa de ajuda? Entre em contato conosco através das configurações.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
