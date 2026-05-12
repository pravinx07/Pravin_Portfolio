
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Willovate Pvt Ltd',
    role: 'Associate Software Engineer Intern',
    period: 'Current',
    description: 'Working on .NET backend, React frontend, and PostgreSQL database. Managing cloud infrastructure on Azure.'
  },
  {
    company: 'Freelance / Projects',
    role: 'Full Stack Developer',
    period: '2023 - 2024',
    description: 'Developed various web applications using MERN stack and Next.js. Focused on performance optimization.'
  },
  {
    company: 'Self-Learning & Open Source',
    role: 'Contributor',
    period: '2022 - 2023',
    description: 'Contributing to open-source projects and building personal portfolio projects to master modern tech stacks.'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-dark-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">Work <span>Experience</span></h2>
        
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-12 pb-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-dark border-2 border-primary z-10"></div>
              
              <div className="glass p-6 md:p-8 rounded-2xl hover:border-primary/40 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                      <Briefcase size={20} className="text-primary" /> {exp.company}
                    </h3>
                    <p className="text-primary/80 font-medium">{exp.role}</p>
                  </div>
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 self-start">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
