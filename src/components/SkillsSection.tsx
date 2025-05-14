import { Badge } from '@/components/ui/badge';
import { skills } from '@/data/skills';
import { cn } from '@/lib/utils';

/*********************************
 * High 5 Test – Strengths & colors
 *********************************/
export const strengths = [
  { id: 1, name: 'Analyst', color: 'bg-primary' },
  { id: 2, name: 'Strategist', color: 'bg-primary' },
  { id: 3, name: 'Thinker', color: 'bg-primary' },
  { id: 4, name: 'Focus Expert', color: 'bg-red-500' },
  { id: 5, name: 'Commander', color: 'bg-green-500' },
] as const;

const SkillsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Fähigkeiten & Technologien</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Eine Übersicht meiner wichtigsten Kompetenzen in Mathematik und Programmierung.
          </p>
        </div>

        {/* card grid – existing categories + High5 strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* ► existing skill‑cards */}
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(({ name, level }) => (
                  <div key={name} className="w-full">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{name}</span>
                      <Badge
                        variant={level === 'Fortgeschritten' ? 'default' : 'secondary'}
                        className={cn(level === 'Fortgeschritten' && 'pointer-events-none')}
                      >
                        {level}
                      </Badge>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
                      <div
                        className="bg-primary h-1.5 rounded-full transition-all duration-500"
                        style={{
                          width:
                            level === 'Fortgeschritten'
                              ? '90%'
                              : level === 'Mittel'
                                ? '70%'
                                : '50%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* ► NEW High5 strengths card */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-4">HIGH 5 TEST</h3>

            <ul className="space-y-3">
              {strengths.map(({ id, name, color }) => (
                <li key={name} className="flex items-center gap-3">
                  {/* numbered colored dot */}
                  <span
                    className={cn(
                      color,
                      'inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white shrink-0'
                    )}
                  >
                    {id}
                  </span>
                  <span className="text-sm font-medium">{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
