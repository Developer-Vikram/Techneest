import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";
import CTASection from "../components/home/CTASection";
import { insightsData } from "../data/insights";

export default function Article() {
  const { slug } = useParams();
  const currentIndex = insightsData.findIndex((a) => a.slug === slug);
  const article = insightsData[currentIndex];

  if (!article) {
    return (
      <div className="pt-40 pb-28 text-center max-w-xl mx-auto px-4">
        <SEO title="Article Not Found | Techneest" />
        <h1 className="text-3xl font-bold text-brand-navy mb-4">Article Not Found</h1>
        <p className="text-brand-secondary mb-8">
          The requested essay could not be located in our insights index.
        </p>
        <Button to="/insights" variant="primary">
          Back to Insights
        </Button>
      </div>
    );
  }

  const relatedArticles = insightsData
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <>
      <SEO
        title={`${article.title} | Techneest Insights`}
        description={article.summary}
        canonicalPath={`/insights/${article.slug}`}
        type="article"
      />

      <div className="pt-20 sm:pt-24 pb-4">
        {/* Back Link */}
        <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
          <div className="max-w-4xl mx-auto">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-secondary hover:text-brand-electric transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Insights</span>
            </Link>
          </div>
        </div>

        {/* Article Header Hero */}
        <header className="pb-8 sm:pb-10 bg-white">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="violet">{article.category}</Badge>
                <div className="flex items-center gap-4 text-xs text-brand-secondary">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
              </div>

            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-navy leading-[1.18]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-brand-secondary leading-relaxed">
              {article.summary}
            </p>

            {/* Author Byline */}
            <div className="pt-6 border-t border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-11 h-11 rounded-full object-cover border border-brand-border"
                />
                <div>
                  <div className="text-sm font-bold text-brand-navy">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-brand-secondary">
                    {article.author.role}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mt-8 rounded-3xl overflow-hidden shadow-xl border border-brand-border aspect-[16/9] max-h-[500px] w-full bg-slate-900">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </header>

        {/* Article Body */}
        <article className="py-8 sm:py-12 bg-white">
          <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-8 sm:space-y-10">
              {/* Key Takeaways Callout Box */}
              {article.keyTakeaways && (
                <div className="p-5 sm:p-6 rounded-2xl bg-brand-soft/70 border border-brand-border space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-electric">
                    <Bookmark className="w-4 h-4" />
                    Key Architectural Takeaways
                  </div>
                  <div className="space-y-2.5 pt-1">
                    {article.keyTakeaways.map((takeaway, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy font-medium leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Content Sections */}
              {article.content.map((sec, idx) => (
                <section key={idx} className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
                    {sec.heading}
                  </h2>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-brand-secondary leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </article>

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="py-10 sm:py-14 bg-brand-soft/60 border-t border-brand-border">
            <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">
                  Continue Reading
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="p-6 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover transition-all space-y-3"
                  >
                    <div className="text-xs text-brand-secondary">
                      {rel.category} • {rel.readTime}
                    </div>
                    <h4 className="text-lg font-bold text-brand-navy hover:text-brand-electric transition-colors">
                      <Link to={`/insights/${rel.slug}`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-secondary line-clamp-2">
                      {rel.summary}
                    </p>
                    <Link
                      to={`/insights/${rel.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-brand-electric pt-2"
                    >
                      <span>Read essay</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection
          title="Discuss These Architecture Patterns with Our Team"
          description="We are always eager to talk shop with engineering leaders and collaborate on complex systems."
          primaryCtaText="Reach Out to Techneest"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}
