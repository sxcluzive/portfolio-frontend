import { Suspense, lazy } from 'react';
import HeroSection from './components/HeroSection';
import DeveloperHeroSection from './components/DeveloperHeroSection';

const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const MetricsSection = lazy(() => import('./components/MetricsSection'));
const ApiPlayground = lazy(() => import('./components/ApiPlayground'));
const Footer = lazy(() => import('./components/Footer'));
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ViewProvider, useView } from './contexts/ViewContext';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import ThemeSwitcher from './components/ThemeSwitcher';
import ViewToggle from './components/ViewToggle';
import { useIsMobile } from './hooks/useIsMobile';

import Lenis from 'lenis';
import Snap from 'lenis/snap';
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

    let lenis: Lenis;
    let snap: Snap | undefined;
    let animationId: number;

    const initLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        infinite: false,
      });

      // Only initialize Lenis Snap for smooth section snapping in Normal Mode
      if (!isDeveloperMode) {
        snap = new Snap(lenis, {
          type: 'mandatory', // 'mandatory' forces it to always magnetically stick to a card
          duration: 1.5, // 1.5 seconds for a very smooth glide
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Silky smooth easing curve
        });

        // Add all section elements to the snap instance
        const sections = document.querySelectorAll('section');
        snap.addElements(Array.from(sections));
      }

      function raf(time: number) {
        lenis.raf(time);
        animationId = requestAnimationFrame(raf);
      }

      animationId = requestAnimationFrame(raf);
    };

    // Defer initialization to free up the main thread during initial load (improves INP)
    const timeoutId = setTimeout(initLenis, 500);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) cancelAnimationFrame(animationId);
      if (snap) snap.destroy();
      if (lenis) lenis.destroy();
    };
  }, [isMobile, isDeveloperMode]);
  
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
      
      <Suspense fallback={<div className="min-h-screen bg-transparent w-full" />}>
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
        {isDeveloperMode && <Footer isDeveloperMode={isDeveloperMode} />}
      </Suspense>
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
      </ViewProvider>
    </ThemeProvider>
  );
}

export default App;
