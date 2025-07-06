module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(210, 16%, 82%)",
        // other colors...
      },
      keyframes: {
        fadeInSlide: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInSlide: 'fadeInSlide 1s ease forwards',
        fadeInSlideDelay: 'fadeInSlide 1.2s ease forwards',
        fadeInSlideDelay2: 'fadeInSlide 1.5s ease forwards',
        fadeInSlideDelay3: 'fadeInSlide 1.8s ease forwards',
      },
    },
  },
  plugins: [],
}
