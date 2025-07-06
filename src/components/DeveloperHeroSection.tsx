import { motion } from 'framer-motion';
import { Terminal, Code, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolio-data';

const DeveloperHeroSection = () => {
  const profile = portfolioData.profile;

  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden bg-[var(--terminal-bg)]">
      {/* Animated terminal background overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[var(--matrix)]/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[var(--matrix-dark)]/10 rounded-full blur-2xl animate-pulse-slower" />
      </div>
      <div className="container mx-auto px-[7.5%] relative z-10">
        {/* Terminal prompt left-aligned */}
        <div className="mb-8 flex justify-start">
          <div className="inline-flex items-center space-x-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-lg px-4 py-2 shadow-lg backdrop-blur-md relative">
            <div className="absolute -inset-1 rounded-lg bg-[var(--matrix)]/5 blur-sm pointer-events-none" />
            <Terminal size={20} className="text-[var(--matrix)]" />
            <span className="text-[var(--matrix)] font-mono text-sm">root@shubhxcluzive:~# whoami</span>
          </div>
        </div>
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
            className="text-6xl font-bold text-[var(--matrix)] mb-6 font-mono drop-shadow-xl"
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
            <h2 className="text-2xl text-[var(--matrix)] mb-4 font-mono">
              Backend Engineer
            </h2>
            <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto leading-relaxed font-mono">
              Designing Backends for Scale, Stability & Sanity.
            </p>
          </motion.div>

          {/* Tech stack icons with terminal effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mb-8"
          >
            <div className="flex flex-col items-center space-y-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-xl p-4 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
              <Code size={32} className="text-[var(--matrix)] drop-shadow-glow" />
              <span className="text-xs text-[var(--matrix)] font-mono">Backend</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-xl p-4 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
              <Server size={32} className="text-[var(--matrix)] drop-shadow-glow" />
              <span className="text-xs text-[var(--matrix)] font-mono">AI</span>
            </div>
            <div className="flex flex-col items-center space-y-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-xl p-4 shadow-md backdrop-blur-md hover:scale-105 transition-transform">
              <Server size={32} className="text-[var(--matrix)] drop-shadow-glow" />
              <span className="text-xs text-[var(--matrix)] font-mono">Distributed Systems</span>
            </div>
          </motion.div>

          {/* Quick stats with terminal effect */}
          {/* Removed stats section as requested */}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-12"
          >
            <p className="text-[var(--matrix)] font-mono text-sm mb-4">
              Scroll down to explore the API playground
            </p>
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-[var(--terminal-border)] rounded-full flex justify-center bg-[var(--terminal-gray)] backdrop-blur-md">
                <div className="w-1 h-3 bg-[var(--matrix)] rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      {/* Custom keyframes for glow and pulse */}
      <style>{`
        .drop-shadow-glow {
          filter: drop-shadow(0 0 2px #39ff1488);
        }
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
};

export default DeveloperHeroSection; 