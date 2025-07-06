import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio-data';
import { Github, Code, Calendar, Terminal } from 'lucide-react';
import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism-tomorrow.css';
import { useView } from '../contexts/ViewContext';

const ProjectsSection = () => {
  const { isDeveloperMode } = useView();
  const projects = portfolioData.projects;

  useEffect(() => {
    // Highlight all code blocks when component mounts or projects change
    Prism.highlightAll();
  }, [projects]);

  return (
    <section id="projects" className={`min-h-screen py-12 ${!isDeveloperMode ? 'bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900' : 'bg-[var(--background)]'} text-[var(--foreground)]`}>
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
              <h2 className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent mb-4">Projects</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">My recent work and code examples</p>
            </>
          )}
          {isDeveloperMode && (
            <div className="mb-4 flex justify-start">
              <div className="inline-flex items-center space-x-2 bg-[var(--terminal-gray)] border border-[var(--terminal-border)] rounded-lg px-4 py-2 mb-2 shadow-lg backdrop-blur-md relative">
                <div className="absolute -inset-1 rounded-lg bg-[var(--matrix)]/5 blur-sm pointer-events-none" />
                <Terminal size={20} className="text-[var(--matrix)]" />
                <span className="text-[var(--matrix)] font-mono text-sm">root@shubhxcluzive:~$</span>
                                  <span className="text-[var(--foreground)] font-mono text-sm">ls -l /projects</span>
              </div>
            </div>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col ${!isDeveloperMode ? 'bg-white/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60 rounded-2xl shadow-xl backdrop-blur-xl hover:scale-105 hover:shadow-2xl' : 'bg-white border border-gray-200 rounded-lg'}`}
            >
              <div className="p-4 flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-3 ${!isDeveloperMode ? 'text-slate-800 dark:text-slate-200' : 'text-gray-900'}`}>
                      {project.name}
                    </h3>
                    <p className={`mb-3 leading-relaxed ${!isDeveloperMode ? 'text-slate-600 dark:text-slate-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className={`flex items-center mb-3 text-sm ${!isDeveloperMode ? 'text-slate-500 dark:text-slate-400' : 'text-gray-500'}`}>
                      <Calendar size={16} className="mr-2" />
                      <span>{project.year}</span>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${!isDeveloperMode ? 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:bg-blue-500 hover:text-white backdrop-blur-sm' : 'bg-[var(--terminal-gray)] text-[var(--matrix)] border border-[var(--terminal-border)] hover:bg-[var(--matrix)] hover:text-[var(--terminal-bg)]'}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${!isDeveloperMode ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl' : 'bg-[var(--terminal-bg)] text-[var(--matrix)] border-2 border-[var(--matrix)] hover:bg-[var(--matrix)] hover:text-[var(--terminal-bg)] shadow-lg'}`}
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Code Preview */}
              <div className={`border-t p-3 ${!isDeveloperMode ? 'bg-slate-50/80 dark:bg-slate-800/60 border-slate-200/60 dark:border-slate-700/60' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Code size={16} className={`${!isDeveloperMode ? 'text-slate-600 dark:text-slate-400' : 'text-gray-600'}`} />
                    <span className={`font-medium ${!isDeveloperMode ? 'text-slate-700 dark:text-slate-300' : 'text-gray-700'}`}>Code Preview</span>
                  </div>
                                      <div className={`text-sm font-mono ${!isDeveloperMode ? 'text-slate-500 dark:text-slate-400' : 'text-gray-500'}`}>
                    Python
                  </div>
                </div>
                <pre className={`text-sm overflow-x-auto font-mono leading-relaxed p-3 rounded border shadow-sm h-48 ${!isDeveloperMode ? 'bg-white/90 dark:bg-slate-900/80 border-slate-200/60 dark:border-slate-700/60' : 'bg-white border-gray-200'}`}>
                  <code className="language-python">{project.code}</code>
                </pre>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 