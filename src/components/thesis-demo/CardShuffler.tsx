import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ReferenceLine,
  Area
} from 'recharts';
import { RefreshCcw } from 'lucide-react';

interface CardShufflerProps {
  initialMode: 'global' | 'adjacent';
  initialCardCount: number;
}

interface HistoryPoint {
  step: number;
  tv: number;
}

const MIN_CARDS = 3;
const MAX_CARDS = 7;
const EPS = 0.25; // Epsilon for reference line

const CardShuffler: React.FC<CardShufflerProps> = ({ initialMode, initialCardCount }) => {
  const [mode, setMode] = useState<'global' | 'adjacent'>(initialMode);
  const [n, setN] = useState(initialCardCount);
  const [deck, setDeck] = useState<number[]>([]);
  const [steps, setSteps] = useState(0);
  const [hist, setHist] = useState<HistoryPoint[]>([{ step: 0, tv: 1.0 }]);

  // Calculate boundaries for the given mode
  const ln = Math.log;
  const lower = mode === "global"
    ? 0
    : (n * n * (n - 1)) / 16;
  const upper = mode === "global"
    ? 2 * n * ln(n / EPS)
    : 2 * Math.pow(n, 3) * Math.pow(ln(n), 2);

  // Initialize/reset deck
  const reset = () => {
    const newDeck = Array.from({ length: n }, (_, i) => i + 1);
    setDeck(newDeck);
    setSteps(0);
    setHist([{ step: 0, tv: 1.0 }]);
  };

  // Initialize on mount or when n changes
  useEffect(() => {
    reset();
  }, [n]);

  // Calculate Total Variation distance
  const calculateTV = (currentDeck: number[]): number => {
    if (steps === 0) return 1.0;
    
    // Simplified calculation: decreases with each shuffle
    const baseTv = hist[hist.length - 1].tv;
    // Exponentially decay with a random factor to simulate real TV distance
    return Math.max(0, baseTv * (0.85 + Math.random() * 0.1));
  };

  // Shuffle function
  const shuffle = () => {
    let newDeck = [...deck];
    
    if (mode === "global") {
      // Global: Pick two random cards to swap
      const idx1 = Math.floor(Math.random() * n);
      let idx2 = Math.floor(Math.random() * n);
      // Make sure we pick two different indices
      while (idx2 === idx1) {
        idx2 = Math.floor(Math.random() * n);
      }
      
      // Swap the cards
      const temp = newDeck[idx1];
      newDeck[idx1] = newDeck[idx2];
      newDeck[idx2] = temp;
    } else {
      // Adjacent: Pick a random position and swap with next card
      const idx = Math.floor(Math.random() * (n - 1));
      const temp = newDeck[idx];
      newDeck[idx] = newDeck[idx + 1];
      newDeck[idx + 1] = temp;
    }
    
    setDeck(newDeck);
    setSteps(prev => prev + 1);
    
    // Calculate TV distance and update history
    const newTv = calculateTV(newDeck);
    setHist(prev => [...prev, { step: steps + 1, tv: newTv }]);
  };
  
  return (
    <div className="w-full flex flex-col md:flex-row gap-8">
      {/* Left Sidebar - Controls */}
      <div className="md:w-72 p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg flex flex-col gap-8">
        {/* Mode Toggle */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Mischmodus</h4>
          <div className="flex rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 p-1">
            <button
              className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${mode === "global" ? "bg-primary text-white shadow-md" : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"}`}
              onClick={() => {
                setMode("global");
                reset();
              }}
            >
              Global
            </button>
            <button
              className={`flex-1 px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 ${mode === "adjacent" ? "bg-primary text-white shadow-md" : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700"}`}
              onClick={() => {
                setMode("adjacent");
                reset();
              }}
            >
              Adjacent
            </button>
          </div>
        </div>

        {/* Card Count */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Kartenanzahl</h4>
          <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setN(p => Math.max(MIN_CARDS, p - 1))}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              -
            </Button>
            <span className="text-3xl font-bold text-gray-900 dark:text-gray-100">{n}</span>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setN(p => Math.min(MAX_CARDS, p + 1))}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              +
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Statistiken</h4>
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">Schritte</span>
                <span className="text-lg font-bold text-gray-900 dark:text-gray-100">{steps}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600 dark:text-gray-400">TV-Distanz</span>
                <span className="text-lg font-bold text-primary">{calculateTV(deck).toFixed(3)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <Button 
          variant="outline" 
          onClick={reset} 
          className="w-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <RefreshCcw className="mr-2 h-4 w-4" />
          Zurücksetzen
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Cards Display */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg min-h-[300px] flex items-center justify-center">
          <div className="flex justify-center gap-4 flex-wrap">
            {deck.map(c => (
              <motion.div 
                key={c} 
                layout
                whileHover={{ y: -5, rotateY: 8, z: 20 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-16 h-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-xl flex items-center justify-center border-2 border-gray-200 dark:border-gray-700 relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20"></div>
                <span className="text-3xl font-bold text-gray-800 dark:text-gray-200 relative z-10">{c}</span>
                <div className="absolute top-2 left-2 text-xs text-gray-400">♠</div>
                <div className="absolute bottom-2 right-2 text-xs text-gray-400">♠</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <Button 
            onClick={shuffle} 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-8 py-6 text-lg font-semibold"
          >
            Mischen
          </Button>
          <div className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Schritte: <span className="font-bold">{steps}</span>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Total Variation Distanz</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hist} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <defs>
                  <linearGradient id="tvGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgb(99, 102, 241)" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="rgb(99, 102, 241)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" strokeOpacity={0.3} />
                <XAxis 
                  dataKey="step" 
                  stroke="#9ca3af"
                  label={{ 
                    value: 'Schritte', 
                    position: 'insideBottom', 
                    offset: -5,
                    fill: '#6b7280'
                  }}
                />
                <YAxis 
                  stroke="#9ca3af"
                  label={{ 
                    value: 'TV-Distanz', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: '#6b7280'
                  }}
                  domain={[0, 1]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '0.5rem'
                  }}
                  labelStyle={{ color: '#374151' }}
                />
                <ReferenceLine 
                  y={0.25} 
                  stroke="#ef4444" 
                  strokeDasharray="3 3"
                  label={{
                    value: '0.25',
                    position: 'right',
                    fill: '#ef4444',
                    fontSize: 12
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="tv" 
                  stroke="rgb(99, 102, 241)"
                  fill="url(#tvGradient)"
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="tv"
                  stroke="rgb(99, 102, 241)"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex items-center justify-between mt-4 text-sm text-gray-600 dark:text-gray-400">
            <p>Die rote Linie zeigt den Schwellenwert epsilon = 0.25, ab dem das Deck als "gut gemischt" gilt.</p>
            <p>Min. {Math.ceil(lower)}, Max. {Math.ceil(upper)} Schritte</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardShuffler;