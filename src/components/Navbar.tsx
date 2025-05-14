import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/providers/ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    // If we're on the home page, scroll to the section
    if (isHomePage) {
      if (sectionId === 'top') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // Account for fixed navbar height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If we're on another page, navigate to home page with section hash
      window.location.href = sectionId === 'top' ? '/' : `/#${sectionId}`;
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection('top')}
              className="font-bold text-xl text-primary"
            >
              Robin Strobel
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('top')}
              className="font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-medium hover:text-primary transition-colors"
            >
              Über mich
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="font-medium hover:text-primary transition-colors"
            >
              Projekte
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-medium hover:text-primary transition-colors"
            >
              Kontakt
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Theme toggle"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Theme toggle"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-card shadow-lg">
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => scrollToSection('top')}
            >
              Home
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => scrollToSection('about')}
            >
              Über mich
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => scrollToSection('projects')}
            >
              Projekte
            </button>
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-primary transition-colors"
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;