import React from 'react';
import { Check } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    "Mathematische Modellierung",
    "Stochastik & Statistik",
    "Numerische Methoden",
    "Datenanalyse",
    "Python & NumPy",
    "MATLAB",
    "Algorithmenentwicklung",
    "Differentialgleichungen"
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Über mich</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ein kurzer Einblick in meinen Hintergrund, meine mathematischen Fähigkeiten und meine Leidenschaft für analytisches Denken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-xl transform rotate-3"></div>
              <div className="relative bg-white dark:bg-gray-700 p-5 border border-gray-100 dark:border-gray-600 rounded-xl shadow-sm">
                <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-600 rounded-lg overflow-hidden">
                  <img
                    src="/Robin_in_Bar.jpeg"
                    alt="Robin Strobel"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              Mathematiker (B.Sc.) mit <span className="text-primary">fundierten</span> analytischen Fähigkeiten
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Meine Reise in der Mathematik begann mit meiner Faszination für Problemlösung und logisches Denken. Als Mathematikstudent an der Universität Münster mit Nebenfach Informatik konnte ich meine analytischen Fähigkeiten kontinuierlich weiterentwickeln.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Als Tutor für Stochastik helfe ich Studierenden, komplexe Wahrscheinlichkeitskonzepte zu verstehen. Meine Stärken liegen in der mathematischen Modellierung, Datenanalyse und dem Entwickeln algorithmischer Lösungen für komplexe Probleme.
            </p>

            <div>
              <h4 className="font-semibold text-lg mb-3">Meine Fähigkeiten:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="mr-2 text-primary">
                      <Check size={16} />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;