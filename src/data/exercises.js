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
          text: "Die Stadt hat viele Blumen. Im Park gibt es Rosen, Tulpen und Sonnenblumen. Blumen machen die Stadt sch\u00f6n und freundlich. Viele Menschen kommen in den Park, um die Blumen zu sehen. Kinder spielen und Erwachsene entspannen sich.",
          questions: [
            { id: "a1-lv-4-1", question: "Wo sind die Blumen?", options: ["In der Schule", "Im Park", "Zu Hause", "Im Restaurant"], correct: 1, points: 10 },
            { id: "a1-lv-4-2", question: "Welche Blumen sind im Park?", options: ["Rosen, Tulpen und Sonnenblumen", "Narzissen und Lilien", "Kaktusse und Gr\u00e4ser", "Orchideen und Veilchen"], correct: 0, points: 10 },
            { id: "a1-lv-4-3", question: "Warum kommen viele Menschen in den Park?", options: ["Um zu arbeiten", "Um die Blumen zu sehen", "Um zu essen", "Um zu joggen"], correct: 1, points: 10 },
            { id: "a1-lv-4-4", question: "Was machen die Kinder im Park?", options: ["Sie arbeiten", "Sie spielen", "Sie lesen", "Sie schlafen"], correct: 1, points: 10 },
            { id: "a1-lv-4-5", question: "Wie macht Blumen die Stadt?", options: ["Sch\u00f6n und freundlich", "Langweilig und traurig", "Dunkel und laut", "Sauber und schnell"], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-gr-4-1", question: "Was ist die richtige Form? Ich ____ ein Buch.", options: ["lese", "lesen", "liest", "liestest"], correct: 0, points: 10 },
            { id: "a1-gr-4-2", question: "Wie sagt man: 'Das ist mein Freund.'?", options: ["Das sind meine Freund.", "Das ist mein Freunde.", "Das ist mein Freund.", "Das sind meine Freunde."], correct: 2, points: 10 },
            { id: "a1-gr-4-3", question: "Was passt hier? _____ du essen?", options: ["Ich", "Er", "Sie", "Du"], correct: 3, points: 10 },
            { id: "a1-gr-4-4", question: "Was ist richtig? Sie _____ im Park.", options: ["spielt", "spielen", "spielst", "spiel"], correct: 1, points: 10 },
            { id: "a1-gr-4-5", question: "Wie fragt man: 'Wo ist das Buch?'?", options: ["Das Buch ist wo?", "Wo das Buch ist?", "Wo ist das Buch?", "Wo das Buch?"], correct: 2, points: 10 },
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
          text: "Die Katze ist ein interessantes Tier. Sie mag es, zu spielen und zu schlafen. Katzen haben weiches Fell und k\u00f6nnen gut springen. Viele Menschen haben Katzen als Haustiere. Katzen sind auch gute J\u00e4ger.",
          questions: [
            { id: "a1-lv-5-1", question: "Was macht die Katze gerne?", options: ["Arbeiten", "Schlafen", "Lernen", "Singen"], correct: 1, points: 10 },
            { id: "a1-lv-5-2", question: "Wie ist das Fell der Katze?", options: ["Hart", "Weich", "Rau", "Bunt"], correct: 1, points: 10 },
            { id: "a1-lv-5-3", question: "Was k\u00f6nnen Katzen gut?", options: ["Schwimmen", "Springen", "Laufen", "Fliegen"], correct: 1, points: 10 },
            { id: "a1-lv-5-4", question: "Haben viele Menschen Katzen?", options: ["Ja", "Nein", "Egal", "Vielleicht"], correct: 0, points: 10 },
            { id: "a1-lv-5-5", question: "Sind Katzen gute J\u00e4ger?", options: ["Ja", "Nein", "Vielleicht", "Nicht sicher"], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-gr-5-1", question: "Wie sagt man: 'Ich _____ eine Katze.'?", options: ["haben", "hatte", "habe", "hat"], correct: 2, points: 10 },
            { id: "a1-gr-5-2", question: "Wie sagt man: 'Die Katze ist _____ Tier.'?", options: ["ein", "eine", "einen", "eines"], correct: 0, points: 10 },
            { id: "a1-gr-5-3", question: "Wie fragt man: 'Was _____ die Katze?'", options: ["macht", "machtet", "mache", "machst"], correct: 0, points: 10 },
            { id: "a1-gr-5-4", question: "Wie sagt man: 'Katzen sind _____ Tiere.'?", options: ["sch\u00f6n", "sch\u00f6nen", "sch\u00f6ner", "sch\u00f6neren"], correct: 0, points: 10 },
            { id: "a1-gr-5-5", question: "Wie fragt man: 'Wo _____ die Katze?'", options: ["ist", "sind", "war", "sei"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    6: {
      title: "Aufgabe 6",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Die Wolken sind sehr wichtig f\u00fcr das Wetter. Sie bringen Regen und Schatten. Viele Tiere leben in den Wolken, zum Beispiel V\u00f6gel. Wenn die Wolken grau sind, wird es oft nass. Aber manchmal sind die Wolken auch wei\u00df und sch\u00f6n.",
          questions: [
            { id: "a1-lv-6-1", question: "Was bringen die Wolken?", options: ["Sonne", "Regen", "Wind", "Schnee"], correct: 1, points: 10 },
            { id: "a1-lv-6-2", question: "Welches Tier lebt in den Wolken?", options: ["Katze", "Hund", "Vogel", "Fisch"], correct: 2, points: 10 },
            { id: "a1-lv-6-3", question: "Wie sehen graue Wolken aus?", options: ["Sch\u00f6n", "Nass", "Schnell", "Langsam"], correct: 1, points: 10 },
            { id: "a1-lv-6-4", question: "Wann sind die Wolken sch\u00f6n?", options: ["Wenn sie grau sind", "Wenn sie wei\u00df sind", "Wenn sie schwarz sind", "Wenn sie klein sind"], correct: 1, points: 10 },
            { id: "a1-lv-6-5", question: "Was ist eine Eigenschaft von Wolken?", options: ["Sie sind hart", "Sie bringen Schatten", "Sie sind eckig", "Sie sind schnell"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-gr-6-1", question: "Welches Wort ist richtig? Ich ___ ein Buch.", options: ["haben", "hat", "habe", "hatte"], correct: 2, points: 10 },
            { id: "a1-gr-6-2", question: "Wie sagt man: 'Der Hund ist klein'? ", options: ["Der Hund ist klein", "Die Hunde sind klein", "Das Hund ist klein", "Die Hund ist klein"], correct: 0, points: 10 },
            { id: "a1-gr-6-3", question: "Was ist richtig? Sie ___ (essen) eine Pizza.", options: ["essen", "esse", "isst", "e\u00dft"], correct: 0, points: 10 },
            { id: "a1-gr-6-4", question: "Wie fragt man nach dem Namen? 'Was ist ___ Name?'", options: ["dein", "ihr", "mein", "sein"], correct: 0, points: 10 },
            { id: "a1-gr-6-5", question: "Vervollst\u00e4ndige den Satz: 'Ich ___ in der Schule.'", options: ["lerne", "lernen", "lernst", "lernt"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    7: {
      title: "Aufgabe 7",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "Die Schildkr\u00f6te ist ein langsames Tier. Sie hat einen harten Panzer. Schildkr\u00f6ten k\u00f6nnen sehr alt werden. Einige Schildkr\u00f6ten leben mehr als 100 Jahre. Sie essen Pflanzen und manchmal auch kleine Tiere. Im Wasser schwimmen sie gut.",
          questions: [
            { id: "a1-lv-7-1", question: "Wie schnell ist die Schildkr\u00f6te?", options: ["Sehr schnell", "Langsam", "Mittel", "Nicht bekannt"], correct: 1, points: 10 },
            { id: "a1-lv-7-2", question: "Was hat die Schildkr\u00f6te?", options: ["Einen weichen Panzer", "Einen harten Panzer", "Keine Beine", "Gro\u00dfe Fl\u00fcgel"], correct: 1, points: 10 },
            { id: "a1-lv-7-3", question: "Wie alt kann eine Schildkr\u00f6te werden?", options: ["20 Jahre", "50 Jahre", "100 Jahre oder mehr", "5 Jahre"], correct: 2, points: 10 },
            { id: "a1-lv-7-4", question: "Was frisst die Schildkr\u00f6te?", options: ["Nur Fleisch", "Nur Pflanzen", "Pflanzen und kleine Tiere", "Nichts"], correct: 2, points: 10 },
            { id: "a1-lv-7-5", question: "Wo schwimmen Schildkr\u00f6ten gut?", options: ["Im Wasser", "Im Sand", "In der Luft", "In B\u00e4umen"], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a1-gr-7-1", question: "Wie sagt man: Ich (essen) einen Apfel?", options: ["esse", "esst", "essen", "isst"], correct: 0, points: 10 },
            { id: "a1-gr-7-2", question: "Welches Wort ist richtig: Sie (sein) freundlich.", options: ["sind", "bin", "ist", "seid"], correct: 0, points: 10 },
            { id: "a1-gr-7-3", question: "Wie sagt man: Wir (haben) ein Buch?", options: ["habt", "haben", "hat", "habe"], correct: 1, points: 10 },
            { id: "a1-gr-7-4", question: "Was ist der richtige Satz: Er (gehen) zur Schule.", options: ["gehe", "geht", "gehen", "gehtet"], correct: 1, points: 10 },
            { id: "a1-gr-7-5", question: "Wie sagt man: Du (haben) einen Ball?", options: ["hast", "hab", "hat", "haben"], correct: 0, points: 10 },
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
          text: "Wusstest du, dass viele Menschen in Deutschland ihre Freizeit mit dem Spielen von Brettspielen verbringen? Brettspiele sind nicht nur f\u00fcr Kinder, sondern auch f\u00fcr Erwachsene sehr beliebt. Es gibt viele verschiedene Arten von Spielen, zum Beispiel Strategiespiele oder Familienspiele. In Deutschland gibt es sogar Wettbewerbe, bei denen die besten Spieler gegeneinander antreten. Brettspiele bringen Menschen zusammen und machen viel Spa\u00df!",
          questions: [
            { id: "a2-lv-4-1", question: "Wer spielt Brettspiele in Deutschland?", options: ["Nur Kinder", "Nur Erwachsene", "Kinder und Erwachsene", "Nur Senioren"], correct: 2, points: 10 },
            { id: "a2-lv-4-2", question: "Was ist ein Beispiel f\u00fcr Brettspiele?", options: ["Sportspiele", "Strategiespiele", "Computerspiele", "Kartenspiele"], correct: 1, points: 10 },
            { id: "a2-lv-4-3", question: "Was machen die besten Spieler?", options: ["Sie spielen alleine", "Sie spielen gegen andere", "Sie spielen nicht mehr", "Sie spielen nur zu Hause"], correct: 1, points: 10 },
            { id: "a2-lv-4-4", question: "Was ist ein Vorteil von Brettspielen?", options: ["Sie sind teuer", "Sie sind langweilig", "Sie bringen Menschen zusammen", "Sie dauern lange"], correct: 2, points: 10 },
            { id: "a2-lv-4-5", question: "Wo gibt es Wettbewerbe f\u00fcr Brettspiele?", options: ["In Schulen", "In St\u00e4dten", "In Deutschland", "In ganzen Europa"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-gr-4-1", question: "Wie sagt man: 'Ich ___ ein Buch.'? (richtiges Verb einsetzen)", options: ["lesen", "liest", "liestet", "lese"], correct: 3, points: 10 },
            { id: "a2-gr-4-2", question: "Was ist die richtige Form: 'Er ___ ins Kino.'?", options: ["gehst", "geht", "gehe", "gehen"], correct: 1, points: 10 },
            { id: "a2-gr-4-3", question: "Wie sagt man: 'Wir ___ gerne Musik.'?", options: ["h\u00f6rst", "h\u00f6ren", "h\u00f6rte", "h\u00f6rte"], correct: 1, points: 10 },
            { id: "a2-gr-4-4", question: "Wie sagt man: 'Du ___ ein gutes Essen.'?", options: ["kochst", "kocht", "koche", "gekocht"], correct: 0, points: 10 },
            { id: "a2-gr-4-5", question: "Was ist die richtige Form: 'Sie ___ nach Hause.'?", options: ["geht", "gehst", "geh", "gehen"], correct: 3, points: 10 },
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
          text: "In vielen St\u00e4dten gibt es sogenannte 'B\u00fccherboxen'. Das sind kleine, \u00f6ffentliche Regale, in denen Menschen B\u00fccher kostenlos nehmen oder abgeben k\u00f6nnen. Jeder kann mitmachen, egal ob gro\u00df oder klein. Die Idee ist, das Lesen zu f\u00f6rdern und die Liebe zu B\u00fcchern zu teilen. Viele B\u00fccherboxen sind bunt bemalt und stehen in Parks oder auf Pl\u00e4tzen.",
          questions: [
            { id: "a2-lv-5-1", question: "Was sind B\u00fccherboxen?", options: ["Kinos", "Regale f\u00fcr B\u00fccher", "Restaurants", "Schulen"], correct: 1, points: 10 },
            { id: "a2-lv-5-2", question: "Kann jeder die B\u00fccherboxen benutzen?", options: ["Nein, nur Erwachsene", "Ja, alle k\u00f6nnen mitmachen", "Nur Kinder", "Nur Bibliothekare"], correct: 1, points: 10 },
            { id: "a2-lv-5-3", question: "Wie f\u00f6rdern B\u00fccherboxen das Lesen?", options: ["Durch Verkauf von B\u00fcchern", "Durch das Teilen von B\u00fcchern", "Durch Lesewettbewerbe", "Durch Schreibkurse"], correct: 1, points: 10 },
            { id: "a2-lv-5-4", question: "Wo stehen viele B\u00fccherboxen?", options: ["In Bibliotheken", "In Schulen", "In Parks oder auf Pl\u00e4tzen", "In Gesch\u00e4ften"], correct: 2, points: 10 },
            { id: "a2-lv-5-5", question: "Sind die B\u00fccher in den B\u00fccherboxen kostenlos?", options: ["Ja", "Nein", "Man muss bezahlen", "Nur f\u00fcr Mitglieder"], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-gr-5-1", question: "Wie sagt man: 'Ich habe ein Buch'? (Richtige Form)?", options: ["Ich habe ein Buch.", "Ich hat ein Buch.", "Ich habe ein B\u00fccher.", "Ich hab ein Buch."], correct: 0, points: 10 },
            { id: "a2-gr-5-2", question: "Was ist die richtige Frage: 'Wo _____ das Buch?'?", options: ["ist", "sind", "war", "werden"], correct: 0, points: 10 },
            { id: "a2-gr-5-3", question: "Wie sagt man: 'Wir lesen B\u00fccher'? (Richtige Form)?", options: ["Wir lese B\u00fccher.", "Wir liest B\u00fccher.", "Wir lesen Buch.", "Wir lesen B\u00fccher."], correct: 3, points: 10 },
            { id: "a2-gr-5-4", question: "Was ist die richtige Frage: 'Hast du _____ Buch?'?", options: ["ein", "eine", "der", "das"], correct: 0, points: 10 },
            { id: "a2-gr-5-5", question: "Welches Wort passt?: 'Ich finde das Buch _____' (gut)?", options: ["gute", "gut", "guten", "gutem"], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    6: {
      title: "Aufgabe 6",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "In vielen L\u00e4ndern gibt es Feste, die die Jahreszeiten feiern. Zum Beispiel feiern die Menschen in Japan das Kirschbl\u00fctenfest, wenn die Blumen bl\u00fchen. In Mexiko gibt es das Fest der Toten, bei dem die Familien ihre verstorbenen Angeh\u00f6rigen ehren. Auch in Deutschland gibt es besondere Feiertage, wie den Erntedankfest, an dem die Menschen f\u00fcr die Ernte danken. Diese Feste bringen die Menschen zusammen und zeigen die Kultur des Landes.",
          questions: [
            { id: "a2-lv-6-1", question: "Welches Fest wird in Japan gefeiert?", options: ["A) Erntedankfest", "B) Kirschbl\u00fctenfest", "C) Oktoberfest", "D) Weihnachtsfest"], correct: 1, points: 10 },
            { id: "a2-lv-6-2", question: "Was wird beim Fest der Toten in Mexiko gemacht?", options: ["A) Man feiert mit Musik.", "B) Man tanzt den ganzen Tag.", "C) Man ehrt die Verstorbenen.", "D) Man isst viel Essen."], correct: 2, points: 10 },
            { id: "a2-lv-6-3", question: "Warum werden Feste gefeiert?", options: ["A) Um Geld zu verdienen.", "B) Um die Kultur zu zeigen.", "C) Um alleine zu sein.", "D) Um zu reisen."], correct: 1, points: 10 },
            { id: "a2-lv-6-4", question: "Welches Fest ist typisch f\u00fcr Deutschland?", options: ["A) Kirschbl\u00fctenfest", "B) Erntedankfest", "C) Fest der Toten", "D) Neujahrsfest"], correct: 1, points: 10 },
            { id: "a2-lv-6-5", question: "Was bringen diese Feste?", options: ["A) Sie bringen die Menschen zusammen.", "B) Sie machen die Leute traurig.", "C) Sie kosten viel Geld.", "D) Sie sind immer im Winter."], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-gr-6-1", question: "Wie fragt man nach dem Weg?", options: ["A) Wo ist der Bahnhof?", "B) Der Bahnhof ist dort.", "C) Ich mag den Bahnhof.", "D) Bahnhof ist gro\u00df."], correct: 0, points: 10 },
            { id: "a2-gr-6-2", question: "Was passt zu 'Ich gehe...'", options: ["A) gehen.", "B) gehen.", "C) gehe.", "D) geht."], correct: 2, points: 10 },
            { id: "a2-gr-6-3", question: "Wie sagt man: 'Es gibt viele B\u00fccher.'?", options: ["A) Es gibt viel B\u00fccher.", "B) Es gibt viele Buch.", "C) Es gibt viele B\u00fccher.", "D) Es gibt Buch."], correct: 2, points: 10 },
            { id: "a2-gr-6-4", question: "Wie fragt man, ob jemand etwas m\u00f6chte?", options: ["A) M\u00f6chtest du einen Apfel?", "B) Du m\u00f6chtest einen Apfel?", "C) Willst einen Apfel?", "D) M\u00f6chte Apfel?"], correct: 0, points: 10 },
            { id: "a2-gr-6-5", question: "Was ist richtig: 'Ich habe Hunger.' oder 'Ich habe Hunger haben.'?", options: ["A) Ich habe Hunger.", "B) Ich Hunger haben.", "C) Hunger habe ich.", "D) Ich habe Hunger haben."], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    7: {
      title: "Aufgabe 7",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "In vielen St\u00e4dten gibt es spezielle Caf\u00e9s f\u00fcr Katzenliebhaber. Diese Caf\u00e9s hei\u00dfen Katzen-Caf\u00e9s und sind sehr beliebt. Die G\u00e4ste k\u00f6nnen Kaffee trinken und gleichzeitig mit Katzen spielen. Die Katzen sind oft gerettet und warten auf ein neues Zuhause. In vielen L\u00e4ndern gibt es bereits solche Caf\u00e9s, und die Besucher lieben die entspannte Atmosph\u00e4re.",
          questions: [
            { id: "a2-lv-7-1", question: "Was sind Katzen-Caf\u00e9s?", options: ["Caf\u00e9s mit Hunden", "Caf\u00e9s mit Katzen", "Caf\u00e9s ohne Tiere", "Caf\u00e9s f\u00fcr B\u00fccher"], correct: 1, points: 10 },
            { id: "a2-lv-7-2", question: "Was k\u00f6nnen die G\u00e4ste dort machen?", options: ["Essen kochen", "Katzen streicheln", "Arbeiten", "Schlafen"], correct: 1, points: 10 },
            { id: "a2-lv-7-3", question: "Woher kommen die Katzen in den Caf\u00e9s?", options: ["Sie sind teuer gekauft", "Sie sind gerettet", "Sie sind im Zoo", "Sie sind im Park"], correct: 1, points: 10 },
            { id: "a2-lv-7-4", question: "Warum sind Katzen-Caf\u00e9s beliebt?", options: ["Weil es laut ist", "Weil man dort rauchen kann", "Weil die Atmosph\u00e4re entspannt ist", "Weil es keine Tiere gibt"], correct: 2, points: 10 },
            { id: "a2-lv-7-5", question: "Gibt es Katzen-Caf\u00e9s in vielen L\u00e4ndern?", options: ["Ja", "Nein", "Nur in Deutschland", "Nur in Asien"], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "a2-gr-7-1", question: "Welches Wort passt in den Satz: Ich ____ gerne Kaffee.", options: ["trinken", "trinkst", "trinke", "trink"], correct: 2, points: 10 },
            { id: "a2-gr-7-2", question: "Was ist die richtige Form: Du ____ die Katzen.", options: ["liebst", "liebe", "liebt", "lieben"], correct: 0, points: 10 },
            { id: "a2-gr-7-3", question: "Vervollst\u00e4ndige den Satz: Sie gehen ____ Caf\u00e9.", options: ["zu", "in", "an", "auf"], correct: 1, points: 10 },
            { id: "a2-gr-7-4", question: "Wie sagt man: Ich finde die Katzen s\u00fc\u00df.", options: ["Ich finde die Katzen s\u00fc\u00df.", "Ich finde die Katze s\u00fc\u00df.", "Ich finde die Katzen s\u00fc\u00dfe.", "Ich finde die Katzen s\u00fc\u00dfes."], correct: 0, points: 10 },
            { id: "a2-gr-7-5", question: "Was ist die richtige Frageform: ____ du Katzen?", options: ["Hast", "Haste", "Hast du", "Du hast"], correct: 2, points: 10 },
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
          text: "In den letzten Jahren hat sich das Interesse an Urban Gardening stark erh\u00f6ht. Immer mehr Menschen entdecken die Freude am G\u00e4rtnern in der Stadt, sei es auf Balkonen, D\u00e4chern oder in Gemeinschaftsg\u00e4rten. Diese Form des G\u00e4rtnerns bietet nicht nur die M\u00f6glichkeit, frisches Gem\u00fcse anzubauen, sondern f\u00f6rdert auch den sozialen Austausch unter Nachbarn. Urban Gardening ist somit nicht nur eine Antwort auf die Frage der Nahrungsmittelproduktion, sondern tr\u00e4gt auch zur Verbesserung des Stadtklimas bei. Viele St\u00e4dte unterst\u00fctzen diese Initiativen durch F\u00f6rderprogramme und Workshops.",
          questions: [
            { id: "b1-lv-4-1", question: "Was ist Urban Gardening?", options: ["Ein Sport", "Eine Form des G\u00e4rtnerns in der Stadt", "Ein Restaurant", "Ein Gartenbaukurs"], correct: 1, points: 10 },
            { id: "b1-lv-4-2", question: "Was f\u00f6rdert Urban Gardening neben dem Anbau von Gem\u00fcse?", options: ["L\u00e4rm", "Sozialen Austausch", "Verschmutzung", "Wettbewerb"], correct: 1, points: 10 },
            { id: "b1-lv-4-3", question: "Wie reagieren viele St\u00e4dte auf Urban Gardening?", options: ["Sie ignorieren es", "Sie unterst\u00fctzen es", "Sie verbieten es", "Sie f\u00f6rdern nur den Kauf von Gem\u00fcse"], correct: 1, points: 10 },
            { id: "b1-lv-4-4", question: "Wo kann man Urban Gardening betreiben?", options: ["Nur in gro\u00dfen G\u00e4rten", "Auf Balkonen, D\u00e4chern und in Gemeinschaftsg\u00e4rten", "Nur im Freien", "In einem Gew\u00e4chshaus"], correct: 1, points: 10 },
            { id: "b1-lv-4-5", question: "Welchen Vorteil hat Urban Gardening f\u00fcr das Stadtklima?", options: ["Es verschlechtert es", "Es verbessert es", "Es hat keinen Einfluss", "Es macht die Stadt lauter"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-gr-4-1", question: "Welches Wort passt in den Satz? 'Wenn ich Zeit h\u00e4tte, _____ ich mehr B\u00fccher lesen.'", options: ["w\u00fcrde", "wird", "hatte", "habe"], correct: 0, points: 10 },
            { id: "b1-gr-4-2", question: "Wie lautet die korrekte Form? 'Sie _____ (gehen) oft ins Kino.'", options: ["geht", "gehen", "gehst", "geh"], correct: 1, points: 10 },
            { id: "b1-gr-4-3", question: "Was ist die richtige Verbindung? 'Obwohl es regnete, _____ wir spazieren.'", options: ["gingen", "ging", "gehe", "gehen"], correct: 0, points: 10 },
            { id: "b1-gr-4-4", question: "Wie wird der Satz abgeschlossen? 'Ich w\u00fcrde gerne, _____ ich keine Zeit habe.'", options: ["obwohl", "weil", "aber", "da"], correct: 0, points: 10 },
            { id: "b1-gr-4-5", question: "Welche Form ist richtig? 'Es ist wichtig, dass du _____ (kommen).' ", options: ["kommst", "kommen", "kam", "gekommen"], correct: 0, points: 10 },
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
          text: "In der heutigen Zeit gewinnt die Kunst des Geschichtenerz\u00e4hlens, auch bekannt als Storytelling, zunehmend an Bedeutung. Viele Unternehmen nutzen diese Technik, um ihre Markenbotschaften ansprechend zu vermitteln. Storytelling schafft eine emotionale Verbindung zwischen dem Publikum und der Marke, was zu einer besseren Erinnerung und h\u00f6heren Kundenbindung f\u00fchrt. Zudem f\u00f6rdert es Kreativit\u00e4t und Innovation, indem es Menschen dazu anregt, ihre eigenen Erfahrungen und Meinungen in die Geschichten einzubringen. Durch die Kombination von Fakten und Emotionen wird die Kommunikation effektiver und einpr\u00e4gsamer.",
          questions: [
            { id: "b1-lv-5-1", question: "Was ist Storytelling?", options: ["Eine Technik zur Markenvermittlung", "Eine Art von Kunst", "Ein Buchgenre", "Ein Filmstil"], correct: 0, points: 10 },
            { id: "b1-lv-5-2", question: "Warum ist Storytelling wichtig f\u00fcr Unternehmen?", options: ["Es ist g\u00fcnstig", "Es schafft emotionale Verbindungen", "Es ist sehr kompliziert", "Es ersetzt Werbung"], correct: 1, points: 10 },
            { id: "b1-lv-5-3", question: "Wie tr\u00e4gt Storytelling zur Kreativit\u00e4t bei?", options: ["Indem es Fakten pr\u00e4sentiert", "Indem es Menschen anregt, ihre Erfahrungen zu teilen", "Indem es keine Emotionen zul\u00e4sst", "Indem es nur Geschichten aus der Vergangenheit erz\u00e4hlt"], correct: 1, points: 10 },
            { id: "b1-lv-5-4", question: "Was verbessert Storytelling in der Kommunikation?", options: ["Die Kosten", "Die Effizienz und das Erinnern", "Die Anzahl der W\u00f6rter", "Die L\u00e4nge der Geschichten"], correct: 1, points: 10 },
            { id: "b1-lv-5-5", question: "Was verbindet man mit Storytelling?", options: ["Nur negative Erlebnisse", "Fakten und Emotionen", "Nur Daten", "Nur Marketing"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-gr-5-1", question: "Welche Form ist korrekt? \"Wenn ich Zeit h\u00e4tte, __________ ich mehr lesen.\"?", options: ["w\u00fcrde", "will", "k\u00f6nnte", "m\u00f6chte"], correct: 0, points: 10 },
            { id: "b1-gr-5-2", question: "Wie lautet die richtige Pr\u00e4position? \"Ich interessiere mich __________ Kunst.\"?", options: ["f\u00fcr", "an", "in", "zu"], correct: 0, points: 10 },
            { id: "b1-gr-5-3", question: "Setze den richtigen Artikel ein: \"__________ Mensch ist neugierig.\"?", options: ["Der", "Die", "Das", "Ein"], correct: 0, points: 10 },
            { id: "b1-gr-5-4", question: "Welches Wort ist ein Synonym f\u00fcr \"wichtig\"?", options: ["unbedeutend", "bedeutend", "einfach", "schwierig"], correct: 1, points: 10 },
            { id: "b1-gr-5-5", question: "Was ist die korrekte Form? \"Ich habe __________ gegessen.\"?", options: ["ein Apfel", "einen Apfel", "die \u00c4pfel", "\u00c4pfel"], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    6: {
      title: "Aufgabe 6",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "K\u00fcnstliche Intelligenz (KI) ver\u00e4ndert unsere Welt in rasantem Tempo. Viele Menschen sind begeistert von den M\u00f6glichkeiten, die KI bietet, wie etwa personalisierte Empfehlungen in Online-Shops oder intelligente Assistenzsysteme im Alltag. Doch es gibt auch Bedenken: Experten warnen vor den ethischen Implikationen und der m\u00f6glichen Arbeitsplatzverdr\u00e4ngung. Der gesellschaftliche Diskurs \u00fcber die Vor- und Nachteile von KI wird immer intensiver, da viele sich fragen, wie viel Kontrolle wir \u00fcber diese Technologie haben sollten.",
          questions: [
            { id: "b1-lv-6-1", question: "Welche positiven Aspekte der KI werden im Text erw\u00e4hnt?", options: ["Ethische Implikationen", "Personalisierte Empfehlungen", "Arbeitsplatzverdr\u00e4ngung", "Intelligente Assistenzsysteme"], correct: 1, points: 10 },
            { id: "b1-lv-6-2", question: "Was warnen Experten laut dem Text?", options: ["Vor der Digitalisierung", "Vor den ethischen Implikationen", "Vor neuen Technologien", "Vor der Nutzung im Alltag"], correct: 1, points: 10 },
            { id: "b1-lv-6-3", question: "Wie ver\u00e4ndert KI unserer Welt?", options: ["Langsam", "Rasant", "Unbemerkt", "Negativ"], correct: 1, points: 10 },
            { id: "b1-lv-6-4", question: "Was ist ein zentrales Thema im gesellschaftlichen Diskurs \u00fcber KI?", options: ["Die Geschichte der Technologie", "Die Kosten von KI", "Die Kontrolle \u00fcber die Technologie", "Die Verbreitung von KIs"], correct: 2, points: 10 },
            { id: "b1-lv-6-5", question: "Was sorgt f\u00fcr eine zunehmende Diskussion \u00fcber KI?", options: ["Die Begeisterung der Menschen", "Die Arbeitsplatzverdr\u00e4ngung", "Die Risiken der Technologie", "Die M\u00f6glichkeiten der KI"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-gr-6-1", question: "W\u00e4hlen Sie die richtige Form des Verbs: 'Wenn ich mehr Zeit h\u00e4tte, _____ ich mehr lesen.'", options: ["w\u00fcrde", "werde", "wollte", "will"], correct: 0, points: 10 },
            { id: "b1-gr-6-2", question: "Vervollst\u00e4ndigen Sie den Satz: 'Das Buch, _____ du mir empfohlen hast, war sehr spannend.'", options: ["die", "das", "den", "dem"], correct: 1, points: 10 },
            { id: "b1-gr-6-3", question: "Welcher Satz ist grammatikalisch korrekt?", options: ["Ich habe keine Angst, dass er nicht kommt.", "Ich habe keine Angst, dass er kommt nicht.", "Ich habe keine Angst, nicht dass er kommt.", "Ich habe keine Angst das er nicht kommt."], correct: 0, points: 10 },
            { id: "b1-gr-6-4", question: "W\u00e4hlen Sie die richtige Konjunktion: 'Sie wollte ins Kino gehen, _____ es regnete.'", options: ["aber", "und", "oder", "denn"], correct: 0, points: 10 },
            { id: "b1-gr-6-5", question: "Wie lautet die richtige Form: 'Wenn er morgen kommt, _____ wir zusammen essen.'", options: ["gehen", "gingen", "geht", "gehe"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    7: {
      title: "Aufgabe 7",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "In den letzten Jahren hat das Thema Urban Gardening an Bedeutung gewonnen. Immer mehr Menschen nutzen kleine Fl\u00e4chen in St\u00e4dten, um ihre eigenen Obst- und Gem\u00fcsepflanzen anzubauen. Dies f\u00f6rdert nicht nur die Nachhaltigkeit, sondern verbessert auch die Lebensqualit\u00e4t in urbanen Gebieten. Die Idee, Pflanzen in Gemeinschaftsg\u00e4rten zu ziehen, bringt Nachbarn zusammen und f\u00f6rdert den sozialen Austausch. Urban Gardening ist nicht nur ein Trend, sondern ein Weg, um frische Lebensmittel direkt vor der Haust\u00fcr zu haben.",
          questions: [
            { id: "b1-lv-7-1", question: "Was ist ein Hauptvorteil von Urban Gardening?", options: ["A) Verbesserung der Luftqualit\u00e4t", "B) F\u00f6rderung der Nachbarschaft", "C) Erh\u00f6hung der Mieten", "D) Verringerung der Freizeitaktivit\u00e4ten"], correct: 1, points: 10 },
            { id: "b1-lv-7-2", question: "Was sollen Menschen in st\u00e4dtischen Gebieten anbauen?", options: ["A) Blumen", "B) Gem\u00fcse und Obst", "C) Str\u00e4ucher", "D) B\u00e4ume"], correct: 1, points: 10 },
            { id: "b1-lv-7-3", question: "Wie beeinflusst Urban Gardening die Lebensqualit\u00e4t?", options: ["A) Es hat keinen Einfluss", "B) Es verbessert sie", "C) Es verschlechtert sie", "D) Es macht die St\u00e4dte lauter"], correct: 1, points: 10 },
            { id: "b1-lv-7-4", question: "Was wird durch gemeinsames G\u00e4rtnern gef\u00f6rdert?", options: ["A) Einsamkeit", "B) Soziale Isolation", "C) Sozialer Austausch", "D) Konkurrenz"], correct: 2, points: 10 },
            { id: "b1-lv-7-5", question: "Ist Urban Gardening nur ein vor\u00fcbergehender Trend?", options: ["A) Ja", "B) Nein", "C) Vielleicht", "D) Nur in bestimmten St\u00e4dten"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b1-gr-7-1", question: "W\u00e4hlen Sie die korrekte Form des Verbs: Ich ___ (m\u00f6gen) frisches Gem\u00fcse.", options: ["A) m\u00f6gen", "B) mag", "C) mochte", "D) m\u00f6ge"], correct: 1, points: 10 },
            { id: "b1-gr-7-2", question: "Wie lautet der korrekte Satz: Wenn ich Zeit h\u00e4tte, ___ (gehen) ich ins Fitnessstudio.", options: ["A) gehe", "B) gegangen", "C) ging", "D) gehen"], correct: 3, points: 10 },
            { id: "b1-gr-7-3", question: "W\u00e4hlen Sie die richtige Pr\u00e4position: Ich interessiere mich ___ G\u00e4rtnern.", options: ["A) f\u00fcr", "B) an", "C) mit", "D) \u00fcber"], correct: 0, points: 10 },
            { id: "b1-gr-7-4", question: "Welche Form des Adjektivs ist korrekt: Das ist ein ___ (sch\u00f6n) Garten.", options: ["A) sch\u00f6ne", "B) sch\u00f6ner", "C) sch\u00f6nes", "D) sch\u00f6nerer"], correct: 0, points: 10 },
            { id: "b1-gr-7-5", question: "W\u00e4hlen Sie die richtige Zeitform: Er ___ (arbeiten) schon seit zwei Jahren im Garten.", options: ["A) arbeitet", "B) arbeitete", "C) hat gearbeitet", "D) arbeite"], correct: 2, points: 10 },
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
          text: "Die Philosophie des Unbehagens besch\u00e4ftigt sich mit den inneren Konflikten des modernen Menschen. Sie beleuchtet, wie technologische Fortschritte und gesellschaftliche Ver\u00e4nderungen oft zu einem Gef\u00fchl der Entfremdung f\u00fchren. In einer Welt, die von st\u00e4ndigen Informationen und der Suche nach Effizienz gepr\u00e4gt ist, stellt sich die Frage, ob der Mensch noch in der Lage ist, echte Zufriedenheit zu finden. Viele Philosophen argumentieren, dass das Streben nach individueller Selbstverwirklichung paradoxerweise zu einer tiefen inneren Leere f\u00fchren kann.",
          questions: [
            { id: "b2-lv-4-1", question: "Was ist das Hauptthema des Textes?", options: ["Die Vorteile technologischer Fortschritte", "Die Suche nach Zufriedenheit", "Die Rolle der Gesellschaft", "Der Einfluss von Philosophie auf das t\u00e4gliche Leben"], correct: 1, points: 10 },
            { id: "b2-lv-4-2", question: "Wie beeinflussen technologische Fortschritte den Menschen laut dem Text?", options: ["Sie f\u00fchren zu mehr Zufriedenheit", "Sie verursachen Entfremdung", "Sie verbessern die Kommunikation", "Sie haben keinen Einfluss"], correct: 1, points: 10 },
            { id: "b2-lv-4-3", question: "Was argumentieren viele Philosophen \u00fcber Selbstverwirklichung?", options: ["Sie ist immer positiv", "Sie f\u00fchrt zu echtem Gl\u00fcck", "Sie kann innere Leere verursachen", "Sie ist nicht relevant f\u00fcr die moderne Gesellschaft"], correct: 2, points: 10 },
            { id: "b2-lv-4-4", question: "Welches Gef\u00fchl wird im Text als zentrales Problem des modernen Menschen beschrieben?", options: ["Einsamkeit", "Stress", "Unbehagen", "Zufriedenheit"], correct: 2, points: 10 },
            { id: "b2-lv-4-5", question: "Was k\u00f6nnte eine L\u00f6sung f\u00fcr das im Text beschriebene Unbehagen sein?", options: ["Mehr Technologie nutzen", "Sich auf zwischenmenschliche Beziehungen konzentrieren", "Weniger Informationen konsumieren", "Sich von der Gesellschaft isolieren"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-gr-4-1", question: "Welcher Satz ist grammatikalisch korrekt?", options: ["Ich w\u00fcnsche, dass er mehr Zeit hat.", "Ich w\u00fcnscht, dass er mehr Zeit hat.", "Ich w\u00fcnsche, dass er mehr Zeit hatte.", "Ich w\u00fcnscht, dass er mehr Zeit hatte."], correct: 0, points: 10 },
            { id: "b2-gr-4-2", question: "Welcher Satz verwendet den Konjunktiv II korrekt?", options: ["Wenn ich reich w\u00e4re, w\u00fcrde ich reisen.", "Wenn ich reich bin, w\u00fcrde ich reisen.", "Wenn ich reich gewesen bin, w\u00fcrde ich reisen.", "Wenn ich reicher w\u00e4re, reise ich."], correct: 0, points: 10 },
            { id: "b2-gr-4-3", question: "Welcher Satz enth\u00e4lt einen Fehler in der Verwendung des Artikels?", options: ["Die Liebe ist wichtig.", "Das Leben ist kurz.", "Ich habe einen Hund.", "Ich sehe die Katze im Garten."], correct: 2, points: 10 },
            { id: "b2-gr-4-4", question: "W\u00e4hlen Sie die richtige Form des Verbs:", options: ["Er hat gegessen", "Er hat esse", "Er hat essen", "Er hat essend"], correct: 0, points: 10 },
            { id: "b2-gr-4-5", question: "Welcher Satz ist im Passiv formuliert?", options: ["Der Lehrer erkl\u00e4rt die Grammatik.", "Die Grammatik wird vom Lehrer erkl\u00e4rt.", "Die Studenten lernen die Grammatik.", "Die Grammatik erkl\u00e4rt die Studenten."], correct: 1, points: 10 },
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
          text: "Die Quantenmechanik hat in den letzten Jahrzehnten unser Verst\u00e4ndnis der physikalischen Realit\u00e4t revolutioniert. Sie beschreibt das Verhalten von Teilchen auf subatomarer Ebene, wo klassische Physik nicht mehr gilt. In dieser Welt scheinen die Gesetze der Logik und die Vorstellung von Kausalit\u00e4t oft nicht mehr zu gelten. Forscher sind fasziniert von Ph\u00e4nomenen wie Verschr\u00e4nkung und Superposition, die den Versuch, die Natur zu begreifen, weiter verkomplizieren.",
          questions: [
            { id: "b2-lv-5-1", question: "Was beschreibt die Quantenmechanik?", options: ["Das Verhalten von Planeten", "Das Verhalten von Teilchen auf subatomarer Ebene", "Die Schwingungen von Wellen", "Die Bewegung von Fahrzeugen"], correct: 1, points: 10 },
            { id: "b2-lv-5-2", question: "Warum gilt die klassische Physik nicht mehr?", options: ["Weil es keine Gesetze gibt", "Weil sie nur auf gro\u00dfen Objekten funktioniert", "Weil sie nicht genau genug ist", "Weil sie die Quantenmechanik nicht erkl\u00e4ren kann"], correct: 1, points: 10 },
            { id: "b2-lv-5-3", question: "Was sind zwei Ph\u00e4nomene der Quantenmechanik?", options: ["Verschr\u00e4nkung und Superposition", "Gravitation und Magnetismus", "Energie und Masse", "Kraft und Druck"], correct: 0, points: 10 },
            { id: "b2-lv-5-4", question: "Wie reagieren Forscher auf die Quantenmechanik?", options: ["Mit Ablehnung", "Mit Faszination", "Mit Gleichg\u00fcltigkeit", "Mit Verwirrung"], correct: 1, points: 10 },
            { id: "b2-lv-5-5", question: "Was kompliziert den Versuch, die Natur zu begreifen?", options: ["Die Anzahl der Forscher", "Die Komplexit\u00e4t der Quantenmechanik", "Die Menge an Daten", "Die Verwendung von Technologien"], correct: 1, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-gr-5-1", question: "Welche Form ist hier richtig? \"Es ist wichtig, dass er ___ .\"", options: ["kommt", "kommen", "gekommen", "kamen"], correct: 0, points: 10 },
            { id: "b2-gr-5-2", question: "Setze den richtigen Artikel ein: \"___ Quantenmechanik ist faszinierend.\"", options: ["Der", "Die", "Das", "Den"], correct: 1, points: 10 },
            { id: "b2-gr-5-3", question: "W\u00e4hle die korrekte Konjunktivform: \"Ich w\u00fcnschte, ich ___ mehr Zeit.\"", options: ["habe", "h\u00e4tte", "hatte", "h\u00e4tte gehabt"], correct: 1, points: 10 },
            { id: "b2-gr-5-4", question: "Wie lautet die richtige Pr\u00e4position? \"Interessiert ___ die Quantenmechanik?\"", options: ["an", "f\u00fcr", "\u00fcber", "in"], correct: 0, points: 10 },
            { id: "b2-gr-5-5", question: "Welcher Satz ist grammatikalisch korrekt?", options: ["Er glaubt, dass die Quantenphysik komplex ist.", "Er glaubte, dass die Quantenphysik komplex ist.", "Er glaubt, die Quantenphysik ist komplex.", "Er glauben, dass die Quantenphysik komplex ist."], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    6: {
      title: "Aufgabe 6",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "In einer zunehmend digitalisierten Welt spielt die K\u00fcnstliche Intelligenz (KI) eine entscheidende Rolle in vielen Bereichen unseres Lebens. W\u00e4hrend einige Menschen die Vorteile von KI, wie Effizienzsteigerung und Datenanalyse, sch\u00e4tzen, gibt es auch berechtigte Bedenken hinsichtlich der ethischen Implikationen und der potenziellen Auswirkungen auf die Gesellschaft. Insbesondere die Frage, ob KI Entscheidungen trifft, die menschliche Moral und Ethik ber\u00fccksichtigen, wird intensiver diskutiert. Diese Debatten zeigen die Notwendigkeit eines verantwortungsvollen Umgangs mit dieser Technologie.",
          questions: [
            { id: "b2-lv-6-1", question: "Was sind die Vorteile von K\u00fcnstlicher Intelligenz?", options: ["Ethische Implikationen", "Effizienzsteigerung", "Datenanalyse", "Beide B und C"], correct: 3, points: 10 },
            { id: "b2-lv-6-2", question: "Welche Bedenken gibt es hinsichtlich K\u00fcnstlicher Intelligenz?", options: ["Steigerung der Effizienz", "Ethische Implikationen", "Bessere Datenanalyse", "Keine Bedenken"], correct: 1, points: 10 },
            { id: "b2-lv-6-3", question: "Was wird in den Debatten \u00fcber K\u00fcnstliche Intelligenz hervorgehoben?", options: ["Die Notwendigkeit von mehr KI", "Der verantwortungsvolle Umgang mit Technologie", "Die Abh\u00e4ngigkeit von Menschen", "Die Erschaffung von mehr Arbeitspl\u00e4tzen"], correct: 1, points: 10 },
            { id: "b2-lv-6-4", question: "Welches Thema wird in der Diskussion um K\u00fcnstliche Intelligenz betont?", options: ["Technologische Entwicklungen", "Menschliche Moral und Ethik", "Globalisierung", "Umweltfragen"], correct: 1, points: 10 },
            { id: "b2-lv-6-5", question: "Wie beeinflusst K\u00fcnstliche Intelligenz unser Leben?", options: ["Erh\u00f6ht die Arbeitslosigkeit", "Spielt keine Rolle", "Hat einen gro\u00dfen Einfluss", "Ver\u00e4ndert nichts"], correct: 2, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-gr-6-1", question: "Welcher Satz ist korrekt?", options: ["Es ist wichtig, dass man die ethischen Fragen ber\u00fccksichtigt.", "Es ist wichtig, dass man die ethischen Fragen ber\u00fccksicht.", "Es ist wichtig, dass man die ethischen Fragen ber\u00fccksichtige.", "Es ist wichtig, dass man die ethischen Fragen ber\u00fccksichtigt haben."], correct: 0, points: 10 },
            { id: "b2-gr-6-2", question: "W\u00e4hlen Sie die richtige Form des Verbs: \u201eWenn ich mehr Zeit h\u00e4tte, __________ ich mehr lesen.\u201c", options: ["w\u00fcrde", "werde", "wollte", "h\u00e4tte"], correct: 0, points: 10 },
            { id: "b2-gr-6-3", question: "Welches Wort ist ein Synonym f\u00fcr 'entscheidend'?", options: ["wichtig", "neutral", "unbedeutend", "unentschieden"], correct: 0, points: 10 },
            { id: "b2-gr-6-4", question: "Welcher Satz enth\u00e4lt einen grammatikalischen Fehler?", options: ["Die Debatte \u00fcber K\u00fcnstliche Intelligenz ist komplex.", "Viele Menschen haben eine unterschiedliche Meinung.", "K\u00fcnstliche Intelligenz beeinflusst unsere Leben.", "Ethische Fragen m\u00fcssen ernst genommen werden."], correct: 2, points: 10 },
            { id: "b2-gr-6-5", question: "W\u00e4hlen Sie die korrekte Pr\u00e4position: \u201eDie Diskussion _______ K\u00fcnstlicher Intelligenz ist aktuell.\u201c", options: ["\u00fcber", "mit", "von", "in"], correct: 0, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
    7: {
      title: "Aufgabe 7",
      sections: [
        {
          id: "leseverstehen",
          title: "Leseverstehen",
          text: "In der heutigen digitalen Welt stellt die zunehmende Automatisierung von Entscheidungen eine bedeutende Herausforderung dar. Algorithmen werden oft eingesetzt, um komplexe Probleme zu l\u00f6sen, doch ihre Intransparenz kann zu einem Verlust an Vertrauen f\u00fchren. Die Frage, wie viel Entscheidungsfreiheit wir Menschen den Maschinen \u00fcberlassen sollten, ist zentral f\u00fcr die ethische Diskussion \u00fcber k\u00fcnstliche Intelligenz. In diesem Kontext wird auch die Verantwortung f\u00fcr Fehlentscheidungen immer wieder neu verhandelt.",
          questions: [
            { id: "b2-lv-7-1", question: "Was ist eine der zentralen Herausforderungen der Automatisierung?", options: ["Verlust an Vertrauen", "Erh\u00f6hung der Effizienz", "Verringerung der Kosten", "Einfache Probleml\u00f6sung"], correct: 0, points: 10 },
            { id: "b2-lv-7-2", question: "Welches Thema wird in der ethischen Diskussion \u00fcber k\u00fcnstliche Intelligenz behandelt?", options: ["Die Rolle der Menschen", "Die Programmierung der Algorithmen", "Die Intransparenz von Entscheidungen", "Die Entwicklung neuer Technologien"], correct: 2, points: 10 },
            { id: "b2-lv-7-3", question: "Was wird als Folge der Intransparenz von Entscheidungen angesehen?", options: ["Mehr Vertrauen in Algorithmen", "Weniger Verantwortung f\u00fcr Menschen", "Verlust an Vertrauen", "Bessere Kontrolle \u00fcber Prozesse"], correct: 2, points: 10 },
            { id: "b2-lv-7-4", question: "Wie wird die Verantwortung f\u00fcr Fehlentscheidungen beschrieben?", options: ["Sie bleibt unver\u00e4ndert", "Sie wird neu verhandelt", "Sie wird an die Algorithmen \u00fcbertragen", "Sie wird nicht anerkannt"], correct: 1, points: 10 },
            { id: "b2-lv-7-5", question: "Was ist ein m\u00f6gliches Ergebnis der Diskussion \u00fcber Automatisierung?", options: ["Erh\u00f6hung des menschlichen Einflusses", "Einschr\u00e4nkung der Maschinen", "Vollst\u00e4ndige Automatisierung aller Entscheidungen", "Verdr\u00e4ngung traditioneller Berufe"], correct: 0, points: 10 },
          ],
        },
        {
          id: "grammatik",
          title: "Grammatik",
          text: null,
          questions: [
            { id: "b2-gr-7-1", question: "Welcher Satz ist im Passiv geschrieben?", options: ["Die Maschinen \u00fcbernehmen die Entscheidungen.", "Die Entscheidungen werden von Maschinen \u00fcbernommen.", "Menschen sollten die Kontrolle behalten.", "Die Verantwortung wird neu verhandelt."], correct: 1, points: 10 },
            { id: "b2-gr-7-2", question: "Welcher Satz verwendet den Konjunktiv II?", options: ["Wenn ich die Wahl h\u00e4tte, w\u00fcrde ich mehr Transparenz verlangen.", "Die Algorithmen sind sehr komplex.", "Es gibt viele verschiedene Meinungen dar\u00fcber.", "Die Verantwortung bleibt bei den Menschen."], correct: 0, points: 10 },
            { id: "b2-gr-7-3", question: "Welcher Satz enth\u00e4lt ein Adverb?", options: ["Die Algorithmen handeln schnell.", "Die Entscheidungen sind eindeutig.", "Menschen m\u00fcssen Verantwortung \u00fcbernehmen.", "Die Maschinen arbeiten effizient."], correct: 0, points: 10 },
            { id: "b2-gr-7-4", question: "In welchem Satz ist die Grammatik fehlerhaft?", options: ["Die Entscheidung wurde getroffen von den Algorithmen.", "Die Maschinen lernen st\u00e4ndig dazu.", "K\u00fcnstliche Intelligenz ver\u00e4ndert unsere Welt.", "Wir m\u00fcssen die Risiken erkennen."], correct: 0, points: 10 },
            { id: "b2-gr-7-5", question: "Welcher Satz ist im Futur geschrieben?", options: ["Wir diskutieren \u00fcber die ethischen Fragen.", "Die Maschinen werden in Zukunft noch wichtiger sein.", "Es ist notwendig, Verantwortung zu \u00fcbernehmen.", "Die Menschen lernen von ihren Fehlern."], correct: 1, points: 10 },
          ],
        },
      ],
      maxPoints: 100,
    },
  },
};
