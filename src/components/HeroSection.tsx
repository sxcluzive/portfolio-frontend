import { motion } from 'framer-motion';
import { Server, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';
import { track } from '@vercel/analytics';

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
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4 font-heading"
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
              Specialized in Backend Development, Distributed Systems, LLM Integration, System Design with 4+ years of experience building scalable systems and LLM-powered data platforms.
            </p>
          </motion.div>

          {/* Tech stack icons with glass effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mb-8"
          >
            <div className="flex flex-col items-center space-y-2 bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-4 shadow-md backdrop-blur hover:scale-105 transition-transform">
              <Server size={32} className="text-blue-500" />
              <span className="text-xs text-gray-700 dark:text-gray-200 font-mono">Backend</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-4 shadow-md backdrop-blur hover:scale-105 transition-transform">
              <Cpu size={32} className="text-blue-500" />
              <span className="text-xs text-gray-700 dark:text-gray-200 font-mono">AI</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-4 shadow-md backdrop-blur hover:scale-105 transition-transform">
              <Layers size={32} className="text-blue-500" />
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
              onClick={() => {
                track('navigation_clicked', { target: 'skills', view: 'normal' });
                scrollToSection('skills');
              }}
              className="px-6 py-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-150 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-200/40 dark:focus:ring-blue-700/40 backdrop-blur"
            >
              View Technical Stack
            </button>
            <button
              onClick={() => {
                track('navigation_clicked', { target: 'experience', view: 'normal' });
                scrollToSection('experience');
              }}
              className="px-6 py-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-150 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-200/40 dark:focus:ring-blue-700/40 backdrop-blur"
            >
              Experience
            </button>
            <button
              onClick={() => {
                track('navigation_clicked', { target: 'projects', view: 'normal' });
                scrollToSection('projects');
              }}
              className="px-6 py-3 rounded-lg bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all duration-150 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-200/40 dark:focus:ring-blue-700/40 backdrop-blur"
            >
              Projects
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center cursor-pointer group"
        onClick={() => {
          track('navigation_clicked', { target: 'scroll_indicator', view: 'normal' });
          scrollToSection('skills');
        }}
      >
        <span className="text-xs font-medium mb-3 text-gray-500 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors tracking-wide">Scroll down to explore</span>
        <div className="w-6 h-10 border-2 border-gray-400/50 dark:border-gray-500/50 group-hover:border-blue-500 dark:group-hover:border-blue-400 rounded-full flex justify-center bg-white/30 dark:bg-gray-900/30 backdrop-blur transition-colors">
          <div className="w-1 h-2.5 bg-gray-500 dark:bg-gray-400 group-hover:bg-blue-500 dark:group-hover:bg-blue-400 rounded-full mt-2 animate-bounce transition-colors"></div>
        </div>
      </motion.div>
    </section>
  );
} 