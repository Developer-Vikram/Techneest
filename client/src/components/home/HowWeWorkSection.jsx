import {
  Users,
  Eye,
  MessageSquare,
  CalendarCheck,
  KeyRound,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const workflowPillars = [
  {
    step: "01",
    title: "Direct Access to Technical Leads",
    subtitle: "Zero Middleman Telephone Game",
    description:
      "You communicate directly with the senior software engineers and architects building your product. Questions receive immediate technical clarity instead of getting filtered through non-technical account managers.",
    icon: Users,
    highlights: [
      "Direct Slack/Teams workspace",
      "Immediate architectural answers",
      "No communication latency",
    ],
  },
  {
    step: "02",
    title: "Live Staging Demos Every Two Weeks",
    subtitle: "Inspect Working Code in Real Time",
    description:
      "We believe in working software over static status reports. At the conclusion of every two-week sprint, we conduct interactive walkthroughs on private cloud staging environments so your team can test every feature.",
    icon: Eye,
    highlights: [
      "Live cloud staging preview URLs",
      "Hands-on team acceptance testing",
      "Continuous feedback incorporation",
    ],
  },
  {
    step: "03",
    title: "Milestone-Driven Scoping & Predictability",
    subtitle: "Deterministic Delivery Timelines",
    description:
      "Every project follows clearly defined milestones with explicit acceptance criteria. You always know what is being built, which milestone is next, and when deliverables will arrive.",
    icon: CalendarCheck,
    highlights: [
      "Documented functional scope",
      "Clear milestone acceptance gates",
      "Transparent budget accountability",
    ],
  },
  {
    step: "04",
    title: "Radical Transparency in Issue Tracking",
    subtitle: "Real-Time Shared Task Boards",
    description:
      "We share our task boards and sprint backlogs in real time. You have full visibility into tickets in progress, completed pull requests, and automated test suite results.",
    icon: MessageSquare,
    highlights: [
      "Real-time ticket visibility",
      "Automated CI/CD build statuses",
      "Clear blockers and solutions",
    ],
  },
  {
    step: "05",
    title: "Turnkey Handover & Full IP Autonomy",
    subtitle: "100% Code & Asset Ownership",
    description:
      "We build systems designed to be maintained with ease. When your project launches, we transfer full repository rights, cloud environment secrets, and architectural documentation with zero vendor lock-in.",
    icon: KeyRound,
    highlights: [
      "Clean Git repository handover",
      "Comprehensive deployment runbooks",
      "Team onboarding walkthroughs",
    ],
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white border-t border-slate-100 relative">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="TRANSPARENT COLLABORATION"
            title="How We Work: Client-Centric Engineering"
            gradientWord="Client-Centric"
            description="Our engineering workflow is built on direct communication, iterative working software, and absolute clarity from kickoff to deployment."
            align="center"
            className="mb-7 sm:mb-10 lg:mb-12"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {workflowPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.step}
                data-aos="fade-up"
                data-aos-delay={idx * 70}
                className={`p-4 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  idx === 0
                    ? "card-liquid-fill-dark bg-gradient-to-br from-[#0B1028] to-[#141D3B] text-white border-brand-navy shadow-lg"
                    : "card-liquid-fill bg-[#F8FAFD] border-slate-200 text-[#0B1028] hover:bg-white hover:border-blue-200 hover:shadow-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span
                      className={`text-[10px] sm:text-xs font-mono font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                        idx === 0
                          ? "bg-white/10 text-brand-cyan border border-white/10"
                          : "bg-blue-50 text-brand-electric border border-blue-100"
                      }`}
                    >
                      Step {p.step}
                    </span>
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center ${
                        idx === 0
                          ? "bg-white/10 text-brand-cyan"
                          : "bg-white text-brand-electric shadow-xs"
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3
                    className={`text-base sm:text-lg lg:text-xl font-bold mb-1 leading-snug ${
                      idx === 0 ? "text-white" : "text-[#0B1028]"
                    }`}
                  >
                    {p.title}
                  </h3>
                  <p
                    className={`text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2.5 sm:mb-3 ${
                      idx === 0 ? "text-brand-cyan" : "text-brand-electric"
                    }`}
                  >
                    {p.subtitle}
                  </p>

                  <p
                    className={`text-[11px] sm:text-sm leading-relaxed mb-4 sm:mb-6 ${
                      idx === 0 ? "text-slate-300" : "text-[#59647D]"
                    }`}
                  >
                    {p.description}
                  </p>
                </div>

                <div
                  className={`pt-3 sm:pt-4 border-t space-y-1.5 sm:space-y-2 ${
                    idx === 0 ? "border-white/10" : "border-slate-200"
                  }`}
                >
                  {p.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start sm:items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium"
                    >
                      <CheckCircle2
                        className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 mt-0.5 sm:mt-0 ${
                          idx === 0 ? "text-brand-cyan" : "text-emerald-500"
                        }`}
                      />
                      <span className={idx === 0 ? "text-slate-200" : "text-[#0B1028]"}>
                        {item}
                      </span>
                    </div>
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