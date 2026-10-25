import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";

// Register only the languages the posts use; the full Prism build is ~700 kB.
Object.entries({ bash, csharp, javascript, json, jsx, python, scss, typescript }).forEach(([name, lang]) =>
  SyntaxHighlighter.registerLanguage(name, lang)
);
import { getPostBySlug, formatDate, estimateReadingTime } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import BlogCover from "../components/BlogCover";
import SiteFooter from "../components/SiteFooter";

// Dynamically import all blog markdown files as raw strings
const markdownFiles = import.meta.glob("../data/blog/*.md", {
  query: "?raw",
  import: "default",
});

export default function BlogPostPage({ t, lang, setLang, profileView }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!post) { navigate("/blog"); return; }
    const key = Object.keys(markdownFiles).find((k) =>
      k.endsWith(`${slug}.md`)
    );
    const loadContent = key
      ? markdownFiles[key]().then((raw) =>
          raw
            .replace(/^---[\s\S]*?---\n?/, "")
            // The header already shows the title; drop the post's own leading "# Title".
            .replace(/^\s*# [^\n]*\n/, "")
        )
      : Promise.resolve("# Content not found");
    loadContent.then((text) => {
      setContent(text);
      setLoading(false);
    });
  }, [slug, post, navigate]);

  if (!post) return null;

  const readTime = content ? estimateReadingTime(content) : "…";

  return (
    <MotionConfig reducedMotion="user">
      <div className="page blogPage">
        <Background />
        <Navbar t={t} lang={lang} setLang={setLang} />

        <main id="main" className="blogContainer blogPostContainer">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="blogBackLink">
              ← Back to Blog
            </Link>

            <header className="blogPostHeader">
              <div className="blogPostCoverWrap">
                <BlogCover post={post} className="blogPostCover" />
                <div className="blogPostCoverOverlay" />
              </div>
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
        </main>
        <SiteFooter t={t} name={profileView.name} />
      </div>
    </MotionConfig>
  );
}
