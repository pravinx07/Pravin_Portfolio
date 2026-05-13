
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
    <div className="min-h-screen">
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
      <footer className="py-12 border-t border-white/5 text-center text-slate-500">
        <div className="container">
          <p>© {new Date().getFullYear()} Pravin Shegamwar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
