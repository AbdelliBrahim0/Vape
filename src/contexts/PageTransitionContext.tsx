import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type PageTransitionContextType = {
  isTransitioning: boolean;
  startTransition: (onComplete?: () => void) => void;
  endTransition: () => void;
};

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  startTransition: (onComplete?: () => void) => onComplete?.(),
  endTransition: () => {}
});

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  // Désactiver complètement les transitions
  const startTransition = useCallback((onComplete?: () => void) => {
    onComplete?.();
  }, []);

  const endTransition = useCallback(() => {
    // Ne rien faire
  }, []);

  const value = {
    isTransitioning: false,
    startTransition,
    endTransition
  };

  return (
    <PageTransitionContext.Provider value={value}>
      {children}
    </PageTransitionContext.Provider>
  );
};

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (context === undefined) {
    throw new Error('usePageTransition must be used within a PageTransitionProvider');
  }
  return context;
};
