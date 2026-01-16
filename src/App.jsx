// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ChatPage from "./pages/ChatPage";
import Background from "./components/Background";

import { profile } from "./data/portfolio";
import photo from "./assets/cv-photo.jpg";
import heroBg from "./assets/hero-bg.png";
import { LANGS, T /*, tr */ } from "./i18n/translations";

function getLangMeta(code) {
  return LANGS.find((x) => x.code === code) || LANGS[0];
}

function getInitialLang() {
  const stored = localStorage.getItem("lang");
  if (stored && LANGS.some((l) => l.code === stored)) return stored;

  const browserLangs = navigator?.languages?.length
    ? navigator.languages
    : [navigator?.language];

  const match = browserLangs
    .map((code) => (code || "").toLowerCase().split("-")[0])
    .find((code) => LANGS.some((l) => l.code === code));

  return match || "en";
}

function getProfileForLang(lang) {
  const override = profile.i18n?.[lang];
  if (!override) return profile;

  return {
    ...profile,
    ...override,
    experience: override.experience || profile.experience,
    education: override.education || profile.education,
    projects: override.projects || profile.projects,
    spokenLanguages: override.spokenLanguages || profile.spokenLanguages,
  };
}

function PortfolioPage({ t, lang, setLang, meta, profileView }) {
  const year = new Date().getFullYear();
  const displayName = profileView.name;
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div id="top" className="page">
      <Background />
      <Navbar t={t} lang={lang} setLang={setLang} />

      {/* HERO */}
      <header className="hero">
        <div className="heroBg" aria-hidden="true">
          <div className="heroImage" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="heroOverlay" />
        </div>

        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="heroContent">
              <div className="kicker">
                <span className="dot" />
                {profileView.title} · {profileView.location}
              </div>

              <h1 className="h1 nameRow">
                <span
                  className="typingName"
                  style={{ "--typing-steps": displayName.length }}
                >
                  {displayName}
                </span>
                <span className="accent">.</span>
              </h1>

              <p className="lead">{t.hero.quote}</p>

              <div className="heroActions">
                <a className="btn btnPrimary" href="#projects">
                  {t.hero.ctaProjects}
                </a>
                <a className="btn btnGhost" href={profileView.links.email}>
                  {t.contact.emailMe}
                </a>
                <a className="btn btnGhost" href={profileView.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btnGhost" href={profileView.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="photoCard">
              <img src={photo} alt={`${displayName} portrait`} className="photo" />
              <div className="photoGlow" aria-hidden="true" />
              <div className="photoMeta">
                <div className="photoName">{displayName}</div>
                <div className="photoRole muted">{profileView.title}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
          <div className="panel aboutPanel">
            <div className="aboutContent">
              <p className="body">
                {t.about.body} {t.about.chatCTA}
                <a
                  href="/chat"
                  className="robotIconLink"
                  aria-label="Chat with my assistant"
                >
                  <svg
                    className="robotIcon"
                    width="22"
                    height="22"
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
              </p>
            </div>
            <button
              className="aiStackPreview"
              onClick={() => setLightboxOpen(true)}
              aria-label={t.aiStack.viewFull}
            >
              <img
                src="/img/myaistack.png"
                alt="My AI Stack Preview"
                className="aiStackPreviewImg"
              />
              <div className="aiStackPreviewOverlay">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                </svg>
                <span>{t.aiStack.viewFull}</span>
              </div>
            </button>
          </div>
        </Section>

        <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
          <div className="panel">
            <div className="miniTitle">{t.skills.core}</div>
            <div className="chips chipsBig">
              {profileView.skills.languages.map((s) => (
                <span key={s} className="chip chipBig">
                  {s}
                </span>
              ))}
            </div>

            <div className="divider" />

            <div className="twoCol">
              <div>
                <div className="miniTitle">{t.skills.frontend}</div>
                <div className="chips">
                  {profileView.skills.frontend.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="miniTitle">{t.skills.devops}</div>
                <div className="chips">
                  {profileView.skills.devops.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                  {profileView.skills.security.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="divider" />

            <div className="miniTitle">{t.skills.data}</div>
            <div className="chips">
              {profileView.skills.data.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="ai-stack" eyebrow={t.aiStack.eyebrow} title={t.aiStack.title}>
          <div className="panel aiStackPanel">
            <p className="body aiStackDesc">{t.aiStack.description}</p>
            <button
              className="aiStackImageWrapper"
              onClick={() => setLightboxOpen(true)}
              aria-label={t.aiStack.viewFull}
            >
              <img
                src="/img/myaistack.png"
                alt="My AI Stack - AI workflow diagram"
                className="aiStackImage"
              />
              <div className="aiStackHoverOverlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1" />
                </svg>
                <span>{t.aiStack.viewFull}</span>
              </div>
            </button>
          </div>
        </Section>

        <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
          <div className="stack">
            {profileView.experience.map((x) => (
              <div key={x.company + x.period} className="panel">
                <div className="row">
                  <div>
                    <h3 className="h3">{x.role}</h3>
                    <div className="muted">
                      {x.company} · {x.location}
                    </div>
                  </div>
                  <div className="muted">{x.period}</div>
                </div>
                <ul className="list">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow={t.education.eyebrow} title={t.education.title}>
          <div className="stack">
            {profileView.education.map((e) => (
              <div key={e.school + e.period} className="panel">
                <h3 className="h3">{e.degree}</h3>
                <div className="muted">{e.school}</div>
                <div className="muted">{e.period}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="languages" eyebrow={t.languages.eyebrow} title={t.languages.title}>
          <div className="panel">
            <div className="chips chipsBig">
              {profileView.spokenLanguages.map((l) => (
                <span key={l} className="chip chipBig">
                  {l}
                </span>
              ))}
            </div>
            <div className="hint muted">{t.languages.note}</div>
          </div>
        </Section>

        <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
          <div className="cards">
            {profileView.projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
          <div className="panel contactPanel">
            <div className="contactIconRow">
              <a
                className="iconBtn iconBtnPrimary"
                href={profileView.links.email}
                aria-label={t.contact.emailMe}
                title={t.contact.emailMe}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </a>

              <a
                className="iconBtn"
                href={profileView.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88ZM2.5 22h4.9V8.2H2.5V22Zm7.7-13.8H15v1.9h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V22h-4.9v-6.2c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4V22H10.2V8.2Z" />
                </svg>
              </a>

              <a
                className="iconBtn"
                href={profileView.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.8 4 18.8 4.3 18.8 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </a>
            </div>

            <div className="contactHint muted">{t.contact.note}</div>
          </div>
        </Section>

        <footer className="footer">
          <div className="muted">© {year} {displayName}</div>
          <div className="muted">{t.footer.right}</div>
        </footer>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="lightboxOverlay"
          onClick={() => setLightboxOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="AI Stack full view"
          tabIndex={-1}
        >
          <button
            className="lightboxClose"
            onClick={() => setLightboxOpen(false)}
            aria-label={t.aiStack.close}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src="/img/myaistack.png"
            alt="My AI Stack - Full workflow diagram"
            className="lightboxImage"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState(function () {
    return getInitialLang();
  });

  useEffect(
    function () {
      localStorage.setItem("lang", lang);
    },
    [lang]
  );

  const meta = useMemo(
    function () {
      return getLangMeta(lang);
    },
    [lang]
  );

  const profileView = useMemo(
    function () {
      return getProfileForLang(lang);
    },
    [lang]
  );

  const t = T[lang] || T.en;

  useEffect(
    function () {
      document.documentElement.lang = lang;
      document.documentElement.dir = meta.dir;
    },
    [lang, meta.dir]
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PortfolioPage t={t} lang={lang} setLang={setLang} meta={meta} profileView={profileView} />
        }
      />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}
