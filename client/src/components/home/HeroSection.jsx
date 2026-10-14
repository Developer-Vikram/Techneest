import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import techneestLogo from "../../assets/Techneest-logo.png";
import AnimatedCounter from "../common/AnimatedCounter";
import Button from "../common/Button";

const TYPING_PHRASES = [
  "Web Experiences",
  "Mobile Applications",
  "Custom Software",
  "Digital Products",
  "Enterprise Systems",
];

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99.8%", label: "Uptime SLA" },
];

export default function HeroSection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return TYPING_PHRASES[0];
    }
    return "";
  });
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeoutId;

    if (!isDeleting && currentText === currentPhrase) {
      // Pause when full phrase is typed
      timeoutId = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      // Natural brief pause before typing next phrase
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }, 350);
    } else {
      // Typing or deleting next character
      const speed = isDeleting ? 35 : 75;
      timeoutId = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? currentPhrase.substring(0, prev.length - 1)
            : currentPhrase.substring(0, prev.length + 1),
        );
      }, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section className="relative pt-16 mt-3 sm:pt-20 lg:pt-24 pb-6 sm:pb-8 overflow-hidden bg-white">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-1/4 w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline, Typing, Copy, CTAs, Stats */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
            {/* Eyebrow & Partner Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-wrap items-center gap-2 sm:gap-2.5"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-[#E5F9FD] text-[#008DA6] border border-[#BCEBF4] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9F5] animate-pulse" />
                TECHNOLOGY PARTNER
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[#59647D] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-electric hidden sm:inline" />
                Building ideas. Powering businesses.
              </span>
            </motion.div>

            {/* Main Headline with Animated Typing Effect */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1
                aria-label="Digital Solutions for Web Experiences, Mobile Applications, and Custom Software"
                className="text-[2.2rem] xs:text-[2.6rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.9rem] font-extrabold tracking-tight text-[#0B1028] leading-[1.08] font-display"
              >
                Digital Solutions for{" "}
                <span className="block min-h-[1.18em] mt-1 text-gradient-brand">
                  <span>{currentText || "\u00A0"}</span>
                  <span
                    className="inline-block w-[3px] h-[0.88em] ml-1 bg-brand-cyan animate-pulse align-middle"
                    aria-hidden="true"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs xs:text-sm sm:text-base lg:text-[17px] text-[#59647D] leading-relaxed max-w-lg"
            >
              We design, develop, and scale high-performance web platforms,
              mobile applications, and bespoke enterprise software that turn
              ambitious product roadmaps into resilient digital realities.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1"
            >
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="!py-3 !px-6 !rounded-xl shadow-lg shadow-blue-500/20"
              >
                Start a Project
              </Button>

              <Button
                to="/work"
                variant="secondary"
                size="md"
                className="!py-3 !px-5 !rounded-xl"
              >
                Explore Our Work
              </Button>
            </motion.div>

            {/* Animated Numeric Counters Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 sm:pt-5 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 sm:gap-x-0 border-t border-slate-100 max-w-xl"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`text-left ${
                    i !== 0 ? "sm:pl-5" : ""
                  } ${i !== stats.length - 1 ? "sm:border-r sm:border-slate-100" : ""}`}
                >
                  <div className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-[#0B1028] font-display tracking-tight leading-none">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[11px] sm:text-xs text-[#59647D] mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Quick Guarantees Trust Strip */}
            <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 text-[#0B1028]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                100% Code Ownership
              </span>
              <span className="flex items-center gap-1 text-[#0B1028]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric" />
                Direct Senior Engineers
              </span>
              <span className="flex items-center gap-1 text-[#0B1028]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                Bi-Weekly Staging Releases
              </span>
            </div>
          </div>

          {/* Right Column: Visual with Original Supplied 3D Logo Graphic */}
          <div className="lg:col-span-6 flex items-center justify-center mt-2 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[440px] lg:max-w-[480px] xl:max-w-[520px] aspect-square"
            >
              {/* Ambient radial glow */}
              <div className="absolute inset-[6%] rounded-full bg-gradient-to-tr from-[#00D9F5]/35 via-[#075BFF]/20 to-transparent blur-3xl pointer-events-none" />

              {/* Orbit rings */}
              <div className="absolute inset-[2%] rounded-full border border-blue-200/50 pointer-events-none" />
              <div className="absolute inset-[16%] rounded-full border border-cyan-100/60 pointer-events-none" />

              {/* Hand-drawn arrow & annotation */}
              <div className="hidden sm:block absolute top-[16%] right-[2%] z-20 pointer-events-none text-right">
                <svg
                  className="w-14 h-10 text-slate-400 opacity-60 ml-auto -mb-1"
                  viewBox="0 0 60 40"
                  fill="none"
                >
                  <path
                    d="M50 5 C30 15, 20 25, 10 32"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M10 32 L15 28 M10 32 L16 35"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
                <span className="font-serif italic text-xs text-slate-500 font-semibold tracking-wide leading-snug">
                  Ideas <br />
                  Products <br />
                  Growth
                </span>
              </div>

              {/* Logo (Centered) */}
              <motion.div
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-2"
              >
                <img
                  src={techneestLogo}
                  alt="Techneest Brand 3D Graphic"
                  className="w-[96%] h-auto object-contain drop-shadow-2xl filter saturate-[1.05]"
                />
              </motion.div>

              {/* Pill 1 (Top-Right): Web Development */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-[3%] right-0 sm:-right-2 z-20"
              >
                <Link
                  to="/services/web-development"
                  className="flex items-center gap-2 p-1.5 sm:p-2 px-2.5 sm:px-3 rounded-2xl bg-white shadow-lg border border-slate-100 hover:border-blue-200 transition-all group card-liquid-fill"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-blue-50 text-brand-electric flex items-center justify-center">
                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors flex items-center gap-1">
                    <span>Web Development</span>
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </motion.div>

              {/* Pill 2 (Left): Mobile Applications */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-0 sm:-left-3 top-1/2 -translate-y-1/2 z-20"
              >
                <Link
                  to="/services/mobile-app-development"
                  className="flex flex-col items-center gap-1 p-2 sm:p-2.5 px-2.5 sm:px-3 rounded-2xl bg-white shadow-lg border border-slate-100 hover:border-rose-200 transition-all group card-liquid-fill"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <Smartphone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-[#0B1028] text-center leading-tight group-hover:text-rose-500 transition-colors">
                    Mobile
                    <br />
                    Applications
                  </div>
                </Link>
              </motion.div>

              {/* Pill 3 (Bottom-Right): Custom Software */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-[4%] right-[2%] z-20"
              >
                <Link
                  to="/services/custom-software-development"
                  className="flex items-center gap-2 p-1.5 sm:p-2 px-2.5 sm:px-3 rounded-2xl bg-white shadow-lg border border-slate-100 hover:border-amber-200 transition-all group card-liquid-fill"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                    <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0B1028] group-hover:text-amber-600 transition-colors leading-tight">
                    Custom
                    <br />
                    Software
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
