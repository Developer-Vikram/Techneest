import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  X,
  IndianRupee,
} from "lucide-react";
import SEO from "../components/common/SEO";
import Badge from "../components/common/Badge";
import Button from "../components/common/Button";

const servicesOptions = [
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "Architecture & Security Consulting",
];

const budgetRanges = [
  "10k – 25k",
  "25k – 50k",
  "50k – 100k",
  "100k+",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Web Development",
    budget: "25k – 50k",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      errs.email = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid work email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please provide brief details about your project";
    } else if (formData.message.trim().length < 15) {
      errs.message = "Project overview must be at least 15 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 900);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "Web Development",
      budget: "25k – 50k",
      message: "",
    });
    setErrors({});
  };

  return (
    <>
      <SEO
        title="Contact Techneest | Start Your Project"
        description="Connect with Techneest senior software architects to discuss web, mobile, and custom enterprise software development."
        canonicalPath="/contact"
      />

      {/* ✅ Top spacing — navbar ke neeche clearly visible */}
      <div className="pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
        <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10 lg:mb-12">
            <Badge variant="cyan" className="mb-3">
              START A CONVERSATION
            </Badge>
            <h1 className="text-[1.75rem] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.15] break-words">
              Let's Build Something{" "}
              <span className="text-gradient-brand">Exceptional</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-[13px] xs:text-sm sm:text-base lg:text-lg text-brand-secondary leading-relaxed max-w-2xl mx-auto">
              Have an upcoming product roadmap, an architecture challenge, or a
              custom software requirement? Reach out to our senior engineering
              team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Contact & Guarantees */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6 lg:space-y-8">
              
              {/* Dark Contact Card */}
              <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-brand-navy text-white space-y-5 sm:space-y-6 relative overflow-hidden border border-brand-navy-light shadow-xl">
                <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-brand-electric/15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-[10px] xs:text-[11px] sm:text-xs font-semibold">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Average Response: &lt; 24 Hours</span>
                  </div>

                  <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white leading-snug">
                    Direct Access to Senior Software Engineers
                  </h2>

                  <p className="text-[11px] xs:text-xs sm:text-sm text-slate-300 leading-relaxed">
                    We skip the aggressive sales pitch. Your initial project
                    inquiry is reviewed directly by a Technical Lead who
                    understands architecture, scoping, and timelines.
                  </p>

                  {/* Contact Info - Mobile Fix */}
                  <div className="pt-3 sm:pt-4 border-t border-white/10 space-y-3 sm:space-y-3.5 text-[11px] xs:text-xs sm:text-sm text-slate-200">
                    <a
                      href="mailto:Manager@techneest.com"
                      className="flex items-center gap-2.5 sm:gap-3 hover:text-brand-cyan transition-colors break-all"
                    >
                      <Mail className="w-4 h-4 text-brand-cyan shrink-0" />
                      <span>Manager@techneest.com</span>
                    </a>
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <Phone className="w-4 h-4 text-brand-electric shrink-0" />
                      <span>+91 8595973101</span>
                    </div>
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <MapPin className="w-4 h-4 text-brand-violet shrink-0 mt-0.5" />
                      <span className="leading-relaxed">T3-331, 3rd floor, Golden I, Tech Zone 4, Tower 3, Greater Noida, U.P. 201318</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-brand-soft border border-brand-border space-y-2.5 sm:space-y-3">
                <div className="flex items-center gap-2 text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-brand-electric shrink-0" />
                  What You Can Expect
                </div>
                <div className="space-y-2 text-[11px] xs:text-xs text-brand-secondary">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>Mutual Non-Disclosure Agreement (NDA) signed upon request.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>Clear scope breakdown and milestone estimate.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-cyan shrink-0 mt-0.5" />
                    <span>No vendor lock-in; 100% intellectual property ownership.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-4 xs:p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-white border border-brand-border shadow-xl">
                
                {/* Simulation Notice */}
                <div className="mb-5 sm:mb-6 p-3 sm:p-3.5 rounded-lg sm:rounded-xl bg-blue-50/70 border border-blue-200/60 text-[10px] xs:text-[11px] sm:text-xs text-blue-900 flex items-start gap-2 sm:gap-2.5">
                  <AlertCircle className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Frontend Interactive Notice: </span>
                    This form features real-time client-side validation and
                    simulated dispatch. Since this is a frontend-only project,
                    no external mail server is contacted.
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5 lg:space-y-6">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-soft border text-xs sm:text-sm text-brand-navy placeholder-brand-secondary focus:outline-none focus:bg-white transition-all ${
                          errors.name
                            ? "border-rose-400 focus:ring-2 focus:ring-rose-400"
                            : "border-brand-border focus:ring-2 focus:ring-brand-electric"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[10px] sm:text-xs text-rose-500 font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5"
                      >
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.com"
                        className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-soft border text-xs sm:text-sm text-brand-navy placeholder-brand-secondary focus:outline-none focus:bg-white transition-all ${
                          errors.email
                            ? "border-rose-400 focus:ring-2 focus:ring-rose-400"
                            : "border-brand-border focus:ring-2 focus:ring-brand-electric"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[10px] sm:text-xs text-rose-500 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Company Inc."
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-soft border border-brand-border text-xs sm:text-sm text-brand-navy placeholder-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-electric focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 00000 00000"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-soft border border-brand-border text-xs sm:text-sm text-brand-navy placeholder-brand-secondary focus:outline-none focus:ring-2 focus:ring-brand-electric focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Primary Service Needed
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                      {servicesOptions.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() =>
                            setFormData({ ...formData, service: srv })
                          }
                          className={`px-3.5 py-2.5 rounded-lg sm:rounded-xl text-[11px] xs:text-xs font-semibold border text-left transition-all ${
                            formData.service === srv
                              ? "bg-brand-navy text-white border-brand-navy shadow-sm"
                              : "bg-brand-soft text-brand-navy border-brand-border hover:border-slate-300 hover:bg-slate-100"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Selector with Rupee Icon */}
                  <div>
                    <label className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                      {budgetRanges.map((b) => {
                        const isActive = formData.budget === b;
                        return (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData({ ...formData, budget: b })}
                            className={`flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2 sm:px-3 rounded-lg sm:rounded-xl text-[10px] xs:text-[11px] sm:text-xs font-semibold border transition-all ${
                              isActive
                                ? "bg-brand-electric text-white border-brand-electric shadow-sm"
                                : "bg-brand-soft text-brand-navy border-brand-border hover:bg-slate-100"
                            }`}
                          >
                            <IndianRupee
                              className={`w-3.5 h-3.5 shrink-0 ${
                                isActive ? "text-white" : "text-brand-secondary"
                              }`}
                            />
                            <span>{b}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] xs:text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-navy mb-1.5"
                    >
                      Project Overview & Objectives *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about the product goals, target audience, technical requirements, or key dates..."
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-brand-soft border text-xs sm:text-sm text-brand-navy placeholder-brand-secondary focus:outline-none focus:bg-white transition-all resize-y ${
                        errors.message
                          ? "border-rose-400 focus:ring-2 focus:ring-rose-400"
                          : "border-brand-border focus:ring-2 focus:ring-brand-electric"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[10px] sm:text-xs text-rose-500 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-fill-primary w-full py-3 sm:py-3.5 px-4 sm:px-6 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Success Modal */}
        {submittedData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-brand-navy/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-7 lg:p-8 shadow-2xl border border-brand-border relative space-y-4 sm:space-y-5 max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleReset}
                className="absolute top-3 right-3 sm:top-5 sm:right-5 p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-brand-secondary hover:text-brand-navy hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>

              <div className="pr-8">
                <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-brand-navy leading-tight">
                  Inquiry Validated Successfully!
                </h3>
                <p className="text-[10px] xs:text-[11px] sm:text-xs text-brand-secondary mt-1">
                  (Frontend Interactive Prototype Simulation)
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-soft border border-brand-border text-[10px] xs:text-[11px] sm:text-xs space-y-2">
                <div className="flex justify-between gap-3">
                  <span className="text-brand-secondary shrink-0">Sender:</span>
                  <span className="font-bold text-brand-navy text-right break-all">
                    {submittedData.name} ({submittedData.email})
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-brand-secondary shrink-0">Service:</span>
                  <span className="font-bold text-brand-navy text-right">
                    {submittedData.service}
                  </span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-brand-secondary shrink-0">Budget Tier:</span>
                  <span className="font-bold text-brand-navy text-right flex items-center justify-end gap-0.5">
                    <IndianRupee className="w-3 h-3" />
                    {submittedData.budget}
                  </span>
                </div>
                <div className="pt-2 border-t border-brand-border">
                  <span className="text-brand-secondary">Overview:</span>
                  <p className="text-brand-navy mt-1 italic break-words">
                    "{submittedData.message}"
                  </p>
                </div>
              </div>

              <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                Thank you! All form fields passed validation criteria. As noted
                in the specifications, no live backend server or SMTP mailer is
                attached to this frontend repository.
              </p>

              <Button
                onClick={handleReset}
                variant="primary"
                size="md"
                className="w-full"
              >
                Done / Close Simulation
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}