
export interface ResumeEntry {
    id: string;
    period: string;
    title: string;
    organization: string;
    details: string[];
  }
  
  export interface ResumeSection {
    id: string;
    title: string;
    icon: "education" | "work";
    entries: ResumeEntry[];
  }
  
  export const resumeData: ResumeSection[] = [
    {
      id: "education",
      title: "Ausbildung",
      icon: "education",
      entries: [
        {
          id: "bachelor",
          period: "Okt 2021 - März 2025",
          title: "B.Sc. Mathematik",
          organization: "Universität Münster",
          details: [
            "Schwerpunkt: Wahrscheinlichkeitstheorie und Funktionalanalysis",
            "Nebenfach: Informatik",
            "Bachelorarbeit: \"Mischzeiten endlicher Markov-Ketten– Analyse am Beispiel von Kartenmischprozessen\"",
            "Abschlussnote: 2,9"
          ]
        },
        {
          id: "highschool",
          period: "Aug 2019 – Aug 2021",
          title: "Abitur",
          organization: "Gymnasium der Mariannhiller Missionare",
          details: [
            "Leistungskurse: Mathematik und Englisch",
            "Abschlussnote: 2,4",
          ]
        }
      ]
    },
    {
      id: "experience",
      title: "Berufserfahrung",
      icon: "work",
      entries: [
        {
          id: "tutor",
          period: "Okt 2024 - März 2025",
          title: "Tutor für Stochastik",
          organization: "Universität Münster",
          details: [
            "Leitung von Übungsgruppen in Stochastik (Unterstützung von Studierenden beim Verständnis von Wahrscheinlichkeits- und Statistikaufgaben)",
            "Höchste Teilnahmequote aller Gruppen; 75 % der Teilnehmenden bestanden (Soll-Quote: 50 %)"
            
          ]
        },
        {
          id: "begleitung",
          period: "Sep 2020 - Sep 2022",
          title: "Begleitkraft für Menschen mit Beeinträchtigungen",
          organization: "Hermann Bruns & Co. KG",
          details: [
            "Begleitung von Menschen mit Beeinträchtigungen bei Freizeit- und Ausflugsfahrten",
            "Zusammenarbeit im Team, Empathie und Flexibilität im Umgang mit individuellen Bedürfnissen",
            "Verantwortlichkeit für Sicherheit und Wohlbefinden der betreuten Personen"
          ]
        }
      ]
    }
  ];