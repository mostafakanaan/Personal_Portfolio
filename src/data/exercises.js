export const exercises = {
  a1: {
    1: {
      title: "Aufgabe 1",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Hallo! Ich heiße Anna. Ich bin 25 Jahre alt und wohne in Berlin. Ich arbeite als Lehrerin. Am Morgen trinke ich Kaffee und esse Brot. Am Abend lese ich ein Buch.",
          questions: [
            { id: "a1-lv-1", question: "Wie heißt die Frau?", options: ["Maria", "Anna", "Lisa", "Sara"], correct: 1, points: 10 },
            { id: "a1-lv-2", question: "Wo wohnt Anna?", options: ["In München", "In Hamburg", "In Berlin", "In Wien"], correct: 2, points: 10 },
            { id: "a1-lv-3", question: "Was ist Anna von Beruf?", options: ["Ärztin", "Lehrerin", "Köchin", "Studentin"], correct: 1, points: 10 },
            { id: "a1-lv-4", question: "Was trinkt Anna am Morgen?", options: ["Tee", "Wasser", "Saft", "Kaffee"], correct: 3, points: 10 },
            { id: "a1-lv-5", question: "Was macht Anna am Abend?", options: ["Sie kocht.", "Sie liest ein Buch.", "Sie schläft.", "Sie tanzt."], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-gr-1", question: "Welcher Artikel ist richtig? ___ Hund ist groß.", options: ["Die", "Das", "Der", "Ein"], correct: 2, points: 10 },
            { id: "a1-gr-2", question: "Welcher Artikel ist richtig? ___ Lampe ist neu.", options: ["Der", "Die", "Das", "Ein"], correct: 1, points: 10 },
            { id: "a1-gr-3", question: "Ergänze das Verb: Ich ___ Deutsch. (lernen)", options: ["lernst", "lernt", "lerne", "lernen"], correct: 2, points: 10 },
            { id: "a1-gr-4", question: "Ergänze das Verb: Er ___ gern Musik. (hören)", options: ["höre", "hörst", "hört", "hören"], correct: 2, points: 10 },
            { id: "a1-gr-5", question: "Welcher Satz ist richtig?", options: ["Ich gehe morgen Schule in die.", "Morgen ich gehe in die Schule.", "Ich gehe morgen in die Schule.", "In die Schule morgen gehe ich."], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
  },
  a2: {
    1: {
      title: "Aufgabe 1",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Mein Tag beginnt um 7 Uhr. Zuerst dusche ich und frühstücke. Um 8 Uhr fahre ich mit dem Bus zur Arbeit. Mittags esse ich in der Kantine. Nach der Arbeit gehe ich oft ins Fitnessstudio. Am Wochenende treffe ich mich gern mit Freunden. Wir gehen zusammen ins Kino oder kochen etwas Leckeres.",
          questions: [
            { id: "a2-lv-1", question: "Wann beginnt der Tag?", options: ["Um 6 Uhr", "Um 7 Uhr", "Um 8 Uhr", "Um 9 Uhr"], correct: 1, points: 10 },
            { id: "a2-lv-2", question: "Wie fährt die Person zur Arbeit?", options: ["Mit dem Auto", "Mit dem Fahrrad", "Mit dem Bus", "Zu Fuß"], correct: 2, points: 10 },
            { id: "a2-lv-3", question: "Wo isst die Person mittags?", options: ["Zu Hause", "Im Restaurant", "In der Kantine", "Im Café"], correct: 2, points: 10 },
            { id: "a2-lv-4", question: "Was macht die Person nach der Arbeit oft?", options: ["Einkaufen", "Ins Fitnessstudio gehen", "Fernsehen", "Spazieren gehen"], correct: 1, points: 10 },
            { id: "a2-lv-5", question: "Was machen die Freunde am Wochenende zusammen?", options: ["Arbeiten", "Sport machen", "Ins Kino gehen oder kochen", "Reisen"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-gr-1", question: "Perfekt: Ich ___ gestern einen Film ___ . (sehen)", options: ["bin … gesehen", "habe … geseht", "habe … gesehen", "hat … gesehen"], correct: 2, points: 10 },
            { id: "a2-gr-2", question: "Perfekt: Sie ___ nach Berlin ___ . (fahren)", options: ["hat … gefahren", "ist … gefahren", "haben … gefahrt", "ist … gefahrt"], correct: 1, points: 10 },
            { id: "a2-gr-3", question: "Modalverb: Er ___ morgen früh aufstehen.", options: ["musst", "muss", "müssen", "müsst"], correct: 1, points: 10 },
            { id: "a2-gr-4", question: "Trennbare Verben: Wann ___ du morgens ___? (aufstehen)", options: ["stehst … auf", "aufstehst … —", "stehst … an", "stehen … auf"], correct: 0, points: 10 },
            { id: "a2-gr-5", question: "Modalverb: ___ ich hier rauchen?", options: ["Darf", "Darfst", "Dürfen", "Dürft"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
  },
  b1: {
    1: {
      title: "Aufgabe 1",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Immer mehr Deutsche entscheiden sich dafür, mit dem Zug statt mit dem Flugzeug zu reisen. Ein Grund dafür ist der Klimaschutz: Züge verursachen deutlich weniger CO₂ als Flugzeuge. Außerdem bieten neue Nachtzüge komfortable Schlafmöglichkeiten für lange Strecken. Kritiker weisen jedoch darauf hin, dass die Deutsche Bahn oft Verspätungen hat und die Tickets manchmal teurer sind als Flüge. Trotzdem steigt die Nachfrage nach Bahnreisen seit Jahren kontinuierlich an.",
          questions: [
            { id: "b1-lv-1", question: "Warum reisen mehr Deutsche mit dem Zug?", options: ["Weil es schneller ist", "Wegen des Klimaschutzes", "Weil es billiger ist", "Weil es bequemer ist"], correct: 1, points: 10 },
            { id: "b1-lv-2", question: "Was bieten neue Nachtzüge?", options: ["Kostenloses WLAN", "Komfortable Schlafmöglichkeiten", "Günstigere Preise", "Schnellere Verbindungen"], correct: 1, points: 10 },
            { id: "b1-lv-3", question: "Was kritisieren manche Leute an der Deutschen Bahn?", options: ["Die Züge sind zu voll", "Es gibt keine Nachtzüge", "Es gibt oft Verspätungen", "Die Züge sind zu langsam"], correct: 2, points: 10 },
            { id: "b1-lv-4", question: "Was stimmt laut dem Text über die Tickets?", options: ["Sie sind immer billiger als Flüge", "Sie sind manchmal teurer als Flüge", "Sie kosten genau so viel wie Flüge", "Sie sind kostenlos"], correct: 1, points: 10 },
            { id: "b1-lv-5", question: "Wie entwickelt sich die Nachfrage nach Bahnreisen?", options: ["Sie sinkt", "Sie bleibt gleich", "Sie steigt kontinuierlich", "Sie schwankt stark"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-gr-1", question: "Konjunktiv II: Wenn ich reich ___, ___ ich ein Haus kaufen.", options: ["wäre … würde", "bin … werde", "sei … will", "war … wurde"], correct: 0, points: 10 },
            { id: "b1-gr-2", question: "Relativsatz: Das ist der Mann, ___ ich gestern getroffen habe.", options: ["der", "den", "dem", "dessen"], correct: 1, points: 10 },
            { id: "b1-gr-3", question: "Passiv: Das Buch ___ von vielen Leuten ___ .", options: ["wird … gelesen", "hat … gelesen", "ist … gelesen", "wurde … lesen"], correct: 0, points: 10 },
            { id: "b1-gr-4", question: "Relativsatz: Die Stadt, in ___ ich wohne, ist sehr schön.", options: ["die", "der", "dem", "das"], correct: 1, points: 10 },
            { id: "b1-gr-5", question: "Konjunktiv II: Er tut so, als ___ er alles.", options: ["weiß", "wüsste", "wissen", "gewusst"], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
  },
  b2: {
    1: {
      title: "Aufgabe 1",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Die Digitalisierung verändert die Arbeitswelt grundlegend. Während früher die meisten Berufe an einen festen Arbeitsplatz gebunden waren, ermöglichen moderne Technologien heute flexibles Arbeiten von nahezu jedem Ort der Welt. Dieser Wandel bringt sowohl Chancen als auch Herausforderungen mit sich. Einerseits profitieren Arbeitnehmer von einer besseren Work-Life-Balance und ersparen sich lange Pendelzeiten. Andererseits verschwimmen die Grenzen zwischen Beruf und Privatleben zunehmend, was zu einer permanenten Erreichbarkeit und damit verbundenem Stress führen kann. Experten fordern daher klare gesetzliche Regelungen zum Recht auf Nichterreichbarkeit, wie sie in Frankreich bereits existieren.",
          questions: [
            { id: "b2-lv-1", question: "Was ermöglichen moderne Technologien laut dem Text?", options: ["Höhere Gehälter", "Flexibles Arbeiten von überall", "Kürzere Arbeitszeiten", "Mehr Urlaubstage"], correct: 1, points: 10 },
            { id: "b2-lv-2", question: "Welchen Vorteil haben Arbeitnehmer durch flexibles Arbeiten?", options: ["Mehr Geld", "Bessere Work-Life-Balance", "Sicherere Arbeitsplätze", "Mehr Kollegen"], correct: 1, points: 10 },
            { id: "b2-lv-3", question: "Was ist ein genanntes Problem der Digitalisierung?", options: ["Arbeitslosigkeit", "Verschwimmende Grenzen zwischen Beruf und Privatleben", "Mangel an Technologie", "Zu viel Urlaub"], correct: 1, points: 10 },
            { id: "b2-lv-4", question: "Was fordern Experten?", options: ["Mehr Homeoffice", "Weniger Digitalisierung", "Gesetzliche Regelungen zur Nichterreichbarkeit", "Höhere Löhne"], correct: 2, points: 10 },
            { id: "b2-lv-5", question: "In welchem Land gibt es bereits ein Recht auf Nichterreichbarkeit?", options: ["Deutschland", "Österreich", "Frankreich", "Schweiz"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-gr-1", question: "Konjunktiv I (indirekte Rede): Der Minister sagte, er ___ eine Lösung.", options: ["hat", "habe", "hätte", "hatte"], correct: 1, points: 10 },
            { id: "b2-gr-2", question: "Komplexe Satzstruktur: ___ er krank war, ging er trotzdem zur Arbeit.", options: ["Weil", "Obwohl", "Damit", "Nachdem"], correct: 1, points: 10 },
            { id: "b2-gr-3", question: "Präposition: Die Entscheidung wurde ___ der Mehrheit getroffen.", options: ["entgegen", "zufolge", "anhand", "seitens"], correct: 3, points: 10 },
            { id: "b2-gr-4", question: "Partizipialkonstruktion: Die ___ Studie zeigt neue Ergebnisse. (kürzlich veröffentlichen)", options: ["kürzlich veröffentlichte", "kürzlich veröffentlichende", "kürzlich veröffentlichen", "kürzlich zu veröffentlichende"], correct: 0, points: 10 },
            { id: "b2-gr-5", question: "Konjunktiv II Vergangenheit: Wenn ich das ___, hätte ich anders gehandelt.", options: ["weiß", "wusste", "gewusst hätte", "wissen würde"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
  },
};
