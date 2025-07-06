export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-2xl font-bold gradient-text">T</span>
          </div>
          <p className="text-slate-300 mb-6">
            Thanks for visiting! Let's create something amazing together.
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.linkedin.com/in/thejeswari" className="text-slate-300 hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://github.com/Theja1905" className="text-slate-300 hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
          <div className="border-t border-slate-700 pt-6">
            <p className="text-slate-400 text-sm">
              © 2025 Thejeswari. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}