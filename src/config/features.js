// Feature flags. Flip a flag and redeploy to turn a feature back on.
export const FEATURES = {
  // KanaanChat is disabled until the leaked LLM key is rotated and nginx
  // injects the key server-side (see SECURITY.md → "Chat assistant").
  chat: false,
};
