// Main entry point of the Focus Finance application | Ponto de entrada principal da aplicação Focus Finance
// This file initializes React 18 and renders the root App component | Este arquivo inicializa o React 18 e renderiza o componente App raiz

import { createRoot } from 'react-dom/client' // React 18 createRoot API for better performance | API createRoot do React 18 para melhor performance
import App from './App.tsx' // Main application component | Componente principal da aplicação
import './index.css' // Global styles, Tailwind CSS and design system | Estilos globais, Tailwind CSS e sistema de design

// Create React root and render the application | Cria raiz do React e renderiza a aplicação
// Using React 18's createRoot for better concurrent features | Usando createRoot do React 18 para melhores recursos concorrentes
createRoot(document.getElementById("root")!).render(<App />);
