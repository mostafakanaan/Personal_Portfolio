import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../components/Background";
import { levels } from "../data/aufgaben";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};

export default function AufgabenPage() {
  return (
    <div className="aufgaben-page">
      <Background />

      {/* Back link */}
      <nav className="aufgaben-topbar">
        <Link to="/" className="aufgaben-back">
          ← Zurück
        </Link>
      </nav>

      {/* Header */}
      <header className="aufgaben-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Deutsch als Fremdsprache
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Übungsaufgaben von A1 bis B2
        </motion.p>
      </header>

      {/* Level sections */}
      <motion.main
        className="aufgaben-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {levels.map((level) => (
          <motion.section
            key={level.id}
            className="aufgaben-card"
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

            <motion.ul
              className="aufgaben-card__list"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {level.aufgaben.map((a, i) => (
                <motion.li key={i} variants={chipVariants}>
                  <Link
                    to={`/DfA/Aufgaben/${a.number}/${level.id}`}
                    className="aufgaben-chip"
                  >
                    <span className="aufgaben-chip__icon">📝</span>
                    {a.title}
                    <span className="aufgaben-chip__arrow">→</span>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        ))}
      </motion.main>
    </div>
  );
}
