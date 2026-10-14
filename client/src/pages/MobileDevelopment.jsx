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

      <div className="pt-20 sm:pt-24">
        {/* =========================================================================
            SECTION 1: Distinct Mobile Hero with Smartphone Mockup Staging
            ========================================================================= */}
        <section className="relative pt-6 pb-12 sm:pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-rose-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <Badge variant="blue">{service.eyebrow}</Badge>

                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.1] font-display">
                  Fluid Mobile Experiences Crafted for{" "}
                  <span className="text-gradient-brand">iOS, Android & Beyond</span>
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-[#59647D] leading-relaxed max-w-2xl">
                  {service.heroDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    className="!py-3 !px-6 !rounded-xl shadow-lg shadow-blue-500/15"
                  >
                    Build Your Mobile App
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    size="md"
                    className="!py-3 !px-6 !rounded-xl"
                  >
                    Explore Mobile Work
                  </Button>
                </div>

                {/* Mobile Capability Badges */}
                <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-[#0B1028] font-semibold">
                  <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-brand-electric" />
                    120Hz Fluid Gesture Physics
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1.5">
                    <WifiOff className="w-3.5 h-3.5 text-brand-violet" />
                    Offline-First Local Sync
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                    <Fingerprint className="w-3.5 h-3.5 text-emerald-600" />
                    Biometric Keychain Security
                  </span>
                </div>
              </div>

              {/* Right Mobile Visual: Smartphone Interface Mockup */}
              <div className="lg:col-span-5 relative flex justify-center" data-aos="fade-left">
                <div className="relative w-full max-w-[300px] rounded-[36px] p-3 bg-[#0B1028] border-4 border-slate-800 shadow-2xl">
                  {/* Speaker Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-slate-900 rounded-full z-20" />

                  {/* Inner Phone Screen */}
                  <div className="relative rounded-[28px] overflow-hidden bg-white text-[#0B1028] p-4 pt-7 space-y-3.5 border border-slate-100">
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                      <div>
                        <div className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                          Mobile App Engine
                        </div>
                        <div className="text-xs font-bold text-[#0B1028]">Techneest Mobile SDK</div>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                        99%
                      </div>
                    </div>

                    {/* Simulated App Card */}
                    <div className="p-3 rounded-xl bg-[#0B1028] text-white space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-brand-cyan font-semibold text-[11px]">Active Sync Queue</span>
                        <span className="text-emerald-400 text-[9px] font-bold">Online · Reconciled</span>
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Zero data loss offline SQLite database with delta sync reconciliation.
                      </div>
                    </div>

                    {/* App Feature Pill Rows */}
                    <div className="space-y-1.5">
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-medium">
                        <span className="flex items-center gap-1.5 text-[#0B1028] text-[11px]">
                          <Fingerprint className="w-3.5 h-3.5 text-brand-electric" />
                          FaceID & Biometrics
                        </span>
                        <span className="text-[9px] text-emerald-600 font-bold">Active</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-medium">
                        <span className="flex items-center gap-1.5 text-[#0B1028] text-[11px]">
                          <Bell className="w-3.5 h-3.5 text-brand-violet" />
                          Push Notifications
                        </span>
                        <span className="text-[9px] text-emerald-600 font-bold">APNs & FCM</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs font-medium">
                        <span className="flex items-center gap-1.5 text-[#0B1028] text-[11px]">
                          <Activity className="w-3.5 h-3.5 text-brand-cyan" />
                          Frame Render
                        </span>
                        <span className="text-[9px] text-brand-electric font-bold">120 FPS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Store Approval Badge */}
                <div className="absolute -bottom-3 -right-3 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-blue-50 text-brand-electric">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1028]">App Store & Google Play</div>
                    <div className="text-[10px] text-[#59647D]">100% Submission Approval</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 Core Mobile Capabilities
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#FFF5F8]/40 border-t border-rose-100/60">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="NATIVE & CROSS-PLATFORM"
              title="End-to-End Mobile Engineering Capabilities"
              gradientWord="Mobile Engineering"
              description="From single-codebase velocity to deep native hardware integration, we build apps that scale across millions of installs."
              align="center"
              className="mb-10 sm:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={cap.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 80}
                  className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1028] group-hover:text-rose-500 transition-colors">
                      {cap.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed mb-5">
                    {cap.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-slate-100">
                    {cap.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Native vs. Cross-Platform Strategy Matrix
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="ARCHITECTURAL DECISION"
              title="Choosing the Right Mobile Tech Stack"
              gradientWord="Tech Stack"
              description="We help you weigh time-to-market, hardware access, and long-term maintenance costs to choose the ideal foundation."
              align="center"
              className="mb-10 sm:mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1028]">Native Swift & Kotlin</h3>
                  <Badge variant="blue">Pure Native</Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed">
                  Best when your application requires low-level Bluetooth LE communication, 3D graphics, continuous background audio processing, or platform-exclusive hardware features.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Strengths:</div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric" />
                    Direct access to Apple CoreML and Android NDK
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric" />
                    Instant Day 1 support for new annual OS releases
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-electric" />
                    Uncapped 120Hz ProMotion animation efficiency
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0B1028]">React Native & Flutter</h3>
                  <Badge variant="violet">High Velocity</Badge>
                </div>
                <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed">
                  Best for business apps, marketplaces, and SaaS companion utilities where rapid feature velocity and shared business logic between iOS and Android cut maintenance costs by 40%.
                </p>
                <div className="space-y-2 pt-2 border-t border-slate-200">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Strengths:</div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet" />
                    90%+ shared code between iOS and Android
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet" />
                    Instant over-the-air (OTA) critical bug fix rollouts
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1028]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-violet" />
                    Faster feature parity for dual-platform launches
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Featured Mobile Case Studies
            ========================================================================= */}
        {mobileProjects.length > 0 && (
          <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="MOBILE SHOWCASES"
                title="Featured Mobile Applications in Production"
                gradientWord="in Production"
                description="Real apps built for resilience, ergonomics, and seamless cloud connectivity."
                align="center"
                className="mb-10 sm:mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {mobileProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                      <img
                        src={proj.image}
                        alt={proj.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-semibold text-rose-500 mb-1">
                        {proj.industry}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B1028] mb-1.5">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-[#59647D] line-clamp-2 mb-4">
                        {proj.summary}
                      </p>
                      <Link
                        to={`/work/${proj.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors"
                      >
                        <span>View Mobile Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mobile Specific FAQs */}
        <FAQSection
          faqs={service.faqs}
          title="Frequently Asked Questions About Mobile Development"
          description="Everything you need to know about native versus cross-platform stacks, App Store reviews, and post-launch SLAs."
        />

        {/* Mobile Inquiry CTA */}
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
