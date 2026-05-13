import { Mail, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/pravin.jpg';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20 scroll-mt-20 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] items-center gap-16 w-full">
        <motion.div 
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl md:text-2xl font-medium mb-4 text-slate-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">Pravin Shegamwar</span>
          </h4>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight text-white">
            Full Stack <br /> Developer
          </h1>
          <p className="text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
            I build scalable web applications with modern technologies and DevOps practices. 
            Currently interning at Willovate Pvt Ltd, specializing in .NET, React, and PostgreSQL.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="/resume.pdf" className="btn btn-primary">
              <Download size={20} /> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>

          <div className="flex gap-4">
            {[
              { icon: FaGithub, href: 'https://github.com/pravinX07' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/pravins07/' },
              { icon: FaTwitter, href: 'https://x.com/Pravin07x' },
              { icon: Mail, href: 'mailto:shegamwarp@gmail.com' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-full flex items-center justify-center bg-dark-surface border border-white/5 text-slate-400 hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-xl"
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="order-1 lg:order-2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
            {/* Animated Blob Background */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-[2.5rem] blur-3xl animate-blob"></div>
            
            <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl z-10">
              <img 
                src={profileImg} 
                alt="Pravin Shegamwar" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
