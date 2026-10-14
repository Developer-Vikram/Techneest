export default function Badge({
  children,
  variant = "cyan", // "cyan" | "blue" | "violet" | "dark" | "outline"
  className = "",
  dot = true,
}) {
  const variantStyles = {
    cyan: "bg-cyan-50/80 text-cyan-800 border-cyan-200/80",
    blue: "bg-blue-50/80 text-blue-800 border-blue-200/80",
    violet: "bg-purple-50/80 text-purple-800 border-purple-200/80",
    dark: "bg-white/10 text-white border-white/20 backdrop-blur-md",
    outline: "bg-white text-brand-secondary border-brand-border",
  }[variant] || "bg-cyan-50/80 text-cyan-800 border-cyan-200/80";

  const dotColors = {
    cyan: "bg-brand-cyan shadow-[0_0_8px_#00D9F5]",
    blue: "bg-brand-electric shadow-[0_0_8px_#075BFF]",
    violet: "bg-brand-violet shadow-[0_0_8px_#6D28D9]",
    dark: "bg-brand-cyan shadow-[0_0_8px_#00D9F5]",
    outline: "bg-slate-400",
  }[variant] || "bg-brand-cyan";

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border transition-colors ${variantStyles} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotColors}`} />}
      <span>{children}</span>
    </span>
  );
}
