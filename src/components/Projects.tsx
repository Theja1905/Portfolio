import gymSyncImg from '../assets/images/gym-sync.png';
import portfolioImg from '../assets/images/portfolio.png';

const projects = [
  {
    title: "GymSync",
    description:
      "An innovative fitness application currently in development. Features include workout tracking, progress monitoring, and social fitness community integration.",
    image: gymSyncImg, // ✅ Imported image
    technologies: ["React Native", "React.js", "Firebase", "Firestore", "Expo Go"],
    liveUrl: "#",
    codeUrl: "https://github.com/Theja1905/GymSync",
  },
  {
    title: "Portfolio Website",
    description:
      "This personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS for a sleek and responsive design.",
    image: portfolioImg, // ✅ Imported image
    technologies: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "Git", "Netlify"],
    liveUrl: "#",
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
              className="bg-blue-50 rounded-2xl shadow-lg overflow-hidden card-hover fade-in w-full sm:w-[350px] lg:w-[400px]"
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
                      className="bg-blue-100 text-slate-700 px-3 py-1 rounded-full text-xs"
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
