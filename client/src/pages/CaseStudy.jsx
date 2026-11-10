import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
  Star,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import AnimatedCounter from "../components/common/AnimatedCounter";
import CTASection from "../components/home/CTASection";
import { projectsData } from "../data/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="pt-32 sm:pt-40 pb-20 text-center max-w-xl mx-auto px-4">
        <SEO title="Case Study Not Found | Techneest" />
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0B1028] mb-3">
          Case Study Not Found
        </h1>
        <p className="text-[#59647D] text-sm sm:text-base mb-6">
          The requested case study could not be located in our portfolio.
        </p>
        <Button to="/work" variant="primary">
          Back to All Work
        </Button>
      </div>
    );
  }

  const nextProject =
    projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <>
      <SEO
        title={`${project.title} — Case Study | Techneest`}
        description={project.summary}
        canonicalPath={`/work/${project.slug}`}
        type="article"
      />

      {/* ✅ Top spacing navbar ke liye fix kiya */}
      <div className="pt-28 sm:pt-32 pb-4 overflow-hidden">
        
        {/* Breadcrumb & Top Bar */}
        <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-[#59647D] hover:text-brand-electric transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Case Studies</span>
          </Link>
        </div>

        {/* Case Study Header Hero */}
        <section className="pb-8 sm:pb-12 lg:pb-14 bg-white">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl space-y-3.5 sm:space-y-4">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <Badge variant="cyan">{project.category}</Badge>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#59647D]">
                  {project.industry}
                </span>
              </div>

              <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0B1028] leading-[1.15] font-display break-words">
                {project.title}
              </h1>

              <p className="text-[13px] xs:text-sm sm:text-base lg:text-lg text-[#59647D] leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Project Quick Meta Strip — Mobile me stack */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl sm:rounded-2xl bg-[#F8FAFD] border border-slate-200">
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Timeline
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0B1028] mt-0.5">
                  {project.timeline}
                </div>
              </div>
              <div>
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Industry
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#0B1028] mt-0.5">
                  {project.industry}
                </div>
              </div>
              <div className="xs:col-span-2 sm:col-span-2">
                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Key Deliverables
                </div>
                <div className="text-[11px] sm:text-xs font-semibold text-[#0B1028] mt-1 flex flex-wrap gap-1.5">
                  {project.deliverables.map((del, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[9px] sm:text-[10px]"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Featured Hero Mockup Screenshot */}
            <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/10] sm:aspect-[16/9] max-h-[550px] w-full bg-slate-900">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        {project.metrics && (
          <section className="py-8 sm:py-10 bg-[#0B1028] text-white">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
                {project.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-electric font-display">
                      <AnimatedCounter value={metric.value} />
                    </div>
                    <div className="text-[10px] xs:text-xs sm:text-sm text-slate-300 font-medium">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Narrative: The Challenge and The Solution */}
        <section className="py-8 sm:py-12 lg:py-16 bg-white">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
              
              {/* The Challenge */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-rose-600">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-600" />
                  The Architectural Challenge
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#0B1028] leading-snug">
                  Identifying Bottlenecks & Operational Constraints
                </h2>
                <p className="text-[13px] sm:text-sm lg:text-base text-[#59647D] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              {/* The Solution */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-600">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-600" />
                  The Engineering Solution
                </div>
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#0B1028] leading-snug">
                  Architectural Strategy & Execution
                </h2>
                <p className="text-[13px] sm:text-sm lg:text-base text-[#59647D] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Key Features Built */}
              <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-[#F8FAFD] border border-slate-200 space-y-3">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1028]">
                  Key Features & Capabilities Engineered
                </h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-2.5 pt-1">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-[11px] sm:text-sm text-[#0B1028] font-medium"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-electric shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complete Tech Stack Used */}
              <div className="space-y-2.5 sm:space-y-3">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1028]">
                  Technology Toolchain Deployed
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg sm:rounded-xl bg-slate-100 border border-slate-200 text-[10px] sm:text-xs font-semibold text-[#0B1028]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Testimonial */}
              {project.testimonial && (
                <div className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-[#0B1028] text-white border border-white/10 space-y-3">
                  <div className="flex items-center gap-0.5 sm:gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-brand-cyan/30" />
                  <p className="text-[13px] sm:text-sm lg:text-base text-slate-200 italic leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <div className="pt-2 sm:pt-3 border-t border-white/10 text-[10px] sm:text-xs">
                    <span className="font-bold text-white">
                      {project.testimonial.author}
                    </span>
                    <span className="text-slate-400"> — {project.testimonial.role}, </span>
                    <span className="text-brand-cyan font-semibold">
                      {project.testimonial.company}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Next Case Study Navigation */}
        <section className="py-6 sm:py-8 lg:py-10 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Next Case Study
              </div>
              <div className="text-sm sm:text-base lg:text-lg font-bold text-[#0B1028] mt-0.5">
                {nextProject.title}
              </div>
            </div>
            <Button
              to={`/work/${nextProject.slug}`}
              variant="secondary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto justify-center mt-2 sm:mt-0"
            >
              Read Next Case Study
            </Button>
          </div>
        </section>

        <CTASection
          title="Interested in Similar Results for Your Business?"
          description="Let's discuss how our engineering team can design, build, and scale your technology solution."
          primaryCtaText="Schedule a Technical Call"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}