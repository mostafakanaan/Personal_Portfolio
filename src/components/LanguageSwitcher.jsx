import { useEffect, useMemo, useRef, useState } from "react";
import { LANGS } from "../i18n/translations";

export default function LanguageSwitcher({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const current = useMemo(() => {
    return LANGS.find((l) => l.code === lang) || LANGS[0];
  }, [lang]);

  useEffect(() => {
    function onMouseDown(e) {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="lang" ref={rootRef}>
      <button
        type="button"
        className="langBtn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <img src={`/flags/${current.flag}.svg`} alt="" />
        <span>{current.label}</span>
        <span className="chev" aria-hidden="true">▾</span>
      </button>

      {open && (
        <div className="langMenu" role="menu">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              role="menuitem"
              className={`langItem ${l.code === lang ? "active" : ""}`}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
            >
              <img src={`/flags/${l.flag}.svg`} alt="" />
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
