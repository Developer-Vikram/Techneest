import { useState } from "react";
import {
  Globe,
  Server,
  Smartphone,
  Database,
  Cpu,
  Layers,
  Code2,
  Sparkles,
} from "lucide-react";

const categories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & Web" },
  { id: "backend", label: "Backend & Data" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "cloud", label: "Cloud & DevOps" },
];

const technologies = [
  { name: "React 19 & Next.js", category: "frontend", icon: Globe, detail: "Server Components, App Router & Edge Hydration", tag: "Web" },
  { name: "TypeScript", category: "frontend", icon: Code2, detail: "Strict Typing, Zero Runtime Type Mismatch", tag: "Language" },
  { name: "Tailwind CSS", category: "frontend", icon: Layers, detail: "Utility-First Design Systems & Fluid Layouts", tag: "Styling" },
  { name: "Node.js & Express", category: "backend", icon: Server, detail: "Event-Driven Asynchronous Microservices", tag: "Runtime" },
  { name: "Python & FastAPI", category: "backend", icon: Cpu, detail: "High-Performance Async REST & ML Pipelines", tag: "API" },
  { name: "PostgreSQL & Timescale", category: "backend", icon: Database, detail: "ACID Compliant Relational & Time-Series Data", tag: "Database" },
  { name: "Redis & Kafka", category: "backend", icon: Layers, detail: "Sub-Millisecond In-Memory Cache & Streams", tag: "Data Stream" },
  { name: "React Native", category: "mobile", icon: Smartphone, detail: "Cross-Platform iOS & Android Native Threads", tag: "Cross-Platform" },
  { name: "Swift & SwiftUI", category: "mobile", icon: Smartphone, detail: "Native Apple Silicon Optimization & Widgets", tag: "iOS Native" },
  { name: "Kotlin & Jetpack", category: "mobile", icon: Smartphone, detail: "Native Android Modern Reactive UI Components", tag: "Android Native" },
  { name: "Docker & Kubernetes", category: "cloud", icon: Layers, detail: "Containerized Elastic Orchestration Clusters", tag: "Containers" },
  { name: "AWS & Google Cloud", category: "cloud", icon: Cpu, detail: "Multi-Zone VPCs, Serverless Lambdas & CDNs", tag: "Cloud" },
];

export default function TechStackGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTech =
    activeTab === "all"
      ? technologies
      : technologies.filter((t) => t.category === activeTab);

  return (
    <section className="bg-particle-wave py-10 sm:py-14 text-[#0B1028] relative overflow-hidden border-t border-slate-200/80">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-7 sm:mb-9 lg:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-brand-electric text-xs font-bold uppercase tracking-wider mb-2.5 border border-blue-200/70 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan" />
            MODERN TOOLCHAIN
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-display text-[#0B1028]">
            Battle-Tested Technologies{" "}
            <span className="text-gradient-brand">We Master</span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-[#59647D] mt-2 leading-relaxed">
            We choose production-proven frameworks, type-safe languages, and elastic cloud infrastructure that withstand enterprise workloads.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-7 sm:mb-9">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-brand-electric text-white shadow-md shadow-blue-500/20"
                  : "bg-white hover:bg-slate-50 text-[#59647D] hover:text-[#0B1028] border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Compact High-Density Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredTech.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                data-aos="fade-up"
                className="card-liquid-fill p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 hover:border-blue-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="p-2 rounded-xl bg-blue-50 text-brand-electric group-hover:scale-110 transition-all shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[#59647D]">
                      {tech.tag}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-[#0B1028] group-hover:text-brand-electric transition-colors leading-snug">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#59647D] mt-1 leading-relaxed line-clamp-2">
                    {tech.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
