import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const highlights = [
  { label: 'B.Tech IT', sub: 'DBATU University' },
  { label: 'Full Stack', sub: '.NET + React' },
  { label: 'Databases', sub: 'PostgreSQL + EF Core' },
];

const About = () => {
  return (
    <section id="about" className="py-24 scroll-mt-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden"
            style={{ border: '1px solid rgba(34,211,238,0.15)', boxShadow: '0 0 60px rgba(34,211,238,0.08)' }}>
            <img src={aboutImg} alt="About Me" className="w-full h-full object-cover" />
            <div className="absolute inset-0 opacity-20"
              style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.2), transparent)' }} />
          </div>
          {/* Decorative corner */}
          <div className="absolute -bottom-6 -right-6 w-full h-full rounded-2xl -z-10"
            style={{ border: '1px solid rgba(34,211,238,0.08)' }} />
          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full blur-3xl -z-10"
            style={{ background: 'rgba(34,211,238,0.12)' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: '#22d3ee' }}>
            — Who I Am
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6" style={{ color: '#e2e8f0' }}>
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="space-y-4 text-lg leading-relaxed mb-8" style={{ color: '#8ba3bf' }}>
            <p>
              I am a detail-oriented Software Engineer specializing in building scalable web applications with <span style={{ color: '#e2e8f0', fontWeight: 500 }}>.NET, MERN Stack, and PostgreSQL</span>. I have a strong foundation in Object-Oriented Programming, MVC architecture, and complex problem-solving.
            </p>
            <p>
              Currently working as an <span style={{ color: '#22d3ee', fontWeight: 600 }}>Associate Software Engineer at Willovate</span>, where I develop production-grade products like Willovate Resto and Studio, focusing on performance, clean code, and seamless user experiences.
            </p>
          </div>

          {/* Highlight pills */}
          <div className="flex flex-wrap gap-4 mb-10">
            {highlights.map((h, i) => (
              <div key={i} className="px-4 py-3 rounded-xl"
                style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
                <p className="text-sm font-bold" style={{ color: '#22d3ee' }}>{h.label}</p>
                <p className="text-xs" style={{ color: '#64748b' }}>{h.sub}</p>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
