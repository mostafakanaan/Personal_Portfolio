import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import AnimatedSection from "../components/AnimatedSection";
import { profile } from "../data/portfolio";

// SEO helper — updates document head
function useProjectSEO(project) {
  useEffect(() => {
    if (!project) return;
    const prev = {
      title: document.title,
      desc: document.querySelector('meta[name="description"]')?.content,
      ogTitle: document.querySelector('meta[property="og:title"]')?.content,
      ogDesc: document.querySelector('meta[property="og:description"]')?.content,
      ogUrl: document.querySelector('meta[property="og:url"]')?.content,
      twTitle: document.querySelector('meta[name="twitter:title"]')?.content,
      twDesc: document.querySelector('meta[name="twitter:description"]')?.content,
    };

    document.title = `${project.name} — Mustafa Kanaan`;

    const setMeta = (attr, key, val) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val);
    };

    const desc = project.shortDescription || project.description;
    setMeta("name", "description", desc);
    setMeta("property", "og:title", `${project.name} — Mustafa Kanaan`);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:url", `https://mkanaan.de/project/${project.slug}`);
    setMeta("property", "og:type", "article");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", `${project.name} — Mustafa Kanaan`);
    setMeta("name", "twitter:description", desc);

    return () => {
      document.title = prev.title || "Mustafa Kanaan — Portfolio";
    };
  }, [project]);
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function StatusBadge({ status }) {
  const colorMap = {
    "In Development": "var(--accent)",
    Active: "var(--accent2)",
    Live: "#22c55e",
    Completed: "var(--muted2)",
  };
  const bg = colorMap[status] || "var(--muted2)";

  return (
    <span
      className="projectDetailStatus"
      style={{ "--status-color": bg }}
    >
      <span className="statusDot" />
      {status}
    </span>
  );
}

