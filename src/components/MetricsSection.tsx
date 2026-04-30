import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio-data';
import { Zap, Target, BarChart3, Terminal, Phone } from 'lucide-react';
import { useView } from '../contexts/ViewContext';
import { track } from '@vercel/analytics';

const MetricsSection = () => {
  const { isDeveloperMode } = useView();
  const metrics = portfolioData.metrics;

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'performance':
        return <Zap className={`${!isDeveloperMode ? 'text-blue-500' : 'text-[var(--amber-glow)]'}`} />;
      case 'impact':
        return <Target className={`${!isDeveloperMode ? 'text-blue-500' : 'text-[var(--red-glow)]'}`} />;
      default:
        return <BarChart3 className={`${!isDeveloperMode ? 'text-blue-500' : 'text-[var(--matrix)]'}`} />;
    }
  };

  return (
    <section id="metrics" className={`pt-16 pb-8 ${!isDeveloperMode ? 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800' : 'bg-[var(--background)]'} text-[var(--foreground)]`}>
      <div className={`container mx-auto ${isDeveloperMode ? 'px-[7.5%]' : 'px-[10%]'}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          {!isDeveloperMode && (
            <>
              <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Performance Metrics</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">Key performance indicators and achievements</p>
            </>
          )}
          {isDeveloperMode && (
            <div className="mb-4 flex justify-start">
              <div className="inline-flex items-center space-x-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-lg px-4 py-2 mb-2 shadow-lg backdrop-blur relative">
                <div className="absolute -inset-1 rounded-lg bg-[var(--matrix)]/5 blur-sm pointer-events-none" />
                <Terminal size={20} className="text-[var(--matrix)]" />
                <span className="text-[var(--matrix)] font-mono text-sm">root@shubhxcluzive:~$</span>
                                  <span className="text-[var(--foreground)] font-mono text-sm">cat /proc/metrics</span>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.metric}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-4 transition-all duration-300 ${!isDeveloperMode ? 'bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl shadow-md backdrop-blur hover:scale-105' : 'bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-lg hover:border-[var(--foreground)]'}`}
            >
              <div className="flex items-center mb-3">
                {getIcon(metric.category)}
                <h3 className={`text-lg font-bold ml-3 capitalize ${!isDeveloperMode ? 'text-gray-800 dark:text-gray-200' : 'text-[var(--matrix)]'}`}>
                  {metric.metric.replace('_', ' ')}
                </h3>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className={`text-3xl font-bold mb-2 ${!isDeveloperMode ? 'text-gray-900 dark:text-white' : 'text-[var(--foreground)]'}`}
              >
                {metric.value}
              </motion.div>

              <p className={`text-sm ${!isDeveloperMode ? 'text-gray-600 dark:text-gray-300' : 'text-[var(--muted-foreground)]'}`}>
                {metric.description}
              </p>

              {/* Animated progress bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                viewport={{ once: true }}
                className={`mt-4 h-2 rounded-full overflow-hidden ${!isDeveloperMode ? 'bg-gray-200 dark:bg-gray-700' : 'bg-[var(--muted)]'}`}
              >
                <div className={`h-full rounded-full ${!isDeveloperMode ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-[var(--matrix)] to-[var(--matrix-dark)]'}`}></div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Merged Footer for Normal View */}
      {!isDeveloperMode && (
        <div className="container mx-auto px-6 mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pt-6 border-t border-gray-300/60 dark:border-gray-700/60 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          >
            <div className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 font-medium">
              <Phone className="w-3.5 h-3.5" />
              <span className="font-mono text-xs">{portfolioData.profile.phone}</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={`mailto:${portfolioData.profile.email}`}
                aria-label="Email"
                onClick={() => track('social_link_clicked', { platform: 'Email' })}
                className="group p-1.5 rounded-md border border-gray-300/80 dark:border-gray-600/80 hover:border-gray-500 dark:hover:border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                <img src="/icons/gmail.svg" alt="Email" className="w-4 h-4 opacity-100 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={`https://${portfolioData.profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={() => track('social_link_clicked', { platform: 'LinkedIn' })}
                className="group p-1.5 rounded-md border border-gray-300/80 dark:border-gray-600/80 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 shadow-sm"
              >
                <img src="/icons/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-4 h-4 opacity-100 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={`https://${portfolioData.profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={() => track('social_link_clicked', { platform: 'GitHub' })}
                className="group p-1.5 rounded-md border border-gray-300/80 dark:border-gray-600/80 hover:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-4 h-4 opacity-100 transition-transform group-hover:scale-110" />
              </a>
              <a
                href={`https://${portfolioData.profile.leetcode}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                onClick={() => track('social_link_clicked', { platform: 'LeetCode' })}
                className="group p-1.5 rounded-md border border-gray-300/80 dark:border-gray-600/80 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-all duration-200 shadow-sm"
              >
                <img src="/icons/leetcode.svg" alt="LeetCode" className="w-4 h-4 opacity-100 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default MetricsSection; 