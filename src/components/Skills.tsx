import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    color: '#22d3ee',
    skills: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "TailwindCSS"]
  },
  {
    title: "Backend",
    icon: "⚙️",
    color: '#818cf8',
    skills: ["Node.js", "Express.js", ".NET Core", "RESTful APIs", "PostgreSQL"]
  },
  {
    title: "DevOps & Tools",
    icon: "🛠️",
    color: '#34d399',
    skills: ["Linux", "Docker", "Git", "GitHub Actions", "AWS", "Kubernetes", "CI/CD"]
  },
  {
    title: "Languages",
    icon: "💻",
    color: '#f59e0b',
    skills: ["JavaScript", "Java", "C#", "TypeScript", "Bash", "Python"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 scroll-mt-20 bg-section-alt">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#22d3ee' }}>
          — What I Work With
        </p>
        <h2 className="section-title">Tech <span>Stack</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl group transition-all duration-300"
              style={{
                background: 'rgba(7,18,32,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${cat.color}0d`;
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}30` }}>
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold mb-5" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <span
                    key={j}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.07)',
                      color: '#94a3b8',
                      cursor: 'default'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.background = `${cat.color}12`;
                      (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`;
                      (e.currentTarget as HTMLElement).style.color = cat.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                      (e.currentTarget as HTMLElement).style.color = '#94a3b8';
                    }}
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
