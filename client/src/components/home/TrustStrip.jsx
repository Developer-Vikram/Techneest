import { motion } from "framer-motion";

export default function TrustStrip() {
  return (
    <section className="py-6 sm:py-8 border-y border-slate-100 bg-[#FAFCFF] overflow-hidden">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
          
          {/* Eyebrow Label */}
          <div className="shrink-0 text-center lg:text-left">
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline">
              TRUSTED BY
            </span>
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline sm:ml-1">
              GROWING BUSINESSES
            </span>
          </div>

          {/* Client Logos Row */}
          {/* 👈 style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} aur [&::-webkit-scrollbar]:hidden se scrollbar hide hoga */}
          <div 
            className="w-full lg:w-auto overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex items-center justify-start lg:justify-end gap-6 sm:gap-8 lg:gap-10 min-w-max px-2 sm:px-0">
              
              {/* Kraftly (Blue) */}
              <div className="flex items-center gap-2 group cursor-pointer">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5-5.5-5.5 5.5-5.5z" />
                </svg>
                <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base group-hover:text-blue-600 transition-colors whitespace-nowrap">Kraftly</span>
              </div>

              {/* zencart (Green) */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75C6.5 7.5 4 10 4 14c0 3.5 2.5 5 4.5 5 1.5 0 2.5-.5 3-1 2-2 3-5 5.5-10z" />
                </svg>
                <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base group-hover:text-emerald-600 transition-colors whitespace-nowrap">zencart</span>
              </div>

              {/* Paylio (Purple) */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-purple-600 text-white flex items-center justify-center text-[10px] sm:text-xs font-black group-hover:scale-110 transition-transform">
                  P
                </div>
                <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base group-hover:text-purple-600 transition-colors whitespace-nowrap">Paylio</span>
              </div>

              {/* Travelon (Orange) */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 20l8-4 8 4L12 2z" />
                </svg>
                <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base group-hover:text-orange-600 transition-colors whitespace-nowrap">Travelon</span>
              </div>

              {/* Healthix (Rose) */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-rose-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
                </svg>
                <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base group-hover:text-rose-600 transition-colors whitespace-nowrap">Healthix</span>
              </div>

              {/* Eduverse (Indigo) */}
              <div className="flex items-center gap-1.5 group cursor-pointer">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.45 13.47L12 18.13l8.55-4.66.9.49-9.45 5.16L2.55 13.96l.9-.49z" />
                </svg>
                <span className="font-display font-bold tracking-tight text-slate-800 text-sm sm:text-base group-hover:text-indigo-600 transition-colors whitespace-nowrap">Eduverse</span>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}