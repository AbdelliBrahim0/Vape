import { createContext, useContext, useState, ReactNode, useCallback } from 'react';

type PageTransitionContextType = {
  isTransitioning: boolean;
  startTransition: (onComplete?: () => void) => void;
  endTransition: () => void;
  skipTransition: () => void; // Ajout de la fonction pour skipper
};

const PageTransitionContext = createContext<PageTransitionContextType>({
  isTransitioning: false,
  startTransition: (onComplete?: () => void) => onComplete?.(),
  endTransition: () => {},
  skipTransition: () => {}, // Initialisation
});

export const PageTransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [onTransitionComplete, setOnTransitionComplete] = useState<(() => void) | null>(null);

  const startTransition = useCallback((onComplete?: () => void) => {
    setIsTransitioning(true);
    if (onComplete) {
      setOnTransitionComplete(() => onComplete);
    }
    // La transition se terminera manuellement ou via le skip
  }, []);

  const endTransition = useCallback(() => {
    if (onTransitionComplete) {
      onTransitionComplete();
    }
    setIsTransitioning(false);
    setOnTransitionComplete(null);
  }, [onTransitionComplete]);

  const skipTransition = useCallback(() => {
    if (onTransitionComplete) {
      onTransitionComplete(); // Exécuter la navigation immédiatement
    }
    setIsTransitioning(false); // Cacher le loader
    setOnTransitionComplete(null);
  }, [onTransitionComplete]);

  const value = {
    isTransitioning,
    startTransition,
    endTransition,
    skipTransition, // Fournir la fonction dans le contexte
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
