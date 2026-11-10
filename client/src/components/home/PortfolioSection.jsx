import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import Button from "../common/Button";
import { projectsData } from "../../data/projects";

export default function PortfolioSection() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <section className="bg-particle-wave py-8 sm:py-12 lg:py-14 text-[#0B1028] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 👈 Wahi purana Left-Right Layout, bas iPad ke liye gap adjust kiya */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-electric text-[11px] sm:text-xs font-bold uppercase tracking-wider border border-blue-200/70 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
              FEATURED WORK
            </div>

            <h2 className="text-[1.65rem] xs:text-3xl sm:text-3xl lg:text-4xl xl:text-[2.6rem] font-extrabold tracking-tight leading-[1.15] font-display text-[#0B1028]">
              Real businesses.{" "}
              <span className="text-gradient-brand">Real impact.</span>
            </h2>

            <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed max-w-sm mx-auto lg:mx-0">
              We partner with startups and established enterprises to engineer
              high-velocity digital products that create measurable commercial
              outcomes.
            </p>

            <div className="pt-1 flex justify-center lg:justify-start">
              <Button
                to="/work"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
                className="!py-2.5 !px-5 !rounded-xl font-bold w-full xs:w-auto justify-center"
              >
                View all projects
              </Button>
            </div>
          </div>

          {/* Right Column: 3 Project Cards */}
          {/* 👈 Yahan maine breakpoints thik kiye hain */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-5">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className={`card-liquid-fill group flex flex-col justify-between bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-card ${
                  /* 👈 iPad par 2 col me 3rd card full-width hoga, Desktop par normal 3 col */
                  index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Project Mockup Image */}
                <div className="relative aspect-[16/11] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Industry tag badge */}
                  <div className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 bg-black/65 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white border border-white/20 max-w-[70%] truncate">
                    {project.tag || project.category}
                  </div>

                  {/* External Link Icon */}
                  <Link
                    to={`/work/${project.slug}`}
                    className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/55 backdrop-blur-md flex items-center justify-center text-white hover:text-brand-cyan hover:bg-black/75 transition-colors"
                    aria-label={`Open ${project.title} case study`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 lg:p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="text-sm xs:text-base sm:text-lg font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors mb-1 sm:mb-1.5 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-[11px] xs:text-xs text-[#59647D] line-clamp-2 leading-relaxed mb-3 sm:mb-4">
                      {project.summary}
                    </p>
                  </div>

                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-[11px] xs:text-xs font-semibold text-brand-electric hover:underline transition-colors pt-2.5 sm:pt-3 border-t border-slate-100"
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