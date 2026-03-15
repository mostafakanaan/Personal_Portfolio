import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getFeedback(percent) {
  if (percent >= 90) return { emoji: "🎉", text: "Ausgezeichnet!" };
  if (percent >= 70) return { emoji: "👍", text: "Gut gemacht!" };
  if (percent >= 50) return { emoji: "📚", text: "Weiter üben!" };
  return { emoji: "💪", text: "Nicht aufgeben!" };
}

export default function Quiz({ exercise, onBack }) {
  const [activeSection, setActiveSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const sections = exercise.sections;
  const allQuestions = sections.flatMap((s) => s.questions);
  const totalAnswered = Object.keys(answers).length;
  const totalQuestions = allQuestions.length;

  const handleAnswer = useCallback((qId, optionIndex) => {
    if (answers[qId] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  }, [answers]);

  const score = allQuestions.reduce((sum, q) => {
    if (answers[q.id] === q.correct) return sum + q.points;
    return sum;
  }, 0);

  const handleFinish = () => setFinished(true);
  const handleRetry = () => {
    setAnswers({});
    setFinished(false);
    setActiveSection(0);
  };

  const percent = Math.round((score / exercise.maxPoints) * 100);
  const feedback = getFeedback(percent);
  const canFinish = totalAnswered === totalQuestions;

  return (
    <div className="quiz">
      {/* Progress bar */}
      <div className="quiz__progress">
        <div className="quiz__progress-bar">
          <motion.div
            className="quiz__progress-fill"
            animate={{ width: `${(totalAnswered / totalQuestions) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className="quiz__progress-text">
          {totalAnswered}/{totalQuestions} beantwortet
        </span>
      </div>

      <AnimatePresence mode="wait">
        {finished ? (
          <motion.div
            key="results"
            className="quiz__results"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="quiz__results-emoji">{feedback.emoji}</div>
            <div className="quiz__results-score">{score}/{exercise.maxPoints} Punkte</div>
            <div className="quiz__results-text">{feedback.text}</div>
            <div className="quiz__results-bar">
              <motion.div
                className="quiz__results-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
            <div className="quiz__results-actions">
              <button className="quiz__btn quiz__btn--primary" onClick={handleRetry}>
                🔄 Nochmal
              </button>
              {onBack && (
                <button className="quiz__btn quiz__btn--ghost" onClick={onBack}>
                  ← Zurück
                </button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div key="quiz-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Section tabs */}
            <div className="quiz__tabs">
              {sections.map((s, i) => {
                const sectionAnswered = s.questions.filter((q) => answers[q.id] !== undefined).length;
                return (
                  <button
                    key={s.id}
                    className={`quiz__tab ${i === activeSection ? "quiz__tab--active" : ""}`}
                    onClick={() => setActiveSection(i)}
                  >
                    {s.title}
                    <span className="quiz__tab-count">{sectionAnswered}/{s.questions.length}</span>
                  </button>
                );
              })}
            </div>

            {/* Section content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={sections[activeSection].id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {sections[activeSection].text && (
                  <div className="quiz__passage">
                    <div className="quiz__passage-label">📖 Lesetext</div>
                    {sections[activeSection].text}
                  </div>
                )}

                <div className="quiz__questions">
                  {sections[activeSection].questions.map((q, qi) => {
                    const answered = answers[q.id] !== undefined;
                    const userAnswer = answers[q.id];
                    return (
                      <motion.div
                        key={q.id}
                        className="quiz__question"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: qi * 0.08 }}
                      >
                        <div className="quiz__question-header">
                          <span className="quiz__question-num">{qi + 1}.</span>
                          <span className="quiz__question-text">{q.question}</span>
                          <span className="quiz__question-pts">{q.points} Pkt.</span>
                        </div>
                        <div className="quiz__options">
                          {q.options.map((opt, oi) => {
                            let cls = "quiz__option";
                            if (answered) {
                              if (oi === q.correct) cls += " quiz__option--correct";
                              else if (oi === userAnswer) cls += " quiz__option--wrong";
                              else cls += " quiz__option--disabled";
                            }
                            return (
                              <motion.button
                                key={oi}
                                className={cls}
                                onClick={() => handleAnswer(q.id, oi)}
                                disabled={answered}
                                whileHover={!answered ? { scale: 1.02 } : {}}
                                whileTap={!answered ? { scale: 0.98 } : {}}
                              >
                                <span className="quiz__option-letter">
                                  {String.fromCharCode(65 + oi)}
                                </span>
                                {opt}
                                {answered && oi === q.correct && <span className="quiz__option-icon">✓</span>}
                                {answered && oi === userAnswer && oi !== q.correct && <span className="quiz__option-icon">✗</span>}
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Finish button */}
            <div className="quiz__footer">
              <button
                className={`quiz__btn quiz__btn--primary ${!canFinish ? "quiz__btn--disabled" : ""}`}
                onClick={handleFinish}
                disabled={!canFinish}
              >
                Ergebnis anzeigen
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
