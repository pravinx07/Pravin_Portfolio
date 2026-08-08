import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '10+', icon: '🚀' },
  { label: 'Years of Learning', value: '2+', icon: '📚' },
  { label: 'Technologies', value: '15+', icon: '⚙️' },
  { label: 'Dedication', value: '100%', icon: '🔥' },
];

const Stats = () => {
  return (
    <section className="py-20" style={{ background: '#040d17' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              className="relative text-center p-8 rounded-2xl overflow-hidden group cursor-default"
              style={{
                background: 'rgba(7,18,32,0.8)',
                border: '1px solid rgba(34,211,238,0.1)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.35)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(34,211,238,0.1)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.1)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(90deg, #22d3ee, #818cf8)' }} />

              <div className="text-3xl mb-3">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-heading font-black mb-2 gradient-text">
                {stat.value}
              </h3>
              <p className="text-sm font-medium" style={{ color: '#64748b' }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
