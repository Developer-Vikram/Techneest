import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
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
    highlight: "Zero vendor lock-in with fully automated multi-region deployment pipelines.",
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
    highlight: "Test real product builds on live staging environments before every milestone sign-off.",
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
    highlight: "Clean Git histories, type-safe API contracts, and turnkey container configurations.",
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
          <div className="text-left">
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
            <p className="text-xs sm:text-sm text-[#59647D] mt-1.5 max-w-xl">
              Transparent delivery principles, rigorous architectural standards, and full intellectual property ownership on every project.
            </p>
          </div>

          {/* Interactive Slide Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Slide Index Indicator */}
            <span className="text-xs font-bold text-[#59647D] mr-1">
              0{currentIndex + 1} <span className="text-slate-400">/</span> 0{commitments.length}
            </span>

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

        {/* 2-Column Editorial Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Principle Card with Animated Content */}
          <div className="lg:col-span-7 bg-white/95 rounded-3xl p-6 sm:p-8 lg:p-9 border border-slate-200/90 shadow-card flex flex-col justify-between relative overflow-hidden text-left">
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
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-brand-electric border border-blue-200/70">
                      {current.tag}
                    </span>
                    <span className="text-xs text-[#59647D] font-semibold">
                      {current.pillar}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1028] tracking-tight leading-snug">
                    {current.title}
                  </h3>

                  <div className="relative pl-6 border-l-2 border-brand-electric">
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
                  <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200/80">
                    {current.metrics.map((m, idx) => (
                      <div key={idx} className="text-left">
                        <div className="text-lg sm:text-xl font-extrabold text-[#0B1028] font-display">
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

            {/* Pagination Dots at Bottom */}
            <div className="flex items-center justify-between pt-5 mt-5 border-t border-slate-200/80 relative z-10">
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
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-electric hover:text-blue-800 transition-colors"
              >
                <span>Read Our Full Charter</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Office Photo with Verified Stats Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card aspect-[16/11] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[320px] bg-slate-100 border border-slate-200/90">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Techneest software engineering team in collaborative workstation"
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay Stats Card matching reference */}
              <div className="absolute top-4 left-4 z-20 p-4 sm:p-5 rounded-2xl bg-[#0B1028]/95 backdrop-blur-md text-white border border-white/10 space-y-3 shadow-2xl">
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    <AnimatedCounter value="100+" />
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium">
                    Projects Delivered
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="text-xl sm:text-2xl font-extrabold text-white font-display">
                    <AnimatedCounter value="50+" />
                  </div>
                  <div className="text-[10px] text-slate-300 font-medium">
                    Client Collaborations
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="text-xs font-bold text-brand-cyan flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>100% On-Time Releases</span>
                  </div>
                </div>
              </div>

              {/* Watermark Brand Mark */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 p-2 px-3 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-white">
                <img
                  src={techneestLogo}
                  alt="Techneest Logo"
                  className="w-5 h-5 object-contain"
                />
                <span className="font-extrabold text-xs tracking-tight text-[#0B1028]">
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
