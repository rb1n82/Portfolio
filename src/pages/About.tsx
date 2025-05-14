import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Code, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Über mich</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Frontend-Entwickler mit einer Leidenschaft für benutzerfreundliches Design und sauberen Code.
              </p>
            </div>
          </div>
        </section>
        
        {/* Bio Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-xl transform rotate-3"></div>
                  <div className="relative bg-white p-5 border border-gray-100 rounded-xl shadow-sm">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                        <span className="text-gray-500 font-medium">Profilbild</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Meine Geschichte</h2>
                
                <div className="space-y-6 text-gray-600">
                  <p>
                    Ich bin ein Frontend-Entwickler mit 3+ Jahren Erfahrung in der Erstellung von modernen, benutzerfreundlichen Webapplikationen. Meine Reise begann mit der Faszination für das Web und dessen Potenzial, Informationen und Erfahrungen zugänglich zu machen.
                  </p>
                  
                  <p>
                    Nach meinem Studium der Informatik an der Technischen Universität Berlin habe ich mich auf Frontend-Entwicklung spezialisiert. Seitdem hatte ich das Glück, mit verschiedenen Teams an diversen Projekten zu arbeiten – von kleinen Business-Websites bis hin zu komplexen Web-Applikationen.
                  </p>
                  
                  <p>
                    Was mich an der Frontend-Entwicklung begeistert, ist die perfekte Balance zwischen technischen Herausforderungen und kreativer Gestaltung. Ich liebe es, Benutzeroberflächen zu erschaffen, die nicht nur gut aussehen, sondern auch intuitiv zu bedienen sind.
                  </p>
                </div>
                
                <div className="mt-8">
                  <Button asChild>
                    <Link to="/contact">Lass uns zusammenarbeiten</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Experience & Education */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Erfahrung & Ausbildung</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Experience */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="mr-2 text-primary" />
                  Berufserfahrung
                </h3>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-primary font-medium mb-1">2022 - Heute</div>
                    <h4 className="text-xl font-bold mb-2">Senior Frontend-Entwickler</h4>
                    <div className="text-gray-500 mb-4">TechVision GmbH, Berlin</div>
                    <p className="text-gray-600">
                      Entwicklung und Wartung von komplexen Web-Applikationen unter Verwendung von React, TypeScript und moderner Frontend-Architektur.
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-primary font-medium mb-1">2020 - 2022</div>
                    <h4 className="text-xl font-bold mb-2">Frontend-Entwickler</h4>
                    <div className="text-gray-500 mb-4">WebSolutions AG, München</div>
                    <p className="text-gray-600">
                      Umsetzung von responsiven Websites und Benutzeroberflächen für verschiedene Kunden aus dem E-Commerce- und Finanzsektor.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <BookOpen className="mr-2 text-primary" />
                  Ausbildung
                </h3>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-primary font-medium mb-1">2016 - 2020</div>
                    <h4 className="text-xl font-bold mb-2">M.Sc. Informatik</h4>
                    <div className="text-gray-500 mb-4">Technische Universität Berlin</div>
                    <p className="text-gray-600">
                      Spezialisierung in Human-Computer Interaction und Web Technologies. Masterarbeit zum Thema "Optimierung von Benutzererfahrungen in Single-Page-Applications".
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-sm text-primary font-medium mb-1">2013 - 2016</div>
                    <h4 className="text-xl font-bold mb-2">B.Sc. Informatik</h4>
                    <div className="text-gray-500 mb-4">Universität Hamburg</div>
                    <p className="text-gray-600">
                      Grundlagende Ausbildung in Informatik mit Schwerpunkt auf Softwareentwicklung und Datenstrukturen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Meine Fähigkeiten</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Frontend-Entwicklung</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>React / Next.js</li>
                  <li>TypeScript / JavaScript</li>
                  <li>HTML5 / CSS3</li>
                  <li>Tailwind CSS / Styled Components</li>
                  <li>Redux / Context API</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Design & UX</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Responsive Design</li>
                  <li>UI/UX Prinzipien</li>
                  <li>Figma / Adobe XD</li>
                  <li>Barrierefreiheit (WCAG)</li>
                  <li>Design Systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Tools & Methods</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Git / GitHub</li>
                  <li>Agile / Scrum</li>
                  <li>Jest / React Testing Library</li>
                  <li>Webpack / Vite</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;