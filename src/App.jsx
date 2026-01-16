// src/App.jsx
import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";
import ProjectCardEnhanced from "./components/ProjectCardEnhanced";
import ChatPage from "./pages/ChatPage";
import Background from "./components/Background";
import { AnimatedSkillGroup } from "./components/AnimatedSkillChip";
import AnimatedExperienceCard from "./components/AnimatedExperienceCard";
import {
  AnimatedHeroText,
  AnimatedName,
  AnimatedPhotoCard,
  AnimatedButton,
  FloatingParticles,
} from "./components/AnimatedHero";

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div id="top" className="page">
      <Background />
      <FloatingParticles />
      <Navbar t={t} lang={lang} setLang={setLang} />

      {/* HERO */}
      <header className="hero">
        <div className="heroBg" aria-hidden="true">
          <motion.div
            className="heroImage"
            style={{ backgroundImage: `url(${heroBg})` }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1.02, opacity: 0.55 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          <div className="heroOverlay" />
        </div>

        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="heroContent">
              <AnimatedHeroText delay={0.2}>
                <div className="kicker">
                  <motion.span
                    className="dot"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {profileView.title} · {profileView.location}
                </div>
              </AnimatedHeroText>

              <h1 className="h1 nameRow">
                <AnimatedName name={displayName} isRtl={meta.dir === 'rtl'} />
                <motion.span
                  className="accent"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
                >
                  .
                </motion.span>
              </h1>

              <AnimatedHeroText delay={0.8}>
                <p className="lead">{t.hero.quote}</p>
              </AnimatedHeroText>

              <motion.div
                className="heroActions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <AnimatedButton className="btn btnPrimary" href="#projects" delay={1.1}>
                  {t.hero.ctaProjects}
                </AnimatedButton>
                <AnimatedButton className="btn btnGhost" href={profileView.links.email} delay={1.2}>
                  {t.contact.emailMe}
                </AnimatedButton>
                <AnimatedButton className="btn btnGhost" href={profileView.links.github} target="_blank" rel="noreferrer" delay={1.3}>
                  GitHub
                </AnimatedButton>
                <AnimatedButton className="btn btnGhost" href={profileView.links.linkedin} target="_blank" rel="noreferrer" delay={1.4}>
                  LinkedIn
                </AnimatedButton>
              </motion.div>
            </div>
          </div>

          <div className="heroRight">
            <AnimatedPhotoCard
              photo={photo}
              name={displayName}
              title={profileView.title}
            />
          </div>
        </div>
      </header>

      <main className="container">
        <AnimatedSection 
          id="about" 
          eyebrow={t.about.eyebrow} 
          title={lang === 'en' ? (
            <span className="terminalTitle">
              <span className="terminalPrompt">$</span> {t.about.title}
              <span className="terminalCursor">_</span>
            </span>
          ) : t.about.title}
        >
          <motion.div
            className="panel aboutPanel glassPanel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ 
              borderColor: "rgba(255, 122, 24, 0.3)",
              boxShadow: "0 20px 60px rgba(2, 8, 20, 0.4), 0 0 30px rgba(255, 122, 24, 0.1)" 
            }}
          >
            <div className="aboutContent">
              <p className="body">{t.about.body}</p>
              <p className="body aboutLanguages">
                {t.about.languages}
                <a href="#languages" className="languagesArrowLink" aria-label="Go to Languages section">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </p>
              <p className="body aboutCTA">
                {t.about.chatCTA}
                <a
                  href="/chat"
                  className="robotIconLink"
                  aria-label="Chat with my assistant"
                >
                  <motion.svg
                    className="robotIcon"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <rect x="3" y="11" width="18" height="10" rx="2" />
                    <circle cx="12" cy="5" r="2" />
                    <path d="M12 7v4" />
                    <line x1="8" y1="16" x2="8" y2="16" />
                    <line x1="16" y1="16" x2="16" y2="16" />
                  </motion.svg>
                </a>
              </p>
            </div>
            <motion.button
              className="aiStackPreview"
              onClick={() => setLightboxOpen(true)}
              aria-label={t.aiStack.viewFull}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.button>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="skills" eyebrow={t.skills.eyebrow} title={t.skills.title}>
          <motion.div
            className="panel glassPanel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="miniTitle">{t.skills.core}</div>
            <AnimatedSkillGroup skills={profileView.skills.languages} big={true} staggerDelay={0.1} />

            <div className="divider" />

            <div className="twoCol">
              <div>
                <div className="miniTitle">{t.skills.frontend}</div>
                <AnimatedSkillGroup skills={profileView.skills.frontend} staggerDelay={0.2} />
              </div>

              <div>
                <div className="miniTitle">{t.skills.devops}</div>
                <AnimatedSkillGroup 
                  skills={[...profileView.skills.devops, ...profileView.skills.security]} 
                  staggerDelay={0.25} 
                />
              </div>
            </div>

            <div className="divider" />

            <div className="miniTitle">{t.skills.data}</div>
            <AnimatedSkillGroup skills={profileView.skills.data} staggerDelay={0.3} />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="ai-stack" eyebrow={t.aiStack.eyebrow} title={t.aiStack.title}>
          <motion.div
            className="panel aiStackPanel glassPanel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="body aiStackDesc">{t.aiStack.description}</p>
            <motion.button
              className="aiStackImageWrapper"
              onClick={() => setLightboxOpen(true)}
              aria-label={t.aiStack.viewFull}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
            </motion.button>
          </motion.div>
        </AnimatedSection>

        <AnimatedSection id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
          <div className="stack timelineStack">
            {profileView.experience.map((x, index) => (
              <AnimatedExperienceCard key={x.company + x.period} experience={x} index={index} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="education" eyebrow={t.education.eyebrow} title={t.education.title}>
          <div className="stack">
            {profileView.education.map((e, index) => (
              <motion.div
                key={e.school + e.period}
                className="panel glassPanel educationCard"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(33, 212, 180, 0.3)",
                  boxShadow: "0 20px 60px rgba(2, 8, 20, 0.4), 0 0 30px rgba(33, 212, 180, 0.1)" 
                }}
              >
                <motion.div
                  className="educationIcon"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.15 + 0.2 }}
                >
                  🎓
                </motion.div>
                <h3 className="h3">{e.degree}</h3>
                <div className="muted">{e.school}</div>
                <div className="periodBadge">{e.period}</div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="languages" eyebrow={t.languages.eyebrow} title={t.languages.title}>
          <div className="languagesGrid">
            {/* Fluent Languages */}
            <motion.div
              className="languageGroup"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="languageGroupTitle">{t.languages.fluent}</div>
              <div className="languageCards">
                {profileView.spokenLanguages.fluent.map((lang, index) => (
                  <motion.div
                    key={lang.code}
                    className="languageCard"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="languageCardHeader">
                      {lang.code === 'ar' ? (
                        <div className="dualFlags">
                          <img src="/flags/sy.svg" alt="Syrian" className="languageFlag" />
                          <img src="/flags/sa.svg" alt="Saudi" className="languageFlag" />
                        </div>
                      ) : (
                        <img 
                          src={`/flags/${lang.code === 'en' ? 'gb' : lang.code}.svg`} 
                          alt={lang.name}
                          className="languageFlag"
                        />
                      )}
                      <div className="languageInfo">
                        <span className="languageName">{t.languages.names[lang.code] || lang.name}</span>
                        <span className={`languageLevel ${lang.level === 'native' ? 'native' : ''}`}>
                          {lang.level === 'native' ? t.languages.native : lang.level}
                        </span>
                      </div>
                    </div>
                    <div className="languageProgressWrapper">
                      <motion.div 
                        className="languageProgressBar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      />
                      <div className="languageProgressGlow" style={{ width: `${lang.percent}%` }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Learning Languages */}
            <motion.div
              className="languageGroup learningGroup"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="languageGroupTitle">{t.languages.learning}</div>
              <div className="languageCards">
                {profileView.spokenLanguages.learning.map((lang, index) => (
                  <motion.div
                    key={lang.code}
                    className="languageCard learningCard"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                  >
                    <div className="languageCardHeader">
                      <img 
                        src={`/flags/${lang.code}.svg`} 
                        alt={lang.name}
                        className="languageFlag"
                      />
                      <div className="languageInfo">
                        <span className="languageName">{t.languages.names[lang.code] || lang.name}</span>
                        <span className="languageLevel">{lang.level}</span>
                      </div>
                    </div>
                    <div className="languageProgressWrapper">
                      <motion.div 
                        className="languageProgressBar learningProgress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    {lang.note === 'school' && (
                      <div className="languageNote">{t.languages.schoolNote}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Want to Learn */}
            <motion.div
              className="languageGroup wantToLearnGroup"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="languageGroupTitle">{t.languages.wantToLearn}</div>
              <div className="languageWishlist">
                {profileView.spokenLanguages.wantToLearn.map((lang, index) => (
                  <motion.div
                    key={lang.code}
                    className="languageWishItem"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <img 
                      src={`/flags/${lang.code}.svg`} 
                      alt={lang.name}
                      className="languageFlagSmall"
                    />
                    <span className="languageName">{t.languages.names[lang.code] || lang.name}</span>
                    <span className="wishlistIcon">✨</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
          <div className="cardsEnhanced">
            {profileView.projects.map((p, index) => (
              <ProjectCardEnhanced key={p.name} p={p} index={index} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
          <motion.div
            className="panel contactPanel glassPanel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contactIconRow">
              <motion.a
                className="iconBtn iconBtnPrimary"
                href={profileView.links.email}
                aria-label={t.contact.emailMe}
                title={t.contact.emailMe}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
                </svg>
              </motion.a>

              <motion.a
                className="iconBtn"
                href={profileView.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88ZM2.5 22h4.9V8.2H2.5V22Zm7.7-13.8H15v1.9h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V22h-4.9v-6.2c0-1.5 0-3.5-2.2-3.5s-2.5 1.7-2.5 3.4V22H10.2V8.2Z" />
                </svg>
              </motion.a>

              <motion.a
                className="iconBtn"
                href={profileView.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.8 4 18.8 4.3 18.8 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
                </svg>
              </motion.a>

              <motion.a
                className="iconBtn"
                href={profileView.links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                title="Instagram"
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
              </motion.a>
            </div>

          </motion.div>
        </AnimatedSection>

        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="muted">© {year} {displayName}</div>
          <div className="muted">{t.footer.right}</div>
        </motion.footer>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="lightboxOverlay"
            onClick={() => setLightboxOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="AI Stack full view"
            tabIndex={-1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="lightboxClose"
              onClick={() => setLightboxOpen(false)}
              aria-label={t.aiStack.close}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
            <motion.img
              src="/img/myaistack.png"
              alt="My AI Stack - Full workflow diagram"
              className="lightboxImage"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scrollToTop"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ boxShadow: "0 8px 30px rgba(255, 122, 24, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="M5 12l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
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
