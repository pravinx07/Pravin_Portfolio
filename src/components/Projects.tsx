import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: 'Merge - Social Platform',
    description: 'A social platform for developers to connect, match, and chat. Features real-time communication and skill matching.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    image: project1,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Willovate Restro',
    description: 'Restaurant management system with real-time orders, KOT management, and detailed analytics dashboard.',
    tags: ['.NET Core', 'React', 'Azure', 'SQL Server'],
    image: project2,
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'LiveTranscribedAI',
    description: 'Real-time subtitle video calling platform using WebRTC and AI transcription services.',
    tags: ['Next.js', 'WebRTC', 'OpenAI', 'Tailwind'],
    image: project3,
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-dark-surface/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-slate-400 max-w-lg">
              Here are some of my recent works that demonstrate my skills in full-stack development and problem-solving.
            </p>
          </div>
          <a href="#" className="text-primary hover:text-primary-hover font-semibold flex items-center gap-2 group">
            View All Projects <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-3 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-colors">
                    <FaGithub size={20} />
                  </a>
                  <a href={project.demo} className="p-3 rounded-full bg-white text-dark hover:bg-primary hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                   <a href={project.demo} className="text-white text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors">
                     <ExternalLink size={16} /> Live Demo
                   </a>
                   <a href={project.github} className="text-white text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors">
                     <FaGithub size={16} /> Source Code
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
