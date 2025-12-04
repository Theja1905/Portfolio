import React, { useState } from 'react';
import gymSyncImg from '../assets/images/gym-sync.png';
import portfolioImg from '../assets/images/portfolio.png';
import tiktokTechJamImg from '../assets/images/lumi.png';
import beijingPropertyImg from '../assets/images/beijing.png';

const projects = [
    {
    title: "Beijing Property Analysis",
    description:
      "Conducted a comprehensive market analysis of Beijing's housing prices from 2002 to 2018 to identify promising investment strategies for the property market. Leveraged Tableau and advanced data visualization techniques to transform raw real estate data into interactive dashboards and a compelling narrative. Delivered actionable insights and a data-driven investment thesis to stakeholders, highlighting districts and property types with the highest potential for valuation growth and optimal return on investment.",
    image: beijingPropertyImg, // Reusing portfolio image, replace with a relevant image if available
    technologies: [
      "Tableau",
      "Data Visualisation",
      "Data Analysis",
      "Market Analysis",
      "Microsoft Excel",
      "Data Cleaning"
    ],
    liveUrl: "https://docs.google.com/presentation/d/1l92kRC_Ae4rGx20FDAAgKuQOHAy2SBSbByJTGB72I2w/edit?slide=id.g23cf3b500de_0_0#slide=id.g23cf3b500de_0_0",
    codeUrl: "", // No code link
  },
  {
    title: "GymSync",
    description:
      "Developed GymSync, a fitness app empowering gym-goers to stay consistent with personalized workout templates, logging, and progress dashboards. Conducted user testing and iterated features to align with real user needs, combining technical skills with product thinking.",
    image: gymSyncImg,
    technologies: ["React Native", "React.js", "Firebase", "Firestore", "Expo Go"],
    liveUrl: "https://drive.google.com/file/d/1vrFfcyfNznN-wUkCRsHiTBNy_AigXYuU/view?usp=sharing",
    codeUrl: "https://github.com/Theja1905/GymSync",
  },
  {
    title: "Lumi - TikTok TechJam 2025",
    description:
      "Created Lumi, an AI-powered companion chatbot promoting mindful living. Designed the end-to-end user flow, developed the frontend with Lynx and React, and integrated Google Gemini API through Express, delivering a polished, user-focused product under hackathon constraints.",
    image: tiktokTechJamImg,
    technologies: ["React", "Lynx", "Express.js", "Google Gemini API", "Full-Stack Development"],
    liveUrl: "#",
    codeUrl: "https://github.com/chyemavis/LumiChat",
  },
  {
    title: "Portfolio Website",
    description:
      "Built a personal portfolio website to showcase skills, projects, and experience. Leveraged React and Tailwind CSS to create a sleek, responsive design that communicates personal brand and technical expertise.",
    image: portfolioImg,
    technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Git", "Netlify"],
    liveUrl: "https://thejeswari.netlify.app/",
    codeUrl: "https://github.com/Theja1905/Portfolio",
  },
];

export default function Projects() {
  const [startIdx, setStartIdx] = useState(0);
  const cardsPerPage = 3;
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + cardsPerPage < projects.length;

  const handlePrev = () => {
    if (canGoLeft) setStartIdx(startIdx - cardsPerPage);
  };
  const handleNext = () => {
    if (canGoRight) setStartIdx(startIdx + cardsPerPage);
  };

  return (
    <section id="projects" className="py-12 w-full">
      <div className="w-full px-2 sm:px-4 lg:px-6 mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, design, and problem-solving.
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 w-full">
          <button
            onClick={handlePrev}
            disabled={!canGoLeft}
            className={`rounded-full p-2 text-2xl transition-colors ${canGoLeft ? 'hover:bg-purple-100 text-purple-700' : 'text-slate-300 cursor-not-allowed'}`}
            aria-label="Previous projects"
          >
            &#8592;
          </button>
          <div className="flex flex-row gap-8 w-full justify-center">
            {projects.slice(startIdx, startIdx + cardsPerPage).map((project, index) => (
              <div
                key={index + startIdx}
                className="bg-red-50 bg-opacity-100 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden card-hover fade-in w-full max-w-xs border-[1px] border-[#cbb4e8] flex-shrink-0"
              >
                <div className="w-full h-70 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-h-full max-w-full object-contain mt-15"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-purple-100 text-slate-900 px-3 py-1 rounded-full text-xs border border-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                    </a>
                    {project.codeUrl && project.codeUrl !== "" && (
                      <a
                        href={project.codeUrl}
                        className="text-slate-800 hover:text-slate-600 font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github mr-1"></i>Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNext}
            disabled={!canGoRight}
            className={`rounded-full p-2 text-2xl transition-colors ${canGoRight ? 'hover:bg-purple-100 text-purple-700' : 'text-slate-300 cursor-not-allowed'}`}
            aria-label="Next projects"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
