import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface TransitionContextType {
  startTransition: (to: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();
  const circleRef = useRef<HTMLDivElement>(null);

  const startTransition = useCallback((to: string) => {
    setIsTransitioning(true);
    
    // Wait for the fade out animation
    setTimeout(() => {
      navigate(to);
      // Wait for the new page to mount and circle to fade out
      setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.classList.add('reset');
          // Force a reflow
          circleRef.current.offsetHeight;
          circleRef.current.classList.remove('reset');
        }
        setIsTransitioning(false);
      }, 500);
    }, 300);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning }}>
      <div className={`page-content ${isTransitioning ? 'fade-out' : ''}`}>
        {children}
      </div>
      <div ref={circleRef} className={`page-transition circle ${isTransitioning ? 'expanding' : ''}`} />
    </TransitionContext.Provider>
  );
}

export function useTransition() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
} 