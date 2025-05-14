import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ChevronLeft, Play } from 'lucide-react';
import { getProjectById } from '@/data/projects';
import ThesisDemo from '@/components/thesis-demo/ThesisDemo';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = id ? getProjectById(id) : undefined;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check if URL contains #demo hash
    if (window.location.hash === '#demo' && project?.hasDemo) {
      setTimeout(() => {
        const demoSection = document.getElementById('project-demo');
        if (demoSection) {
          demoSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [project]);
  
  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-16">
          <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">Projekt nicht gefunden</h1>
            <p className="text-gray-600 mb-6 dark:text-gray-400">
              Das gesuchte Projekt konnte nicht gefunden werden.
            </p>
            <Button asChild>
              <Link to="/projects">Zurück zu Projekten</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button 
              variant="ghost" 
              className="mb-8"
              onClick={() => navigate(-1)}
            >
              <ChevronLeft className="mr-2" size={18} />
              Zurück
            </Button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                  {project.hasDemo && (
                    <div
                      onClick={() => {
                        const demoSection = document.getElementById('project-demo');
                        if (demoSection) {
                          demoSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 hover:bg-primary/80 transition-colors cursor-pointer"
                    >
                      <Play size={12} />
                      <span>Demo</span>
                    </div>
                  )}
                </div>
                
                <p 
                  className="text-lg text-gray-600 dark:text-gray-400 mb-8"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                
                <div className="flex flex-wrap gap-4">
                  {project.hasWebsite && project.demoUrl && (
                    <Button asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        Website
                        <ExternalLink className="ml-2" size={16} />
                      </a>
                    </Button>
                  )}
                  
                  {project.hasGithub && project.githubUrl && (
                    <Button asChild variant="outline">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        GitHub Repository
                        <Github className="ml-2" size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              <div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-400 rounded-xl blur-2xl opacity-20 transform rotate-12"></div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl relative overflow-hidden">
                    {project.image ? (
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full rounded-lg"
                      />
                    ) : (
                      <div className="w-full aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400 dark:text-gray-500">Projektbild</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Details */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Projektdetails</h2>
              
              <div className="prose dark:prose-invert max-w-none space-y-8">
                <div>
                  <p>{project.details.overview}</p>
                </div>
                
                <div>
                  <p>{project.details.challenges}</p>
                </div>
                
                <div>
                  <p>{project.details.solution}</p>
                </div>
                
                <div className="not-prose">
                  <h3 className="text-xl font-semibold mb-4">Verwendete Technologien</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.details.technologies.map((tech, index) => (
                      <div 
                        key={index}
                        className="flex items-center p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
                      >
                        <Badge variant="outline" className="mr-2">
                          {(index + 1).toString().padStart(2, '0')}
                        </Badge>
                        <span className="text-gray-800 dark:text-gray-200">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {project.details.additionalInfo && (
                  <div>
                    <h3>Weitere Informationen</h3>
                    <p>{project.details.additionalInfo}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Demo - Conditional rendering */}
        {project.hasDemo && (
          <section id="project-demo" className="py-20 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Projekt Demo</h2>
              
              {id === "bachelorarbeit" ? (
                <ThesisDemo />
              ) : (
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-gray-400 dark:text-gray-500">
                    <p className="font-medium mb-2">Demo Platzhalter</p>
                    <p className="text-sm">Hier würde die Live-Demo des Projekts angezeigt.</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetail;