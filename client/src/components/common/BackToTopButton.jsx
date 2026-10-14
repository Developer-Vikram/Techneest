import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;

      if (scrollTop > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (scrollHeight > 0) {
        const progress = Math.min(Math.max((scrollTop / scrollHeight) * 100, 0), 100);
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circular progress metrics: radius 18 => circumference ~ 113.1
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div
      className={`fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={`Scroll back to top (${Math.round(scrollProgress)}% scrolled)`}
        className="relative group w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0B1028]/90 hover:bg-[#0B1028] backdrop-blur-md text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
      >
        {/* SVG Circular Progress Track and Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
          viewBox="0 0 44 44"
          fill="none"
        >
          {/* Subtle track background */}
          <circle
            cx="22"
            cy="22"
            r={radius}
            className="stroke-white/15"
            strokeWidth="2.5"
          />
          {/* Gradient progress ring */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D9F5" />
              <stop offset="100%" stopColor="#075BFF" />
            </linearGradient>
          </defs>
          <circle
            cx="22"
            cy="22"
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-150"
          />
        </svg>

        {/* Center Icon */}
        <ArrowUp className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform duration-200 relative z-10" />
      </button>
    </div>
  );
}
