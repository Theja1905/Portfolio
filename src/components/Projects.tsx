import gymSyncImg from '../assets/images/gym-sync.png';
import portfolioImg from '../assets/images/portfolio.png';
import tiktokTechJamImg from '../assets/images/lumi.png';

const projects = [
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
      "Created Lumi, an AI-powered companion chatbot promoting mindful living. Designed the end-to-end user flow, developed the frontend with Lynx and React, and integrated Google Gemini API through Express—delivering a polished, user-focused product under hackathon constraints.",
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
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development, design, and problem-solving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-red-50 bg-opacity-100 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden card-hover fade-in 
                         w-full sm:w-[48%] lg:w-[32%] border-[1px] border-[#cbb4e8]"
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
                  <a
                    href={project.codeUrl}
                    className="text-slate-800 hover:text-slate-600 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github mr-1"></i>Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
