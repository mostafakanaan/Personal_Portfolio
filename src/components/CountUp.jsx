import { useLayoutEffect, useRef } from "react";

// Counts up to `value` the first time it scrolls into view. The text is written
// straight to the DOM so the animation causes no React re-renders.
export default function CountUp({ value, prefix = "", suffix = "", duration = 900 }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const render = (n) => {
      el.textContent = `${prefix}${n}${suffix}`;
    };
    render(value);

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min(1, (now - start) / duration);
          render(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        render(0);
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      render(value);
    };
  }, [value, prefix, suffix, duration]);

  return <b ref={ref} />;
}
