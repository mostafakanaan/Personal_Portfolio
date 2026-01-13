// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import ChatPage from "./pages/ChatPage";

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

function PortfolioPage({ t, lang, setLang, meta }) {
  const year = new Date().getFullYear();
  const displayName = lang === "ar" ? "مصطفى كنعان" : profile.name;

  return (
    <div id="top" className="page">
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
                {profile.title} · {profile.location}
              </div>

              <h1 className="h1">
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
                <a className="btn btnGhost" href={profile.links.email}>
                  {t.contact.emailMe}
                </a>
                <a className="btn btnGhost" href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="btn btnGhost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
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
                <div className="photoRole muted">{profile.title}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
          <div className="panel">
            <p className="body">{t.about.body}</p>
          </div>
        </Section>

        <Section id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
          <div className="panel">
            <div className="miniTitle">{t.skills.core}</div>
            <div className="chips chipsBig">
              {profile.skills.languages.map((s) => (
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
                  {profile.skills.frontend.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="miniTitle">{t.skills.devops}</div>
                <div className="chips">
                  {profile.skills.devops.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                  {profile.skills.security.map((s) => (
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
              {profile.skills.data.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
          <div className="stack">
            {profile.experience.map((x) => (
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
            {profile.education.map((e) => (
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
              {profile.spokenLanguages.map((l) => (
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
            {profile.projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
          <div className="panel contactPanel">
            <div className="contactIconRow">
              <a
                className="iconBtn iconBtnPrimary"
                href={profile.links.email}
                aria-label={t.contact.emailMe}
                title={t.contact.emailMe}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </a>

              <a
                className="iconBtn"
                href={profile.links.linkedin}
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
                href={profile.links.github}
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
        element={<PortfolioPage t={t} lang={lang} setLang={setLang} meta={meta} />}
      />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  );
}
