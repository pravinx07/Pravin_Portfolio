import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaGithub, FaAws } from 'react-icons/fa';
import { SiDotnet, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const techIcons = [
  { icon: SiDotnet, name: '.NET' },
  { icon: FaReact, name: 'React' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: VscAzure, name: 'Azure' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaDocker, name: 'Docker' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: FaAws, name: 'AWS' },
  { icon: FaGithub, name: 'GitHub' },
];

const duplicatedIcons = [...techIcons, ...techIcons, ...techIcons];

const TechMarquee = () => {
  return (
    <div className="py-6 overflow-hidden relative border-y" style={{ background: '#040d17', borderTopColor: 'rgba(34,211,238,0.1)', borderBottomColor: 'rgba(34,211,238,0.1)' }}>
      <div className="absolute inset-y-0 left-0 w-24 z-10" style={{ background: 'linear-gradient(to right, #040d17, transparent)' }}></div>
      <div className="absolute inset-y-0 right-0 w-24 z-10" style={{ background: 'linear-gradient(to left, #040d17, transparent)' }}></div>
      
      <motion.div
        className="flex items-center gap-16 w-max"
        animate={{
          x: ['0%', '-33.333333%'],
        }}
        transition={{
          ease: 'linear',
          duration: 30,
          repeat: Infinity,
        }}
      >
        {duplicatedIcons.map((tech, index) => (
          <div key={index} className="flex items-center gap-3 text-[#8ba3bf] hover:text-[#22d3ee] transition-colors duration-300">
            <tech.icon size={28} />
            <span className="font-semibold text-lg">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
