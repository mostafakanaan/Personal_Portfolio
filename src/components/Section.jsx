export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="sectionHead">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        {title ? <h2 className="h2">{title}</h2> : null}
      </div>
      {children}
    </section>
  );
}
