import { useEffect, useState, useRef } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navWrapRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(e) {
      if (navWrapRef.current && !navWrapRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

  function handleBrandClick() {
    if (window.innerWidth <= 720) {
      setMenuOpen((prev) => !prev);
      return;
    }
    scrollToId("top");
  }

  function handleNavClick(id) {
    scrollToId(id);
    setMenuOpen(false);
  }

  const items = [
    { id: "top", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "skills", label: t.nav.skills },
    { id: "experience", label: t.nav.experience },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <div ref={navWrapRef} className={`navWrap ${scrolled ? "navWrap--scrolled" : ""}`}>
      <nav className="nav">
        <button
          className="brand"
          onClick={handleBrandClick}
          aria-label="Open navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          MK
          <span className="brandDot" />
          <span className="brandMenu" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div className="navLinks">
          {items.map((x) => (
            <button key={x.id} className="navLink" onClick={() => handleNavClick(x.id)}>
              {x.label}
            </button>
          ))}
        </div>

        <div className="navRight">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <a href="/chat" onClick={() => setMenuOpen(false)} title="KanaanChat" className="navRobot">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="10" rx="2" />
              <circle cx="12" cy="5" r="2" />
              <path d="M12 7v4" />
              <line x1="8" y1="16" x2="8" y2="16" />
              <line x1="16" y1="16" x2="16" y2="16" />
            </svg>
          </a>
        </div>
      </nav>

      <div id="mobile-nav" className={`navMobile ${menuOpen ? "open" : ""}`}>
        <div className="navMobileInner">
          {items.map((x) => (
            <button key={x.id} className="navMobileLink" onClick={() => handleNavClick(x.id)}>
              {x.label}
            </button>
          ))}
          <p className="navMobileText">
            {t.hero.mobileRobotText}
          </p>
          <div className="navMobileActions">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <a className="navMobileLink navRobot" href="/chat" onClick={() => setMenuOpen(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="10" rx="2" />
                <circle cx="12" cy="5" r="2" />
                <path d="M12 7v4" />
                <line x1="8" y1="16" x2="8" y2="16" />
                <line x1="16" y1="16" x2="16" y2="16" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
