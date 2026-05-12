
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Contact <span>Me</span></h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <p className="text-slate-400 mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'shegamwarp@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+91 70839 51137' },
                { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra, India' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-dark-surface border border-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                    <p className="text-white font-medium group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-dark-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-dark-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-400">Message</label>
                <textarea 
                  rows={5}
                  placeholder="How can I help you?" 
                  className="w-full bg-dark-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary justify-center py-4 rounded-xl">
                Send Message <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
