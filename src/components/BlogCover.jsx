// Blog cover: the post's own image, or a generated typographic cover when it has none.
const TONES = {
  Personal: "teal",
  Career: "teal",
  Story: "teal",
  AI: "violet",
  LLM: "violet",
  React: "blue",
  Frontend: "blue",
};

export default function BlogCover({ post, className = "" }) {
  if (post.coverImage) {
    return <img src={post.coverImage} alt="" className={className} loading="lazy" />;
  }
  const tag = post.tags?.[0] || "Notes";
  const tone = TONES[tag] || "orange";
  return (
    <div className={`genCover tone-${tone} ${className}`.trim()} aria-hidden="true">
      <span className="genCoverPath mono">~/blog/{post.slug.split("-").slice(0, 2).join("-")}</span>
      <span className="genCoverTag">#{tag}</span>
      <span className="genCoverTags mono">{post.tags.slice(1, 4).join(" · ")}</span>
    </div>
  );
}
