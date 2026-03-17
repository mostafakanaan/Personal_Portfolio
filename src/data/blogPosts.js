// Blog post metadata index
// Content is loaded dynamically via import.meta.glob

export const blogPosts = [
  {
    slug: "journey-from-syria-to-switzerland",
    title: "From Syria to Switzerland: A Developer's Journey",
    date: "2026-01-20",
    excerpt: "Moving countries, learning a new language, and rebuilding a career from scratch — what it taught me about resilience, and about code.",
    coverImage: "/img/projects/coming-soon.png",
    tags: ["Personal", "Career", "Switzerland", "Story"],
  },
  {
    slug: "my-ai-stack-2025",
    title: "My AI Stack in 2025: Tools I Actually Use Every Day",
    date: "2025-12-15",
    excerpt: "I've tried every AI tool under the sun. Here's what survived my ruthless curation process — and why these specific tools made the cut.",
    coverImage: "/img/myaistack.png",
    tags: ["AI", "Productivity", "Tools", "LLM", "Workflow"],
  },
  {
    slug: "building-portfolio-with-react-vite",
    title: "Building a Personal Portfolio with React & Vite",
    date: "2025-11-10",
    excerpt: "A deep dive into how I built my personal portfolio site using React 19, Vite, Framer Motion, and SCSS — and the design decisions behind it.",
    coverImage: "/img/projects/coming-soon.png",
    tags: ["React", "Vite", "Frontend", "SCSS", "Framer Motion"],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}

export function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export function estimateReadingTime(markdown) {
  const words = markdown.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}
