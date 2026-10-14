import SEO from "../components/common/SEO";
import HeroSection from "../components/home/HeroSection";
import TrustStrip from "../components/home/TrustStrip";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import TechStackGrid from "../components/home/TechStackGrid";
import IndustriesSection from "../components/home/IndustriesSection";
import PortfolioSection from "../components/home/PortfolioSection";
import HowWeWorkSection from "../components/home/HowWeWorkSection";
import ProcessTimeline from "../components/home/ProcessTimeline";
import QualityEngineeringSection from "../components/home/QualityEngineeringSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import FAQSection from "../components/home/FAQSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Techneest | Digital Solutions for a Bolder Tomorrow"
        description="We design, develop and scale high-performance web applications, native & cross-platform mobile apps, and custom enterprise software systems for ambitious businesses."
        canonicalPath="/"
      />

      <div className="relative">
        {/* 1. LIGHT: Hero Section with original supplied graphic & Trust Strip */}
        <HeroSection />
        <TrustStrip />

        {/* 2. LIGHT (PARTICLE WAVE BG): Core Services Overview */}
        <ServicesOverview />

        {/* 3. LIGHT (CLEAN WHITE): Why Choose Techneest (Engineering Advantages) */}
        <WhyChooseUs />

        {/* 4. LIGHT (PARTICLE WAVE BG): Modern Toolchain & Technologies */}
        <TechStackGrid />

        {/* 5. LIGHT (SOFT BG): Industries & Real-World Use Cases */}
        <IndustriesSection />

        {/* 6. LIGHT (PARTICLE WAVE BG): Featured Projects & Case Studies */}
        <PortfolioSection />

        {/* 7. LIGHT (CLEAN WHITE): How We Work (Transparent Collaboration & 5-Step Workflow) */}
        <HowWeWorkSection />

        {/* 8. LIGHT (PARTICLE WAVE BG): 4-Stage Development Process (Compact & Zero Empty Space) */}
        <ProcessTimeline />

        {/* 9. LIGHT (SOFT BG): Quality, Performance & Reliability Standards */}
        <QualityEngineeringSection />

        {/* 10. LIGHT (PARTICLE WAVE BG): Engineering & Collaboration Charter */}
        <TestimonialsSection />

        {/* 11. LIGHT (CLEAN WHITE): Frequently Asked Questions & Validated Technical Inquiry Form */}
        <FAQSection showContactForm={true} />

        {/* 12. LIGHT WRAPPER: Project Inquiry CTA Banner */}
        <CTASection
          title="Ready to Build Resilient Digital Products?"
          description="Schedule a technical architecture consultation to discuss your product roadmap, delivery milestones, and engineering scope."
          primaryCtaText="Start a Project"
          primaryCtaLink="/contact"
        />
      </div>
    </>
  );
}
