import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface SetupWizardProps {
  onComplete: (mode: 'global' | 'adjacent', cardCount: number) => void;
}

const SetupWizard: React.FC<SetupWizardProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<'global' | 'adjacent'>('global');
  const [cardCount, setCardCount] = useState(5);

  const nextStep = () => setStep(prev => prev + 1);

  const handleComplete = () => {
    onComplete(mode, cardCount);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] p-8">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div 
            key="step0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center max-w-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Welche Mischart möchtest du verwenden?</h3>
            <div className="flex gap-4">
              <Button 
                variant={mode === 'global' ? 'default' : 'outline'} 
                size="lg"
                onClick={() => {
                  setMode('global');
                  setTimeout(nextStep, 300);
                }}
                className="min-w-[120px]"
              >
                Global
              </Button>
              <Button 
                variant={mode === 'adjacent' ? 'default' : 'outline'} 
                size="lg"
                onClick={() => {
                  setMode('adjacent');
                  setTimeout(nextStep, 300);
                }}
                className="min-w-[120px]"
              >
                Adjacent
              </Button>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center max-w-lg"
          >
            <h3 className="text-2xl font-bold mb-8">Mit wie vielen Karten möchtest du spielen?</h3>
            <div className="flex items-center gap-6 mb-8">
              <Button 
                variant="outline" 
                onClick={() => setCardCount(prev => Math.max(3, prev - 1))}
                size="icon"
              >
                -
              </Button>
              <span className="text-3xl font-bold w-16 text-center">{cardCount}</span>
              <Button 
                variant="outline" 
                onClick={() => setCardCount(prev => Math.min(7, prev + 1))}
                size="icon"
              >
                +
              </Button>
            </div>
            <Button onClick={nextStep} size="lg">Weiter</Button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center text-center max-w-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Total Variation Distanz</h3>
            <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
              Die Total Variation Distanz ist ein Maß für den Unterschied zwischen zwei Wahrscheinlichkeitsverteilungen.
              In diesem Fall messen wir, wie weit die aktuelle Verteilung der Karten von einer vollständig zufälligen
              Verteilung entfernt ist. Je näher der Wert an 0 liegt, desto besser ist die Mischung.
            </p>
            <Button onClick={handleComplete} size="lg">Legen wir los!</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SetupWizard;