import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getPostBySlug, formatDate, estimateReadingTime } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import { LANGS, T } from "../i18n/translations";

// Dynamically import all blog markdown files as raw strings
const markdownFiles = import.meta.glob("../data/blog/*.md", {
  query: "?raw",
  import: "default",
});

function getInitialLang() {
  const stored = localStorage.getItem("lang");
  if (stored && LANGS.some((l) => l.code === stored)) return stored;
  const browserLang = (navigator?.language || "").toLowerCase().split("-")[0];
  return LANGS.some((l) => l.code === browserLang) ? browserLang : "en";
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const [lang, setLang] = useState(getInitialLang);
  const _Meta = useMemo(() => LANGS.find((x) => x.code === lang) || LANGS[0], [lang]);
  const t = T[lang] || T.en;
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!post) { navigate("/blog"); return; }
    const key = Object.keys(markdownFiles).find((k) =>
      k.endsWith(`${slug}.md`)
    );
    const loadContent = key
      ? markdownFiles[key]().then((raw) => raw.replace(/^---[\s\S]*?---\n?/, ""))
      : Promise.resolve("# Content not found");
    loadContent.then((text) => {
      setContent(text);
      setLoading(false);
    });
  }, [slug, post, navigate]);

  if (!post) return null;

  const readTime = content ? estimateReadingTime(content) : "…";

  return (
    <div className="page blogPage">
      <Background />
      <Navbar t={t} lang={lang} setLang={setLang} />

      <div className="blogContainer blogPostContainer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/blog" className="blogBackLink">
            ← Back to Blog
          </Link>

          <header className="blogPostHeader">
            {post.coverImage && (
              <div className="blogPostCoverWrap">
                <img src={post.coverImage} alt={post.title} className="blogPostCover" />
                <div className="blogPostCoverOverlay" />
              </div>
            )}
            <div className="blogPostHeaderContent">
              <div className="blogPostMeta">
                <span className="blogCardDate">{formatDate(post.date)}</span>
                <span className="blogPostDot">·</span>
                <span className="blogPostReadTime">{readTime}</span>
              </div>
              <h1 className="blogPostTitle">{post.title}</h1>
              <div className="blogCardTags blogPostTags">
                {post.tags.map((tag) => (
                  <span key={tag} className="blogTag">{tag}</span>
                ))}
              </div>
            </div>
          </header>

          <article className="blogPostContent glassPanel">
            {loading ? (
              <div className="blogLoading">
                <div className="blogLoadingDot" />
                <div className="blogLoadingDot" />
                <div className="blogLoadingDot" />
              </div>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        style={oneDark}
                        language={match[1]}
                        PreTag="div"
                        className="blogCodeBlock"
                        {...props}
                      >
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={`blogInlineCode ${className || ""}`} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {content}
              </ReactMarkdown>
            )}
          </article>

          <div className="blogPostFooter">
            <Link to="/blog" className="blogBackLink">
              ← Back to Blog
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
