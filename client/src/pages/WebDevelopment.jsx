import { Link } from "react-router-dom";
import {
  Zap,
  ShieldCheck,
  Search,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Code2,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import SectionHeading from "../components/common/SectionHeading";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projects";

export default function WebDevelopment() {
  const service = servicesData.webDevelopment;
  const webProjects = projectsData.filter((p) => p.categoryKey === "web");

  return (
    <>
      <SEO
        title="Web Development Services | Techneest"
        description="Custom high-performance web applications, headless commerce platforms, and modern frontend architectures engineered for speed, SEO, and conversion."
        canonicalPath="/services/web-development"
      />

      {/* ✅ Top spacing — navbar ke neeche clearly visible */}
      <div className="pt-28 sm:pt-32">
        {/* =========================================================================
            SECTION 1: Hero
            ========================================================================= */}
        <section className="relative pt-4 sm:pt-6 pb-10 sm:pb-12 lg:pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-1/3 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge variant="cyan">{service.eyebrow}</Badge>
                </div>

                <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.12] font-display break-words">
                  Modern Web Architectures that Turn Complexity into{" "}
                  <span className="text-gradient-brand">Performance</span>
                </h1>

                <p className="text-[13px] xs:text-sm sm:text-base lg:text-lg text-[#59647D] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {service.heroDescription}
                </p>

                {/* CTAs — full-width stack mobile pe */}
                <div className="flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl shadow-lg shadow-blue-500/15 w-full xs:w-auto justify-center"
                  >
                    Start Your Web Project
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    size="md"
                    className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl w-full xs:w-auto justify-center"
                  >
                    View Web Portfolio
                  </Button>
                </div>

                {/* Performance Pills */}
                <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 text-[10px] xs:text-[11px] sm:text-xs text-[#0B1028] font-semibold">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 sm:gap-1.5">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lighthouse 98+ Standard
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1 sm:gap-1.5">
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric" />
                    Sub-1s LCP Threshold
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1 sm:gap-1.5">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet" />
                    WCAG AA Accessible
                  </span>
                </div>
              </div>

              {/* Right Hero Visual: Terminal Mockup */}
              <div className="lg:col-span-5 relative" data-aos="fade-left">
                <div className="relative rounded-xl sm:rounded-2xl bg-[#0B1028] border border-white/10 shadow-2xl p-3 sm:p-4 lg:p-5 text-white overflow-hidden">
                  {/* Browser Window Controls */}
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10 mb-2.5 sm:mb-3.5 gap-2">
                    <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[8px] xs:text-[9px] sm:text-[10px] font-mono text-slate-400 bg-white/5 px-1.5 sm:px-2.5 py-0.5 rounded border border-white/5 truncate max-w-[55%]">
                      techneest.app/web-vitals
                    </div>
                    <div className="w-3 sm:w-5 shrink-0" />
                  </div>

                  {/* Code & Performance */}
                  <div className="space-y-2 sm:space-y-3 font-mono text-[10px] xs:text-[11px] sm:text-xs">
                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/5 space-y-1 sm:space-y-1.5">
                      <div className="text-brand-cyan text-[9px] sm:text-[10px] font-bold">
                        // CORE WEB VITALS METRICS
                      </div>
                      <div className="flex justify-between text-slate-300 text-[9px] xs:text-[10px] sm:text-[11px] gap-2">
                        <span className="truncate">LCP</span>
                        <span className="text-emerald-400 font-bold shrink-0">
                          0.62s [Fast]
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-300 text-[9px] xs:text-[10px] sm:text-[11px] gap-2">
                        <span className="truncate">INP</span>
                        <span className="text-emerald-400 font-bold shrink-0">
                          38ms [Good]
                        </span>
                      </div>
                      <div className="flex justify-between text-slate-300 text-[9px] xs:text-[10px] sm:text-[11px] gap-2">
                        <span className="truncate">CLS</span>
                        <span className="text-emerald-400 font-bold shrink-0">
                          0.00 [Zero]
                        </span>
                      </div>
                    </div>

                    <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-brand-electric/15 border border-brand-electric/25 space-y-1 sm:space-y-1.5">
                      <div className="text-brand-electric text-[9px] sm:text-[10px] font-bold">
                        // COMPONENT ARCHITECTURE
                      </div>
                      <div className="text-slate-300 text-[9px] xs:text-[10px] sm:text-[11px] leading-relaxed break-all">
                        &lt;EdgeHydrationProvider&gt;
                        <br />
                        &nbsp;&nbsp;&lt;ServerStorefront /&gt;
                        <br />
                        &lt;/EdgeHydrationProvider&gt;
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-slate-400 pt-1 sm:pt-1.5 border-t border-white/10 gap-2">
                      <span className="flex items-center gap-1 sm:gap-1.5 text-emerald-400 truncate">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        Zero Type Errors
                      </span>
                      <span className="shrink-0">TS 5.8</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-3 -left-2 sm:-left-3 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-2.5 max-w-[80%]">
                  <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-emerald-50 text-emerald-600 shrink-0">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-[#0B1028] leading-tight">
                      100% Core Web Vitals
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#59647D]">
                      Edge CDN Hydrated
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
        <section className="py-10 sm:py-12 lg:py-16 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="WEB ENGINEERING SOLUTIONS"
              title="Tailored Solutions for Every Web Challenge"
              gradientWord="Every Web Challenge"
              description="Whether building enterprise single-page apps or headless commerce platforms, we engineer for resilience, speed, and convertibility."
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
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-blue-50 text-brand-electric group-hover:bg-brand-electric group-hover:text-white transition-colors shrink-0">
                      <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors leading-snug">
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
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan shrink-0 mt-0.5" />
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
            SECTION 3: Engineering Standards
            ========================================================================= */}
        <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge variant="blue">QUALITY STANDARDS</Badge>
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] leading-tight font-display break-words">
                  High-Performance Standards Built into Every Commit
                </h2>
                <p className="text-[11px] xs:text-xs sm:text-sm text-[#59647D] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We treat performance, accessibility, and search engine
                  discoverability not as an afterthought, but as fundamental
                  architectural constraints.
                </p>

                <div className="space-y-3 sm:space-y-3.5 pt-1 text-left">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1028] leading-snug">
                        Core Web Vitals Obsession
                      </h4>
                      <p className="text-[11px] xs:text-xs text-[#59647D] mt-0.5 leading-relaxed">
                        Guaranteed sub-second LCP, zero layout jitter, and
                        instant 50ms INP response.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-blue-50 text-brand-electric shrink-0 mt-0.5">
                      <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1028] leading-snug">
                        Technical SEO & Structured Schema
                      </h4>
                      <p className="text-[11px] xs:text-xs text-[#59647D] mt-0.5 leading-relaxed">
                        Semantic HTML5, automated XML sitemaps, OpenGraph cards,
                        and Schema.org microdata.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-purple-50 text-brand-violet shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1028] leading-snug">
                        WCAG 2.1 AA Accessibility
                      </h4>
                      <p className="text-[11px] xs:text-xs text-[#59647D] mt-0.5 leading-relaxed">
                        High color contrast ratios, screen reader ARIA
                        landmarks, and keyboard focus traps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standards Visual */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[16/10] sm:aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                    alt="Web development code review on high resolution laptop display"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028]/80 via-transparent to-transparent flex items-end p-3 sm:p-4 lg:p-6">
                    <div className="text-white min-w-0">
                      <div className="text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-brand-cyan uppercase tracking-wider mb-0.5 sm:mb-1">
                        Deployment Pipeline
                      </div>
                      <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold leading-snug">
                        Continuous Integration with Automated Lighthouse Audits
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Featured Web Projects
            ========================================================================= */}
        {webProjects.length > 0 && (
          <section className="py-10 sm:py-12 lg:py-16 bg-[#F8FAFD] border-t border-slate-100">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="PROVEN OUTCOMES"
                title="Featured Web Development Showcases"
                gradientWord="Showcases"
                description="Explore real-world web platforms engineered with our high-speed architectural patterns."
                align="center"
                className="mb-8 sm:mb-10 lg:mb-12"
              />

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {webProjects.map((proj) => (
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
                      <div className="text-[10px] xs:text-[11px] sm:text-xs font-semibold text-brand-electric mb-0.5 sm:mb-1 truncate">
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
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] xs:text-xs font-semibold text-brand-electric hover:text-blue-700 transition-colors"
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
          title="Frequently Asked Questions About Web Development"
          description="Everything you need to know about our web engineering stack, development timeline, and Core Web Vitals guarantees."
        />

        {/* CTA */}
        <CTASection
          title="Ready to Build a High-Performance Web Platform?"
          description="Schedule a technical architecture session with our engineering leads to review your requirements, timelines, and technical stack."
          primaryCtaText="Start Your Web Project"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}