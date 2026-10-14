import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  X,
  Shield,
  FileText,
} from "lucide-react";
import techneestLogo from "../../assets/Techneest-logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [errorMessage, setErrorMessage] = useState("");
  const [activeModal, setActiveModal] = useState(null); // null | "privacy" | "terms"

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your work email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid email format (e.g., name@company.com).");
      return;
    }

    setStatus("loading");
    // Simulate real-world asynchronous API dispatch
    setTimeout(() => {
      setStatus("success");
    }, 700);
  };

  const resetForm = () => {
    setEmail("");
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <footer className="bg-[#0B1028] text-white border-t border-white/10 relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-electric/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter Section */}
        <div className="py-10 sm:py-12 border-b border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Newsletter Copy */}
            <div className="lg:col-span-6 space-y-2 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-brand-cyan text-xs font-semibold">
                <span>WEEKLY ARCHITECTURE DIGEST</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                Insights for What's Next
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                Get practical insights on software development, digital products, high-scale architectures, and modern engineering craft.
              </p>
            </div>

            {/* Newsletter Form */}
            <div className="lg:col-span-6">
              {status === "success" ? (
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white">
                        Subscription Validated!
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Interactive Demo: No live external mail service is connected in this frontend environment.
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="text-xs font-semibold text-brand-cyan hover:underline shrink-0"
                  >
                    Subscribe Another &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} noValidate className="space-y-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (status === "error") setStatus("idle");
                        }}
                        placeholder="Enter your work email address..."
                        aria-label="Work email address for newsletter subscription"
                        aria-invalid={status === "error"}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:bg-white/10 transition-all ${
                          status === "error"
                            ? "border-rose-400"
                            : "border-white/15 hover:border-white/25"
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-brand-electric hover:bg-blue-600 text-white flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-blue-500/20 shrink-0 disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Subscribing...</span>
                        </>
                      ) : (
                        <>
                          <span>Subscribe</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-rose-400 font-medium flex items-center gap-1.5 pl-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errorMessage}</span>
                    </p>
                  )}

                  <p className="text-[11px] text-slate-400 pl-1">
                    No spam ever. Unsubscribe at any time with one click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 border-b border-white/10">
          {/* Brand Info (2 columns wide) */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <img
                src={techneestLogo}
                alt="Techneest Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="font-extrabold text-2xl tracking-tight text-white font-display">
                Tech<span className="text-brand-cyan">neest</span>
              </span>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              We design, develop, and scale high-performance web platforms, mobile applications, and custom enterprise software for ambitious businesses.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <a
                href="mailto:hello@techneest.com"
                className="flex items-center gap-2.5 hover:text-brand-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                <span>hello@techneest.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-electric shrink-0" />
                <span>+1 (555) 389-4021</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-violet shrink-0" />
                <span>100 Tech Nexus Way, San Francisco, CA</span>
              </div>
            </div>

            {/* Crisp Social Links with Brand Color Fill on Hover */}
            <div className="flex items-center gap-2.5 pt-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="group w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white hover:shadow-lg hover:shadow-[#0A66C2]/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#24292F] hover:border-slate-500 hover:text-white hover:shadow-lg hover:shadow-black/50 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="group w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:text-white hover:shadow-lg hover:shadow-[#1DA1F2]/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="group w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-[#DD2A7B]/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="group w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white hover:shadow-lg hover:shadow-[#FF0000]/40 hover:-translate-y-0.5 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link
                  to="/services/web-development"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/mobile-app-development"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/custom-software-development"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Custom Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-brand-cyan transition-colors text-slate-400"
                >
                  Architecture & Security Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/about" className="hover:text-brand-cyan transition-colors">
                  About Techneest
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-brand-cyan transition-colors">
                  Featured Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-cyan transition-colors">
                  Project Inquiry
                </Link>
              </li>
              <li>
                <Link
                  to="/#faqs"
                  className="hover:text-brand-cyan transition-colors text-slate-400"
                >
                  Client Collaboration FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Insights & Legal */}
          <div className="space-y-3.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Insights & Resources
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link to="/insights" className="hover:text-brand-cyan transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link
                  to="/insights/building-scalable-micro-frontends-2025"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Micro-Frontend Architecture
                </Link>
              </li>
              <li>
                <Link
                  to="/insights/offline-first-mobile-architecture-react-native"
                  className="hover:text-brand-cyan transition-colors"
                >
                  Offline-First Mobile Systems
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setActiveModal("privacy")}
                  className="hover:text-brand-cyan transition-colors cursor-pointer text-left text-slate-400"
                >
                  Data Privacy Charter
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Techneest Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => setActiveModal("privacy")}
              className="hover:text-brand-cyan transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => setActiveModal("terms")}
              className="hover:text-brand-cyan transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Policy & Terms Modals */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn"
        >
          <div className="bg-[#0B1028] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 text-white relative shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-brand-cyan flex items-center justify-center">
                {activeModal === "privacy" ? (
                  <Shield className="w-5 h-5" />
                ) : (
                  <FileText className="w-5 h-5" />
                )}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {activeModal === "privacy"
                    ? "Privacy & Data Protection Policy"
                    : "Terms of Engineering Engagement"}
                </h4>
                <p className="text-xs text-slate-400">
                  Techneest Intellectual Property & Security Charter
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-300 leading-relaxed pt-2 border-t border-white/10">
              {activeModal === "privacy" ? (
                <>
                  <p>
                    <strong>1. Confidentiality & Non-Disclosure:</strong> Techneest adheres to strict mutual Non-Disclosure Agreements (NDA) with all prospective and contracted clients before exchanging technical architectures, source repositories, or business logic.
                  </p>
                  <p>
                    <strong>2. Data Privacy & Zero Telemetry Leakage:</strong> We do not sell, rent, or distribute client telemetry or project data. All staging and production configurations enforce TLS 1.3 encryption in transit and AES-256 at rest.
                  </p>
                  <p>
                    <strong>3. Compliance Alignment:</strong> Custom systems are engineered in alignment with SOC2, HIPAA, and GDPR regulatory compliance requirements based on client specifications.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>1. 100% Intellectual Property Ownership:</strong> All code, documentation, schemas, and design tokens created during the engagement are assigned 100% to the client upon milestone payment completion.
                  </p>
                  <p>
                    <strong>2. Milestone-Based Deliverables:</strong> Engagements follow defined bi-weekly sprint milestones with staging acceptance sign-offs prior to production release.
                  </p>
                  <p>
                    <strong>3. Warranty & Defect Resolution:</strong> Techneest provides a standard 30-day post-launch warranty period to resolve any critical defects or regressions at no additional cost.
                  </p>
                </>
              )}
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
