import { useState, useEffect, useRef } from "react";

/**
 * AnimatedCounter counts up smoothly from 0 to target value when scrolled into view.
 * Supports numbers with prefixes and suffixes like "100+", "50+", "99.8%", "4+".
 * Strictly runs once per view, handles route navigation, and respects prefers-reduced-motion.
 */
export default function AnimatedCounter({
  value,
  duration = 1600,
  className = "",
}) {
  const [displayValue, setDisplayValue] = useState(() => {
    const strVal = String(value || "").trim();
    const match = strVal.match(/^([^0-9.]*)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return strVal;
    if (
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return strVal;
    }
    const prefix = match[1] || "";
    const suffix = match[3] || "";
    return `${prefix}0${suffix}`;
  });

  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Parse value string: separate prefix, numeric part, decimals, and suffix
    const strVal = String(value || "").trim();
    const match = strVal.match(/^([^0-9.]*)(\d+(?:\.\d+)?)(.*)$/);

    if (!match) return;

    const prefix = match[1] || "";
    const targetNum = parseFloat(match[2]);
    const suffix = match[3] || "";
    const isDecimal = match[2].includes(".");
    const decimalPlaces = isDecimal ? match[2].split(".")[1].length : 0;

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const node = containerRef.current;
    if (!node) return;

    let animationFrameId;

    const startCounting = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const startTime = performance.now();

      const updateCount = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Ease-out cubic curve: fast start, soft deceleration at the end
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentNum = targetNum * easeProgress;

        const formattedNumber = isDecimal
          ? currentNum.toFixed(decimalPlaces)
          : Math.floor(currentNum).toLocaleString();

        setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        } else {
          setDisplayValue(strVal);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);
    };

    // Use IntersectionObserver to trigger animation when visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration]);

  return (
    <span ref={containerRef} className={`inline-block tabular-nums ${className}`}>
      {displayValue}
    </span>
  );
}
