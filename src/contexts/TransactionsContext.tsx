import { createContext, useContext, useState, ReactNode } from 'react';

export type Transaction = {
  id: number;
  title: string;
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
  description?: string;
};

type TransactionsContextType = {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void;
  totalIncome: number;
  totalExpenses: number;
  balance: number;
};

const TransactionsContext = createContext<TransactionsContextType | undefined>(undefined);

export function TransactionsProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, title: 'Salário Janeiro', amount: 3200.00, type: 'income', date: '2024-01-15', category: 'Salário', description: 'Salário mensal da empresa' },
    { id: 2, title: 'Supermercado Extra', amount: 234.50, type: 'expense', date: '2024-01-14', category: 'Alimentação', description: 'Compras do mês' },
    { id: 3, title: 'Gasolina Posto Shell', amount: 120.00, type: 'expense', date: '2024-01-13', category: 'Transporte' },
    { id: 4, title: 'Freelance Design', amount: 450.00, type: 'income', date: '2024-01-12', category: 'Freelance', description: 'Logo para cliente' },
    { id: 5, title: 'Aluguel', amount: 800.00, type: 'expense', date: '2024-01-10', category: 'Moradia', description: 'Aluguel apartamento' },
    { id: 6, title: 'Consultório Médico', amount: 180.00, type: 'expense', date: '2024-01-09', category: 'Saúde' },
    { id: 7, title: 'Dividendos ITUB4', amount: 25.50, type: 'income', date: '2024-01-08', category: 'Investimentos' },
    { id: 8, title: 'Uber', amount: 15.80, type: 'expense', date: '2024-01-07', category: 'Transporte' },
    { id: 9, title: 'Netflix', amount: 25.90, type: 'expense', date: '2024-01-06', category: 'Lazer' },
    { id: 10, title: 'Venda Celular Usado', amount: 300.00, type: 'income', date: '2024-01-05', category: 'Vendas' },
  ]);

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Math.max(...transactions.map(t => t.id), 0) + 1,
    };
    setTransactions(prev => [newTransaction, ...prev]);
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const value = {
    transactions,
    addTransaction,
    totalIncome,
    totalExpenses,
    balance
  };

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  if (context === undefined) {
    throw new Error('useTransactions must be used within a TransactionsProvider');
  }
  return context;
}