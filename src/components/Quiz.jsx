import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function getFeedback(percent) {
  if (percent >= 90) return { emoji: "🎉", text: "Ausgezeichnet!" };
  if (percent >= 70) return { emoji: "👍", text: "Gut gemacht!" };
  if (percent >= 50) return { emoji: "📚", text: "Weiter üben!" };
  return { emoji: "💪", text: "Nicht aufgeben!" };
}

function generateConfetti() {
  const colors = ["#ff4d4d", "#ffd700", "#4dff88", "#4db8ff", "#ff4dff", "#ff9900", "#00e5ff"];
  const pieces = [];
  for (let i = 0; i < 30; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 2;
    const size = 8 + Math.random() * 10;
    const duration = 2.5 + Math.random() * 1.5;
    pieces.push({ color, left, delay, size, duration, id: i });
  }
  return pieces;
}

function WordGuessQuestion({ q, qi, answered, onAnswer }) {
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState(null); // "correct" | "wrong" | null
  const [skipped, setSkipped] = useState(false);

  const handleSubmit = useCallback(() => {
    if (result || skipped) return;
    const correct = inputVal.trim().toLowerCase() === q.word.toLowerCase();
    setResult(correct ? "correct" : "wrong");
    onAnswer(q.id, correct ? q.points : 0);
  }, [inputVal, q, result, skipped, onAnswer]);

  const handleSkip = useCallback(() => {
    if (result) return;
    setSkipped(true);
    setResult("skipped");
    onAnswer(q.id, 0);
  }, [result, q, onAnswer]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Enter" && !result && !skipped) handleSubmit();
  }, [result, skipped, handleSubmit]);

  const isAnswered = result !== null;

  return (
    <motion.div
      key={q.id}
      className={`quiz__question quiz__word-guess${result === "correct" ? " quiz__word-guess--correct" : result === "wrong" || result === "skipped" ? " quiz__word-guess--wrong" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: qi * 0.08 }}
    >
      <div className="quiz__question-header">
        <span className="quiz__question-num">{qi + 1}.</span>
        <span className="quiz__question-pts">{q.points} Pkt.</span>
      </div>
      <div className="quiz__word-display">{q.display}</div>
      <div className="quiz__word-hint">💡 {q.hint}</div>
      {!isAnswered ? (
        <div className="quiz__word-input-row">
          <input
            className="quiz__word-input"
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Deine Antwort..."
            autoComplete="off"
          />
          <button className="quiz__btn quiz__btn--primary" onClick={handleSubmit} disabled={!inputVal.trim()}>
            ✓ Prüfen
          </button>
          <button className="quiz__btn quiz__btn--ghost" onClick={handleSkip}>
            Überspringen
          </button>
        </div>
      ) : (
        <div className={`quiz__word-result quiz__word-result--${result}`}>
          {result === "correct" && <span>✅ Richtig! +{q.points} Punkte</span>}
          {result === "wrong" && <span>❌ Falsch. Richtige Antwort: <strong>{q.word}</strong></span>}
          {result === "skipped" && <span>⏭️ Übersprungen. Antwort: <strong>{q.word}</strong></span>}
        </div>
      )}
    </motion.div>
  );
}

export default function Quiz({ exercise, onBack }) {
  const [activeSection, setActiveSection] = useState(0);
  const [answers, setAnswers] = useState({});
  const [wordScores, setWordScores] = useState({});
  const [finished, setFinished] = useState(false);
  const confettiPieces = useRef(generateConfetti());

  const sections = exercise.sections;
  const regularSections = sections.filter((s) => !s.isBonus);
  const bonusSections = sections.filter((s) => s.isBonus);

  const allRegularQuestions = regularSections.flatMap((s) => s.questions);
  const allBonusQuestions = bonusSections.flatMap((s) => s.questions);
  const allQuestions = sections.flatMap((s) => s.questions);

  // For progress: count word-guess as answered when in wordScores
  const totalAnswered = allQuestions.reduce((sum, q) => {
    if (q.type === "word-guess") return sum + (wordScores[q.id] !== undefined ? 1 : 0);
    return sum + (answers[q.id] !== undefined ? 1 : 0);
  }, 0);
  const totalQuestions = allQuestions.length;

  const handleAnswer = useCallback((qId, optionIndex) => {
    if (answers[qId] !== undefined) return;
    setAnswers((prev) => ({ ...prev, [qId]: optionIndex }));
  }, [answers]);

  const handleWordAnswer = useCallback((qId, pts) => {
    setWordScores((prev) => ({ ...prev, [qId]: pts }));
  }, []);

  const regularScore = allRegularQuestions.reduce((sum, q) => {
    if (q.type === "word-guess") return sum + (wordScores[q.id] ?? 0);
    if (answers[q.id] === q.correct) return sum + q.points;
    return sum;
  }, 0);

  const bonusScore = allBonusQuestions.reduce((sum, q) => {
    if (q.type === "word-guess") return sum + (wordScores[q.id] ?? 0);
    if (answers[q.id] === q.correct) return sum + q.points;
    return sum;
  }, 0);

  const totalScore = regularScore + bonusScore;

  const handleFinish = () => setFinished(true);
  const handleRetry = () => {
    setAnswers({});
    setWordScores({});
    setFinished(false);
    setActiveSection(0);
    confettiPieces.current = generateConfetti();
  };

  const percent = Math.round((regularScore / exercise.maxPoints) * 100);
  const feedback = getFeedback(percent);
  const hasBonus = bonusSections.length > 0;
  const showConfetti = finished && totalScore > exercise.maxPoints;

  // canFinish: all regular questions answered, bonus section can be skipped
  const regularAnswered = allRegularQuestions.reduce((sum, q) => {
    if (q.type === "word-guess") return sum + (wordScores[q.id] !== undefined ? 1 : 0);
    return sum + (answers[q.id] !== undefined ? 1 : 0);
  }, 0);
  const canFinish = regularAnswered === allRegularQuestions.length;

  return (
    <div className="quiz">
      {/* Confetti */}
      {showConfetti && (
        <div className="quiz__confetti" aria-hidden="true">
          {confettiPieces.current.map((p) => (
            <div
              key={p.id}
              className="confetti-piece"
              style={{
                left: `${p.left}%`,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                borderRadius: Math.random() > 0.5 ? "50%" : "0",
              }}
            />
          ))}
        </div>
      )}

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
            {showConfetti && (
              <motion.div
                className="quiz__bonus-celebration"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 15, stiffness: 200, delay: 0.3 }}
              >
                🎉 Bonuspunkte!
              </motion.div>
            )}
            <div className="quiz__results-emoji">{feedback.emoji}</div>
            {hasBonus && bonusScore > 0 ? (
              <div className="quiz__results-score">
                {regularScore}/{exercise.maxPoints} Punkte{" "}
                <span className="quiz__bonus-score">+ {bonusScore} Bonus</span>
                <span className="quiz__bonus-total"> = {totalScore}</span>
              </div>
            ) : (
              <div className="quiz__results-score">{regularScore}/{exercise.maxPoints} Punkte</div>
            )}
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
                const sectionAnswered = s.questions.filter((q) =>
                  q.type === "word-guess" ? wordScores[q.id] !== undefined : answers[q.id] !== undefined
                ).length;
                return (
                  <button
                    key={s.id}
                    className={`quiz__tab${i === activeSection ? " quiz__tab--active" : ""}${s.isBonus ? " quiz__bonus-tab" : ""}`}
                    onClick={() => setActiveSection(i)}
                  >
                    {s.title}
                    {s.isBonus && <span className="quiz__bonus-badge">⭐ Bonus</span>}
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
                {sections[activeSection].audioSrc && (
                  <div className="quiz__passage quiz__passage--audio">
                    <div className="quiz__passage-label">🎧 Hörtext</div>
                    <audio controls className="quiz__audio">
                      <source src={sections[activeSection].audioSrc} type="audio/mpeg" />
                      Dein Browser unterstützt kein Audio.
                    </audio>
                  </div>
                )}

                {sections[activeSection].text && (
                  <div className="quiz__passage">
                    <div className="quiz__passage-label">📖 Lesetext</div>
                    {sections[activeSection].text}
                  </div>
                )}

                {sections[activeSection].isBonus && (
                  <div className="quiz__bonus-info">
                    ⭐ Bonus-Sektion — Errate die Wörter für extra Punkte!
                  </div>
                )}

                <div className="quiz__questions">
                  {sections[activeSection].questions.map((q, qi) => {
                    if (q.type === "word-guess") {
                      return (
                        <WordGuessQuestion
                          key={q.id}
                          q={q}
                          qi={qi}
                          answered={wordScores[q.id] !== undefined}
                          onAnswer={handleWordAnswer}
                        />
                      );
                    }

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
              {/* Bottom section tabs */}
              <div className="quiz__tabs quiz__tabs--bottom">
                {sections.map((s, i) => {
                  const sectionAnswered = s.questions.filter((q) =>
                    q.type === "word-guess" ? wordScores[q.id] !== undefined : answers[q.id] !== undefined
                  ).length;
                  return (
                    <button
                      key={s.id}
                      className={`quiz__tab${i === activeSection ? " quiz__tab--active" : ""}${s.isBonus ? " quiz__bonus-tab" : ""}`}
                      onClick={() => { setActiveSection(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    >
                      {s.title}
                      <span className="quiz__tab-count">{sectionAnswered}/{s.questions.length}</span>
                    </button>
                  );
                })}
              </div>

              <button
                className={`quiz__btn quiz__btn--primary quiz__btn--full ${!canFinish ? "quiz__btn--disabled" : ""}`}
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
