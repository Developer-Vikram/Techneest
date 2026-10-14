import {
  Rocket,
  Users2,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";

const models = [
  {
    id: "turnkey",
    title: "Full-Cycle Product Engineering",
    eyebrow: "NEW PRODUCTS & REBUILDS",
    description:
      "From blank canvas to production launch. We take your product concept, establish the architectural blueprint, design intuitive interfaces, and build the entire stack through milestone-based agile sprints.",
    icon: Rocket,
    bestFor: "Startups, mid-market companies & businesses launching new web or mobile solutions.",
    features: [
      "Discovery & architectural blueprinting",
      "Full-stack web, mobile & API engineering",
      "Bi-weekly live staging releases",
      "Cloud deployment & App Store launches",
      "100% intellectual property transfer",
    ],
    timeline: "Typically 6–16 weeks",
    cta: "Launch a New Product",
    highlight: true,
  },
  {
    id: "dedicated",
    title: "Dedicated Engineering Pod",
    eyebrow: "TEAM AUGMENTATION",
    description:
      "Embed senior Techneest engineers directly into your product organization. Scale velocity instantly without the overhead of months of recruiting, hiring, and onboarding.",
    icon: Users2,
    bestFor: "Engineering leaders needing dedicated senior developers to accelerate backlogs.",
    features: [
      "Direct technical lead and senior devs",
      "Full integration into your Jira/Slack",
      "Flexible monthly engagement models",
      "Type-safe, test-covered code output",
      "Immediate ramp-up within 1–2 weeks",
    ],
    timeline: "Monthly sprint cycles",
    cta: "Augment Your Team",
    highlight: false,
  },
  {
    id: "modernization",
    title: "Modernization & Performance Sprints",
    eyebrow: "LEGACY EVOLUTION",
    description:
      "Tackle mounting technical debt, slow database queries, or legacy codebases. We perform targeted refactoring, strangler fig migrations, and speed optimizations without disrupting live users.",
    icon: RefreshCw,
    bestFor: "Established systems suffering from performance bottlenecks or aging tech stacks.",
    features: [
      "Comprehensive architecture & security audit",
      "Core Web Vitals & database index tuning",
      "Zero-downtime cloud infrastructure migration",
      "Microservice extraction from monoliths",
      "Post-sprint latency benchmarks",
    ],
    timeline: "2–6 week targeted sprints",
    cta: "Modernize Existing Code",
    highlight: false,
  },
];

export default function EngagementModelsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-100 relative">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="COLLABORATION MODELS"
            title="Flexible Ways to Partner with Techneest"
            gradientWord="Partner with Techneest"
            description="Whether launching a new digital product from scratch, accelerating an existing roadmap, or modernizing legacy infrastructure, we offer structured collaboration models."
            align="center"
            className="mb-10 sm:mb-12"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {models.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                data-aos="fade-up"
                data-aos-delay={idx * 80}
                className={`card-liquid-fill p-5 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
                  m.highlight
                    ? "bg-gradient-to-b from-blue-50/50 via-white to-white border-blue-300 shadow-md ring-1 ring-blue-200"
                    : "bg-[#F8FAFD] border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-card"
                }`}
              >
                {m.highlight && (
                  <div className="absolute top-0 right-0 bg-brand-electric text-white text-[10px] font-extrabold uppercase tracking-wider py-1 px-3 rounded-bl-xl shadow-xs">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        m.highlight
                          ? "bg-brand-electric text-white shadow-md shadow-blue-500/20"
                          : "bg-white text-brand-electric shadow-xs border border-slate-100"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-electric">
                        {m.eyebrow}
                      </span>
                      <h3 className="text-lg font-bold text-[#0B1028] leading-tight">
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed mb-4">
                    {m.description}
                  </p>

                  <div className="p-3 rounded-xl bg-white/80 border border-slate-100 mb-5 text-xs">
                    <span className="font-bold text-[#0B1028]">Best for: </span>
                    <span className="text-[#59647D]">{m.bestFor}</span>
                  </div>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      What's Included:
                    </span>
                    {m.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-xs text-[#0B1028] font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Typical Cadence:</span>
                    <span className="font-bold text-[#0B1028]">{m.timeline}</span>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                      m.highlight
                        ? "btn-fill-primary shadow-sm"
                        : "bg-white text-[#0B1028] border border-slate-200 hover:border-brand-electric hover:text-brand-electric"
                    }`}
                  >
                    <span>{m.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
