import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  hasDemo: boolean;
  hasWebsite: boolean;
  hasGithub: boolean;
  details: {
    overview: string;
    challenges: string;
    solution: string;
    technologies: string[];
    additionalInfo?: string;
  };
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.id}`} className="block">
      <Card className="overflow-hidden hover-card relative">
        <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700">
              <span className="text-gray-400 dark:text-gray-500">Projektbild</span>
            </div>
          )}
          
          {project.hasDemo && (
            <Link 
              to={`/projects/${project.id}#demo`} 
              className="absolute top-3 right-3 bg-primary text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 hover:bg-primary/80 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Play size={12} />
              <span>Demo</span>
            </Link>
          )}
        </div>
      
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardHeader>
      
        <CardContent>
          <p 
            className="text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: project.description }}
          />
        </CardContent>
      
        <CardFooter className="justify-end">
          <div className="flex gap-2">
            {project.hasGithub && project.githubUrl && (
              <Button asChild variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                  <Github size={18} />
                </a>
              </Button>
            )}
            {project.hasWebsite && project.demoUrl && (
              <Button asChild variant="ghost" size="icon" onClick={(e) => e.stopPropagation()}>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                  <ExternalLink size={18} />
                </a>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;