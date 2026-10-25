import { useEffect, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Background from "../components/Background";
import ProjectVisual from "../components/ProjectVisual";
import { profile } from "../data/portfolio";
import photo from "../assets/cv-photo.webp";

const EASE = [0.2, 0.7, 0.2, 1];

// Fade-up on first scroll into view (or on load for above-the-fold content).
// MotionConfig in App honours reduced motion.
function Reveal({ as = "div", delay = 0, onLoad = false, children, ...rest }) {
  const Tag = motion[as];
  const trigger = onLoad
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-60px" } };
  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function SectionHead({ eyebrow, title, sub, children }) {
  return (
    <Reveal className="homeHead">
      <div>
        <div className="homeEyebrow mono">{eyebrow}</div>
        <h2 className="homeH2">{title}</h2>
        {sub && <p className="homeSub">{sub}</p>}
      </div>
      {children}
    </Reveal>
  );
}

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
  </svg>
);

// Badge colour comes from the English status so translated labels keep their tone.
const STATUS_TONE = { Live: "live", Active: "active", "In Development": "dev", Completed: "done" };
const FEATURED_ORDER = ["kanaanflow", "mkanaanauth", "mkanaanapi", "personal-portfolio"];
const BENTO_SIZE = ["lg", "sm", "md", "md"];

function yearsSince(isoDate) {
  const ms = Date.now() - new Date(isoDate).getTime();
  return Math.floor(ms / (365.25 * 24 * 3600 * 1000));
}

function Hero({ t, profileView }) {
  const h = t.home;
  const current = profileView.experience[0];
  const lead = h.lead;

  return (
    <header className="homeHero container" id="top">
      <div className="homeHeroGrid">
        <div className="homeHeroText">
          {profile.openToWork && (
            <Reveal onLoad as="span" className="homeStatus">
              <b aria-hidden="true" />
              {h.status}
            </Reveal>
          )}
          <Reveal onLoad as="h1" delay={0.06} className="homeH1">
            {profileView.name}.<br />
            <span className="gradText">{h.roleAccent}</span> {h.roleRest}
          </Reveal>
          <Reveal onLoad as="p" delay={0.12} className="homeLead">
            {lead.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>))}
          </Reveal>
          <Reveal onLoad delay={0.18} className="homeCta">
            <a className="btn btnPrimary" href="#work">
              {h.ctaWork} <ArrowIcon />
            </a>
            {profile.links.cv ? (
              <a className="btn btnGhost" href={profile.links.cv} download>
                <DownloadIcon /> {h.ctaCv}
              </a>
            ) : (
              <a className="btn btnGhost" href="#contact">
                {h.ctaContact}
              </a>
            )}
          </Reveal>
          <Reveal onLoad delay={0.24} className="homeSocial mono">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={profile.links.email}>{profile.email}</a>
          </Reveal>
        </div>

        <motion.div
          className="homePhoto"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="homePhotoFrame">
            <img src={photo} alt={`${profileView.name} portrait`} width="720" height="792" fetchPriority="high" />
          </div>
          <div className="homePhotoRole">
            <img src="/flags/ch.svg" alt="" width="18" height="18" />
            <div>
              {current.role}
              <small>{current.company} · {profileView.location}</small>
            </div>
          </div>
          <div className="homePhotoStack mono">
            <span aria-hidden="true">●</span> .NET · Azure · React
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function Stats({ t, profileView }) {
  const s = t.home.stats;
  const items = [
    { value: `${yearsSince(profile.careerStart)}+`, label: s.years },
    { value: "−30%", label: s.automated },
    { value: profileView.experience.length, label: s.companies },
    { value: profileView.spokenLanguages.fluent.length, label: s.languages },
  ];
  return (
    <Reveal onLoad delay={0.3} className="homeStats container">
      {items.map((x) => (
        <div className="homeStat" key={x.label}>
          <b>{x.value}</b>
          <span>{x.label}</span>
        </div>
      ))}
    </Reveal>
  );
}

function ProjectCard({ p, size, t, index }) {
  const base = profile.projects.find((x) => x.slug === p.slug) || p;
  const tone = STATUS_TONE[base.status] || "done";
  return (
    <Reveal as="article" delay={index * 0.06} className={`homeCard size-${size}`}>
      <div className="homeCardThumb">
        <ProjectVisual slug={p.slug} />
      </div>
      <div className="homeCardBody">
        <div className="homeCardMeta">
          <span className={`statusBadge tone-${tone}`}>{p.status}</span>
          {base.github && (
            <a className="homeCardExt" href={base.github} target="_blank" rel="noreferrer">
              {t.home.code} ↗
            </a>
          )}
        </div>
        <h3>
          <Link to={`/project/${p.slug}`} className="stretchedLink">
            {p.name}
          </Link>
        </h3>
        <p>{p.description}</p>
        <div className="tagList">
          {p.tech.slice(0, 5).map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Work({ t, profileView }) {
  const h = t.home;
  const featured = useMemo(
    () =>
      profileView.projects
        .filter((p) => p.category === "main")
        .sort((a, b) => FEATURED_ORDER.indexOf(a.slug) - FEATURED_ORDER.indexOf(b.slug)),
    [profileView.projects]
  );
  const more = profileView.projects.filter((p) => p.category !== "main");

  return (
    <section id="work" className="homeSection container">
      <SectionHead eyebrow={h.workEyebrow} title={h.workTitle} sub={h.workSub} />
      <div className="bento">
        {featured.map((p, i) => (
          <ProjectCard key={p.slug} p={p} size={BENTO_SIZE[i] || "md"} t={t} index={i} />
        ))}
      </div>

      {more.length > 0 && (
        <Reveal className="moreProjects">
          <h3 className="moreTitle">{h.moreTitle}</h3>
          <ul>
            {more.map((p) => (
              <li key={p.slug}>
                <Link to={`/project/${p.slug}`} className="moreRow">
                  <span className="moreName">{p.name}</span>
                  <span className="moreTech mono">{p.tech.slice(0, 3).join(" · ")}</span>
                  <span className="moreArrow" aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </section>
  );
}

function Experience({ t, profileView }) {
  const h = t.home;
  return (
    <section id="experience" className="homeSection container">
      <div className="xpGrid">
        <div className="xpAside">
          <SectionHead eyebrow={h.xpEyebrow} title={h.xpTitle} sub={h.xpSub} />
          <Reveal className="eduList">
            <div className="homeEyebrow mono">{h.education}</div>
            {profileView.education.map((e) => (
              <div className="eduItem" key={e.school + e.period}>
                <strong>{e.degree}</strong>
                <span>{e.school}</span>
                <time className="mono">{e.period}</time>
              </div>
            ))}
          </Reveal>
        </div>
        <ol className="timeline">
          {profileView.experience.map((x, i) => (
            <Reveal as="li" key={x.company + x.period} delay={i * 0.06} className={`job ${i === 0 ? "isCurrent" : ""}`}>
              <div className="jobTop">
                <h3>{x.role}</h3>
                <time className="mono">{x.period}</time>
              </div>
              <div className="jobCompany">
                {x.company} <span>· {x.location}</span>
              </div>
              <ul>
                {x.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Skills({ t, profileView }) {
  const h = t.home;
  const areas = Object.entries(profileView.skillAreas || {});
  const langs = profileView.spokenLanguages;
  return (
    <section id="skills" className="homeSection container">
      <SectionHead eyebrow={h.skillsEyebrow} title={h.skillsTitle} />
      <div className="skillGrid">
        {areas.map(([key, area], i) => {
          const areaT = t.skillAreas?.[key] || {};
          return (
            <Reveal key={key} delay={i * 0.05} className={`skillCard skill-${key}`}>
              <h3>
                <i aria-hidden="true" />
                {areaT.title || key}
              </h3>
              <div className="tagList">
                {area.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
        <Reveal delay={areas.length * 0.05} className="skillCard skill-languages">
          <h3>
            <i aria-hidden="true" />
            {h.languagesTitle}
          </h3>
          <div className="langList">
            {[...langs.fluent, ...langs.learning].map((l) => (
              <div className="langRow" key={l.code}>
                <span>{t.languages?.names?.[l.code] || l.name}</span>
                <span className="mono">{l.level === "native" ? t.languages?.native || "Native" : l.level}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact({ t }) {
  const h = t.home;
  const rows = [
    { label: "Email", value: profile.email, href: profile.links.email },
    { label: "LinkedIn", value: "in/mos-kan", href: profile.links.linkedin, external: true },
    { label: "GitHub", value: "mostafakanaan", href: profile.links.github, external: true },
  ];
  return (
    <section id="contact" className="homeSection container">
      <Reveal className="contactCard">
        <div>
          <div className="homeEyebrow mono">{h.contactEyebrow}</div>
          <h2 className="homeH2 contactTitle">{h.contactTitle}</h2>
          {profile.openToWork && <p className="homeSub">{h.contactSub}</p>}
          <div className="homeCta">
            <a className="btn btnPrimary" href={profile.links.email}>
              {h.emailMe} <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="contactRows">
          {rows.map((r) => (
            <a
              key={r.label}
              className="contactRow mono"
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <div>
                <span>{r.label}</span>
                {r.value}
              </div>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default function HomePage({ t, lang, setLang, profileView }) {
  const location = useLocation();

  // Support /#section links coming from other pages.
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ block: "start" }));
  }, [location.hash]);

  return (
    <div className="page homePage">
      <Background />
      <Navbar t={t} lang={lang} setLang={setLang} />
      <Hero t={t} profileView={profileView} />
      <Stats t={t} profileView={profileView} />
      <main>
        <Work t={t} profileView={profileView} />
        <Experience t={t} profileView={profileView} />
        <Skills t={t} profileView={profileView} />
        <Contact t={t} />
      </main>
      <footer className="siteFooter container mono">
        <span>© {new Date().getFullYear()} {profileView.name}</span>
        <span>{t.home.footer}</span>
      </footer>
    </div>
  );
}
