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
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import ThemeSwitcher from './components/ThemeSwitcher';
import ViewToggle from './components/ViewToggle';
import { useIsMobile } from './hooks/useIsMobile';
import Lenis from 'lenis';
import { useEffect } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';

function AppContent() {
  const { theme } = useTheme();
  const { currentView, setCurrentView, isDeveloperMode } = useView();
  const isMobile = useIsMobile();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  useEffect(() => {
    // Only initialize Lenis on desktop
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isMobile]);
  
  return (
    <div className={`min-h-screen ${theme}-theme`}>
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left shadow-sm ${
          isDeveloperMode 
            ? 'bg-[var(--matrix)] shadow-[0_1px_5px_var(--matrix)]' 
            : 'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 shadow-[0_1px_5px_rgba(99,102,241,0.3)]'
        }`}
        style={{ scaleX }}
      />
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
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ViewProvider>
        <AppContent />
        <Analytics />
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
