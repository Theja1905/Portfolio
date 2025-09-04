export default function Skills() {
  const categories = {
    "Languages & Frameworks": [
      "Java",
      "R",
      "React.js",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
    "Backend & Cloud": ["Firebase", "Firestore", "Express.js", "Google Gemini API"],
    "Version Control & Collaboration": ["Git & GitHub"],
    "Data Tools & Analytics": ["Data Visualisation", "R Markdown", "dplyr", "Sheets / Excel"],
    "Product Management & PM Tools": [
      "Product Roadmapping",
      "Startup & MVP Development",
      "Agile / Scrum Practices",
      "User Research & Testing",
      "Market & Competitor Analysis",
      "PRD Creation & Maintenance",
      "Stakeholder Communication",
    ],
    Others: ["Expo Go", "Lynx", "Canva", "VS Code", "Vite", "Netlify", "Spline"],
  };

  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-800">
          Skills & Technologies
        </h2>
        <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-6">
          A snapshot of the tools and technologies I've explored or used in projects and coursework.
        </p>

        <div className="flex flex-col gap-6 items-start sm:items-center">
          {Object.entries(categories).map(([category, skills], idx) => (
            <div key={idx} className="w-full max-w-4xl text-left">
              <h3 className="text-lg font-semibold text-slate-700 mb-2">{category}:</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-50 text-blue-900 px-4 py-2 rounded-full text-sm font-medium shadow-md border border-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
