import { Link } from "react-router-dom";
import {
  Lightbulb,
  Layout,
  Code2,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    step: "01",
    name: "Discover & Strategy",
    icon: Lightbulb,
    badge: "Stage 01",
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    glow: "shadow-cyan-500/10",
    description:
      "Deep dive into your personas, technical constraints, and commercial goals to craft an actionable architecture blueprint.",
    highlights: ["Scope definition", "User journey mapping", "Technical feasibility"],
  },
  {
    step: "02",
    name: "Design & Prototype",
    icon: Layout,
    badge: "Stage 02",
    color: "bg-blue-50 text-brand-electric border-blue-200",
    glow: "shadow-blue-500/10",
    description:
      "Interactive clickable prototypes, accessible design systems, and responsive layouts crafted for effortless conversion.",
    highlights: ["Interactive wireframes", "Design system tokens", "Usability validation"],
  },
  {
    step: "03",
    name: "Develop & Test",
    icon: Code2,
    badge: "Stage 03",
    color: "bg-purple-50 text-brand-violet border-purple-200",
    glow: "shadow-purple-500/10",
    description:
      "Type-safe, test-covered code with continuous integration. Bi-weekly sprint demos on live cloud staging environments.",
    highlights: ["Bi-weekly staging demos", "Automated CI/CD suites", "Clean architecture"],
  },
  {
    step: "04",
    name: "Launch & Improve",
    icon: Rocket,
    badge: "Stage 04",
    color: "bg-rose-50 text-rose-600 border-rose-200",
    glow: "shadow-rose-500/10",
    description:
      "Zero-downtime production deployment, App Store publishing, performance monitoring, and proactive post-launch tuning.",
    highlights: ["Zero-downtime release", "App Store approvals", "Ongoing SLA tuning"],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-particle-wave py-8 sm:py-10 lg:py-12 relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Row: Positioned naturally at the top with compact, standard spacing */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 lg:mb-9">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-electric text-xs font-bold uppercase tracking-wider mb-2 border border-blue-200/70 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              OUR ENGINEERING PROCESS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] tracking-tight leading-[1.15] font-display">
              From Idea to Impact,{" "}
              <span className="text-gradient-brand">Together</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#59647D] mt-1.5 max-w-xl leading-relaxed">
              A transparent four-stage delivery lifecycle designed for velocity, code quality, and predictable milestones.
            </p>
          </div>

          <div className="text-left md:text-right shrink-0">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-[#0B1028] hover:text-brand-electric hover:border-blue-200 transition-all shadow-xs group"
            >
              <span>Explore Our Methodology</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-electric group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP TIMELINE: Clean, Light Horizontal Pipeline
            ========================================================================= */}
        <div className="hidden md:block relative">
          {/* Horizontal Connecting Dashed Flow Line */}
          <div className="absolute top-8 left-12 right-12 h-0.5 border-t-2 border-dashed border-blue-200/90 z-0" />

          <div className="grid grid-cols-4 gap-4 lg:gap-5 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="card-liquid-fill flex flex-col justify-between p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-blue-300 hover:shadow-card transition-all duration-300 group shadow-xs"
                >
                  <div>
                    {/* Step Node with Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl ${item.color} border flex items-center justify-center font-extrabold shadow-xs ${item.glow} group-hover:scale-105 transition-transform shrink-0`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-[#59647D] border border-slate-200">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B1028] mb-1.5 leading-snug group-hover:text-brand-electric transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#59647D] leading-relaxed mb-3.5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 space-y-1.5">
                    {item.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-center gap-1.5 text-[11px] font-medium text-[#0B1028]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET TIMELINE: Compact, Tight Vertical Flow (Zero Bloat)
            ========================================================================= */}
        <div className="md:hidden relative pl-5 sm:pl-7 text-left space-y-3">
          {/* Vertical Dashed Line running down the left */}
          <div className="absolute left-2.5 sm:left-3 top-3 bottom-3 w-0.5 border-l-2 border-dashed border-blue-200" />

          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="card-liquid-fill relative pl-4 sm:pl-5 p-3.5 sm:p-4 rounded-xl bg-white/95 border border-slate-200/90 shadow-xs"
              >
                {/* Node on vertical line */}
                <div
                  className={`absolute -left-[23px] sm:-left-[27px] top-3.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full ${item.color} border flex items-center justify-center text-[11px] font-bold shadow-xs z-10`}
                >
                  {item.step}
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 text-brand-electric flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0B1028]">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                </div>

                <p className="text-xs text-[#59647D] leading-relaxed mb-2">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5 text-[10px] text-[#0B1028]">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-50 border border-slate-200/70"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
