import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { FEATURES } from "../config/features";

const SECTIONS = ["work", "experience", "skills"];

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";
  const labels = t.home.nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function goTo(id) {
    setMenuOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  }

  const items = SECTIONS.map((id) => ({ id, label: labels[id] }));

  return (
    <header className={`siteNav ${scrolled ? "isScrolled" : ""} ${menuOpen ? "isOpen" : ""}`}>
      <nav className="siteNavInner" aria-label="Main">
        <Link to="/" className="siteBrand" onClick={() => setMenuOpen(false)}>
          <img src="/img/logo-64.webp" alt="" width="28" height="28" />
          <span>
            mkanaan<span className="accentDot">.</span>
          </span>
        </Link>

        <div className="siteNavLinks">
          {items.map((x) => (
            <button
              key={x.id}
              type="button"
              className={`siteNavLink ${onHome && active === x.id ? "isActive" : ""}`}
              onClick={() => goTo(x.id)}
            >
              {x.label}
            </button>
          ))}
          <Link to="/blog" className={`siteNavLink ${location.pathname.startsWith("/blog") ? "isActive" : ""}`}>
            {labels.blog}
          </Link>
          {FEATURES.chat && (
            <Link to="/chat" className="siteNavLink">
              AI Chat
            </Link>
          )}
        </div>

        <div className="siteNavRight">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button type="button" className="siteNavCta" onClick={() => goTo("contact")}>
            {labels.contact}
          </button>
          <button
            type="button"
            className="siteNavBurger"
            aria-label={labels.menu}
            aria-expanded={menuOpen}
            aria-controls="site-nav-mobile"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </nav>

      <div id="site-nav-mobile" className="siteNavMobile" hidden={!menuOpen}>
        {items.map((x) => (
          <button key={x.id} type="button" className="siteNavMobileLink" onClick={() => goTo(x.id)}>
            {x.label}
          </button>
        ))}
        <Link to="/blog" className="siteNavMobileLink" onClick={() => setMenuOpen(false)}>
          {labels.blog}
        </Link>
        <button type="button" className="siteNavMobileLink" onClick={() => goTo("contact")}>
          {labels.contact}
        </button>
        <div className="siteNavMobileLang">
          <LanguageSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>
    </header>
  );
}
