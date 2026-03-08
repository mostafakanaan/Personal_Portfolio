import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Background from "../components/Background";
import { levels } from "../data/aufgaben";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function AufgabeDetailPage() {
  const { number } = useParams();
  const num = parseInt(number, 10);
  const [showPopup, setShowPopup] = useState(false);

  // Collect every level that contains this Aufgabe
  const matches = levels
    .map((level) => {
      const aufgabe = level.aufgaben.find((a) => a.number === num);
      return aufgabe ? { level, aufgabe } : null;
    })
    .filter(Boolean);

  const notFound = isNaN(num) || matches.length === 0;

  const handleLinkClick = (e, link) => {
    if (!link || link === "#") {
      e.preventDefault();
      setShowPopup(true);
    }
  };

  return (
    <div className="aufgaben-page">
      <Background />

      {/* Error popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="aufgaben-popup-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="aufgaben-popup"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: "spring", damping: 22, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aufgaben-popup__icon">⚠️</div>
              <p className="aufgaben-popup__text">
                Aufgabe konnte nicht geöffnet werden.
                <br />
                Bitte Fehler bei Mustafa melden!
              </p>
              <button
                className="aufgaben-popup__btn"
                onClick={() => setShowPopup(false)}
              >
                Verstanden
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="aufgaben-topbar">
        <Link to="/DfA/Aufgaben" className="aufgaben-back">
          ← Alle Aufgaben
        </Link>
      </nav>

      <header className="aufgaben-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {notFound ? "Aufgabe nicht gefunden" : `Aufgabe ${num}`}
        </motion.h1>
        {!notFound && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Verfügbare Niveaustufen für diese Aufgabe
          </motion.p>
        )}
      </header>

      {notFound ? (
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
            Es gibt keine Aufgabe mit dieser Nummer.
          </p>
          <Link to="/DfA/Aufgaben" className="aufgaben-back">
            ← Zurück zur Übersicht
          </Link>
        </div>
      ) : (
        <motion.main
          className="aufgaben-grid aufgaben-grid--detail"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {matches.map(({ level, aufgabe }) => (
            <motion.section
              key={level.id}
              className="aufgaben-card aufgaben-card--detail"
              variants={cardVariants}
              style={{ "--level-color": level.color }}
            >
              <div
                className={`aufgaben-card__badge${level.darkText ? " aufgaben-card__badge--dark-text" : ""}`}
                style={{ background: level.color }}
              >
                {level.id.toUpperCase()}
              </div>
              <h2 className="aufgaben-card__title">{level.label}</h2>
              <p className="aufgaben-card__desc">{level.description}</p>

              <a
                href={aufgabe.link !== "#" ? aufgabe.link : undefined}
                className="aufgaben-detail-link"
                target={aufgabe.link !== "#" ? "_blank" : undefined}
                rel={aufgabe.link !== "#" ? "noopener noreferrer" : undefined}
                style={{ "--level-color": level.color }}
                onClick={(e) => handleLinkClick(e, aufgabe.link)}
                role="button"
              >
                <span className="aufgaben-chip__icon">📝</span>
                Aufgabe öffnen
                <span className="aufgaben-chip__arrow">→</span>
              </a>
            </motion.section>
          ))}
        </motion.main>
      )}
    </div>
  );
}
