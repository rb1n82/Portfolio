import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Kontakt</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hast du Fragen oder möchtest du mit mir an einem Projekt arbeiten? Ich freue mich darauf, von dir zu hören!
              </p>
            </div>
          </div>
        </section>
        
        <ContactSection />
        
        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Standort</h2>
            
            <div className="aspect-[16/9] bg-gray-200 rounded-xl">
              {/* Hier könnte eine echte Karte eingebunden werden */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-gray-500">Kartenplatzhalter</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;