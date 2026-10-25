import { useEffect, useRef } from "react";

// One shared observer for every <Reveal>; elements fade up once when they enter the viewport.
let observer = null;

function observe(el) {
  if (typeof IntersectionObserver === "undefined") {
    el.classList.add("isVisible");
    return () => {};
  }
  observer ??= new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("isVisible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -60px 0px" }
  );
  observer.observe(el);
  return () => observer.unobserve(el);
}

// CSS does the animation (see .reveal in _base.scss) and honours prefers-reduced-motion.
// `onLoad` animates on mount instead of on scroll, for above-the-fold content.
export default function Reveal({ as = "div", delay = 0, onLoad = false, className = "", style, children, ...rest }) {
  const Tag = as;
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!onLoad) return observe(el);
    const raf = requestAnimationFrame(() => el.classList.add("isVisible"));
    return () => cancelAnimationFrame(raf);
  }, [onLoad]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={{ ...style, "--reveal-delay": `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
