
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "TailwindCSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", ".NET Core", "RESTful APIs", "PostgreSQL"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Linux", "Docker", "Git", "GitHub Actions", "AWS", "Kubernetes", "CI/CD"]
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "C#", "TypeScript", "Bash", "Python"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-title">Tech <span>Stack</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl hover:border-primary/30 transition-all group"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <span 
                    key={j}
                    className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-dark-lighter border border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-primary hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
