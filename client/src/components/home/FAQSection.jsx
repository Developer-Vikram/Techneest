import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  Clock,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import { companyData } from "../../data/companyData";

export default function FAQSection({
  faqs = companyData.generalFaqs,
  title,
  description,
  eyebrow = "FREQUENTLY ASKED QUESTIONS",
  id = "faqs",
  showContactForm = false,
}) {
  // Store open index; null means all closed
  const [openIndex, setOpenIndex] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Web Application Development",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      errors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim()) {
      errors.message = "Please describe your project or technical questions.";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please provide at least 10 characters so we can understand your requirements.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate brief client-side submission with realistic response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "Web Application Development",
        message: "",
      });
    }, 800);
  };

  return (
    <section id={id} className="py-12 sm:py-16 bg-white border-t border-slate-100 relative">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHeading
            eyebrow={eyebrow}
            title={title || "Clear Answers to Common Questions"}
            gradientWord={title ? "" : "Common Questions"}
            description={
              description ||
              "Everything you need to know about our engineering approach, collaboration model, and delivery standards."
            }
            align="center"
            className="mb-10 sm:mb-12"
          />
        </div>

        {showContactForm ? (
          /* 2-Column Layout for Homepage */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Accordion FAQs */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div
                    key={faq.question || index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-blue-300 bg-blue-50/30 shadow-sm ring-1 ring-blue-100"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      id={buttonId}
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-inset transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                            isOpen
                              ? "bg-brand-electric text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0B1028] leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 pointer-events-none transition-transform duration-300 ${
                          isOpen
                            ? "bg-brand-electric text-white rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-[#59647D] leading-relaxed border-t border-slate-100">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Column: "Still have questions? Let's talk" Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <div className="rounded-3xl bg-[#0B1028] text-white p-6 sm:p-8 border border-white/10 shadow-xl relative overflow-hidden">
                {/* Glow Accents */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-brand-electric/25 to-transparent pointer-events-none rounded-tr-3xl -z-0" />
                <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-brand-cyan/20 to-transparent pointer-events-none rounded-bl-3xl -z-0" />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-brand-cyan text-[11px] font-bold tracking-wider uppercase border border-white/10">
                      <Sparkles className="w-3 h-3" />
                      Direct Inquiry
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Still have questions? Let's talk
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                    Have a unique requirement or want an engineer's perspective? Send us your note and a technical lead will respond within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-6 p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                    >
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-white">
                        Inquiry Received!
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Thank you for reaching out. A senior software engineer will review your inquiry and follow up within 24 business hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-semibold text-brand-cyan hover:underline pt-2 cursor-pointer"
                      >
                        Send another question &rarr;
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="faq-form-name"
                          className="block text-xs font-semibold text-slate-200 mb-1"
                        >
                          Your Name <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="faq-form-name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-400 focus:outline-none transition-all ${
                            formErrors.name
                              ? "border-rose-500 ring-1 ring-rose-500"
                              : "border-white/15 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          }`}
                        />
                        {formErrors.name && (
                          <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.name}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="faq-form-email"
                          className="block text-xs font-semibold text-slate-200 mb-1"
                        >
                          Work Email <span className="text-rose-400">*</span>
                        </label>
                        <input
                          id="faq-form-email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@company.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-400 focus:outline-none transition-all ${
                            formErrors.email
                              ? "border-rose-500 ring-1 ring-rose-500"
                              : "border-white/15 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          }`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.email}
                          </p>
                        )}
                      </div>

                      {/* Service */}
                      <div>
                        <label
                          htmlFor="faq-form-service"
                          className="block text-xs font-semibold text-slate-200 mb-1"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="faq-form-service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#141D3B] border border-white/15 text-sm text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all cursor-pointer"
                        >
                          <option value="Web Application Development">Web Application Development</option>
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="Custom Software & Cloud Systems">Custom Software & Cloud Systems</option>
                          <option value="Architecture & Code Review">Architecture & Code Review</option>
                          <option value="Other / General Inquiry">Other / General Inquiry</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="faq-form-message"
                          className="block text-xs font-semibold text-slate-200 mb-1"
                        >
                          Your Question or Project Scope <span className="text-rose-400">*</span>
                        </label>
                        <textarea
                          id="faq-form-message"
                          name="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Briefly describe what you're looking to build or ask..."
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-sm text-white placeholder-slate-400 focus:outline-none transition-all resize-none ${
                            formErrors.message
                              ? "border-rose-500 ring-1 ring-rose-500"
                              : "border-white/15 focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan"
                          }`}
                        />
                        {formErrors.message && (
                          <p className="mt-1 text-[11px] text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            {formErrors.message}
                          </p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-liquid-cyan w-full py-3 px-5 rounded-xl bg-gradient-to-r from-brand-electric to-brand-cyan text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 transition-all hover:scale-[1.01] active:scale-[0.99]"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Send Inquiry to Engineering Lead</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  )}

                  {/* Quick Direct Contacts */}
                  <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                    <a
                      href="mailto:hello@techneest.com"
                      className="flex items-center gap-2 text-slate-300 hover:text-brand-cyan transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="truncate">hello@techneest.com</span>
                    </a>
                    <a
                      href="tel:+15553894021"
                      className="flex items-center gap-2 text-slate-300 hover:text-brand-cyan transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-cyan shrink-0" />
                      <span className="truncate">+1 (555) 389-4021</span>
                    </a>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>Average reply time: under 4 hours during business days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Single Column Centered Layout for Service Pages */
          <>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const buttonId = `faq-btn-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div
                    key={faq.question || index}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "border-blue-300 bg-blue-50/30 shadow-sm ring-1 ring-blue-100"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-xs"
                    }`}
                  >
                    <button
                      type="button"
                      id={buttonId}
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric focus-visible:ring-inset transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <div className="flex items-center gap-3 pr-4">
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold transition-colors ${
                            isOpen
                              ? "bg-brand-electric text-white"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#0B1028] leading-snug">
                          {faq.question}
                        </span>
                      </div>

                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 pointer-events-none transition-transform duration-300 ${
                          isOpen
                            ? "bg-brand-electric text-white rotate-180"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-2 text-xs sm:text-sm text-[#59647D] leading-relaxed border-t border-slate-100">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Quick Help Card */}
            <div className="mt-10 max-w-3xl mx-auto p-4 sm:p-5 rounded-2xl bg-[#F8FAFD] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-electric flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-[#0B1028]">
                    Have a unique technical question?
                  </p>
                  <p className="text-xs text-[#59647D]">
                    Our software architects will review your project requirements directly.
                  </p>
                </div>
              </div>
              <a
                href="/contact"
                className="text-xs sm:text-sm font-bold text-brand-electric hover:underline shrink-0"
              >
                Ask an Engineer &rarr;
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
