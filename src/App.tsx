
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Education from './components/Education';
import Contact from './components/Contact';
import { useEffect } from 'react';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#040d17' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
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
