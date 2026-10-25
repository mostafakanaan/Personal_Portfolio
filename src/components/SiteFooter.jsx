import { Link } from "react-router-dom";
import { profile } from "../data/portfolio";

export default function SiteFooter({ t, name }) {
  const h = t.home;
  const cvHref = profile.links.cv || "/cv";
  return (
    <footer className="siteFooter container">
      <div className="siteFooterTop">
        <Link to="/" className="siteBrand">
          <img src="/img/logo-64.webp" alt="" width="28" height="28" loading="lazy" />
          <span>
            mkanaan<span className="accentDot">.</span>
          </span>
        </Link>
        <nav className="siteFooterLinks" aria-label="Footer">
          {profile.links.cv ? <a href={cvHref}>{h.nav.cv}</a> : <Link to={cvHref}>{h.nav.cv}</Link>}
          <Link to="/blog">{h.nav.blog}</Link>
          <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.links.email}>Email</a>
        </nav>
      </div>
      <div className="siteFooterBottom mono">
        <span>© {new Date().getFullYear()} {name}</span>
        <span>{h.footer}</span>
      </div>
    </footer>
  );
}