export default function ProjectDetailPage({ t, lang, setLang, meta, profileView }) {
  const { slug } = useParams();

  const project = useMemo(() => {
    return profile.projects.find((p) => p.slug === slug);
  }, [slug]);

  useProjectSEO(project);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!project) {
    return (
      <div className="page">
        <Background />
        <Navbar t={t} lang={lang} setLang={setLang} />
        <main className="container projectDetailNotFound">
          <h1 className="h2">Project not found</h1>
          <Link to="/#projects" className="btn btnPrimary">
            ← Back to projects
          </Link>
        </main>
      </div>
    );
  }

  return (
    <div className="page projectDetailPage">
      <Background />
      <Navbar t={t} lang={lang} setLang={setLang} />

      <main className="container projectDetailMain">
        {/* Breadcrumb */}
        <motion.nav
          className="breadcrumb"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/">{t.nav.home}</Link>
          <span className="breadcrumbSep">/</span>
          <Link to="/#projects">{t.nav.projects}</Link>
          <span className="breadcrumbSep">/</span>
          <span className="breadcrumbCurrent">{project.name}</span>
        </motion.nav>

        {/* Hero Section */}
        <motion.header
          className="projectDetailHero"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="projectDetailHeroContent">
            <div className="projectDetailMeta">
              <StatusBadge status={project.status} />
              {project.category && (
                <span className="projectDetailCategory">{project.category}</span>
              )}
            </div>
            <h1 className="projectDetailTitle">{project.name}</h1>
            <p className="projectDetailDesc">{project.description}</p>

            <div className="projectDetailActions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnPrimary"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.8 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.8 4 18.8 4.3 18.8 4.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .4.2.7.8.6A11.5 11.5 0 0 0 12 .5Z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnGhost"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="projectDetailImage">
            <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
          </div>
        </motion.header>

        {/* Tech Stack */}
        <motion.section className="projectDetailSection" {...fadeUp}>
          <h2 className="projectDetailSectionTitle">
            <span className="sectionIcon">⚙️</span>
            {t.projectDetail?.techStack || "Technology Stack"}
          </h2>
          <div className="projectDetailChips">
            {project.tech.map((t, i) => (
              <motion.span
                key={t}
                className="chipEnhanced chipLarge"
                {...stagger}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
          {project.techReasoning && (
            <p className="projectDetailBody techReasoning">
              <strong>{t.projectDetail?.why || "Why this stack:"}</strong> {project.techReasoning}
            </p>
          )}
        </motion.section>

        {/* Problem */}
        {project.problem && (
          <motion.section className="projectDetailSection" {...fadeUp}>
            <h2 className="projectDetailSectionTitle">
              <span className="sectionIcon">🎯</span>
              {t.projectDetail?.problem || "Problem Statement"}
            </h2>
            <p className="projectDetailBody">{project.problem}</p>
          </motion.section>
        )}

        {/* Architecture & Solution */}
        {project.architecture && (
          <motion.section className="projectDetailSection" {...fadeUp}>
            <h2 className="projectDetailSectionTitle">
              <span className="sectionIcon">🏗️</span>
              {t.projectDetail?.architecture || "Architecture & Solution"}
            </h2>
            <p className="projectDetailBody">{project.architecture}</p>
          </motion.section>
        )}

        {/* My Role */}
        {project.role && (
          <motion.section className="projectDetailSection" {...fadeUp}>
            <h2 className="projectDetailSectionTitle">
              <span className="sectionIcon">👤</span>
              {t.projectDetail?.role || "My Role & Contribution"}
            </h2>
            <p className="projectDetailBody">{project.role}</p>
          </motion.section>
        )}

        {/* Technical Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.section className="projectDetailSection" {...fadeUp}>
            <h2 className="projectDetailSectionTitle">
              <span className="sectionIcon">✨</span>
              {t.projectDetail?.highlights || "Technical Highlights"}
            </h2>
            <ul className="projectDetailHighlights">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  {...stagger}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <span className="highlightCheck">▸</span>
                  {h}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Challenges & Learnings */}
        {project.challenges && (
          <motion.section className="projectDetailSection" {...fadeUp}>
            <h2 className="projectDetailSectionTitle">
              <span className="sectionIcon">🧩</span>
              {t.projectDetail?.challenges || "Challenges & Learnings"}
            </h2>
            <p className="projectDetailBody">{project.challenges}</p>
          </motion.section>
        )}

        {/* Result / Impact */}
        {project.result && (
          <motion.section className="projectDetailSection projectDetailResult" {...fadeUp}>
            <h2 className="projectDetailSectionTitle">
              <span className="sectionIcon">🏆</span>
              {t.projectDetail?.result || "Result & Impact"}
            </h2>
            <p className="projectDetailBody">{project.result}</p>
          </motion.section>
        )}

        {/* CTA Section */}
        <motion.section
          className="projectDetailCTA"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="panel glassPanel projectDetailCTAPanel">
            <h2 className="projectDetailCTATitle">
              {t.projectDetail?.ctaTitle || "Interested in collaboration or technical details?"}
            </h2>
            <p className="projectDetailCTADesc">
              {t.projectDetail?.ctaDesc || "Let's connect — I'm happy to discuss architecture decisions, technical challenges, or potential collaboration."}
            </p>
            <div className="projectDetailCTAActions">
              {profileView?.links?.email && (
                <a href={profileView.links.email} className="btn btnPrimary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8" />
                  </svg>
                  {t.contact?.emailMe || "Email me"}
                </a>
              )}
              {profileView?.links?.linkedin && (
                <a
                  href={profileView.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnGhost"
                >
                  LinkedIn
                </a>
              )}
              {profileView?.links?.github && (
                <a
                  href={profileView.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btnGhost"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.section>

        {/* Back to projects */}
        <motion.div
          className="projectDetailBack"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/#projects" className="btn btnGhost">
            ← {t.projectDetail?.backToProjects || "Back to all projects"}
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
