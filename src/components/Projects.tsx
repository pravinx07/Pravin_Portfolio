import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: 'Merge — Social Platform',
    description: 'A social platform for developers to connect, match, and chat. Features real-time communication and skill matching.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    image: project1,
    github: 'https://github.com/pravinX07',
    demo: 'https://demo.com',
    accent: '#22d3ee'
  },
  {
    title: 'Willovate Restro',
    description: 'Restaurant management system with real-time orders, KOT management, and detailed analytics dashboard.',
    tags: ['.NET Core', 'React', 'Azure', 'SQL Server'],
    image: project2,
    github: 'https://github.com/pravinX07',
    demo: 'https://demo.com',
    accent: '#818cf8'
  },
  {
    title: 'LiveTranscribedAI',
    description: 'Real-time subtitle video calling platform using WebRTC and AI transcription services powered by OpenAI.',
    tags: ['Next.js', 'WebRTC', 'OpenAI', 'Tailwind'],
    image: project3,
    github: 'https://github.com/pravinX07',
    demo: 'https://demo.com',
    accent: '#34d399'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 scroll-mt-20" style={{ background: '#040d17' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#22d3ee' }}>
              — What I've Built
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#e2e8f0' }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <a href="https://github.com/pravinX07" target="_blank" rel="noreferrer"
            className="text-sm font-semibold flex items-center gap-2 transition-colors"
            style={{ color: '#22d3ee' }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
          >
            View All on GitHub
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
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
              className="rounded-2xl overflow-hidden group flex flex-col h-full transition-all duration-300"
              style={{
                background: 'rgba(7,18,32,0.85)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${project.accent}35`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${project.accent}10`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4"
                  style={{ background: 'rgba(4,13,23,0.75)', backdropFilter: 'blur(4px)' }}>
                  <a href={project.github} target="_blank" rel="noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all duration-200"
                    style={{ background: '#e2e8f0', color: '#040d17' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = project.accent;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = '#e2e8f0';
                    }}
                  >
                    <FaGithub size={20} />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer"
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all duration-200"
                    style={{ background: '#e2e8f0', color: '#040d17' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = project.accent;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = '#e2e8f0';
                    }}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-16"
                  style={{ background: 'linear-gradient(to top, rgba(7,18,32,0.9), transparent)' }} />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg"
                      style={{
                        background: `${project.accent}10`,
                        border: `1px solid ${project.accent}30`,
                        color: project.accent
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-3 transition-colors duration-200"
                  style={{ color: '#e2e8f0' }}>
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed flex-grow" style={{ color: '#8ba3bf' }}>
                  {project.description}
                </p>

                <div className="flex items-center gap-6 mt-6 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <a href={project.demo} className="text-sm font-semibold flex items-center gap-1.5 transition-colors"
                    style={{ color: project.accent }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                  <a href={project.github} className="text-sm font-semibold flex items-center gap-1.5 transition-colors"
                    style={{ color: '#64748b' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#e2e8f0'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#64748b'}
                  >
                    <FaGithub size={15} /> Source Code
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
