
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (IT)',
    school: 'Dr.Babasaheb Ambedkar Technological University Lonare',
    period: '2022 - 2026',
  },
  {
    degree: 'Higher Secondary (12th)',
    school: 'SRBT Mouda',
    period: '2019 - 2021',
  }
];

const Education = () => {
  return (
    <section className="py-24 bg-dark-surface/10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="section-title">Edu<span>cation</span></h2>
        
        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col md:flex-row md:items-center gap-6 group hover:border-primary/40 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-medium text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    {edu.period}
                  </span>
                </div>
                <p className="text-slate-400">{edu.school}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
