import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import techneestLogo from "../../assets/Techneest-logo.png";
import AnimatedCounter from "../common/AnimatedCounter";

const commitments = [
  {
    id: "architecture",
    tag: "SYSTEM RELIABILITY & SCALE",
    title: "Engineered for 10x Scale, Resilient Under Pressure",
    statement:
      "We design software architectures that gracefully handle peak traffic spikes, maintain strict sub-100ms API response times, and isolate failure domains so that an unexpected spike never threatens core business operations.",
    pillar: "Architecture Philosophy",
    metrics: [
      { label: "Target Uptime SLA", value: "99.9%" },
      { label: "Avg. Core Web Vitals", value: "95+" },
      { label: "Architecture", value: "Microservices & Edge" },
    ],
    highlight:
      "Zero vendor lock-in with fully automated multi-region deployment pipelines.",
  },
  {
    id: "collaboration",
    tag: "RADICAL TRANSPARENCY",
    title: "Direct Engineering Access, Zero Middlemen Bureaucracy",
    statement:
      "You collaborate directly with the senior frontend, backend, and mobile architects writing your code. We eliminate non-technical account management filters in favor of direct Slack/Teams technical communication and bi-weekly live staging demos.",
    pillar: "Collaboration Model",
    metrics: [
      { label: "Feedback Loop", value: "< 24 Hours" },
      { label: "Staging Updates", value: "Bi-Weekly" },
      { label: "Issue Tracking", value: "Shared Linear/Jira" },
    ],
    highlight:
      "Test real product builds on live staging environments before every milestone sign-off.",
  },
  {
    id: "ownership",
    tag: "CLIENT IP AUTONOMY",
    title: "100% Intellectual Property Ownership from Day One",
    statement:
      "Every repository, database schema, design token, and cloud infrastructure script is owned completely by your company. When your product reaches maturity, your in-house engineers can step in and take over with zero proprietary friction.",
    pillar: "Intellectual Property Charter",
    metrics: [
      { label: "IP Transferred", value: "100%" },
      { label: "License Fees", value: "$0 Recurring" },
      { label: "Handover Docs", value: "Comprehensive" },
    ],
    highlight:
      "Clean Git histories, type-safe API contracts, and turnkey container configurations.",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = useCallback(() => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? commitments.length - 1 : prevIdx - 1
    );
  }, []);

  const next = useCallback(() => {
    setCurrentIndex((prevIdx) =>
      prevIdx === commitments.length - 1 ? 0 : prevIdx + 1
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prev, next]);

  const current = commitments[currentIndex];

  return (
    <section className="bg-particle-wave py-10 sm:py-14 text-[#0B1028] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7 sm:mb-9 lg:mb-10">
          {/* Header text — mobile pe center, sm+ pe left */}
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-electric text-xs font-bold uppercase tracking-wider mb-2.5 border border-blue-200/70">
              <Sparkles className="w-3.5 h-3.5" />
              HOW WE PARTNER WITH CLIENTS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] tracking-tight font-display">
              Our Engineering & Collaboration{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-blue-600 to-brand-violet">
                Charter
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-[#59647D] mt-1.5 max-w-xl mx-auto sm:mx-0">
              Transparent delivery principles, rigorous architectural standards,
              and full intellectual property ownership on every project.
            </p>
          </div>

          {/* Interactive Slide Controls — mobile pe counter UPAR, buttons NEECHE */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            {/* Counter */}
            <span className="text-xs font-bold text-[#59647D] sm:mr-1">
              0{currentIndex + 1}{" "}
              <span className="text-slate-400">/</span> 0{commitments.length}
            </span>

            {/* Buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-[#0B1028] flex items-center justify-center transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
                aria-label="Previous commitment pillar"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-[#0B1028] flex items-center justify-center transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
                aria-label="Next commitment pillar"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 2-Column Editorial Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Principle Card with Animated Content */}
          <div className="lg:col-span-7 bg-white/95 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-9 border border-slate-200/90 shadow-card flex flex-col justify-between relative overflow-hidden text-left">
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="space-y-4 sm:space-y-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-brand-electric border border-blue-200/70">
                      {current.tag}
                    </span>
                    <span className="text-[11px] sm:text-xs text-[#59647D] font-semibold">
                      {current.pillar}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#0B1028] tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <div className="relative pl-5 sm:pl-6 border-l-2 border-brand-electric">
                    <Quote className="w-4 h-4 text-brand-electric/30 absolute -top-1 -left-2 fill-current" />
                    <p className="text-sm sm:text-base text-[#0B1028] leading-relaxed italic">
                      "{current.statement}"
                    </p>
                  </div>

                  {/* Highlight pill */}
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-[#0B1028] font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{current.highlight}</span>
                  </div>

                  {/* Quantitative Metrics Bar */}
                  <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3 pt-3 border-t border-slate-200/80">
                    {current.metrics.map((m, idx) => (
                      <div
                        key={idx}
                        className="text-left rounded-lg bg-slate-50/60 xs:bg-transparent p-2 xs:p-0"
                      >
                        <div className="text-base sm:text-xl font-extrabold text-[#0B1028] font-display leading-tight">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-[#59647D] mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination Dots at Bottom — mobile pe center */}
            <div className="flex flex-col xs:flex-row items-center justify-center xs:justify-between gap-3 pt-5 mt-5 border-t border-slate-200/80 relative z-10">
              <div className="flex items-center gap-2">
                {commitments.map((c, i) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      i === currentIndex
                        ? "w-8 bg-brand-electric"
                        : "w-2 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Jump to slide ${i + 1}`}
                  />
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs font-bold text-brand-electric hover:text-blue-800 transition-colors whitespace-nowrap"
              >
                <span className="hidden xs:inline">Read Our Full Charter</span>
                <span className="xs:hidden">Full Charter</span>
                <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Office Photo with Verified Stats Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-card bg-slate-100 border border-slate-200/90 w-full h-[340px] xs:h-[380px] sm:h-[420px] lg:h-full lg:min-h-[440px]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Techneest software engineering team in collaborative workstation"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Dark Overlay Stats Card — compact on mobile */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 p-2.5 xs:p-3 sm:p-4 lg:p-5 rounded-xl sm:rounded-2xl bg-[#0B1028]/95 backdrop-blur-md text-white border border-white/10 space-y-1.5 sm:space-y-2 lg:space-y-3 shadow-2xl max-w-[58%] xs:max-w-[52%] sm:max-w-none">
                <div>
                  <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold text-white font-display leading-none">
                    <AnimatedCounter value="100+" />
                  </div>
                  <div className="text-[9px] xs:text-[10px] text-slate-300 font-medium mt-0.5">
                    Projects Delivered
                  </div>
                </div>

                <div className="pt-1.5 sm:pt-2 border-t border-white/10">
                  <div className="text-base xs:text-lg sm:text-xl lg:text-2xl font-extrabold text-white font-display leading-none">
                    <AnimatedCounter value="50+" />
                  </div>
                  <div className="text-[9px] xs:text-[10px] text-slate-300 font-medium mt-0.5">
                    Client Collaborations
                  </div>
                </div>

                <div className="pt-1.5 sm:pt-2 border-t border-white/10">
                  <div className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-brand-cyan flex items-center gap-1 sm:gap-1.5">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan shrink-0" />
                    <span>100% On-Time Releases</span>
                  </div>
                </div>
              </div>

              {/* Watermark Brand Mark — CRISP: solid white, no blur */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 px-2 sm:px-3 rounded-lg sm:rounded-xl bg-white shadow-md border border-slate-200">
                <img
                  src={techneestLogo}
                  alt="Techneest Logo"
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  style={{ imageRendering: "crisp-edges" }}
                />
                <span className="font-extrabold text-[10px] sm:text-xs tracking-tight text-[#0B1028] antialiased">
                  Techneest
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}