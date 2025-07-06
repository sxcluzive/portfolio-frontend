import React, { createContext, useContext, useState, useEffect } from 'react';

type ViewType = 'normal' | 'developer';

interface ViewContextType {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  isDeveloperMode: boolean;
}

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const useView = () => {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
};

interface ViewProviderProps {
  children: React.ReactNode;
}

export const ViewProvider: React.FC<ViewProviderProps> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewType>('normal');

  // Load view preference from localStorage on mount
  useEffect(() => {
    const savedView = localStorage.getItem('portfolio-view') as ViewType;
    if (savedView && (savedView === 'normal' || savedView === 'developer')) {
      setCurrentView(savedView);
    }
  }, []);

  // Save view preference to localStorage when it changes
  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    localStorage.setItem('portfolio-view', view);
  };

  const value = {
    currentView,
    setCurrentView: handleViewChange,
    isDeveloperMode: currentView === 'developer',
  };

  return (
    <ViewContext.Provider value={value}>
      {children}
    </ViewContext.Provider>
  );
}; 