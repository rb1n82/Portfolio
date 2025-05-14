import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
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
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-100/30 to-transparent dark:from-blue-900/20 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-primary rounded-full font-medium text-sm">
              Mathematik Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span>Hallo, ich bin </span>
              <span className="text-gradient">Robin Strobel</span>
            </h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-lg">
              Mathematiker (B.Sc.) mit Leidenschaft für numerische Methoden, statistische Analyse und algorithmisches Problemlösen.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
              >
                Meine Projekte
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Kontakt aufnehmen
              </Button>
            </div>
          </div>

          <div className="hidden md:block animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 dark:from-blue-700 dark:to-blue-500 rounded-xl blur-2xl opacity-20 transform rotate-12"></div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl relative">
                <div className="w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src="../Robin_NorthSea.jpeg"
                    alt="Robin Strobel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 w-24 h-24 bg-blue-100 dark:bg-blue-800 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-4xl">🧮</div>
              </div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4 w-24 h-24 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-4xl">📊</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;