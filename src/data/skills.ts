export const skills = {
  "Mathematik": [
    { name: "Stochastik", level: "Fortgeschritten" },
    { name: "Numerische Methoden", level: "Fortgeschritten" },
    { name: "Lineare Algebra", level: "Fortgeschritten" },
    { name: "Analysis", level: "Fortgeschritten" },
    { name: "Optimierung", level: "Fortgeschritten" }
  ],
  "Programmierung": [
    { name: "Python", level: "Fortgeschritten" },
    { name: "R", level: "Mittel" },
    { name: "MATLAB", level: "Mittel" },
    { name: "TypeScript", level: "Mittel" },
    { name: "React", level: "Mittel" }
  ],
  "Tools & Frameworks": [
    { name: "LaTeX", level: "Fortgeschritten" },
    { name: "Git", level: "Mittel" },
    { name: "NumPy", level: "Mittel" },
    { name: "Pandas", level: "Mittel" },
    { name: "SciPy", level: "Anfänger" }
  ]
} as const;

export type SkillLevel = "Fortgeschritten" | "Mittel" | "Anfänger";

export interface Skill {
  name: string;
  level: SkillLevel;
} 