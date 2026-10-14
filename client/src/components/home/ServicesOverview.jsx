import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Globe,
    iconColor: "text-brand-electric",
    iconBg: "bg-blue-50 border-blue-200/60",
    dotColor: "bg-brand-electric",
    description:
      "High-performing, scalable websites and web applications tailored to your business goals.",
    capabilities: [
      "Custom Web Applications",
      "E-commerce Platforms",
      "CMS & Headless Architectures",
      "API Integrations & Pipelines",
    ],
    href: "/services/web-development",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    icon: Smartphone,
    iconColor: "text-rose-500",
    iconBg: "bg-rose-50 border-rose-200/60",
    dotColor: "bg-rose-500",
    description:
      "Native iOS & Android, and cross-platform apps engineered to engage users and drive commercial growth.",
    capabilities: [
      "iOS & Android Native Apps",
      "React Native & Flutter",
      "Gesture Fluid UI/UX",
      "App Store SLA Maintenance",
    ],
    href: "/services/mobile-app-development",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Solutions",
    icon: Cpu,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50 border-amber-200/60",
    dotColor: "bg-amber-500",
    description:
      "Tailored software to streamline operations, automate workflows, and solve unique enterprise challenges.",
    capabilities: [
      "Business Process Automation",
      "Data-Dense Dashboards",
      "Cloud Microservice Systems",
      "Legacy Code Modernization",
    ],
    href: "/services/custom-software-development",
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-particle-wave py-10 sm:py-14 text-[#0B1028] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-7 sm:mb-9 lg:mb-10">
          <div className="max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-electric text-xs font-bold uppercase tracking-wider mb-2.5 border border-blue-200/70 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              WHAT WE DO
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] tracking-tight leading-[1.15] font-display">
              Technology solutions that create{" "}
              <span className="text-gradient-brand">real value.</span>
            </h2>
          </div>

          <div className="max-w-md text-left md:text-right">
            <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed mb-2.5">
              From web and mobile applications to bespoke software, we combine strategy, design, and engineering to solve real business challenges.
            </p>
            <Link
              to="/services/web-development"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-electric hover:underline transition-colors group"
            >
              <span>Explore all services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Light Service Cards with Subtle Particle Wave Behind */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="card-liquid-fill relative flex flex-col justify-between p-5 sm:p-7 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-blue-300 hover:shadow-card hover:-translate-y-1 transition-all duration-300 group shadow-xs"
              >
                <div>
                  {/* Top Row: Icon container & decorative pill */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl ${service.iconBg} border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                    >
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>

                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#59647D]">
                      Service 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Bullet list with colored dots */}
                  <div className="space-y-2.5 mb-6">
                    {service.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-[#0B1028]"
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${service.dotColor} shrink-0`}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row with circular arrow link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#59647D] group-hover:text-[#0B1028] transition-colors">
                    Learn more
                  </span>
                  <Link
                    to={service.href}
                    className="w-9 h-9 rounded-full bg-brand-electric text-white hover:bg-blue-700 flex items-center justify-center transition-all duration-200 transform group-hover:scale-110 shadow-xs"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
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
