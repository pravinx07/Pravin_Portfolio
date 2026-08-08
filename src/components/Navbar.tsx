import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[1000] transition-all duration-300"
      style={scrolled ? {
        padding: '14px 0',
        background: 'rgba(4, 13, 23, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(34, 211, 238, 0.08)',
      } : { padding: '22px 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-heading font-black" style={{ color: '#e2e8f0' }}>
          Pravin<span style={{ color: '#22d3ee' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium transition-colors relative group"
              style={{ color: '#8ba3bf' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#22d3ee'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8ba3bf'}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ background: '#22d3ee' }} />
            </a>
          ))}
          <a href="#contact" className="btn btn-primary py-2 px-5 text-sm">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            className="transition-colors"
            style={{ color: '#e2e8f0' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-screen flex flex-col justify-center items-center gap-8 transition-transform duration-500 ease-in-out md:hidden z-[1001]`}
        style={{
          background: '#071220',
          borderLeft: '1px solid rgba(34,211,238,0.1)',
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <button
          className="absolute top-6 right-6"
          style={{ color: '#e2e8f0' }}
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xl font-medium transition-colors"
            style={{ color: '#8ba3bf' }}
            onClick={() => setIsOpen(false)}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#22d3ee'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#8ba3bf'}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[1000] md:hidden"
          style={{ background: 'rgba(4,13,23,0.7)', backdropFilter: 'blur(4px)' }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
