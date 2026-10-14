import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Button from "../common/Button";
import { projectsData } from "../../data/projects";

export default function PortfolioSection() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="bg-particle-wave py-10 sm:py-14 text-[#0B1028] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading, description, view all button */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-electric text-xs font-bold uppercase tracking-wider border border-blue-200/70 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              FEATURED WORK
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-extrabold tracking-tight leading-[1.15] font-display text-[#0B1028]">
              Real businesses.{" "}
              <span className="text-gradient-brand">Real impact.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed max-w-sm">
              We partner with startups and established enterprises to engineer high-velocity digital products that create measurable commercial outcomes.
            </p>

            <div className="pt-1">
              <Button
                to="/work"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="!py-2.5 !px-5 !rounded-xl font-bold"
              >
                View all projects
              </Button>
            </div>
          </div>

          {/* Right Column: 3 Project Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="card-liquid-fill group flex flex-col justify-between bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-card"
              >
                {/* Project Mockup Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                  {/* Industry tag badge */}
                  <div className="absolute bottom-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                    {project.tag || project.category}
                  </div>

                  {/* External Link Icon */}
                  <Link
                    to={`/work/${project.slug}`}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-lg bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:text-brand-cyan hover:bg-black/70 transition-colors"
                    aria-label={`Open ${project.title} case study`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#59647D] line-clamp-2 leading-relaxed mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-electric hover:underline transition-colors pt-2.5 border-t border-slate-100"
                  >
                    <span>View case study</span>
                    <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
