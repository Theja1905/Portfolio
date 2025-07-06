export default function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">Let's Work Together</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </div>

        {/* Horizontal Contact Info Row */}
        <div className="flex flex-col items-center gap-8 fade-in">
          <div className="flex flex-col md:flex-row justify-center gap-12 text-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center">
                <i className="fas fa-envelope text-blue-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Email</h4>
                <a href="mailto:theja1905@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                  theja1905@gmail.com
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center">
                <i className="fab fa-linkedin text-blue-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/thejeswari" className="text-slate-600 hover:text-blue-600 transition-colors">
                  linkedin.com/in/thejeswari
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-blue-600/10 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">Location</h4>
                <p className="text-slate-600">Singapore</p>
              </div>
            </div>
          </div>

          {/* Follow Me */}
          <div className="mt-8 text-center">
            <h4 className="font-semibold mb-4 text-slate-800">Follow Me</h4>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/thejeswari" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Theja1905" className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all duration-300">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
