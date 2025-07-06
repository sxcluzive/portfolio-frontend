import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Code } from 'lucide-react';

interface ViewToggleProps {
  onViewChange: (view: 'normal' | 'developer') => void;
  currentView: 'normal' | 'developer';
}

const ViewToggle = ({ onViewChange, currentView }: ViewToggleProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-1"
    >
      <div className="flex bg-gray-100 rounded-md p-1">
        {currentView === 'normal' ? (
          <button
            onClick={() => onViewChange('developer')}
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-white text-gray-900 shadow-sm"
          >
            <Code size={16} />
            <span>Switch to Developer View</span>
          </button>
        ) : (
          <button
            onClick={() => onViewChange('normal')}
            className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 bg-white text-gray-900 shadow-sm"
          >
            <Users size={16} />
            <span>Switch to Normal View</span>
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default ViewToggle; 