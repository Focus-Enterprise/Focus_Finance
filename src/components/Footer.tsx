// Footer Component | Componente de Rodapé
// Simple footer with useful links | Rodapé simples com links úteis

import { Heart } from 'lucide-react';
import focusLogo from '/lovable-uploads/922516b4-9d12-41b8-8093-6ccd25a59adc.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Termos de Uso', href: '#' },
    { label: 'Política de Privacidade', href: '#' },
    { label: "Aprenda a usar o Focus", href: "https://docs.lovable.dev/tutorial-focus-finance" }
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <img 
              src={focusLogo} 
              alt="Focus Finance Logo" 
              className="h-6 w-6 object-contain"
            />
            <span className="font-semibold">Focus Finance</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Links do rodapé">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label === "Aprenda a usar o Focus" ? "_blank" : "_self"}
                rel={link.label === "Aprenda a usar o Focus" ? "noopener noreferrer" : undefined}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p className="flex items-center gap-1">
              © {currentYear} Focus Finance. Feito com <Heart className="h-3 w-3 text-primary fill-current" /> para suas finanças
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}