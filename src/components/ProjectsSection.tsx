import React from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  // Zeigt nur die ersten 3 Projekte an
  const featuredProjects = projects.slice(0, 3);
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Meine Projekte</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Eine Auswahl meiner mathematischen Arbeiten. Jedes Projekt demonstriert analytische Fähigkeiten und algorithmisches Denken.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" onClick={() => window.scrollTo(0, 0)}>
            <Link to="/projects">Alle Projekte ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;