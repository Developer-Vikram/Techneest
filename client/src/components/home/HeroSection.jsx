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
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const currentPhrase = TYPING_PHRASES[phraseIndex];
    let timeoutId;

    if (!isDeleting && currentText === currentPhrase) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === "") {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
      }, 350);
    } else {
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
    <section className="relative pt-28 sm:pt-32 lg:pt-36 pb-8 sm:pb-10 overflow-hidden bg-white">
      <div className="absolute top-0 right-1/4 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-br from-cyan-100/40 via-blue-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
          {/* Left Column — mobile/tablet original space-y, desktop explicit mb */}
          <div className="md:col-span-1 lg:col-span-6 space-y-4 sm:space-y-5 text-center md:text-left">
            {/* Eyebrow — no extra mb on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col xs:flex-row items-center justify-center md:justify-start gap-2 sm:gap-2.5 lg:gap-3"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-[#E5F9FD] text-[#008DA6] border border-[#BCEBF4] shadow-2xs w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D9F5] animate-pulse" />
                TECHNOLOGY PARTNER
              </span>
              <span className="text-[11px] xs:text-xs sm:text-sm font-semibold text-[#59647D] flex items-center justify-center md:justify-start gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-electric hidden xs:inline" />
                Building ideas. Powering businesses.
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1
                aria-label="Digital Solutions for Web Experiences, Mobile Applications, and Custom Software"
                className="text-[1.8rem] xs:text-[2.2rem] sm:text-4xl md:text-4xl lg:text-[2.9rem] xl:text-[3.4rem] font-extrabold tracking-tight text-[#0B1028] leading-[1.22] font-display break-words"
              >
                Digital Solutions for{" "}
                <span className="block min-h-[1.3em] mt-2 lg:mt-3 text-gradient-brand">
                  <span>{currentText || "\u00A0"}</span>
                  <span
                    className="inline-block w-[2px] sm:w-[3px] h-[0.85em] ml-1 bg-brand-cyan animate-pulse align-middle"
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
              className="text-xs sm:text-sm md:text-base lg:text-[17px] text-[#59647D] leading-relaxed lg:leading-[1.75] max-w-lg mx-auto md:mx-0"
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
              className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 lg:gap-4 pt-2"
            >
              <Button
                to="/contact"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl shadow-lg shadow-blue-500/20 w-full sm:w-auto justify-center text-xs sm:text-sm font-semibold"
              >
                Start a Project
              </Button>

              <Button
                to="/work"
                variant="secondary"
                size="md"
                className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl w-full sm:w-auto justify-center text-xs sm:text-sm font-semibold"
              >
                Explore Our Work
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-5 sm:pt-6 mt-2 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-slate-100 max-w-xl mx-auto md:mx-0"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className={`text-center md:text-left ${
                    i !== 0 ? "sm:pl-4" : ""
                  } ${
                    i !== stats.length - 1
                      ? "sm:border-r sm:border-slate-100"
                      : ""
                  }`}
                >
                  <div className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-[#0B1028] font-display tracking-tight leading-none">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#59647D] mt-1.5 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Trust strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-[10px] sm:text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5 text-[#0B1028]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                100% Code Ownership
              </span>
              <span className="flex items-center gap-1.5 text-[#0B1028]">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric shrink-0" />
                Direct Senior Engineers
              </span>
              <span className="flex items-center gap-1.5 text-[#0B1028]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                Bi-Weekly Staging Releases
              </span>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="md:col-span-1 lg:col-span-6 flex items-center justify-center mt-6 md:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[340px] lg:max-w-[480px] xl:max-w-[520px] aspect-square mx-auto"
            >
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-[#00D9F5]/30 via-[#075BFF]/15 to-transparent blur-3xl pointer-events-none" />
              <div className="absolute inset-[2%] rounded-full border border-blue-200/50 pointer-events-none" />
              <div className="absolute inset-[16%] rounded-full border border-cyan-100/60 pointer-events-none" />

              <div className="hidden md:block absolute top-[10%] right-[-8%] lg:right-[2%] z-20 pointer-events-none text-right">
                <svg
                  className="w-10 lg:w-14 h-8 lg:h-10 text-slate-400 opacity-60 ml-auto -mb-1"
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
                <span className="font-serif italic text-[9px] lg:text-xs text-slate-500 font-semibold tracking-wide leading-snug">
                  Ideas <br />
                  Products <br />
                  Growth
                </span>
              </div>

              <motion.div
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 z-10 flex items-center justify-center p-8 sm:p-10 md:p-8 lg:p-12"
              >
                <img
                  src={techneestLogo}
                  alt="Techneest Brand 3D Graphic"
                  className="w-[90%] md:w-[80%] lg:w-[85%] h-auto object-contain drop-shadow-2xl filter saturate-[1.05]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-[2%] right-[2%] md:top-[5%] md:right-[0%] lg:top-[3%] lg:-right-2 z-20"
              >
                <Link
                  to="/services/web-development"
                  className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 px-2 sm:px-3 rounded-lg sm:rounded-2xl bg-white shadow-lg border border-slate-100 hover:border-blue-200 transition-all group card-liquid-fill"
                >
                  <div className="w-5 h-5 sm:w-7 md:w-8 md:h-8 sm:h-7 rounded-md sm:rounded-xl bg-blue-50 text-brand-electric flex items-center justify-center shrink-0">
                    <Globe className="w-3 h-3 sm:w-3.5 md:w-4 md:h-4" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors whitespace-nowrap">
                    Web Dev
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute left-[-2%] md:-left-4 lg:-left-3 top-1/2 -translate-y-1/2 z-20"
              >
                <Link
                  to="/services/mobile-app-development"
                  className="flex flex-col items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 px-2 sm:px-2.5 rounded-lg sm:rounded-2xl bg-white shadow-lg border border-slate-100 hover:border-rose-200 transition-all group card-liquid-fill"
                >
                  <div className="w-5 h-5 sm:w-7 md:w-8 md:h-8 sm:h-7 rounded-md sm:rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
                    <Smartphone className="w-3 h-3 sm:w-3.5 md:w-4 md:h-4" />
                  </div>
                  <div className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#0B1028] text-center leading-tight group-hover:text-rose-500 transition-colors">
                    Mobile
                    <br />
                    Apps
                  </div>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-[2%] right-[2%] md:bottom-[5%] md:right-[0%] lg:bottom-[4%] lg:right-[2%] z-20"
              >
                <Link
                  to="/services/custom-software-development"
                  className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 px-2 sm:px-3 rounded-lg sm:rounded-2xl bg-white shadow-lg border border-slate-100 hover:border-amber-200 transition-all group card-liquid-fill"
                >
                  <div className="w-5 h-5 sm:w-7 md:w-8 md:h-8 sm:h-7 rounded-md sm:rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                    <Cpu className="w-3 h-3 sm:w-3.5 md:w-4 md:h-4" />
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#0B1028] group-hover:text-amber-600 transition-colors leading-tight whitespace-nowrap">
                    Custom SW
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