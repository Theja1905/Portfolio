export default function Education() {
  return (
    <section id="education" className="px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Block */}
        <div className="text-center mb-10 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">
            Education
          </h2>
          <p className="text-lg text-slate-600">
            A glimpse into my academic journey and extracurricular activities.
          </p>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-8 items-center">
          {/* NUS */}
          <div className="bg-red-50 bg-opacity-100 backdrop-blur-sm border-[1px] border-[#cbb4e8] shadow-md rounded-2xl p-6 w-full sm:w-[500px] lg:w-[900px] fade-in">
            <h3 className="text-xl font-semibold text-slate-800">
              National University of Singapore
            </h3>
            <p className="text-lg font-semibold text-slate-900 mt-0">
              Bachelor of Information Systems (Honours)
            </p>
            <p className="text-sm italic text-slate-600">
              August 2024 – May 2028
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-slate-800">Extracurricular Activities</h4>
              <ul className="list-disc list-inside text-slate-700 mt-2">
                <li>Partnerships Executive at NUS Product Club (AY 24/25)</li>
                <li>Head of Partnerships at NUS Product Club (AY 25/26)</li>
              </ul>
            </div>
          </div>

          {/* VJC */}
          <div className="bg-red-50 bg-opacity-100 backdrop-blur-sm border-[1px] border-[#cbb4e8] shadow-md rounded-2xl p-6 w-full sm:w-[500px] lg:w-[900px] fade-in">
            <h3 className="text-xl font-semibold text-slate-800">
              Victoria Junior College
            </h3>
            <p className="text-sm italic text-slate-600">
              January 2022 – December 2023
            </p>
            <p className="text-slate-700 mt-2">
              Biology, Chemistry, Mathematics, Economics, General Paper
              <br />
              A Levels — 85 RP
            </p>

            <div className="mt-4">
              <h4 className="font-semibold text-slate-800">Extracurricular Activities</h4>
              <ul className="list-disc list-inside text-slate-700 mt-2">
                <li>Medical Society Member</li>
                <li>Science Research Programme</li>
                <li>Bronze in Singapore Mathematics Olympiad 2022</li>
                <li>Participated in Singapore Science and Engineering Fair 2022</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
