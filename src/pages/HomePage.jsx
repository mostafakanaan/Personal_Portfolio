import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Background from "../components/Background";
import ProjectVisual from "../components/ProjectVisual";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import CopyEmailButton from "../components/CopyEmailButton";
import SiteFooter from "../components/SiteFooter";
import { profile } from "../data/portfolio";
import { formatDuration, monthsBetween, splitHighlights, yearsSince } from "../utils/format";
import photo from "../assets/cv-photo.webp";

// A real PDF in profile.links.cv wins over the generated /cv page.
const CV_IS_FILE = Boolean(profile.links.cv);
const CV_HREF = profile.links.cv || "/cv";

// Badge colour comes from the English status so translated labels keep their tone.
const STATUS_TONE = { Live: "live", Active: "active", "In Development": "dev", Completed: "done" };
const FEATURED_ORDER = ["kanaanflow", "mkanaanauth", "mkanaanapi", "personal-portfolio"];
const BENTO_SIZE = ["lg", "sm", "md", "md"];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </svg>
);

function CvButton({ className, label, children }) {
  return CV_IS_FILE ? (
    <a className={className} href={CV_HREF} download>
      {children ?? label}
    </a>
  ) : (
    <Link className={className} to={CV_HREF}>
      {children ?? label}
    </Link>
  );
}

function SectionHead({ index, eyebrow, title, sub, children }) {
  return (
    <Reveal className="homeHead">
      <div>
        <div className="homeEyebrow mono">
          <span className="homeIndex">{String(index).padStart(2, "0")}</span>
          {eyebrow}
        </div>
        <h2 className="homeH2">{title}</h2>
        {sub && <p className="homeSub">{sub}</p>}
      </div>
      {children}
    </Reveal>
  );
}

function Hero({ t, profileView }) {
  const h = t.home;
  const current = profileView.experience[0];

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
            {h.lead.map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>))}
          </Reveal>
          <Reveal onLoad delay={0.18} className="homeCta">
            <a className="btn btnPrimary" href="#work">
              {h.ctaWork} <ArrowIcon />
            </a>
            <CvButton className="btn btnGhost">
              <DocIcon /> {CV_IS_FILE ? h.ctaCv : h.ctaCvView}
            </CvButton>
          </Reveal>
          <Reveal onLoad delay={0.24} className="homeSocial mono">
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span className="homeEmail">
              <a href={profile.links.email}>{profile.email}</a>
              <CopyEmailButton email={profile.email} label={h.copyEmail} copiedLabel={h.copied} iconOnly />
            </span>
          </Reveal>
        </div>

        <div className="homePhoto">
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
        </div>
      </div>
    </header>
  );
}

function Stats({ t, profileView }) {
  const s = t.home.stats;
  const items = [
    { value: yearsSince(profile.careerStart), suffix: "+", label: s.years },
    { value: 30, prefix: "−", suffix: "%", label: s.automated },
    { value: profileView.experience.length, label: s.companies },
    { value: profileView.spokenLanguages.fluent.length, label: s.languages },
  ];
  return (
    <Reveal onLoad delay={0.3} className="homeStats container">
      {items.map((x) => (
        <div className="homeStat" key={x.label}>
          <CountUp value={x.value} prefix={x.prefix} suffix={x.suffix} />
          <span>{x.label}</span>
        </div>
      ))}
    </Reveal>
  );
}

