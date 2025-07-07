import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute("href")!);
        if (targetElement) {
          const offsetTop =
            targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
          setIsMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  const navItems = ["Home", "Experience", "Projects", "Education", "Skills", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-100/70 backdrop-blur-md shadow-md border-b border-blue-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-wide">
            <span className="bg-gradient-to-r from-blue-600 to-amber-500 bg-clip-text text-transparent">
              Thejeswari
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-10 text-lg font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-slate-600 hover:text-blue-600 text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars" />
          </button>
        </div>

        {/* Mobile Nav - GLASSY */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/30 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg py-4 px-4 mt-2 space-y-2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
