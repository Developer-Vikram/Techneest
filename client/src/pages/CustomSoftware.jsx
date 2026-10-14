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
  const customProjects = projectsData.filter((p) => p.categoryKey === "custom-software");

  return (
    <>
      <SEO
        title="Custom Software Development | Techneest"
        description="Tailor-made enterprise software, multi-tenant SaaS platforms, automated workflow pipelines, and data-dense internal dashboards built for operational autonomy."
        canonicalPath="/services/custom-software-development"
      />

      <div className="pt-20 sm:pt-24">
        {/* =========================================================================
            SECTION 1: Unique Systems Hero with Architectural Topology Diagram
            ========================================================================= */}
        <section className="relative pt-6 pb-12 sm:pb-16 overflow-hidden bg-white">
          <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-purple-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <Badge variant="violet">{service.eyebrow}</Badge>

                <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1028] leading-[1.1] font-display">
                  Bespoke Digital Systems Tailored to Your{" "}
                  <span className="text-gradient-vivid">Proprietary Workflows</span>
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
                    Architect Your Custom System
                  </Button>
                  <Button
                    to="/work"
                    variant="secondary"
                    size="md"
                    className="!py-3 !px-6 !rounded-xl"
                  >
                    Explore Enterprise Systems
                  </Button>
                </div>

                {/* Architecture Highlights */}
                <div className="pt-3 flex flex-wrap items-center gap-2.5 text-xs text-[#0B1028] font-semibold">
                  <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-brand-violet" />
                    Multi-Tenant RLS Tenancy
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    SOC2 Compliance Ready
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 border border-blue-200 flex items-center gap-1.5">
                    <Workflow className="w-3.5 h-3.5 text-brand-electric" />
                    Event-Driven Worker Queues
                  </span>
                </div>
              </div>

              {/* Right Hero Visual: Architectural Topology Map */}
              <div className="lg:col-span-5 relative" data-aos="fade-left">
                <div className="rounded-2xl bg-[#0B1028] text-white p-5 border border-white/10 shadow-2xl space-y-3.5">
                  <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-cyan">
                      Distributed Topology
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono">
                      Healthy · 99.99% Uptime
                    </span>
                  </div>

                  {/* Architecture Diagram Blocks */}
                  <div className="space-y-2.5 font-mono text-xs">
                    {/* Block 1 */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-brand-cyan" />
                        <div>
                          <div className="font-bold text-white text-[11px]">API Gateway & RBAC</div>
                          <div className="text-[9px] text-slate-400">OAuth2 · Rate Limiting · TLS 1.3</div>
                        </div>
                      </div>
                      <span className="text-[9px] text-brand-cyan font-bold">&lt; 12ms</span>
                    </div>

                    <div className="flex justify-center text-slate-500 text-[10px]">
                      ↓ Event Ingestion Bus (Kafka / RabbitMQ)
                    </div>

                    {/* Block 2 */}
                    <div className="p-2.5 rounded-xl bg-brand-electric/15 border border-brand-electric/25 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3.5 h-3.5 text-brand-electric" />
                        <div>
                          <div className="font-bold text-white text-[11px]">Distributed Worker Nodes</div>
                          <div className="text-[9px] text-slate-300">Async Automation · Python / Node</div>
                        </div>
                      </div>
                      <span className="text-[9px] text-emerald-400 font-bold">Auto-Scaled</span>
                    </div>

                    <div className="flex justify-center text-slate-500 text-[10px]">
                      ↓ Partitioned Connection Pool
                    </div>

                    {/* Block 3 */}
                    <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/25 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Database className="w-3.5 h-3.5 text-brand-violet" />
                        <div>
                          <div className="font-bold text-white text-[11px]">PostgreSQL & Redis Tenancy</div>
                          <div className="text-[9px] text-slate-300">Row-Level Security · AES-256</div>
                        </div>
                      </div>
                      <span className="text-[9px] text-purple-300 font-bold">Encrypted</span>
                    </div>
                  </div>
                </div>

                {/* Floating Ownership Badge */}
                <div className="absolute -bottom-3 -left-3 bg-white p-3 rounded-xl shadow-xl border border-slate-100 flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-amber-50 text-amber-500">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0B1028]">100% IP Ownership</div>
                    <div className="text-[10px] text-[#59647D]">Zero Recurring Vendor Lock-in</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: 4 Core Systems Offerings
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-[#FFF9F0]/40 border-t border-amber-100/60">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="TAILORED BUSINESS SYSTEMS"
              title="Purpose-Built Software for Proprietary Advantage"
              gradientWord="Proprietary Advantage"
              description="Off-the-shelf software forces you to compromise your operations. Custom software bends exactly to your competitive workflows."
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
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1028] group-hover:text-amber-600 transition-colors">
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
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
            SECTION 3: Enterprise Security & Compliance Architecture
            ========================================================================= */}
        <section className="py-12 sm:py-16 bg-white border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <Badge variant="violet">ENTERPRISE ASSURANCE</Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1028] leading-tight font-display">
                  Security-by-Design and Regulatory Compliance
                </h2>
                <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed">
                  We engineer mission-critical systems with defense-in-depth principles,
                  satisfying the strictest compliance audits from institutional clients and global regulators.
                </p>

                <div className="space-y-3.5 pt-1">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-50 text-brand-violet shrink-0 mt-0.5">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1028]">Row-Level Security & Tenancy</h4>
                      <p className="text-xs text-[#59647D] mt-0.5">
                        Guaranteed data separation with connection-level tenant isolation in PostgreSQL.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-50 text-brand-electric shrink-0 mt-0.5">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1028]">SOC2 & GDPR Readiness</h4>
                      <p className="text-xs text-[#59647D] mt-0.5">
                        Immutable event audit streams, automated secret rotation, and role-based action guards.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1028]">Zero-Downtime Microservices</h4>
                      <p className="text-xs text-[#59647D] mt-0.5">
                        Dockerized container clusters on Kubernetes with health checks and rolling deployments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Visual Image */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
                    alt="High security cloud server infrastructure data center"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028]/85 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="text-[11px] font-semibold text-brand-cyan uppercase tracking-wider mb-1">
                        Infrastructure Integrity
                      </div>
                      <div className="text-base sm:text-lg font-bold">
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
            SECTION 4: Featured Custom Software Case Studies
            ========================================================================= */}
        {customProjects.length > 0 && (
          <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <SectionHeading
                eyebrow="ENTERPRISE SYSTEMS"
                title="Featured Custom Software Implementations"
                gradientWord="Implementations"
                description="Explore mission-critical platforms built to handle complex enterprise requirements."
                align="center"
                className="mb-10 sm:mb-12"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {customProjects.map((proj) => (
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
                      <div className="text-xs font-semibold text-amber-600 mb-1">
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
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                      >
                        <span>View System Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Custom Software FAQs */}
        <FAQSection
          faqs={service.faqs}
          title="Frequently Asked Questions About Custom Software"
          description="Everything you need to know about code ownership, legacy database migrations, and multi-tenant security architecture."
        />

        {/* Project Inquiry CTA */}
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
