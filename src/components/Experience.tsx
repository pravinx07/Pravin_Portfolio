import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Willovate Private Limited',
    role: 'Associate Software Engineer',
    period: 'June 2026 – Present',
    description: 'Promoted to full-time role. Developing production-grade modules for Willovate Resto and independently building Willovate Studio (a WhatsApp marketing platform). Leading the implementation of scalable backend architecture and React-based user interfaces.',
    tags: ['.NET', 'React.js', 'PostgreSQL', 'MVC Architecture', 'REST APIs']
  },
  {
    company: 'Willovate Private Limited',
    role: 'Software Engineer Intern',
    period: 'Dec 2025 – June 2026',
    description: 'Implemented real-time inventory, POS workflows, reservation systems, WhatsApp template workflows with Meta approval, and campaign analytics dashboards.',
    tags: ['.NET', 'React.js', 'PostgreSQL']
  },
  {
    company: 'Freelance & Open Source',
    role: 'Full Stack Developer',
    period: '2023 – 2024',
    description: 'Developed scalable full-stack web applications and contributed to open-source projects. Mastered modern tech stacks, OOP, Data Structures, and Algorithms.',
    tags: ['Node.js', 'Next.js', 'Docker', 'System Design']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 scroll-mt-20" style={{ background: '#040d17' }}>
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#22d3ee' }}>
          — My Journey
        </p>
        <h2 className="section-title">Work <span>Experience</span></h2>

        <div className="relative ml-4 md:ml-8 space-y-10 pb-8"
          style={{ borderLeft: '1px solid rgba(34,211,238,0.15)' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute top-5 -left-[9px] w-4 h-4 rounded-full z-10"
                style={{
                  background: '#22d3ee',
                  border: '2px solid #040d17',
                  boxShadow: '0 0 12px rgba(34,211,238,0.6)'
                }} />

              <div className="p-6 md:p-8 rounded-2xl group transition-all duration-300"
                style={{
                  background: 'rgba(7,18,32,0.8)',
                  border: '1px solid rgba(34,211,238,0.08)',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.25)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.08)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1 flex items-center gap-2" style={{ color: '#e2e8f0' }}>
                      <Briefcase size={18} style={{ color: '#22d3ee' }} />
                      {exp.company}
                    </h3>
                    <p className="font-medium" style={{ color: '#22d3ee' }}>{exp.role}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg self-start"
                    style={{
                      background: 'rgba(34,211,238,0.08)',
                      border: '1px solid rgba(34,211,238,0.2)',
                      color: '#22d3ee',
                      whiteSpace: 'nowrap'
                    }}>
                    {exp.period}
                  </span>
                </div>

                <p className="leading-relaxed mb-5" style={{ color: '#8ba3bf' }}>
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, j) => (
                    <span key={j} className="text-xs font-semibold px-3 py-1 rounded-lg"
                      style={{
                        background: 'rgba(129,140,248,0.08)',
                        border: '1px solid rgba(129,140,248,0.2)',
                        color: '#818cf8'
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
