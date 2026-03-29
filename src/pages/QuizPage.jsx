import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../components/Background";
import Quiz from "../components/Quiz";
import { exercises } from "../data/exercises";

export default function QuizPage() {
  const { number, levelId } = useParams();
  const navigate = useNavigate();
  const isTest = number === "Test" || number === undefined;
  const num = isTest ? "test" : parseInt(number, 10);
  const exercise = exercises[levelId]?.[num];
  const backPath = isTest ? `/DfA/Aufgaben/Test` : `/DfA/Aufgaben/${number}`;
  const backLabel = isTest ? "Test-Aufgabe" : `Aufgabe ${number}`;

  return (
    <div className="aufgaben-page quiz-page">
      <Background />
      <nav className="aufgaben-topbar">
        <Link to={backPath} className="aufgaben-back">
          ← Zurück zu {backLabel}
        </Link>
      </nav>

      <header className="aufgaben-header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {exercise
            ? `${exercise.title} – ${levelId.toUpperCase()}`
            : "Aufgabe nicht gefunden"}
        </motion.h1>
      </header>

      {exercise ? (
        <motion.main
          className="quiz-page__content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Quiz exercise={exercise} onBack={() => navigate(backPath)} />
        </motion.main>
      ) : (
        <div style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
            Diese Aufgabe existiert noch nicht.
          </p>
          <Link to="/DfA/Aufgaben" className="aufgaben-back">
            ← Zurück zur Übersicht
          </Link>
        </div>
      )}
    </div>
  );
}
