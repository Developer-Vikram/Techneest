import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import SEO from "../components/common/SEO";
import Button from "../components/common/Button";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Techneest"
        description="The page you are looking for does not exist or has been moved."
        canonicalPath="/404"
      />

      <div className="min-h-[70vh] flex items-center justify-center pt-20 sm:pt-24 pb-14 sm:pb-20">
        <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="max-w-xl w-full text-center space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-50 text-brand-electric text-3xl font-extrabold font-display border border-blue-100 shadow-sm">
            404
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Page Not Found
          </h1>

          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed max-w-md mx-auto">
            The page you requested could not be located. It might have been moved or removed.
          </p>

          <div className="pt-2">
            <Button
              to="/"
              variant="primary"
              size="lg"
              icon={Home}
              iconPosition="left"
            >
              Return to Homepage
            </Button>
          </div>

          {/* Helpful Quick Links */}
          <div className="pt-8 border-t border-brand-border">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-secondary mb-4">
              Explore Our Core Routes
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <Link
                to="/services/web-development"
                className="p-2.5 rounded-xl bg-brand-soft hover:bg-slate-200/70 text-brand-navy font-semibold transition-colors"
              >
                Web Dev
              </Link>
              <Link
                to="/services/mobile-app-development"
                className="p-2.5 rounded-xl bg-brand-soft hover:bg-slate-200/70 text-brand-navy font-semibold transition-colors"
              >
                Mobile Apps
              </Link>
              <Link
                to="/services/custom-software-development"
                className="p-2.5 rounded-xl bg-brand-soft hover:bg-slate-200/70 text-brand-navy font-semibold transition-colors"
              >
                Custom Systems
              </Link>
              <Link
                to="/contact"
                className="p-2.5 rounded-xl bg-brand-soft hover:bg-slate-200/70 text-brand-navy font-semibold transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}
