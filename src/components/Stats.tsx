
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Years of Learning', value: '2+' },
  { label: 'Technologies', value: '5+' },
  { label: 'Dedication', value: '100%' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
              className="text-center p-8 glass rounded-2xl border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-primary group-hover:h-full transition-all duration-500"></div>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {stat.value}
              </h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
