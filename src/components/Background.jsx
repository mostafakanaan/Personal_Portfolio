// Static ambient background: one soft glow and a faint grid, drawn in CSS.
// Replaces the old canvas particle animation (cheaper, no main-thread work).
export default function Background() {
  return <div className="ambientBg" aria-hidden="true" />;
}
