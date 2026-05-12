
import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png';

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img src={aboutImg} alt="About Me" className="w-full h-full object-cover" />
          </div>
          {/* Decorative Background */}
          <div className="absolute -bottom-8 -right-8 w-full h-full border-2 border-primary/30 rounded-2xl -z-0"></div>
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-0"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
            <p>
              I'm a passionate Full Stack Developer who loves building real-world products that solve problems and create impact. 
              I enjoy working with modern technologies and delivering clean, efficient, and scalable solutions.
            </p>
            <p>
              With a strong foundation in both frontend and backend development, I specialize in creating seamless user experiences 
              backed by robust server-side logic. My journey in tech is driven by a constant desire to learn and innovate.
            </p>
            <p>
              Currently, I am honing my skills as an Associate Software Engineer Intern at Willovate Pvt Ltd, where I contribute 
               to diverse projects involving .NET, React, and cloud infrastructure.
            </p>
          </div>
          
          <div className="mt-10">
            <button className="btn btn-primary">Read More</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
