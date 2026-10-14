import { ArrowRight, Sparkles } from "lucide-react";
import Button from "../common/Button";

const experts = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
];

export default function CTASection({
  title = "Have a project in mind?",
  description = "Let's discuss how we can turn your ideas into a powerful digital solution.",
  primaryCtaText = "Schedule a call",
  primaryCtaLink = "/contact",
}) {
  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          data-aos="fade-up"
          className="relative rounded-3xl bg-[#0B1028]/85 backdrop-blur-xl text-white p-7 sm:p-10 lg:p-12 overflow-hidden border border-white/15 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
        >
          {/* Vibrant Corner Angled Geometry matching reference */}
          <div className="absolute top-0 left-0 w-56 h-56 bg-gradient-to-br from-brand-electric via-brand-cyan to-transparent opacity-40 pointer-events-none rounded-br-[120px] -z-0" />
          <div className="absolute top-0 right-0 bottom-0 w-72 bg-gradient-to-l from-brand-violet via-brand-magenta/30 to-transparent opacity-40 pointer-events-none -z-0" />

          {/* Left Text */}
          <div className="relative z-10 max-w-2xl text-left space-y-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-[11px] font-bold uppercase tracking-wider border border-white/10">
              <Sparkles className="w-3 h-3" />
              LET'S BUILD TOGETHER
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.15] font-display text-white">
              {title.includes("project") ? (
                <>
                  Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-blue-400">project</span> in mind?
                </>
              ) : (
                title
              )}
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>

          {/* Right Action Row with Schedule CTA & Team Avatars matching reference */}
          <div className="relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full lg:w-auto">
            <Button
              to={primaryCtaLink}
              variant="white"
              size="md"
              icon={ArrowRight}
              iconPosition="right"
              className="btn-liquid-cyan !py-3.5 !px-7 !rounded-xl font-bold shadow-xl shrink-0 text-center justify-center cursor-pointer"
            >
              {primaryCtaText}
            </Button>

            {/* Talk to our experts pill */}
            <div className="flex items-center gap-3 p-2.5 px-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shrink-0">
              <div className="flex -space-x-2">
                {experts.map((exp, i) => (
                  <img
                    key={i}
                    src={exp}
                    alt="Senior Engineering Expert"
                    className="w-8 h-8 rounded-full border-2 border-[#0B1028] object-cover"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white">
                  Talk to our experts
                </div>
                <div className="text-[10px] text-slate-300">
                  No pressure, just ideas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
