export default function Skills() {
  const skills = [
    "Java",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Firebase",
    "Tailwind CSS",
    "HTML & CSS",
    "Git & GitHub",
    "SQL",
    "Figma",
  ];

  return (
    <section id="skills" className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-slate-800">
          Skills & Technologies
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          A snapshot of the tools and technologies I've used in projects and coursework.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
