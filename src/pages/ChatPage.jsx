import { useMemo, useRef, useState } from "react";

const SYSTEM = [
  "You are Mustafa's assistant running locally on his Raspberry Pi.",
  "Answer briefly and directly.",
  "If you are unsure, say you are unsure.",
  "Prefer Germanunless the user asks otherwise.",
].join("\n");
const LLM_KEY = import.meta.env.VITE_LLM_KEY;
const headers = {
  "Content-Type": "application/json",
  ...(LLM_KEY ? { "X-LLM-Key": LLM_KEY } : {}),
};

function buildPrompt(history, userText) {
  // Simple prompt template for /v1/completions
  const turns = history
    .map((m) => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
    .join("\n");

  return `${SYSTEM}\n\n${turns}${turns ? "\n" : ""}User: ${userText}\nAssistant:`;
}

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hoi! Ich bin dein lokaler Assistant. Was möchtest du testen?" },
  ]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);
  const quickPrompts = [
    "Gib mir eine kurze Zusammenfassung dieses Projekts.",
    "Schreibe eine freundliche E-Mail an einen Kunden.",
    "Erkläre mir in 3 Sätzen, wie RAG funktioniert.",
    "Hilf mir, einen Wochenplan zu strukturieren.",
  ];

  const canSend = useMemo(() => text.trim().length > 0 && !busy, [text, busy]);

  async function send(overrideText) {
    const userText = (overrideText ?? text).trim();
    if (!userText || busy) return;

    setText("");
    setBusy(true);

    const nextHistory = [...messages, { role: "user", content: userText }];
    setMessages(nextHistory);

    try {
      const prompt = buildPrompt(nextHistory.slice(-10), userText); // keep it light

      const res = await fetch("/api/llm/v1/completions", {
        method: "POST",
        headers,
        body: JSON.stringify({
          model: "local",
          prompt,
          temperature: 0.5,
          max_tokens: 220,
          stop: ["User:", "Assistant:"],
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        throw new Error(`HTTP ${res.status}: ${body}`);
      }

      const data = await res.json();
      const answer = (data?.choices?.[0]?.text ?? "").trim();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: answer || "(no output)" },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `Error: ${e.message}` },
      ]);
    } finally {
      setBusy(false);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }

  return (
    <div className="chatWrap">
      <div className="chatGlow" />
      <div className="chatGlow alt" />
      <div className="chatCard">
        <div className="chatHeader">
          <div className="chatTitleRow">
            <div>
              <div className="chatTitle">KanaanChat</div>
              <div className="chatSub">Raspberry Pi 5 hosted 😉</div>
            </div>
            <div className={"chatStatus " + (busy ? "busy" : "idle")}>
              <span className="statusDot" />
              {busy ? "Thinking" : "Ready"}
            </div>
          </div>
          <div className="chatMeta">
            <span className="chatBadge">Local only</span>
            <span className="chatBadge">Short answers</span>
            <span className="chatBadge">Deutsch</span>
          </div>
        </div>

        <div className="chatBody" aria-live="polite">
          {messages.map((m, idx) => (
            <div key={idx} className={"chatMsg " + (m.role === "user" ? "user" : "assistant")}>
              <div className="chatAvatar">{m.role === "user" ? "U" : "🥧"}</div>
              <div className="chatBubble">{m.content}</div>
            </div>
          ))}
          {busy && (
            <div className="chatTyping">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="typingText">Assistant is thinking...</span>
            </div>
          )}
          <div ref={endRef} />
        </div>

        <div className="chatChips">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              className="chatChip"
              onClick={() => send(prompt)}
              disabled={busy}
              type="button"
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="chatInputRow">
          <textarea
            className="chatInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={busy ? "Thinking..." : "Write a message."}
            disabled={busy}
            rows={1}
          />
          <button className="chatSend" onClick={send} disabled={!canSend}>
            Send
          </button>
        </div>
      </div>
      <style>{`
        :root {
          --chat-bg: #0f172a;
          --chat-ink: #e2e8f0;
          --chat-muted: #94a3b8;
          --chat-accent: #38bdf8;
          --chat-accent-strong: #22d3ee;
          --chat-card: rgba(15, 23, 42, 0.82);
          --chat-border: rgba(148, 163, 184, 0.25);
          --chat-user: linear-gradient(135deg, #38bdf8, #0ea5e9);
          --chat-assistant: rgba(30, 41, 59, 0.9);
          --chat-shadow: 0 30px 70px rgba(2, 6, 23, 0.5);
        }

        .chatWrap {
          position: relative;
          min-height: 100vh;
          padding: 48px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: "Space Grotesk", "Outfit", "Segoe UI", sans-serif;
          background:
            radial-gradient(1200px 600px at 10% 10%, rgba(56, 189, 248, 0.2), transparent 60%),
            radial-gradient(900px 500px at 90% 20%, rgba(34, 211, 238, 0.18), transparent 55%),
            radial-gradient(1000px 800px at 50% 80%, rgba(14, 165, 233, 0.2), transparent 60%),
            var(--chat-bg);
          overflow: hidden;
          color: var(--chat-ink);
        }

        .chatGlow {
          position: absolute;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, rgba(56, 189, 248, 0.4), transparent 60%);
          filter: blur(12px);
          top: -120px;
          left: -100px;
          animation: float 12s ease-in-out infinite;
          pointer-events: none;
        }

        .chatGlow.alt {
          width: 360px;
          height: 360px;
          top: auto;
          left: auto;
          right: -140px;
          bottom: -120px;
          background: radial-gradient(circle, rgba(34, 211, 238, 0.35), transparent 65%);
          animation-delay: -4s;
        }

        .chatCard {
          position: relative;
          width: min(960px, 92vw);
          background: var(--chat-card);
          border: 1px solid var(--chat-border);
          border-radius: 28px;
          padding: 28px;
          box-shadow: var(--chat-shadow);
          backdrop-filter: blur(18px);
        }

        .chatHeader {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(148, 163, 184, 0.15);
        }

        .chatTitleRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .chatTitle {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .chatSub {
          font-size: 14px;
          color: var(--chat-muted);
        }

        .chatStatus {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          border: 1px solid rgba(148, 163, 184, 0.3);
          background: rgba(15, 23, 42, 0.5);
        }

        .chatStatus .statusDot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 12px rgba(34, 197, 94, 0.6);
        }

        .chatStatus.busy .statusDot {
          background: #f97316;
          box-shadow: 0 0 12px rgba(249, 115, 22, 0.6);
          animation: pulse 1.4s ease-in-out infinite;
        }

        .chatMeta {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .chatBadge {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          color: var(--chat-ink);
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
        }

        .chatBody {
          height: min(55vh, 520px);
          overflow-y: auto;
          padding: 18px 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .chatMsg {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .chatMsg.user {
          flex-direction: row-reverse;
        }

        .chatAvatar {
          width: 36px;
          height: 36px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          font-weight: 700;
          background: rgba(148, 163, 184, 0.15);
          border: 1px solid rgba(148, 163, 184, 0.3);
          color: var(--chat-ink);
        }

        .chatMsg.user .chatAvatar {
          background: rgba(56, 189, 248, 0.2);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .chatBubble {
          padding: 14px 16px;
          border-radius: 18px;
          background: var(--chat-assistant);
          border: 1px solid rgba(148, 163, 184, 0.2);
          max-width: 70%;
          line-height: 1.5;
          font-size: 15px;
        }

        .chatMsg.user .chatBubble {
          background: var(--chat-user);
          color: #0f172a;
          border: none;
        }

        .chatTyping {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: var(--chat-muted);
        }

        .chatTyping .dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--chat-muted);
          animation: blink 1s ease-in-out infinite;
        }

        .chatTyping .dot:nth-child(2) {
          animation-delay: 0.2s;
        }

        .chatTyping .dot:nth-child(3) {
          animation-delay: 0.4s;
        }

        .chatTyping .typingText {
          margin-left: 6px;
        }

        .chatChips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 10px 0 18px;
        }

        .chatChip {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(148, 163, 184, 0.12);
          border: 1px solid rgba(148, 163, 184, 0.25);
          color: var(--chat-ink);
          font-size: 12px;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease;
        }

        .chatChip:hover:not(:disabled) {
          transform: translateY(-2px);
          border-color: rgba(56, 189, 248, 0.6);
        }

        .chatChip:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .chatInputRow {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 12px;
          align-items: center;
        }

        .chatInput {
          resize: none;
          background: rgba(2, 6, 23, 0.4);
          border: 1px solid rgba(148, 163, 184, 0.3);
          border-radius: 16px;
          padding: 12px 14px;
          color: var(--chat-ink);
          font-size: 15px;
          min-height: 46px;
          max-height: 120px;
          outline: none;
        }

        .chatInput:focus {
          border-color: rgba(56, 189, 248, 0.7);
          box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
        }

        .chatSend {
          background: linear-gradient(135deg, #38bdf8, #22d3ee);
          border: none;
          color: #0f172a;
          font-weight: 700;
          padding: 12px 20px;
          border-radius: 14px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .chatSend:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(56, 189, 248, 0.35);
        }

        .chatSend:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        @media (max-width: 720px) {
          .chatCard {
            padding: 22px;
          }

          .chatTitleRow {
            flex-direction: column;
            align-items: flex-start;
          }

          .chatBubble {
            max-width: 100%;
          }

          .chatInputRow {
            grid-template-columns: 1fr;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.35);
            opacity: 1;
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
