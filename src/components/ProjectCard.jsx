export default function ProjectCard({ p }) {
  return (
    <div className="card cardLocked">
      <div className="cardImageWrap">
        <img src={p.image} alt="" className="cardImage" />
        <div className="cardImageOverlay">
          <span className="lockIcon">🔒</span>
          <span className="lockText">{p.status}</span>
        </div>
      </div>

      <div className="cardBody">
        <h3 className="h3">{p.name}</h3>
        <p className="muted">{p.description}</p>

        <div className="chips">
          {p.tech.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
