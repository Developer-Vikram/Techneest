import { Link } from "react-router-dom";
import {
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  WifiOff,
  Fingerprint,
  Activity,
  Bell,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import SectionHeading from "../components/common/SectionHeading";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projects";

export default function MobileDevelopment() {
  const service = servicesData.mobileAppDevelopment;
  const mobileProjects = projectsData.filter((p) => p.categoryKey === "mobile");

  return (
    <>
      <SEO
        title="Mobile App Development | Techneest"
        description="Native iOS, Android, and cross-platform React Native/Flutter applications engineered for gesture-smooth performance, offline data sync, and App Store success."
        canonicalPath="/services/mobile-app-development"
      />

      {/* ✅ Top spacing — navbar ke neeche clearly visible */}
      <div className="pt-28 sm:pt-32">
        {/* =========================================================================
            SECTION 1: Hero
            ========================================================================= */}
        <section className="relative pt-4 sm:pt-6 pb-10 sm:pb-12 lg:pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge variant="blue">{service.eyebrow}</Badge>
                </div>

                <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.12] font-display break-words">
                  Fluid Mobile Experiences Crafted for{" "}
                  <span className="text-gradient-brand">
                    iOS, Android & Beyond
                  </span>
                </h1>

                <p className="text-[13px] xs:text-sm sm:text-base lg:text-lg text-[#59647D] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {service.heroDescription}
                </p>

                {/* CTAs */}
                <div className="flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl shadow-lg shadow-blue-500/15 w-full xs:w-auto justify-center"
                  >
                    Build Your Mobile App
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    size="md"
                    className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl w-full xs:w-auto justify-center"
                  >
                    Explore Mobile Work
                  </Button>
                </div>

                {/* Capability Badges */}
                <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 text-[10px] xs:text-[11px] sm:text-xs text-[#0B1028] font-semibold">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1 sm:gap-1.5">
                    <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric" />
                    120Hz Fluid Gesture
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1 sm:gap-1.5">
                    <WifiOff className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet" />
                    Offline-First Sync
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 sm:gap-1.5">
                    <Fingerprint className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                    Biometric Security
                  </span>
                </div>
              </div>

              {/* Right Visual: Smartphone Mockup */}
              <div className="lg:col-span-5 relative flex justify-center" data-aos="fade-left">
                <div className="relative w-full max-w-[250px] xs:max-w-[280px] sm:max-w-[300px] rounded-[28px] xs:rounded-[32px] sm:rounded-[36px] p-2 sm:p-3 bg-[#0B1028] border-[3px] sm:border-4 border-slate-800 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 xs:w-20 h-2.5 sm:h-3.5 bg-slate-900 rounded-full z-20" />

                  {/* Phone Screen */}
                  <div className="relative rounded-[22px] xs:rounded-[26px] sm:rounded-[28px] overflow-hidden bg-white text-[#0B1028] p-2.5 xs:p-3 sm:p-4 pt-6 sm:pt-7 space-y-2.5 sm:space-y-3.5 border border-slate-100">
                    {/* Screen Header */}
                    <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-slate-100 gap-2">
                      <div className="min-w-0">
                        <div className="text-[8px] xs:text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                          Mobile App Engine
                        </div>
                        <div className="text-[10px] xs:text-[11px] sm:text-xs font-bold text-[#0B1028] truncate">
                          Techneest SDK
                        </div>
                      </div>
                      <div className="w-5 h-5 xs:w-6 xs:h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[9px] xs:text-[10px] font-bold shrink-0">
                        99%
                      </div>
                    </div>

                    {/* App Card */}
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-[#0B1028] text-white space-y-1 sm:space-y-1.5">
                      <div className="flex items-center justify-between text-[10px] xs:text-xs gap-2">
                        <span className="text-brand-cyan font-semibold text-[9px] xs:text-[10px] sm:text-[11px] truncate">
                          Active Sync Queue
                        </span>
                        <span className="text-emerald-400 text-[8px] xs:text-[9px] font-bold shrink-0">
                          Online
                        </span>
                      </div>
                      <div className="text-[9px] xs:text-[10px] sm:text-[11px] text-slate-300 leading-relaxed">
                        Zero data loss offline SQLite with delta sync.
                      </div>
                    </div>

                    {/* Feature Pills */}
                    <div className="space-y-1 sm:space-y-1.5">
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 sm:gap-1.5 text-[#0B1028] text-[9px] xs:text-[10px] sm:text-[11px] truncate">
                          <Fingerprint className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric shrink-0" />
                          FaceID
                        </span>
                        <span className="text-[8px] xs:text-[9px] text-emerald-600 font-bold shrink-0">
                          Active
                        </span>
                      </div>
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 sm:gap-1.5 text-[#0B1028] text-[9px] xs:text-[10px] sm:text-[11px] truncate">
                          <Bell className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet shrink-0" />
                          Push Notifications
                        </span>
                        <span className="text-[8px] xs:text-[9px] text-emerald-600 font-bold shrink-0">
                          APNs
                        </span>
                      </div>
                      <div className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-2">
                        <span className="flex items-center gap-1 sm:gap-1.5 text-[#0B1028] text-[9px] xs:text-[10px] sm:text-[11px] truncate">
                          <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan shrink-0" />
                          Frame Render
                        </span>
                        <span className="text-[8px] xs:text-[9px] text-brand-electric font-bold shrink-0">
                          120 FPS
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Store Badge */}
                <div className="absolute -bottom-3 -right-2 sm:-right-3 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-2.5 max-w-[75%] xs:max-w-[70%]">
                  <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-blue-50 text-brand-electric shrink-0">
                    <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-[#0B1028] leading-tight">
                      App & Google Play
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#59647D]">
                      100% Approval
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Capabilities
            ========================================================================= */}
        <section className="py-10 sm:py-12 lg:py-16 bg-[#FFF5F8]/40 border-t border-rose-100/60">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="NATIVE & CROSS-PLATFORM"
              title="End-to-End Mobile Engineering Capabilities"
              gradientWord="Mobile Engineering"
              description="From single-codebase velocity to deep native hardware integration, we build apps that scale across millions of installs."
              align="center"
              className="mb-8 sm:mb-10 lg:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors shrink-0">
                      <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1028] group-hover:text-rose-500 transition-colors leading-snug">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-[11px] xs:text-xs sm:text-sm text-[#59647D] leading-relaxed mb-4 sm:mb-5">
                    {cap.description}
                  </p>

                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-slate-100">
                    {cap.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]"
                      >
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Tech Stack Matrix
            ========================================================================= */}
        <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="ARCHITECTURAL DECISION"
              title="Choosing the Right Mobile Tech Stack"
              gradientWord="Tech Stack"
              description="We help you weigh time-to-market, hardware access, and long-term maintenance costs to choose the ideal foundation."
              align="center"
              className="mb-8 sm:mb-10 lg:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Native */}
              <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1028] leading-snug">
                    Native Swift & Kotlin
                  </h3>
                  <Badge variant="blue">Pure Native</Badge>
                </div>
                <p className="text-[11px] xs:text-xs sm:text-sm text-[#59647D] leading-relaxed">
                  Best when your application requires low-level Bluetooth LE
                  communication, 3D graphics, continuous background audio
                  processing, or platform-exclusive hardware features.
                </p>
                <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-200">
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Strengths:
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Direct access to Apple CoreML and Android NDK
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Instant Day 1 support for new annual OS releases
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Uncapped 120Hz ProMotion animation efficiency
                    </span>
                  </div>
                </div>
              </div>

              {/* Cross-platform */}
              <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1028] leading-snug">
                    React Native & Flutter
                  </h3>
                  <Badge variant="violet">High Velocity</Badge>
                </div>
                <p className="text-[11px] xs:text-xs sm:text-sm text-[#59647D] leading-relaxed">
                  Best for business apps, marketplaces, and SaaS companion
                  utilities where rapid feature velocity and shared business
                  logic between iOS and Android cut maintenance costs by 40%.
                </p>
                <div className="space-y-1.5 sm:space-y-2 pt-2 border-t border-slate-200">
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Key Strengths:
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      90%+ shared code between iOS and Android
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Instant over-the-air (OTA) critical bug fix rollouts
                    </span>
                  </div>
                  <div className="flex items-start gap-1.5 sm:gap-2 text-[11px] xs:text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      Faster feature parity for dual-platform launches
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Featured Mobile Projects
            ========================================================================= */}
        {mobileProjects.length > 0 && (
          <section className="py-10 sm:py-12 lg:py-16 bg-[#F8FAFD] border-t border-slate-100">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="MOBILE SHOWCASES"
                title="Featured Mobile Applications in Production"
                gradientWord="in Production"
                description="Real apps built for resilience, ergonomics, and seamless cloud connectivity."
                align="center"
                className="mb-8 sm:mb-10 lg:mb-12"
              />

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {mobileProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <img
                        src={proj.image}
                        alt={proj.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3.5 sm:p-5 lg:p-6">
                      <div className="text-[10px] xs:text-[11px] sm:text-xs font-semibold text-rose-500 mb-0.5 sm:mb-1 truncate">
                        {proj.industry}
                      </div>
                      <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#0B1028] mb-1 sm:mb-1.5 leading-snug line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-[11px] xs:text-xs text-[#59647D] line-clamp-2 mb-3 sm:mb-4 leading-relaxed">
                        {proj.summary}
                      </p>
                      <Link
                        to={`/work/${proj.slug}`}
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] xs:text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
                      >
                        <span className="truncate">View Case Study</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <FAQSection
          faqs={service.faqs}
          title="Frequently Asked Questions About Mobile Development"
          description="Everything you need to know about native versus cross-platform stacks, App Store reviews, and post-launch SLAs."
        />

        {/* CTA */}
        <CTASection
          title="Ready to Build a Category-Leading Mobile App?"
          description="Schedule a product scoping call to review your user flows, hardware requirements, and release milestones with our mobile architects."
          primaryCtaText="Start Your Mobile App"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}