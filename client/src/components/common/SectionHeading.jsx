import Badge from "./Badge";

export default function SectionHeading({
  eyebrow,
  title,
  gradientWord = "",
  description,
  align = "center", // "center" | "left"
  theme = "light", // "light" | "dark"
  className = "",
  badgeVariant = "blue",
}) {
  const isCentered = align === "center";
  const isDark = theme === "dark";

  // If gradientWord is specified, split the title and apply the gradient to that word/phrase
  const renderTitle = () => {
    if (!gradientWord || !title.includes(gradientWord)) {
      return title;
    }

    const parts = title.split(gradientWord);
    return (
      <>
        {parts[0]}
        <span className="text-gradient-brand">{gradientWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div
      className={`max-w-3xl ${isCentered ? "mx-auto text-center" : "text-left"} ${className}`}
      data-aos="fade-up"
    >
      {eyebrow && (
        <div className="mb-3.5">
          <Badge variant={isDark ? "dark" : badgeVariant}>{eyebrow}</Badge>
        </div>
      )}
      <h2
        className={`text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] ${
          isDark ? "text-white" : "text-brand-navy"
        }`}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? "text-slate-300" : "text-brand-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
