import { createContext, useContext, useState, ReactNode } from 'react';

type VisibilityContextType = {
  showBalance: boolean;
  toggleVisibility: () => void;
};

const VisibilityContext = createContext<VisibilityContextType | undefined>(undefined);

export function VisibilityProvider({ children }: { children: ReactNode }) {
  const [showBalance, setShowBalance] = useState(true);

  const toggleVisibility = () => {
    setShowBalance(prev => !prev);
  };

  const value = {
    showBalance,
    toggleVisibility
  };

  return (
    <VisibilityContext.Provider value={value}>
      {children}
    </VisibilityContext.Provider>
  );
}

export function useVisibility() {
  const context = useContext(VisibilityContext);
  if (context === undefined) {
    throw new Error('useVisibility must be used within a VisibilityProvider');
  }
  return context;
}