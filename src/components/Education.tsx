import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (IT)',
    school: 'Dr. Babasaheb Ambedkar Technological University Lonare',
    period: '2022 – 2026',
  },
  {
    degree: 'Higher Secondary (12th)',
    school: 'SRBT Mouda',
    period: '2019 – 2021',
  }
];

const Education = () => {
  return (
    <section className="py-24 scroll-mt-20 bg-section-alt">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#22d3ee' }}>
          — My Background
        </p>
        <h2 className="section-title">Edu<span>cation</span></h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-7 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 group transition-all duration-300"
              style={{
                background: 'rgba(7,18,32,0.8)',
                border: '1px solid rgba(34,211,238,0.08)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.25)';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.06)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.08)';
                (e.currentTarget as HTMLElement).style.transform = 'translateX(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
                style={{
                  background: 'rgba(34,211,238,0.08)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  color: '#22d3ee'
                }}>
                <GraduationCap size={30} />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-2">
                  <h3 className="text-xl font-bold" style={{ color: '#e2e8f0' }}>
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg self-start"
                    style={{
                      background: 'rgba(34,211,238,0.08)',
                      border: '1px solid rgba(34,211,238,0.2)',
                      color: '#22d3ee',
                      whiteSpace: 'nowrap'
                    }}>
                    {edu.period}
                  </span>
                </div>
                <p style={{ color: '#8ba3bf' }}>{edu.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
