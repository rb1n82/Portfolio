import { Project } from "../components/ProjectCard";

export const projects: Project[] = [
  {
    id: "bachelorarbeit",
    title: "Bachelorarbeit: Analyse von Kartenmischprozessen",
    description: "In dieser Bachelorarbeit liegt der Fokus auf der <b>Mischzeit</b> von Kartendecks, also darauf, wie viele Schritte benötigt werden, bis ein Kartendeck als „hinreichend gut gemischt“ betrachtet wird. Dies wird durch die <b>Total-Variation-Distanz</b> gemessen, einem mathematischen Maß, das den Unterschied zwischen der Kartenverteilung nach einer bestimmten Anzahl von Mischschritten und einer ideal zufälligen Verteilung beschreibt.",
    tags: ["Mathematik", "Stochastik", "Visualisierung"],
    image: "/cards.jpg",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    hasDemo: true,
    hasWebsite: false,
    hasGithub: false,
    details: {
      overview: "Die Arbeit beginnt mit einer Einführung in die Grundlagen der Markov-Ketten, einer speziellen Art stochastischer Prozesse, bei denen der nächste Zustand nur vom aktuellen Zustand abhängt. Wichtige Konzepte wie stationäre Verteilungen, Irreduzibilität und Aperiodizität werden erläutert, um die Grundlage für die spätere Modellierung von Kartenschmischprozessen zu legen. Die Total-Variation-Distanz wird als Maß für die Ähnlichkeit zwischen Verteilungen eingeführt, und die Mischzeit wird als Kennzahl definiert, die angibt, wie schnell eine Markov-Kette die stationäre Verteilung erreicht.",
      challenges: "Im zweiten Teil werden zwei spezifische Kartenschmischprozesse als Markov-Ketten betrachtet: das Random Transposition Shuffle und das Random Adjacent Transposition Shuffle. Für jedes dieser Modelle wird untersucht, wie lange es dauert, bis der Kartendeck zufällig (d.h., nahezu gleichverteilt) gemischt ist. Es werden obere als auch untere Schranken für die Mischzeit entwickelt und fortgeschrittene mathematische Werkzeuge wie die Coupling-Methode verwendet, um präzise Aussagen über die Geschwindigkeit der Konvergenz zur stationären Verteilung zu treffen.",
      solution: "Abschließend werden die Ergebnisse zusammengefasst und die hergeleiteten Schranken für die Mischzeiten präsentiert. Wir stellen fest, dass der Random Transposition Shuffle asymptotisch eine Mischzeit von etwa n/2 log n hat, während das Random Adjacent Transposition Shuffle eine langsamere Konvergenz aufweist.",
      technologies: [
        "Markov-Ketten",
        "Total-Variation-Distanz",
        "Coupling-Methoden",
        "Stoppzeiten und starke stationäre Zeiten"
      ]
    }
  },
  {
    id: "riskagent",
    title: "RiskAgent",
    description: "RiskAgent ist ein webbasiertes FinTech‑Dashboard, das beliebige Aktien‑, ETF‑ und Krypto‑Portfolios in Sekundenschnelle analysiert. Es zieht historische Kursdaten, berechnet Kennzahlen wie Volatilität, Sharpe‑Ratio und Value‑at‑Risk, visualisiert Korrelationen und vergleicht dein Depot live mit Benchmarks (z. B. S&P 500). Intuitiv bedienbar, komplett in TypeScript entwickelt und optimiert für schnelle Ladezeiten.",
    tags: ["Finanzen", "Portfolio-Analyse", "Datenanalyse", "Statistik", "Visualisierung", "TypeScript"],
    image: "/riskagent.png",
    demoUrl: "https://riskagentv2-1.onrender.com",
    githubUrl: "https://github.com/rb1n82/RiskAgentv2",
    hasDemo: false,
    hasWebsite: true,
    hasGithub: true,
    details: {
      overview: "RiskAgent ist ein webbasiertes Dashboard, das Anlegern eine schnelle Risiko‑ und Performance‑Analyse für beliebige Aktien‑, ETF‑ und Krypto‑Portfolios bietet. Du gibst dein Depot (oder ein Demodepot) ein, das Tool zieht historische Kurse, berechnet Kennzahlen wie Volatilität, Sharpe‑Ratio, Value‑at‑Risk (VaR) und stellt alles in interaktiven Charts dar. Ein Benchmark‑Modul legt dein Portfolio automatisch neben den S&P 500, sodass Stärken, Schwächen und Diversifikationseffekte sofort sichtbar werden.",

      challenges: "Die größte Herausforderung war es, heterogene Kursquellen (börsengehandelte Wertpapiere vs. 24/7‑Kryptomärkte) sauber zusammenzuführen, ohne API‑Limits zu sprengen. Gleichzeitig sollten rechenintensive Risikokennzahlen ohne lange Ladezeiten verfügbar sein. Zusätzlich musste das Interface so gestaltet werden, dass Neulinge nicht von Finanz‑Jargon erschlagen werden, aber Fortgeschrittene trotzdem Tiefgang bekommen.",

      solution: "Backend und Rechenkern wurden in TypeScript (Node.js) implementiert. Ein Caching‑Layer (Redis) puffert Kurshistorien von yFinance & CoinGecko, Tages‑Cronjobs aktualisieren die Daten. Statistische Kennzahlen entstehen serverseitig (z. B. VaR via 10 000‑facher Monte‑Carlo‑Simulation), werden über eine REST‑API ausgeliefert und im Frontend mit React + Recharts visualisiert. Dank aggressivem Caching, paralleler API‑Calls und asynchroner Workers bleibt die Time‑to‑First‑Chart < 1 s für typische Portfolios. Deployment erfolgt containerisiert auf Render; CI über GitHub Actions prüft Tests und Linting bei jedem Push.",

      technologies: [
        "React (CRA)",
        "TypeScript (>98 % Code‑Share)",
        "Tailwind CSS",
        "Recharts & D3",
        "Node.js + Express",

        "yFinance / CoinGecko API",
        "Docker + Render Deploy",
        "GitHub Actions CI/CD"
      ]
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};