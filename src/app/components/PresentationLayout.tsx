import { Outlet, useNavigate, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Moon, Sun } from 'lucide-react';

const slides = [
  '/',
  '/speaker',
  '/agenda',
  '/comparison',
  '/flutter-2026',
  '/startup',
  '/career',
  '/qa',
];

export default function PresentationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  const currentIndex = slides.indexOf(location.pathname);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentIndex < slides.length - 1) {
        navigate(slides[currentIndex + 1]);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        navigate(slides[currentIndex - 1]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, navigate]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-300`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      <div className="h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Outlet context={{ isDark }} />
        </div>

        {/* Navigation Bar */}
        <div
          className={`border-t ${
            isDark ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'
          } px-6 py-4`}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Previous Button */}
            <button
              onClick={() => currentIndex > 0 && navigate(slides[currentIndex - 1])}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                currentIndex === 0
                  ? isDark
                    ? 'text-gray-700 cursor-not-allowed'
                    : 'text-gray-300 cursor-not-allowed'
                  : isDark
                  ? 'text-gray-300 hover:bg-gray-800'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => navigate(slides[index])}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-[#02569B] w-8'
                      : isDark
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <span
                className={`ml-4 text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {currentIndex + 1} / {slides.length}
              </span>
            </div>

            {/* Next Button & Theme Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-all ${
                  isDark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() =>
                  currentIndex < slides.length - 1 && navigate(slides[currentIndex + 1])
                }
                disabled={currentIndex === slides.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentIndex === slides.length - 1
                    ? isDark
                      ? 'text-gray-700 cursor-not-allowed'
                      : 'text-gray-300 cursor-not-allowed'
                    : isDark
                    ? 'text-gray-300 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
