
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-dark min-h-screen text-slate-50">
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
          <p className="mt-2 text-sm">Built with React, Tailwind CSS & Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
