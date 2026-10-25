// src/App.jsx
import { useEffect, useMemo, useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MotionConfig } from "framer-motion";

import HomePage from "./pages/HomePage";
import { profile } from "./data/portfolio";
import { FEATURES } from "./config/features";
import { LANGS, T } from "./i18n/translations";

// Everything except the home page loads on demand.
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));
const BlogListPage = lazy(() => import("./pages/BlogListPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const ChatPage = lazy(() => import("./pages/ChatPage"));

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

export default function App() {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const meta = useMemo(() => getLangMeta(lang), [lang]);
  const profileView = useMemo(() => getProfileForLang(lang), [lang]);
  const t = T[lang] || T.en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang, meta.dir]);

  const pageProps = { t, lang, setLang, meta, profileView };

  return (
    <MotionConfig reducedMotion="user">
      <Suspense fallback={<div className="pageLoading" />}>
        <Routes>
          <Route path="/" element={<HomePage {...pageProps} />} />
          <Route path="/project/:slug" element={<ProjectDetailPage {...pageProps} />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/chat" element={FEATURES.chat ? <ChatPage /> : <Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </MotionConfig>
  );
}
