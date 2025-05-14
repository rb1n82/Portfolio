import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mathematische Einblicke</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Entdecken Sie meine Artikel und Gedanken zu verschiedenen mathematischen Themen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Artikel 1 */}
          <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl">📊</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-primary text-sm font-medium mb-2">Numerische Methoden</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Einführung in die Monte-Carlo-Methode
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Eine Erklärung der Monte-Carlo-Methode und ihrer Anwendungen in der Wahrscheinlichkeitsrechnung.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">12 Min. Lesezeit</span>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Artikel 2 */}
          <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl">🎲</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-primary text-sm font-medium mb-2">Stochastik</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Markov-Ketten und Kartenmischen
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Wie Markov-Ketten uns helfen können, die Effizienz verschiedener Mischverfahren zu analysieren.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">15 Min. Lesezeit</span>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Artikel 3 */}
          <div className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-red-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-4xl">📈</div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-primary text-sm font-medium mb-2">Algorithmen</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                Optimierungsverfahren in der Praxis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Ein Vergleich verschiedener Optimierungsalgorithmen und ihre praktischen Anwendungen.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">10 Min. Lesezeit</span>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Weiterlesen <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Alle Artikel ansehen <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 