---
title: "Building a Personal Portfolio with React & Vite"
date: "2025-11-10"
excerpt: "A deep dive into how I built my personal portfolio site using React 19, Vite, Framer Motion, and SCSS — and the design decisions behind it."
coverImage: "/img/projects/coming-soon.png"
tags: ["React", "Vite", "Frontend", "SCSS", "Framer Motion"]
---

# Building a Personal Portfolio with React & Vite

When I decided to rebuild my portfolio from scratch, I had one goal: make it feel **alive**. Static sites feel static. I wanted something that reflected how I actually think and work — layered, dynamic, and detail-obsessed.

## Why Vite?

Vite is simply the best DX (developer experience) tool for frontend projects right now. The cold start is instant, HMR is snappy, and the plugin ecosystem is mature. For a project like this — where I'm tweaking animations and colors constantly — fast feedback loops are everything.

```bash
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
```

## The Animation Philosophy

Every animation on this site is intentional. I used **Framer Motion** exclusively for all motion work:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
>
  <h1>Hello, World</h1>
</motion.div>
```

The easing curve `[0.25, 0.46, 0.45, 0.94]` is a custom cubic-bezier I tuned manually. It feels snappier than `easeOut` but smoother than a linear spring.

## SCSS Architecture

I structured styles using a partial-based SCSS approach:

```
src/styles/
  _variables.scss   ← CSS custom properties
  _base.scss        ← reset + typography
  _layout.scss      ← grid + spacing
  _cards.scss       ← card components
  main.scss         ← imports everything
```

## Key Lessons

1. **CSS custom properties > SCSS variables** for anything runtime-dynamic (like theming)
2. **Framer Motion's `viewport` prop** is underused — it makes scroll-triggered animations trivial
3. **Don't fight the browser** — `scroll-behavior: smooth` on `html` is all you need for anchor links

The full source is on [GitHub](https://github.com/mostafakanaan/Personal_Portfolio). Feel free to fork and adapt it.
