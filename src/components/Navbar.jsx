import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <div className={`navWrap ${scrolled ? "navWrap--scrolled" : ""}`}>
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
          <a
            className="navCta"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            {t.nav.contact}
          </a>
          <a href="/chat" onClick={() => setMenuOpen(false)}>
            KanaanChat
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
          <div className="navMobileRow">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <a
              className="navCta navCtaFull"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
            >
              {t.nav.contact}
            </a>
          </div>
          <a className="navMobileLink" href="/chat" onClick={() => setMenuOpen(false)}>
            KanaanChat
          </a>
        </div>
      </div>
    </div>
  );
}
