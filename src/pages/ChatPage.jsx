import { useMemo, useRef, useState } from "react";

const SYSTEM = [
  "You are Mustafa's assistant running locally on his Raspberry Pi.",
  "Answer briefly and directly.",
  "If you are unsure, say you are unsure.",
  "Prefer German (Schweizer Hochdeutsch) unless the user asks otherwise.",
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
    { role: "assistant", content: "Hoi! 👋 Ich bin dein lokaler Assistant. Was möchtest du testen?" },
  ]);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  const canSend = useMemo(() => text.trim().length > 0 && !busy, [text, busy]);

  async function send() {
    const userText = text.trim();
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
        { role: "assistant", content: `❌ Error: ${e.message}` },
      ]);
    } finally {
      setBusy(false);
      setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }

  return (
    <div className="chatWrap">
      <div className="chatCard">
        <div className="chatHeader">
          <div className="chatTitle">Local Chat</div>
          <div className="chatSub">Runs on your Raspberry Pi (llama.cpp)</div>
        </div>

        <div className="chatBody">
          {messages.map((m, idx) => (
            <div key={idx} className={"chatMsg " + (m.role === "user" ? "user" : "assistant")}>
              <div className="chatBubble">{m.content}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="chatInputRow">
          <input
            className="chatInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={busy ? "Thinking..." : "Write a message…"}
            disabled={busy}
          />
          <button className="chatSend" onClick={send} disabled={!canSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
