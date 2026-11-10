import { useState, useCallback } from "react";
import {
  ShoppingCart,
  GraduationCap,
  Plane,
  Workflow,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import techneestLogo from "../../assets/Techneest-logo.png";
import eCommerceImg from "../../assets/E-Commerce.png";

const industries = [
  {
    id: "ecommerce",
    title: "E-Commerce & Digital Retail Platforms",
    tabLabel: "E-Commerce & Retail",
    icon: ShoppingCart,
    tag: "High Conversion & Scale",
    stat: "Sub-100ms APIs",
    statLabel: "Target Checkout Latency",
    description:
      "High-throughput commerce platforms with headless storefronts, sub-second checkout pipelines, real-time inventory synchronization, and multi-currency global payment routing.",
    image: eCommerceImg,
    imageAlt: "Modern digital retail checkout and online commerce workspace",
    metrics: ["Sub-100ms Checkout", "Multi-Warehouse Sync", "Global Payment Gateways"],
    useCases: [
      "Headless Shopify, BigCommerce & bespoke custom storefronts",
      "Automated stock level & warehouse ERP synchronization",
      "Sub-second checkout funnel optimization & A/B testing",
      "Multi-currency localized tax, customs, and pricing engines",
    ],
    color: "blue",
  },
  {
    id: "saas",
    title: "SaaS & Digital Product Engineering",
    tabLabel: "SaaS & Digital Products",
    icon: Cpu,
    tag: "Multi-Tenant Architecture",
    stat: "99.99% Uptime",
    statLabel: "Core SLA Architecture",
    description:
      "Scalable multi-tenant B2B and consumer SaaS applications engineered with automated subscription lifecycle billing, granular role-based permissions, and strict tenant-level data isolation.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Software interfaces, product analytics dashboard and modern engineering systems",
    metrics: ["SOC2-Ready Isolation", "Stripe Metered Billing", "Elastic Microservices"],
    useCases: [
      "Stripe billing, seat management & metered usage engines",
      "Tenant-isolated relational schemas with zero data bleed",
      "Self-service onboarding & interactive telemetry analytics",
      "Granular role hierarchies & audit-ready permission controls",
    ],
    color: "violet",
  },
  {
    id: "operations",
    title: "Business Operations & Workflow Automation",
    tabLabel: "Operations & Automation",
    icon: Workflow,
    tag: "Internal Efficiency",
    stat: "10x Velocity",
    statLabel: "Manual Process Reduction",
    description:
      "Custom internal operating systems, automated approval workflows, ERP/CRM middleware, and dense analytics dashboards that eliminate manual spreadsheets and operational bottlenecks.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professional business operations, engineering analytics, and workflow automation",
    metrics: ["Event-Driven Queues", "Zero Manual CSV Exports", "Bi-Directional Sync"],
    useCases: [
      "Custom operations control centers & management dashboards",
      "Legacy ERP, CRM & financial accounting middleware",
      "Event-driven asynchronous worker pipelines & queues",
      "Role-based multi-tier approval workflows & audit logging",
    ],
    color: "amber",
  },
  {
    id: "education",
    title: "Education & Digital Learning Systems",
    tabLabel: "Education & E-Learning",
    icon: GraduationCap,
    tag: "Interactive Learning",
    stat: "50k+ Concurrent",
    statLabel: "Active Classroom Capacity",
    description:
      "Modern learning management platforms (LMS) with student progress tracking, interactive video delivery, automated assessment grading engines, and SCORM/xAPI compatibility.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Students learning with laptops in modern collaborative digital education environment",
    metrics: ["Low-Latency Video", "Adaptive Testing", "FERPA/COPPA Compliant"],
    useCases: [
      "Interactive course curriculum & automated quiz grading",
      "Real-time low-latency video streaming & virtual classrooms",
      "Institutional role hierarchies & compliance safeguards",
      "Student learning telemetry & automated certificate generation",
    ],
    color: "cyan",
  },
  {
    id: "travel",
    title: "Travel, Hospitality & Booking Engines",
    tabLabel: "Travel & Hospitality",
    icon: Plane,
    tag: "Dynamic Reservation",
    stat: "100% Deterministic",
    statLabel: "Zero Double-Booking Engine",
    description:
      "High-concurrency reservation systems, hotel & flight inventory engines, geo-localized search portals, and automated reservation confirmation pipelines built for scale.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Luxury hospitality resort experiences, dynamic travel booking and hotel destinations",
    metrics: ["Sub-Second Search", "Real-Time Allocation", "Instant Voucher Pipelines"],
    useCases: [
      "Dynamic reservation, room allocation & availability engines",
      "Interactive map-based exploration with spatial indexing",
      "Multi-language & localized currencies with instant FX rates",
      "Instant payment confirmation & automated itinerary generation",
    ],
    color: "rose",
  },
];

export default function IndustriesSection() {
  const [activeTab, setActiveTab] = useState("ecommerce");

  const activeIndex = industries.findIndex((item) => item.id === activeTab);
  const activeItem = industries[activeIndex] || industries[0];
  const ActiveIcon = activeItem.icon;

  // Keyboard navigation for WAI-ARIA tablist
  const handleKeyDown = useCallback((e, index) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % industries.length;
      setActiveTab(industries[nextIndex].id);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + industries.length) % industries.length;
      setActiveTab(industries[prevIndex].id);
    }
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#F8FAFD] border-t border-slate-100 relative overflow-hidden">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="DOMAINS & USE CASES"
            title="Tailored Solutions Across High-Impact Industries"
            gradientWord="High-Impact Industries"
            description="We apply proven architectural patterns to solve specific operational, commercial, and technical challenges across digital industries."
            align="center"
            className="mb-6 sm:mb-8 lg:mb-10"
          />
        </div>

        {/* Interactive Tab Navigation Bar — SCROLLBAR HIDDEN */}
        <div data-aos="fade-up" data-aos-delay="50">
          <div
            role="tablist"
            aria-label="High-impact industries and domains"
            className="flex items-center justify-start lg:justify-center gap-2 sm:gap-2.5 overflow-x-auto pb-2 mb-5 sm:mb-7 lg:mb-8 no-scrollbar scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {industries.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveTab(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] sm:text-sm font-semibold transition-all duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric ${
                    isActive
                      ? "bg-brand-electric text-white shadow-md shadow-blue-500/25"
                      : "bg-white hover:bg-slate-50 text-[#59647D] hover:text-[#0B1028] border border-slate-200/90 shadow-2xs"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors ${
                      isActive ? "text-white" : "text-brand-electric"
                    }`}
                  />
                  <span className="whitespace-nowrap">{item.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Panel */}
        <div
          role="tabpanel"
          id={`panel-${activeItem.id}`}
          aria-labelledby={`tab-${activeItem.id}`}
          className="bg-white/95 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-10 border border-slate-200/90 shadow-card relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 lg:gap-10 items-center text-left"
            >
              {/* Left Column */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-5">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-blue-50 text-brand-electric border border-blue-200/70">
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan" />
                    {activeItem.tag}
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono font-semibold text-slate-400">
                    Domain Architecture
                  </span>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-[1.85rem] font-extrabold text-[#0B1028] tracking-tight leading-snug font-display">
                  {activeItem.title}
                </h3>

                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-base text-[#59647D] leading-relaxed">
                  {activeItem.description}
                </p>

                {/* Capabilities Grid */}
                <div className="pt-0.5 sm:pt-1">
                  <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 sm:mb-2">
                    Key Engineering Capabilities & Architecture:
                  </div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 lg:gap-2.5">
                    {activeItem.useCases.map((uc, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-slate-50/80 border border-slate-200/70 text-[10px] xs:text-[11px] sm:text-xs text-[#0B1028] font-medium"
                      >
                        <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4 text-brand-electric shrink-0 mt-0.5" />
                        <span className="leading-snug">{uc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric Highlights */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5 sm:pt-1">
                  {activeItem.metrics.map((metric, mIdx) => (
                    <span
                      key={mIdx}
                      className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-blue-50/70 border border-blue-100 text-[9px] xs:text-[10px] sm:text-[11px] font-semibold text-brand-electric"
                    >
                      <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-500 shrink-0" />
                      <span>{metric}</span>
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-3 sm:pt-4 flex flex-col xs:flex-row xs:flex-wrap items-stretch xs:items-center gap-2.5 sm:gap-4 border-t border-slate-100">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="md"
                    icon={ArrowRight}
                    iconPosition="right"
                    className="!py-2.5 !px-4 sm:!px-5 !rounded-xl font-bold shadow-md shadow-blue-500/20 w-full xs:w-auto justify-center text-xs sm:text-sm"
                  >
                    Discuss {activeItem.tabLabel} Scope
                  </Button>
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center xs:justify-start gap-1.5 text-[11px] sm:text-xs font-bold text-[#59647D] hover:text-brand-electric transition-colors"
                  >
                    <span>View Related Case Studies</span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-card aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group">
                  <img
                    src={activeItem.image}
                    alt={activeItem.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1028]/85 via-transparent to-black/20 pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 lg:top-4 lg:left-4 z-20 inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-[#0B1028]/85 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-bold shadow-lg max-w-[75%]">
                    <ActiveIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-cyan shrink-0" />
                    <span className="truncate">{activeItem.tabLabel}</span>
                  </div>

                  {/* Bottom Floating Metric Card */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 lg:bottom-4 lg:left-4 lg:right-4 z-20 p-2 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0B1028]/90 backdrop-blur-md border border-white/15 text-white shadow-xl flex items-center justify-between gap-2 sm:gap-3">
                    <div className="min-w-0">
                      <div className="text-sm xs:text-base sm:text-lg font-extrabold text-white font-display truncate">
                        {activeItem.stat}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-300 truncate">
                        {activeItem.statLabel}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 px-1.5 sm:px-2.5 rounded-md sm:rounded-lg bg-white/10 border border-white/10 shrink-0">
                      <img
                        src={techneestLogo}
                        alt="Techneest Logo"
                        className="w-3 h-3 sm:w-4 sm:h-4 object-contain"
                      />
                      <span className="font-extrabold text-[9px] sm:text-[11px] text-brand-cyan whitespace-nowrap">
                        Enterprise Ready
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}