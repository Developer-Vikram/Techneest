import {
  ArrowUpRight,
  BarChart3,
  Clock,
  Cpu,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const pillars = [
  {
    title: "Business-First Thinking",
    description:
      "We build software to drive commercial outcomes. Every architectural and design choice is weighed against user adoption, efficiency, and long-term business ROI.",
    icon: BarChart3,
    color: "text-brand-electric",
    bg: "bg-blue-500/10",
    stat: "ROI Driven",
  },
  {
    title: "Reliable Engineering",
    description:
      "We apply rigorous type safety, modular component boundaries, automated regression test suites, and zero-downtime deployment workflows to ensure uptime.",
    icon: ShieldCheck,
    color: "text-brand-cyan",
    bg: "bg-cyan-500/10",
    stat: "99.9% Uptime",
  },
  {
    title: "Scalable Architecture",
    description:
      "Avoid costly future rewrites. Our architectures support modular micro-services, edge caching, and elastic cloud databases that scale smoothly with your growth.",
    icon: Cpu,
    color: "text-brand-violet",
    bg: "bg-purple-500/10",
    stat: "Cloud Native",
  },
  {
    title: "Thoughtful User Experiences",
    description:
      "Software should feel natural, responsive, and intuitive. We craft accessible interfaces, gesture-fluid animations, and crystal-clear visual hierarchy.",
    icon: Sparkles,
    color: "text-brand-warm",
    bg: "bg-orange-500/10",
    stat: "Core Web Vitals 95+",
  },
  {
    title: "Transparent Collaboration",
    description:
      "No corporate middlemen or vague sprint reports. You get direct access to engineering leads via shared channels, live staging demos, and collaborative boards.",
    icon: Users,
    color: "text-brand-electric",
    bg: "bg-blue-500/10",
    stat: "Bi-Weekly Demos",
  },
  {
    title: "Long-Term Product Support",
    description:
      "Our partnership continues well past launch day. We provide proactive security patch management, OS compatibility updates, and scalable feature sprints.",
    icon: Clock,
    color: "text-brand-cyan",
    bg: "bg-cyan-500/10",
    stat: "100% IP Autonomy",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="md:py-6 sm:py-6 bg-white relative">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="THE TECHNEEST ADVANTAGE"
            title="Engineering Foundations Built for Endurance"
            gradientWord="Endurance"
            description="How our disciplined approach to software craft turns ambitious technical roadmaps into resilient, maintainable realities."
            align="center"
            className="mb-10 sm:mb-12"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="card-liquid-fill p-5 sm:p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-11 h-11 rounded-xl ${pillar.bg} ${pillar.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-slate-200 text-[#59647D] group-hover:text-brand-electric group-hover:border-blue-200 transition-colors">
                      {pillar.stat}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B1028] mb-2 group-hover:text-brand-electric transition-colors flex items-center justify-between">
                    <span>{pillar.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-brand-electric shrink-0" />
                  </h3>

                  <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
