import {
  ShieldCheck,
  BarChart3,
  Users,
  Sparkles,
  CheckCircle2,
  Cpu,
  Lock,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Badge from "../components/common/Badge";
import SectionHeading from "../components/common/SectionHeading";
import AnimatedCounter from "../components/common/AnimatedCounter";
import ProcessTimeline from "../components/home/ProcessTimeline";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import { companyData } from "../data/companyData";

const aboutFaqs = [
  {
    question: "How is the engineering team structured for each client engagement?",
    answer:
      "Every project is led by a dedicated Technical Lead who acts as the primary architectural point of contact. Supporting them are senior frontend, backend, or mobile developers matched specifically to your technology stack. We never assign junior engineers without senior supervision.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs) before discussing project details?",
    answer:
      "Yes. We prioritize intellectual property protection from the very first conversation. We execute mutual NDAs prior to reviewing proprietary specifications, database schemas, or business roadmaps.",
  },
  {
    question: "How do you accommodate different time zones and ensure smooth communication?",
    answer:
      "Our engineering teams maintain core 4-to-6 hour overlapping windows with clients across North America, Europe, and Asia-Pacific. We combine real-time synchronous standups with rich asynchronous updates via Slack, Teams, and recorded video walkthroughs.",
  },
  {
    question: "Can our existing in-house developers collaborate in the same repositories?",
    answer:
      "Absolutely. We frequently operate as an integrated pod alongside existing engineering teams. We follow your Git branch protection policies, PR review standards, and CI/CD pipelines seamlessly.",
  },
  {
    question: "How do you handle scope modifications or evolving product requirements?",
    answer:
      "We operate in bi-weekly agile sprint cadences. If requirements evolve, we adjust the upcoming sprint backlog collaboratively. Features of equivalent complexity can be swapped into the sprint without incurring contractual friction.",
  },
];

const principles = [
  {
    title: "Zero-Jank Engineering",
    description: "Every UI interaction, gesture, and transition is engineered to maintain a fluid 60/120fps with zero layout shifting.",
    icon: Sparkles,
  },
  {
    title: "100% Client Code Ownership",
    description: "All repositories, cloud infrastructure scripts, and design tokens belong entirely to your company from day one.",
    icon: Lock,
  },
  {
    title: "No Middlemen, Direct Access",
    description: "Collaborate directly with senior frontend, backend, and mobile architects in real-time communication channels.",
    icon: Users,
  },
  {
    title: "Maintainable Type Safety",
    description: "We enforce strict TypeScript typing and deterministic API contracts to eliminate entire categories of production bugs.",
    icon: Cpu,
  },
];

const teamHighlights = [
  {
    name: "Engineering Leadership",
    role: "Senior Systems Architects & Tech Leads",
    description: "Decades of combined experience designing high-throughput distributed microservices and enterprise web applications.",
  },
  {
    name: "Mobile Specialists",
    role: "Native Swift, Kotlin & Cross-Platform Leads",
    description: "Dedicated mobile engineers specializing in offline caching, Bluetooth hardware sync, and App Store guidelines.",
  },
  {
    name: "Frontend & Motion Designers",
    role: "Design System & Performance Engineers",
    description: "Obsessed with micro-interactions, Core Web Vitals, accessible semantic structure, and responsive fluidity.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Techneest"
        description="Learn about Techneest's engineering culture, mission, core values, and collaborative software delivery model."
        canonicalPath="/about"
      />

      <div className="pt-20 sm:pt-24">
        {/* About Hero */}
        <section className="pt-6 pb-10 sm:pb-14 bg-white relative overflow-hidden">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <Badge variant="blue">ABOUT TECHNEEST</Badge>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.12] font-display">
                Engineering the Future of{" "}
                <span className="text-gradient-brand">Digital Business</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-[#59647D] leading-relaxed">
                We are a technology partner built on engineering rigor, transparent collaboration,
                and a commitment to building software that powers real business growth.
              </p>
            </div>

            {/* Team Workspace Photography Banner */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[21/9] max-h-[460px] w-full">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                alt="Techneest senior engineering and design team collaborating in modern technology office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Mission & Story Narrative */}
        <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center">
                <Badge variant="cyan" className="mb-2">
                  OUR MISSION
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1028] font-display">
                  Building Software that Endures
                </h2>
              </div>

              <div className="prose prose-slate text-xs sm:text-sm text-[#59647D] leading-relaxed space-y-3.5">
                <p>
                  In a software industry cluttered with superficial prototypes and hype-driven cycles,
                  Techneest was established with a clear thesis: ambitious businesses deserve technology partners
                  who take engineering craftsmanship seriously.
                </p>
                <p>
                  Whether designing a high-conversion web platform, crafting a consumer mobile app,
                  or developing a multi-tenant enterprise system, we reject the false dilemma between speed
                  and code quality. By utilizing proven architectures, strict type systems, and automated testing,
                  we deliver fast initial releases while ensuring that your codebase remains a sustainable asset
                  for years to come.
                </p>
                <p>
                  We do not outsource work to anonymous brokers. When you partner with Techneest, you communicate
                  directly with senior software architects who understand both your technical roadmap and your commercial objectives.
                </p>
              </div>

              {/* Key Stats Bar */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-center">
                {companyData.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="text-xl sm:text-2xl font-extrabold text-[#0B1028] font-display">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="text-[11px] text-[#59647D] font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Grid */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="OUR VALUES"
              title="Principles that Guide Every Engineering Decision"
              gradientWord="Every Engineering Decision"
              description="These four core pillars inform how we write code, communicate with partners, and measure project success."
              align="center"
              className="mb-10 sm:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyData.values.map((val, idx) => {
                const iconMap = {
                  ShieldCheck: ShieldCheck,
                  BarChart3: BarChart3,
                  Users: Users,
                  Sparkles: Sparkles,
                };
                const Icon = iconMap[val.icon] || CheckCircle2;

                return (
                  <div
                    key={val.title}
                    data-aos="fade-up"
                    data-aos-delay={idx * 80}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-electric flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B1028] mb-1.5">
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#59647D] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Four-Step Process Section */}
        <ProcessTimeline />

        {/* Engineering Philosophy Cards */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="ENGINEERING RIGOR"
              title="How We Maintain Uncompromising Quality"
              gradientWord="Uncompromising Quality"
              description="Standards implemented across every repository, sprint review, and cloud release."
              align="center"
              className="mb-10 sm:mb-12"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {principles.map((pr, idx) => {
                const Icon = pr.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200 shadow-sm transition-all"
                  >
                    <Icon className="w-5 h-5 text-brand-electric mb-3" />
                    <h4 className="text-sm font-bold text-[#0B1028] mb-1.5">
                      {pr.title}
                    </h4>
                    <p className="text-xs text-[#59647D] leading-relaxed">
                      {pr.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Engineering Teams & Specializations */}
        <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="CROSS-FUNCTIONAL EXPERTISE"
              title="Senior Engineering Disciplines"
              gradientWord="Disciplines"
              description="Our teams bring deep specialized domain mastery across web platforms, mobile engines, and distributed clouds."
              align="center"
              className="mb-10 sm:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {teamHighlights.map((team, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-electric">
                    {team.role}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1028] mt-1.5 mb-2">
                    {team.name}
                  </h3>
                  <p className="text-xs text-[#59647D] leading-relaxed">
                    {team.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About & Collaboration FAQs */}
        <FAQSection
          faqs={aboutFaqs}
          title="Frequently Asked Questions About Partnering With Us"
          eyebrow="TRANSPARENT ANSWERS"
          description="Everything you need to know about our team structure, NDA protection, time zone overlap, and collaboration practices."
        />

        <CTASection
          title="Ready to Partner with Techneest?"
          description="Let's discuss how our senior engineers can turn your product vision into a scalable, high-performance reality."
          primaryCtaText="Start a Project"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}
