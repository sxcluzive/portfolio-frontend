import HeroSection from './components/HeroSection';
import DeveloperHeroSection from './components/DeveloperHeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import MetricsSection from './components/MetricsSection';
import ApiPlayground from './components/ApiPlayground';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ViewProvider, useView } from './contexts/ViewContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import ViewToggle from './components/ViewToggle';
import { useIsMobile } from './hooks/useIsMobile';

function AppContent() {
  const { theme } = useTheme();
  const { currentView, setCurrentView, isDeveloperMode } = useView();
  const isMobile = useIsMobile();
  
  return (
    <div className={`min-h-screen ${theme}-theme`}>
      {isMobile && (
        <div className="bg-yellow-100 text-yellow-800 text-center py-2 px-4 text-sm font-medium shadow-md z-50">
          For the best experience, open this portfolio in a <span className="font-bold">desktop browser</span>.
        </div>
      )}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>
      <ViewToggle currentView={currentView} onViewChange={setCurrentView} />
      
      {isDeveloperMode ? <DeveloperHeroSection /> : <HeroSection />}
      
      {!isDeveloperMode && (
        <>
          <SkillsSection />
          <ExperienceSection />
        </>
      )}
      
      {isDeveloperMode && (
        <ApiPlayground />
      )}
      
      <ProjectsSection />
      <MetricsSection />
      <Footer isDeveloperMode={isDeveloperMode} />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ViewProvider>
        <AppContent />
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
