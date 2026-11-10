import { Link } from "react-router-dom";
import {
  Cpu,
  Workflow,
  Database,
  ShieldCheck,
  Lock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import SectionHeading from "../components/common/SectionHeading";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projects";

export default function CustomSoftware() {
  const service = servicesData.customSoftwareDevelopment;
  const customProjects = projectsData.filter(
    (p) => p.categoryKey === "custom-software"
  );

  return (
    <>
      <SEO
        title="Custom Software Development | Techneest"
        description="Tailor-made enterprise software, multi-tenant SaaS platforms, automated workflow pipelines, and data-dense internal dashboards built for operational autonomy."
        canonicalPath="/services/custom-software-development"
      />

      {/* ✅ Top spacing — navbar ke neeche clearly visible */}
      <div className="pt-28 sm:pt-32">
        {/* =========================================================================
            SECTION 1: Hero
            ========================================================================= */}
        <section className="relative pt-4 sm:pt-6 pb-10 sm:pb-12 lg:pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-1/4 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge variant="violet">{service.eyebrow}</Badge>
                </div>

                <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.12] font-display break-words">
                  Bespoke Digital Systems Tailored to Your{" "}
                  <span className="text-gradient-vivid">
                    Proprietary Workflows
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
                    Architect Your Custom System
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    size="md"
                    className="!py-2.5 sm:!py-3 !px-5 sm:!px-6 !rounded-xl w-full xs:w-auto justify-center"
                  >
                    Explore Enterprise Systems
                  </Button>
                </div>

                {/* Architecture Highlights */}
                <div className="pt-2 sm:pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 text-[10px] xs:text-[11px] sm:text-xs text-[#0B1028] font-semibold">
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1 sm:gap-1.5">
                    <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet" />
                    Multi-Tenant RLS
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1 sm:gap-1.5">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                    SOC2 Ready
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1 sm:gap-1.5">
                    <Workflow className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric" />
                    Event-Driven Queues
                  </span>
                </div>
              </div>

              {/* Right Visual: Architecture Topology */}
              <div className="lg:col-span-5 relative" data-aos="fade-left">
                <div className="rounded-xl sm:rounded-2xl bg-[#0B1028] text-white p-3 sm:p-4 lg:p-5 border border-white/10 shadow-2xl space-y-2.5 sm:space-y-3.5">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 sm:pb-2.5 border-b border-white/10 gap-2 flex-wrap">
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-brand-cyan">
                      Distributed Topology
                    </span>
                    <span className="text-[8px] xs:text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono whitespace-nowrap">
                      Healthy · 99.99%
                    </span>
                  </div>

                  {/* Diagram Blocks */}
                  <div className="space-y-2 sm:space-y-2.5 font-mono text-[10px] xs:text-[11px] sm:text-xs">
                    {/* Block 1 */}
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan shrink-0" />
                        <div className="min-w-0">
                          <div className="font-bold text-white text-[10px] xs:text-[11px] leading-tight truncate">
                            API Gateway & RBAC
                          </div>
                          <div className="text-[8px] xs:text-[9px] text-slate-400 truncate">
                            OAuth2 · TLS 1.3
                          </div>
                        </div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] text-brand-cyan font-bold shrink-0">
                        &lt; 12ms
                      </span>
                    </div>

                    <div className="flex justify-center text-slate-500 text-[9px] sm:text-[10px] px-2 text-center">
                      ↓ Event Bus (Kafka)
                    </div>

                    {/* Block 2 */}
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-brand-electric/15 border border-brand-electric/25 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-electric shrink-0" />
                        <div className="min-w-0">
                          <div className="font-bold text-white text-[10px] xs:text-[11px] leading-tight truncate">
                            Distributed Workers
                          </div>
                          <div className="text-[8px] xs:text-[9px] text-slate-300 truncate">
                            Async · Python / Node
                          </div>
                        </div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] text-emerald-400 font-bold shrink-0">
                        Auto-Scaled
                      </span>
                    </div>

                    <div className="flex justify-center text-slate-500 text-[9px] sm:text-[10px] px-2 text-center">
                      ↓ Partitioned Pool
                    </div>

                    {/* Block 3 */}
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <Database className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-violet shrink-0" />
                        <div className="min-w-0">
                          <div className="font-bold text-white text-[10px] xs:text-[11px] leading-tight truncate">
                            PostgreSQL & Redis
                          </div>
                          <div className="text-[8px] xs:text-[9px] text-slate-300 truncate">
                            RLS · AES-256
                          </div>
                        </div>
                      </div>
                      <span className="text-[8px] xs:text-[9px] text-purple-300 font-bold shrink-0">
                        Encrypted
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Ownership Badge */}
                <div className="absolute -bottom-3 -left-2 sm:-left-3 bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-2.5 max-w-[78%] xs:max-w-[70%]">
                  <div className="p-1 sm:p-1.5 rounded-md sm:rounded-lg bg-amber-50 text-amber-500 shrink-0">
                    <Lock className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-xs font-bold text-[#0B1028] leading-tight">
                      100% IP Ownership
                    </div>
                    <div className="text-[9px] sm:text-[10px] text-[#59647D]">
                      Zero Lock-in
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
        <section className="py-10 sm:py-12 lg:py-16 bg-[#FFF9F0]/40 border-t border-amber-100/60">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="TAILORED BUSINESS SYSTEMS"
              title="Purpose-Built Software for Proprietary Advantage"
              gradientWord="Proprietary Advantage"
              description="Off-the-shelf software forces you to compromise your operations. Custom software bends exactly to your competitive workflows."
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
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors shrink-0">
                      <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0B1028] group-hover:text-amber-600 transition-colors leading-snug">
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
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500 shrink-0 mt-0.5" />
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
            SECTION 3: Enterprise Security & Compliance
            ========================================================================= */}
        <section className="py-10 sm:py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start">
                  <Badge variant="violet">ENTERPRISE ASSURANCE</Badge>
                </div>
                <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] leading-tight font-display break-words">
                  Security-by-Design and Regulatory Compliance
                </h2>
                <p className="text-[11px] xs:text-xs sm:text-sm text-[#59647D] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  We engineer mission-critical systems with defense-in-depth
                  principles, satisfying the strictest compliance audits from
                  institutional clients and global regulators.
                </p>

                <div className="space-y-3 sm:space-y-3.5 pt-1 text-left">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-purple-50 text-brand-violet shrink-0 mt-0.5">
                      <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1028] leading-snug">
                        Row-Level Security & Tenancy
                      </h4>
                      <p className="text-[11px] xs:text-xs text-[#59647D] mt-0.5 leading-relaxed">
                        Guaranteed data separation with connection-level tenant
                        isolation in PostgreSQL.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-blue-50 text-brand-electric shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1028] leading-snug">
                        SOC2 & GDPR Readiness
                      </h4>
                      <p className="text-[11px] xs:text-xs text-[#59647D] mt-0.5 leading-relaxed">
                        Immutable event audit streams, automated secret
                        rotation, and role-based action guards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <div className="p-1.5 sm:p-2 rounded-md sm:rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#0B1028] leading-snug">
                        Zero-Downtime Microservices
                      </h4>
                      <p className="text-[11px] xs:text-xs text-[#59647D] mt-0.5 leading-relaxed">
                        Dockerized container clusters on Kubernetes with health
                        checks and rolling deployments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Visual */}
              <div className="lg:col-span-7">
                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                    alt="High security cloud server infrastructure data center"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028]/85 via-transparent to-transparent flex items-end p-3 sm:p-4 lg:p-6">
                    <div className="text-white min-w-0">
                      <div className="text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-brand-cyan uppercase tracking-wider mb-0.5 sm:mb-1">
                        Infrastructure Integrity
                      </div>
                      <div className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold leading-snug">
                        Enterprise Cloud Architecture with Redundant Failovers
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Featured Custom Software Projects
            ========================================================================= */}
        {customProjects.length > 0 && (
          <section className="py-10 sm:py-12 lg:py-16 bg-[#F8FAFD] border-t border-slate-100">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="ENTERPRISE SYSTEMS"
                title="Featured Custom Software Implementations"
                gradientWord="Implementations"
                description="Explore mission-critical platforms built to handle complex enterprise requirements."
                align="center"
                className="mb-8 sm:mb-10 lg:mb-12"
              />

              <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
                {customProjects.map((proj) => (
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
                      <div className="text-[10px] xs:text-[11px] sm:text-xs font-semibold text-amber-600 mb-0.5 sm:mb-1 truncate">
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
                        className="inline-flex items-center gap-1 sm:gap-1.5 text-[11px] xs:text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors"
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
          title="Frequently Asked Questions About Custom Software"
          description="Everything you need to know about code ownership, legacy database migrations, and multi-tenant security architecture."
        />

        {/* CTA */}
        <CTASection
          title="Ready to Build Your Proprietary Software Advantage?"
          description="Connect directly with our senior software architects to review your workflow specifications, data schemas, and deployment timelines."
          primaryCtaText="Architect Your Custom System"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}