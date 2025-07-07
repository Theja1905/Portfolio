import profileImg from '../assets/images/IMG_1101.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-10 px-6 md:px-12 lg:px-20 flex items-center justify-center overflow-hidden"
    >
      {/* Layout Container */}
      <div className="flex flex-col md:flex-row items-center gap-30 w-full max-w-7xl">
        {/* Profile Image */}
        <div className="flex justify-center -mt-12 md:-mt-0">
          <div className="w-72 h-72 md:w-[360px] md:h-[360px] rounded-full overflow-hidden shadow-2xl border-0 border-white bg-white">
            <img
              src={profileImg}
              alt="Thejeswari Portrait"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Text + Avatar */}
        <div className="text-center md:text-left relative">
          <div style={{ lineHeight: 1, marginBottom: 0 }}>
            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Hi, I'm
            </span>
            <br />
            <span
              className="name-text text-6xl sm:text-7xl lg:text-8xl font-extrabold animated-gradient-text pl-8 inline-block align-top cursor-default"
              style={{ lineHeight: 1 }}
            >
              Thejeswari
            </span>
            {/* Avatar shown only on sm and above */}
            <span
              className="hidden sm:inline-block align-top overflow-visible"
              style={{
                width: 80,
                height: 80,
                position: 'relative',
                willChange: 'transform',
              }}
            >
              <iframe
                src="https://my.spline.design/3dvoxelavatar-VToZTETgTtK72klpe2NetVF1/"
                allowFullScreen
                style={{
                  background: 'transparent',
                  border: 'none',
                  width: 400,
                  height: 400,
                  transform: 'scale(0.44)',
                  transformOrigin: 'top left',
                  verticalAlign: 'top',
                  position: 'absolute',
                  top: -70,
                  left: 20,
                  willChange: 'transform',
                }}
              ></iframe>
            </span>
          </div>

          <p className="text-xl sm:text-xl text-slate-700 mb-10 max-w-3xl leading-relaxed mt-6">
            I'm a Year 2 Information Systems student at NUS School of Computing.
            I'm passionate about using technology to drive practical, user-focused solutions,
            creating digital experiences that are impactful.
            I'm always eager to explore new technologies, build impactful projects, and collaborate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
            <a
              href="#projects"
              className="border-2 border-blue-900 text-blue-600 text-lg px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-900 text-blue-600 text-lg px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 hover:text-white transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
