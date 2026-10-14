import { Link } from "react-router-dom";

/**
 * Premium Button component featuring the signature corner-origin
 * liquid-fill hover animation. Supports React Router links, external links,
 * and standard button elements with full accessibility.
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary", // "primary" | "secondary" | "white" | "ghost"
  size = "md", // "sm" | "md" | "lg"
  className = "",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs md:text-sm gap-1.5",
    md: "px-5 py-2.5 text-sm md:text-base gap-2",
    lg: "px-7 py-3.5 text-base md:text-lg gap-2.5",
  }[size] || "px-5 py-2.5 text-sm md:text-base gap-2";

  const variantClass = {
    primary: "btn-fill-primary",
    secondary: "btn-fill-secondary",
    white: "btn-fill-white",
    ghost:
      "inline-flex items-center justify-center font-medium rounded-xl text-brand-secondary hover:text-brand-electric hover:bg-brand-soft transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-electric",
  }[variant] || "btn-fill-primary";

  const combinedClasses = `${variantClass} ${sizeClasses} ${
    disabled ? "opacity-60 cursor-not-allowed pointer-events-none" : "cursor-pointer"
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
}
