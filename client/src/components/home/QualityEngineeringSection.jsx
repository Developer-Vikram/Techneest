import {
  Gauge,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Code2,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const standards = [
  {
    title: "Sub-Second Speed & Core Web Vitals",
    description:
      "We engineer every web experience to exceed Google's strict Core Web Vitals benchmarks: Largest Contentful Paint (LCP) under 1.2s, Cumulative Layout Shift (CLS) under 0.05, and Interaction to Next Paint (INP) under 150ms.",
    icon: Gauge,
    metric: "95+ Mobile Score",
    badge: "Performance First",
  },
  {
    title: "Fluid Responsive Device Matrix",
    description:
      "Every application is built mobile-first and tested rigorously across standard phones (320px–430px), tablets (768px–1024px), laptops (1280px–1440px), and ultrawide 4K monitors with zero horizontal overflow or clipped text.",
    icon: Smartphone,
    metric: "320px to 4K",
    badge: "Cross-Platform",
  },
  {
    title: "Automated Testing & Continuous Delivery",
    description:
      "Our CI/CD pipelines run automated unit tests, API integration tests, and Playwright/Cypress end-to-end user journey suites before every merge, catching regressions before code reaches staging.",
    icon: ShieldCheck,
    metric: "Automated CI/CD",
    badge: "Defect Prevention",
  },
  {
    title: "WCAG 2.1 AA Semantic Accessibility",
    description:
      "We implement semantic HTML5, valid ARIA landmark roles, accessible color contrast ratios, and complete keyboard navigation so your digital product is inclusive and compliant.",
    icon: CheckCircle2,
    metric: "100% Keyboard Nav",
    badge: "Inclusive Design",
  },
  {
    title: "Strict Type Safety & Modular Architecture",
    description:
      "Using TypeScript and deterministic API schemas, we catch type mismatches at compile time rather than in production, keeping codebases maintainable as teams grow.",
    icon: Code2,
    metric: "Zero Runtime Type Errors",
    badge: "Maintainability",
  },
  {
    title: "Enterprise Security & Data Protection",
    description:
      "Security-by-design standards: TLS 1.3 encryption in transit, AES-256 database encryption at rest, secure HTTP headers, sanitization against XSS/SQLi, and SOC2/GDPR compliance readiness.",
    icon: Lock,
    metric: "TLS 1.3 & AES-256",
    badge: "Hardened Security",
  },
];

export default function QualityEngineeringSection() {
  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFD] border-t border-slate-100 relative">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow="ENGINEERING STANDARDS"
            title="Quality, Performance & Reliability by Design"
            gradientWord="Reliability"
            description="We build software that stands up to production reality: fast, accessible, secure, and engineered to scale seamlessly."
            align="center"
            className="mb-10 sm:mb-12"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((s, index) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="card-liquid-fill p-5 sm:p-6 lg:p-7 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-brand-electric flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0B1028] mb-2 group-hover:text-brand-electric transition-colors">
                    {s.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed mb-4">
                    {s.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400">Benchmark:</span>
                  <span className="text-brand-electric font-mono font-bold">
                    {s.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
