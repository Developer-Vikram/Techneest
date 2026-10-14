import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          const navOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }, 80);
        return () => clearTimeout(timer);
      }
    }

    // On standard route transition, reset to top instantly to preserve native React Router and back/forward behavior
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    // Refresh AOS element registry and positions for newly mounted route content
    const aosTimer = setTimeout(() => {
      AOS.refreshHard();
    }, 120);

    return () => clearTimeout(aosTimer);
  }, [pathname, hash]);

  return null;
}
