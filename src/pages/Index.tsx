import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SkillsSection from '@/components/SkillsSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Pi, Sigma, Variable, Infinity, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ResumeSection from '@/components/ResumeSection';
import { resumeData } from '@/data/resume';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash) {
      // Remove the '#' from the hash
      const sectionId = window.location.hash.slice(1);
      
      // Find the element
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          const headerOffset = 80; // Account for fixed navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="py-12 bg-blue-50 dark:bg-blue-950/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-center mb-3">
                  <Pi className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">Mathematische Modellierung</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-center mb-3">
                  <Sigma className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">Statistische Analyse</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-center mb-3">
                  <Variable className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">Algorithmisches Denken</h3>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <div className="flex justify-center mb-3">
                  <Infinity className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">Numerische Methoden</h3>
              </div>
            </div>
          </div>
        </div>
        
        <section id="about">
          <AboutSection />
          
          {/* CV/Lebenslauf Section */}
          <div className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Mein Lebenslauf</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {resumeData.map((section) => (
                  <ResumeSection key={section.id} section={section} />
                ))}
              </div>
              
              {/* Download CV Button */}
              <div className="mt-12 text-center">
                <Button variant="outline" size="lg">
                  <FileText className="mr-2 h-4 w-4" />
                  Lebenslauf als PDF herunterladen
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <SkillsSection />
        
        <ProjectsSection />
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;