import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    /* A hash means "jump to this section", not "jump to the top" */
    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      /* The section may not be mounted yet on a fresh page load */
      const timer = setTimeout(() => {
        const late = document.getElementById(hash.slice(1));
        if (late) late.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);

      return () => clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "smooth"
    });
  }, [pathname, hash]);

  return null;
}
