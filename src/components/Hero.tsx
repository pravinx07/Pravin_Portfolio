import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/pravin.jpg';
import resumePdf from '../assets/Pravin_Shegamwar_Resume.pdf';
import { motion } from "framer-motion";
import ParticleBackground from './ParticleBackground';
import posthog from 'posthog-js';

const Hero = () => {
  const handleDownloadResume = () => {
    posthog.capture('resume_downloaded', { location: 'Hero Section' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-20 lg:pb-0 scroll-mt-20" style={{ background: '#040d17' }}>
      <ParticleBackground />
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ background: '#22d3ee' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-15 pointer-events-none" style={{ background: '#818cf8' }} />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-16 w-full relative z-10">
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left mt-8 lg:mt-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: 'rgba(34,211,238,0.08)', border: '1px solid rgba(34,211,238,0.2)', color: '#22d3ee' }}>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h4 className="text-xl md:text-2xl font-medium mb-3" style={{ color: '#94a3b8' }}>
            Hi, I'm{' '}
            <span className="font-bold" style={{ color: '#22d3ee' }}>Pravin Shegamwar</span>
          </h4>

          <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight" style={{ color: '#e2e8f0' }}>
            Full Stack <br />
            <span className="gradient-text">Developer</span>
          </h1>

          <p className="text-lg max-w-xl mb-10 leading-relaxed" style={{ color: '#8ba3bf' }}>
            I build scalable web applications with modern technologies and DevOps practices.
            Currently interning at <span style={{ color: '#22d3ee', fontWeight: 600 }}>Willovate Pvt Ltd</span>, specializing in .NET, React, and PostgreSQL.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
            <a href={resumePdf} download="Pravin_Shegamwar_Resume.pdf" onClick={handleDownloadResume} className="btn btn-primary w-full sm:w-auto justify-center relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2"><Download size={20} /> Download Resume</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
            <a href="#contact" className="btn btn-outline w-full sm:w-auto justify-center relative overflow-hidden group">
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-[#22d3ee]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com/pravinX07', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pravins07/', label: 'LinkedIn' },
              { icon: FaTwitter, href: 'https://x.com/Pravin07x', label: 'Twitter' },
              { icon: Mail, href: 'mailto:shegamwarp@gmail.com', label: 'Email' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  color: '#64748b'
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(34,211,238,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.4)';
                  (e.currentTarget as HTMLElement).style.color = '#22d3ee';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.color = '#64748b';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="order-1 lg:order-2 flex justify-center mt-10 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[400px] md:h-[400px] animate-float">
            {/* Glow rings */}
            <div className="absolute -inset-4 rounded-full opacity-30 animate-pulse-slow" style={{ background: 'conic-gradient(from 0deg, #22d3ee, #818cf8, #22d3ee)', filter: 'blur(20px)' }} />
            <div className="absolute -inset-2 rounded-[2.5rem] opacity-20" style={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)', filter: 'blur(10px)' }} />

            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden z-10"
              style={{ border: '1px solid rgba(34,211,238,0.3)', boxShadow: '0 0 40px rgba(34,211,238,0.15)' }}>
              <img
                src={profileImg}
                alt="Pravin Shegamwar"
                className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full flex justify-center p-1.5" style={{ border: '1px solid rgba(34,211,238,0.3)' }}>
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: '#22d3ee' }}
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
