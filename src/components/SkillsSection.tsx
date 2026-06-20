import { motion } from 'framer-motion';
import { 
  Network, 
  Radio, 
  Server,
  Brain, 
  Database, 
  UserCog
} from 'lucide-react';
import { 
  SiPython, 
  SiGo,
  SiFastapi, 
  SiDjango, 
  SiCelery, 
  SiPostgresql, 
  SiRedis, 
  SiElasticsearch, 
  SiSnowflake, 
  SiNeo4J, 
  SiAmazonwebservices, 
  SiDocker, 
  SiLinux 
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const skillsData = [
  {
    id: "backend",
    title: "Languages & Backend",
    items: [
      { name: "Python", icon: <SiPython className="w-6 h-6 text-yellow-500" /> },
      { name: "Golang", icon: <SiGo className="w-6 h-6 text-blue-400" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-6 h-6 text-teal-500" /> },
      { name: "Django", icon: <SiDjango className="w-6 h-6 text-green-700" /> },
      { name: "REST APIs", icon: <Network className="w-6 h-6 text-blue-500" /> },
      { name: "Microservices", icon: <Server className="w-6 h-6 text-indigo-500" /> },
      { name: "Celery", icon: <SiCelery className="w-6 h-6 text-green-500" /> },
      { name: "WebSockets", icon: <Radio className="w-6 h-6 text-purple-500" /> },
    ]
  },
  {
    id: "database",
    title: "Databases & Caching",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-6 h-6 text-blue-400" /> },
      { name: "Redis", icon: <SiRedis className="w-6 h-6 text-red-600" /> },
      { name: "Snowflake", icon: <SiSnowflake className="w-6 h-6 text-sky-400" /> },
      { name: "Elasticsearch", icon: <SiElasticsearch className="w-6 h-6 text-yellow-400" /> },
      { name: "Neo4j", icon: <SiNeo4J className="w-6 h-6 text-blue-600" /> },
    ]
  },
  {
    id: "cloud",
    title: "Cloud & AI Systems",
    items: [
      { name: "AWS", icon: <SiAmazonwebservices className="w-6 h-6 text-orange-500" /> },
      { name: "Azure", icon: <VscAzure className="w-6 h-6 text-blue-500" /> },
      { name: "Docker", icon: <SiDocker className="w-6 h-6 text-blue-600" /> },
      { name: "Linux", icon: <SiLinux className="w-6 h-6 text-yellow-500" /> },
      { name: "LLM Integration", icon: <Brain className="w-6 h-6 text-purple-500" /> },
      { name: "RAG", icon: <Database className="w-6 h-6 text-blue-400" /> },
      { name: "HITL", icon: <UserCog className="w-6 h-6 text-pink-500" /> },
    ]
  }
];

const Block = ({ data, delay = 0 }: { data: any, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white/60 dark:bg-gray-900/40 border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 shadow-lg backdrop-blur-md hover:shadow-xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 flex flex-col h-full"
  >
    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-6 text-center border-b border-gray-200 dark:border-gray-700/50 pb-4">
      {data.title}
    </h3>
    <div className="flex flex-wrap justify-center gap-3 mt-auto mb-auto">
      {data.items.map((item: any, i: number) => (
        <div key={i} className="flex items-center px-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700/50 hover:-translate-y-1 hover:shadow-md transition-all duration-200">
          <div className="flex-shrink-0 mr-2 flex items-center justify-center">
            {item.icon}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 py-24 relative overflow-hidden">
      <div className="container mx-auto px-[5%] lg:px-[10%] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
        </motion.div>

        {/* 3-Column Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillsData.map((category, idx) => (
            <Block key={category.id} data={category} delay={0.1 * (idx + 1)} />
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default SkillsSection;