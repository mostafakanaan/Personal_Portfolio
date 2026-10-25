import { useEffect } from "react";
import { Link } from "react-router-dom";

import LanguageSwitcher from "../components/LanguageSwitcher";
import { profile } from "../data/portfolio";
import { formatDuration, monthsBetween } from "../utils/format";
import photo from "../assets/cv-photo.webp";

// One-page résumé built from the same data as the site, in the visitor's language.
// "Save as PDF" uses the browser's print dialog; print styles live in _cv.scss.
export default function CvPage({ t, lang, setLang, profileView }) {
  const c = t.cv;
  const h = t.home;
  const p = profileView;

  // Chrome names the saved PDF after the document title.
  useEffect(() => {
    const prev = document.title;
    document.title = `${p.name} — ${c.title}`;
    return () => {
      document.title = prev;
    };
  }, [p.name, c.title]);

  const langs = [...p.spokenLanguages.fluent, ...p.spokenLanguages.learning];
  const projects = p.projects.filter((x) => x.category === "main");
  const contact = [
    { label: h.facts.locationValue },
    { label: profile.email, href: profile.links.email },
    { label: "linkedin.com/in/mos-kan", href: profile.links.linkedin },
    { label: "github.com/mostafakanaan", href: profile.links.github },
    { label: "mkanaan.de", href: profile.website },
  ];

  return (
    <div className="cvPage">
      <div className="cvToolbar">
        <Link to="/" className="btn btnGhost cvBack">
          ← {c.back}
        </Link>
        <div className="cvToolbarRight">
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <button type="button" className="btn btnPrimary" onClick={() => window.print()} title={c.hint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M12 3v12m0 0-5-5m5 5 5-5M4 21h16" />
            </svg>
            {c.savePdf}
          </button>
        </div>
      </div>
      <p className="cvHint">{c.hint}</p>

      <main id="main" className="cvSheet">
        <header className="cvHeader">
          <img src={photo} alt="" className="cvPhoto" width="96" height="106" />
          <div>
            <h1>{p.name}</h1>
            <p className="cvRole">{p.title}</p>
            <ul className="cvContact">
              {contact.map((x) => (
                <li key={x.label}>{x.href ? <a href={x.href}>{x.label}</a> : x.label}</li>
              ))}
            </ul>
          </div>
        </header>

        <section className="cvSection">
          <h2>{c.summary}</h2>
          <p>{t.about.body}</p>
        </section>

        <section className="cvSection">
          <h2>{c.experience}</h2>
          {p.experience.map((x, i) => {
            const base = profile.experience[i] || {};
            return (
              <article className="cvJob" key={x.company + x.period}>
                <div className="cvJobHead">
                  <div>
                    <h3>{x.role}</h3>
                    <div className="cvMuted">
                      {x.company} · {x.location}
                    </div>
                  </div>
                  <div className="cvDates">
                    {x.period}
                    {base.start && <span>{formatDuration(monthsBetween(base.start, base.end), lang)}</span>}
                  </div>
                </div>
                <ul>
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </section>

        <section className="cvSection">
          <h2>{c.education}</h2>
          {p.education.map((e) => (
            <div className="cvJobHead cvEdu" key={e.school + e.period}>
              <div>
                <h3>{e.degree}</h3>
                <div className="cvMuted">{e.school}</div>
              </div>
              <div className="cvDates">{e.period}</div>
            </div>
          ))}
        </section>

        <div className="cvColumns">
          <section className="cvSection">
            <h2>{c.skills}</h2>
            <dl className="cvSkills">
              {Object.entries(p.skillAreas || {}).map(([key, area]) => (
                <div key={key}>
                  <dt>{t.skillAreas?.[key]?.title || key}</dt>
                  <dd>{area.skills.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="cvSection">
            <h2>{c.languages}</h2>
            <ul className="cvLangs">
              {langs.map((l) => (
                <li key={l.code}>
                  <span>{t.languages?.names?.[l.code] || l.name}</span>
                  <span className="cvMuted">{l.level === "native" ? t.languages?.native : l.level}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="cvSection">
          <h2>{c.projects}</h2>
          {projects.map((x) => (
            <div className="cvProject" key={x.slug}>
              <h3>
                {x.name} <span className="cvMuted">— {x.tech.slice(0, 4).join(", ")}</span>
              </h3>
              <p>{x.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
