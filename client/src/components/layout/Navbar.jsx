import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Globe,
  Smartphone,
  Cpu,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import techneestLogo from "../../assets/Techneest-logo.png";

const servicesList = [
  {
    name: "Web Development",
    href: "/services/web-development",
    description: "High-performance websites, modern SaaS & web apps",
    icon: Globe,
    color: "blue",
    badge: "Fast & SEO-First",
  },
  {
    name: "Mobile App Development",
    href: "/services/mobile-app-development",
    description: "Native iOS & Android, React Native & Flutter apps",
    icon: Smartphone,
    color: "rose",
    badge: "iOS & Android",
  },
  {
    name: "Custom Software Development",
    href: "/services/custom-software-development",
    description: "Tailored business systems, automation & dashboards",
    icon: Cpu,
    color: "amber",
    badge: "Enterprise Grade",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const dropdownRef = useRef(null);
  const location = useLocation();

  // Scroll listener for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Click outside and escape key listener for dropdown and mobile drawer
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const isServicesActive = location.pathname.startsWith("/services");
  const isWorkActive = location.pathname.startsWith("/work");
  const isInsightsActive = location.pathname.startsWith("/insights");
  const isAboutActive = location.pathname === "/about";
  const isHomeActive = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* =========================================================================
          TOP CONTACT STRIP (Phone, Email, Hours - Compact & Elegant)
          ========================================================================= */}
      <div
        className={`bg-[#0B1028] text-slate-300 text-[11px] sm:text-xs border-b border-white/10 transition-all duration-300 ${
          isScrolled ? "hidden sm:block py-1 opacity-90" : "py-1.5 opacity-100"
        }`}
      >
        <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Contact Phone & Email Links */}
            <div className="flex items-center gap-4 sm:gap-6">
              <a
                href="tel:+15553894021"
                className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
                aria-label="Direct Phone Line: +1 (555) 389-4021"
              >
                <Phone className="w-3 h-3 text-brand-cyan shrink-0" />
                <span className="font-medium">+1 (555) 389-4021</span>
              </a>

              <a
                href="mailto:hello@techneest.com"
                className="flex items-center gap-1.5 hover:text-brand-cyan transition-colors"
                aria-label="Email Inquiry: hello@techneest.com"
              >
                <Mail className="w-3 h-3 text-brand-electric shrink-0" />
                <span className="font-medium">hello@techneest.com</span>
              </a>
            </div>

            {/* Right: Location & Response SLA (Hidden on narrow screens) */}
            <div className="hidden md:flex items-center gap-5 text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>Response SLA: &lt; 24h</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-brand-violet" />
                <span>San Francisco, CA</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN NAVIGATION BAR (Sticky Glassmorphic Container)
          ========================================================================= */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-100 py-2 sm:py-2.5"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-100/70 py-2.5 sm:py-3"
        }`}
      >
        <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              onClick={closeAllMenus}
              className="flex items-center gap-2.5 sm:gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric rounded-xl py-0.5 px-1"
              aria-label="Techneest Homepage"
            >
              <img
                src={techneestLogo}
                alt="Techneest Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0B1028] font-display leading-none">
                  Tech<span className="text-brand-electric">neest</span>
                </span>
                <span className="text-[10px] tracking-wider font-semibold uppercase text-[#59647D] mt-0.5">
                  Software Engineering
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-1.5"
            >
              {/* Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric ${
                    isActive
                      ? "text-brand-electric bg-blue-50/70"
                      : "text-[#0B1028] hover:text-brand-electric hover:bg-slate-50"
                  }`
                }
              >
                <span>Home</span>
                {isHomeActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2.5px] bg-gradient-to-r from-brand-cyan to-brand-electric rounded-full" />
                )}
              </NavLink>

              {/* Services Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setServicesDropdownOpen((prev) => !prev)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric ${
                    isServicesActive
                      ? "text-brand-electric bg-blue-50/70"
                      : "text-[#0B1028] hover:text-brand-electric hover:bg-slate-50"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180 text-brand-electric" : "text-slate-400"
                    }`}
                  />
                  {isServicesActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-[2.5px] bg-gradient-to-r from-brand-cyan to-brand-electric rounded-full" />
                  )}
                </button>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-1.5 w-[23rem] xl:w-[26rem] p-2.5 bg-white rounded-2xl shadow-xl border border-slate-100 z-50 ring-1 ring-black/5"
                    >
                      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Our Capabilities
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-electric">
                          <Sparkles className="w-3 h-3" />
                          Full-Cycle
                        </span>
                      </div>

                      <div className="space-y-1">
                        {servicesList.map((service) => {
                          const Icon = service.icon;
                          const isCurrent = location.pathname === service.href;

                          const colorMap = {
                            blue: {
                              bg: "bg-blue-50",
                              text: "text-brand-electric",
                              hoverBg: "group-hover:bg-brand-electric",
                              hoverText: "group-hover:text-white",
                              activeBg: "bg-blue-500 text-white",
                            },
                            rose: {
                              bg: "bg-rose-50",
                              text: "text-rose-600",
                              hoverBg: "group-hover:bg-rose-600",
                              hoverText: "group-hover:text-white",
                              activeBg: "bg-rose-600 text-white",
                            },
                            amber: {
                              bg: "bg-amber-50",
                              text: "text-amber-600",
                              hoverBg: "group-hover:bg-amber-600",
                              hoverText: "group-hover:text-white",
                              activeBg: "bg-amber-600 text-white",
                            },
                          };

                          const currentColors = colorMap[service.color] || colorMap.blue;

                          return (
                            <Link
                              key={service.href}
                              to={service.href}
                              onClick={closeAllMenus}
                              className={`flex items-start gap-3.5 p-2.5 rounded-xl transition-all duration-150 group card-liquid-fill ${
                                isCurrent
                                  ? "bg-blue-50/80 ring-1 ring-blue-100"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <div
                                className={`p-2.5 rounded-xl shrink-0 transition-colors duration-200 ${
                                  isCurrent
                                    ? currentColors.activeBg
                                    : `${currentColors.bg} ${currentColors.text} ${currentColors.hoverBg} ${currentColors.hoverText}`
                                }`}
                              >
                                <Icon className="w-4 h-4" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span
                                    className={`text-sm font-bold transition-colors ${
                                      isCurrent
                                        ? "text-brand-electric"
                                        : "text-[#0B1028] group-hover:text-brand-electric"
                                    }`}
                                  >
                                    {service.name}
                                  </span>
                                  <ArrowRight className="w-3.5 h-3.5 text-brand-electric opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 shrink-0" />
                                </div>
                                <p className="text-xs text-[#59647D] line-clamp-1 mt-0.5">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-2 pt-2 border-t border-slate-100 px-3 py-1 flex items-center justify-between text-xs">
                        <span className="text-[#59647D]">Need a tailored architecture?</span>
                        <Link
                          to="/contact"
                          onClick={closeAllMenus}
                          className="font-bold text-brand-electric hover:underline flex items-center gap-1"
                        >
                          Talk to an Architect &rarr;
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Work */}
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric ${
                    isActive || isWorkActive
                      ? "text-brand-electric bg-blue-50/70"
                      : "text-[#0B1028] hover:text-brand-electric hover:bg-slate-50"
                  }`
                }
              >
                <span>Work</span>
                {isWorkActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2.5px] bg-gradient-to-r from-brand-cyan to-brand-electric rounded-full" />
                )}
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric ${
                    isActive || isAboutActive
                      ? "text-brand-electric bg-blue-50/70"
                      : "text-[#0B1028] hover:text-brand-electric hover:bg-slate-50"
                  }`
                }
              >
                <span>About</span>
                {isAboutActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2.5px] bg-gradient-to-r from-brand-cyan to-brand-electric rounded-full" />
                )}
              </NavLink>

              {/* Insights */}
              <NavLink
                to="/insights"
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric ${
                    isActive || isInsightsActive
                      ? "text-brand-electric bg-blue-50/70"
                      : "text-[#0B1028] hover:text-brand-electric hover:bg-slate-50"
                  }`
                }
              >
                <span>Insights</span>
                {isInsightsActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-[2.5px] bg-gradient-to-r from-brand-cyan to-brand-electric rounded-full" />
                )}
              </NavLink>
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                onClick={closeAllMenus}
                className="btn-fill-primary py-2.5 px-5 rounded-xl text-sm font-bold flex items-center gap-2 group shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 sm:p-2.5 rounded-xl text-[#0B1028] bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE SLIDE-IN DRAWER FROM THE RIGHT (Strict Requirement)
          ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeAllMenus}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Right Slide-in Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 w-[86vw] max-w-[360px] bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top Header with Logo & Close Button */}
              <div>
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-[#F8FAFD]">
                  <Link
                    to="/"
                    onClick={closeAllMenus}
                    className="flex items-center gap-2"
                  >
                    <img
                      src={techneestLogo}
                      alt="Techneest Logo"
                      className="h-7 w-auto object-contain"
                    />
                    <span className="font-extrabold text-lg tracking-tight text-[#0B1028] font-display">
                      Tech<span className="text-brand-electric">neest</span>
                    </span>
                  </Link>

                  <button
                    type="button"
                    onClick={closeAllMenus}
                    className="p-2 rounded-xl text-slate-500 hover:text-[#0B1028] hover:bg-slate-200 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="p-4 space-y-1.5">
                  <NavLink
                    to="/"
                    end
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        isActive
                          ? "text-brand-electric bg-blue-50/80 border-l-4 border-brand-electric"
                          : "text-[#0B1028] hover:bg-slate-50"
                      }`
                    }
                  >
                    <span>Home</span>
                  </NavLink>

                  {/* Services Accordion Submenu */}
                  <div className="rounded-xl border border-slate-100 overflow-hidden my-1">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
                        isServicesActive
                          ? "text-brand-electric bg-blue-50/50"
                          : "text-[#0B1028] bg-slate-50/70"
                      }`}
                      aria-expanded={mobileServicesOpen}
                    >
                      <span className="flex items-center gap-2">
                        <span>Services</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-brand-electric">
                          3 Capabilities
                        </span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-brand-electric" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                        {servicesList.map((service) => {
                          const Icon = service.icon;
                          const isCurrent = location.pathname === service.href;

                          return (
                            <Link
                              key={service.href}
                              to={service.href}
                              onClick={closeAllMenus}
                              className={`flex items-center gap-3 p-2.5 rounded-xl text-xs font-semibold transition-colors ${
                                isCurrent
                                  ? "text-brand-electric bg-blue-50/80 border-l-3 border-brand-electric"
                                  : "text-[#0B1028] hover:bg-slate-50"
                              }`}
                            >
                              <div className="w-7 h-7 rounded-lg bg-blue-50 text-brand-electric flex items-center justify-center shrink-0">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="font-bold">{service.name}</div>
                                <div className="text-[11px] text-[#59647D] font-normal">
                                  {service.badge}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <NavLink
                    to="/work"
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        isActive || isWorkActive
                          ? "text-brand-electric bg-blue-50/80 border-l-4 border-brand-electric"
                          : "text-[#0B1028] hover:bg-slate-50"
                      }`
                    }
                  >
                    <span>Work</span>
                  </NavLink>

                  <NavLink
                    to="/about"
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        isActive
                          ? "text-brand-electric bg-blue-50/80 border-l-4 border-brand-electric"
                          : "text-[#0B1028] hover:bg-slate-50"
                      }`
                    }
                  >
                    <span>About</span>
                  </NavLink>

                  <NavLink
                    to="/insights"
                    onClick={closeAllMenus}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                        isActive || isInsightsActive
                          ? "text-brand-electric bg-blue-50/80 border-l-4 border-brand-electric"
                          : "text-[#0B1028] hover:bg-slate-50"
                      }`
                    }
                  >
                    <span>Insights</span>
                  </NavLink>
                </div>
              </div>

              {/* Drawer Bottom Action & Contact Info */}
              <div className="p-4 border-t border-slate-100 bg-[#F8FAFD] space-y-3">
                <Link
                  to="/contact"
                  onClick={closeAllMenus}
                  className="btn-fill-primary w-full py-3 px-5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Let's Talk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-2 text-[11px] text-slate-500 space-y-1.5 border-t border-slate-200">
                  <a
                    href="tel:+15553894021"
                    className="flex items-center gap-2 text-slate-700 hover:text-brand-electric"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-cyan" />
                    <span>+1 (555) 389-4021</span>
                  </a>
                  <a
                    href="mailto:hello@techneest.com"
                    className="flex items-center gap-2 text-slate-700 hover:text-brand-electric"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-electric" />
                    <span>hello@techneest.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
