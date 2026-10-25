import { useEffect, useState } from "react";

// Copies the address instead of forcing a mail client open; falls back to mailto.
export default function CopyEmailButton({ email, label, copiedLabel, className = "", iconOnly = false }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const text = copied ? copiedLabel : label;

  return (
    <button
      type="button"
      className={`copyBtn ${copied ? "isCopied" : ""} ${className}`.trim()}
      onClick={copy}
      aria-label={iconOnly ? text : undefined}
      title={iconOnly ? text : undefined}
    >
      {copied ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="9" y="9" width="11" height="11" rx="2.5" />
          <path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15" />
        </svg>
      )}
      {!iconOnly && <span>{text}</span>}
      <span className="srOnly" aria-live="polite">
        {copied ? copiedLabel : ""}
      </span>
    </button>
  );
}
