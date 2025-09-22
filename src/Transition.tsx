import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface TransitionContextType {
  startTransition: (to: string) => void;
  isTransitioning: boolean;
  isFadingIn: boolean;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(true);
  const navigate = useNavigate();
  const circleRef = useRef<HTMLDivElement>(null);

  const startTransition = useCallback((to: string) => {
    setIsTransitioning(true);
    setIsFadingIn(false);
    
    // Wait for the fade out animation
    setTimeout(() => {
      navigate(to);
      setIsFadingIn(true);
      // Wait for the new page to mount and circle to fade out
      setTimeout(() => {
        if (circleRef.current) {
          circleRef.current.classList.add('reset');
          // Force a reflow
          circleRef.current.offsetHeight;
          circleRef.current.classList.remove('reset');
        }
        setIsTransitioning(false);
        setTimeout(() => setIsFadingIn(false), 500); // Match fade-in duration
      }, 500);
    }, 300);
  }, [navigate]);

  return (
    <TransitionContext.Provider value={{ startTransition, isTransitioning, isFadingIn }}>
      <div className={`page-content ${isTransitioning ? 'fade-out' : ''} ${isFadingIn ? 'fade-in' : ''}`}>
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