import React, { useState } from "react";

const CategoryIcons = {
  " Développement Web Fullstack": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"><g fill="none"
    >
      <rect width="40" height="32" x="4" y="8" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="3"/>
        <path stroke="currentColor" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/>
        <circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 10 14)"/>
        <circle r="2" fill="currentColor" transform="matrix(0 -1 -1 0 16 14)"/>
      </g>
    </svg>
  ),
  "Bases de Données & Backend": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
    >
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12.5.5h-11a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1M7.5 3H11M1.5 5.5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
        <path d="M3.25 8.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5m0-4.5a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5M7.5 8H11m-4 2.5v3m-5 0h10"/>
      </g>
    </svg>
  ),
  "Outils & Méthodologies": (
    <svg
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 14"
    >
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.43 3.59a.76.76 0 0 0-.35-.51l-2 2a1 1 0 0 1-1.44 0l-.76-.68a1 1 0 0 1 0-1.4l2-2a.76.76 0 0 0-.48-.43A3.8 3.8 0 0 0 6.26 6L.8 11.41a1 1 0 0 0 0 1.43l.36.36a1 1 0 0 0 1.43 0l5.46-5.45a3.81 3.81 0 0 0 5.38-4.16Z"/>
    </svg>
  ),
  "Créativité & Projets personnels": (
    <svg 
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48"/>
      <path fill="currentColor" d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38M399.34 90L218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0"/>
    </svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    " Développement Web Fullstack": [
      "Conception d’applications web dynamiques et responsives",
      "Développement back-end (PHP, Java, Node.js)",
      "Création d’API REST et intégration de bases de données (MySQL, MariaDB)s",
      "Gestion de versions et workflows Git/GitLab",
    ],
    "Bases de Données & Backend": [
      "Modélisation et gestion de données relationnelles (MySQL)",
      "Développement d’API pour la communication front/back",
      "Déploiement avec Docker et notions de conteneurisation",
      "Maintenance évolutive et optimisation des performances",
    ],
    "Outils & Méthodologies": [
      "UX/UI de base avec Figma et prototypage",
      "Git/GitLab pour versionning et CI/CD basique",
      "Notions de cybersécurité et Linux (GNU/Linux)",
      "Méthodes Agiles et gestion de projets",
    ],
    "Créativité & Projets personnels": [
      "Récréations musicales et composition (batterie/piano)",
      "Développement de projets personnels (Jeux d'Échecs, applications web)",
      "Participation à des hackathons et événements créatifs",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        Qu'est-ce que je fais ?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
