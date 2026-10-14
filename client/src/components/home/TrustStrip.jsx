export default function TrustStrip() {
  return (
    <section className="py-6 sm:py-7 border-y border-slate-100 bg-[#FAFCFF]">
      <div className="mx-auto w-full max-w-[105rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Eyebrow Label matching reference */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block sm:inline">
              TRUSTED BY
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block sm:inline sm:ml-1">
              GROWING BUSINESSES
            </span>
          </div>

          {/* Client Logos Row matching reference */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 lg:gap-14 text-slate-500 font-bold text-base sm:text-lg">
            {/* Kraftly */}
            <div className="flex items-center gap-2 hover:text-[#0B1028] transition-colors">
              <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l5.5 5.5-5.5 5.5-5.5-5.5 5.5-5.5z" />
              </svg>
              <span className="font-display tracking-tight text-slate-700">Kraftly</span>
            </div>

            {/* zencart */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1028] transition-colors">
              <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.75C6.5 7.5 4 10 4 14c0 3.5 2.5 5 4.5 5 1.5 0 2.5-.5 3-1 2-2 3-5 5.5-10z" />
              </svg>
              <span className="font-display tracking-tight text-slate-700">zencart</span>
            </div>

            {/* Paylio */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1028] transition-colors">
              <div className="w-5 h-5 rounded-md bg-slate-700 text-white flex items-center justify-center text-xs font-black">
                P
              </div>
              <span className="font-display tracking-tight text-slate-700">Paylio</span>
            </div>

            {/* Travelon */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1028] transition-colors">
              <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 20l8-4 8 4L12 2z" />
              </svg>
              <span className="font-display tracking-tight text-slate-700">Travelon</span>
            </div>

            {/* Healthix */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1028] transition-colors">
              <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
              </svg>
              <span className="font-display tracking-tight text-slate-700">Healthix</span>
            </div>

            {/* Eduverse */}
            <div className="flex items-center gap-1.5 hover:text-[#0B1028] transition-colors">
              <svg className="w-5 h-5 text-slate-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.45 13.47L12 18.13l8.55-4.66.9.49-9.45 5.16L2.55 13.96l.9-.49z" />
              </svg>
              <span className="font-display tracking-tight text-slate-700">Eduverse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
