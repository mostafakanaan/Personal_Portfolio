import { Link } from "react-router-dom";
import { MotionConfig, motion } from "framer-motion";
import { blogPosts, formatDate } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import BlogCover from "../components/BlogCover";
import SiteFooter from "../components/SiteFooter";
import { useState } from "react";

export default function BlogListPage({ t, lang, setLang, profileView }) {

  const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];
  const [activeTag, setActiveTag] = useState(null);

  const filtered = activeTag
    ? blogPosts.filter((p) => p.tags.includes(activeTag))
    : blogPosts;

  return (
    <MotionConfig reducedMotion="user">
      <div className="page blogPage">
        <Background />
        <Navbar t={t} lang={lang} setLang={setLang} />

        <main id="main" className="blogContainer">
          <motion.div
            className="blogHero"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="blogEyebrow">
              <span className="blogEyebrowDot" />
              Writing
            </div>
            <h1 className="blogHeroTitle">
              Thoughts & Notes
              <span className="blogHeroAccent">.</span>
            </h1>
            <p className="blogHeroSub">
              Technical deep-dives, personal essays, and things I learned the hard way.
            </p>
          </motion.div>

          {/* Tag filter */}
          <motion.div
            className="blogTagFilter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              className={`blogTagBtn${activeTag === null ? " active" : ""}`}
              onClick={() => setActiveTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`blogTagBtn${activeTag === tag ? " active" : ""}`}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              >
                {tag}
              </button>
            ))}
          </motion.div>

          {/* Post grid */}
          <div className="blogGrid">
            {filtered.map((post, i) => (
              <motion.article
                key={post.slug}
                className="blogCard glassPanel"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{
                  borderColor: "rgba(255, 122, 24, 0.35)",
                  boxShadow: "0 24px 60px rgba(2,8,20,.5), 0 0 30px rgba(255,122,24,.12)",
                }}
              >
                <Link to={`/blog/${post.slug}`} className="blogCardCoverLink" tabIndex={-1} aria-hidden="true">
                  <div className="blogCardCover">
                    <BlogCover post={post} />
                    <div className="blogCardCoverOverlay" />
                  </div>
                </Link>
                <div className="blogCardBody">
                  <div className="blogCardMeta">
                    <span className="blogCardDate">{formatDate(post.date)}</span>
                  </div>
                  <h2 className="blogCardTitle">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blogCardExcerpt">{post.excerpt}</p>
                  <div className="blogCardFooter">
                    <div className="blogCardTags">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="blogTag">{tag}</span>
                      ))}
                    </div>
                    <Link to={`/blog/${post.slug}`} className="blogReadMore">
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </main>
        <SiteFooter t={t} name={profileView.name} />
      </div>
    </MotionConfig>
  );
}
