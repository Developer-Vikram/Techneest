import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import SEO from "../components/common/SEO";
import Badge from "../components/common/Badge";
import CTASection from "../components/home/CTASection";
import { projectsData } from "../data/projects";

const filterCategories = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "custom-software", label: "Custom Software" },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projectsData.filter((proj) => {
    const matchesFilter =
      activeFilter === "all" || proj.categoryKey === activeFilter;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.techStack.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Our Work | Techneest"
        description="Explore representative digital products, high-throughput cloud platforms, and mobile apps engineered with precision by Techneest."
        canonicalPath="/work"
      />

      <div className="pt-20 sm:pt-24">
        {/* Work Hero */}
        <section className="pt-6 pb-10 sm:pb-12 bg-white">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="cyan" className="mb-3">
              PORTFOLIO & CASE STUDIES
            </Badge>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1028] max-w-4xl mx-auto leading-[1.12] font-display">
              Real-World Engineering, Proven Commercial{" "}
              <span className="text-gradient-brand">Impact</span>
            </h1>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg text-[#59647D] max-w-2xl mx-auto leading-relaxed">
              Explore our representative portfolio of web applications, mobile products, and custom enterprise systems.
            </p>

            {/* Filter and Search Bar */}
            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {filterCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      activeFilter === cat.id
                        ? "bg-[#0B1028] text-white shadow-sm"
                        : "bg-slate-100 text-[#59647D] hover:text-[#0B1028] hover:bg-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0B1028] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-electric focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-10 sm:py-14 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-[#59647D] text-sm">
                  No projects match your filter or search query.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-electric text-white text-xs font-semibold hover:bg-brand-primary transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={project.id}
                    data-aos="fade-up"
                    data-aos-delay={idx * 60}
                    className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                  >
                    {/* Image Preview */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={project.image}
                        alt={project.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                        {project.tag || project.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs font-semibold text-brand-electric mb-1">
                          {project.industry}
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors mb-2">
                          {project.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#59647D] line-clamp-2 leading-relaxed mb-4">
                          {project.summary}
                        </p>
                      </div>

                      <div>
                        {/* Key Metric Pill */}
                        {project.metrics && project.metrics[0] && (
                          <div className="p-2.5 rounded-xl bg-[#F8FAFD] border border-slate-100 mb-4 flex items-center justify-between text-xs">
                            <span className="text-[#59647D] font-medium text-[11px]">
                              {project.metrics[0].label}
                            </span>
                            <span className="font-bold text-brand-electric">
                              {project.metrics[0].value}
                            </span>
                          </div>
                        )}

                        {/* Tech stack badges */}
                        <div className="flex flex-wrap gap-1.5 mb-5 pt-1">
                          {project.techStack.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-slate-100 text-[10px] font-medium text-[#0B1028]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Link to detail */}
                        <Link
                          to={`/work/${project.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0B1028] group-hover:text-brand-electric transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-lg"
                        >
                          <span>Explore Case Study</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <CTASection
          title="Have an Ambitious Project in Mind?"
          description="Let's build a software solution tailored exactly to your business model, customer needs, and timeline."
          primaryCtaText="Start a Project"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}
