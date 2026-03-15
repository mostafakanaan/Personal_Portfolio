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
    2: {
      title: "Aufgabe 2",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Das ist meine Familie. Mein Vater heißt Thomas und ist 48 Jahre alt. Meine Mutter heißt Petra und ist 45 Jahre alt. Ich habe einen Bruder. Er heißt Lukas und ist 12 Jahre alt. Wir haben auch eine Katze. Sie heißt Mimi und ist sehr klein. Meine Großmutter wohnt auch bei uns. Sie ist 72 Jahre alt und kocht sehr gern.",
          questions: [
            { id: "a1-2-lv-1", question: "Wie alt ist der Vater?", options: ["45 Jahre", "48 Jahre", "50 Jahre", "42 Jahre"], correct: 1, points: 10 },
            { id: "a1-2-lv-2", question: "Wie heißt die Mutter?", options: ["Maria", "Anna", "Petra", "Sabine"], correct: 2, points: 10 },
            { id: "a1-2-lv-3", question: "Wie alt ist Lukas?", options: ["10 Jahre", "14 Jahre", "12 Jahre", "8 Jahre"], correct: 2, points: 10 },
            { id: "a1-2-lv-4", question: "Welches Tier hat die Familie?", options: ["Einen Hund", "Einen Vogel", "Ein Kaninchen", "Eine Katze"], correct: 3, points: 10 },
            { id: "a1-2-lv-5", question: "Was macht die Großmutter gern?", options: ["Sie liest.", "Sie kocht.", "Sie tanzt.", "Sie singt."], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-2-gr-1", question: "Possessivpronomen: Das ist ___ Bruder. (ich)", options: ["mein", "dein", "sein", "ihr"], correct: 0, points: 10 },
            { id: "a1-2-gr-2", question: "Possessivpronomen: ___ Mutter ist Ärztin. (er)", options: ["Meine", "Deine", "Seine", "Ihre"], correct: 2, points: 10 },
            { id: "a1-2-gr-3", question: "Plural: Ein Kind – zwei ___", options: ["Kinder", "Kinds", "Kindes", "Kindern"], correct: 0, points: 10 },
            { id: "a1-2-gr-4", question: "Negation: Ich habe ___ Auto.", options: ["nicht", "kein", "nein", "nichts"], correct: 1, points: 10 },
            { id: "a1-2-gr-5", question: "Negation: Er kommt heute ___.", options: ["kein", "keine", "nicht", "nichts"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    3: {
      title: "Aufgabe 3",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Heute ist Montag. Lisa geht zum Supermarkt. Sie kauft Milch, Brot, Äpfel und Käse. Der Supermarkt ist nicht weit von ihrem Haus. Lisa bezahlt mit ihrer Karte. Dann geht sie nach Hause und kocht Mittagessen.",
          questions: [
            { id: "a1-3-lv-1", question: "Welcher Tag ist heute?", options: ["Dienstag", "Mittwoch", "Montag", "Freitag"], correct: 2, points: 10 },
            { id: "a1-3-lv-2", question: "Wohin geht Lisa?", options: ["In die Schule", "Zum Supermarkt", "Ins Kino", "Zum Arzt"], correct: 1, points: 10 },
            { id: "a1-3-lv-3", question: "Was kauft Lisa NICHT?", options: ["Milch", "Brot", "Eier", "Käse"], correct: 2, points: 10 },
            { id: "a1-3-lv-4", question: "Wie bezahlt Lisa?", options: ["Mit Bargeld", "Mit einer Karte", "Mit einem Gutschein", "Sie bezahlt nicht"], correct: 1, points: 10 },
            { id: "a1-3-lv-5", question: "Was macht Lisa nach dem Einkauf?", options: ["Sie schläft", "Sie geht spazieren", "Sie kocht Mittagessen", "Sie liest"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-3-gr-1", question: "Welcher Artikel: ___ Apfel ist rot.", options: ["Die", "Das", "Der", "Ein"], correct: 2, points: 10 },
            { id: "a1-3-gr-2", question: "Welcher Artikel: ___ Milch ist kalt.", options: ["Der", "Die", "Das", "Ein"], correct: 1, points: 10 },
            { id: "a1-3-gr-3", question: "Verb konjugieren: Wir ___ heute einkaufen. (gehen)", options: ["gehst", "geht", "gehe", "gehen"], correct: 3, points: 10 },
            { id: "a1-3-gr-4", question: "Präposition: Lisa geht ___ Supermarkt.", options: ["in den", "in dem", "im", "an den"], correct: 0, points: 10 },
            { id: "a1-3-gr-5", question: "Plural: ein Apfel – viele ___", options: ["Apfels", "Äpfeln", "Äpfel", "Apfel"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    4: {
      title: "Aufgabe 4",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Heute ist Montag. Lisa geht zum Supermarkt. Sie kauft Milch, Brot, Äpfel und Käse. Der Supermarkt ist nicht weit von ihrem Haus. Lisa bezahlt mit ihrer Karte. Dann geht sie nach Hause und kocht Mittagessen.",
          questions: [
            { id: "a1-4-lv-1", question: "Welcher Tag ist heute?", options: ["Dienstag", "Mittwoch", "Montag", "Freitag"], correct: 2, points: 10 },
            { id: "a1-4-lv-2", question: "Wohin geht Lisa?", options: ["In die Schule", "Zum Supermarkt", "Ins Kino", "Zum Arzt"], correct: 1, points: 10 },
            { id: "a1-4-lv-3", question: "Was kauft Lisa NICHT?", options: ["Milch", "Brot", "Eier", "Käse"], correct: 2, points: 10 },
            { id: "a1-4-lv-4", question: "Wie bezahlt Lisa?", options: ["Mit Bargeld", "Mit einer Karte", "Mit einem Gutschein", "Sie bezahlt nicht"], correct: 1, points: 10 },
            { id: "a1-4-lv-5", question: "Was macht Lisa nach dem Einkauf?", options: ["Sie schläft", "Sie geht spazieren", "Sie kocht Mittagessen", "Sie liest"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-4-gr-1", question: "Welcher Artikel: ___ Apfel ist rot.", options: ["Die", "Das", "Der", "Ein"], correct: 2, points: 10 },
            { id: "a1-4-gr-2", question: "Welcher Artikel: ___ Milch ist kalt.", options: ["Der", "Die", "Das", "Ein"], correct: 1, points: 10 },
            { id: "a1-4-gr-3", question: "Verb konjugieren: Wir ___ heute einkaufen. (gehen)", options: ["gehst", "geht", "gehe", "gehen"], correct: 3, points: 10 },
            { id: "a1-4-gr-4", question: "Präposition: Lisa geht ___ Supermarkt.", options: ["in den", "in dem", "im", "an den"], correct: 0, points: 10 },
            { id: "a1-4-gr-5", question: "Plural: ein Apfel – viele ___", options: ["Apfels", "Äpfeln", "Äpfel", "Apfel"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    5: {
      title: "Aufgabe 5",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Heute ist Montag. Lisa geht zum Supermarkt. Sie kauft Milch, Brot, Äpfel und Käse. Der Supermarkt ist nicht weit von ihrem Haus. Lisa bezahlt mit ihrer Karte. Dann geht sie nach Hause und kocht Mittagessen.",
          questions: [
            { id: "a1-5-lv-1", question: "Welcher Tag ist heute?", options: ["Dienstag", "Mittwoch", "Montag", "Freitag"], correct: 2, points: 10 },
            { id: "a1-5-lv-2", question: "Wohin geht Lisa?", options: ["In die Schule", "Zum Supermarkt", "Ins Kino", "Zum Arzt"], correct: 1, points: 10 },
            { id: "a1-5-lv-3", question: "Was kauft Lisa NICHT?", options: ["Milch", "Brot", "Eier", "Käse"], correct: 2, points: 10 },
            { id: "a1-5-lv-4", question: "Wie bezahlt Lisa?", options: ["Mit Bargeld", "Mit einer Karte", "Mit einem Gutschein", "Sie bezahlt nicht"], correct: 1, points: 10 },
            { id: "a1-5-lv-5", question: "Was macht Lisa nach dem Einkauf?", options: ["Sie schläft", "Sie geht spazieren", "Sie kocht Mittagessen", "Sie liest"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-5-gr-1", question: "Welcher Artikel: ___ Apfel ist rot.", options: ["Die", "Das", "Der", "Ein"], correct: 2, points: 10 },
            { id: "a1-5-gr-2", question: "Welcher Artikel: ___ Milch ist kalt.", options: ["Der", "Die", "Das", "Ein"], correct: 1, points: 10 },
            { id: "a1-5-gr-3", question: "Verb konjugieren: Wir ___ heute einkaufen. (gehen)", options: ["gehst", "geht", "gehe", "gehen"], correct: 3, points: 10 },
            { id: "a1-5-gr-4", question: "Präposition: Lisa geht ___ Supermarkt.", options: ["in den", "in dem", "im", "an den"], correct: 0, points: 10 },
            { id: "a1-5-gr-5", question: "Plural: ein Apfel – viele ___", options: ["Apfels", "Äpfeln", "Äpfel", "Apfel"], correct: 2, points: 10 },
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
    2: {
      title: "Aufgabe 2",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Liebe Maria, nächsten Monat möchte ich nach Italien fahren. Ich plane eine Woche Urlaub am Meer. Zuerst fahre ich mit dem Zug nach Rom und bleibe dort zwei Tage. Dann nehme ich einen Bus nach Neapel. Dort möchte ich Pizza essen und das Meer sehen. Das Hotel habe ich schon gebucht. Es kostet 60 Euro pro Nacht. Kommst du mit? Es wird bestimmt toll! Liebe Grüße, Sophie",
          questions: [
            { id: "a2-2-lv-1", question: "Wohin möchte Sophie reisen?", options: ["Nach Spanien", "Nach Frankreich", "Nach Italien", "Nach Griechenland"], correct: 2, points: 10 },
            { id: "a2-2-lv-2", question: "Wie lange dauert der Urlaub?", options: ["Zwei Wochen", "Eine Woche", "Drei Tage", "Zehn Tage"], correct: 1, points: 10 },
            { id: "a2-2-lv-3", question: "Wie fährt Sophie nach Rom?", options: ["Mit dem Auto", "Mit dem Flugzeug", "Mit dem Bus", "Mit dem Zug"], correct: 3, points: 10 },
            { id: "a2-2-lv-4", question: "Was kostet das Hotel pro Nacht?", options: ["50 Euro", "70 Euro", "60 Euro", "80 Euro"], correct: 2, points: 10 },
            { id: "a2-2-lv-5", question: "Was möchte Sophie in Neapel machen?", options: ["Ein Museum besuchen", "Pizza essen und das Meer sehen", "Freunde treffen", "Shoppen gehen"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-2-gr-1", question: "Dativ: Ich fahre mit ___ Bus. (der Bus)", options: ["den", "dem", "der", "das"], correct: 1, points: 10 },
            { id: "a2-2-gr-2", question: "Präposition mit Dativ: Ich wohne ___ meiner Tante.", options: ["mit", "bei", "nach", "für"], correct: 1, points: 10 },
            { id: "a2-2-gr-3", question: "Präposition: Nach der Schule gehe ich ___ Hause.", options: ["zu", "nach", "bei", "mit"], correct: 1, points: 10 },
            { id: "a2-2-gr-4", question: "Komparativ: Berlin ist ___ als München. (groß)", options: ["großer", "größer", "am größten", "groß"], correct: 1, points: 10 },
            { id: "a2-2-gr-5", question: "Komparativ: Im Winter ist es ___ als im Sommer. (kalt)", options: ["kalter", "kälter", "am kältesten", "mehr kalt"], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    3: {
      title: "Aufgabe 3",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Lena und Marco suchen eine neue Wohnung. Sie möchten in der Nähe des Stadtzentrums wohnen, aber die Mieten dort sind sehr hoch. Eine Zweizimmerwohnung kostet mindestens 900 Euro pro Monat. Sie haben auch eine Anzeige für eine Wohnung in einem Vorort gesehen. Diese ist günstiger, aber die Fahrt in die Stadt dauert 30 Minuten. Sie müssen bald eine Entscheidung treffen, weil ihr aktueller Mietvertrag im nächsten Monat endet.",
          questions: [
            { id: "a2-3-lv-1", question: "Was suchen Lena und Marco?", options: ["Ein Haus", "Eine neue Wohnung", "Ein Büro", "Ein Zimmer"], correct: 1, points: 10 },
            { id: "a2-3-lv-2", question: "Was ist das Problem in der Stadtmitte?", options: ["Zu laut", "Keine Schulen", "Hohe Mieten", "Schlechte Verkehrsanbindung"], correct: 2, points: 10 },
            { id: "a2-3-lv-3", question: "Was kostet eine Zweizimmerwohnung mindestens?", options: ["700 Euro", "800 Euro", "1000 Euro", "900 Euro"], correct: 3, points: 10 },
            { id: "a2-3-lv-4", question: "Wie lange dauert die Fahrt aus dem Vorort?", options: ["15 Minuten", "45 Minuten", "30 Minuten", "Eine Stunde"], correct: 2, points: 10 },
            { id: "a2-3-lv-5", question: "Wann endet ihr aktueller Mietvertrag?", options: ["In zwei Monaten", "Nächsten Monat", "Nächstes Jahr", "In drei Wochen"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-3-gr-1", question: "Wechselpräposition (Ort): Das Buch liegt ___ Tisch.", options: ["auf dem", "auf den", "an dem", "an den"], correct: 0, points: 10 },
            { id: "a2-3-gr-2", question: "Wechselpräposition (Richtung): Leg das Buch ___ Tisch.", options: ["auf dem", "auf den", "an dem", "an den"], correct: 1, points: 10 },
            { id: "a2-3-gr-3", question: "Futur I: Morgen ___ wir eine neue Wohnung besichtigen.", options: ["haben", "sind", "werden", "müssen"], correct: 2, points: 10 },
            { id: "a2-3-gr-4", question: "Akkusativ: Ich suche ___ Wohnung.", options: ["eine", "einer", "einem", "ein"], correct: 0, points: 10 },
            { id: "a2-3-gr-5", question: "Superlativ: Diese Wohnung ist ___ in der Stadt. (günstig)", options: ["günstiger", "am günstigsten", "günstigste", "am günstiger"], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    4: {
      title: "Aufgabe 4",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Lena und Marco suchen eine neue Wohnung. Sie möchten in der Nähe des Stadtzentrums wohnen, aber die Mieten dort sind sehr hoch. Eine Zweizimmerwohnung kostet mindestens 900 Euro pro Monat. Sie haben auch eine Anzeige für eine Wohnung in einem Vorort gesehen. Diese ist günstiger, aber die Fahrt in die Stadt dauert 30 Minuten. Sie müssen bald eine Entscheidung treffen, weil ihr aktueller Mietvertrag im nächsten Monat endet.",
          questions: [
            { id: "a2-4-lv-1", question: "Was suchen Lena und Marco?", options: ["Ein Haus", "Eine neue Wohnung", "Ein Büro", "Ein Zimmer"], correct: 1, points: 10 },
            { id: "a2-4-lv-2", question: "Was ist das Problem in der Stadtmitte?", options: ["Zu laut", "Keine Schulen", "Hohe Mieten", "Schlechte Verkehrsanbindung"], correct: 2, points: 10 },
            { id: "a2-4-lv-3", question: "Was kostet eine Zweizimmerwohnung mindestens?", options: ["700 Euro", "800 Euro", "1000 Euro", "900 Euro"], correct: 3, points: 10 },
            { id: "a2-4-lv-4", question: "Wie lange dauert die Fahrt aus dem Vorort?", options: ["15 Minuten", "45 Minuten", "30 Minuten", "Eine Stunde"], correct: 2, points: 10 },
            { id: "a2-4-lv-5", question: "Wann endet ihr aktueller Mietvertrag?", options: ["In zwei Monaten", "Nächsten Monat", "Nächstes Jahr", "In drei Wochen"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-4-gr-1", question: "Wechselpräposition (Ort): Das Buch liegt ___ Tisch.", options: ["auf dem", "auf den", "an dem", "an den"], correct: 0, points: 10 },
            { id: "a2-4-gr-2", question: "Wechselpräposition (Richtung): Leg das Buch ___ Tisch.", options: ["auf dem", "auf den", "an dem", "an den"], correct: 1, points: 10 },
            { id: "a2-4-gr-3", question: "Futur I: Morgen ___ wir eine neue Wohnung besichtigen.", options: ["haben", "sind", "werden", "müssen"], correct: 2, points: 10 },
            { id: "a2-4-gr-4", question: "Akkusativ: Ich suche ___ Wohnung.", options: ["eine", "einer", "einem", "ein"], correct: 0, points: 10 },
            { id: "a2-4-gr-5", question: "Superlativ: Diese Wohnung ist ___ in der Stadt. (günstig)", options: ["günstiger", "am günstigsten", "günstigste", "am günstiger"], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    5: {
      title: "Aufgabe 5",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Lena und Marco suchen eine neue Wohnung. Sie möchten in der Nähe des Stadtzentrums wohnen, aber die Mieten dort sind sehr hoch. Eine Zweizimmerwohnung kostet mindestens 900 Euro pro Monat. Sie haben auch eine Anzeige für eine Wohnung in einem Vorort gesehen. Diese ist günstiger, aber die Fahrt in die Stadt dauert 30 Minuten. Sie müssen bald eine Entscheidung treffen, weil ihr aktueller Mietvertrag im nächsten Monat endet.",
          questions: [
            { id: "a2-5-lv-1", question: "Was suchen Lena und Marco?", options: ["Ein Haus", "Eine neue Wohnung", "Ein Büro", "Ein Zimmer"], correct: 1, points: 10 },
            { id: "a2-5-lv-2", question: "Was ist das Problem in der Stadtmitte?", options: ["Zu laut", "Keine Schulen", "Hohe Mieten", "Schlechte Verkehrsanbindung"], correct: 2, points: 10 },
            { id: "a2-5-lv-3", question: "Was kostet eine Zweizimmerwohnung mindestens?", options: ["700 Euro", "800 Euro", "1000 Euro", "900 Euro"], correct: 3, points: 10 },
            { id: "a2-5-lv-4", question: "Wie lange dauert die Fahrt aus dem Vorort?", options: ["15 Minuten", "45 Minuten", "30 Minuten", "Eine Stunde"], correct: 2, points: 10 },
            { id: "a2-5-lv-5", question: "Wann endet ihr aktueller Mietvertrag?", options: ["In zwei Monaten", "Nächsten Monat", "Nächstes Jahr", "In drei Wochen"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-5-gr-1", question: "Wechselpräposition (Ort): Das Buch liegt ___ Tisch.", options: ["auf dem", "auf den", "an dem", "an den"], correct: 0, points: 10 },
            { id: "a2-5-gr-2", question: "Wechselpräposition (Richtung): Leg das Buch ___ Tisch.", options: ["auf dem", "auf den", "an dem", "an den"], correct: 1, points: 10 },
            { id: "a2-5-gr-3", question: "Futur I: Morgen ___ wir eine neue Wohnung besichtigen.", options: ["haben", "sind", "werden", "müssen"], correct: 2, points: 10 },
            { id: "a2-5-gr-4", question: "Akkusativ: Ich suche ___ Wohnung.", options: ["eine", "einer", "einem", "ein"], correct: 0, points: 10 },
            { id: "a2-5-gr-5", question: "Superlativ: Diese Wohnung ist ___ in der Stadt. (günstig)", options: ["günstiger", "am günstigsten", "günstigste", "am günstiger"], correct: 1, points: 10 },
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
    2: {
      title: "Aufgabe 2",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Gesunde Ernährung wird in Deutschland immer wichtiger. Viele Menschen achten heute darauf, mehr Obst und Gemüse zu essen und weniger Zucker zu konsumieren. Ernährungsexperten empfehlen, mindestens fünf Portionen Obst und Gemüse pro Tag zu essen. Auch regelmäßige Bewegung spielt eine wichtige Rolle für die Gesundheit. Studien zeigen, dass Menschen, die sich ausgewogen ernähren und regelmäßig Sport treiben, seltener krank werden. Allerdings fällt es vielen schwer, ihre Gewohnheiten zu ändern, weil ungesundes Essen oft billiger und schneller verfügbar ist.",
          questions: [
            { id: "b1-2-lv-1", question: "Was wird in Deutschland immer wichtiger?", options: ["Schnelles Essen", "Gesunde Ernährung", "Billige Lebensmittel", "Neue Diäten"], correct: 1, points: 10 },
            { id: "b1-2-lv-2", question: "Wie viele Portionen Obst und Gemüse empfehlen Experten pro Tag?", options: ["Drei", "Vier", "Fünf", "Sieben"], correct: 2, points: 10 },
            { id: "b1-2-lv-3", question: "Was zeigen die Studien?", options: ["Sport ist gefährlich", "Ausgewogene Ernährung und Sport machen seltener krank", "Obst ist teuer", "Zucker ist gesund"], correct: 1, points: 10 },
            { id: "b1-2-lv-4", question: "Warum fällt es vielen schwer, sich gesund zu ernähren?", options: ["Weil gesundes Essen nicht schmeckt", "Weil ungesundes Essen billiger und schneller verfügbar ist", "Weil es keine Experten gibt", "Weil Sport verboten ist"], correct: 1, points: 10 },
            { id: "b1-2-lv-5", question: "Was spielt neben der Ernährung eine wichtige Rolle?", options: ["Schlafen", "Arbeiten", "Regelmäßige Bewegung", "Lesen"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-2-gr-1", question: "Infinitivsatz: Er geht ins Fitnessstudio, ___ fit zu bleiben.", options: ["für", "um", "ohne", "statt"], correct: 1, points: 10 },
            { id: "b1-2-gr-2", question: "Infinitivsatz: Sie ging weg, ___ sich zu verabschieden.", options: ["um", "statt", "ohne", "anstatt"], correct: 2, points: 10 },
            { id: "b1-2-gr-3", question: "Indirekte Frage: Ich weiß nicht, ___ er morgen kommt.", options: ["dass", "ob", "weil", "wenn"], correct: 1, points: 10 },
            { id: "b1-2-gr-4", question: "Indirekte Frage: Kannst du mir sagen, ___ der Zug abfährt?", options: ["wann", "dass", "ob", "wenn"], correct: 0, points: 10 },
            { id: "b1-2-gr-5", question: "Plusquamperfekt: Nachdem er die Prüfung ___ ___, feierte er.", options: ["bestanden hatte", "bestanden hat", "bestand hatte", "bestehen hatte"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    3: {
      title: "Aufgabe 3",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Homeoffice hat sich in vielen deutschen Unternehmen nach der Pandemie als feste Arbeitsform etabliert. Eine aktuelle Umfrage zeigt, dass 68 Prozent der Büroangestellten mindestens zwei Tage pro Woche von zu Hause arbeiten möchten. Arbeitgeber berichten von einer höheren Produktivität, gleichzeitig klagen viele Arbeitnehmer über soziale Isolation und fehlende Trennung zwischen Arbeit und Freizeit. Besonders jüngere Mitarbeiter wünschen sich mehr Präsenz im Büro, um von erfahrenen Kollegen zu lernen und soziale Kontakte zu pflegen. Viele Unternehmen entwickeln daher hybride Modelle, die beide Arbeitsformen kombinieren.",
          questions: [
            { id: "b1-3-lv-1", question: "Wie viel Prozent möchten mindestens zwei Tage Homeoffice?", options: ["48%", "58%", "68%", "78%"], correct: 2, points: 10 },
            { id: "b1-3-lv-2", question: "Was berichten Arbeitgeber über Homeoffice?", options: ["Weniger Kosten", "Höhere Produktivität", "Bessere Teamarbeit", "Kürzere Arbeitszeiten"], correct: 1, points: 10 },
            { id: "b1-3-lv-3", question: "Worüber klagen viele Arbeitnehmer?", options: ["Zu viel Arbeit", "Soziale Isolation", "Schlechtes Internet", "Lärm"], correct: 1, points: 10 },
            { id: "b1-3-lv-4", question: "Was wünschen sich jüngere Mitarbeiter?", options: ["Mehr Homeoffice", "Mehr Urlaub", "Mehr Präsenz im Büro", "Mehr Gehalt"], correct: 2, points: 10 },
            { id: "b1-3-lv-5", question: "Was entwickeln viele Unternehmen?", options: ["Neue Apps", "Hybride Modelle", "Mehr Büroflächen", "Neue Arbeitszeiten"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-3-gr-1", question: "Passiv Präteritum: Das Projekt ___ letztes Jahr ___.", options: ["wurde … abgeschlossen", "wird … abgeschlossen", "wurde … abschließen", "hat … abgeschlossen"], correct: 0, points: 10 },
            { id: "b1-3-gr-2", question: "Konzessivsatz: ___ er sehr müde war, arbeitete er weiter.", options: ["Weil", "Obwohl", "Wenn", "Damit"], correct: 1, points: 10 },
            { id: "b1-3-gr-3", question: "Finalsatz: Er macht Sport, ___ er gesund bleibt.", options: ["obwohl", "weil", "damit", "obwohl"], correct: 2, points: 10 },
            { id: "b1-3-gr-4", question: "Modalverb Passiv: Der Brief ___ heute noch geschrieben ___.", options: ["muss … werden", "muss … sein", "kann … haben", "soll … haben"], correct: 0, points: 10 },
            { id: "b1-3-gr-5", question: "Konjunktiv II Höflichkeit: ___ Sie mir bitte helfen?", options: ["Werden", "Können", "Könnten", "Dürfen"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    4: {
      title: "Aufgabe 4",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Homeoffice hat sich in vielen deutschen Unternehmen nach der Pandemie als feste Arbeitsform etabliert. Eine aktuelle Umfrage zeigt, dass 68 Prozent der Büroangestellten mindestens zwei Tage pro Woche von zu Hause arbeiten möchten. Arbeitgeber berichten von einer höheren Produktivität, gleichzeitig klagen viele Arbeitnehmer über soziale Isolation und fehlende Trennung zwischen Arbeit und Freizeit. Besonders jüngere Mitarbeiter wünschen sich mehr Präsenz im Büro, um von erfahrenen Kollegen zu lernen und soziale Kontakte zu pflegen. Viele Unternehmen entwickeln daher hybride Modelle, die beide Arbeitsformen kombinieren.",
          questions: [
            { id: "b1-4-lv-1", question: "Wie viel Prozent möchten mindestens zwei Tage Homeoffice?", options: ["48%", "58%", "68%", "78%"], correct: 2, points: 10 },
            { id: "b1-4-lv-2", question: "Was berichten Arbeitgeber über Homeoffice?", options: ["Weniger Kosten", "Höhere Produktivität", "Bessere Teamarbeit", "Kürzere Arbeitszeiten"], correct: 1, points: 10 },
            { id: "b1-4-lv-3", question: "Worüber klagen viele Arbeitnehmer?", options: ["Zu viel Arbeit", "Soziale Isolation", "Schlechtes Internet", "Lärm"], correct: 1, points: 10 },
            { id: "b1-4-lv-4", question: "Was wünschen sich jüngere Mitarbeiter?", options: ["Mehr Homeoffice", "Mehr Urlaub", "Mehr Präsenz im Büro", "Mehr Gehalt"], correct: 2, points: 10 },
            { id: "b1-4-lv-5", question: "Was entwickeln viele Unternehmen?", options: ["Neue Apps", "Hybride Modelle", "Mehr Büroflächen", "Neue Arbeitszeiten"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-4-gr-1", question: "Passiv Präteritum: Das Projekt ___ letztes Jahr ___.", options: ["wurde … abgeschlossen", "wird … abgeschlossen", "wurde … abschließen", "hat … abgeschlossen"], correct: 0, points: 10 },
            { id: "b1-4-gr-2", question: "Konzessivsatz: ___ er sehr müde war, arbeitete er weiter.", options: ["Weil", "Obwohl", "Wenn", "Damit"], correct: 1, points: 10 },
            { id: "b1-4-gr-3", question: "Finalsatz: Er macht Sport, ___ er gesund bleibt.", options: ["obwohl", "weil", "damit", "obwohl"], correct: 2, points: 10 },
            { id: "b1-4-gr-4", question: "Modalverb Passiv: Der Brief ___ heute noch geschrieben ___.", options: ["muss … werden", "muss … sein", "kann … haben", "soll … haben"], correct: 0, points: 10 },
            { id: "b1-4-gr-5", question: "Konjunktiv II Höflichkeit: ___ Sie mir bitte helfen?", options: ["Werden", "Können", "Könnten", "Dürfen"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    5: {
      title: "Aufgabe 5",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Homeoffice hat sich in vielen deutschen Unternehmen nach der Pandemie als feste Arbeitsform etabliert. Eine aktuelle Umfrage zeigt, dass 68 Prozent der Büroangestellten mindestens zwei Tage pro Woche von zu Hause arbeiten möchten. Arbeitgeber berichten von einer höheren Produktivität, gleichzeitig klagen viele Arbeitnehmer über soziale Isolation und fehlende Trennung zwischen Arbeit und Freizeit. Besonders jüngere Mitarbeiter wünschen sich mehr Präsenz im Büro, um von erfahrenen Kollegen zu lernen und soziale Kontakte zu pflegen. Viele Unternehmen entwickeln daher hybride Modelle, die beide Arbeitsformen kombinieren.",
          questions: [
            { id: "b1-5-lv-1", question: "Wie viel Prozent möchten mindestens zwei Tage Homeoffice?", options: ["48%", "58%", "68%", "78%"], correct: 2, points: 10 },
            { id: "b1-5-lv-2", question: "Was berichten Arbeitgeber über Homeoffice?", options: ["Weniger Kosten", "Höhere Produktivität", "Bessere Teamarbeit", "Kürzere Arbeitszeiten"], correct: 1, points: 10 },
            { id: "b1-5-lv-3", question: "Worüber klagen viele Arbeitnehmer?", options: ["Zu viel Arbeit", "Soziale Isolation", "Schlechtes Internet", "Lärm"], correct: 1, points: 10 },
            { id: "b1-5-lv-4", question: "Was wünschen sich jüngere Mitarbeiter?", options: ["Mehr Homeoffice", "Mehr Urlaub", "Mehr Präsenz im Büro", "Mehr Gehalt"], correct: 2, points: 10 },
            { id: "b1-5-lv-5", question: "Was entwickeln viele Unternehmen?", options: ["Neue Apps", "Hybride Modelle", "Mehr Büroflächen", "Neue Arbeitszeiten"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-5-gr-1", question: "Passiv Präteritum: Das Projekt ___ letztes Jahr ___.", options: ["wurde … abgeschlossen", "wird … abgeschlossen", "wurde … abschließen", "hat … abgeschlossen"], correct: 0, points: 10 },
            { id: "b1-5-gr-2", question: "Konzessivsatz: ___ er sehr müde war, arbeitete er weiter.", options: ["Weil", "Obwohl", "Wenn", "Damit"], correct: 1, points: 10 },
            { id: "b1-5-gr-3", question: "Finalsatz: Er macht Sport, ___ er gesund bleibt.", options: ["obwohl", "weil", "damit", "obwohl"], correct: 2, points: 10 },
            { id: "b1-5-gr-4", question: "Modalverb Passiv: Der Brief ___ heute noch geschrieben ___.", options: ["muss … werden", "muss … sein", "kann … haben", "soll … haben"], correct: 0, points: 10 },
            { id: "b1-5-gr-5", question: "Konjunktiv II Höflichkeit: ___ Sie mir bitte helfen?", options: ["Werden", "Können", "Könnten", "Dürfen"], correct: 2, points: 10 },
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
    2: {
      title: "Aufgabe 2",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Soziale Medien haben unsere Kommunikation grundlegend verändert. Plattformen wie Instagram, TikTok und X ermöglichen es, Informationen in Sekundenschnelle weltweit zu verbreiten. Befürworter betonen die demokratisierende Wirkung: Jeder kann seine Meinung äußern und sich vernetzen. Kritiker hingegen verweisen auf die zunehmende Verbreitung von Falschinformationen, Cybermobbing und die negativen Auswirkungen auf die psychische Gesundheit, insbesondere bei Jugendlichen. Studien belegen, dass exzessiver Social-Media-Konsum zu Schlafstörungen, Angstzuständen und einem verzerrten Selbstbild führen kann. Einige Länder haben deshalb Gesetze erlassen, die den Zugang für Minderjährige einschränken.",
          questions: [
            { id: "b2-2-lv-1", question: "Was betonen Befürworter sozialer Medien?", options: ["Die Unterhaltung", "Die demokratisierende Wirkung", "Die Werbeeinnahmen", "Die Geschwindigkeit"], correct: 1, points: 10 },
            { id: "b2-2-lv-2", question: "Welches Problem erwähnen Kritiker NICHT im Text?", options: ["Falschinformationen", "Cybermobbing", "Datenschutzverletzungen", "Negative Auswirkungen auf die psychische Gesundheit"], correct: 2, points: 10 },
            { id: "b2-2-lv-3", question: "Wozu kann exzessiver Social-Media-Konsum laut Studien führen?", options: ["Zu besseren Noten", "Zu mehr Kreativität", "Zu Schlafstörungen und Angstzuständen", "Zu mehr sozialen Kontakten"], correct: 2, points: 10 },
            { id: "b2-2-lv-4", question: "Wer ist besonders von negativen Auswirkungen betroffen?", options: ["Senioren", "Berufstätige", "Jugendliche", "Politiker"], correct: 2, points: 10 },
            { id: "b2-2-lv-5", question: "Was haben einige Länder unternommen?", options: ["Soziale Medien verboten", "Gesetze zum Schutz Minderjähriger erlassen", "Neue Plattformen entwickelt", "Die Nutzung für alle eingeschränkt"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-2-gr-1", question: "Nominalstil: Welcher Satz drückt dasselbe aus wie 'Die Studie wurde veröffentlicht'?", options: ["Die Veröffentlichung der Studie", "Das Veröffentlichen einer Studie", "Die Studie ist veröffentlicht", "Man veröffentlicht die Studie"], correct: 0, points: 10 },
            { id: "b2-2-gr-2", question: "Doppelkonjunktion: Er spricht ___ Deutsch ___ Englisch fließend.", options: ["sowohl … als auch", "weder … noch", "entweder … oder", "nicht nur … sondern auch"], correct: 0, points: 10 },
            { id: "b2-2-gr-3", question: "Doppelkonjunktion: Sie hat ___ Zeit ___ Lust, ins Kino zu gehen.", options: ["sowohl … als auch", "weder … noch", "entweder … oder", "zwar … aber"], correct: 1, points: 10 },
            { id: "b2-2-gr-4", question: "Genitivpräposition: ___ des schlechten Wetters blieben wir zu Hause.", options: ["Trotz", "Wegen", "Während", "Aufgrund"], correct: 1, points: 10 },
            { id: "b2-2-gr-5", question: "Genitivpräposition: ___ der Pandemie haben viele Menschen im Homeoffice gearbeitet.", options: ["Trotz", "Wegen", "Während", "Aufgrund"], correct: 2, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    3: {
      title: "Aufgabe 3",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Künstliche Intelligenz revolutioniert zunehmend den Bildungssektor. Adaptive Lernsysteme analysieren das individuelle Lernverhalten der Schüler und passen Aufgaben in Echtzeit an deren Kenntnisstand an. Befürworter sehen darin eine Chance zur Individualisierung des Unterrichts, die in überfüllten Klassen bisher kaum möglich war. Kritiker hingegen warnen vor einer zunehmenden Abhängigkeit von algorithmischen Entscheidungen und einer Vernachlässigung sozialer Kompetenzen, die nur im zwischenmenschlichen Austausch erworben werden können. Bildungsökonomen fordern eine differenzierte Debatte darüber, welche Kompetenzen im Zeitalter der KI tatsächlich noch vom Menschen erworben werden müssen.",
          questions: [
            { id: "b2-3-lv-1", question: "Was analysieren adaptive Lernsysteme?", options: ["Die Noten der Schüler", "Das individuelle Lernverhalten", "Die Anwesenheit der Schüler", "Den Lehrplan"], correct: 1, points: 10 },
            { id: "b2-3-lv-2", question: "Welchen Vorteil sehen Befürworter?", options: ["Günstigere Bildung", "Individualisierung des Unterrichts", "Weniger Lehrer nötig", "Schnelleres Lernen"], correct: 1, points: 10 },
            { id: "b2-3-lv-3", question: "Was kritisieren Skeptiker?", options: ["Die hohen Kosten", "Abhängigkeit von Algorithmen und Vernachlässigung sozialer Kompetenzen", "Zu langsame Systeme", "Fehlende Internetverbindung"], correct: 1, points: 10 },
            { id: "b2-3-lv-4", question: "Wo werden laut Kritikern soziale Kompetenzen erworben?", options: ["Im Internet", "Durch KI", "Im zwischenmenschlichen Austausch", "In Büchern"], correct: 2, points: 10 },
            { id: "b2-3-lv-5", question: "Was fordern Bildungsökonomen?", options: ["Mehr KI in Schulen", "Weniger Technologie", "Eine differenzierte Debatte über nötige Kompetenzen", "Abschaffung von Prüfungen"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-3-gr-1", question: "Konjunktiv I (indirekte Rede): Sie behauptete, sie ___ die Aufgabe verstanden.", options: ["hat", "habe", "hätte", "hatte"], correct: 1, points: 10 },
            { id: "b2-3-gr-2", question: "Erweiterte Partizipialkonstruktion: Der ___ Forscher präsentierte seine Ergebnisse. (renommiert)", options: ["renommierte", "renommierenden", "renommierten", "zu renommierende"], correct: 0, points: 10 },
            { id: "b2-3-gr-3", question: "Kausalität (Genitivpräposition): ___ seiner Erfahrung wurde er befördert.", options: ["Trotz", "Wegen", "Aufgrund", "Während"], correct: 2, points: 10 },
            { id: "b2-3-gr-4", question: "Konzessivkonstruktion: ___ aller Bemühungen scheiterte das Projekt.", options: ["Trotz", "Wegen", "Aufgrund", "Infolge"], correct: 0, points: 10 },
            { id: "b2-3-gr-5", question: "Nominalisierung: 'Man diskutiert das Problem' → formal: ___", options: ["die Diskussion des Problems", "das Diskutieren Problem", "diskutieren des Problems", "die diskutierte Problem"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    4: {
      title: "Aufgabe 4",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Künstliche Intelligenz revolutioniert zunehmend den Bildungssektor. Adaptive Lernsysteme analysieren das individuelle Lernverhalten der Schüler und passen Aufgaben in Echtzeit an deren Kenntnisstand an. Befürworter sehen darin eine Chance zur Individualisierung des Unterrichts, die in überfüllten Klassen bisher kaum möglich war. Kritiker hingegen warnen vor einer zunehmenden Abhängigkeit von algorithmischen Entscheidungen und einer Vernachlässigung sozialer Kompetenzen, die nur im zwischenmenschlichen Austausch erworben werden können. Bildungsökonomen fordern eine differenzierte Debatte darüber, welche Kompetenzen im Zeitalter der KI tatsächlich noch vom Menschen erworben werden müssen.",
          questions: [
            { id: "b2-4-lv-1", question: "Was analysieren adaptive Lernsysteme?", options: ["Die Noten der Schüler", "Das individuelle Lernverhalten", "Die Anwesenheit der Schüler", "Den Lehrplan"], correct: 1, points: 10 },
            { id: "b2-4-lv-2", question: "Welchen Vorteil sehen Befürworter?", options: ["Günstigere Bildung", "Individualisierung des Unterrichts", "Weniger Lehrer nötig", "Schnelleres Lernen"], correct: 1, points: 10 },
            { id: "b2-4-lv-3", question: "Was kritisieren Skeptiker?", options: ["Die hohen Kosten", "Abhängigkeit von Algorithmen und Vernachlässigung sozialer Kompetenzen", "Zu langsame Systeme", "Fehlende Internetverbindung"], correct: 1, points: 10 },
            { id: "b2-4-lv-4", question: "Wo werden laut Kritikern soziale Kompetenzen erworben?", options: ["Im Internet", "Durch KI", "Im zwischenmenschlichen Austausch", "In Büchern"], correct: 2, points: 10 },
            { id: "b2-4-lv-5", question: "Was fordern Bildungsökonomen?", options: ["Mehr KI in Schulen", "Weniger Technologie", "Eine differenzierte Debatte über nötige Kompetenzen", "Abschaffung von Prüfungen"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-4-gr-1", question: "Konjunktiv I (indirekte Rede): Sie behauptete, sie ___ die Aufgabe verstanden.", options: ["hat", "habe", "hätte", "hatte"], correct: 1, points: 10 },
            { id: "b2-4-gr-2", question: "Erweiterte Partizipialkonstruktion: Der ___ Forscher präsentierte seine Ergebnisse. (renommiert)", options: ["renommierte", "renommierenden", "renommierten", "zu renommierende"], correct: 0, points: 10 },
            { id: "b2-4-gr-3", question: "Kausalität (Genitivpräposition): ___ seiner Erfahrung wurde er befördert.", options: ["Trotz", "Wegen", "Aufgrund", "Während"], correct: 2, points: 10 },
            { id: "b2-4-gr-4", question: "Konzessivkonstruktion: ___ aller Bemühungen scheiterte das Projekt.", options: ["Trotz", "Wegen", "Aufgrund", "Infolge"], correct: 0, points: 10 },
            { id: "b2-4-gr-5", question: "Nominalisierung: 'Man diskutiert das Problem' → formal: ___", options: ["die Diskussion des Problems", "das Diskutieren Problem", "diskutieren des Problems", "die diskutierte Problem"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    5: {
      title: "Aufgabe 5",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Künstliche Intelligenz revolutioniert zunehmend den Bildungssektor. Adaptive Lernsysteme analysieren das individuelle Lernverhalten der Schüler und passen Aufgaben in Echtzeit an deren Kenntnisstand an. Befürworter sehen darin eine Chance zur Individualisierung des Unterrichts, die in überfüllten Klassen bisher kaum möglich war. Kritiker hingegen warnen vor einer zunehmenden Abhängigkeit von algorithmischen Entscheidungen und einer Vernachlässigung sozialer Kompetenzen, die nur im zwischenmenschlichen Austausch erworben werden können. Bildungsökonomen fordern eine differenzierte Debatte darüber, welche Kompetenzen im Zeitalter der KI tatsächlich noch vom Menschen erworben werden müssen.",
          questions: [
            { id: "b2-5-lv-1", question: "Was analysieren adaptive Lernsysteme?", options: ["Die Noten der Schüler", "Das individuelle Lernverhalten", "Die Anwesenheit der Schüler", "Den Lehrplan"], correct: 1, points: 10 },
            { id: "b2-5-lv-2", question: "Welchen Vorteil sehen Befürworter?", options: ["Günstigere Bildung", "Individualisierung des Unterrichts", "Weniger Lehrer nötig", "Schnelleres Lernen"], correct: 1, points: 10 },
            { id: "b2-5-lv-3", question: "Was kritisieren Skeptiker?", options: ["Die hohen Kosten", "Abhängigkeit von Algorithmen und Vernachlässigung sozialer Kompetenzen", "Zu langsame Systeme", "Fehlende Internetverbindung"], correct: 1, points: 10 },
            { id: "b2-5-lv-4", question: "Wo werden laut Kritikern soziale Kompetenzen erworben?", options: ["Im Internet", "Durch KI", "Im zwischenmenschlichen Austausch", "In Büchern"], correct: 2, points: 10 },
            { id: "b2-5-lv-5", question: "Was fordern Bildungsökonomen?", options: ["Mehr KI in Schulen", "Weniger Technologie", "Eine differenzierte Debatte über nötige Kompetenzen", "Abschaffung von Prüfungen"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-5-gr-1", question: "Konjunktiv I (indirekte Rede): Sie behauptete, sie ___ die Aufgabe verstanden.", options: ["hat", "habe", "hätte", "hatte"], correct: 1, points: 10 },
            { id: "b2-5-gr-2", question: "Erweiterte Partizipialkonstruktion: Der ___ Forscher präsentierte seine Ergebnisse. (renommiert)", options: ["renommierte", "renommierenden", "renommierten", "zu renommierende"], correct: 0, points: 10 },
            { id: "b2-5-gr-3", question: "Kausalität (Genitivpräposition): ___ seiner Erfahrung wurde er befördert.", options: ["Trotz", "Wegen", "Aufgrund", "Während"], correct: 2, points: 10 },
            { id: "b2-5-gr-4", question: "Konzessivkonstruktion: ___ aller Bemühungen scheiterte das Projekt.", options: ["Trotz", "Wegen", "Aufgrund", "Infolge"], correct: 0, points: 10 },
            { id: "b2-5-gr-5", question: "Nominalisierung: 'Man diskutiert das Problem' → formal: ___", options: ["die Diskussion des Problems", "das Diskutieren Problem", "diskutieren des Problems", "die diskutierte Problem"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
  },
};
