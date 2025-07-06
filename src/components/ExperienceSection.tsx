import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio-data';
import { Calendar, MapPin, Building, Code } from 'lucide-react';

const ExperienceSection = () => {
  const experience = portfolioData.experience;

  return (
    <section id="experience" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 py-20">
      <div className="container mx-auto px-[10%]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey in software engineering</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500/30 dark:bg-blue-400/30"></div>

          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.startDate}`}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 ml-16"
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-md"></div>

              <div className="bg-white/60 dark:bg-gray-900/40 border border-gray-200/40 dark:border-gray-800/40 rounded-xl p-6 shadow-md backdrop-blur-md hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {job.position}
                    </h3>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <Building size={16} className="mr-2" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                      <MapPin size={16} className="mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar size={16} className="mr-2" />
                      <span>{job.duration}</span>
                    </div>
                  </div>

                  {/* Current badge */}
                  {!job.endDate && (
                    <div className="mt-4 md:mt-0">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                        Current
                      </span>
                    </div>
                  )}
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center">
                    <Code size={16} className="mr-2 text-blue-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200/40 dark:border-gray-700/40 hover:bg-blue-500 hover:text-white transition-all duration-200 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 