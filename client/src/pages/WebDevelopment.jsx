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

      <div className="pt-20 sm:pt-24">
        {/* =========================================================================
            SECTION 1: Bespoke Web Dev Hero with Interactive Browser Terminal
            ========================================================================= */}
        <section className="relative pt-6 pb-12 sm:pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-1/3 w-[450px] h-[450px] bg-cyan-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <Badge variant="cyan">{service.eyebrow}</Badge>

                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.1] font-display">
                  Modern Web Architectures that Turn Complexity into{" "}
                  <span className="text-gradient-brand">Performance</span>
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
                    Start Your Web Project
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    size="md"
                    className="!py-3 !px-6 !rounded-xl"
                  >
                    View Web Portfolio
                  </Button>
                </div>

                {/* Performance Pill Indicators */}
                <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-[#0B1028] font-semibold">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Lighthouse 98+ Standard
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-brand-electric" />
                    Sub-1s LCP Threshold
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-violet" />
                    WCAG AA Accessible
                  </span>
                </div>
              </div>

              {/* Right Hero Visual: Interactive Mockup Terminal */}
              <div className="lg:col-span-5 relative" data-aos="fade-left">
                <div className="relative rounded-2xl bg-[#0B1028] border border-white/10 shadow-2xl p-4 sm:p-5 text-white overflow-hidden">
                  {/* Browser Window Controls */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3.5">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/5">
                      https://techneest.app/web-vitals
                    </div>
                    <div className="w-5" />
                  </div>

                  {/* High Tech Code & Performance Output */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5">
                      <div className="text-brand-cyan text-[10px] font-bold">
                        // CORE WEB VITALS METRICS
                      </div>
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Largest Contentful Paint (LCP)</span>
                        <span className="text-emerald-400 font-bold">0.62s [Fast]</span>
                      </div>
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Interaction to Next Paint (INP)</span>
                        <span className="text-emerald-400 font-bold">38ms [Good]</span>
                      </div>
                      <div className="flex justify-between text-slate-300 text-[11px]">
                        <span>Cumulative Layout Shift (CLS)</span>
                        <span className="text-emerald-400 font-bold">0.00 [Zero Shift]</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-brand-electric/15 border border-brand-electric/25 space-y-1.5">
                      <div className="text-brand-electric text-[10px] font-bold">
                        // COMPONENT ARCHITECTURE
                      </div>
                      <div className="text-slate-300 text-[11px] leading-relaxed">
                        &lt;EdgeHydrationProvider cache="stale-while-revalidate"&gt;
                        <br />
                        &nbsp;&nbsp;&lt;ServerStorefront catalog="global" /&gt;
                        <br />
                        &lt;/EdgeHydrationProvider&gt;
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1.5 border-t border-white/10">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Zero Runtime Type Errors
                      </span>
                      <span>TypeScript 5.8</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1028]">100% Core Web Vitals</div>
                    <div className="text-[10px] text-[#59647D]">Edge CDN Hydrated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 Core Capabilities Detailed Cards
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="WEB ENGINEERING SOLUTIONS"
              title="Tailored Solutions for Every Web Challenge"
              gradientWord="Every Web Challenge"
              description="Whether building enterprise single-page apps or headless commerce platforms, we engineer for resilience, speed, and convertibility."
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
                    <div className="p-2.5 rounded-xl bg-blue-50 text-brand-electric group-hover:bg-brand-electric group-hover:text-white transition-colors">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
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
            SECTION 3: Engineering Standards (SEO, Performance, Accessibility)
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <Badge variant="blue">QUALITY STANDARDS</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] leading-tight font-display">
                  High-Performance Standards Built into Every Commit
                </h2>
                <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed">
                  We treat performance, accessibility, and search engine discoverability
                  not as an afterthought, but as fundamental architectural constraints.
                </p>

                <div className="space-y-3.5 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1028]">Core Web Vitals Obsession</h4>
                      <p className="text-xs text-[#59647D] mt-0.5">
                        Guaranteed sub-second LCP, zero layout jitter, and instant 50ms INP response.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-brand-electric shrink-0 mt-0.5">
                      <Search className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1028]">Technical SEO & Structured Schema</h4>
                      <p className="text-xs text-[#59647D] mt-0.5">
                        Semantic HTML5, automated XML sitemaps, OpenGraph cards, and Schema.org microdata.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-50 text-brand-violet shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1028]">WCAG 2.1 AA Accessibility</h4>
                      <p className="text-xs text-[#59647D] mt-0.5">
                        High color contrast ratios, screen reader ARIA landmarks, and keyboard focus traps.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Standards Visual Photography */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                    alt="Web development code review on high resolution laptop display"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028]/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-[11px] font-semibold text-brand-cyan uppercase tracking-wider mb-1">
                        Deployment Pipeline
                      </div>
                      <div className="text-base sm:text-lg font-bold">
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
          <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="PROVEN OUTCOMES"
                title="Featured Web Development Showcases"
                gradientWord="Showcases"
                description="Explore real-world web platforms engineered with our high-speed architectural patterns."
                align="center"
                className="mb-10 sm:mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {webProjects.map((proj) => (
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
                      <div className="text-xs font-semibold text-brand-electric mb-1">
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-electric hover:text-blue-700 transition-colors"
                      >
                        <span>View Project Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Web Dev Specific FAQs */}
        <FAQSection
          faqs={service.faqs}
          title="Frequently Asked Questions About Web Development"
          description="Everything you need to know about our web engineering stack, development timeline, and Core Web Vitals guarantees."
        />

        {/* Project Inquiry CTA */}
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
