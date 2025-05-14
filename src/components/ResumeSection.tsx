import React from 'react';
import { Briefcase, FileText } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ResumeSection as ResumeSectionType, ResumeEntry } from '@/data/resume';

interface ResumeSectionProps {
  section: ResumeSectionType;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ section }) => {
  const getIcon = () => {
    if (section.title.toLowerCase().includes('ausbildung')) {
      return <FileText className="mr-2 text-primary" />;
    }
    return <Briefcase className="mr-2 text-primary" />;
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold flex items-center">
          {getIcon()}
          {section.title}
        </h3>
        <div className="h-px flex-grow bg-gray-200 dark:bg-gray-700 mx-4"></div>
      </div>
      
      <div className="space-y-6">
        <Accordion type="single" collapsible className="space-y-4">
          {section.entries.map((entry) => (
            <AccordionItem 
              key={entry.id} 
              value={entry.id} 
              className="border-none bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline">
                <div className="text-left">
                  <div className="text-sm text-primary font-medium mb-1">{entry.period}</div>
                  <h4 className="text-xl font-bold">{entry.title}</h4>
                  <div className="text-gray-500 dark:text-gray-400">{entry.organization}</div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 border-t border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400">
                <ul className="list-disc list-outside pl-5 space-y-1 pt-2">
                  {entry.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default ResumeSection;