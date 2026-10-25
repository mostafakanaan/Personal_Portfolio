import { useEffect, useRef } from "react";

// Floating "back to top" button, shown after scrolling past the first screen.
export default function BackToTop({ label }) {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      ref.current?.classList.toggle("isVisible", window.scrollY > window.innerHeight * 1.2);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toTop() {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }

  return (
    <button ref={ref} type="button" className="backToTop" onClick={toTop} aria-label={label} title={label}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