function About({ t, profileView }) {
  const h = t.home;
  const f = h.facts;
  const langs = [...profileView.spokenLanguages.fluent, ...profileView.spokenLanguages.learning];
  const facts = [
    { key: "location", label: f.location, value: <><img src="/flags/ch.svg" alt="" width="16" height="16" /> {f.locationValue}</> },
    profile.openToWork && { key: "availability", label: f.availability, value: <><b className="factDot" aria-hidden="true" /> {f.availabilityValue}</> },
    { key: "focus", label: f.focus, value: f.focusValue },
    {
      key: "languages",
      label: f.languages,
      value: (
        <span className="factLangs">
          {langs.map((l) => (
            <span key={l.code}>
              {t.languages?.names?.[l.code] || l.name}{" "}
              <em className="mono">{l.level === "native" ? t.languages?.native : l.level}</em>
            </span>
          ))}
        </span>
      ),
    },
    profile.workPermit && { key: "permit", label: f.permit, value: profile.workPermit },
    profile.noticePeriod && { key: "notice", label: f.notice, value: profile.noticePeriod },
  ].filter(Boolean);

  return (
    <section id="about" className="homeSection container">
      <div className="aboutGrid">
        <div>
          <SectionHead index={1} eyebrow={h.aboutEyebrow} title={h.aboutTitle} />
          <Reveal as="p" className="aboutText">
            {t.about.body}
          </Reveal>
        </div>
        <Reveal as="dl" delay={0.08} className="facts spotlight">
          {facts.map((x) => (
            <div className="factRow" key={x.key}>
              <dt className="mono">{x.label}</dt>
              <dd>{x.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const BULLETS_COLLAPSED = 3;

// On phones long jobs show their first bullets and a toggle; desktop always shows all (CSS).
function JobBullets({ bullets, t }) {
  const [open, setOpen] = useState(false);
  const extra = bullets.length - BULLETS_COLLAPSED;
  return (
    <>
      <ul className={extra > 0 && !open ? "isCollapsed" : undefined}>
        {bullets.map((b) => (
          <li key={b}>
            {splitHighlights(b).map((part, j) =>
              part.startsWith("(") ? <strong key={j}>{part}</strong> : <span key={j}>{part}</span>
            )}
          </li>
        ))}
      </ul>
      {extra > 0 && (
        <button type="button" className="jobMore" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? t.home.showLess : t.home.showMore.replace("{n}", extra)}
        </button>
      )}
    </>
  );
}

function Experience({ t, lang, profileView }) {
  const h = t.home;
  return (
    <section id="experience" className="homeSection container">
      <div className="xpGrid">
        <div className="xpAside">
          <SectionHead index={2} eyebrow={h.xpEyebrow} title={h.xpTitle} sub={h.xpSub} />
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
          {profileView.experience.map((x, i) => {
            // Dates and stack live on the base (English) entry; translations share its order.
            const base = profile.experience[i] || {};
            const isCurrent = base.start && base.end === null;
            return (
              <Reveal as="li" key={x.company + x.period} delay={i * 0.06} className={`job spotlight ${isCurrent ? "isCurrent" : ""}`}>
                <div className="jobTop">
                  <div>
                    <h3>{x.role}</h3>
                    <div className="jobCompany">
                      {x.company} <span>· {x.location}</span>
                    </div>
                  </div>
                  <div className="jobWhen">
                    {isCurrent && <span className="nowBadge">{h.current}</span>}
                    <time className="mono">{x.period}</time>
                    {base.start && <span className="jobDuration">{formatDuration(monthsBetween(base.start, base.end), lang)}</span>}
                  </div>
                </div>
                <JobBullets bullets={x.bullets} t={t} />
                {base.stack && (
                  <div className="tagList jobStack">
                    {base.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                )}
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function ProjectCard({ p, size, t, index }) {
  const base = profile.projects.find((x) => x.slug === p.slug) || p;
  const tone = STATUS_TONE[base.status] || "done";
  return (
    <Reveal as="article" delay={index * 0.06} className={`homeCard spotlight size-${size}`}>
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
        <div className="homeCardFoot">
          <div className="tagList">
            {p.tech.slice(0, 4).map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
          <span className="homeCardMore" aria-hidden="true">
            {t.home.caseStudy} <ArrowIcon />
          </span>
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
      <SectionHead index={3} eyebrow={h.workEyebrow} title={h.workTitle} sub={h.workSub} />
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

function Skills({ t, profileView }) {
  const h = t.home;
  const areas = Object.entries(profileView.skillAreas || {});
  return (
    <section id="skills" className="homeSection container">
      <SectionHead index={4} eyebrow={h.skillsEyebrow} title={h.skillsTitle} />
      <div className="skillGrid">
        {areas.map(([key, area], i) => {
          const areaT = t.skillAreas?.[key] || {};
          return (
            <Reveal key={key} delay={i * 0.05} className={`skillCard spotlight skill-${key}`}>
              <h3>
                <i aria-hidden="true" />
                {areaT.title || key}
              </h3>
              {areaT.description && <p className="skillDesc">{areaT.description}</p>}
              <div className="tagList">
                {area.skills.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Contact({ t }) {
  const h = t.home;
  const rows = [
    { label: "LinkedIn", value: "in/mos-kan", href: profile.links.linkedin, external: true },
    { label: "GitHub", value: "mostafakanaan", href: profile.links.github, external: true },
  ];
  return (
    <section id="contact" className="homeSection container">
      <Reveal className="contactCard">
        <div>
          <div className="homeEyebrow mono">
            <span className="homeIndex">05</span>
            {h.contactEyebrow}
          </div>
          <h2 className="homeH2 contactTitle">{h.contactTitle}</h2>
          {profile.openToWork && <p className="homeSub">{h.contactSub}</p>}
          <div className="homeCta">
            <a className="btn btnPrimary" href={profile.links.email}>
              {h.emailMe} <ArrowIcon />
            </a>
            <CopyEmailButton email={profile.email} label={h.copyEmail} copiedLabel={h.copied} className="btn btnGhost" />
          </div>
        </div>
        <div className="contactRows">
          <a className="contactRow mono" href={profile.links.email}>
            <div>
              <span>Email</span>
              {profile.email}
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          {rows.map((r) => (
            <a key={r.label} className="contactRow mono" href={r.href} target="_blank" rel="noreferrer">
              <div>
                <span>{r.label}</span>
                {r.value}
              </div>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <CvButton className="contactRow mono">
            <div>
              <span>{h.cvRow}</span>
              {h.cvRowValue}
            </div>
            <span aria-hidden="true">→</span>
          </CvButton>
        </div>
      </Reveal>
    </section>
  );
}

// Mouse-follow highlight on .spotlight cards (pointer devices only).
function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia?.("(hover: hover)").matches) return;
    const onMove = (e) => {
      const card = e.target.closest?.(".spotlight");
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}

export default function HomePage({ t, lang, setLang, profileView }) {
  const location = useLocation();
  useSpotlight();

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
      <main id="main">
        <Hero t={t} profileView={profileView} />
        <Stats t={t} profileView={profileView} />
        <About t={t} profileView={profileView} />
        <Experience t={t} lang={lang} profileView={profileView} />
        <Work t={t} profileView={profileView} />
        <Skills t={t} profileView={profileView} />
        <Contact t={t} />
      </main>
      <SiteFooter t={t} name={profileView.name} />
    </div>
  );
}
