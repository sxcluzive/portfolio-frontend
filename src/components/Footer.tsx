import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { portfolioData } from '../data/portfolio-data';
import { track } from '@vercel/analytics';

interface FooterProps {
  isDeveloperMode: boolean;
}

export default function Footer({ isDeveloperMode }: FooterProps) {
  const profile = portfolioData.profile;

  return (
    <footer className={`${!isDeveloperMode ? 'bg-white/60 dark:bg-gray-900/40 border-t border-gray-200/40 dark:border-gray-800/40 backdrop-blur-sm' : 'bg-[var(--background)] border-t border-[var(--terminal-border)]'}`}>
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          {/* Contact Information */}
          <div className={`flex items-center space-x-2 ${!isDeveloperMode ? 'text-gray-600 dark:text-gray-300' : 'text-[var(--foreground)]'}`}>
            <Phone className="w-3.5 h-3.5" />
            <span className="font-mono text-xs">{profile.phone}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              onClick={() => track('social_link_clicked', { platform: 'Email' })}
              className={`group p-1.5 rounded-md border transition-all duration-200 ${!isDeveloperMode ? 'border-gray-200/60 dark:border-gray-700/60 hover:border-gray-400 dark:hover:border-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/60' : 'border-[var(--terminal-border)] hover:border-[var(--matrix)] hover:bg-[var(--terminal-gray)]'}`}
            >
                              <Mail className={`w-4 h-4 transition-colors ${!isDeveloperMode ? 'text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200' : 'text-[var(--foreground)] group-hover:text-[var(--matrix)]'}`} />
            </a>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onClick={() => track('social_link_clicked', { platform: 'LinkedIn' })}
              className={`group p-1.5 rounded-md border transition-all duration-200 ${!isDeveloperMode ? 'border-gray-200/60 dark:border-gray-700/60 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-blue-50/80 dark:hover:bg-blue-900/20' : 'border-[var(--terminal-border)] hover:border-[var(--matrix)] hover:bg-[var(--terminal-gray)]'}`}
            >
                              <Linkedin className={`w-4 h-4 transition-colors ${!isDeveloperMode ? 'text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400' : 'text-[var(--foreground)] group-hover:text-[var(--matrix)]'}`} />
            </a>
            <a
              href={`https://${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={() => track('social_link_clicked', { platform: 'GitHub' })}
              className={`group p-1.5 rounded-md border transition-all duration-200 ${!isDeveloperMode ? 'border-gray-200/60 dark:border-gray-700/60 hover:border-gray-800 dark:hover:border-gray-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/60' : 'border-[var(--terminal-border)] hover:border-[var(--matrix)] hover:bg-[var(--terminal-gray)]'}`}
            >
                              <Github className={`w-4 h-4 transition-colors ${!isDeveloperMode ? 'text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-gray-200' : 'text-[var(--foreground)] group-hover:text-[var(--matrix)]'}`} />
            </a>
            <a
              href={`https://${profile.leetcode}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              onClick={() => track('social_link_clicked', { platform: 'LeetCode' })}
              className={`group p-1.5 rounded-md border transition-all duration-200 ${!isDeveloperMode ? 'border-gray-200/60 dark:border-gray-700/60 hover:border-orange-400 dark:hover:border-orange-500 hover:bg-orange-50/80 dark:hover:bg-orange-900/20' : 'border-[var(--terminal-border)] hover:border-[var(--matrix)] hover:bg-[var(--terminal-gray)]'}`}
            >
                              <SiLeetcode className={`w-4 h-4 transition-colors ${!isDeveloperMode ? 'text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400' : 'text-[var(--foreground)] group-hover:text-[var(--matrix)]'}`} />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
} 