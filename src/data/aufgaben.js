/**
 * Shared data for the DfA / Aufgaben pages.
 * Each level lists its exercises; the `number` field is used for routing.
 */
export const levels = [
  {
    id: "a1",
    label: "A1 – Anfänger",
    color: "#c8e600",
    darkText: true,
    description: "Grundlegende Kenntnisse – einfache Sätze und Ausdrücke.",
    aufgaben: [
      { number: 1, title: "Aufgabe 1", link: "#" },
      { number: 2, title: "Aufgabe 2", link: "#" },
      { number: 3, title: "Aufgabe 3", link: "/DfA/Aufgaben/3" },
    ],
  },
  {
    id: "a2",
    label: "A2 – Grundlegende Kenntnisse",
    color: "#22c55e",
    description: "Häufige Ausdrücke und einfache Gespräche.",
    aufgaben: [
    ],
  },
  {
    id: "b1",
    label: "B1 – Fortgeschrittene Sprachverwendung",
    color: "#3b82f6",
    description: "Zusammenhängende Texte und alltägliche Situationen.",
    aufgaben: [
    ],
  },
  {
    id: "b2",
    label: "B2 – Selbständige Sprachverwendung",
    color: "#ff7a18",
    description: "Komplexe Texte, fließende Kommunikation.",
    aufgaben: [
    ],
  },
];

/** Derive a unique sorted list of all Aufgabe numbers across every level. */
export function getAllAufgabenNumbers() {
  const nums = new Set();
  levels.forEach((l) => l.aufgaben.forEach((a) => nums.add(a.number)));
  return [...nums].sort((a, b) => a - b);
}
