import React, { useState } from 'react';
import SetupWizard from './SetupWizard';
import CardShuffler from './CardShuffler';

const ThesisDemo = () => {
  const [step, setStep] = useState<'setup' | 'demo'>('setup');
  const [mode, setMode] = useState<'global' | 'adjacent'>('global');
  const [cardCount, setCardCount] = useState(5);

  const startDemo = (selectedMode: 'global' | 'adjacent', selectedCardCount: number) => {
    setMode(selectedMode);
    setCardCount(selectedCardCount);
    setStep('demo');
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-6xl">
        {step === 'setup' ? (
          <SetupWizard onComplete={startDemo} />
        ) : (
          <CardShuffler initialMode={mode} initialCardCount={cardCount} />
        )}
      </div>
    </div>
  );
};

export default ThesisDemo;