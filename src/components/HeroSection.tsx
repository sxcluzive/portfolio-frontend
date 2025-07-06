import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const scrollToSection = (target: string) => {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function HeroSection() {
  const profile = portfolioData.profile;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800">
      {/* Animated glass gradient background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Extremely subtle top-left glow */}
        <div className="absolute -top-8 -left-8 w-[120px] h-[120px] bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-transparent rounded-full blur-sm animate-pulse-slow" />
        {/* Extremely subtle bottom-right glow */}
        <div className="absolute bottom-4 right-4 w-[80px] h-[80px] bg-gradient-to-tr from-pink-300/5 via-indigo-300/5 to-transparent rounded-full blur-[2px] animate-pulse-slower" />
      </div>
      <div className="container mx-auto px-[7.5%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {profile.name}
          </motion.h1>

          {/* Role and specialization */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl text-gray-700 dark:text-gray-200 mb-4">
              Backend Engineer
            </h2>
            <p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Specialized in Backend Development, API Design, Cloud Services, System Design with 4 years of experience.
            </p>
          </motion.div>

          {/* Tech stack icons with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mb-8"
          >
            <div className="flex flex-col items-center space-y-2 bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-4 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
              <Code size={32} className="text-blue-500" />
              <span className="text-xs text-gray-700 dark:text-gray-200 font-mono">Backend</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-4 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
              <Database size={32} className="text-blue-500" />
              <span className="text-xs text-gray-700 dark:text-gray-200 font-mono">AI</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-4 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
              <Server size={32} className="text-blue-500" />
              <span className="text-xs text-gray-700 dark:text-gray-200 font-mono">Distributed Systems</span>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <button
              onClick={() => scrollToSection('skills')}
              className="px-6 py-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-150 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-200/40 dark:focus:ring-blue-700/40 backdrop-blur-md"
            >
              View Technical Stack
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-6 py-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-150 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-200/40 dark:focus:ring-blue-700/40 backdrop-blur-md"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-150 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-200/40 dark:focus:ring-blue-700/40 backdrop-blur-md"
            >
              Projects
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* Custom keyframes for glow and pulse */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-slower { animation: pulse-slower 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
} 