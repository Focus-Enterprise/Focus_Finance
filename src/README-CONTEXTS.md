# Contextos da Aplicação | Application Contexts

Este documento descreve todos os contextos React utilizados na aplicação Focus Finance para gerenciamento de estado global.

## Estrutura dos Contextos | Context Structure

### 1. ThemeContext.tsx
**Português:** Gerencia o tema da aplicação (claro/escuro/sistema)
**English:** Manages application theme (light/dark/system)

**Funcionalidades | Features:**
- Alternância entre temas claro e escuro | Toggle between light and dark themes
- Detecção automática de preferência do sistema | Automatic system preference detection
- Persistência da escolha no localStorage | Choice persistence in localStorage

**Estados | States:**
- `theme`: Tema atual ('light' | 'dark' | 'system')
- `actualTheme`: Tema realmente aplicado considerando preferência do sistema

### 2. UserProfileContext.tsx
**Português:** Gerencia informações do perfil do usuário
**English:** Manages user profile information

**Funcionalidades | Features:**
- Dados pessoais do usuário | User personal data
- Atualização de perfil em tempo real | Real-time profile updates
- Sincronização entre páginas | Cross-page synchronization

**Estados | States:**
- `userProfile`: Objeto com name, email, phone
- `updateUserProfile`: Função para atualizar dados

### 3. TransactionsContext.tsx
**Português:** Gerencia transações financeiras
**English:** Manages financial transactions

**Funcionalidades | Features:**
- Lista de transações de receita e despesa | Income and expense transaction list
- Cálculos automáticos de totais | Automatic total calculations
- Adição de novas transações | Adding new transactions

**Estados | States:**
- `transactions`: Array de transações
- `addTransaction`: Função para adicionar transação
- `totalIncome`: Total de receitas
- `totalExpenses`: Total de despesas
- `balance`: Saldo (receitas - despesas)

### 4. VisibilityContext.tsx
**Português:** Controla visibilidade de dados sensíveis
**English:** Controls sensitive data visibility

**Funcionalidades | Features:**
- Ocultar/mostrar valores financeiros | Hide/show financial values
- Privacidade em ambientes públicos | Privacy in public environments
- Estado persistente durante sessão | Persistent state during session

**Estados | States:**
- `showBalance`: Boolean para mostrar/ocultar valores
- `toggleVisibility`: Função para alternar visibilidade

## Hierarquia dos Provedores | Provider Hierarchy

```jsx
<QueryClientProvider>
  <ThemeProvider>
    <UserProfileProvider>
      <VisibilityProvider>
        <TransactionsProvider>
          <TooltipProvider>
            <App />
          </TooltipProvider>
        </TransactionsProvider>
      </VisibilityProvider>
    </UserProfileProvider>
  </ThemeProvider>
</QueryClientProvider>
```

## Como Usar os Contextos | How to Use Contexts

### Exemplo de uso | Usage Example:

```tsx
import { useTheme } from '@/contexts/ThemeContext';
import { useUserProfile } from '@/contexts/UserProfileContext';
import { useTransactions } from '@/contexts/TransactionsContext';
import { useVisibility } from '@/contexts/VisibilityContext';

function MyComponent() {
  // Tema | Theme
  const { theme, setTheme, actualTheme } = useTheme();
  
  // Perfil do usuário | User profile
  const { userProfile, updateUserProfile } = useUserProfile();
  
  // Transações | Transactions
  const { transactions, addTransaction, totalIncome, totalExpenses, balance } = useTransactions();
  
  // Visibilidade | Visibility
  const { showBalance, toggleVisibility } = useVisibility();
  
  return (
    // Seu componente aqui | Your component here
  );
}
```

## Benefícios da Arquitetura | Architecture Benefits

1. **Separação de Responsabilidades | Separation of Concerns**
   - Cada contexto gerencia um aspecto específico
   - Each context manages a specific aspect

2. **Reutilização | Reusability**
   - Estados compartilhados entre componentes
   - Shared states between components

3. **Manutenibilidade | Maintainability**
   - Lógica centralizada e organizada
   - Centralized and organized logic

4. **Performance | Performance**
   - Re-renderizações otimizadas
   - Optimized re-renders

5. **Testabilidade | Testability**
   - Contextos isolados facilitam testes
   - Isolated contexts facilitate testing