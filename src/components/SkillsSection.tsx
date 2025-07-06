import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio-data';
import { Code, Database, Settings } from 'lucide-react';

const SkillsSection = () => {
  const skills = portfolioData.skills;

  const getIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'backend development':
        return <Code className="text-blue-500" />;
      case 'database & cloud':
        return <Database className="text-blue-500" />;
      case 'ai/ml & devops':
        return <Settings className="text-blue-500" />;
      default:
        return <Code className="text-blue-500" />;
    }
  };

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 py-20">
      <div className="container mx-auto px-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My technology stack and expertise areas</p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-6 shadow-md backdrop-blur-md hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {getIcon(skill.category)}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 ml-3">
                  {skill.category}
                </h3>
              </div>

              <div className="space-y-3">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <span className="text-blue-500 mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection; 