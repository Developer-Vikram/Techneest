import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/common/SEO";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import CTASection from "../components/home/CTASection";
import { insightsData } from "../data/insights";

const categories = [
  { id: "all", label: "All Insights" },
  { id: "architecture", label: "Architecture" },
  { id: "mobile", label: "Mobile Engineering" },
  { id: "performance", label: "Performance" },
  { id: "strategy", label: "Product Strategy" },
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredArticles = insightsData.filter((article) => {
    const matchesCategory =
      activeCategory === "all" || article.categoryKey === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = insightsData[0];
  const regularArticles =
    activeCategory === "all" && !searchQuery
      ? filteredArticles.slice(1)
      : filteredArticles;

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim() && emailInput.includes("@")) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Insights | Techneest"
        description="Engineering perspectives, architectural blueprints, and modern web & mobile product strategies from the Techneest team."
        canonicalPath="/insights"
      />

      <div className="pt-20 sm:pt-24">
        {/* Insights Hero */}
        <section className="pt-6 pb-10 sm:pb-12 bg-white">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="violet" className="mb-3">
              PERSPECTIVES & DISPATCHES
            </Badge>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1028] max-w-4xl mx-auto leading-[1.12] font-display">
              Engineering Perspectives for{" "}
              <span className="text-gradient-vivid">Digital Leaders</span>
            </h1>
            <p className="mt-3.5 text-sm sm:text-base lg:text-lg text-[#59647D] max-w-2xl mx-auto leading-relaxed">
              In-depth essays on frontend architecture, offline-first mobile systems,
              Core Web Vitals optimization, and enterprise software design.
            </p>

            {/* Filter and Search Bar */}
            <div className="mt-8 sm:mt-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                      activeCategory === cat.id
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
                  placeholder="Search articles..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-[#0B1028] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-violet focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article Banner */}
        {activeCategory === "all" && !searchQuery && featuredArticle && (
          <section className="pb-10 sm:pb-12 bg-white">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl overflow-hidden bg-[#F8FAFD] border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-slate-900">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="lg:col-span-5 p-6 sm:p-8 space-y-3.5">
                    <div className="flex items-center gap-3">
                      <Badge variant="cyan">FEATURED ARTICLE</Badge>
                      <span className="text-xs font-semibold text-[#59647D]">
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-[#0B1028] leading-snug">
                      <Link
                        to={`/insights/${featuredArticle.slug}`}
                        className="hover:text-brand-electric transition-colors"
                      >
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-[#59647D] leading-relaxed line-clamp-3">
                      {featuredArticle.summary}
                    </p>

                    <div className="flex items-center gap-3 pt-2 border-t border-slate-200">
                      <img
                        src={featuredArticle.author.avatar}
                        alt={featuredArticle.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="text-xs">
                        <div className="font-bold text-[#0B1028]">
                          {featuredArticle.author.name}
                        </div>
                        <div className="text-[#59647D]">
                          {featuredArticle.date}
                        </div>
                      </div>
                    </div>

                    <div className="pt-1">
                      <Button
                        to={`/insights/${featuredArticle.slug}`}
                        variant="primary"
                        size="sm"
                        icon={ArrowUpRight}
                        className="!bg-[#0B1028]"
                      >
                        Read Full Article
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Articles Grid */}
        <section className="py-10 sm:py-14 bg-[#F8FAFD] border-t border-slate-100">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            {regularArticles.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
                <p className="text-[#59647D] text-sm">
                  No articles match your search or category filter.
                </p>
                <button
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="mt-4 px-4 py-2 rounded-xl bg-brand-violet text-white text-xs font-semibold hover:bg-brand-primary transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {regularArticles.map((article, idx) => (
                  <article
                    key={article.id}
                    data-aos="fade-up"
                    data-aos-delay={idx * 60}
                    className="group flex flex-col justify-between bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 text-xs text-[#59647D] mb-1.5">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors mb-2 leading-snug">
                          <Link to={`/insights/${article.slug}`}>
                            {article.title}
                          </Link>
                        </h3>

                        <p className="text-xs text-[#59647D] line-clamp-2 leading-relaxed mb-4">
                          {article.summary}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-6 h-6 rounded-full object-cover"
                          />
                          <span className="text-xs font-semibold text-[#0B1028]">
                            {article.author.name}
                          </span>
                        </div>

                        <Link
                          to={`/insights/${article.slug}`}
                          className="text-xs font-semibold text-brand-electric flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                        >
                          <span>Read</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Technical Dispatch Newsletter */}
        <section className="py-12 sm:py-16 bg-[#0B1028] text-white relative overflow-hidden">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
            <Badge variant="dark">ENGINEERING DISPATCH</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display">
              Stay Ahead of Emerging Software Architectures
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Join technical directors and software engineers who receive our bi-weekly deep dives into system design and frontend performance.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-2.5 pt-2"
            >
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-brand-electric hover:bg-brand-primary text-white font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center justify-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>You're subscribed! We respect your inbox and never send spam.</span>
              </div>
            )}
          </div>
        </section>

        <CTASection
          title="Have an Engineering Challenge to Solve?"
          description="Schedule a technical conversation with our software architects to review your systems and requirements."
          primaryCtaText="Start a Project"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}
