import { useEffect, useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <button className="brand" onClick={() => scrollToId("top")} aria-label="Go to top">
          MK<span className="brandDot" />
        </button>

        <div className="navLinks">
          {items.map((x) => (
            <button key={x.id} className="navLink" onClick={() => scrollToId(x.id)}>
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
              scrollToId("contact");
            }}
          >
            {t.nav.contact}
          </a>
          <a href="/chat">Chat</a>
        </div>
      </nav>
    </div>
  );
}
