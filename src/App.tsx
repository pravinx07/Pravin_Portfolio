import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import GithubActivity from './components/GithubActivity';
import TechMarquee from './components/TechMarquee';

function App() {
  return (
    <div className="min-h-screen bg-[#040d17] text-[#e2e8f0] font-sans selection:bg-[#22d3ee] selection:text-[#040d17]">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <GithubActivity />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer className="py-10 text-center" style={{ borderTop: '1px solid rgba(34,211,238,0.08)', background: '#040d17' }}>
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm" style={{ color: '#475569' }}>
            Designed & Built by{' '}
            <span style={{ color: '#22d3ee', fontWeight: 600 }}>Pravin Shegamwar</span>
            {' '}· © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
