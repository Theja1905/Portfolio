export default function Experience() {
  const experiences = [
    {
      title: "Call Centre - Income Tax Advisor",
      organization: "Inland Revenue Authority of Singapore",
      duration: "Feb 2024 - Apr 2024",
      description: (
        <ul className="list-disc list-inside space-y-1 text-slate-700">
          <li>
            Assisted taxpayers with inquiries related to income tax matters and filing processes.
          </li>
          <li>
            Provided accurate guidance on tax regulations, filing procedures, and system navigation via phone.
          </li>
          <li>
            Resolved inquiries promptly and collaborated with internal departments to deliver smooth and effective support.
          </li>
        </ul>
      ),
      skills: ["Customer Service", "Communication", "Data Entry", "Problem Solving"],
    },
    {
      title: "Job Shadowing & Volunteering",
      organization: (
        <>
          National Cancer Centre Singapore, Alexandra Hospital
          <br />
           National Healthcare Group, Singapore Cancer Centre, National Kidney Foundation
        </>
      ),
      duration: "Jan 2022 - Dec 2023",
      description: (
        <ul className="list-disc list-inside space-y-1 text-slate-700">
          <li>
            Observed doctors during patient consultations and supported basic clerical tasks.
          </li>
          <li>
            Gained exposure to healthcare practices and patient-doctor interactions.
          </li>
          <li>
            Volunteered by assisting and interacting with patients, helping them with any needs or concerns they had.
          </li>
        </ul>
      ),
      skills: ["Observation", "Empathy", "Communication", "Attention to Detail", "Adaptability"],
    },
  ];

  return (
    <section id="experience" className="px-6 md:px-12 lg:px-10 py-5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
            Experience
          </h2>
          <p className="text-lg text-slate-600 max-w-1xl mx-auto">
            Here are some of the roles I've held that have shaped my skills and perspective.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-8 items-center">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-red-50 bg-opacity-100 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden w-full sm:w-[350px] lg:w-[900px] p-6 fade-in border-[1px] border-[#cbb4e8]"
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {exp.title}
              </h3>
              <p className="text-sm italic text-slate-600 mb-1">
                {exp.organization}
              </p>
              <p className="text-sm italic text-slate-600 mb-4">
                {exp.duration}
              </p>
              <div className="mb-4">{exp.description}</div>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-slate-900 px-3 py-1 rounded-full text-xs font-medium border border-purple-300"
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
