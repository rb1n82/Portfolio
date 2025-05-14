import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const form = e.currentTarget;
      
      await emailjs.sendForm(
        'service_qg9xhri', // EmailJS Service ID
        'template_19xu0ah', // EmailJS Template ID
        form,
        'QXa2sRf3wtSypnFD5' // EmailJS Public Key
      );

      toast({
        title: "Nachricht gesendet!",
        description: "Vielen Dank für deine Nachricht. Ich werde mich so bald wie möglich bei dir melden.",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      toast({
        title: "Fehler beim Senden",
        description: "Entschuldigung, es gab einen Fehler beim Senden deiner Nachricht. Bitte versuche es später erneut.",
        duration: 5000,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Kontakt</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hast du Fragen oder möchtest du mit mir an einem Projekt arbeiten? Ich freue mich darauf, von dir zu hören!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-primary/5 to-blue-50 dark:from-primary/10 dark:to-blue-950/30 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Kontaktinformationen</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">E-Mail</p>
                  <a 
                    href="mailto:robin-strobel@t-online.de" 
                    className="text-primary hover:underline"
                  >
                    robin-strobel@t-online.de
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Telefon</p>
                  <a 
                    href="tel:+4915750622369" 
                    className="text-primary hover:underline"
                  >
                    +49 (157) 50622369
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Standort</p>
                  <p className="text-gray-600 dark:text-gray-400">Reken, Nordrhein-Westfalen, Deutschland</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Dein Name" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium">
                    E-Mail
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="deine@email.de" 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-medium">
                  Betreff
                </label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Worum geht es?" 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium">
                  Nachricht
                </label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Deine Nachricht..." 
                  rows={5} 
                  required 
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
                {isLoading ? "Wird gesendet..." : "Nachricht senden"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;