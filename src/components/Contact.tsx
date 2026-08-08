import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: `New message from ${formData.name}`,
          to_name: 'Pravin',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'shegamwarp@gmail.com', href: 'mailto:shegamwarp@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 70839 51137', href: 'tel:+917083951137' },
    { icon: MapPin, label: 'Location', value: 'Nagpur, Maharashtra, India', href: '#' },
  ];

  return (
    <section id="contact" className="py-24 scroll-mt-20" style={{ background: '#040d17' }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#22d3ee' }}>
          — Let's Connect
        </p>
        <h2 className="section-title">Contact <span>Me</span></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#e2e8f0' }}>Get in Touch</h3>
            <p className="text-lg mb-10 leading-relaxed" style={{ color: '#8ba3bf' }}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something great together.
            </p>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <a key={i} href={item.href}
                  className="flex items-center gap-5 group transition-all duration-200"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: 'rgba(34,211,238,0.08)',
                      border: '1px solid rgba(34,211,238,0.15)',
                      color: '#22d3ee'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #22d3ee, #818cf8)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'transparent';
                      (e.currentTarget as HTMLElement).style.color = '#040d17';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(34,211,238,0.3)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(34,211,238,0.08)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.15)';
                      (e.currentTarget as HTMLElement).style.color = '#22d3ee';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#475569' }}>
                      {item.label}
                    </p>
                    <p className="font-medium transition-colors duration-200" style={{ color: '#e2e8f0' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#22d3ee'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#e2e8f0'}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-10 rounded-3xl"
            style={{
              background: 'rgba(7,18,32,0.8)',
              border: '1px solid rgba(34,211,238,0.1)',
            }}
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-2"
                  style={{ background: 'rgba(52,211,153,0.1)', color: '#34d399', border: '1px solid rgba(52,211,153,0.3)' }}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#e2e8f0' }}>Message Sent! 🎉</h3>
                <p style={{ color: '#8ba3bf' }}>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold transition-colors"
                  style={{ color: '#22d3ee' }}
                >
                  Send another message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="form-input"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="form-input"
                    style={{ resize: 'none' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary justify-center py-4 rounded-xl"
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
