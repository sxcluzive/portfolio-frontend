import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Code } from 'lucide-react';
import { track } from '@vercel/analytics';

interface ViewToggleProps {
  onViewChange: (view: 'normal' | 'developer') => void;
  currentView: 'normal' | 'developer';
}

const ViewToggle = ({ onViewChange, currentView }: ViewToggleProps) => {
  const [mounted, setMounted] = useState(false);
  const isDev = currentView === 'developer';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`fixed top-4 right-4 z-50 rounded-lg shadow-lg p-1 ${
        isDev
          ? 'bg-[var(--terminal-gray)] border border-[var(--terminal-border)]'
          : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className={`flex rounded-md p-1 ${
        isDev ? 'bg-[var(--terminal-bg)]' : 'bg-gray-100 dark:bg-gray-700'
      }`}>
        {isDev ? (
          <button
            onClick={() => {
              track('view_mode_changed', { mode: 'normal' });
              onViewChange('normal');
            }}
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-[var(--terminal-gray)] text-[var(--matrix)] border border-[var(--terminal-border)] shadow-sm hover:bg-[var(--matrix)] hover:text-[var(--terminal-bg)]"
          >
            <Users size={16} />
            <span>Switch to Normal View</span>
          </button>
        ) : (
          <button
            onClick={() => {
              track('view_mode_changed', { mode: 'developer' });
              onViewChange('developer');
            }}
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            <Code size={16} />
            <span>Switch to Developer View</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ViewToggle;
 