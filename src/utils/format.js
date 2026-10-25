// Formatting helpers shared by the home and CV pages.

// Arabic UI keeps Latin digits, matching the rest of the Arabic copy.
const INTL_LOCALE = { ar: "ar-u-nu-latn" };

export function intlLocale(lang) {
  return INTL_LOCALE[lang] || lang;
}

export function yearsSince(isoDate) {
  const ms = Date.now() - new Date(isoDate).getTime();
  return Math.floor(ms / (365.25 * 24 * 3600 * 1000));
}

// Inclusive month count between "YYYY-MM" values (end null = this month), like LinkedIn.
export function monthsBetween(start, end) {
  const [sy, sm] = start.split("-").map(Number);
  const now = new Date();
  const [ey, em] = end ? end.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
  return (ey - sy) * 12 + (em - sm) + 1;
}

// "2 years 9 months", "2 Jahre, 9 Monate", "سنتان و9 أشهر", "2 yıl 9 ay".
export function formatDuration(months, lang) {
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const locale = intlLocale(lang);
  try {
    const unit = (u, n) =>
      new Intl.NumberFormat(locale, { style: "unit", unit: u, unitDisplay: "long" }).format(n);
    const parts = [];
    if (years) parts.push(unit("year", years));
    if (rest) parts.push(unit("month", rest));
    return new Intl.ListFormat(locale, { style: "narrow", type: "unit" }).format(parts);
  } catch {
    return `${years}y ${rest}m`;
  }
}

// Splits "… workflows (−30% manual steps)" so the parenthesised metric/stack can be emphasised.
export function splitHighlights(text) {
  return text.split(/(\([^)]*\))/).filter(Boolean);
}
